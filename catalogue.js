/*
 * El Baraka shop catalogue: the ONE file to edit to add, change or remove products.
 * (The editor page, editor.html, writes a new copy of this file for you.)
 *
 * status
 *   "shop"     seen in the shop or on @herboristerieelbaraka (real product)
 *   "brand"    from a brand the shop uses, taken from a public Moroccan retailer list; stock not confirmed
 *   "example"  placeholder to show the rayon; replace or delete
 * sizes       [label, price in DH or null when unknown]   null shows "Prix sur demande"
 * photo       path without ".jpg" (a "-s.jpg" small copy sits next to it); no photo = a drawn packshot (pack)
 * Open the shop with ?dev=1 to see each product's status on the page.
 */
(function (root) {
  const CATALOGUE = {
    categories: [
      { id: 'miel', fr: 'Miels', ar: 'العسل', color: '#c47a16', lineFr: 'Miels du Maroc, en plusieurs formats.', lineAr: 'عسل مغربي، بعدة أحجام.' },
      { id: 'sirops', fr: 'Sirops au miel', ar: 'شراب العسل', color: '#b5642a', lineFr: 'Sirops traditionnels au miel et aux plantes.', lineAr: 'شراب تقليدي بالعسل والأعشاب.' },
      { id: 'ruche', fr: 'Produits de la ruche', ar: 'منتجات النحل', color: '#d9a32e', lineFr: 'Gelée royale, pollen, propolis et cire.', lineAr: 'غذاء الملكات، حبوب اللقاح، العكبر والشمع.' },
      { id: 'complements', fr: 'Compléments alimentaires', ar: 'المكملات الغذائية', color: '#3b6e9a', lineFr: 'Nutralie, Physalis, Dietaroma, GPH Diffusion…', lineAr: 'نوتراليا، فيزاليس، ديتاروما، جي بي إش…' },
      { id: 'vitalite', fr: 'Vitalité', ar: 'الحيوية', color: '#7b3f72', lineFr: 'Énergie et vitalité, pour lui et pour elle.', lineAr: 'الطاقة والحيوية، للرجل والمرأة.' },
      { id: 'cosmetiques', fr: 'Cosmétiques naturels', ar: 'مستحضرات طبيعية', color: '#b9707e', lineFr: 'Soins des cheveux, du corps et du hammam.', lineAr: 'العناية بالشعر والجسم والحمام.' },
      { id: 'maison', fr: 'Mélanges de la maison', ar: 'خلطات الدار', color: '#1d5631', lineFr: 'Préparés à la boutique, avec leur mode d’emploi.', lineAr: 'موجدة فالحانوت، مع طريقة الاستعمال.' },
      { id: 'plantes', fr: 'Plantes & tisanes', ar: 'الأعشاب', color: '#5d8a3c', lineFr: 'Plantes séchées et graines, au poids.', lineAr: 'أعشاب مجففة وحبوب، بالوزن.' },
      { id: 'huiles', fr: 'Huiles', ar: 'الزيوت', color: '#8f7a2a', lineFr: 'Huiles végétales et huiles essentielles.', lineAr: 'زيوت نباتية وزيوت عطرية.' },
      { id: 'sport', fr: 'Protéines & sport', ar: 'البروتين والرياضة', color: '#a8382c', lineFr: 'Protéines et créatine, plusieurs goûts.', lineAr: 'بروتين وكرياتين، بعدة أذواق.' }
    ],

    products: [
      /* ---------- Miels: on the shop's shelf; prices are examples ---------- */
      { id: 'ora', cat: 'miel', status: 'shop', fr: 'Miel d’oranger', ar: 'عسل البرتقال', sizes: [['250 g', 65], ['500 g', 120], ['1 kg', 230]], def: 1, priceNote: 'example', featured: true,
        descFr: 'Floral et doux, cristallise fin', descAr: 'زهري وناعم، يتبلور بنعومة', pairFr: 'Pour les enfants, avec baghrir et msemen', pairAr: 'للأطفال، مع البغرير والملوي', sweet: 5, strong: 2,
        pack: { form: 'jar', fill: '#a35a0e', color: '#bf5f17', name: 'Oranger', sub: 'miel du Maroc' } },
      { id: 'rom', cat: 'miel', status: 'shop', fr: 'Miel de romarin', ar: 'عسل أزير', sizes: [['250 g', 60], ['500 g', 110], ['1 kg', 210]], def: 1, priceNote: 'example',
        descFr: 'Très doux, cristallise vite et fin', descAr: 'حلو جدا، يتبلور بسرعة وبنعومة', pairFr: 'Sur du pain grillé au petit-déjeuner', pairAr: 'مع الخبز المحمص في الفطور', sweet: 5, strong: 1,
        pack: { form: 'jar', fill: '#b0700f', color: '#2c6965', name: 'Romarin', sub: 'miel du Maroc' } },
      { id: 'lav', cat: 'miel', status: 'shop', fr: 'Miel de lavande', ar: 'عسل الخزامة', sizes: [['250 g', 85], ['500 g', 150], ['1 kg', 290]], def: 1, priceNote: 'example',
        descFr: 'Floral et délicat, une note de lavande', descAr: 'زهري ورقيق بنفحة الخزامة', pairFr: 'Dans une infusion ou un yaourt', pairAr: 'في الأعشاب المنقوعة أو مع الياغورت', sweet: 4, strong: 2,
        pack: { form: 'jar', fill: '#7a3e0c', color: '#634987', name: 'Lavande', sub: 'miel du Maroc' } },
      { id: 'crb', cat: 'miel', status: 'shop', fr: 'Miel de caroubier', ar: 'عسل الخروب', sizes: [['250 g', 75], ['500 g', 140], ['1 kg', 270]], def: 1, priceNote: 'example',
        descFr: 'Notes de caramel et de cacao, peu sucré', descAr: 'بنكهة الكراميل والكاكاو، قليل الحلاوة', pairFr: 'Avec un fromage frais ou du pain grillé', pairAr: 'مع الجبن الطري أو الخبز المحمص', sweet: 3, strong: 3,
        pack: { form: 'jar', fill: '#8f4f0e', color: '#4a2c1c', name: 'Caroubier', sub: 'miel du Maroc' } },
      { id: 'juj', cat: 'miel', status: 'shop', fr: 'Miel de jujubier', ar: 'عسل السدر', sizes: [['250 g', 140], ['500 g', 250], ['1 kg', 480]], def: 1, priceNote: 'example', featured: true,
        descFr: 'Riche, notes de caramel et de fruits secs', descAr: 'غني، بنكهة الكراميل والفواكه الجافة', pairFr: 'Pur, à la cuillère, ou avec des amandes', pairAr: 'خالص بالملعقة، أو مع اللوز', sweet: 3, strong: 4,
        pack: { form: 'jar', fill: '#6a2e08', color: '#9c2f1d', name: 'Jujubier', sub: 'miel du Maroc' } },
      { id: 'asp', cat: 'miel', status: 'shop', fr: 'Miel d’asperge', ar: 'عسل الزكوم', sizes: [['250 g', 100], ['500 g', 180], ['1 kg', 340]], def: 1, priceNote: 'example',
        descFr: 'Sombre, une légère amertume en fin de bouche', descAr: 'داكن، بمرارة خفيفة في آخره', pairFr: 'Une cuillère le matin', pairAr: 'ملعقة صباحا', sweet: 2, strong: 4,
        pack: { form: 'jar', fill: '#4a2008', color: '#33507e', name: 'Asperge', sub: 'miel du Maroc' } },
      { id: 'ori', cat: 'miel', status: 'shop', fr: 'Miel d’origan', ar: 'عسل الزعتر', sizes: [['250 g', 90], ['500 g', 160], ['1 kg', 300]], def: 1, priceNote: 'example',
        descFr: 'Puissant et herbacé, un peu poivré', descAr: 'قوي وعشبي، بلمسة حارة', pairFr: 'Une cuillère le matin, ou dans l’atay', pairAr: 'ملعقة صباحا، أو في أتاي', sweet: 2, strong: 5,
        pack: { form: 'jar', fill: '#3a1806', color: '#557629', name: 'Origan', sub: 'miel du Maroc' } },

      /* ---------- Sirops au miel: photographed in the shop, prices from the shop's own posts ---------- */
      { id: 'sirop-toux', cat: 'sirops', status: 'shop', fr: 'Sirop au miel et aux plantes', ar: 'شراب العسل والأعشاب', sizes: [['125 ml', 25]], photo: 'img/shop/sirop-toux', featured: true,
        descFr: 'Sirop au miel et aux plantes, pour l’hiver.', descAr: 'شراب بالعسل والأعشاب، لفصل الشتاء.', source: 'https://www.instagram.com/p/DYhPwvnKPv8/' },
      { id: 'sirop-prostate', cat: 'sirops', status: 'shop', fr: 'Sirop au miel « Prostate »', ar: 'شراب العسل «البروستاتا»', sizes: [['125 ml', 50]], photo: 'img/shop/sirop-prostate',
        descFr: 'Sirop au miel et aux plantes, flacon de 125 ml.', descAr: 'شراب بالعسل والأعشاب، قنينة 125 مل.', source: 'https://www.instagram.com/p/DYhP31mKf2R/' },
      { id: 'sirop-enuresie', cat: 'sirops', status: 'shop', fr: 'Miel « L’énurésie » pour enfants', ar: 'عسل «التبول اللاإرادي» للأطفال', sizes: [['125 ml', 50]], photo: 'img/shop/sirop-enuresie',
        descFr: 'Préparation au miel pour les enfants, flacon de 125 ml.', descAr: 'تركيبة بالعسل للأطفال، قنينة 125 مل.', source: 'https://www.instagram.com/p/DYhPnWWKVtv/' },

      /* ---------- Produits de la ruche: examples ---------- */
      { id: 'gel', cat: 'ruche', status: 'example', fr: 'Gelée royale fraîche', ar: 'غذاء ملكات النحل', sizes: [['10 g', 120], ['20 g', 220]], descFr: 'À garder au réfrigérateur.', descAr: 'كيتحفظ فالتلاجة.',
        pack: { form: 'jar', fill: '#efe6c8', cap: '#d9d2c2', scale: .72, name: 'Gelée royale', sub: 'fraîche' } },
      { id: 'pol', cat: 'ruche', status: 'example', fr: 'Pollen de fleurs', ar: 'حبوب اللقاح', sizes: [['250 g', 90], ['500 g', 170]], descFr: 'Pelotes de pollen séchées.', descAr: 'حبوب لقاح مجففة.',
        pack: { form: 'jar', fill: '#d99a26', granules: true, name: 'Pollen', sub: 'de fleurs' } },
      { id: 'pro', cat: 'ruche', status: 'example', fr: 'Extrait de propolis', ar: 'مستخلص العكبر', sizes: [['30 ml', 70]], descFr: 'En flacon compte-gouttes.', descAr: 'فقنينة بالقطارة.',
        pack: { form: 'dropper', body: '#5a2c0c', name: 'Propolis', sub: 'extrait' } },
      { id: 'cire', cat: 'ruche', status: 'example', fr: 'Cire d’abeille pure', ar: 'شمع النحل', sizes: [['100 g', 40]], descFr: 'Pour les baumes et les soins.', descAr: 'للمراهم والعناية.',
        pack: { form: 'bar', body: '#e2b84a', name: 'Cire d’abeille', ar: 'شمع النحل' } },

      /* ---------- Compléments: Nutralie and Physalis seen in the shop ---------- */
      { id: 'nutralie-omega3', cat: 'complements', brand: 'Nutralie', status: 'shop', fr: 'Nutralie Omega 3 Complex', ar: 'أوميغا 3 نوتراليا', sizes: [['60 capsules', null]], photo: 'img/shop/nutralie-omega3', featured: true,
        descFr: 'Oméga 3 avec vitamines E et D3, 60 capsules molles.', descAr: 'أوميغا 3 مع فيتامينات، 60 كبسولة طرية.', source: 'https://www.instagram.com/p/DDJ0JzJNjWm/' },
      { id: 'nutralie-magnesium', cat: 'complements', brand: 'Nutralie', status: 'shop', fr: 'Nutralie Magnesium Complex', ar: 'مغنيزيوم نوتراليا', sizes: [['120 capsules', null]], photo: 'img/shop/nutralie-magnesium',
        descFr: 'Magnésium bisglycinate et citrate, vitamines B5, B6 et C.', descAr: 'مغنيزيوم مع فيتامينات، 120 كبسولة.', source: 'https://www.instagram.com/p/DDJ0IKlNJ97/' },
      { id: 'nutralie-detox', cat: 'complements', brand: 'Nutralie', status: 'shop', fr: 'Nutralie Detox Complex', ar: 'ديتوكس نوتراليا', sizes: [['90 capsules', null]], photo: 'img/shop/nutralie-detox',
        descFr: 'Artichaut, radis noir et 8 plantes, 100 % végétal.', descAr: 'الخرشوف والفجل الأسود و8 نباتات.', source: 'https://www.instagram.com/p/DDJ0JO3NxcS/' },
      { id: 'nutralie-cranberry', cat: 'complements', brand: 'Nutralie', status: 'shop', fr: 'Nutralie Cranberry Complex', ar: 'كرانبيري نوتراليا', sizes: [['60 capsules', null]], photo: 'img/shop/nutralie-cranberry',
        descFr: 'Cranberry, D-mannose et vitamine C.', descAr: 'التوت البري مع الفيتامينات، 60 كبسولة.', source: 'https://www.instagram.com/p/DDJ0GGLtUHg/' },
      { id: 'physalis-krill', cat: 'complements', brand: 'Physalis', status: 'shop', fr: 'Physalis Krill Oméga 3', ar: 'زيت الكريل فيزاليس', sizes: [['30 capsules', 190]], photo: 'img/shop/physalis-krill', featured: true,
        descFr: 'Huile de krill Superba, 30 capsules.', descAr: 'زيت الكريل، 30 كبسولة.', source: 'https://www.instagram.com/p/DDJz0E-tcJK/' },

      /* ---------- Dietaroma: a brand the shop uses; list from universparadiscount.ma (12 of 72) ---------- */
      { id: 'dt-coq10', cat: 'complements', brand: 'Dietaroma', status: 'brand', fr: 'Dietaroma Co Q10 Ubiquinol', ar: 'ديتاروما كيو 10', sizes: [['20 gélules', null]], descFr: 'Antioxydant et énergie.', descAr: 'مضاد للأكسدة وطاقة.', source: 'https://universparadiscount.ma/marque/58-dietaroma', pack: { form: 'capsules', name: 'Co Q10', sub: 'Dietaroma' } },
      { id: 'dt-magnesium', cat: 'complements', brand: 'Dietaroma', status: 'brand', fr: 'Dietaroma 6 Magnésium Forte', ar: 'ديتاروما 6 مغنيزيوم', sizes: [['30 jours', null]], descFr: 'Cure de 30 jours.', descAr: 'علاج 30 يوما.', source: 'https://universparadiscount.ma/marque/58-dietaroma', pack: { form: 'capsules', name: 'Magnésium', sub: 'Dietaroma' } },
      { id: 'dt-articulior', cat: 'complements', brand: 'Dietaroma', status: 'brand', fr: 'Dietaroma Articulior Gluco Chondro Forte', ar: 'ديتاروما المفاصل', sizes: [['60 comprimés', null]], descFr: 'Glucosamine et chondroïtine.', descAr: 'غلوكوزامين وكوندرويتين.', source: 'https://universparadiscount.ma/marque/58-dietaroma', pack: { form: 'capsules', name: 'Articulior', sub: 'Dietaroma' } },
      { id: 'dt-transit', cat: 'complements', brand: 'Dietaroma', status: 'brand', fr: 'Dietaroma Action Transit Express', ar: 'ديتاروما العبور', sizes: [['10 sachets', null]], descFr: 'Transit et digestion.', descAr: 'العبور والهضم.', source: 'https://universparadiscount.ma/marque/58-dietaroma', pack: { form: 'box', name: 'Transit', sub: 'Dietaroma' } },
      { id: 'dt-astragale', cat: 'complements', brand: 'Dietaroma', status: 'brand', fr: 'Dietaroma Astragale Défenses naturelles', ar: 'ديتاروما المناعة', sizes: [['20 ampoules', null]], descFr: 'Défenses naturelles.', descAr: 'المناعة الطبيعية.', source: 'https://universparadiscount.ma/marque/58-dietaroma', pack: { form: 'box', name: 'Astragale', sub: 'Dietaroma' } },
      { id: 'dt-capilea', cat: 'complements', brand: 'Dietaroma', status: 'brand', fr: 'Dietaroma Capilea Forti cheveux et ongles', ar: 'ديتاروما الشعر والأظافر', sizes: [['60 capsules', null]], descFr: 'Cheveux et ongles.', descAr: 'الشعر والأظافر.', source: 'https://universparadiscount.ma/marque/58-dietaroma', pack: { form: 'capsules', name: 'Capilea', sub: 'Dietaroma' } },
      { id: 'dt-coeur', cat: 'complements', brand: 'Dietaroma', status: 'brand', fr: 'Dietaroma Capital Cœur', ar: 'ديتاروما القلب', sizes: [['60 gélules', null]], descFr: 'Circulation et cœur.', descAr: 'الدورة الدموية والقلب.', source: 'https://universparadiscount.ma/marque/58-dietaroma', pack: { form: 'capsules', name: 'Capital Cœur', sub: 'Dietaroma' } },
      { id: 'dt-cystenea', cat: 'complements', brand: 'Dietaroma', status: 'brand', fr: 'Dietaroma Cystenea Duo', ar: 'ديتاروما المسالك', sizes: [['20 gélules', null]], descFr: 'Confort urinaire.', descAr: 'راحة المسالك البولية.', source: 'https://universparadiscount.ma/marque/58-dietaroma', pack: { form: 'capsules', name: 'Cystenea', sub: 'Dietaroma' } },
      { id: 'dt-philaromal', cat: 'complements', brand: 'Dietaroma', status: 'brand', fr: 'Dietaroma Philaromal Probiotiques', ar: 'ديتاروما البروبيوتيك', sizes: [['30 gélules', null]], descFr: 'Probiotiques.', descAr: 'بروبيوتيك.', source: 'https://universparadiscount.ma/marque/58-dietaroma', pack: { form: 'capsules', name: 'Philaromal', sub: 'Dietaroma' } },

      /* ---------- GPH Diffusion: a brand the shop uses; list from Moroccan retailers ---------- */
      { id: 'gph-ashwagandha', cat: 'complements', brand: 'GPH Diffusion', status: 'brand', fr: 'GPH Diffusion Ashwagandha', ar: 'أشواغاندا جي بي إش', sizes: [['90 gélules', null]], descFr: 'Plante ayurvédique en gélules.', descAr: 'نبتة الأشواغاندا فكبسولات.', source: 'https://parachezvous.ma/marque/gph-diffusion-maroc-prix/', pack: { form: 'capsules', body: '#f3efe6', name: 'Ashwagandha', sub: 'GPH Diffusion' } },
      { id: 'gph-magnesium', cat: 'complements', brand: 'GPH Diffusion', status: 'brand', fr: 'GPH Diffusion Magnésium bisglycinate', ar: 'مغنيزيوم جي بي إش', sizes: [['90 gélules', null]], descFr: 'Magnésium bisglycinate.', descAr: 'مغنيزيوم.', source: 'https://parachezvous.ma/marque/gph-diffusion-maroc-prix/', pack: { form: 'capsules', body: '#f3efe6', name: 'Magnésium', sub: 'GPH Diffusion' } },
      { id: 'gph-curcuma', cat: 'complements', brand: 'GPH Diffusion', status: 'brand', fr: 'GPH Diffusion Curcuma et poivre noir', ar: 'الكركم والفلفل الأسود', sizes: [['100 gélules', null]], descFr: 'Curcuma et poivre noir, 300 mg.', descAr: 'الكركم والفلفل الأسود.', source: 'https://parachezvous.ma/marque/gph-diffusion-maroc-prix/', pack: { form: 'capsules', body: '#f3efe6', name: 'Curcuma', sub: 'GPH Diffusion' } },
      { id: 'gph-moringa', cat: 'complements', brand: 'GPH Diffusion', status: 'brand', fr: 'GPH Diffusion Moringa', ar: 'المورينغا جي بي إش', sizes: [['100 gélules', null]], descFr: 'Moringa, 400 mg.', descAr: 'المورينغا.', source: 'https://parachezvous.ma/marque/gph-diffusion-maroc-prix/', pack: { form: 'capsules', body: '#f3efe6', name: 'Moringa', sub: 'GPH Diffusion' } },
      { id: 'gph-gelee', cat: 'complements', brand: 'GPH Diffusion', status: 'brand', fr: 'GPH Diffusion Gelée royale', ar: 'غذاء الملكات جي بي إش', sizes: [['200 gélules', null]], descFr: 'Gelée royale en gélules, 200 mg.', descAr: 'غذاء الملكات فكبسولات.', source: 'https://parachezvous.ma/marque/gph-diffusion-maroc-prix/', pack: { form: 'capsules', body: '#f3efe6', name: 'Gelée royale', sub: 'GPH Diffusion' } },
      { id: 'gph-foie-morue', cat: 'complements', brand: 'GPH Diffusion', status: 'brand', fr: 'GPH Diffusion Huile de foie de morue', ar: 'زيت كبد الحوت', sizes: [['100 capsules', null]], descFr: 'Huile de foie de morue en capsules.', descAr: 'زيت كبد الحوت فكبسولات.', source: 'https://parachezvous.ma/marque/gph-diffusion-maroc-prix/', pack: { form: 'capsules', body: '#7a4a12', name: 'Foie de morue', sub: 'GPH Diffusion' } },
      { id: 'gph-valeriane', cat: 'complements', brand: 'GPH Diffusion', status: 'brand', fr: 'GPH Diffusion Valériane', ar: 'الناردين جي بي إش', sizes: [['200 gélules', null]], descFr: 'Valériane, 250 mg.', descAr: 'الناردين.', source: 'https://parachezvous.ma/marque/gph-diffusion-maroc-prix/', pack: { form: 'capsules', body: '#f3efe6', name: 'Valériane', sub: 'GPH Diffusion' } },
      { id: 'gph-chondro', cat: 'complements', brand: 'GPH Diffusion', status: 'brand', fr: 'GPH Diffusion Chondroïtine Glucosamine', ar: 'كوندرويتين غلوكوزامين', sizes: [['60 gélules', null], ['180 gélules', null]], descFr: 'Chondroïtine, glucosamine et vitamine C.', descAr: 'كوندرويتين وغلوكوزامين.', source: 'https://www.marjanemall.ma/', pack: { form: 'capsules', body: '#f3efe6', name: 'Chondroïtine', sub: 'GPH Diffusion' } },

      /* ---------- Vitalité ---------- */
      { id: 'sexomiel', cat: 'vitalite', status: 'shop', fr: 'Sexo Miel', ar: 'العسل السحري سكسوميل', sizes: [['125 ml', 50]], photo: 'img/shop/sexomiel',
        descFr: 'Miel aux plantes, pour hommes. Flacon de 125 ml.', descAr: 'عسل بالأعشاب، للرجال. قنينة 125 مل.', source: 'https://www.instagram.com/p/DYhQPnUqmfr/' },
      { id: 'maca', cat: 'vitalite', status: 'example', fr: 'Maca en poudre', ar: 'الماكا', sizes: [['100 g', 90], ['250 g', 200]], descFr: 'Racine de maca en poudre.', descAr: 'جذور الماكا مطحونة.', pack: { form: 'pouch', name: 'Maca', sub: 'poudre' } },
      { id: 'gins', cat: 'vitalite', status: 'example', fr: 'Ginseng rouge', ar: 'الجينسنغ الأحمر', sizes: [['60 gélules', 160]], descFr: 'Ginseng rouge en gélules.', descAr: 'جينسنغ أحمر فكبسولات.', pack: { form: 'capsules', body: '#5b1f1c', cap: '#e8e2d6', name: 'Ginseng', sub: 'rouge' } },
      { id: 'ging', cat: 'vitalite', status: 'example', fr: 'Gingembre moulu', ar: 'الزنجبيل', sizes: [['100 g', 25]], descFr: 'Racine de gingembre moulue.', descAr: 'زنجبيل مطحون.', pack: { form: 'pouch', name: 'Gingembre', sub: 'moulu' } },

      /* ---------- Cosmétiques naturels: El Baraka's own products, photographed in the shop ---------- */
      { id: 'shampoing', cat: 'cosmetiques', brand: 'El Baraka', status: 'shop', fr: 'Shampoing 100 % naturel El Baraka', ar: 'شمبوان طبيعي أعشاب البركة', sizes: [['Flacon', null]], photo: 'img/shop/shampoing', featured: true,
        descFr: 'Aux protéines de blé, pour tous types de cheveux. Sans sulfate, sans paraben, usage quotidien.', descAr: 'بالبروتينات، لجميع أنواع الشعر. بدون سلفات وبدون بارابين.', source: 'https://www.instagram.com/p/C9DeltdNhsZ/' },
      { id: 'creme-capillaire', cat: 'cosmetiques', brand: 'El Baraka', status: 'shop', fr: 'Crème capillaire naturelle', ar: 'كريم الشعر الطبيعي', sizes: [['Pot', null]], photo: 'img/shop/creme-capillaire',
        descFr: 'Démêlante, nourrissante et lissante, à la vitamine B5 et aux protéines de blé.', descAr: 'كريم للشعر بالفيتامينات وبروتينات القمح.', source: 'https://www.instagram.com/p/DCCTW8YtShg/' },
      { id: 'graisse-chameau', cat: 'cosmetiques', brand: 'Sanambio', status: 'shop', fr: 'Graisse de bosse de chameau Sanambio', ar: 'دهن سنام الجمل', sizes: [['100 ml', 30]], photo: 'img/shop/graisse-chameau',
        descFr: 'Graisse de bosse de chameau, flacon de 100 ml, en massage.', descAr: 'دهن سنام الجمل، 100 مل، للتدليك.', source: 'https://www.instagram.com/p/DYhO_3VK6kK/' },
      { id: 'beldi', cat: 'cosmetiques', status: 'example', fr: 'Savon noir beldi', ar: 'الصابون البلدي', sizes: [['250 g', 30], ['500 g', 50]], descFr: 'À l’huile d’olive, pour le hammam.', descAr: 'بزيت الزيتون، للحمام.', pack: { form: 'jar', fill: '#3a2312', cap: '#1c1c1c', name: 'Savon noir', sub: 'beldi' } },
      { id: 'rose', cat: 'cosmetiques', status: 'example', fr: 'Eau de rose', ar: 'ماء الورد', sizes: [['250 ml', 35]], descFr: 'Eau florale de rose.', descAr: 'ماء الورد.', pack: { form: 'bottle', liquid: '#f0c4c8', name: 'Eau de rose' } },
      { id: 'henne', cat: 'cosmetiques', status: 'example', fr: 'Henné naturel', ar: 'الحناء', sizes: [['100 g', 20]], descFr: 'Poudre de henné naturel.', descAr: 'حناء طبيعية مطحونة.', pack: { form: 'pouch', name: 'Henné', sub: 'naturel' } },

      /* ---------- Mélanges de la maison: El Baraka's pouch; only the digestive mix is real ---------- */
      { id: 'n07', cat: 'maison', brand: 'El Baraka', status: 'shop', real: true, fr: 'Mélange de plantes', ar: 'مركب الأعشاب', big: 'للهضم', sizes: [['100 g', 45]], priceNote: 'example',
        descFr: 'Confort digestif', descAr: 'للهضم وراحة البطن', useFr: '2 cuillères à soupe avec un peu d’eau, après chaque repas principal.', useAr: 'ملعقتان كبيرتان مع قليل من الماء بعد كل وجبة رئيسية.', pack: { form: 'pouch', brand: true, body: '#c39a68' } },
      { id: 'n03', cat: 'maison', brand: 'El Baraka', status: 'example', fr: 'Infusion du soir', ar: 'مركب المساء', big: 'المساء', sizes: [['80 g', 40]], descFr: 'Moment calme', descAr: 'لحظة هدوء', pack: { form: 'pouch', brand: true, body: '#c39a68' } },
      { id: 'n12', cat: 'maison', brand: 'El Baraka', status: 'example', fr: 'Ras el hanout', ar: 'رأس الحانوت', big: 'رأس الحانوت', sizes: [['100 g', 35]], descFr: 'Mélange maison', descAr: 'خلطة الدار', pack: { form: 'pouch', brand: true, body: '#c39a68' } },

      /* ---------- Plantes & tisanes: examples ---------- */
      { id: 'verv', cat: 'plantes', status: 'example', fr: 'Verveine', ar: 'اللويزة', sizes: [['50 g', 25], ['100 g', 45]], descFr: 'Feuilles séchées, en infusion.', descAr: 'أوراق مجففة، للمنقوع.', pack: { form: 'pouch', name: 'Verveine', sub: 'feuilles' } },
      { id: 'thym', cat: 'plantes', status: 'example', fr: 'Thym sauvage', ar: 'الزعتر البلدي', sizes: [['100 g', 30]], descFr: 'Pour la cuisine et les infusions.', descAr: 'للطبخ والمنقوع.', pack: { form: 'pouch', name: 'Thym sauvage' } },
      { id: 'chiba', cat: 'plantes', status: 'example', fr: 'Absinthe (chiba)', ar: 'الشيبة', sizes: [['50 g', 20]], descFr: 'Pour le thé d’hiver.', descAr: 'لأتاي الشتا.', pack: { form: 'pouch', name: 'Chiba', sub: 'absinthe' } },
      { id: 'nigel', cat: 'plantes', status: 'example', fr: 'Nigelle en graines', ar: 'حبة البركة', sizes: [['250 g', 35], ['500 g', 65]], descFr: 'Graines entières.', descAr: 'حبوب كاملة.', pack: { form: 'pouch', name: 'Nigelle', sub: 'graines' } },

      /* ---------- Huiles: examples ---------- */
      { id: 'argan', cat: 'huiles', status: 'example', fr: 'Huile d’argan', ar: 'زيت الأركان', sizes: [['30 ml', 60], ['100 ml', 160]], descFr: 'Vierge, pressée à froid.', descAr: 'بكر، معصور على البارد.', pack: { form: 'bottle', liquid: '#c9952a', name: 'Argan', sub: 'huile vierge' } },
      { id: 'ricin', cat: 'huiles', status: 'example', fr: 'Huile de ricin', ar: 'زيت الخروع', sizes: [['100 ml', 40]], descFr: 'Huile de ricin pure.', descAr: 'زيت الخروع الخالص.', pack: { form: 'bottle', liquid: '#d8c27a', name: 'Ricin', sub: 'huile' } },
      { id: 'helav', cat: 'huiles', status: 'example', fr: 'Huile essentielle de lavande', ar: 'الزيت العطري للخزامى', sizes: [['10 ml', 70]], descFr: 'Huile essentielle de lavande.', descAr: 'الزيت العطري للخزامى.', pack: { form: 'dropper', body: '#3e2b4f', name: 'Lavande', sub: 'huile essentielle' } },

      /* ---------- Protéines & sport: examples ---------- */
      { id: 'whey', cat: 'sport', status: 'example', fr: 'Whey protéine', ar: 'بروتين مصل اللبن', sizes: [['1 kg', 450], ['2 kg', 820]], flavours: [{ fr: 'Chocolat', ar: 'شوكولا' }, { fr: 'Vanille', ar: 'فانيلا' }, { fr: 'Fraise', ar: 'فراولة' }],
        descFr: 'Protéine de lactosérum en poudre.', descAr: 'بروتين مصل اللبن، مسحوق.', pack: { form: 'tub', name: 'Whey', sub: 'protéine' } },
      { id: 'crea', cat: 'sport', status: 'example', fr: 'Créatine monohydrate', ar: 'كرياتين', sizes: [['300 g', 260]], descFr: 'En poudre, sans arôme.', descAr: 'مسحوق بلا نكهة.', pack: { form: 'tub', body: '#e9e5dc', cap: '#1c1c1c', scale: .82, name: 'Créatine', sub: 'monohydrate' } }
    ]
  };
  if (typeof module === 'object' && module.exports) module.exports = CATALOGUE;
  else root.CATALOGUE = CATALOGUE;
})(typeof self !== 'undefined' ? self : this);
