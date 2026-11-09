/*
 * Reads catalogue.js (the one file to edit) and hands the shop a clean list: unknown rayons,
 * missing sizes and duplicate ids are left out and reported in ShopData.problems, so one typo
 * in the catalogue never breaks the page.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./catalogue.js'));
  else root.ShopData = factory(root.CATALOGUE);
})(typeof self !== 'undefined' ? self : this, function (C) {
  'use strict';

  const STATUSES = ['shop', 'brand', 'example'];
  const problems = [];
  const src = C && Array.isArray(C.categories) && Array.isArray(C.products) ? C : { categories: [], products: [] };
  if (src !== C) problems.push('catalogue.js is missing or malformed');

  const CATS = src.categories.filter(c => c && c.id && c.fr && c.ar);
  const catIds = new Set(CATS.map(c => c.id));
  const seen = new Set();
  const validSize = (s) => Array.isArray(s) && typeof s[0] === 'string' && (s[1] === null || (typeof s[1] === 'number' && s[1] >= 0));

  const PRODUCTS = src.products.filter(p => {
    const why = !p || !p.id ? 'no id'
      : seen.has(p.id) ? 'duplicate id'
      : !catIds.has(p.cat) ? `unknown rayon "${p.cat}"`
      : !p.fr ? 'missing name'
      : !Array.isArray(p.sizes) || !p.sizes.length || !p.sizes.every(validSize) ? 'bad sizes'
      : '';
    if (why) { problems.push(`${(p && p.id) || '?'}: ${why}`); return false; }
    seen.add(p.id);
    return true;
  }).map(p => Object.assign({}, p, {
    status: STATUSES.includes(p.status) ? p.status : 'brand',
    def: p.def && p.sizes[p.def] ? p.def : 0
  }));

  const FAQ = (Array.isArray(src.faq) ? src.faq : []).filter(q => q && q.fr);

  return { CATS, PRODUCTS, FAQ, problems };
});
