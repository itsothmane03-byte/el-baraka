/*
 * Herboristerie El Baraka · label engine
 * --------------------------------------
 * Label templates, the honey card and the example catalog, shared by
 * index.html (pitch), store.html (shop preview), labels.html (print sheet)
 * and the tools/ scripts.
 *
 * The shop keeps its ORIGINAL logo. It is never redrawn here: every label
 * uses the image files made by tools/logo-assets.mjs (the original logo,
 * recoloured; «منذ 1998 · DEPUIS 1998» is added only where it matters).
 * Decoration (guilloché cords, rosettes) is drawn from code.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ElBaraka = api;
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  /* ---------- palette (print values; pages map them to theme tokens) ---------- */
  const COLOR = {
    green: '#1d5631',   // "Baraka green": the logo green, a notch deeper
    deep: '#10291a',    // ink for small type
    honey: '#c68517',   // the one golden cell, twine, foil
    paper: '#f3f4ec',   // label stock (sage-tinted, not cream)
    lime: '#8cc63e'     // the shop sign: kept as a signal colour only
  };

  const FONTS_URL = 'https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=IM+Fell+English+SC&family=IM+Fell+English:ital@0;1&family=Readex+Pro:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap';

  const P = (n) => Math.round(n * 100) / 100;

  // the original logo, as files (see tools/logo-assets.mjs)
  const ASSETS = {
    logoGreen: 'img/logo-1998-green.png', logoCream: 'img/logo-1998-cream.png', logoGold: 'img/logo-1998-gold.png',   // with the date
    plainGreen: 'img/logo-green.png', plainCream: 'img/logo-cream.png', plainGold: 'img/logo-gold.png',              // as today
    markGreen: 'img/mark-green.png', markCream: 'img/mark-cream.png', markGold: 'img/mark-gold.png'
  };
  function setAssets(o) { Object.assign(ASSETS, o); }

  function rng(seed) {
    let s = seed >>> 0;
    return () => {
      s = (s + 0x6d2b79f5) >>> 0;
      let t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* ---------- geometry helpers ---------- */
  function hexPath(cx, cy, r) {
    let d = '';
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i + Math.PI / 6; // pointy top
      d += (i ? 'L' : 'M') + P(cx + r * Math.cos(a)) + ' ' + P(cy + r * Math.sin(a));
    }
    return d + 'Z';
  }

  /* Guilloché ring: several phase-shifted copies of a two-frequency wave
     wrapped around a circle. The interference is what makes it read as
     "engraved", the same trick banknotes and old certificates use. */
  function guillocheRing(cx, cy, rIn, rOut, o = {}) {
    const n = o.n || 30, copies = o.copies || 5, steps = o.steps || 1080;
    const mid = (rIn + rOut) / 2, amp = (rOut - rIn) / 2;
    const out = [];
    for (let k = 0; k < copies; k++) {
      const ph = (Math.PI * 2 * k) / copies;
      let d = '';
      for (let i = 0; i <= steps; i++) {
        const t = (Math.PI * 2 * i) / steps;
        const r = mid + amp * (0.72 * Math.sin(n * t + ph) + 0.28 * Math.sin(3 * n * t - ph * 2));
        d += (i ? 'L' : 'M') + P(cx + r * Math.cos(t)) + ' ' + P(cy + r * Math.sin(t));
      }
      out.push(d + 'Z');
    }
    return out;
  }

  /* Rosette for label corners: a rose curve ring, r = a + b·cos(kθ + φ) */
  function rosette(cx, cy, r, o = {}) {
    const k = o.k || 9, copies = o.copies || 4, steps = 360;
    let d = '';
    for (let c = 0; c < copies; c++) {
      const ph = (Math.PI * 2 * c) / (copies * k);
      for (let i = 0; i <= steps; i++) {
        const t = (Math.PI * 2 * i) / steps;
        const rr = r * (0.62 + 0.38 * Math.cos(k * t + ph * k));
        d += (i ? 'L' : 'M') + P(cx + rr * Math.cos(t)) + ' ' + P(cy + rr * Math.sin(t));
      }
      d += 'Z';
    }
    return d;
  }

  /* Braided cord along a straight edge (for label frames) */
  function cord(x0, y0, x1, y1, amp, wl, copies) {
    const len = Math.hypot(x1 - x0, y1 - y0);
    const ux = (x1 - x0) / len, uy = (y1 - y0) / len, nx = -uy, ny = ux;
    const steps = Math.max(40, Math.round(len * 1.5));
    let d = '';
    for (let c = 0; c < copies; c++) {
      const ph = (Math.PI * 2 * c) / copies;
      for (let i = 0; i <= steps; i++) {
        const s = (len * i) / steps;
        const w = amp * Math.sin((Math.PI * 2 * s) / wl + ph);
        d += (i ? 'L' : 'M') + P(x0 + ux * s + nx * w) + ' ' + P(y0 + uy * s + ny * w);
      }
    }
    return d;
  }

  function quad(p0, p1, p2, t) {
    const u = 1 - t;
    return [u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0], u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1]];
  }
  function quadTan(p0, p1, p2, t) {
    return [2 * (1 - t) * (p1[0] - p0[0]) + 2 * t * (p2[0] - p1[0]), 2 * (1 - t) * (p1[1] - p0[1]) + 2 * t * (p2[1] - p1[1])];
  }

  /* ---------- label frame (guilloché cord + corner rosettes) ---------- */
  function frame(w, h, o = {}) {
    const inset = o.inset || 5, amp = o.amp || 1.1, wl = o.wl || 3.2;
    const x0 = inset, y0 = inset, x1 = w - inset, y1 = h - inset, rr = o.rosette || 4.6;
    const c = [
      cord(x0 + rr, y0, x1 - rr, y0, amp, wl, 3), cord(x1, y0 + rr, x1, y1 - rr, amp, wl, 3),
      cord(x1 - rr, y1, x0 + rr, y1, amp, wl, 3), cord(x0, y1 - rr, x0, y0 + rr, amp, wl, 3)
    ].join('');
    const ros = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]].map(([x, y]) => rosette(x, y, rr, { k: 8, copies: 3 })).join('');
    return `<svg class="elb-frame-svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true">` +
      `<rect x="${inset - 2.4}" y="${inset - 2.4}" width="${w - 2 * inset + 4.8}" height="${h - 2 * inset + 4.8}" class="fr-hair"/>` +
      `<rect x="${inset + 2.4}" y="${inset + 2.4}" width="${w - 2 * inset - 4.8}" height="${h - 2 * inset - 4.8}" class="fr-hair"/>` +
      `<path d="${c}" class="fr-cord"/><path d="${ros}" class="fr-ros"/></svg>`;
  }

  /* ---------- catalog ---------- */
  // Product lines get one colour each; the colour carries the line across shelf, label and web.
  const LINES = {
    digest: { ar: 'الهضم', fr: 'Digestion', color: '#56784a', band: '#e3b34f' },
    calm: { ar: 'الراحة', fr: 'Détente', color: '#585d86', band: '#b9b0e3' },
    kitchen: { ar: 'المطبخ', fr: 'Cuisine', color: '#a9612a', band: '#e8894c' },
    beauty: { ar: 'العناية', fr: 'Soin', color: '#94585a', band: '#e8aea4' },
    oils: { ar: 'الزيوت', fr: 'Huiles', color: '#3f6767', band: '#93d2c6' }
  };

  // Honey colour is graded on the Pfund scale (mm). Values are typical for the
  // floral source; the shop should confirm each lot with the producer.
  const PFUND = [
    { mm: 0, c: '#f7f2cf', fr: 'Blanc eau', ar: 'شفاف' },
    { mm: 8, c: '#f3e6a6', fr: 'Extra blanc', ar: 'أبيض جدا' },
    { mm: 17, c: '#eed585', fr: 'Blanc', ar: 'أبيض' },
    { mm: 34, c: '#e5bb53', fr: 'Extra ambré clair', ar: 'عنبري فاتح جدا' },
    { mm: 50, c: '#dba13a', fr: 'Ambré clair', ar: 'عنبري فاتح' },
    { mm: 85, c: '#bd761b', fr: 'Ambré', ar: 'عنبري' },
    { mm: 114, c: '#8e5010', fr: 'Ambré foncé', ar: 'عنبري داكن' },
    { mm: 140, c: '#5a300b', fr: 'Ambré foncé', ar: 'عنبري داكن', end: true }
  ];
  function pfundColor(mm) {
    for (let i = 1; i < PFUND.length; i++) {
      if (mm <= PFUND[i].mm) {
        const a = PFUND[i - 1], b = PFUND[i], t = (mm - a.mm) / (b.mm - a.mm);
        const h = (s) => [1, 3, 5].map(k => parseInt(s.substr(k, 2), 16));
        const ca = h(a.c), cb = h(b.c);
        return '#' + ca.map((v, k) => Math.round(v + (cb[k] - v) * t).toString(16).padStart(2, '0')).join('');
      }
    }
    return PFUND[PFUND.length - 1].c;
  }
  function pfundClass(mm) {
    let k = PFUND[0];
    for (const p of PFUND) if (!p.end && mm >= p.mm) k = p;
    return k;
  }

  const CATALOG = [
    // House products: made and labelled by El Baraka. Only N° 07 is taken from the real label; the rest are placeholders to replace.
    { id: 'n07', kind: 'house', line: 'digest', ar: 'مركب الأعشاب', arSub: 'للهضم وراحة البطن', pre: 'مركب الأعشاب', big: 'للهضم', fit: 1, fill: '#6e6a3a', fr: 'Mélange de plantes', frSub: 'Confort digestif', size: '100 g', price: 45, real: true,
      useAr: 'ملعقتان كبيرتان مع قليل من الماء بعد كل وجبة رئيسية.', useFr: '2 cuillères à soupe avec un peu d’eau, après chaque repas principal.' },
    { id: 'n03', kind: 'house', line: 'calm', ar: 'مركب المساء', arSub: 'لحظة هدوء', pre: 'مركب', big: 'المساء', fit: 1, fill: '#7d7550', fr: 'Infusion du soir', frSub: 'Moment calme', size: '80 g', price: 40 },
    { id: 'n12', kind: 'house', line: 'kitchen', ar: 'رأس الحانوت', arSub: 'خلطة الدار', pre: 'خلطة الدار', big: 'رأس الحانوت', fit: 0.74, fill: '#9a4a24', fr: 'Ras el hanout', frSub: 'Mélange maison', size: '100 g', price: 35 },
    { id: 'n21', kind: 'house', line: 'beauty', ar: 'غاسول بالأعشاب', arSub: 'للشعر والبشرة', pre: 'بالأعشاب', big: 'الغاسول', fit: 0.92, fill: '#9c8a72', fr: 'Ghassoul aux plantes', frSub: 'Cheveux et peau', size: '200 g', price: 40 },
    { id: 'n30', kind: 'house', line: 'oils', ar: 'زيت حبة البركة', arSub: 'معصور على البارد', pre: 'زيت', big: 'حبة البركة', fit: 0.8, fill: '#3a3618', fr: 'Huile de nigelle', frSub: 'Pressée à froid', size: '100 ml', price: 60 },

    // Honeys: the seven on the shop's shelf today, named as on its own labels. Bought from the
    // cooperative and sold in its labelled jar: El Baraka never labels the jar.
    // Taste notes are general descriptions of each honey; prices are examples.
    { id: 'ora', kind: 'honey', ar: 'عسل البرتقال', fr: 'Miel d’oranger', frSub: '', pfund: 16, region: { ar: 'حسب الدفعة', fr: 'Selon le lot' }, sweet: 5, strong: 2, size: '500 g', price: 120,
      noteAr: 'زهري وناعم، يتبلور بنعومة', noteFr: 'Floral et doux, cristallise fin', pairAr: 'للأطفال، مع البغرير والملوي', pairFr: 'Pour les enfants, avec baghrir et msemen' },
    { id: 'rom', kind: 'honey', ar: 'عسل أزير', fr: 'Miel de romarin', frSub: '', pfund: 20, region: { ar: 'حسب الدفعة', fr: 'Selon le lot' }, sweet: 5, strong: 1, size: '500 g', price: 110,
      noteAr: 'حلو جدا، يتبلور بسرعة وبنعومة', noteFr: 'Très doux, cristallise vite et fin', pairAr: 'مع الخبز المحمص في الفطور', pairFr: 'Sur du pain grillé au petit-déjeuner' },
    { id: 'lav', kind: 'honey', ar: 'عسل الخزامة', fr: 'Miel de lavande', frSub: '', pfund: 45, region: { ar: 'حسب الدفعة', fr: 'Selon le lot' }, sweet: 4, strong: 2, size: '500 g', price: 150,
      noteAr: 'زهري ورقيق بنفحة الخزامة', noteFr: 'Floral et délicat, une note de lavande', pairAr: 'في الأعشاب المنقوعة أو مع الياغورت', pairFr: 'Dans une infusion ou un yaourt' },
    { id: 'crb', kind: 'honey', ar: 'عسل الخروب', fr: 'Miel de caroubier', frSub: '', pfund: 70, region: { ar: 'حسب الدفعة', fr: 'Selon le lot' }, sweet: 3, strong: 3, size: '500 g', price: 140,
      noteAr: 'بنكهة الكراميل والكاكاو، قليل الحلاوة', noteFr: 'Notes de caramel et de cacao, peu sucré', pairAr: 'مع الجبن الطري أو الخبز المحمص', pairFr: 'Avec un fromage frais ou du pain grillé' },
    { id: 'juj', kind: 'honey', ar: 'عسل السدر', fr: 'Miel de jujubier', frSub: '', pfund: 85, region: { ar: 'حسب الدفعة', fr: 'Selon le lot' }, sweet: 3, strong: 4, size: '500 g', price: 250,
      noteAr: 'غني، بنكهة الكراميل والفواكه الجافة', noteFr: 'Riche, notes de caramel et de fruits secs', pairAr: 'خالص بالملعقة، أو مع اللوز', pairFr: 'Pur, à la cuillère, ou avec des amandes' },
    { id: 'asp', kind: 'honey', ar: 'عسل الزكوم', fr: 'Miel d’asperge', frSub: '', pfund: 100, region: { ar: 'حسب الدفعة', fr: 'Selon le lot' }, sweet: 2, strong: 4, size: '500 g', price: 180,
      noteAr: 'داكن، بمرارة خفيفة في آخره', noteFr: 'Sombre, une légère amertume en fin de bouche', pairAr: 'ملعقة صباحا', pairFr: 'Une cuillère le matin' },
    { id: 'ori', kind: 'honey', ar: 'عسل الزعتر', fr: 'Miel d’origan', frSub: '', pfund: 105, region: { ar: 'حسب الدفعة', fr: 'Selon le lot' }, sweet: 2, strong: 5, size: '500 g', price: 160,
      noteAr: 'قوي وعشبي، بلمسة حارة', noteFr: 'Puissant et herbacé, un peu poivré', pairAr: 'ملعقة صباحا، أو في أتاي', pairFr: 'Une cuillère le matin, ou dans l’atay' },

    // Other hive products, also bought in
    { id: 'pol', kind: 'hive', ar: 'حبوب اللقاح', fr: 'Pollen frais', size: '250 g', price: 90, tint: '#d9a230' },
    { id: 'gel', kind: 'hive', ar: 'غذاء ملكات النحل', fr: 'Gelée royale', size: '10 g', price: 120, tint: '#efe6c4' },
    { id: 'pro', kind: 'hive', ar: 'العكبر (البروبوليس)', fr: 'Propolis', size: '30 ml', price: 70, tint: '#6d4317' }
  ];

  /* ---------- label templates (sized in em; 1em = 4 mm in print) ---------- */
  const LABEL_CSS = `
  .elb-sheet{--lb-ink:${COLOR.deep};--lb-green:${COLOR.green};--lb-honey:${COLOR.honey};--lb-paper:${COLOR.paper}}
  .elb-fit{container-type:inline-size;width:100%}
  .elb-lb{position:relative;box-sizing:border-box;background:var(--lb-paper);color:var(--lb-ink);overflow:hidden;font-family:'Readex Pro',system-ui,sans-serif;line-height:1.25}
  .elb-lb *{box-sizing:border-box}
  .elb-frame-svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
  .elb-frame-svg .fr-hair{fill:none;stroke:var(--lb-green);stroke-width:.25}
  .elb-frame-svg .fr-cord{fill:none;stroke:var(--lb-green);stroke-width:.22}
  .elb-frame-svg .fr-ros{fill:none;stroke:var(--lb-green);stroke-width:.22}
    .elb-mono{font-family:'IBM Plex Mono',ui-monospace,monospace;font-variant-numeric:tabular-nums;letter-spacing:.04em}

  /* house label, 200 x 60 mm wrap-around: use | front | info. Green front = El Baraka, band = product line */
  .elb-wrap{font-size:2cqw;width:50em;height:15em;display:grid;grid-template-columns:16.25em 17.5em 16.25em}
  .elb-wrap .pn{position:relative;min-width:0;display:flex;flex-direction:column;justify-content:center}
  .elb-wrap .use .in{padding:0 1.2em 0 2.3em;font-size:.5em;display:flex;flex-direction:column;gap:.28em}
  .elb-wrap h5{margin:.25em 0 0;font-family:'IM Fell English SC',Georgia,serif;font-weight:400;font-size:1em;letter-spacing:.1em;color:var(--lb-green);display:flex;justify-content:space-between;gap:.5em;border-bottom:.06em solid var(--lb-green)}
  .elb-wrap h5 span{font-family:'Readex Pro',sans-serif;letter-spacing:0;font-weight:500}
  .elb-wrap .use p{margin:0;line-height:1.4}
  .elb-wrap .use p.ar{font-size:1.08em}
  .elb-wrap .ph{display:inline-block;border-bottom:.06em dashed currentColor;opacity:.7;padding:0 .12em;line-height:1.2}
  .elb-wrap .use .sm{font-size:.86em;opacity:.8}
  .elb-wrap .front{background:var(--lb-green);color:#f3f4ec;align-items:center;justify-content:flex-start;text-align:center;overflow:hidden;padding:1.05em .7em 0}
  .elb-wrap .front::before{content:"";position:absolute;inset:.5em .5em 2.6em;border:.05em solid rgba(243,244,236,.5);pointer-events:none}
  .elb-wrap .front .lg{position:relative;display:block;width:8.2em;height:auto}
  .elb-wrap .pre{position:relative;font-family:'Aref Ruqaa',serif;font-weight:700;font-size:1.1em;line-height:1.5;margin-top:.15em}
  .elb-wrap .big{position:relative;font-family:'Aref Ruqaa',serif;font-weight:700;line-height:1.55;white-space:nowrap;margin-top:-.3em}
  .elb-wrap .fr{position:relative;font-family:'IM Fell English SC',Georgia,serif;font-size:.72em;letter-spacing:.14em;margin-top:-.2em}
  .elb-wrap .band .w{position:absolute;inset-inline-end:.9em;font-family:'IBM Plex Mono',monospace;font-weight:500;font-size:.92em;letter-spacing:.02em;text-transform:none}
  .elb-wrap .band{position:absolute;left:0;right:0;bottom:0;height:2.1em;background:var(--band);color:#10291a;display:flex;justify-content:center;align-items:center;gap:.7em;font-size:.86em;font-weight:500;letter-spacing:.08em;text-transform:uppercase}
  .elb-wrap .band [dir=rtl]{font-family:'Aref Ruqaa',serif;font-weight:700;font-size:1.2em;letter-spacing:0;text-transform:none}
  .elb-wrap .info .in{padding:0 2.3em 0 1.2em;display:flex;flex-direction:column;gap:.45em}
  .elb-wrap .wt{display:flex;justify-content:space-between;align-items:baseline;border-top:.04em solid var(--lb-green);border-bottom:.04em solid var(--lb-green);padding:.12em 0;color:var(--lb-green)}
  .elb-wrap .wt>span{font-size:.42em}
  .elb-wrap .wt [dir=rtl]{font-size:1.1em}
  .elb-wrap .wt b{font-size:.95em;font-weight:500}
  .elb-wrap dl{margin:0;display:flex;flex-direction:column;gap:.15em;font-size:.4em}
  .elb-wrap dl div{display:flex;justify-content:space-between;gap:.5em}
  .elb-wrap dd{margin:0;white-space:nowrap}
  .elb-wrap .ad{display:flex;flex-direction:column;gap:.12em;color:var(--lb-green)}
  .elb-wrap .ad img{display:block;width:6.6em;height:auto;margin-bottom:.2em}
  .elb-wrap .ad span{font-size:.38em}

  /* honey tasting card, 85 x 55 mm. Lives in the bag or on the shelf, never on the jar. */
  .elb-card{font-size:4.70588cqw;width:21.25em;height:13.75em;padding:1.15em 1.3em 1em;display:grid;grid-template-rows:auto auto 1fr auto;gap:.3em}
  .elb-card .top{display:flex;justify-content:space-between;align-items:center;font-size:.4em;letter-spacing:.16em;color:var(--lb-green);font-family:'IM Fell English SC',Georgia,serif}
  .elb-card .top .ar{font-family:'Readex Pro',sans-serif;letter-spacing:0;font-size:1.1em}
  .elb-card .nm{display:flex;justify-content:space-between;align-items:flex-end;gap:.6em;border-bottom:.05em solid var(--lb-green);padding-bottom:.25em}
  .elb-card .nm .ar{font-family:'Aref Ruqaa',serif;font-weight:700;font-size:1.75em;line-height:1}
  .elb-card .nm .fr{font-family:'IM Fell English SC',Georgia,serif;font-size:.66em;letter-spacing:.08em;text-align:start}
  .elb-card .nm .fr i{display:block;font-family:'IM Fell English',Georgia,serif;font-size:.85em;letter-spacing:0;opacity:.8}
  .elb-card .bd{display:grid;grid-template-columns:1.15fr 1fr;gap:.25em .8em;align-content:start}
  .elb-card .pf{grid-column:1/-1}
  .elb-card .pf .bar{position:relative;height:.62em;border-radius:.1em;margin:.55em 0 .12em}
  .elb-card .pf .pin{position:absolute;top:-.28em;width:.12em;height:1.18em;background:var(--lb-ink);transform:translateX(-50%)}
  .elb-card .pf .pin::after{content:"";position:absolute;top:-.3em;left:50%;transform:translateX(-50%);border:.18em solid transparent;border-top-color:var(--lb-ink)}
  .elb-card .k{font-size:.36em;letter-spacing:.12em;text-transform:uppercase;color:var(--lb-green)}
  .elb-card .v{font-size:.46em}
  .elb-card .pf .sc{position:relative;height:1.1em;font-size:.32em;opacity:.8}
  .elb-card .pf .sc span{position:absolute;top:0;transform:translateX(-50%);white-space:nowrap}
  .elb-card .pf .sc span:first-child{transform:none}
  .elb-card .pf .sc span:last-child{transform:translateX(-100%)}
  .elb-card .meter{display:flex;gap:.16em;margin-top:.1em}
  .elb-card .meter i{width:.42em;height:.42em;border-radius:50%;border:.05em solid var(--lb-green)}
  .elb-card .meter i.on{background:var(--lb-green)}
  .elb-card .ft{display:grid;grid-template-columns:1.6em 1fr;gap:.5em;align-items:center;border-top:.05em solid var(--lb-green);padding-top:.3em}
  .elb-card .ft .lg{display:block;width:1.6em;height:auto}
  .elb-card .ft p{margin:0;font-size:.33em;line-height:1.4}
  .elb-card .ft p b{font-weight:500}
  .elb-card .ft .k{font-size:1em}
  .elb-card .mt{display:flex;flex-direction:column;gap:.3em}
  .elb-card .mt>span{display:flex;align-items:center;justify-content:space-between;gap:.4em}
  .elb-card .meter{margin-top:0}
  .elb-card-back{grid-template-rows:auto 1fr auto auto}
  .elb-card-back .cols{display:grid;grid-template-columns:1fr 1fr;gap:.9em;font-size:.46em;line-height:1.45}
  .elb-card-back .cols p{margin:.1em 0 .55em}
  .elb-card-back .cols .k{font-size:.86em}
  .elb-card-back .cols [dir=rtl] .k{letter-spacing:0;font-size:.95em}
  .elb-card-back .re{display:flex;justify-content:space-between;align-items:center;gap:.6em;border-top:.05em solid var(--lb-green);padding-top:.3em}
  .elb-card-back .re b{display:block;font-size:.5em;font-weight:500;margin-top:.15em}
  .elb-card-back .re .k{font-size:.36em}
  .elb-card-back .re>div:first-child{display:flex;flex-direction:column}
  .elb-card-back .qr{width:2.3em;height:2.3em}
  .elb-card-back .qr svg{width:100%;height:100%;display:block}
  .elb-card-back .sig{display:flex;justify-content:space-between;font-size:.32em;color:var(--lb-green)}


  `;

  const LOT = '<span class="ph">lot</span>', DATE = '<span class="ph">mm/aaaa</span>';

  function houseWrap(p) {
    const L = LINES[p.line];
    return `<div class="elb-fit"><div class="elb-lb elb-wrap" style="--band:${L.band}">` + frame(500, 150, { inset: 4, rosette: 4.2, amp: 1, wl: 3 }) +
      `<div class="pn use"><div class="in">` +
        `<h5>Mode d’emploi <span dir="rtl">طريقة الاستعمال</span></h5>` +
        `<p class="ar" dir="rtl">${p.useAr || '<span class="ph">طريقة الاستعمال</span>'}</p><p>${p.useFr || '<span class="ph">mode d’emploi</span>'}</p>` +
        `<h5>Composition <span dir="rtl">المكونات</span></h5><p>${p.comp || '<span class="ph">plantes et proportions</span> · <span class="ph" dir="rtl">الأعشاب والنسب</span>'}</p>` +
        `<p class="sm">Conserver au sec, à l’abri de la lumière.<br><span dir="rtl">يحفظ في مكان جاف بعيدا عن الضوء.</span></p>` +
      `</div></div>` +
      `<div class="pn front">` +
        `<img class="lg" src="${ASSETS.plainCream}" alt="Herboristerie El Baraka">` +
        `<div class="pre" dir="rtl">${p.pre || p.ar}</div>` +
        `<div class="big" dir="rtl" style="font-size:${P(3.1 * (p.fit || 1))}em">${p.big || p.ar}</div>` +
        `<div class="fr">${p.fr}</div>` +
        `<div class="band"><span dir="rtl">${L.ar}</span><span>${L.fr}</span><span class="w" dir="ltr">${p.size}</span></div>` +
      `</div>` +
      `<div class="pn info"><div class="in">` +
        `<div class="wt"><span>Poids net · <span dir="rtl">الوزن الصافي</span></span><b class="elb-mono">${p.size}</b></div>` +
        `<dl><div><dt>Lot</dt><dd class="elb-mono">${LOT}</dd></div><div><dt>Valable jusqu’au · <span dir="rtl">صالح إلى غاية</span></dt><dd class="elb-mono">${DATE}</dd></div></dl>` +
        `<div class="ad"><img src="${ASSETS.plainGreen}" alt="Herboristerie El Baraka"><span dir="rtl">593 شارع فلسطين · المحمدية</span><span class="elb-mono" dir="ltr">06 71 51 29 54 · 06 71 46 14 59</span></div>` +
      `</div></div>` +
      `</div></div>`;
  }

  function meter(n) { let s = ''; for (let i = 1; i <= 5; i++) s += `<i class="${i <= n ? 'on' : ''}"></i>`; return `<span class="meter">${s}</span>`; }

  function pfundGradient() {
    return 'linear-gradient(90deg,' + PFUND.map(p => `${p.c} ${Math.round(p.mm / 140 * 100)}%`).join(',') + ')';
  }

  function pfundTicks() {
    return [0, 34, 50, 85, 114, 140].map(v => `<span style="left:${(v / 140 * 100).toFixed(1)}%">${v === 140 ? '140 mm' : v}</span>`).join('');
  }

  function honeyCard(h) {
    const cls = pfundClass(h.pfund);
    return `<div class="elb-fit"><div class="elb-lb elb-card">` + frame(212.5, 137.5, { inset: 4.4, rosette: 3.8, amp: .9, wl: 2.8 }) +
      `<div class="top"><span>Carte du miel · Sélection El Baraka</span><span class="ar" dir="rtl">بطاقة العسل</span></div>` +
      `<div class="nm"><div class="fr">${h.fr}<i>${h.frSub || '&nbsp;'}</i></div><div class="ar" dir="rtl">${h.ar}</div></div>` +
      `<div class="bd">` +
      `<div class="pf"><span class="k">Couleur · Pfund ${h.pfund} mm · ${cls.fr}</span><div class="bar" style="background:${pfundGradient()}"><span class="pin" style="left:${Math.min(98, h.pfund / 140 * 100)}%"></span></div>` +
      `<div class="sc elb-mono">${pfundTicks()}</div></div>` +
      `<div><span class="k">Goût</span><div class="v">${h.noteFr}</div><div class="v" dir="rtl">${h.noteAr}</div></div>` +
      `<div class="mt"><span><span class="k">Douceur</span>${meter(h.sweet)}</span><span><span class="k">Intensité</span>${meter(h.strong)}</span></div>` +
      `</div>` +
      `<div class="ft"><img class="lg" src="${ASSETS.markGreen}" alt=""><p><span class="k">Origine</span> <b>Miel du Maroc · ${h.region.fr}</b><br>Producteur, n° d’autorisation ONSSA et lot : voir l’étiquette du pot.</p></div>` +
      `</div></div>`;
  }

  function honeyCardBack(h) {
    return `<div class="elb-fit"><div class="elb-lb elb-card elb-card-back">` + frame(212.5, 137.5, { inset: 4.4, rosette: 3.8, amp: .9, wl: 2.8 }) +
      `<div class="top"><span>${h.fr}</span><span class="ar" dir="rtl">${h.ar}</span></div>` +
      `<div class="cols"><div><span class="k">À essayer</span><p>${h.pairFr}</p><span class="k">Il cristallise ?</span><p>C’est naturel, pas un défaut. Bain-marie doux, sous 40 °C, pour le rendre liquide.</p></div>` +
      `<div dir="rtl"><span class="k">جربه</span><p>${h.pairAr}</p><span class="k">تجمّد العسل؟</span><p>التبلور أمر طبيعي وليس غشا. سخّنه في حمام مائي خفيف أقل من 40 درجة.</p></div></div>` +
      `<div class="re"><div><span class="k">Recommander · إعادة الطلب</span><b class="elb-mono">WhatsApp 06 71 51 29 54</b></div><div class="qr" aria-label="QR code WhatsApp">${qrPlaceholder()}</div></div>` +
      `<div class="sig"><span>Herboristerie El Baraka · 593 bd de Palestine, Mohammedia</span><span dir="rtl">أعشاب البركة · المحمدية</span></div>` +
      `</div></div>`;
  }

  function qrPlaceholder() {
    // stand-in pattern; swap for a real QR of the wa.me link before printing
    const R = rng(593); let s = '';
    for (let y = 0; y < 21; y++) for (let x = 0; x < 21; x++) {
      const f = (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13);
      if (f) continue;
      if (R() > 0.52) s += `M${x} ${y}h1v1h-1z`;
    }
    const finder = (x, y) => `M${x} ${y}h7v7h-7zM${x + 1} ${y + 1}v5h5v-5zM${x + 2} ${y + 2}h3v3h-3z`;
    return `<svg viewBox="-1 -1 23 23"><rect x="-1" y="-1" width="23" height="23" fill="#fff"/><path fill-rule="evenodd" fill="#10291a" d="${s}${finder(0, 0)}${finder(14, 0)}${finder(0, 14)}"/></svg>`;
  }

  return {
    COLOR, FONTS_URL, LINES, PFUND, CATALOG, LABEL_CSS,
    ASSETS, setAssets, frame, houseWrap, honeyCard, honeyCardBack,
    rng, quad, quadTan,
    pfundColor, pfundClass, pfundGradient, hexPath, guillocheRing
  };
});
