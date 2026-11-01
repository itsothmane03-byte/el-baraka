/*
 * Studio packshots, drawn in SVG, for products that have no photo yet.
 * One lighting model for every form (tub, capsule bottle, dropper, bottle, pouch, soap bar,
 * box, tin, jar), meant to sit on the same dark studio backdrop as the honey photographs.
 *
 *   Packshots.draw({ form, color, name, sub, ar, body, cap, liquid, fill, scale, brand })
 *
 * Labels are neutral (product name and format): these stand in for the real products,
 * which keep their own makers' packaging.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Packshots = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  let uid = 0;
  const hx = (h) => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  const mix = (a, b, t) => { const A = hx(a), B = hx(b); return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join(''); };
  const dark = (c, t) => mix(c, '#000000', t), light = (c, t) => mix(c, '#ffffff', t);
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

  function defs(id, colors) {
    // one cylinder shading gradient per colour used, plus the label overlay and floor shadow
    let d = `<filter id="${id}-sh" x="-30%" y="-200%" width="160%" height="500%"><feGaussianBlur stdDeviation="7"/></filter>`;
    d += `<linearGradient id="${id}-ov" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".5"/><stop offset=".1" stop-color="#000" stop-opacity=".16"/><stop offset=".26" stop-color="#fff" stop-opacity=".2"/><stop offset=".34" stop-color="#fff" stop-opacity="0"/><stop offset=".72" stop-color="#000" stop-opacity=".07"/><stop offset=".9" stop-color="#000" stop-opacity=".3"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></linearGradient>`;
    d += `<linearGradient id="${id}-v" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".1"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></linearGradient>`;
    Object.entries(colors).forEach(([k, c]) => {
      d += `<linearGradient id="${id}-${k}" x1="0" x2="1"><stop offset="0" stop-color="${dark(c, .55)}"/><stop offset=".08" stop-color="${dark(c, .22)}"/><stop offset=".22" stop-color="${light(c, .16)}"/><stop offset=".3" stop-color="${light(c, .32)}"/><stop offset=".38" stop-color="${c}"/><stop offset=".7" stop-color="${dark(c, .12)}"/><stop offset=".9" stop-color="${dark(c, .36)}"/><stop offset="1" stop-color="${dark(c, .6)}"/></linearGradient>`;
    });
    return `<defs>${d}</defs>`;
  }
  const shadow = (id, cx, rx) => `<ellipse cx="${cx}" cy="342" rx="${rx}" ry="11" fill="#000" opacity=".55" filter="url(#${id}-sh)"/>`;
  const fit = (text, maxW, base, k = .52) => Math.max(9, Math.min(base, maxW / (Math.max(1, text.length) * k)));

  // the label block: a colour band with the Arabic name, the French name and the format
  function label(o, x, y, w, h, opt = {}) {
    const band = Math.round(h * (opt.band || .28)), pad = 8;
    const nameFs = fit(o.name, w - pad * 2, opt.fs || 22);
    const ink = opt.ink || '#1d1d1b', paper = opt.paper || '#f5efe3';
    let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${paper}"/>`;
    s += `<rect x="${x}" y="${y}" width="${w}" height="${band}" fill="${o.color}"/>`;
    if (o.ar) s += `<text x="${x + w / 2}" y="${y + band * .7}" text-anchor="middle" font-family="Amiri,serif" font-weight="700" font-size="${Math.min(band * .62, fit(o.ar, w - 12, 18, .45))}" fill="#fff" direction="rtl">${esc(o.ar)}</text>`;
    s += `<text x="${x + w / 2}" y="${y + band + (h - band) * .5}" text-anchor="middle" font-family="'IM Fell English',Georgia,serif" font-size="${nameFs}" fill="${ink}">${esc(o.name)}</text>`;
    if (o.sub) s += `<text x="${x + w / 2}" y="${y + band + (h - band) * .5 + nameFs * .95}" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="${Math.max(7, nameFs * .4)}" letter-spacing="1.2" fill="${ink}" opacity=".75">${esc(String(o.sub).toUpperCase())}</text>`;
    s += `<rect x="${x}" y="${y + h - 4}" width="${w}" height="4" fill="${o.color}" opacity=".9"/>`;
    return s;
  }
  const ridges = (x, y, w, h, step = 6) => { let d = ''; for (let i = x + 4; i < x + w - 2; i += step) d += `M${i} ${y}v${h}`; return `<path d="${d}" stroke="#000" stroke-opacity=".22" stroke-width="1.4"/>`; };
  const glint = (x, y, h, w = 6) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w / 2}" fill="#fff" opacity=".32"/>`;

  const FORMS = {
    tub(o, id) {
      const body = o.body || '#1f1f1f', cap = o.cap || '#151515';
      return shadow(id, 200, 98) +
        `<path d="M110 128H290V318Q290 334 274 334H126Q110 334 110 318Z" fill="url(#${id}-b)"/>` +
        `<rect x="104" y="92" width="192" height="40" rx="7" fill="url(#${id}-c)"/>` + ridges(106, 98, 188, 30, 7) +
        `<rect x="104" y="92" width="192" height="6" rx="3" fill="#fff" opacity=".14"/>` +
        label(o, 110, 166, 180, 126, { fs: 26, band: .3 }) +
        `<rect x="110" y="128" width="180" height="206" fill="url(#${id}-ov)"/>` +
        `<rect x="110" y="128" width="180" height="206" fill="url(#${id}-v)"/>`;
    },
    capsules(o, id) {
      return shadow(id, 200, 70) +
        `<path d="M140 168Q140 152 156 150H244Q260 152 260 168V318Q260 334 244 334H156Q140 334 140 318Z" fill="url(#${id}-b)"/>` +
        `<rect x="166" y="134" width="68" height="20" fill="url(#${id}-b)"/>` +
        `<rect x="154" y="98" width="92" height="42" rx="6" fill="url(#${id}-c)"/>` + ridges(156, 104, 88, 30, 5) +
        label(o, 140, 194, 120, 108, { fs: 19 }) +
        `<path d="M140 150H260V334H140Z" fill="url(#${id}-ov)"/>` + glint(150, 170, 140, 5);
    },
    dropper(o, id) {
      return shadow(id, 200, 48) +
        `<path d="M162 214Q162 196 178 190H222Q238 196 238 214V318Q238 334 222 334H178Q162 334 162 318Z" fill="url(#${id}-b)"/>` +
        `<rect x="182" y="156" width="36" height="36" rx="3" fill="url(#${id}-c)"/>` + ridges(184, 160, 32, 28, 4) +
        `<rect x="188" y="100" width="24" height="60" rx="12" fill="url(#${id}-c)"/>` +
        label(o, 162, 234, 76, 74, { fs: 14, band: .3 }) +
        `<path d="M162 190H238V334H162Z" fill="url(#${id}-ov)"/>` + glint(169, 204, 110, 4);
    },
    bottle(o, id) {
      const p = 'M150 200Q150 176 176 170L186 150V122H214V150L224 170Q250 176 250 200V320Q250 336 234 336H166Q150 336 150 320Z';
      return shadow(id, 200, 62) +
        `<path d="${p}" fill="url(#${id}-b)" opacity=".96"/>` +
        `<rect x="181" y="90" width="38" height="36" rx="5" fill="url(#${id}-c)"/>` + ridges(183, 94, 34, 28, 4) +
        label(o, 150, 230, 100, 80, { fs: 16 }) +
        `<path d="${p}" fill="url(#${id}-ov)"/>` + glint(160, 196, 120, 5);
    },
    pouch(o, id) {
      // stand-up pouch: crimped top seal, slightly wider at the base, a soft fold and a gusset
      const kraft = o.body || '#b98f5c';
      const p = 'M116 74H284L292 296Q294 330 266 334H134Q106 330 108 296Z';
      let crimp = '';
      for (let x = 118; x < 284; x += 4) crimp += `M${x} 76v18`;
      let lab;
      if (o.brand) {
        lab = `<rect x="128" y="150" width="144" height="140" rx="2" fill="#1d5631"/>` +
          `<rect x="134" y="156" width="132" height="128" fill="none" stroke="#f3f4ec" stroke-opacity=".45" stroke-width="1"/>` +
          `<image href="${o.brand}" x="150" y="164" width="100" height="32" preserveAspectRatio="xMidYMid meet"/>` +
          `<text x="200" y="${o.big && o.big.length > 7 ? 240 : 244}" text-anchor="middle" font-family="'Aref Ruqaa',Amiri,serif" font-weight="700" font-size="${fit(o.big || o.ar || '', 120, 38, .5)}" fill="#f3f4ec" direction="rtl">${esc(o.big || o.ar || '')}</text>` +
          `<text x="200" y="266" text-anchor="middle" font-family="'IM Fell English SC',Georgia,serif" font-size="${fit(o.name, 120, 11, .55)}" letter-spacing="1" fill="#f3f4ec">${esc(o.name)}</text>` +
          `<rect x="128" y="278" width="144" height="12" fill="${o.color}"/>`;
      } else lab = label(o, 130, 154, 140, 128, { fs: 21 });
      return shadow(id, 200, 100) +
        `<path d="${p}" fill="url(#${id}-b)"/>` +
        `<path d="M116 74H284L285 98H115Z" fill="${dark(kraft, .1)}"/>` +
        `<path d="${crimp}" stroke="${dark(kraft, .35)}" stroke-width="1.2" opacity=".55"/>` +
        `<path d="M114 112H286" stroke="${dark(kraft, .28)}" stroke-width="1.4" stroke-dasharray="4 3"/>` +
        `<path d="M150 98Q144 220 156 330" stroke="#fff" stroke-opacity=".1" stroke-width="16" fill="none"/>` +
        lab +
        `<path d="${p}" fill="url(#${id}-ov)" opacity=".7"/>` +
        `<path d="M112 306Q200 322 290 306" stroke="#000" stroke-opacity=".16" stroke-width="2" fill="none"/>` +
        `<path d="M118 312Q200 330 284 312L282 326Q200 340 120 326Z" fill="#000" opacity=".08"/>`;
    },
    bar(o, id) {
      const c = o.body || '#e9dfc8';
      const P = (t) => [98 + 140 * t, 236 + 22 * t], Q = (t) => [98 + 140 * t, 282 + 24 * t], R = (t) => [178 + 140 * t, 206 + 20 * t];
      const pt = (a) => a.map(v => v.toFixed(1)).join(' ');
      const t0 = .2, t1 = .8, mid = (t0 + t1) / 2, cx = P(mid)[0], cy = (P(mid)[1] + Q(mid)[1]) / 2;
      return shadow(id, 210, 118) +
        `<path d="M98 236L178 206L318 226L238 258Z" fill="${light(c, .18)}"/>` +
        `<path d="M98 236L238 258V306L98 282Z" fill="${c}"/>` +
        `<path d="M238 258L318 226V272L238 306Z" fill="${dark(c, .28)}"/>` +
        `<path d="M${pt(P(t0))}L${pt(P(t1))}L${pt(Q(t1))}L${pt(Q(t0))}Z" fill="${o.color}"/>` +
        `<path d="M${pt(P(t0))}L${pt(P(t1))}L${pt(R(t1))}L${pt(R(t0))}Z" fill="${light(o.color, .12)}"/>` +
        `<g transform="translate(${cx.toFixed(1)} ${cy.toFixed(1)}) rotate(9)"><text y="-2" text-anchor="middle" font-family="'IM Fell English',Georgia,serif" font-size="${fit(o.name, 78, 15, .5)}" fill="#fff">${esc(o.name)}</text>${o.ar ? `<text y="15" text-anchor="middle" font-family="Amiri,serif" font-weight="700" font-size="11" fill="#fff" opacity=".9" direction="rtl">${esc(o.ar)}</text>` : ''}</g>` +
        `<path d="M98 236L238 258V306L98 282Z" fill="url(#${id}-v)"/>`;
    },
    box(o, id) {
      const c = o.body || '#f3ede1';
      return shadow(id, 210, 100) +
        `<path d="M120 150L170 128H300L250 150Z" fill="${light(c, .2)}"/>` +
        `<path d="M250 150L300 128V308L250 330Z" fill="${dark(c, .22)}"/>` +
        `<rect x="120" y="150" width="130" height="180" fill="${c}"/>` +
        `<rect x="120" y="150" width="130" height="44" fill="${o.color}"/>` +
        (o.ar ? `<text x="185" y="180" text-anchor="middle" font-family="Amiri,serif" font-weight="700" font-size="${fit(o.ar, 110, 18, .45)}" fill="#fff" direction="rtl">${esc(o.ar)}</text>` : '') +
        `<text x="185" y="246" text-anchor="middle" font-family="'IM Fell English',Georgia,serif" font-size="${fit(o.name, 112, 20)}" fill="#1d1d1b">${esc(o.name)}</text>` +
        (o.sub ? `<text x="185" y="268" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="8" letter-spacing="1.2" fill="#1d1d1b" opacity=".75">${esc(String(o.sub).toUpperCase())}</text>` : '') +
        `<rect x="120" y="318" width="130" height="12" fill="${o.color}"/>` +
        `<path d="M250 150L300 128V136L250 158Z" fill="${dark(o.color, .2)}"/>` +
        `<rect x="120" y="150" width="130" height="180" fill="url(#${id}-v)"/>`;
    },
    tin(o, id) {
      const m = o.body || '#b9b4aa';
      return shadow(id, 200, 82) +
        `<path d="M126 262V300Q200 320 274 300V262Z" fill="url(#${id}-b)"/>` +
        `<path d="M122 244V266Q200 286 278 266V244Z" fill="url(#${id}-c)"/>` +
        `<ellipse cx="200" cy="244" rx="78" ry="18" fill="${light(m, .25)}"/>` +
        `<ellipse cx="200" cy="244" rx="56" ry="12" fill="${o.color}"/>` +
        `<path d="M126 272Q200 292 274 272V292Q200 312 126 292Z" fill="${o.color}"/>` +
        `<text x="200" y="${292}" text-anchor="middle" font-family="'IM Fell English',Georgia,serif" font-size="${fit(o.name, 120, 15, .5)}" fill="#fff">${esc(o.name)}</text>` +
        `<path d="M126 262V300Q200 320 274 300V262Z" fill="url(#${id}-ov)"/>`;
    },
    jar(o, id) {
      const fill = o.fill || '#d9a230';
      let gran = '';
      if (o.granules) { let s = 7; const r = () => (s = (s * 9301 + 49297) % 233280) / 233280; for (let i = 0; i < 90; i++) { const x = 134 + r() * 132, y = 140 + r() * 46; gran += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(1.6 + r() * 1.8).toFixed(1)}" fill="${r() > .5 ? light(fill, .25) : dark(fill, .2)}"/>`; } }
      return shadow(id, 200, 82) +
        `<path d="M126 150Q126 136 142 134H258Q274 136 274 150V318Q274 334 258 334H142Q126 334 126 318Z" fill="url(#${id}-b)"/>` + gran +
        `<rect x="132" y="100" width="136" height="38" rx="6" fill="url(#${id}-c)"/>` + ridges(134, 106, 132, 26, 6) +
        label(o, 126, 190, 148, 100, { fs: 21 }) +
        `<path d="M126 134H274V334H126Z" fill="url(#${id}-ov)"/>` + glint(138, 150, 160, 6);
    }
  };

  function draw(o) {
    const id = 'pk' + (++uid).toString(36) + Math.floor(Math.random() * 1e6).toString(36);
    const f = FORMS[o.form] || FORMS.jar;
    const body = o.form === 'jar' ? (o.fill || '#d9a230') : o.form === 'bottle' ? (o.liquid || '#c9a227') : o.form === 'dropper' ? (o.body || '#6b3510') : (o.body || (o.form === 'capsules' ? '#efe9de' : o.form === 'tin' ? '#b9b4aa' : '#b98f5c'));
    const cap = o.cap || (o.form === 'jar' ? '#b8954a' : o.form === 'capsules' ? '#e8e2d6' : o.form === 'tin' ? '#c9c4ba' : '#1c1c1c');
    const FORM_SCALE = { tub: 1, capsules: 1.1, dropper: 1.18, bottle: 1.1, pouch: 1, bar: 1.22, box: 1.04, tin: 1.35, jar: 1 };
    const s = (o.scale || 1) * (FORM_SCALE[o.form] || 1);
    return `<svg class="pack" viewBox="30 36 340 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${defs(id, { b: body, c: cap })}` +
      `<g transform="translate(200 342) scale(${s}) translate(-200 -342)">${f(o, id)}</g></svg>`;
  }

  return { draw, FORMS: Object.keys(FORMS) };
});
