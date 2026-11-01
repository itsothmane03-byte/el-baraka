/*
 * Mock-ups for the proposal: El Baraka kraft bags and the shopfront.
 * Both carry the shop's ORIGINAL logo (image files listed in ElBaraka.ASSETS).
 * The date line appears only on the sign and the printed bag.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./baraka.js'));
  else root.Mockups = factory(root.ElBaraka);
})(typeof self !== 'undefined' ? self : this, function (E) {
  'use strict';
  const A = () => E.ASSETS;
  const RATIO = 1400 / 516;   // original logo with the date line
  const PLAIN = 1400 / 451;   // original logo as today

  const fibres = (x0, y0, w, h, seed) => {
    let s = seed, d = '';
    const r = () => (s = (s * 9301 + 49297) % 233280) / 233280;
    for (let i = 0; i < 70; i++) { const x = x0 + r() * w, y = y0 + r() * h; d += `M${x.toFixed(1)} ${y.toFixed(1)}l${(r() * 2 - 1).toFixed(1)} ${(8 + r() * 18).toFixed(1)}`; }
    return `<path d="${d}" stroke="#8b6a43" stroke-width=".5" opacity=".25"/>`;
  };
  const paper = (id, c1, c2) => `<linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="${c2}"/><stop offset=".12" stop-color="${c1}"/><stop offset=".88" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>`;
  const logo = (href, cx, y, w, r = RATIO) => `<image href="${href}" x="${(cx - w / 2).toFixed(1)}" y="${y}" width="${w}" height="${(w / r).toFixed(1)}" preserveAspectRatio="xMidYMid meet"/>`;

  function bags() {
    return `<svg viewBox="0 0 1000 640" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="mk-ink" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="7"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.5 1.55"/><feComposite in="SourceGraphic" operator="in"/></filter>
      ${paper('mk-kA', '#c8a073', '#ad8656')}${paper('mk-kB', '#c39a6b', '#a57e50')}
    </defs>
    <rect width="1000" height="640" fill="#efece4"/>
    <ellipse cx="250" cy="592" rx="170" ry="14" fill="rgba(0,0,0,.12)"/><ellipse cx="720" cy="600" rx="210" ry="16" fill="rgba(0,0,0,.12)"/>
    <!-- A: plain kraft bag, the logo applied with a rubber stamp, folded top closed with a round sticker -->
    <path d="M110 150H390V585H110Z" fill="url(#mk-kA)"/>
    ${fibres(110, 150, 280, 430, 11)}
    <path d="M110 150H390V214H110Z" fill="#b48c5c"/><path d="M110 214H390" stroke="#8f6c43" stroke-width="1.2"/>
    <path d="M110 160H390" stroke="#a37c4e" stroke-width=".8" stroke-dasharray="3 3"/>
    <circle cx="250" cy="210" r="31" fill="#024e23"/>
    <image href="${A().markCream}" x="233" y="190" width="34" height="39" preserveAspectRatio="xMidYMid meet"/>
    <g filter="url(#mk-ink)" opacity=".9">${logo(A().plainGreen, 250, 345, 236, PLAIN)}
      <text x="250" y="458" text-anchor="middle" font-family="Montserrat,Readex Pro,sans-serif" font-weight="700" font-size="10.5" letter-spacing="1.8" fill="#024e23">06 71 51 29 54</text></g>
    <!-- B: printed kraft bag with twisted handles -->
    <path d="M590 120Q590 40 640 40Q690 40 690 120" fill="none" stroke="#9c7748" stroke-width="7" stroke-linecap="round"/>
    <path d="M750 120Q750 40 800 40Q850 40 850 120" fill="none" stroke="#9c7748" stroke-width="7" stroke-linecap="round"/>
    <path d="M590 120Q590 40 640 40Q690 40 690 120M750 120Q750 40 800 40Q850 40 850 120" fill="none" stroke="#c7a06e" stroke-width="2" stroke-dasharray="5 4"/>
    <path d="M520 110H920V592H520Z" fill="url(#mk-kB)"/>
    ${fibres(520, 110, 400, 480, 23)}
    <path d="M520 110H920V146H520Z" fill="#b08758"/>
    ${logo(A().logoGreen, 720, 236, 320)}
    <path d="M612 392H828" stroke="#024e23" stroke-width="1"/>
    <text x="720" y="420" text-anchor="middle" font-family="Readex Pro,sans-serif" font-size="13" fill="#024e23">Plantes · Miels · Produits de la ruche</text>
    <text x="720" y="444" text-anchor="middle" font-family="Readex Pro,sans-serif" font-size="14" fill="#024e23" direction="rtl">أعشاب · عسل · منتجات الخلية</text>
    <g fill="#024e23"><path transform="translate(664 520.5) scale(.48)" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/>
    <text x="728" y="530" text-anchor="middle" font-family="Montserrat,Readex Pro,sans-serif" font-weight="700" font-size="11" letter-spacing="1.6">06 71 51 29 54</text></g>
    <text x="720" y="560" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="11" letter-spacing="1.5" fill="#024e23">593 BD DE PALESTINE · MOHAMMEDIA</text>
    <rect x="655" y="62" width="88" height="60" rx="2" fill="#f3f4ec" transform="rotate(-6 700 92)"/>
    <text x="700" y="96" text-anchor="middle" font-family="IM Fell English SC,serif" font-size="10" fill="#024e23" transform="rotate(-6 700 92)">CARTE DU MIEL</text>
  </svg>`;
  }

  function shopfront() {
    let stripes = '', scallop = 'M200 580';
    for (let i = 0; i < 16; i++) stripes += `<rect x="${200 + i * 50}" y="520" width="25" height="60" fill="#1f5a3a"/>`;
    for (let i = 0; i < 16; i++) scallop += 'q12.5 18 25 0q12.5 18 25 0';
    const lines = (a) => Array.from({ length: a.n }, (_, i) => a.f(i)).join('');
    return `<svg viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="mk-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c58c76"/><stop offset="1" stop-color="#b27a64"/></linearGradient>
    <linearGradient id="mk-glass" x1="0" x2="1"><stop offset="0" stop-color="#2d3a36"/><stop offset=".35" stop-color="#55645e"/><stop offset=".42" stop-color="#7d8b84"/><stop offset=".5" stop-color="#3e4b46"/><stop offset="1" stop-color="#26312d"/></linearGradient>
    <linearGradient id="mk-box" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#173a25"/><stop offset="1" stop-color="#0f2a1a"/></linearGradient>
    <filter id="mk-glow" x="-10%" y="-200%" width="120%" height="500%"><feGaussianBlur stdDeviation="7"/></filter>
    <filter id="mk-grain"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" seed="3"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .12 0"/></filter></defs>
    <rect width="1200" height="900" fill="url(#mk-wall)"/><rect width="1200" height="900" filter="url(#mk-grain)"/>
    <g fill="#8fa0a8"><rect x="330" y="0" width="150" height="110"/><rect x="720" y="0" width="150" height="110"/></g>
    <g stroke="#6f7f88" stroke-width="3">${lines({ n: 9, f: (i) => `<path d="M330 ${12 + i * 11}h150M720 ${12 + i * 11}h150"/>` })}</g>
    <!-- light box: deep green, the original logo in gold, today's lime kept as a lit edge -->
    <rect x="210" y="150" width="780" height="210" rx="6" fill="url(#mk-box)"/>
    <path d="M210 360H990L960 400H240Z" fill="#0c2216"/>
    ${[330, 600, 870].map(x => `<ellipse cx="${x}" cy="382" rx="26" ry="8" fill="#fff7d6"/><ellipse cx="${x}" cy="382" rx="40" ry="14" fill="#fff3c4" opacity=".25"/>`).join('')}
    <rect x="210" y="350" width="780" height="10" fill="#8cc63e" filter="url(#mk-glow)" opacity=".9"/><rect x="210" y="352" width="780" height="6" fill="#a6dc56"/>
    ${logo(A().logoGold, 600, 164, 500)}
    <!-- awning (kept) -->
    <rect x="200" y="500" width="800" height="24" fill="#e9eee6"/>
    <rect x="200" y="520" width="800" height="60" fill="#e9eee6"/>${stripes}
    <path d="${scallop}V580Z" fill="#e9eee6"/><path d="${scallop}" fill="none" stroke="#c9d2c6" stroke-width="1.2"/>
    <!-- shopfront -->
    <rect x="150" y="600" width="900" height="300" fill="#141414"/>
    ${lines({ n: 6, f: (i) => `<path d="M150 ${620 + i * 45}h90M960 ${620 + i * 45}h90" stroke="#2c2c2c" stroke-width="2"/>` })}
    <rect x="250" y="610" width="700" height="290" fill="url(#mk-glass)"/>
    <path d="M600 610V900" stroke="#9aa6a1" stroke-width="5"/>
    <path d="M580 700V820M620 700V820" stroke="#cfd6d2" stroke-width="7" stroke-linecap="round"/>
    ${[425, 775].map(x => `<image href="${A().markGold}" x="${x - 44}" y="700" width="88" height="101" opacity=".9" preserveAspectRatio="xMidYMid meet"/>`).join('')}
    <path d="M250 610L420 900M330 610L470 900" stroke="#fff" stroke-width="14" opacity=".05"/>
  </svg>`;
  }

  return { bags, shopfront };
});
