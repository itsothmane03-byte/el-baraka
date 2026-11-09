// Botanical plate: persistent masks, interruptible movement and pointer intent.
// Research and tuning notes: docs/hero-motion.md. No animation dependency.

// Exact critically damped spring: preserve position AND velocity on retarget.
// Seconds, not frame counts, keep the response consistent at 60/120/144 Hz.
export function springStep(state, target, dt, frequency = 18) {
  const offset = state.x - target, c = state.v + frequency * offset;
  const decay = Math.exp(-frequency * dt);
  state.x = target + (offset + c * dt) * decay;
  state.v = (state.v - frequency * c * dt) * decay;
  if (Math.abs(state.x - target) < .0001 && Math.abs(state.v) < .001) {
    state.x = target; state.v = 0;
  }
}

// A slow decode must never replace a newer choice or a cancelled hover.
export function latestImageRequest(load, reveal) {
  let revision = 0;
  return {
    cancel() { revision++; },
    async show(id, animate = true) {
      const request = ++revision;
      try { await load(id); } catch { return false; }
      if (request !== revision) return false;
      reveal(id, animate);
      return true;
    }
  };
}

export function createHeroMotion({ hero, plate, list, categories, initial = 'plantes' }) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const cats = new Map(categories.filter(c => c.plate).map(c => [c.id, c]));
  const images = new Map(), plants = new Map();
  const disc = plate.querySelector('.disc'), inner = plate.querySelector('.inner');
  const px = { x: 0, v: 0 }, py = { x: 0, v: 0 };
  let tx = 0, ty = 0, selected = null, raf = 0, lastFrame = 0;
  let onScreen = true, bounds = null, timer = 0, owner = null;
  let point = { x: 0, y: 0 }, sampled = point, entered = 0;
  const quiet = () => reduce.matches || document.hidden || !onScreen;

  function load(id) {
    if (!images.has(id)) {
      const image = new Image();
      image.decoding = 'async';
      image.fetchPriority = id === initial ? 'high' : 'low';
      image.src = `${cats.get(id).plate}.png`;
      const promise = image.decode().catch(error => { images.delete(id); throw error; });
      images.set(id, promise);
    }
    return images.get(id);
  }

  function makePlant(id) {
    if (plants.has(id)) return plants.get(id);
    const c = cats.get(id), r = c.plateRatio || .6;
    const h = Math.min(150, 122 / r) * (c.plateScale || 1), w = h * r;
    const pair = ['out', 'in'].map(side => {
      const el = document.createElement('span');
      el.className = `plant ${side}`;
      el.dataset.plant = id;
      el.style.setProperty('--pm', `url("${c.plate}.png")`);
      el.style.setProperty('--ph', h + '%'); el.style.setProperty('--pw', w + '%');
      el.style.setProperty('--pl', (53 - w / 2) + '%');
      el.style.setProperty('--pt', ((r > 1 ? 50 - h / 2 + 4 : 50 - h / 2 - 2) + (c.plateY || 0)) + '%');
      if (side === 'out') plate.insertBefore(el, disc); else inner.appendChild(el);
      return el;
    });
    const plant = { id, pair, alpha: 0, pose: { x: 0, v: 0 } };
    plants.set(id, plant);
    return plant;
  }

  function paint(plant) {
    const reveal = plant.pose.x, hidden = plant.alpha === 0;
    const transform = `translate3d(${(px.x * 10).toFixed(3)}px,${(py.x * 7 + (1 - reveal) * 14).toFixed(3)}px,0) rotate(${(px.x * .65 - (1 - reveal) * 1.2).toFixed(3)}deg) scale(${(.975 + reveal * .025).toFixed(5)})`;
    for (const el of plant.pair) {
      el.style.opacity = plant.alpha.toFixed(5);
      el.style.visibility = hidden ? 'hidden' : 'visible';
      el.style.transform = transform;
    }
  }

  function settle() {
    cancelAnimationFrame(raf); raf = 0; lastFrame = 0;
    px.x = py.x = px.v = py.v = tx = ty = 0;
    plants.forEach(p => {
      p.alpha = p.pose.x = p.id === selected ? 1 : 0;
      p.pose.v = 0; paint(p);
    });
  }

  function frame(now) {
    raf = 0;
    if (quiet()) { settle(); return; }
    const dt = lastFrame ? Math.min((now - lastFrame) / 1000, .064) : 1 / 60;
    lastFrame = now;
    springStep(px, tx, dt, 14); springStep(py, ty, dt, 14);
    let moving = px.x !== tx || py.x !== ty;
    plants.forEach(p => {
      const target = p.id === selected ? 1 : 0;
      if (!target && !p.alpha && !p.pose.x) return;
      // Monotonic opacity avoids spring overshoot/negative opacity on reversals.
      p.alpha = target + (p.alpha - target) * Math.exp(-13 * dt);
      if (Math.abs(p.alpha - target) < .001) p.alpha = target;
      springStep(p.pose, target, dt);
      paint(p);
      moving ||= p.alpha !== target || p.pose.x !== target;
    });
    if (moving) raf = requestAnimationFrame(frame); else lastFrame = 0;
  }

  function wake() {
    if (quiet()) { settle(); return; }
    if (!raf) raf = requestAnimationFrame(frame);
  }

  function markPreview() {
    list.querySelectorAll('.rrow').forEach(row => {
      row.classList.toggle('previewing', row.dataset.cat === selected);
    });
  }

  function reveal(id, animate) {
    if (selected === id) return;
    const first = selected === null;
    makePlant(id);
    selected = id; plate.dataset.preview = id;
    markPreview();
    if (first || !animate || quiet()) settle(); else wake();
  }
  const request = latestImageRequest(load, reveal);

  function cancelIntent() {
    clearTimeout(timer); timer = 0; owner = null;
    request.cancel();
  }

  function select(id, animate = true) {
    cancelIntent();
    if (!cats.has(id)) return Promise.resolve(false);
    return request.show(id, animate);
  }

  function inspectIntent() {
    timer = 0;
    if (!owner) return;
    const distance = Math.hypot(point.x - sampled.x, point.y - sampled.y);
    // Stable pointer: 70ms. Moving across a row: at most 210ms.
    // Inspired by hoverIntent's distance sampling; no jQuery/code dependency.
    if (distance < 7 || performance.now() - entered >= 210) {
      request.show(owner.dataset.cat);
    } else {
      sampled = { ...point };
      timer = setTimeout(inspectIntent, 70);
    }
  }

  function bindRows() {
    cancelIntent();
    markPreview();
    list.querySelectorAll('.rrow').forEach(row => {
      row.addEventListener('pointerenter', e => {
        if (!fine.matches || e.pointerType === 'touch') return;
        cancelIntent(); owner = row;
        entered = performance.now(); point = sampled = { x: e.clientX, y: e.clientY };
        // Decode on intent, but do not reveal until the hover is deliberate.
        load(row.dataset.cat).catch(() => {});
        timer = setTimeout(inspectIntent, 70);
      });
      row.addEventListener('pointermove', e => { point = { x: e.clientX, y: e.clientY }; });
      row.addEventListener('pointerleave', () => { if (owner === row) cancelIntent(); });
      row.addEventListener('focus', () => {
        if (row.matches(':focus-visible')) select(row.dataset.cat);
      });
      row.addEventListener('blur', () => { if (!owner) request.cancel(); });
    });
  }

  hero.addEventListener('pointermove', e => {
    if (!fine.matches || e.pointerType === 'touch' || quiet()) return;
    bounds ||= hero.getBoundingClientRect();
    tx = Math.max(-.5, Math.min(.5, (e.clientX - bounds.left) / bounds.width - .5));
    ty = Math.max(-.5, Math.min(.5, (e.clientY - bounds.top) / bounds.height - .5));
    wake();
  }, { passive: true });
  hero.addEventListener('pointerleave', () => { tx = ty = 0; wake(); });
  const invalidateBounds = () => { bounds = null; };
  addEventListener('resize', invalidateBounds, { passive: true });
  addEventListener('scroll', invalidateBounds, { passive: true });
  new ResizeObserver(invalidateBounds).observe(hero);
  new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    if (!onScreen) { cancelIntent(); settle(); }
  }).observe(hero);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelIntent(); settle(); }
  });
  reduce.addEventListener('change', () => { if (reduce.matches) settle(); });
  fine.addEventListener('change', () => { cancelIntent(); tx = ty = 0; wake(); });

  // Initial artwork is independent of transient hovers: cancelling a fast pass
  // before the first decode must not leave an empty plate on a cold connection.
  load(initial).then(() => { if (!selected) reveal(initial, false); }).catch(() => {});
  return { select, bindRows, get current() { return selected; }, get reduced() { return reduce.matches; } };
}
