/*
 * Producer honey labels
 * ---------------------
 * A label system for the cooperative's own jars. It is NOT El Baraka branding:
 * different type (Amiri + Reem Kufi), brown ink, and one code colour per honey.
 * It reuses the drawing helpers from baraka.js.
 *
 * Designed for three reading distances:
 *   3 m    colour block + one big word (the flower)          → find the honey
 *   1 m    «عسل», French name, Miel du Maroc, weight            → confirm it
 *   30 cm  nutrition, packer, ONSSA n°, lot, dates, engraving   → trust it
 *
 * Pieces: label() 200 × 60 mm wrap-around · seal() 40 × 85 mm lid seal
 *         jar() a life-size jar mock-up, scaled with --mm, for shelf tests
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./baraka.js'));
  else root.Producer = factory(root.ElBaraka);
})(typeof self !== 'undefined' ? self : this, function (E) {
  'use strict';
  const { rng, quad, quadTan, hexPath, guillocheRing, pfundColor } = E;
  const P = (n) => Math.round(n * 100) / 100;
  const pt = (a) => `${P(a[0])} ${P(a[1])}`;
  const INK = '#3a2410', CREAM = '#fbf7ee';

  const FONTS_URL = 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Reem+Kufi:wght@500;700&family=IM+Fell+English+SC&family=IBM+Plex+Mono:wght@400;500&family=Readex+Pro:wght@300;400;500&display=swap';

  /* One code colour per honey. Hues are spread so neighbours never look alike,
     and the big word carries the meaning for anyone who can't tell colours apart. */
  const BLANK_NUT = { kj: '[ ]', kcal: '[ ]', fat: '[ ]', carb: '[ ]', prot: '[ ]', salt: '[ ]' };
  const HONEYS = [
    { id: 'ora', ar: 'عسل البرتقال', big: 'البرتقال', fr: 'Miel d’oranger', acc: '#bf5f17', flora: 'orange', fit: 0.92, pfund: 16,
      nut: { kj: '1377', kcal: '324', fat: '0,0', carb: '80,06', prot: '0,4', salt: '0,0' } },
    { id: 'thy', ar: 'عسل الزعتر', big: 'الزعتر', fr: 'Miel de thym', acc: '#634987', flora: 'thyme', fit: 1, pfund: 64 },
    { id: 'zak', ar: 'عسل الزقوم', big: 'الزقوم', fr: 'Miel d’euphorbe', acc: '#9c2f1d', flora: 'euphorbia', fit: 1, pfund: 72 },
    { id: 'car', ar: 'عسل الخروب', big: 'الخروب', fr: 'Miel de caroube', acc: '#4a2c1c', flora: 'carob', fit: 1, pfund: 118 },
    { id: 'euc', ar: 'عسل الكاليتوس', big: 'الكاليتوس', fr: 'Miel d’eucalyptus', acc: '#2c6965', flora: 'eucalyptus', fit: 0.78, pfund: 82 },
    { id: 'mul', ar: 'عسل الأزهار', big: 'الأزهار', fr: 'Miel toutes fleurs', acc: '#557629', flora: 'meadow', fit: 1, pfund: 48 }
  ];

  const BLANK = {
    brandAr: '[اسم التعاونية]', brandFr: '[NOM DE LA COOPÉRATIVE]', phone: '[téléphone]',
    packerAr: '[اسم المعبّئ]', packerFr: '[conditionneur]', auth: '[n° ONSSA]',
    lot: '[lot]', prod: '[mm/aaaa]', ddm: '[mm/aaaa]'
  };

  /* ---------- engraved flora, one per floral source (drawn in a 122 × 82 box) ---------- */
  function leaf(x, y, ang, L, w, veins) {
    let v = `M0 -1L0 ${P(-L * 0.9)}`;
    for (let k = 1; k <= (veins || 0); k++) {
      const yy = -L * (0.15 + (k * 0.7) / (veins + 1));
      v += `M0 ${P(yy)}l${P(w * 0.6)} ${P(-L * 0.08)}M0 ${P(yy)}l${P(-w * 0.6)} ${P(-L * 0.08)}`;
    }
    return `<g transform="translate(${P(x)} ${P(y)}) rotate(${P(ang)})"><path class="f-lf" d="M0 0C${P(w)} ${P(-L * 0.25)} ${P(w * 0.8)} ${P(-L * 0.8)} 0 ${P(-L)}C${P(-w * 0.8)} ${P(-L * 0.8)} ${P(-w)} ${P(-L * 0.25)} 0 0Z"/>` +
      (L > 5 ? `<path class="f-vn" d="${v}"/>` : '') + `</g>`;
  }
  const tangentDeg = (p0, p1, p2, t) => { const g = quadTan(p0, p1, p2, t); return Math.atan2(g[1], g[0]) * 180 / Math.PI + 90; };
  const curve = (p0, p1, p2) => `<path class="f-st" d="M${pt(p0)}Q${pt(p1)} ${pt(p2)}"/>`;

  function flower5(R, cx, cy, r, rot) {
    let g = `<g transform="translate(${cx} ${cy}) rotate(${rot})">`;
    for (let k = 0; k < 5; k++) {
      const l = r * (0.92 + R() * 0.16), w = r * 0.4;
      g += `<g transform="rotate(${P(k * 72 + (R() - 0.5) * 8)})"><path class="f-pt" d="M0 0C${P(w)} ${P(-l * 0.3)} ${P(w * 0.85)} ${P(-l)} 0 ${P(-l)}C${P(-w * 0.85)} ${P(-l)} ${P(-w)} ${P(-l * 0.3)} 0 0Z"/><path class="f-pl" d="M0 ${P(-l * 0.28)}L0 ${P(-l * 0.8)}"/></g>`;
    }
    for (let k = 0; k < 10; k++) {
      const a = (k * 36 + R() * 10) * Math.PI / 180, rr = r * (0.42 + R() * 0.12);
      g += `<path class="f-sm" d="M0 0L${P(Math.cos(a) * rr)} ${P(Math.sin(a) * rr)}"/><circle class="f-an" cx="${P(Math.cos(a) * rr)}" cy="${P(Math.sin(a) * rr)}" r=".55"/>`;
    }
    return g + `<circle class="f-ct" r="${P(r * 0.18)}"/></g>`;
  }
  const bud = (x, y, a, rx = 2.4, ry = 4.6) => `<g transform="translate(${x} ${y}) rotate(${a})"><ellipse class="f-pt" rx="${rx}" ry="${ry}"/><path class="f-pl" d="M0 ${-ry * 0.8}L0 ${ry * 0.8}"/></g>`;

  const FLORA = {
    orange(R) {
      const br = [[6, 64], [52, 52], [114, 12]], on = (t) => quad(br[0], br[1], br[2], t);
      const tw0 = on(0.46);
      let o = curve(...br) + curve(tw0, [50, 34], [56, 9]);
      [[0.16, 1, 30], [0.33, -1, 27], [0.6, 1, 24], [0.76, -1, 19]].forEach(([t, side, L]) => {
        const p = on(t); o += leaf(p[0], p[1], tangentDeg(...br, t) + side * (58 + R() * 10), L, L * 0.36, 4);
      });
      const stalk = (a, b) => curve(a, [(a[0] + b[0]) / 2 + 2, (a[1] + b[1]) / 2], b);
      o += stalk(on(0.86), [99, 21]) + stalk(on(0.66), [80, 43]) + stalk(on(0.97), [112, 3]) + stalk(on(0.36), [36, 40]) + stalk(on(0.6), [66, 24]);
      o += flower5(R, 99, 21, 12, 12) + flower5(R, 57, 10, 10, -20) + flower5(R, 80, 43, 9, 40);
      return o + bud(112, 3, 20) + bud(36, 40, -25) + bud(66, 24, 5);
    },
    thyme(R) {
      let o = '';
      for (let i = 0; i < 7; i++) {
        const f = i / 6 - 0.5, a = (f * 96 + (R() - 0.5) * 10) * Math.PI / 180;
        const L = 50 + (1 - Math.abs(f) * 1.3) * 16 + R() * 6;
        const p0 = [61 + f * 8, 79], p2 = [61 + Math.sin(a) * L, 79 - Math.cos(a) * L], p1 = [(p0[0] + p2[0]) / 2 + f * 12, (p0[1] + p2[1]) / 2 + 4];
        o += curve(p0, p1, p2);
        for (let j = 0; j < 9; j++) {
          const t = 0.16 + j * 0.08, q = quad(p0, p1, p2, t), d = tangentDeg(p0, p1, p2, t);
          o += leaf(q[0], q[1], d + 50, 4 + R() * 1.4, 1.5) + leaf(q[0], q[1], d - 50, 4 + R() * 1.4, 1.5);
        }
        for (let k = 0; k < 13; k++) {
          const aa = R() * Math.PI * 2, rr = Math.sqrt(R()) * 4.2;
          o += `<circle class="${k % 3 ? 'f-pt' : 'f-an'}" cx="${P(p2[0] + Math.cos(aa) * rr)}" cy="${P(p2[1] - 1.5 + Math.sin(aa) * rr)}" r="${P(0.9 + R() * 0.6)}"/>`;
        }
      }
      return o;
    },
    euphorbia(R) {
      // Euphorbia resinifera: square, spined columns with tiny yellow cyathia on top
      let o = '';
      [[24, 44, 9], [38, 60, 10], [54, 72, 11], [70, 64, 10], [86, 52, 9], [100, 38, 8], [112, 28, 7]].forEach(([x, h, w], i) => {
        const y0 = 80, y1 = y0 - h, l = x - w / 2, r = x + w / 2;
        o += `<path class="f-pt" d="M${l} ${y0}L${l} ${y1 + w / 2}Q${l} ${y1} ${x} ${y1}Q${r} ${y1} ${r} ${y1 + w / 2}L${r} ${y0}"/>`;
        o += `<path class="f-pl" d="M${x} ${y1 + 2.5}L${x} ${y0}"/>`;
        let sp = '';
        for (let y = y1 + 4.5; y < y0 - 2; y += 4.4) sp += `M${l} ${P(y)}l-1.7 -1.3M${l} ${P(y)}l-1.7 1.3M${r} ${P(y)}l1.7 -1.3M${r} ${P(y)}l1.7 1.3`;
        o += `<path class="f-sm" d="${sp}"/>`;
        if (i % 2 === 0) for (let k = -1; k <= 1; k++) o += `<circle class="f-an" cx="${P(x + k * 2.7)}" cy="${P(y1 - 1.7 - (k ? 0 : 1.3))}" r="1.2"/>`;
      });
      return o;
    },
    carob(R) {
      const br = [[0, 16], [60, 2], [122, 20]], on = (t) => quad(br[0], br[1], br[2], t);
      let o = curve(...br);
      // pinnate leaves: a rachis with paired round leaflets
      [[0.14, -14, -16], [0.45, 4, -18], [0.8, 12, -14]].forEach(([t, dx, dy]) => {
        const a = on(t);
        const c = [a[0] + dx * 0.4, a[1] - 6];
        o += curve(a, c, [a[0] + dx, a[1] + dy]);
        for (let k = 1; k <= 3; k++) {
          const q = quad(a, c, [a[0] + dx, a[1] + dy], k / 3.4), d = tangentDeg(a, c, [a[0] + dx, a[1] + dy], k / 3.4);
          o += leaf(q[0], q[1], d + 70, 8, 4.2, 0) + leaf(q[0], q[1], d - 70, 8, 4.2, 0);
        }
      });
      // pods hang from the branch
      [[0.28, 46, -6], [0.5, 54, 4], [0.66, 44, 10]].forEach(([t, L, lean]) => {
        const a = on(t), e = [a[0] + lean, a[1] + L], c = [a[0] + lean * 0.2 + 6, a[1] + L * 0.55];
        o += `<path class="f-pod" d="M${pt(a)}Q${pt(c)} ${pt(e)}"/>`;
        for (let k = 1; k < 7; k++) { const q = quad(a, c, e, 0.12 + k * 0.12); o += `<ellipse class="f-seed" cx="${P(q[0])}" cy="${P(q[1])}" rx="1.1" ry="1.9"/>`; }
        o += `<path class="f-st" d="M${pt(e)}q1.5 3 -1 5"/>`;
      });
      return o;
    },
    eucalyptus(R) {
      const br = [[4, 2], [66, 6], [116, 46]], on = (t) => quad(br[0], br[1], br[2], t);
      let o = curve(...br);
      [[0.12, 1, 32], [0.24, -1, 26], [0.36, 1, 34], [0.5, -1, 28], [0.62, 1, 30], [0.84, 1, 24]].forEach(([t, s, L]) => {
        const p = on(t); o += leaf(p[0], p[1], 180 + s * (16 + R() * 18), L, 4.4, 0);
      });
      const fluff = (cx, cy, r) => {
        let g = '';
        for (let k = 0; k < 26; k++) {
          const a = (k / 26) * Math.PI * 2 + R() * 0.1, rr = r * (0.8 + R() * 0.25);
          g += `<path class="f-sm" d="M${P(cx + Math.cos(a) * 1.6)} ${P(cy + Math.sin(a) * 1.6)}L${P(cx + Math.cos(a) * rr)} ${P(cy + Math.sin(a) * rr)}"/>`;
          if (k % 2) g += `<circle class="f-an" cx="${P(cx + Math.cos(a) * rr)}" cy="${P(cy + Math.sin(a) * rr)}" r=".45"/>`;
        }
        return g + `<circle class="f-ct" cx="${cx}" cy="${cy}" r="1.8"/>`;
      };
      const hub = on(0.72);
      [[86, 20, 7], [100, 28, 6.5], [80, 34, 6]].forEach(([x, y, r]) => { o += curve(hub, [(hub[0] + x) / 2, (hub[1] + y) / 2 - 3], [x, y]) + fluff(x, y, r); });
      [[94, 44], [106, 40]].forEach(([x, y]) => {
        o += curve(hub, [(hub[0] + x) / 2, (hub[1] + y) / 2], [x, y - 2]);
        o += `<path class="f-pt" d="M${x - 2.6} ${y - 2}Q${x - 2.6} ${y + 2.6} ${x} ${y + 3}Q${x + 2.6} ${y + 2.6} ${x + 2.6} ${y - 2}Z"/><path class="f-pl" d="M${x - 1.6} ${y - 2}h3.2"/>`;
      });
      return o;
    },
    meadow(R) {
      let o = '';
      [[-34, 44], [-14, 52], [8, 40], [26, 48], [42, 34]].forEach(([a, L]) => { o += leaf(60 + a * 0.2, 80, a, L, 2.6, 0); });
      // daisy
      o += curve([52, 80], [44, 50], [36, 26]);
      let d = '<g transform="translate(36 26)">';
      for (let k = 0; k < 16; k++) d += `<ellipse class="f-pt" transform="rotate(${k * 22.5}) translate(0 -5.6)" rx="1.2" ry="4.2"/>`;
      o += d + '<circle class="f-an" r="2.8"/></g>';
      // five-petal
      o += curve([60, 80], [62, 46], [66, 14]) + flower5(R, 66, 14, 9, 8);
      // bell
      o += curve([68, 80], [84, 54], [92, 30]);
      o += `<g transform="translate(94 32) rotate(-28)"><path class="f-pt" d="M-4.4 -5.6Q-5.6 3 -4 6Q-2 4.6 0 6.4Q2 4.6 4 6Q5.6 3 4.4 -5.6Q0 -8 -4.4 -5.6Z"/><path class="f-pl" d="M0 -6L0 4"/></g>`;
      return o + bud(80, 44, 30, 2, 3.8) + bud(48, 46, -20, 2, 3.8);
    }
  };
  function flora(kind, seed) {
    return `<svg class="pf-flora" viewBox="0 -2 122 84" aria-hidden="true">${FLORA[kind](rng(seed || 593))}</svg>`;
  }

  /* ---------- label 200 × 60 mm: back | front | side ---------- */
  function hexRow(x0, x1, y, r) {
    const w = Math.sqrt(3) * r; let d = '';
    for (let x = x0 + w / 2; x <= x1 - w / 2 + 0.01; x += w) d += hexPath(x, y, r * 0.86);
    return d;
  }
  function flagMA() {
    let d = '';
    for (let k = 0; k < 5; k++) { const a = (-90 + k * 144) * Math.PI / 180; d += (k ? 'L' : 'M') + P(15 + 6 * Math.cos(a)) + ' ' + P(10 + 6 * Math.sin(a)); }
    return `<svg viewBox="0 0 30 20" class="flag" aria-label="Maroc"><rect width="30" height="20" fill="#c1272d"/><path d="${d}Z" fill="none" stroke="#006233" stroke-width="1.1"/></svg>`;
  }

  // a blank field like «[lot]» shows as a dashed blank to fill, without brackets (they collide in Arabic)
  function ph(v) {
    const m = /^\[(.*)\]$/.exec(String(v));
    if (!m) return v;
    return `<span class="ph">${m[1].trim() || '&#8195;&#8195;'}</span>`;
  }

  function front(h) {
    // 70 × 60 mm, solid code colour: the part that has to work from across the shop
    return `<div class="pf-front" style="--acc:${h.acc}">` + flora(h.flora, h.seed) +
      `<svg class="pf-hx" viewBox="0 0 175 150" preserveAspectRatio="none" aria-hidden="true"><path d="${hexRow(6, 169, 6.5, 1.3)}${hexRow(6, 169, 143.5, 1.3)}"/><rect x="3" y="11" width="169" height="128"/></svg>` +
      `<span class="pure" role="img" aria-label="100 % pur, خالص"><em dir="rtl">خالص</em><b>100%</b><i>PUR</i></span>` +
      `<div class="pre" dir="rtl">عسل</div>` +
      `<div class="big" dir="rtl" style="font-size:${P(4.2 * h.fit)}em">${h.big}</div>` +
      `<div class="fr">${h.fr}</div>` +
      `<div class="org">MIEL DU MAROC · <span dir="rtl">عسل مغربي</span></div>` +
      `<span class="wc" dir="ltr" aria-label="Poids net">${h.weight || '500 g'}</span>` +
      `</div>`;
  }

  function label(h, c = BLANK, o = {}) {
    const n = h.nut || BLANK_NUT;
    const row = (ar, fr, v) => `<tr><td>${fr}</td><td class="pf-mono">${v}</td><td dir="rtl">${ar}</td></tr>`;
    return `<div class="pf-fit"><div class="pf-lb" style="--acc:${h.acc}">` +
      `<svg class="pf-frame" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true"><rect class="h" x="3.2" y="3.2" width="493.6" height="143.6"/><path class="x" d="${hexRow(5, 495, 6.6, 1.25)}${hexRow(5, 495, 143.4, 1.25)}"/><rect class="h" x="8.8" y="10" width="482.4" height="130"/></svg>` +
      `<div class="pn back"><div class="in">` +
        `<div class="h"><span>Valeurs nutritionnelles · 100 g</span><span dir="rtl">القيمة الغذائية لكل 100 غ</span></div>` +
        `<table>${row('الطاقة', 'Énergie', `${ph(n.kj)} kJ / ${ph(n.kcal)} kcal`)}${row('الدهون', 'Matières grasses', ph(n.fat) + ' g')}${row('الكربوهيدرات', 'Glucides', ph(n.carb) + ' g')}${row('البروتينات', 'Protéines', ph(n.prot) + ' g')}${row('الملح', 'Sel', ph(n.salt) + ' g')}</table>` +
        `<p><span dir="rtl">معبأ من طرف ${ph(c.packerAr)}</span><br>Conditionné par ${ph(c.packerFr)}</p>` +
        `<p>Autorisation sanitaire ONSSA · <span dir="rtl">الترخيص الصحي</span> <b class="pf-mono">${ph(c.auth)}</b></p>` +
        `<p class="st"><span dir="rtl">يحفظ بعيدا عن الحرارة. التبلور أمر طبيعي.</span><br>À l’abri de la chaleur. La cristallisation est naturelle.</p>` +
      `</div></div>` +
      front(h) +
      `<div class="pn side"><div class="in">` +
        `<div class="br"><b dir="rtl">${ph(c.brandAr)}</b><span>${ph(c.brandFr)}</span><span class="pf-mono" dir="ltr">${ph(c.phone)}</span></div>` +
        `<div class="lg">${flagMA()}<span class="slot">logo</span><span class="slot">logo</span><span class="code" title="code couleur"></span></div>` +
        `<div class="wt"><span>Poids net · <span dir="rtl">الوزن الصافي</span></span><b class="pf-mono">${h.weight || '500 g'}</b></div>` +
        `<dl><div><dt>Lot<span dir="rtl">رقم الحصة</span></dt><dd class="pf-mono">${ph(c.lot)}</dd></div>` +
        `<div><dt>Produit le<span dir="rtl">تاريخ الإنتاج</span></dt><dd class="pf-mono">${ph(c.prod)}</dd></div>` +
        `<div><dt>À consommer de préférence avant<span dir="rtl">يفضل استهلاكه قبل</span></dt><dd class="pf-mono">${ph(c.ddm)}</dd></div></dl>` +
      `</div></div>` +
      (o.watermark ? `<div class="wm">MAQUETTE · ${o.watermark}</div>` : '') +
      `</div></div>`;
  }

  /* ---------- lid seal, 40 × 85 mm flat (1 unit = 0.5 mm) ----------
     Disc on the lid in the code colour, tail down over the lid edge onto the glass.
     Security slits at the lid/glass line make it tear instead of peel. */
  function seal(h, c = BLANK, o = {}) {
    const id = 'ps' + Math.floor(Math.random() * 1e9).toString(36), acc = h.acc;
    const vb = o.part === 'tail' ? '24 74 32 96' : o.part === 'disc' ? '3.6 .6 72.8 72.8' : '0 0 80 170';
    let g = '';
    guillocheRing(40, 37, 26.6, 32.4, { n: 24, copies: 4, steps: 720 }).forEach(d => { g += `<path d="${d}" fill="none" stroke="${CREAM}" stroke-width=".22" opacity=".8"/>`; });
    let micro = '';
    for (let y = 76; y < 170; y += 2.3) micro += `<text x="40" y="${y}" class="mi" text-anchor="middle">SCELLÉ · ختم · SCELLÉ · ختم · SCELLÉ · ختم · SCELLÉ</text>`;
    let slits = '';
    for (const y of [95, 99, 103]) slits += `M24 ${y}l3.2 1.6M56 ${y}l-3.2 1.6`;
    const tail = 'M24 70H56V168L40 160L24 168Z';
    return `<svg class="pf-seal" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" aria-label="Scellé ${h.fr}">
      <style>.pf-seal .mi{font:1.5px 'IBM Plex Mono',monospace;fill:${INK};opacity:.33}
      .pf-seal .ar{font-family:Amiri,serif;font-weight:700}.pf-seal .kf{font-family:'Reem Kufi',Amiri,sans-serif;font-weight:700}
      .pf-seal .sc{font-family:'IM Fell English SC',Georgia,serif}.pf-seal .mo{font-family:'IBM Plex Mono',monospace}</style>
      <defs><clipPath id="${id}c"><path d="${tail}"/></clipPath><path id="${id}r" d="M40 37m-34.3 0a34.3 34.3 0 1 1 68.6 0a34.3 34.3 0 1 1-68.6 0" fill="none"/></defs>
      <path d="${tail}" fill="${CREAM}" stroke="${INK}" stroke-width=".4"/>
      <g clip-path="url(#${id}c)">${micro}<rect x="24" y="70" width="2.6" height="100" fill="${acc}"/><rect x="53.4" y="70" width="2.6" height="100" fill="${acc}"/><rect x="24" y="140" width="32" height="30" fill="${acc}"/></g>
      <path d="${slits}" stroke="${INK}" stroke-width=".35"/>
      <text class="ar" transform="translate(37.4 120) rotate(-90)" text-anchor="middle" font-size="5.4" fill="${INK}" direction="rtl">ختم الضمان</text>
      <text class="sc" transform="translate(43.2 120) rotate(-90)" text-anchor="middle" font-size="3" fill="${INK}" letter-spacing=".3">SCELLÉ DE GARANTIE</text>
      <text class="mo" transform="translate(48.6 120) rotate(-90)" text-anchor="middle" font-size="2.05" fill="${INK}">ROMPU ? N’ACHETEZ PAS · مقطوع؟ لا تشتر</text>
      <text class="mo" x="40" y="137" text-anchor="middle" font-size="2.4" fill="${INK}">LOT ${c.lot}</text>
      <text class="kf" x="40" y="153.5" text-anchor="middle" font-size="${P(7.2 * h.fit)}" fill="${CREAM}" direction="rtl">${h.big}</text>
      <circle cx="40" cy="37" r="36" fill="${acc}" stroke="${INK}" stroke-width=".4"/>
      ${g}
      <circle cx="40" cy="37" r="33.4" fill="none" stroke="${CREAM}" stroke-width=".35"/><circle cx="40" cy="37" r="25.8" fill="none" stroke="${CREAM}" stroke-width=".3"/>
      <text class="mo" font-size="1.85" fill="${CREAM}" letter-spacing=".25"><textPath href="#${id}r">MIEL DU MAROC · SCELLÉ DE GARANTIE · MIEL DU MAROC · SCELLÉ DE GARANTIE · MIEL DU MAROC · SCELLÉ DE GARANTIE ·</textPath></text>
      <text class="ar" x="40" y="24.5" text-anchor="middle" font-size="6.4" fill="${CREAM}" direction="rtl">عسل</text>
      <text class="kf" x="40" y="40.5" text-anchor="middle" font-size="${P(12.5 * h.fit)}" fill="${CREAM}" direction="rtl">${h.big}</text>
      <text class="sc" x="40" y="48" text-anchor="middle" font-size="3.3" fill="${CREAM}" letter-spacing=".45">MIEL DU MAROC</text>
      <text class="mo" x="40" y="53.4" text-anchor="middle" font-size="2.3" fill="${CREAM}">LOT ${c.lot}</text>
    </svg>`;
  }

  /* ---------- life-size jar mock-up; set --mm on a parent to scale it ---------- */
  function jar(h, o = {}) {
    // o.label: any 200 x 60 mm label HTML · o.today: image of a current label (o.todayFront: image is the front only)
    // o.tail: false to drop the seal · o.lid: 'green' · o.fill: contents colour
    const lab = o.label ? o.label
      : o.today ? `<div class="pj-today${o.todayFront ? ' pj-tf' : ''}" style="background-image:url('${o.today}')"></div>`
      : label(h, o.c || BLANK);
    const tail = o.tail === false ? '' : `<div class="pj-tail">${o.today && !o.todayFront ? `<div class="pj-ttoday"><span>GARANTIE</span></div>` : o.today ? '' : seal(h, o.c || BLANK, { part: 'tail' })}</div>`;
    return `<figure class="pj" style="--honey:${o.fill || pfundColor(h.pfund || 50)}"><div class="pj-lid${o.lid ? ' ' + o.lid : ''}"></div><div class="pj-glass"><div class="pj-lab">${lab}</div><div class="pj-shine"></div></div>${tail}` +
      (o.cap ? `<figcaption>${o.cap}</figcaption>` : '') + `</figure>`;
  }

  const CSS = `
  .pf-fit{container-type:inline-size;width:100%}
  .pf-lb{--pk:${INK};--cream:${CREAM};position:relative;box-sizing:border-box;background:var(--cream);color:var(--pk);font-family:'Readex Pro',system-ui,sans-serif;line-height:1.25;overflow:hidden;
    font-size:2cqw;width:50em;height:15em;display:grid;grid-template-columns:16.25em 17.5em 16.25em}
  .pf-lb *,.pf-front *{box-sizing:border-box}
  .pf-mono{font-family:'IBM Plex Mono',ui-monospace,monospace;font-variant-numeric:tabular-nums}
  .pf-frame{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
  .pf-frame .h{fill:none;stroke:var(--pk);stroke-width:.25}
  .pf-frame .x{fill:none;stroke:var(--acc);stroke-width:.32}
  .pf-lb .pn{position:relative;min-width:0;display:flex;flex-direction:column;justify-content:center}
  .pf-lb .back .in{padding:0 1.3em 0 2.2em;font-size:.5em;display:flex;flex-direction:column;gap:.38em}
  .pf-lb .back .h{display:flex;justify-content:space-between;gap:.5em;font-weight:500;border-bottom:.08em solid var(--pk);padding-bottom:.2em}
  .pf-lb .back .h [dir=rtl]{font-family:Amiri,serif;font-weight:700;font-size:1.12em}
  .pf-lb table{width:100%;border-collapse:collapse;font-size:.92em}
  .pf-lb td{padding:.12em 0;border-bottom:.05em dotted color-mix(in srgb,var(--pk) 50%,transparent)}
  .pf-lb td[dir=rtl]{font-family:Amiri,serif;font-size:1.08em;text-align:right;width:30%}
  .pf-lb td.pf-mono{text-align:center;white-space:nowrap}
  .pf-lb .back p{margin:0;line-height:1.35;font-size:.9em}
  .pf-lb .back p [dir=rtl]{font-family:Amiri,serif;font-size:1.1em}
  .pf-lb .back b{font-weight:500}
  .pf-lb .back .st{opacity:.85}
  .pf-lb .side .in{padding:0 2.3em 0 1.3em;display:flex;flex-direction:column;gap:.45em}
  .pf-lb .br{display:flex;flex-direction:column;align-items:flex-start;gap:.2em}
  .pf-lb .br b{font-family:Amiri,serif;font-weight:700;font-size:1.05em;line-height:1.45}
  .pf-lb .ph{display:inline-block;border-bottom:.06em dashed currentColor;opacity:.7;padding:0 .12em;line-height:1.2}
  .pf-lb .br span{font-family:'IM Fell English SC',Georgia,serif;font-size:.48em;letter-spacing:.12em}
  .pf-lb .br .pf-mono{font-family:'IBM Plex Mono',monospace;letter-spacing:.02em;font-size:.44em}
  .pf-lb .lg{display:flex;align-items:center;gap:.4em}
  .pf-lb .lg .flag{width:1.5em;height:1em;display:block}
  .pf-lb .lg .slot{border-radius:50%;border:.05em dashed var(--pk);font-size:.3em;display:grid;place-items:center;width:4.4em;height:4.4em;opacity:.7}
  .pf-lb .lg .code{margin-inline-start:auto;width:1.1em;height:1.1em;background:var(--acc);clip-path:polygon(25% 5%,75% 5%,100% 50%,75% 95%,25% 95%,0 50%)}
  .pf-lb .wt{display:flex;justify-content:space-between;align-items:baseline;border-top:.04em solid var(--pk);border-bottom:.04em solid var(--pk);padding:.15em 0}
  .pf-lb .wt>span{font-size:.42em}
  .pf-lb .wt [dir=rtl]{font-family:Amiri,serif;font-size:1.15em}
  .pf-lb .wt b{font-size:.95em;font-weight:500}
  .pf-lb dl{margin:0;display:flex;flex-direction:column;gap:.25em;font-size:.4em}
  .pf-lb dl div{display:flex;justify-content:space-between;align-items:center;gap:.5em}
  .pf-lb dt{display:flex;flex-direction:column;line-height:1.15}
  .pf-lb dt [dir=rtl]{font-family:Amiri,serif;font-size:1.15em;text-align:left}
  .pf-lb dd{margin:0;white-space:nowrap}
  .pf-lb .wm{position:absolute;inset:0;display:grid;place-items:center;pointer-events:none;font-family:'IBM Plex Mono',monospace;font-size:1.3em;letter-spacing:.25em;color:rgba(190,40,30,.28);transform:rotate(-7deg);white-space:nowrap;z-index:5}

  .pf-front{--pk:${CREAM};--fill:var(--acc);position:relative;overflow:hidden;background:var(--acc);color:${CREAM};display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:1em .6em;height:15em}
  .pf-front .pf-flora{position:absolute;right:-2.2em;bottom:-1.6em;width:15.5em;opacity:.3;pointer-events:none}
  .pf-front .pf-hx{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;fill:none;stroke:${CREAM};stroke-width:.3;opacity:.75}
  /* the two corners, set on the same inset: purity stamp top-left, weight tag bottom-right */
  .pf-front .pure{position:absolute;left:.8em;top:1.5em;width:2.45em;height:2.45em;border-radius:50%;border:.05em solid currentColor;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1;
    box-shadow:inset 0 0 0 .17em var(--acc),inset 0 0 0 .21em rgba(251,247,238,.6)}
  .pf-front .pure em{font-style:normal;font-family:Amiri,serif;font-weight:700;font-size:.4em;line-height:1;margin-bottom:.12em}
  .pf-front .pure b{font-family:'Readex Pro',system-ui,sans-serif;font-weight:600;font-size:.6em;letter-spacing:.01em}
  .pf-front .pure i{font-style:normal;font-size:.28em;letter-spacing:.2em;margin:.35em 0 0 .2em}
  .pf-front .pre{position:relative;font-family:Amiri,serif;font-weight:700;font-size:1.25em;line-height:1.2;margin-top:.1em}
  .pf-front .big{position:relative;font-family:'Reem Kufi',Amiri,sans-serif;font-weight:700;line-height:1.38;white-space:nowrap}
  .pf-front .wc{position:absolute;right:.8em;bottom:1.5em;background:${CREAM};color:var(--acc);font-family:'Readex Pro',system-ui,sans-serif;font-weight:600;font-size:.84em;font-variant-numeric:tabular-nums;letter-spacing:.02em;line-height:1;padding:.24em .5em .22em;border-radius:.16em}
  .pf-front .fr{position:relative;font-family:'IM Fell English SC',Georgia,serif;font-size:.95em;letter-spacing:.14em}
  .pf-front .org{position:relative;margin-top:.45em;border:.05em solid currentColor;padding:.14em .6em;font-size:.46em;letter-spacing:.14em;font-weight:500}
  .pf-front .org [dir=rtl]{font-family:Amiri,serif;letter-spacing:0;font-size:1.2em;font-weight:700}
  .pf-flora .f-st{fill:none;stroke:var(--pk);stroke-width:.7;stroke-linecap:round}
  .pf-flora .f-lf{fill:var(--pk)}
  .pf-flora .f-vn{fill:none;stroke:var(--fill);stroke-width:.35;stroke-linecap:round}
  .pf-flora .f-pt{fill:var(--fill);stroke:var(--pk);stroke-width:.45}
  .pf-flora .f-pl{fill:none;stroke:var(--pk);stroke-width:.22;opacity:.7}
  .pf-flora .f-sm{fill:none;stroke:var(--pk);stroke-width:.25}
  .pf-flora .f-an,.pf-flora .f-ct{fill:var(--pk)}
  .pf-flora .f-pod{fill:none;stroke:var(--pk);stroke-width:5.2;stroke-linecap:round}
  .pf-flora .f-seed{fill:var(--fill)}
  .pf-seal{display:block;width:100%;height:auto}

  .pj{--mm:var(--jar-mm,1.89px);position:relative;margin:0;width:calc(var(--mm)*76);flex:none;display:flex;flex-direction:column;align-items:center}
  .pj-lid{position:relative;z-index:1;width:calc(var(--mm)*68);height:calc(var(--mm)*13);border-radius:calc(var(--mm)*2.4) calc(var(--mm)*2.4) calc(var(--mm)*.8) calc(var(--mm)*.8);
    background:linear-gradient(90deg,#4a3a18,#b89a52 20%,#f0dfa0 32%,#a8894a 56%,#5e4a20 86%,#3d2f12);box-shadow:inset 0 calc(var(--mm)*-1.6) 0 rgba(0,0,0,.25)}
  .pj-glass{position:relative;width:100%;height:calc(var(--mm)*98);margin-top:calc(var(--mm)*-.4);border-radius:calc(var(--mm)*11) calc(var(--mm)*11) calc(var(--mm)*8) calc(var(--mm)*8);background:var(--honey);overflow:hidden;box-shadow:inset 0 0 0 calc(var(--mm)*.6) rgba(0,0,0,.12)}
  .pj-lab{position:absolute;top:calc(var(--mm)*36);left:calc(var(--mm)*-59);width:calc(var(--mm)*200);height:calc(var(--mm)*60)}
  .pj-today{width:100%;height:100%;background-size:100% 100%}
  .pj-today.pj-tf{position:absolute;left:calc(var(--mm)*59);width:calc(var(--mm)*76);background-size:cover;background-position:center}
  .pj-lid.green{background:linear-gradient(90deg,#0b2113,#1d5631 20%,#4f8a62 32%,#1d5631 56%,#123620 86%,#09190f)}
  .pj-shine{position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(0,0,0,.34),rgba(0,0,0,0) 13%,rgba(255,255,255,.3) 22%,rgba(255,255,255,0) 34%,rgba(0,0,0,0) 74%,rgba(0,0,0,.36))}
  .pj-tail{position:absolute;z-index:2;top:0;left:50%;transform:translateX(-50%);width:calc(var(--mm)*16)}
  .pj-ttoday{height:calc(var(--mm)*44);background:#f0b52d;display:grid;place-items:center;border-inline:calc(var(--mm)*1.2) solid #fff}
  .pj-ttoday span{writing-mode:vertical-rl;transform:rotate(180deg);font:700 calc(var(--mm)*3.2) 'Readex Pro',sans-serif;color:#222;letter-spacing:.05em}
  .pj figcaption{margin-top:calc(var(--mm)*3);font-size:max(10px,calc(var(--mm)*5));text-align:center;white-space:nowrap}
  `;

  return { HONEYS, BLANK, FONTS_URL, CSS, flora, front, label, seal, jar };
});
