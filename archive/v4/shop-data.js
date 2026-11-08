/*
 * The shop preview's catalogue: ten rayons and their products, with formats (which change
 * the price) and flavours (which do not). Honeys and house blends come from baraka.js; every
 * other product here is an example to replace with the shop's real list and prices.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./baraka.js'), require('./producer.js'));
  else root.ShopData = factory(root.ElBaraka, root.Producer);
})(typeof self !== 'undefined' ? self : this, function (E, PR) {
  'use strict';

  const CATS = [
    { id: 'miel', fr: 'Miels', ar: 'العسل', color: '#c47a16', lineFr: 'Miels du Maroc, en plusieurs formats.', lineAr: 'عسل مغربي، بعدة أحجام.' },
    { id: 'ruche', fr: 'Produits de la ruche', ar: 'منتجات النحل', color: '#d9a32e', lineFr: 'Gelée royale, pollen, propolis et cire.', lineAr: 'غذاء الملكات، حبوب اللقاح، العكبر والشمع.' },
    { id: 'plantes', fr: 'Plantes & tisanes', ar: 'الأعشاب', color: '#5d8a3c', lineFr: 'Plantes séchées et graines, au poids.', lineAr: 'أعشاب مجففة وحبوب، بالوزن.' },
    { id: 'maison', fr: 'Mélanges de la maison', ar: 'خلطات الدار', color: '#1d5631', lineFr: 'Préparés à la boutique, avec leur mode d’emploi.', lineAr: 'موجدة فالحانوت، مع طريقة الاستعمال.' },
    { id: 'complements', fr: 'Compléments alimentaires', ar: 'المكملات الغذائية', color: '#3b6e9a', lineFr: 'Gélules et comprimés, en boîte d’origine.', lineAr: 'كبسولات وأقراص، فعلبتها الأصلية.' },
    { id: 'sport', fr: 'Protéines & sport', ar: 'البروتين والرياضة', color: '#a8382c', lineFr: 'Protéines, gainers et créatine, plusieurs goûts.', lineAr: 'بروتين، غاينر وكرياتين، بعدة أذواق.' },
    { id: 'vitalite', fr: 'Vitalité', ar: 'الحيوية', color: '#7b3f72', lineFr: 'Plantes et compléments pour l’énergie, pour lui et pour elle.', lineAr: 'أعشاب ومكملات للطاقة، للرجل والمرأة.' },
    { id: 'remedes', fr: 'Remèdes de plantes', ar: 'وصفات الأعشاب', color: '#3f7f78', lineFr: 'Préparations traditionnelles aux plantes et au miel.', lineAr: 'وصفات تقليدية بالأعشاب والعسل.' },
    { id: 'huiles', fr: 'Huiles', ar: 'الزيوت', color: '#8f7a2a', lineFr: 'Huiles végétales pressées et huiles essentielles.', lineAr: 'زيوت نباتية وزيوت عطرية.' },
    { id: 'soins', fr: 'Savons & soins', ar: 'الصابون والعناية', color: '#b9707e', lineFr: 'Savon noir, argan, henné et eau de rose.', lineAr: 'الصابون البلدي، الأركان، الحناء وماء الورد.' }
  ];

  // notes shown on the product sheet, by rayon (no health claims)
  const NOTES = {
    complements: { fr: 'Complément alimentaire : respectez la dose indiquée sur la boîte. Il ne remplace pas une alimentation variée. Demandez conseil en cas de grossesse, d’allaitement ou de traitement.', ar: 'مكمل غذائي: احترم الجرعة المكتوبة على العلبة. ما كيعوضش التغذية المتنوعة. اطلب النصيحة فحالة الحمل، الرضاعة ولا العلاج.' },
    vitalite: { fr: 'À utiliser comme indiqué sur l’emballage. Demandez conseil en boutique, surtout en cas de traitement ou de problème de santé.', ar: 'استعملو كيف مكتوب على العلبة. اطلب النصيحة فالحانوت، خصوصا إلا كنتي كتاخذ دوا.' },
    remedes: { fr: 'Préparation traditionnelle. Elle ne remplace pas l’avis d’un médecin.', ar: 'وصفة تقليدية. ما كتعوضش رأي الطبيب.' },
    sport: { fr: 'À intégrer dans une alimentation équilibrée et une activité physique régulière.', ar: 'كتستعمل مع تغذية متوازنة ونشاط بدني منتظم.' },
    huiles: { fr: 'Huiles essentielles : usage externe, diluées, loin des yeux. Demandez conseil avant usage.', ar: 'الزيوت العطرية: للاستعمال الخارجي، مخففة، بعيدا على العينين. اطلب النصيحة قبل الاستعمال.' }
  };

  const R5 = (n) => Math.round(n / 5) * 5;
  const P = []; // products
  const add = (o) => P.push(o);
  const S = (...pairs) => { const a = []; for (let i = 0; i < pairs.length; i += 2) a.push([pairs[i], pairs[i + 1]]); return a; };

  // honeys: the photo, three formats priced from the 500 g jar
  E.CATALOG.filter(p => p.kind === 'honey').forEach(h => {
    const acc = (PR.HONEYS.find(x => x.id === h.id) || {}).acc;
    add({ id: h.id, cat: 'miel', fr: h.fr, ar: h.ar, photo: `img/photos/${h.id}`, accent: acc,
      sizes: S('250 g', R5(h.price * .55), '500 g', h.price, '1 kg', R5(h.price * 1.9 / 2) * 2), def: 1,
      descFr: h.noteFr, descAr: h.noteAr, pairFr: h.pairFr, pairAr: h.pairAr, sweet: h.sweet, strong: h.strong, featured: ['ora', 'juj'].includes(h.id) });
  });
  // house blends: El Baraka's own pouch
  E.CATALOG.filter(p => p.kind === 'house').forEach(h => {
    add({ id: h.id, cat: 'maison', fr: h.fr, ar: h.ar, big: h.big, real: !!h.real, sizes: S(h.size, h.price),
      descFr: h.frSub, descAr: h.arSub, useFr: h.useFr, useAr: h.useAr, featured: h.id === 'n07',
      pack: { form: 'pouch', brand: true, body: '#c39a68' } });
  });

  const C = (cat) => CATS.find(c => c.id === cat).color;
  const item = (cat, id, fr, ar, sizes, pack, extra = {}) => add(Object.assign({ id, cat, fr, ar, sizes, pack: Object.assign({ color: C(cat) }, pack) }, extra));

  // produits de la ruche
  item('ruche', 'gel', 'Gelée royale fraîche', 'غذاء ملكات النحل', S('10 g', 120, '20 g', 220), { form: 'jar', fill: '#efe6c8', cap: '#d9d2c2', scale: .72, name: 'Gelée royale', sub: 'fraîche' }, { descFr: 'Gelée royale fraîche, à garder au réfrigérateur.', descAr: 'غذاء ملكات طري، كيتحفظ فالتلاجة.', featured: true });
  item('ruche', 'pol', 'Pollen de fleurs', 'حبوب اللقاح', S('250 g', 90, '500 g', 170), { form: 'jar', fill: '#d99a26', granules: true, name: 'Pollen', sub: 'de fleurs' }, { descFr: 'Pelotes de pollen séchées, à prendre au petit-déjeuner.', descAr: 'حبوب لقاح مجففة، كتاخذ فالفطور.' });
  item('ruche', 'pro', 'Extrait de propolis', 'مستخلص العكبر', S('30 ml', 70), { form: 'dropper', body: '#5a2c0c', name: 'Propolis', sub: 'extrait' }, { descFr: 'Extrait de propolis en flacon compte-gouttes.', descAr: 'مستخلص العكبر فقنينة بالقطارة.' });
  item('ruche', 'cire', 'Cire d’abeille pure', 'شمع النحل', S('100 g', 40), { form: 'bar', body: '#e2b84a', name: 'Cire d’abeille', ar: 'شمع النحل' }, { descFr: 'Cire d’abeille brute, pour les baumes et les soins.', descAr: 'شمع النحل الخالص، للمراهم والعناية.' });

  // plantes & tisanes
  item('plantes', 'verv', 'Verveine', 'اللويزة', S('50 g', 25, '100 g', 45), { form: 'pouch', name: 'Verveine', sub: 'feuilles' }, { descFr: 'Feuilles de verveine séchées, en infusion.', descAr: 'أوراق اللويزة المجففة، للمنقوع.' });
  item('plantes', 'thym', 'Thym sauvage', 'الزعتر البلدي', S('100 g', 30), { form: 'pouch', name: 'Thym sauvage' }, { descFr: 'Thym sauvage séché, pour la cuisine et les infusions.', descAr: 'زعتر بلدي مجفف، للطبخ والمنقوع.' });
  item('plantes', 'camo', 'Camomille', 'البابونج', S('50 g', 30), { form: 'pouch', name: 'Camomille', sub: 'fleurs' }, { descFr: 'Fleurs de camomille séchées, en infusion.', descAr: 'زهور البابونج المجففة، للمنقوع.' });
  item('plantes', 'chiba', 'Absinthe (chiba)', 'الشيبة', S('50 g', 20), { form: 'pouch', name: 'Chiba', sub: 'absinthe' }, { descFr: 'Chiba séchée, pour le thé d’hiver.', descAr: 'شيبة مجففة، لأتاي الشتا.' });
  item('plantes', 'helba', 'Fenugrec en graines', 'الحلبة', S('250 g', 20, '500 g', 35), { form: 'pouch', name: 'Fenugrec', sub: 'graines' }, { descFr: 'Graines de fenugrec entières.', descAr: 'حبوب الحلبة كاملة.' });
  item('plantes', 'nigel', 'Nigelle en graines', 'حبة البركة', S('250 g', 35, '500 g', 65), { form: 'pouch', name: 'Nigelle', sub: 'graines' }, { descFr: 'Graines de nigelle entières.', descAr: 'حبوب حبة البركة كاملة.', featured: true });

  // compléments alimentaires
  item('complements', 'spir', 'Spiruline', 'سبيرولينا', S('60 gélules', 120, '120 gélules', 210), { form: 'capsules', name: 'Spiruline', sub: 'gélules' }, { descFr: 'Spiruline en gélules.', descAr: 'سبيرولينا فكبسولات.', featured: true });
  item('complements', 'omega', 'Oméga 3', 'أوميغا 3', S('60 capsules', 150), { form: 'capsules', body: '#7a4a12', cap: '#ece6da', name: 'Oméga 3', sub: 'capsules' }, { descFr: 'Huile de poisson en capsules.', descAr: 'زيت السمك فكبسولات.' });
  item('complements', 'magn', 'Magnésium marin', 'المغنيزيوم', S('60 gélules', 110), { form: 'capsules', name: 'Magnésium', sub: 'marin' }, { descFr: 'Magnésium d’origine marine en gélules.', descAr: 'مغنيزيوم بحري فكبسولات.' });
  item('complements', 'levure', 'Levure de bière', 'خميرة البيرة', S('90 comprimés', 75), { form: 'capsules', name: 'Levure', sub: 'de bière' }, { descFr: 'Levure de bière en comprimés.', descAr: 'خميرة البيرة فأقراص.' });
  item('complements', 'nigcap', 'Nigelle en gélules', 'حبة البركة كبسولات', S('60 gélules', 80), { form: 'capsules', body: '#2b2620', cap: '#2b2620', name: 'Nigelle', sub: 'gélules' }, { descFr: 'Huile de nigelle en gélules.', descAr: 'زيت حبة البركة فكبسولات.' });

  // protéines & sport (flavours do not change the price)
  const FL = (fr, ar) => ({ fr, ar });
  item('sport', 'whey', 'Whey protéine', 'بروتين مصل اللبن', S('1 kg', 450, '2 kg', 820), { form: 'tub', name: 'Whey', sub: 'protéine' },
    { flavours: [FL('Chocolat', 'شوكولا'), FL('Vanille', 'فانيلا'), FL('Fraise', 'فراولة')], descFr: 'Protéine de lactosérum en poudre.', descAr: 'بروتين مصل اللبن، مسحوق.', featured: true });
  item('sport', 'gain', 'Gainer', 'غاينر', S('3 kg', 520), { form: 'tub', body: '#2b2b2b', name: 'Gainer', sub: 'prise de masse' },
    { flavours: [FL('Chocolat', 'شوكولا'), FL('Vanille', 'فانيلا')], descFr: 'Mélange de protéines et de glucides en poudre.', descAr: 'خليط البروتين والسكريات، مسحوق.' });
  item('sport', 'crea', 'Créatine monohydrate', 'كرياتين', S('300 g', 260), { form: 'tub', body: '#e9e5dc', cap: '#1c1c1c', scale: .82, name: 'Créatine', sub: 'monohydrate' }, { descFr: 'Créatine monohydrate en poudre, sans arôme.', descAr: 'كرياتين، مسحوق بلا نكهة.' });

  // vitalité
  item('vitalite', 'maca', 'Maca en poudre', 'الماكا', S('100 g', 90, '250 g', 200), { form: 'pouch', name: 'Maca', sub: 'poudre' }, { descFr: 'Racine de maca en poudre, en sachet refermable.', descAr: 'جذور الماكا مطحونة، فكيس كيتسد.', featured: true });
  item('vitalite', 'gins', 'Ginseng rouge', 'الجينسنغ الأحمر', S('60 gélules', 160), { form: 'capsules', body: '#5b1f1c', cap: '#e8e2d6', name: 'Ginseng', sub: 'rouge' }, { descFr: 'Ginseng rouge en gélules.', descAr: 'جينسنغ أحمر فكبسولات.' });
  item('vitalite', 'trib', 'Tribulus', 'القطب', S('60 gélules', 130), { form: 'capsules', name: 'Tribulus', sub: 'gélules' }, { descFr: 'Extrait de tribulus en gélules.', descAr: 'مستخلص القطب فكبسولات.' });
  item('vitalite', 'ging', 'Gingembre moulu', 'الزنجبيل', S('100 g', 25), { form: 'pouch', name: 'Gingembre', sub: 'moulu' }, { descFr: 'Racine de gingembre moulue.', descAr: 'زنجبيل مطحون.' });

  // remèdes de plantes
  item('remedes', 'sirop', 'Sirop thym & miel', 'شراب الزعتر والعسل', S('150 ml', 45), { form: 'bottle', liquid: '#7a3c10', name: 'Sirop', sub: 'thym & miel' }, { descFr: 'Sirop au thym et au miel.', descAr: 'شراب بالزعتر والعسل.' });
  item('remedes', 'past', 'Pastilles propolis & miel', 'أقراص العكبر والعسل', S('24 pastilles', 35), { form: 'box', name: 'Pastilles', sub: 'propolis & miel' }, { descFr: 'Pastilles à sucer, propolis et miel.', descAr: 'أقراص للمص، بالعكبر والعسل.' });
  item('remedes', 'baume', 'Baume aux plantes', 'مرهم الأعشاب', S('30 ml', 40), { form: 'tin', name: 'Baume' }, { descFr: 'Baume aux plantes, en boîte métal.', descAr: 'مرهم بالأعشاب، فعلبة حديد.' });

  // huiles
  item('huiles', 'argan', 'Huile d’argan', 'زيت الأركان', S('30 ml', 60, '100 ml', 160), { form: 'bottle', liquid: '#c9952a', name: 'Argan', sub: 'huile vierge' }, { descFr: 'Huile d’argan vierge, pressée à froid.', descAr: 'زيت الأركان البكر، معصور على البارد.', featured: true });
  item('huiles', 'figue', 'Huile de figue de Barbarie', 'زيت التين الشوكي', S('15 ml', 180, '30 ml', 330), { form: 'dropper', body: '#3a2a12', name: 'Figue de Barbarie', sub: 'huile' }, { descFr: 'Huile de pépins de figue de Barbarie.', descAr: 'زيت بذور التين الشوكي.' });
  item('huiles', 'ricin', 'Huile de ricin', 'زيت الخروع', S('100 ml', 40), { form: 'bottle', liquid: '#d8c27a', name: 'Ricin', sub: 'huile' }, { descFr: 'Huile de ricin pure.', descAr: 'زيت الخروع الخالص.' });
  item('huiles', 'amande', 'Huile d’amande douce', 'زيت اللوز الحلو', S('100 ml', 50), { form: 'bottle', liquid: '#e2c86a', name: 'Amande douce', sub: 'huile' }, { descFr: 'Huile d’amande douce pure.', descAr: 'زيت اللوز الحلو الخالص.' });
  item('huiles', 'helav', 'Huile essentielle de lavande', 'الزيت العطري للخزامى', S('10 ml', 70), { form: 'dropper', body: '#3e2b4f', name: 'Lavande', sub: 'huile essentielle' }, { descFr: 'Huile essentielle de lavande.', descAr: 'الزيت العطري للخزامى.' });

  // savons & soins
  item('soins', 'beldi', 'Savon noir beldi', 'الصابون البلدي', S('250 g', 30, '500 g', 50), { form: 'jar', fill: '#3a2312', cap: '#1c1c1c', name: 'Savon noir', sub: 'beldi' }, { descFr: 'Savon noir à l’huile d’olive, pour le hammam.', descAr: 'صابون بلدي بزيت الزيتون، للحمام.', featured: true });
  item('soins', 'savarg', 'Savon à l’argan', 'صابون الأركان', S('100 g', 35), { form: 'bar', body: '#ead9b2', name: 'Savon argan', ar: 'صابون الأركان' }, { descFr: 'Savon solide à l’huile d’argan.', descAr: 'صابون صلب بزيت الأركان.' });
  item('soins', 'rose', 'Eau de rose', 'ماء الورد', S('250 ml', 35), { form: 'bottle', liquid: '#f0c4c8', name: 'Eau de rose' }, { descFr: 'Eau florale de rose.', descAr: 'ماء الورد.' });
  item('soins', 'henne', 'Henné naturel', 'الحناء', S('100 g', 20), { form: 'pouch', name: 'Henné', sub: 'naturel' }, { descFr: 'Poudre de henné naturel.', descAr: 'حناء طبيعية مطحونة.' });
  item('soins', 'alun', 'Pierre d’alun', 'الشبة', S('1 pierre', 20), { form: 'bar', body: '#e9ecef', name: 'Pierre d’alun', ar: 'الشبة' }, { descFr: 'Pierre d’alun naturelle.', descAr: 'شبة طبيعية.' });

  return { CATS, PRODUCTS: P, NOTES };
});
