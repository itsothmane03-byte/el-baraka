/*
 * Reads catalogue.js (the one file to edit) and hands the shop a clean list: unknown rayons,
 * missing sizes and duplicate ids are left out and reported in ShopData.problems, so one typo
 * in the catalogue never breaks the page. Also holds the short notes shown on product sheets.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./catalogue.js'));
  else root.ShopData = factory(root.CATALOGUE);
})(typeof self !== 'undefined' ? self : this, function (C) {
  'use strict';

  // notes shown on the product sheet, by rayon (no health claims)
  const NOTES = {
    sirops: { fr: 'Préparation traditionnelle au miel. Elle ne remplace pas l’avis d’un médecin. Demandez conseil pour les enfants et en cas de traitement.', ar: 'تركيبة تقليدية بالعسل. ما كتعوضش رأي الطبيب. اطلب النصيحة بالنسبة للأطفال وفحالة العلاج.' },
    complements: { fr: 'Complément alimentaire : respectez la dose indiquée sur la boîte. Il ne remplace pas une alimentation variée. Demandez conseil en cas de grossesse, d’allaitement ou de traitement.', ar: 'مكمل غذائي: احترم الجرعة المكتوبة على العلبة. ما كيعوضش التغذية المتنوعة. اطلب النصيحة فحالة الحمل، الرضاعة ولا العلاج.' },
    vitalite: { fr: 'À utiliser comme indiqué sur l’emballage. Demandez conseil en boutique, surtout en cas de traitement ou de problème de santé.', ar: 'استعملو كيف مكتوب على العلبة. اطلب النصيحة فالحانوت، خصوصا إلا كنتي كتاخذ دوا.' },
    sport: { fr: 'À intégrer dans une alimentation équilibrée et une activité physique régulière.', ar: 'كتستعمل مع تغذية متوازنة ونشاط بدني منتظم.' },
    huiles: { fr: 'Huiles essentielles : usage externe, diluées, loin des yeux. Demandez conseil avant usage.', ar: 'الزيوت العطرية: للاستعمال الخارجي، مخففة، بعيدا على العينين. اطلب النصيحة قبل الاستعمال.' }
  };

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
      : !p.fr || !p.ar ? 'missing name'
      : !Array.isArray(p.sizes) || !p.sizes.length || !p.sizes.every(validSize) ? 'bad sizes'
      : !p.photo && !p.pack ? 'no photo and no pack'
      : '';
    if (why) { problems.push(`${(p && p.id) || '?'}: ${why}`); return false; }
    seen.add(p.id);
    return true;
  }).map(p => Object.assign({}, p, {
    status: STATUSES.includes(p.status) ? p.status : 'example',
    def: p.def && p.sizes[p.def] ? p.def : 0,
    accent: p.accent || (p.cat === 'miel' && p.pack ? p.pack.color : undefined)
  }));

  return { CATS, PRODUCTS, NOTES, problems };
});
