/*
 * El Baraka shop catalogue: the ONE file to edit (or use editor.html, which writes a new copy).
 * status   "shop"  posted on @herboristerieelbaraka · "brand"  from a brand range the shop uses (Dietaroma,
 *          GPH Diffusion); remove the ones the shop does not stock.
 * sizes    [label, price in DH or null]; null shows "Prix sur demande" until the price is filled in.
 * photo    path without ".jpg" (a "-s.jpg" small copy sits next to it). No photo: the card shows the name.
 * faq      questions for the owner to answer; a question shows on the site once its answer is written.
 * Open store.html?dev=1 to see each product's status and any mistakes in this file.
 */
(function (root) {
  const CATALOGUE = {
    "categories": [
      {
        "id": "ruche",
        "fr": "Miel & ruche",
        "ar": "العسل ومنتجات النحل",
        "plate": "img/botanical/oranger",
        "plateRatio": 0.941,
        "plateScale": 1.0
      },
      {
        "id": "complements",
        "fr": "Compléments & vitamines",
        "ar": "المكملات والفيتامينات",
        "plate": "img/botanical/curcuma",
        "plateRatio": 0.529,
        "plateScale": 0.9
      },
      {
        "id": "plantes",
        "fr": "Plantes & épicerie bio",
        "ar": "الأعشاب والأغذية الطبيعية",
        "plate": "img/botanical/menthe",
        "plateRatio": 0.552,
        "plateScale": 1.0
      },
      {
        "id": "huiles",
        "fr": "Huiles essentielles",
        "ar": "الزيوت العطرية",
        "plate": "img/botanical/lavande",
        "plateRatio": 0.533,
        "plateScale": 1.0
      },
      {
        "id": "cosmetiques",
        "fr": "Cosmétiques naturels",
        "ar": "مستحضرات التجميل",
        "plate": "img/botanical/rose",
        "plateRatio": 0.766,
        "plateScale": 0.84,
        "plateY": 7
      }
    ],
    "products": [
      {
        "id": "sirop-toux",
        "cat": "ruche",
        "fr": "Sirop contre la toux",
        "ar": "شراب الكحة",
        "sizes": [
          [
            "Flacon",
            25
          ]
        ],
        "source": "https://www.instagram.com/p/DYhPwvnKPv8/",
        "status": "shop",
        "instagram": true
      },
      {
        "id": "sirop-prostate",
        "cat": "ruche",
        "fr": "Miel « Prostate »",
        "ar": "عسل البروستاتا",
        "sizes": [
          [
            "125 ml",
            50
          ]
        ],
        "source": "https://www.instagram.com/p/DYhP31mKf2R/",
        "status": "shop",
        "instagram": true
      },
      {
        "id": "sirop-enuresie",
        "cat": "ruche",
        "fr": "Miel « Énurésie » pour enfants",
        "ar": "عسل التبول اللاإرادي",
        "sizes": [
          [
            "125 ml",
            50
          ]
        ],
        "source": "https://www.instagram.com/p/DYhPnWWKVtv/",
        "status": "shop",
        "instagram": true
      },
      {
        "id": "sexomiel",
        "cat": "ruche",
        "fr": "Sexo Miel",
        "ar": "العسل السحري سكسوميل",
        "sizes": [
          [
            "125 ml",
            50
          ]
        ],
        "source": "https://www.instagram.com/p/DYhQPnUqmfr/",
        "status": "shop",
        "instagram": true
      },
      {
        "id": "shampoing",
        "cat": "cosmetiques",
        "brand": "El Baraka",
        "fr": "Shampoing 100 % naturel",
        "ar": "شامبو طبيعي",
        "sizes": [
          [
            "Flacon",
            null
          ]
        ],
        "source": "https://www.instagram.com/p/C9DeltdNhsZ/",
        "status": "shop",
        "instagram": true
      },
      {
        "id": "creme-capillaire",
        "cat": "cosmetiques",
        "brand": "El Baraka",
        "fr": "Crème capillaire naturelle",
        "ar": "كريم الشعر الطبيعي",
        "sizes": [
          [
            "Pot",
            null
          ]
        ],
        "source": "https://www.instagram.com/p/DCCTW8YtShg/",
        "status": "shop",
        "instagram": true
      },
      {
        "id": "graisse-chameau",
        "cat": "cosmetiques",
        "brand": "Sanambio",
        "fr": "Graisse de bosse de chameau",
        "ar": "دهن سنام الجمل",
        "sizes": [
          [
            "100 ml",
            30
          ]
        ],
        "photo": "img/products/graisse-chameau",
        "source": "https://www.instagram.com/p/DYhO_3VK6kK/",
        "status": "shop",
        "instagram": true
      },
      {
        "id": "physalis-krill",
        "cat": "complements",
        "brand": "Physalis",
        "fr": "Krill Oméga 3",
        "sizes": [
          [
            "30 capsules",
            190
          ]
        ],
        "photo": "img/products/physalis-krill",
        "source": "https://www.instagram.com/p/DDJz0E-tcJK/",
        "status": "shop",
        "instagram": true
      },
      {
        "id": "nutralie-omega3",
        "cat": "complements",
        "brand": "Nutralie",
        "fr": "Omega 3 Complex",
        "sizes": [
          [
            "60 capsules",
            null
          ]
        ],
        "photo": "img/products/nutralie-omega3",
        "source": "https://www.instagram.com/p/DDJ0JzJNjWm/",
        "status": "shop",
        "instagram": true
      },
      {
        "id": "nutralie-magnesium",
        "cat": "complements",
        "brand": "Nutralie",
        "fr": "Magnesium Complex",
        "sizes": [
          [
            "120 capsules",
            null
          ]
        ],
        "photo": "img/products/nutralie-magnesium",
        "source": "https://www.instagram.com/p/DDJ0IKlNJ97/",
        "status": "shop",
        "instagram": true
      },
      {
        "id": "nutralie-detox",
        "cat": "complements",
        "brand": "Nutralie",
        "fr": "Detox Complex",
        "sizes": [
          [
            "90 capsules",
            null
          ]
        ],
        "photo": "img/products/nutralie-detox",
        "source": "https://www.instagram.com/p/DDJ0JO3NxcS/",
        "status": "shop",
        "instagram": true
      },
      {
        "id": "nutralie-cranberry",
        "cat": "complements",
        "brand": "Nutralie",
        "fr": "Cranberry Complex",
        "sizes": [
          [
            "60 capsules",
            null
          ]
        ],
        "photo": "img/products/nutralie-cranberry",
        "source": "https://www.instagram.com/p/DDJ0GGLtUHg/",
        "status": "shop",
        "instagram": true
      },
      {
        "id": "dt-philaromal-probiotiques-ventre-plat-30-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Philaromal Probiotiques Ventre Plat",
        "sizes": [
          [
            "30 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-philaromal-probiotiques-ventre-plat-30-gelules",
        "source": "https://universparadiscount.ma/shampoings/29233-dietaroma-philaromal-probiotiques-ventre-plat-30-gelules.html"
      },
      {
        "id": "dt-co-q10-ubiquinol-antioxydant-et-energie-20-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Co Q10 Ubiquinol Antioxydant et Énergie",
        "sizes": [
          [
            "20 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-co-q10-ubiquinol-antioxydant-et-energie-20-gelules",
        "source": "https://universparadiscount.ma/complements-alimentaires/30147-dietaroma-co-q10-ubiquinol-antioxydanr-et-energie-20-gelules.html"
      },
      {
        "id": "dt-cystenea-duo-confort-urinaire-20-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Cystenea Duo Confort Urinaire",
        "sizes": [
          [
            "20 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-cystenea-duo-confort-urinaire-20-gelules",
        "source": "https://universparadiscount.ma/complements-alimentaires/30148-dietaroma-cystenea-duo-confort-urinaire-20-gelules.html"
      },
      {
        "id": "dt-articulior-gluco-chondro-forte-60-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Articulior Gluco Chondro Forte",
        "sizes": [
          [
            "60 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-articulior-gluco-chondro-forte-60-comprimes",
        "source": "https://universparadiscount.ma/bien-etre-et-equilibre-emotionnel/20137-dietaroma-articulior-gluco-chondro-forte-60-comprimes.html"
      },
      {
        "id": "dt-6-magnesium-forte-30-jours",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "6 Magnesium Forte",
        "sizes": [
          [
            "30 jours",
            null
          ]
        ],
        "photo": "img/products/dt-6-magnesium-forte-30-jours",
        "source": "https://universparadiscount.ma/complements-alimentaires/8522-dietaroma-dietaroma-6-magnesium-forte-30-jours-complements-alimentaires.html"
      },
      {
        "id": "dt-action-transit-express-10-sachets",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Action Transit Express",
        "sizes": [
          [
            "10 sachets",
            null
          ]
        ],
        "photo": "img/products/dt-action-transit-express-10-sachets",
        "source": "https://universparadiscount.ma/transit-digestion-et-elimination/21790-dietaroma-action-transit-express-10-sachets.html"
      },
      {
        "id": "dt-articulations-60-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Articulations",
        "sizes": [
          [
            "60 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-articulations-60-comprimes",
        "source": "https://universparadiscount.ma/complements-alimentaires/27817-dietaroma-dietaroma-articulations-60-comprimes-complements-alimentaires.html"
      },
      {
        "id": "dt-astragale-defenses-naturelles-20-ampoules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Astragale Défenses Naturelles",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-astragale-defenses-naturelles-20-ampoules",
        "source": "https://universparadiscount.ma/defenses-immunitaires/27808-dietaroma-astragale-defnses-naturelles-20-ampoules.html"
      },
      {
        "id": "dt-cap-ligne-brule-graisse-bio-20-ampoules-10-offerts",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Cap Ligne Brûle Graisse Bio",
        "sizes": [
          [
            "20 ampoules + 10 offerts",
            null
          ]
        ],
        "photo": "img/products/dt-cap-ligne-brule-graisse-bio-20-ampoules-10-offerts",
        "source": "https://universparadiscount.ma/detox-coup-faim-ventre-plat/4216-dietaroma-cap-ligne-brule-graisse-bio-20-ampoules-10-offerts.html"
      },
      {
        "id": "dt-capilea-forti-cheveux-et-ongles-60-capsules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Capilea Forti Cheveux et Ongles",
        "sizes": [
          [
            "60 capsules",
            null
          ]
        ],
        "photo": "img/products/dt-capilea-forti-cheveux-et-ongles-60-capsules",
        "source": "https://universparadiscount.ma/complements-cheveux-et-ongles/3235-dietaroma-dietaroma-capilea-forti-cheveux-et-ongles-60-capsules-complements-cheveux-et-ongles.html"
      },
      {
        "id": "dt-capital-coeur-60-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Capital Cœur",
        "sizes": [
          [
            "60 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-capital-coeur-60-gelules",
        "source": "https://universparadiscount.ma/circulation-sanguine-et-coeur/16509-dietaroma-capital-coeur-60-gelules.html"
      },
      {
        "id": "dt-capital-homme-prostate-60-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Capital Homme Prostate",
        "sizes": [
          [
            "60 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-capital-homme-prostate-60-gelules",
        "source": "https://universparadiscount.ma/trouble-urinaire-et-prostate/9334-dietaroma-capital-homme-prostate-60-gelules.html"
      },
      {
        "id": "dt-capligne-brule-graisse-et-controle-du-poids-bio-30-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Capligne Brûle Graisse et Contrôle du Poids Bio",
        "sizes": [
          [
            "30 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-capligne-brule-graisse-et-controle-du-poids-bio-30-comprimes",
        "source": "https://universparadiscount.ma/vitamines-et-formes/13181-dietaroma-dietaroma-capligne-brule-graisse-et-controle-du-poids-bio-30-comprimes-vitamine-et-forme.html"
      },
      {
        "id": "dt-capligne-konjac-chrome-40-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Capligne Konjac Chrome",
        "sizes": [
          [
            "40 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-capligne-konjac-chrome-40-gelules",
        "source": "https://universparadiscount.ma/detox-coup-faim-ventre-plat/5344-dietaroma-dietaroma-capligne-konjac-chrome-40-gelules-detox-coup-faim-ventre-plat.html"
      },
      {
        "id": "dt-charbon-vegetal-bio-120-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Charbon Végétal Bio",
        "sizes": [
          [
            "120 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-charbon-vegetal-bio-120-gelules",
        "source": "https://universparadiscount.ma/accueil/10310-dietaroma-dietaroma-charbon-vegetal-bio-120-gelules-home.html"
      },
      {
        "id": "dt-chardon-marie-25-mg-de-silymarine-60-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Chardon Marie 25 mg de Silymarine",
        "sizes": [
          [
            "60 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-chardon-marie-25-mg-de-silymarine-60-comprimes",
        "source": "https://universparadiscount.ma/vitamines-et-formes/18499-dietaroma-dietaroma-chardon-marie-25-mg-de-silymarine-60-comprimes-vitamine-et-forme.html"
      },
      {
        "id": "dt-c-i-p-ginkgo-biloba-20-ampoules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "C.I.P. Ginkgo Biloba",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-c-i-p-ginkgo-biloba-20-ampoules",
        "source": "https://universparadiscount.ma/memoire-et-concentration/1320-dietaroma-cip-ginkgo-biloba-20-ampoules.html"
      },
      {
        "id": "dt-c-i-p-sommeil-bio-20-ampoules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "C.I.P. Sommeil Bio",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-c-i-p-sommeil-bio-20-ampoules",
        "source": "https://universparadiscount.ma/sommeil-et-detente/4217-dietaroma-dietaroma-cip-sommeil-bio-20-ampoules-sommeil-detente.html"
      },
      {
        "id": "dt-circulation-bio-20-ampoules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Circulation Bio",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-circulation-bio-20-ampoules",
        "source": "https://universparadiscount.ma/circulation-sanguine-et-coeur/7708-dietaroma-dietaroma-circulation-bio-20-ampoules-circulation-sanguine-et-coeur.html"
      },
      {
        "id": "dt-complexe-collagene-marin-20-sachets",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Complexe Collagène Marin",
        "sizes": [
          [
            "20 sachets",
            null
          ]
        ],
        "photo": "img/products/dt-complexe-collagene-marin-20-sachets",
        "source": "https://universparadiscount.ma/accueil/11520-dietaroma-complexe-collagene-marin-20-sachets.html"
      },
      {
        "id": "dt-complexe-magnesium-marin-b6-et-b5",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Complexe Magnesium Marin+ B6 et B5",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/dt-complexe-magnesium-marin-b6-et-b5",
        "source": "https://universparadiscount.ma/complements-alimentaires/1324-dietaroma-dietaroma-complexe-magnesium-marin-b6-et-b5-complements-alimentaires.html"
      },
      {
        "id": "dt-curcuma-forte-gingembre-20-ampoules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Curcuma Forte+ Gingembre",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-curcuma-forte-gingembre-20-ampoules",
        "source": "https://universparadiscount.ma/articulations-et-crampes/7302-dietaroma-curcuma-forte-gingembre-20-ampoules.html"
      },
      {
        "id": "dt-articulior-curcuma-et-poivre-noir-60-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Articulior Curcuma et Poivre Noir",
        "sizes": [
          [
            "60 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-articulior-curcuma-et-poivre-noir-60-comprimes",
        "source": "https://universparadiscount.ma/complements-alimentaires-anti-age/3833-dietaroma-articulior-curcuma-et-poivre-noir-60-comprimes.html"
      },
      {
        "id": "dt-dermideal-anti-age-20-ampoules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Dermidéal+ Anti-âge",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-dermideal-anti-age-20-ampoules",
        "source": "https://universparadiscount.ma/complements-alimentaires-anti-age/24921-dietaroma-dermideal-anti-age-20-ampoules.html"
      },
      {
        "id": "dt-dermideal-plus-collagene-coq10-60-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Dermidéal Plus Collagène + COQ10",
        "sizes": [
          [
            "60 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-dermideal-plus-collagene-coq10-60-comprimes",
        "source": "https://universparadiscount.ma/complements-alimentaires-anti-age/3932-dietaroma-dermideal-plus-collagene-coq10-60-comprimes.html"
      },
      {
        "id": "dt-desmodium-15-mg-de-flavones-60-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Desmodium 15 mg de Flavones",
        "sizes": [
          [
            "60 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-desmodium-15-mg-de-flavones-60-comprimes",
        "source": "https://universparadiscount.ma/defenses-immunitaires/20138-dietaroma-desmodium-15-mg-de-flavones-60-comprimes.html"
      },
      {
        "id": "dt-digestion-20-ampoules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Digestion",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-digestion-20-ampoules",
        "source": "https://universparadiscount.ma/transit-digestion-et-elimination/5198-dietaroma-dietaroma-digestion-20-ampoules-transit-digestion-elimination.html"
      },
      {
        "id": "dt-drain-ideal-detox-5-emonctoires-bio-20-ampoules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Drain Idéal Detox 5 Émonctoires Bio",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-drain-ideal-detox-5-emonctoires-bio-20-ampoules",
        "source": "https://universparadiscount.ma/complements-alimentaires/1326-dietaroma-drain-ideal-detox-5-emonctoires-bio-20-ampoules.html"
      },
      {
        "id": "dt-ephytem-spiruline-300-comprimes",
        "cat": "plantes",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Ephytem Spiruline",
        "sizes": [
          [
            "300 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-ephytem-spiruline-300-comprimes",
        "source": "https://universparadiscount.ma/defenses-immunitaires/26494-dietaroma-ephytem-spiruline-300-comprimes.html"
      },
      {
        "id": "dt-ginseng-extra-fort-20-ampoules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Ginseng Extra Fort",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-ginseng-extra-fort-20-ampoules",
        "source": "https://universparadiscount.ma/complements-alimentaires/3708-dietaroma-dietaroma-ginseng-extra-fort-20-ampoules-complements-alimentaires.html"
      },
      {
        "id": "dt-ginseng-gelee-royale-acerola-fortifiant-et-dynamisant-ampoul",
        "cat": "ruche",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Ginseng Gelée Royale Acerola Fortifiant et Dynamisant Ampoules",
        "sizes": [
          [
            "20 jours",
            null
          ]
        ],
        "photo": "img/products/dt-ginseng-gelee-royale-acerola-fortifiant-et-dynamisant-ampoul",
        "source": "https://universparadiscount.ma/vitamines-et-formes/20575-dietaroma-dietaroma-ginseng-gelee-royale-acerola-fortifiant-et-dynamisant-ampoules-20-jours-vitamines-et-formes.html"
      },
      {
        "id": "dt-gouttes-propolis-bio-15-ml",
        "cat": "ruche",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Gouttes Propolis Bio",
        "sizes": [
          [
            "15 ml",
            null
          ]
        ],
        "photo": "img/products/dt-gouttes-propolis-bio-15-ml",
        "source": "https://universparadiscount.ma/vitamines-et-formes/3352-dietaroma-gouttes-propolis-bio-15-ml.html"
      },
      {
        "id": "dt-harpagophytum-20-ampoules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Harpagophytum",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-harpagophytum-20-ampoules",
        "source": "https://universparadiscount.ma/articulations-et-crampes/20136-dietaroma-harpagophytum-20-ampoules.html"
      },
      {
        "id": "dt-la-ruche-miel-gelee-royale-pollen-propolis-20-ampoules",
        "cat": "ruche",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "La Ruche Miel + Gelée Royale + Pollen + Propolis",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-la-ruche-miel-gelee-royale-pollen-propolis-20-ampoules",
        "source": "https://universparadiscount.ma/defenses-immunitaires/3622-dietaroma-dietaroma-la-ruche-miel-gelee-royale-pollen-propolis-20-ampoules-vitamine-et-forme.html"
      },
      {
        "id": "dt-la-ruche-propolis-500mg-a-croquer-20-comprimes-gout-citron",
        "cat": "ruche",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "La Ruche Propolis 500mg à croquer 20 comprimés Goût Citron",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/dt-la-ruche-propolis-500mg-a-croquer-20-comprimes-gout-citron",
        "source": "https://universparadiscount.ma/vitamines-et-formes/26028-dietaroma-dietaroma-la-ruche-propolis-500mg-a-croquer-20-comprimes-gout-citron-vitamines-et-formes.html"
      },
      {
        "id": "dt-maca-haute-concentration-60-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Maca Haute Concentration",
        "sizes": [
          [
            "60 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-maca-haute-concentration-60-gelules",
        "source": "https://universparadiscount.ma/accueil/13188-dietaroma-maca-haute-concentration-60-gelules.html"
      },
      {
        "id": "dt-memo-viv-capital-memoire-60-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Memo Viv Capital Mémoire",
        "sizes": [
          [
            "60 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-memo-viv-capital-memoire-60-comprimes",
        "source": "https://universparadiscount.ma/memoire-et-concentration/8519-dietaroma-memo-viv-capital-memoire-60-comprimes.html"
      },
      {
        "id": "dt-mineavit-booster-30-comprimes-bicouche",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Mineavit Booster",
        "sizes": [
          [
            "30 comprimés bicouche",
            null
          ]
        ],
        "photo": "img/products/dt-mineavit-booster-30-comprimes-bicouche",
        "source": "https://universparadiscount.ma/vitamines-et-formes/27815-dietaroma-dietaroma-mineavit-booster-30-comprimes-bicouche-vitamines-et-formes.html"
      },
      {
        "id": "dt-mix-b12-fer-d3-calcium-et-vitamine-c",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Mix B12 Fer D3 Calcium et Vitamine C",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/dt-mix-b12-fer-d3-calcium-et-vitamine-c",
        "source": "https://universparadiscount.ma/complements-alimentaires/5849-dietaroma-dietaroma-mix-b12-fer-d3-calcium-et-vitamine-c-complements-alimentaires.html"
      },
      {
        "id": "dt-nocta-plus-melatonine-sommeil-40-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Nocta Plus Mélatonine Sommeil",
        "sizes": [
          [
            "40 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-nocta-plus-melatonine-sommeil-40-comprimes",
        "source": "https://universparadiscount.ma/sommeil-et-detente/18956-dietaroma-dietaroma-nocta-plus-melatonine-sommeil-40-comprimes-sommeil-detente.html"
      },
      {
        "id": "dt-nocta-melatonine-flash-spray-buccal-sommeil-30-ml",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Nocta+ Mélatonine Flash Spray Buccal Sommeil",
        "sizes": [
          [
            "30 ml",
            null
          ]
        ],
        "photo": "img/products/dt-nocta-melatonine-flash-spray-buccal-sommeil-30-ml",
        "source": "https://universparadiscount.ma/sommeil-et-detente/19494-dietaroma-noctamelatonine-flash-spray-buccal-sommeil-30-ml.html"
      },
      {
        "id": "dt-oleopolis-immunite-60-capsules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Oleopolis Immunité",
        "sizes": [
          [
            "60 capsules",
            null
          ]
        ],
        "photo": "img/products/dt-oleopolis-immunite-60-capsules",
        "source": "https://universparadiscount.ma/vitamines-et-formes/3353-dietaroma-dietaroma-oleopolis-immunite-60-capsules-vitamine-et-forme.html"
      },
      {
        "id": "dt-oleopolis-sirop-gorge-bronche-125ml",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Oleopolis Sirop Gorge Bronche",
        "sizes": [
          [
            "125 ml",
            null
          ]
        ],
        "photo": "img/products/dt-oleopolis-sirop-gorge-bronche-125ml",
        "source": "https://universparadiscount.ma/defenses-immunitaires/26493-dietaroma-oleopolis-sirop-gorge-bronche-125ml.html"
      },
      {
        "id": "dt-osteoprotect-60-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Osteoprotect+",
        "sizes": [
          [
            "60 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-osteoprotect-60-comprimes",
        "source": "https://universparadiscount.ma/complements-alimentaires-seniors/6542-dietaroma-dietaroma-osteoprotect-60-comprimes-complements-alimentaires-seniors.html"
      },
      {
        "id": "dt-philaromal-quotidien-60-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Philaromal Quotidien",
        "sizes": [
          [
            "60 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-philaromal-quotidien-60-gelules",
        "source": "https://universparadiscount.ma/transit-digestion-et-elimination/1331-dietaroma-philaromal-quotidien-60-gelules.html"
      },
      {
        "id": "dt-phyt-allerg-40-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Phyt'allerg",
        "sizes": [
          [
            "40 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-phyt-allerg-40-gelules",
        "source": "https://universparadiscount.ma/defenses-immunitaires/24603-dietaroma-phyt-allerg-40-gelules.html"
      },
      {
        "id": "dt-probiotiques-enfants-15-sachets",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Probiotiques Enfants",
        "sizes": [
          [
            "15 sachets",
            null
          ]
        ],
        "photo": "img/products/dt-probiotiques-enfants-15-sachets",
        "source": "https://universparadiscount.ma/complements-alimentaires-enfants/26232-dietaroma-probiotiques-enfants-15-sachets.html"
      },
      {
        "id": "dt-probiotiques-forte-confort-express-14-sachets",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Probiotiques Forte Confort Express",
        "sizes": [
          [
            "14 sachets",
            null
          ]
        ],
        "photo": "img/products/dt-probiotiques-forte-confort-express-14-sachets",
        "source": "https://universparadiscount.ma/complements-alimentaires/13768-dietaroma-probiotiques-forte-confort-express-14-sachets.html"
      },
      {
        "id": "dt-radis-noir-artichaud-bio-20-ampoules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Radis Noir Artichaut Bio",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-radis-noir-artichaud-bio-20-ampoules",
        "source": "https://universparadiscount.ma/transit-digestion-et-elimination/6759-dietaroma-radis-noir-artichaud-bio-20-ampoules.html"
      },
      {
        "id": "dt-spray-gorge-bio-a-la-propolis-et-aux-huiles-essentielles",
        "cat": "ruche",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Spray Gorge Bio à la Propolis et aux Huiles Essentielles",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/dt-spray-gorge-bio-a-la-propolis-et-aux-huiles-essentielles",
        "source": "https://universparadiscount.ma/bucco-dentaire/13179-dietaroma-dietaroma-spray-gorge-bio-a-la-propolis-et-aux-huiles-essentielles-dentaire.html"
      },
      {
        "id": "dt-syndrome-premenstruel-30-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Syndrome Prémenstruel",
        "sizes": [
          [
            "30 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-syndrome-premenstruel-30-comprimes",
        "source": "https://universparadiscount.ma/complements-alimentaires/18957-dietaroma-dietaroma-syndrome-premenstruel-30-comprimes-complements-alimentaires.html"
      },
      {
        "id": "dt-vinalege-jambes-legeres-20-ampoules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Vinalège Jambes Légères",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-vinalege-jambes-legeres-20-ampoules",
        "source": "https://universparadiscount.ma/circulation-sanguine-et-coeur/24444-dietaroma-vinalege-jambes-legeres-20-ampoules.html"
      },
      {
        "id": "dt-vinalege-jambes-legeres-45-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Vinalège Jambes Légères",
        "sizes": [
          [
            "45 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-vinalege-jambes-legeres-45-comprimes",
        "source": "https://universparadiscount.ma/complements-alimentaires-anti-age/4029-dietaroma-dietaroma-vinalege-jambes-legeres-45-comprimes-complements-alimentaires-anti-age.html"
      },
      {
        "id": "dt-vitamine-d3-vegetales-2000ui",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Vitamine D3 Végétales 2000 UI",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/dt-vitamine-d3-vegetales-2000ui",
        "source": "https://universparadiscount.ma/defenses-immunitaires/7151-dietaroma-vitamine-d3-vegetales-2000ui.html"
      },
      {
        "id": "dt-zinc-vitamine-b6-60-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Zinc + Vitamine B6",
        "sizes": [
          [
            "60 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-zinc-vitamine-b6-60-comprimes",
        "source": "https://universparadiscount.ma/accueil/13186-dietaroma-zinc-vitamine-b6-60-comprimes.html"
      },
      {
        "id": "dt-cap-ligne-berberine-chrome-moringa-40-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Cap Ligne Berbérine Chrome + Moringa",
        "sizes": [
          [
            "40 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-cap-ligne-berberine-chrome-moringa-40-gelules",
        "source": "https://universparadiscount.ma/complements-alimentaires/28437-dietaroma-cap-ligne-berberine-chrome-moringa-40-gelules.html"
      },
      {
        "id": "dt-gaba-500mg-40-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "GABA 500mg",
        "sizes": [
          [
            "40 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-gaba-500mg-40-gelules",
        "source": "https://universparadiscount.ma/bien-etre-et-equilibre-emotionnel/30149-dietaroma-gaba-500mg-40-gelules.html"
      },
      {
        "id": "dt-complexe-vitamines-b-energie-30-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Complexe Vitamines B Énergie",
        "sizes": [
          [
            "30 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-complexe-vitamines-b-energie-30-gelules",
        "source": "https://universparadiscount.ma/vitamines-et-formes/30150-dietaroma-complexe-vitamines-b-energie-30-gelules.html"
      },
      {
        "id": "dt-complexe-antioxydant-protection-cellulaire-40-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Complexe Antioxydant Protection Cellulaire",
        "sizes": [
          [
            "40 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-complexe-antioxydant-protection-cellulaire-40-gelules",
        "source": "https://universparadiscount.ma/complements-alimentaires/30146-dietaroma-complexe-antioxydant-protection-cellulaire-40-gelules.html"
      },
      {
        "id": "dt-magnesium-bisglycinate-300-mg-fatigue-et-stress-80-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Magnesium Bisglycinate 300 mg Fatigue et Stress",
        "sizes": [
          [
            "80 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-magnesium-bisglycinate-300-mg-fatigue-et-stress-80-comprimes",
        "source": "https://universparadiscount.ma/bien-etre-et-equilibre-emotionnel/30151-dietaroma-magnesium-bisglycinate-300-mg-fatigue-et-stress-80-comprimes.html"
      },
      {
        "id": "dt-nac-antioxydant-40-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "NAC Antioxydant",
        "sizes": [
          [
            "40 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-nac-antioxydant-40-gelules",
        "source": "https://universparadiscount.ma/complements-alimentaires/30152-dietaroma-nac-antioxydant-40-gelules.html"
      },
      {
        "id": "dt-omega-3-1500-mg-60-capsules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Omega 3 1500 mg",
        "sizes": [
          [
            "60 capsules",
            null
          ]
        ],
        "photo": "img/products/dt-omega-3-1500-mg-60-capsules",
        "source": "https://universparadiscount.ma/circulation-sanguine-et-coeur/24445-dietaroma-omega-3-1500-mg-60-capsules.html"
      },
      {
        "id": "dt-nocta-melatonine-maxi-15-comprimes-secables",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Nocta+ Mélatonine Maxi",
        "sizes": [
          [
            "15 comprimés sécables",
            null
          ]
        ],
        "photo": "img/products/dt-nocta-melatonine-maxi-15-comprimes-secables",
        "source": "https://universparadiscount.ma/bien-etre-et-equilibre-emotionnel/27809-dietaroma-nocta-melatonine-maxi-15-comprimes-secables.html"
      },
      {
        "id": "dt-probiotiques-flore-intime-20-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Probiotiques Flore Intime",
        "sizes": [
          [
            "20 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-probiotiques-flore-intime-20-gelules",
        "source": "https://universparadiscount.ma/gynecologie-et-troubles-urinaires/13182-dietaroma-dietaroma-probiotiques-flore-intime-20-gelules-gynecologie-et-troubles-urinaires.html"
      },
      {
        "id": "dt-articulation-reine-des-pres-ortie-harpagophytum-ampoules-20-",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Articulation Reine des Prés Ortie Harpagophytum Ampoules",
        "sizes": [
          [
            "20 jours",
            null
          ]
        ],
        "photo": "img/products/dt-articulation-reine-des-pres-ortie-harpagophytum-ampoules-20-",
        "source": "https://universparadiscount.ma/complements-alimentaires/20576-dietaroma-dietaroma-articulation-reine-des-pres-ortie-harpagophytum-ampoules-20-jours-complements-alimentaires.html"
      },
      {
        "id": "dt-cap-ligne-brule-graisse-forte-bio-20-ampoules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Cap Ligne Brûle Graisse Forte Bio",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-cap-ligne-brule-graisse-forte-bio-20-ampoules",
        "source": "https://universparadiscount.ma/detox-coup-faim-ventre-plat/27042-dietaroma-cap-ligne-brule-graisse-forte-bio-20-ampoules.html"
      },
      {
        "id": "dt-complexe-fer-vitamine-c-30-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Complexe Fer + Vitamine C",
        "sizes": [
          [
            "30 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-complexe-fer-vitamine-c-30-gelules",
        "source": "https://universparadiscount.ma/complements-alimentaires/1323-dietaroma-dietaroma-complexe-fer-vitamine-c-30-gelules-complements-alimentaires.html"
      },
      {
        "id": "dt-gastrideal-confort-gastrique-vegan-45-gelules",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Gastridéal Confort Gastrique Vegan",
        "sizes": [
          [
            "45 gélules",
            null
          ]
        ],
        "photo": "img/products/dt-gastrideal-confort-gastrique-vegan-45-gelules",
        "source": "https://universparadiscount.ma/complements-alimentaires/6541-dietaroma-gastrideal-confort-gastrique-vegan-45-gelules.html"
      },
      {
        "id": "dt-la-ruche-gelee-royale-forte-3500-mg-20-ampoules",
        "cat": "ruche",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "La Ruche Gelée Royale Forte 3500 mg",
        "sizes": [
          [
            "20 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-la-ruche-gelee-royale-forte-3500-mg-20-ampoules",
        "source": "https://universparadiscount.ma/accueil/12572-dietaroma-la-ruche-gele-royale-forte-3500-mg-20-ampoules.html"
      },
      {
        "id": "dt-la-ruche-gelee-royale-bio-1500-mg-30-ampoules",
        "cat": "ruche",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "La Ruche Gelée Royale Bio 1500 mg",
        "sizes": [
          [
            "30 ampoules",
            null
          ]
        ],
        "photo": "img/products/dt-la-ruche-gelee-royale-bio-1500-mg-30-ampoules",
        "source": "https://universparadiscount.ma/defenses-immunitaires/3358-dietaroma-dietaroma-la-ruche-gelee-royale-bio-1500-mg-30-ampoules-vitamine-et-forme.html"
      },
      {
        "id": "dt-sommeil-60-comprimes",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Sommeil",
        "sizes": [
          [
            "60 comprimés",
            null
          ]
        ],
        "photo": "img/products/dt-sommeil-60-comprimes",
        "source": "https://universparadiscount.ma/sommeil-et-detente/24601-dietaroma-sommeil-60-comprimes.html"
      },
      {
        "id": "dt-vitamines-k2mkl7-et-d3-20-ml",
        "cat": "complements",
        "brand": "Dietaroma",
        "status": "brand",
        "fr": "Vitamines K2MKL7 et D3",
        "sizes": [
          [
            "20 ml",
            null
          ]
        ],
        "photo": "img/products/dt-vitamines-k2mkl7-et-d3-20-ml",
        "source": "https://universparadiscount.ma/vitamines-et-formes/28395-dietaroma-vitamines-k2mkl7-et-d3-20-ml.html"
      },
      {
        "id": "gph-magnesium-bisglycinate-vitamine-b6-500-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Magnésium Bisglycinate + Vitamine B6",
        "sizes": [
          [
            "500 mg",
            null
          ]
        ],
        "photo": "img/products/gph-magnesium-bisglycinate-vitamine-b6-500-mg",
        "source": "https://www.123gelules.com/1784-magnesium-bisglycinate-vitamine-b6-500-mg.html"
      },
      {
        "id": "gph-melatonine-fort-1-8-mg-comprimes",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Mélatonine Fort",
        "sizes": [
          [
            "1.8 mg · Comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-melatonine-fort-1-8-mg-comprimes",
        "source": "https://www.123gelules.com/1372-melatonine-fort-18mg-180-comprimes.html"
      },
      {
        "id": "gph-collagene-marin-vitamine-c-350-mg-180-gelules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Collagène marin + Vitamine C",
        "sizes": [
          [
            "350 mg · 180 gélules",
            null
          ]
        ],
        "photo": "img/products/gph-collagene-marin-vitamine-c-350-mg-180-gelules",
        "source": "https://www.123gelules.com/1619-collagène-marin-vitamine-c.html"
      },
      {
        "id": "gph-omega-3-500-mg-epa-660mg-dha-440mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Oméga 3",
        "sizes": [
          [
            "500 mg · EPA : 660mg / DHA : 440mg",
            null
          ]
        ],
        "photo": "img/products/gph-omega-3-500-mg-epa-660mg-dha-440mg",
        "source": "https://www.123gelules.com/1479-oméga-3-500-mg-200-cpasules.html"
      },
      {
        "id": "gph-vitamine-c-acerola-bio-1000-mg-comprimes",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Vitamine C Acérola Bio",
        "sizes": [
          [
            "1000 mg · Comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-vitamine-c-acerola-bio-1000-mg-comprimes",
        "source": "https://www.123gelules.com/142-vitamine-c-acérola-bio-1000-mg-comprimés.html"
      },
      {
        "id": "gph-huile-de-foie-de-morue-500-mg-capsules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile de Foie de Morue",
        "sizes": [
          [
            "500 mg · capsules",
            null
          ]
        ],
        "photo": "img/products/gph-huile-de-foie-de-morue-500-mg-capsules",
        "source": "https://www.123gelules.com/95-huile-de-foie-de-morue-200-capsules.html"
      },
      {
        "id": "gph-spiruline-bio-500-mg-1200-comprimes",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Spiruline Bio",
        "sizes": [
          [
            "500 mg · 1200 comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-spiruline-bio-500-mg-1200-comprimes",
        "source": "https://www.123gelules.com/1292-spiruline-bio-500-mg-1200-comprimes.html"
      },
      {
        "id": "gph-huile-essentielle-de-ravintsara-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile essentielle de Ravintsara Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-ravintsara-bio",
        "source": "https://www.123gelules.com/1547-huile-essentielle-de-ravintsara-bio-10-ml.html"
      },
      {
        "id": "gph-levure-de-riz-rouge-bio-180-comprimes",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Levure de Riz Rouge Bio",
        "sizes": [
          [
            "180 comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-levure-de-riz-rouge-bio-180-comprimes",
        "source": "https://www.123gelules.com/507-levure-de-riz-rouge-16-60-comprimés-bio-600-mg.html"
      },
      {
        "id": "gph-vitamine-c-liposomale-675-mg-gelules-vegetales",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Vitamine C Liposomale",
        "sizes": [
          [
            "675 mg · Gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-vitamine-c-liposomale-675-mg-gelules-vegetales",
        "source": "https://www.123gelules.com/1578-vitamine-c-liposomale-200-mg-180-gélules-végétales.html"
      },
      {
        "id": "gph-huile-essentielle-de-menthe-poivree-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Menthe Poivrée Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-menthe-poivree-bio",
        "source": "https://www.123gelules.com/1027-huile-essentielle-de-menthe-poivrée-bio.html"
      },
      {
        "id": "gph-multivitamines-et-mineraux-comprimes",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "MultiVitamines et Minéraux",
        "sizes": [
          [
            "comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-multivitamines-et-mineraux-comprimes",
        "source": "https://www.123gelules.com/1515-multi-vitamines-et-minéraux-200-comprimés.html"
      },
      {
        "id": "gph-magnesium-marin-vitamine-b6-548-mg-200-comprimes",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Magnésium Marin + Vitamine B6",
        "sizes": [
          [
            "548 mg · 200 comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-magnesium-marin-vitamine-b6-548-mg-200-comprimes",
        "source": "https://www.123gelules.com/1071-magnésium-marin-vitamine-b6.html"
      },
      {
        "id": "gph-huile-essentielle-de-lavande-officinale-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Lavande officinale Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-lavande-officinale-bio",
        "source": "https://www.123gelules.com/1002-huile-essentielle-de-lavande-officinale-bio.html"
      },
      {
        "id": "gph-spiruline-bio-500-mg-500-comprimes",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Spiruline Bio",
        "sizes": [
          [
            "500 mg · 500 comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-spiruline-bio-500-mg-500-comprimes",
        "source": "https://www.123gelules.com/1048-spiruline-bio-500-comprimés-500-mg.html"
      },
      {
        "id": "gph-magnesium-zinc-b6-comprimes",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Magnésium + Zinc + B6",
        "sizes": [
          [
            "Comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-magnesium-zinc-b6-comprimes",
        "source": "https://www.123gelules.com/1514-magnesium-zinc-b6-200-comprimes.html"
      },
      {
        "id": "gph-huile-essentielle-de-tea-tree-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Tea Tree Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-tea-tree-bio",
        "source": "https://www.123gelules.com/1034-huile-essentielle-de-tea-tree-bio.html"
      },
      {
        "id": "gph-huile-essentielle-de-lavandin-super",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Lavandin Super",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-lavandin-super",
        "source": "https://www.123gelules.com/1025-huile-essentielle-de-lavandin-super.html"
      },
      {
        "id": "gph-chlorella-bio-500-mg-500-comprimes",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Chlorella Bio",
        "sizes": [
          [
            "500 mg · 500 comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-chlorella-bio-500-mg-500-comprimes",
        "source": "https://www.123gelules.com/1196-chlorella-500-comprimés.html"
      },
      {
        "id": "gph-vitamine-d3-5-g-comprimes",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Vitamine D3",
        "sizes": [
          [
            "5 µg · Comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-vitamine-d3-5-g-comprimes",
        "source": "https://www.123gelules.com/1512-vitamine-d-200-comprimes.html"
      },
      {
        "id": "gph-complexe-5-magnesium-gelules-vegetales",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Complexe 5 Magnésium",
        "sizes": [
          [
            "Gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-complexe-5-magnesium-gelules-vegetales",
        "source": "https://www.123gelules.com/1805-complexe-5-magnésium-180-gélules-végétales.html"
      },
      {
        "id": "gph-vitamine-b-complexe-comprimes",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Vitamine B Complexe",
        "sizes": [
          [
            "comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-vitamine-b-complexe-comprimes",
        "source": "https://www.123gelules.com/1513-vitamine-b-complexe-200-comprimes.html"
      },
      {
        "id": "gph-vitamine-c-1000-mg-acide-l-ascorbique-gelules-vegetales",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Vitamine C 1000 mg",
        "sizes": [
          [
            "Acide L Ascorbique · Gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-vitamine-c-1000-mg-acide-l-ascorbique-gelules-vegetales",
        "source": "https://www.123gelules.com/1566-vitamine-c-1000-mg-180-gélules-végétales-acide-ascorbique.html"
      },
      {
        "id": "gph-epilobe-bio-200-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Epilobe Bio",
        "sizes": [
          [
            "200 mg",
            null
          ]
        ],
        "photo": "img/products/gph-epilobe-bio-200-mg",
        "source": "https://www.123gelules.com/1609-epilobe-200-mg.html"
      },
      {
        "id": "gph-huile-de-pepins-de-courge-ecocert-420-mg-capsules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile de Pépins de Courge Ecocert 420 mg",
        "sizes": [
          [
            "Capsules",
            null
          ]
        ],
        "photo": "img/products/gph-huile-de-pepins-de-courge-ecocert-420-mg-capsules",
        "source": "https://www.123gelules.com/113-huile-de-pepins-de-courge-200-capsules.html"
      },
      {
        "id": "gph-huile-essentielle-d-eucalyptus-radiata-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle d'Eucalyptus Radiata Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-d-eucalyptus-radiata-bio",
        "source": "https://www.123gelules.com/1023-huile-essentielle-d-eucalyptus-radiata-bio.html"
      },
      {
        "id": "gph-spiruline-bio-500-mg-2500-comprimes",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Spiruline Bio",
        "sizes": [
          [
            "500 mg · 2500 comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-spiruline-bio-500-mg-2500-comprimes",
        "source": "https://www.123gelules.com/1051-5-piluliers-spiruline-bio-500-comprimés-500-mg.html"
      },
      {
        "id": "gph-hydrolysat-de-collagene-marin-vitamine-c-200-g-poudre",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Hydrolysat de Collagène Marin +Vitamine C",
        "sizes": [
          [
            "200 g poudre",
            null
          ]
        ],
        "photo": "img/products/gph-hydrolysat-de-collagene-marin-vitamine-c-200-g-poudre",
        "source": "https://www.123gelules.com/1608-hydrolysat-de-collagène-marin.html"
      },
      {
        "id": "gph-multivitamines-a-d3-c-groupe-b-200-gelules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Multivitamines A + D3 + C + Groupe B",
        "sizes": [
          [
            "200 gélules",
            null
          ]
        ],
        "photo": "img/products/gph-multivitamines-a-d3-c-groupe-b-200-gelules",
        "source": "https://www.123gelules.com/1122-multivitamines-a-d3-c-groupe-b.html"
      },
      {
        "id": "gph-gluconate-de-zinc-15-mg-comprimes",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Gluconate de zinc 15 mg",
        "sizes": [
          [
            "comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-gluconate-de-zinc-15-mg-comprimes",
        "source": "https://www.123gelules.com/1506-gluconate-de-zinc-15-mg-200-comprimés.html"
      },
      {
        "id": "gph-msm-en-poudre-soufre-organique",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "MSM en poudre",
        "sizes": [
          [
            "Soufre organique",
            null
          ]
        ],
        "photo": "img/products/gph-msm-en-poudre-soufre-organique",
        "source": "https://www.123gelules.com/1509-msm-en-poudre.html"
      },
      {
        "id": "gph-huile-essentielle-de-clou-de-girofle-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Clou de Girofle Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-clou-de-girofle-bio",
        "source": "https://www.123gelules.com/1019-huile-essentielle-de-clou-de-girofle-bio.html"
      },
      {
        "id": "gph-huile-essentielle-d-orange-douce-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle d'Orange Douce Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-d-orange-douce-bio",
        "source": "https://www.123gelules.com/1030-huile-essentielle-d-orange-douce-bio.html"
      },
      {
        "id": "gph-vitamine-b8-biotine-10-000-g",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Vitamine B8 Biotine",
        "sizes": [
          [
            "10 000 µg",
            null
          ]
        ],
        "photo": "img/products/gph-vitamine-b8-biotine-10-000-g",
        "source": "https://www.123gelules.com/1570-vitamine-b8-biotine-10-000-μg-365-comprimés.html"
      },
      {
        "id": "gph-huile-essentielle-de-citron-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Citron Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-citron-bio",
        "source": "https://www.123gelules.com/1451-huile-essentielle-de-citron-bio.html"
      },
      {
        "id": "gph-vitamine-c-acerola-bio-sucre-de-coco-1000-mg-comprimes",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Vitamine C Acérola Bio Sucre de Coco",
        "sizes": [
          [
            "1000 mg · Comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-vitamine-c-acerola-bio-sucre-de-coco-1000-mg-comprimes",
        "source": "https://www.123gelules.com/1636-vitamine-c-acérola-bio-sucre-de-coco-1000-mg-comprimés.html"
      },
      {
        "id": "gph-ashwagandha-400-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Ashwagandha 400 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-ashwagandha-400-mg",
        "source": "https://www.123gelules.com/1788-ashwagandha-400-mg.html"
      },
      {
        "id": "gph-comprimes-neutres-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Comprimés Neutres Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-comprimes-neutres-bio",
        "source": "https://www.123gelules.com/1796-comprimés-neutre-bio.html"
      },
      {
        "id": "gph-multivitamines-et-fer-60-gelules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "MultiVitamines et Fer",
        "sizes": [
          [
            "60 gélules",
            null
          ]
        ],
        "photo": "img/products/gph-multivitamines-et-fer-60-gelules",
        "source": "https://www.123gelules.com/1799-multivitamines-et-fer-60-gélules.html"
      },
      {
        "id": "gph-huile-essentielle-de-romarin-cineol-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Romarin Cinéol Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-romarin-cineol-bio",
        "source": "https://www.123gelules.com/1033-huile-essentielle-de-romarin-cinéol-bio.html"
      },
      {
        "id": "gph-huile-de-nigelle-500-mg-800-capsules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile de Nigelle",
        "sizes": [
          [
            "500 mg · 800 capsules",
            null
          ]
        ],
        "photo": "img/products/gph-huile-de-nigelle-500-mg-800-capsules",
        "source": "https://www.123gelules.com/1532-nigella-sativa-200-capsules-a-500-mg.html"
      },
      {
        "id": "gph-chlorella-bio-500-mg-300-comprimes",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Chlorella Bio",
        "sizes": [
          [
            "500 mg · 300 comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-chlorella-bio-500-mg-300-comprimes",
        "source": "https://www.123gelules.com/167-chlorella-300-comprimés-à-500-mg.html"
      },
      {
        "id": "gph-bicarbonate-de-soude-poudre",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Bicarbonate de Soude",
        "sizes": [
          [
            "poudre",
            null
          ]
        ],
        "photo": "img/products/gph-bicarbonate-de-soude-poudre",
        "source": "https://www.123gelules.com/521-bicarbonate-de-sodium-poudre.html"
      },
      {
        "id": "gph-myrtille-baie-biologique-250-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Myrtille baie biologique 250 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-myrtille-baie-biologique-250-mg",
        "source": "https://www.123gelules.com/1127-baie-de-myrtille-bio-250-mg-200-gélules-végétales.html"
      },
      {
        "id": "gph-moringa-oleifera-biologique-400mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Moringa oleifera biologique",
        "sizes": [
          [
            "400mg",
            null
          ]
        ],
        "photo": "img/products/gph-moringa-oleifera-biologique-400mg",
        "source": "https://www.123gelules.com/1596-moringa-oleifera-biologique-400mg.html"
      },
      {
        "id": "gph-huile-de-nigelle-500-mg-capsules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile de Nigelle 500 mg",
        "sizes": [
          [
            "capsules",
            null
          ]
        ],
        "photo": "img/products/gph-huile-de-nigelle-500-mg-capsules",
        "source": "https://www.123gelules.com/56-nigella-sativa-200-capsules-a-500-mg.html"
      },
      {
        "id": "gph-chlorella-bio-500-mg-100-comprimes",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Chlorella Bio",
        "sizes": [
          [
            "500 mg · 100 comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-chlorella-bio-500-mg-100-comprimes",
        "source": "https://www.123gelules.com/166-chlorella-bio-100-comprimés-à-500-mg.html"
      },
      {
        "id": "gph-chondroitine-glucosamine-gelules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Chondroïtine Glucosamine",
        "sizes": [
          [
            "Gélules",
            null
          ]
        ],
        "photo": "img/products/gph-chondroitine-glucosamine-gelules",
        "source": "https://www.123gelules.com/826-chondroïtine-glucosamine-gélules.html"
      },
      {
        "id": "gph-spiruline-bio-500-mg-300-comprimes",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Spiruline Bio",
        "sizes": [
          [
            "500 mg · 300 comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-spiruline-bio-500-mg-300-comprimes",
        "source": "https://www.123gelules.com/1040-spiruline-bio-300-comprimés-500-mg.html"
      },
      {
        "id": "gph-huile-essentielle-de-thym-thymol-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Thym Thymol Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-thym-thymol-bio",
        "source": "https://www.123gelules.com/969-huile-essentielle-de-thym-thymol-bio.html"
      },
      {
        "id": "gph-bourrache-onagre-ecocert-200-capsules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Bourrache",
        "sizes": [
          [
            "Onagre Ecocert · 200 capsules",
            null
          ]
        ],
        "photo": "img/products/gph-bourrache-onagre-ecocert-200-capsules",
        "source": "https://www.123gelules.com/31-bourrache-onagre-bio-200-capsules-marines.html"
      },
      {
        "id": "gph-bourrache-onagre-ecocert-503-mg-100-capsules-marines",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Bourrache Onagre Ecocert",
        "sizes": [
          [
            "503 mg · 100 capsules marines",
            null
          ]
        ],
        "photo": "img/products/gph-bourrache-onagre-ecocert-503-mg-100-capsules-marines",
        "source": "https://www.123gelules.com/32-bourrache-onagre-bio-100-capsules-marines.html"
      },
      {
        "id": "gph-saule-blanc-ecorce-biologique-200-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Saule Blanc écorce biologique 200 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-saule-blanc-ecorce-biologique-200-mg",
        "source": "https://www.123gelules.com/48-saule-blanc-ecorce-biologique-200-mg.html"
      },
      {
        "id": "gph-huile-essentielle-d-eucalyptus-globulus-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle d'Eucalyptus Globulus Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-d-eucalyptus-globulus-bio",
        "source": "https://www.123gelules.com/1022-huile-essentielle-d-eucalyptus-globulus-bio.html"
      },
      {
        "id": "gph-huile-essentielle-de-geranium-rosat-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Geranium Rosat Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-geranium-rosat-bio",
        "source": "https://www.123gelules.com/1024-huile-essentielle-de-geranium-rosat-bio.html"
      },
      {
        "id": "gph-hibiscus-bio-fleur",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Hibiscus Bio Fleur",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-hibiscus-bio-fleur",
        "source": "https://www.123gelules.com/1101-hibiscus-bio-fleur.html"
      },
      {
        "id": "gph-citrate-de-zinc-15-mg-comprimes",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Citrate de Zinc 15 mg",
        "sizes": [
          [
            "Comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-citrate-de-zinc-15-mg-comprimes",
        "source": "https://www.123gelules.com/1511-citrate-de-zinc-15-mg-200-comprimés.html"
      },
      {
        "id": "gph-huile-essentielle-de-petit-grain-bigaradier-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile essentielle de Petit grain Bigaradier Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-petit-grain-bigaradier-bio",
        "source": "https://www.123gelules.com/924-huile-essentielle-de-petit-grain-bigaradier-bio.html"
      },
      {
        "id": "gph-huile-essentielle-de-cedre-atlas-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Cèdre Atlas Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-cedre-atlas-bio",
        "source": "https://www.123gelules.com/1016-huile-essentielle-de-cèdre-atlas-bio.html"
      },
      {
        "id": "gph-harpagophytum-racine-biologique-330-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Harpagophytum racine biologique 330 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-harpagophytum-racine-biologique-330-mg",
        "source": "https://www.123gelules.com/35-harpagophytum-bio-330-mg-gélules-végétales.html"
      },
      {
        "id": "gph-vitamine-c-acerola-bio-poudre-50-g",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Vitamine C Acérola Bio Poudre",
        "sizes": [
          [
            "50 g",
            null
          ]
        ],
        "photo": "img/products/gph-vitamine-c-acerola-bio-poudre-50-g",
        "source": "https://www.123gelules.com/249-vitamine-c-acérola-bio-poudre-50-grammes.html"
      },
      {
        "id": "gph-huile-essentielle-d-eucalyptus-citriodora-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle d'Eucalyptus Citriodora Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-d-eucalyptus-citriodora-bio",
        "source": "https://www.123gelules.com/1021-huile-essentielle-de-eucalyptus-citriodora-bio.html"
      },
      {
        "id": "gph-huile-essentielle-de-niaouli-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Niaouli Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-niaouli-bio",
        "source": "https://www.123gelules.com/1028-huile-essentielle-de-niaouli-bio.html"
      },
      {
        "id": "gph-curcuma-biologique-250-mg-gelules-vegetales",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Curcuma biologique 250 mg",
        "sizes": [
          [
            "Gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-curcuma-biologique-250-mg-gelules-vegetales",
        "source": "https://www.123gelules.com/1079-curcuma-racine-biologique-250-mg.html"
      },
      {
        "id": "gph-respir-200-gelules-250-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Respir",
        "sizes": [
          [
            "200 gélules · 250 mg",
            null
          ]
        ],
        "photo": "img/products/gph-respir-200-gelules-250-mg",
        "source": "https://www.123gelules.com/1439-respir-200-gélules-250-mg.html"
      },
      {
        "id": "gph-calcium-vitamine-d3-161mg-comprimes",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Calcium + Vitamine D3",
        "sizes": [
          [
            "161mg · Comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-calcium-vitamine-d3-161mg-comprimes",
        "source": "https://www.123gelules.com/1770-calcium-vitamine-d3-161mg-comprimés.html"
      },
      {
        "id": "gph-spiruline-acerola-bio-498mg-comprimes",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "SPIRULINE + ACEROLA BIO",
        "sizes": [
          [
            "498mg · Comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-spiruline-acerola-bio-498mg-comprimes",
        "source": "https://www.123gelules.com/1774-spiruline-acerola-bio-498mg-300-comprimés.html"
      },
      {
        "id": "gph-onagre-ecocert-503-mg-200-capsules-marines",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Onagre Ecocert",
        "sizes": [
          [
            "503 mg · 200 capsules marines",
            null
          ]
        ],
        "photo": "img/products/gph-onagre-ecocert-503-mg-200-capsules-marines",
        "source": "https://www.123gelules.com/27-onagre-bio-200-capsules-à-500-mg.html"
      },
      {
        "id": "gph-huile-essentielle-de-cannelle-de-ceylan-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Cannelle de Ceylan Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-cannelle-de-ceylan-bio",
        "source": "https://www.123gelules.com/1015-huile-essentielle-de-cannelle-de-ceylan-bio.html"
      },
      {
        "id": "gph-huile-essentielle-de-citronnelle-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Citronnelle Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-citronnelle-bio",
        "source": "https://www.123gelules.com/1018-huile-essentielle-de-citronnelle-bio-10ml.html"
      },
      {
        "id": "gph-spiruline-bio-500-mg-600-comprimes",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Spiruline Bio",
        "sizes": [
          [
            "500 mg · 600 comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-spiruline-bio-500-mg-600-comprimes",
        "source": "https://www.123gelules.com/1041-2-piluliers-spiruline-bio-300-comprimés-500-mg.html"
      },
      {
        "id": "gph-ortie-piquante-bio-feuille",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Ortie Piquante bio feuille",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-ortie-piquante-bio-feuille",
        "source": "https://www.123gelules.com/1086-ortie-piquante-bio-feuille.html"
      },
      {
        "id": "gph-fenouil-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Fenouil bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-fenouil-bio",
        "source": "https://www.123gelules.com/1094-fenouil-bio.html"
      },
      {
        "id": "gph-psyllium-blond-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Psyllium Blond Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-psyllium-blond-bio",
        "source": "https://www.123gelules.com/1521-psyllium-blond-bio.html"
      },
      {
        "id": "gph-acide-citrique-e330",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Acide Citrique E330",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-acide-citrique-e330",
        "source": "https://www.123gelules.com/1554-acide-citrique-e330.html"
      },
      {
        "id": "gph-millepertuis-biologique-250-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Millepertuis biologique 250 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-millepertuis-biologique-250-mg",
        "source": "https://www.123gelules.com/827-millepertuis-biologique-250-mg.html"
      },
      {
        "id": "gph-huile-essentielle-de-basilic-tropical-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile essentielle de Basilic Tropical Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-basilic-tropical-bio",
        "source": "https://www.123gelules.com/921-huile-essentielle-de-basilic-tropical-bio.html"
      },
      {
        "id": "gph-huile-essentielle-de-cypres-vert-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Cyprès Vert Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-cypres-vert-bio",
        "source": "https://www.123gelules.com/1036-cyprés-vert-bio-10-ml.html"
      },
      {
        "id": "gph-passiflore-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Passiflore bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-passiflore-bio",
        "source": "https://www.123gelules.com/1087-passiflore-bio.html"
      },
      {
        "id": "gph-bouleau-feuille-bio-25g",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Bouleau Feuille Bio 25g",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-bouleau-feuille-bio-25g",
        "source": "https://www.123gelules.com/1090-bouleau-feuille-bio.html"
      },
      {
        "id": "gph-melisse-bio-feuille-30-g",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Mélisse bio Feuille",
        "sizes": [
          [
            "30 g",
            null
          ]
        ],
        "photo": "img/products/gph-melisse-bio-feuille-30-g",
        "source": "https://www.123gelules.com/1100-melisse-bio-feuille.html"
      },
      {
        "id": "gph-thym-feuilles-bio-50-g",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Thym Feuilles Bio 50 g",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-thym-feuilles-bio-50-g",
        "source": "https://www.123gelules.com/1106-thym-fleur-bio.html"
      },
      {
        "id": "gph-curcuma-poivre-noir-biologique-300-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Curcuma + Poivre Noir biologique 300 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-curcuma-poivre-noir-biologique-300-mg",
        "source": "https://www.123gelules.com/1487-curcuma-bio-et-poivre-noir-bio-300-mg-200-gélules-végétales.html"
      },
      {
        "id": "gph-acide-ascorbique-e300-vitamine-c",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Acide ascorbique E300",
        "sizes": [
          [
            "Vitamine C",
            null
          ]
        ],
        "photo": "img/products/gph-acide-ascorbique-e300-vitamine-c",
        "source": "https://www.123gelules.com/1553-acide-ascorbique-e300-sachet.html"
      },
      {
        "id": "gph-huile-de-lecithine-de-soja-1200-mg-70-capsules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile de Lécithine de Soja",
        "sizes": [
          [
            "1200 mg · 70 capsules",
            null
          ]
        ],
        "photo": "img/products/gph-huile-de-lecithine-de-soja-1200-mg-70-capsules",
        "source": "https://www.123gelules.com/54-huile-de-lecithine-de-soja-70-capsules.html"
      },
      {
        "id": "gph-extrait-de-yam-300-mg-80-gelules-vegetales",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Extrait de Yam",
        "sizes": [
          [
            "300 mg · 80 gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-extrait-de-yam-300-mg-80-gelules-vegetales",
        "source": "https://www.123gelules.com/58-extrait-de-yam-80-gélules-végétales.html"
      },
      {
        "id": "gph-xylitol-en-poudre",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Xylitol en poudre",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-xylitol-en-poudre",
        "source": "https://www.123gelules.com/497-xylitol-en-poudre-1kg.html"
      },
      {
        "id": "gph-huile-essentielle-de-pamplemousse-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Pamplemousse Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-pamplemousse-bio",
        "source": "https://www.123gelules.com/1031-huile-essentielle-de-pamplemousse-bio.html"
      },
      {
        "id": "gph-basilic-bio-feuille",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Basilic bio Feuille",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-basilic-bio-feuille",
        "source": "https://www.123gelules.com/1085-basilic-bio-feuille.html"
      },
      {
        "id": "gph-eucalyptus-globulus-bio-feuille",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Eucalyptus Globulus Bio Feuille",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-eucalyptus-globulus-bio-feuille",
        "source": "https://www.123gelules.com/1089-eucalyptus-globulus-bio-feuille.html"
      },
      {
        "id": "gph-romarin-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Romarin Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-romarin-bio",
        "source": "https://www.123gelules.com/1102-romarin-bio.html"
      },
      {
        "id": "gph-menthe-poivree-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Menthe Poivrée Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-menthe-poivree-bio",
        "source": "https://www.123gelules.com/1105-menthe-poivree-bio.html"
      },
      {
        "id": "gph-spiruline-500-mg-1000-comprimes",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Spiruline",
        "sizes": [
          [
            "500 mg · 1000 comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-spiruline-500-mg-1000-comprimes",
        "source": "https://www.123gelules.com/1291-spiruline-500-mg-1000-comprimes.html"
      },
      {
        "id": "gph-spiruline-bio-400-mg-180-gelules-vegetales",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Spiruline Bio",
        "sizes": [
          [
            "400 mg · 180 gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-spiruline-bio-400-mg-180-gelules-vegetales",
        "source": "https://www.123gelules.com/1429-spiruline-bio-180-gélules-à-400mg.html"
      },
      {
        "id": "gph-huile-de-nigelle-biologique",
        "cat": "cosmetiques",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile de Nigelle biologique",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-de-nigelle-biologique",
        "source": "https://www.123gelules.com/1631-huile-de-nigelle-biologique.html"
      },
      {
        "id": "gph-artichaut-radis-noir-bio-gelules-vegetales",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Artichaut, Radis noir + BIO",
        "sizes": [
          [
            "Gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-artichaut-radis-noir-bio-gelules-vegetales",
        "source": "https://www.123gelules.com/1804-artichaut-radis-noir-chardon-marie-desmodium-bio-gph-diffusion-gélules-végétales.html"
      },
      {
        "id": "gph-levure-de-biere-revivifiable-320-mg-200-gelules-vegetales",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Levure de Bière Revivifiable",
        "sizes": [
          [
            "320 mg · 200 gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-levure-de-biere-revivifiable-320-mg-200-gelules-vegetales",
        "source": "https://www.123gelules.com/19-levure-de-bière-200-gélules-végétale.html"
      },
      {
        "id": "gph-ail-bulbe-biologique-250-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Ail Bulbe Biologique",
        "sizes": [
          [
            "250 mg",
            null
          ]
        ],
        "photo": "img/products/gph-ail-bulbe-biologique-250-mg",
        "source": "https://www.123gelules.com/37-ail-bulbe-biologique-200-gélules-végétales.html"
      },
      {
        "id": "gph-aubepine-biologique-270-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Aubépine biologique 270 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-aubepine-biologique-270-mg",
        "source": "https://www.123gelules.com/38-aubépine-biologique-270-mg.html"
      },
      {
        "id": "gph-the-vert-biologique-250-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Thé vert biologique 250 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-the-vert-biologique-250-mg",
        "source": "https://www.123gelules.com/46-thé-vert-biologique-250-mg.html"
      },
      {
        "id": "gph-olivier-feuille-biologique-200-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Olivier feuille biologique 200 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-olivier-feuille-biologique-200-mg",
        "source": "https://www.123gelules.com/49-olivier-feuille-biologique-200-mg.html"
      },
      {
        "id": "gph-valeriane-racine-biologique-250-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Valériane racine biologique 250 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-valeriane-racine-biologique-250-mg",
        "source": "https://www.123gelules.com/50-valériane-racine-biologique-250-mg.html"
      },
      {
        "id": "gph-spiruline-bio-500-mg-2000-comprimes",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Spiruline Bio",
        "sizes": [
          [
            "500 mg · 2000 Comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-spiruline-bio-500-mg-2000-comprimes",
        "source": "https://www.123gelules.com/1050-4-piluliers-spiruline-bio-500-comprimés-500-mg.html"
      },
      {
        "id": "gph-artichaut-bio-feuille",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Artichaut Bio Feuille",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-artichaut-bio-feuille",
        "source": "https://www.123gelules.com/1093-artichaut-bio-feuille.html"
      },
      {
        "id": "gph-fenouil-bio-300-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Fenouil Bio",
        "sizes": [
          [
            "300 mg",
            null
          ]
        ],
        "photo": "img/products/gph-fenouil-bio-300-mg",
        "source": "https://www.123gelules.com/1203-fenouil-bio-300-mg-gélules-végétales.html"
      },
      {
        "id": "gph-levure-de-biere-bio-320-mg-200-gelules-vegetales",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Levure de Bière Bio",
        "sizes": [
          [
            "320 mg · 200 gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-levure-de-biere-bio-320-mg-200-gelules-vegetales",
        "source": "https://www.123gelules.com/1341-levure-de-biere-bio-320mg-200-gelules-vegetales.html"
      },
      {
        "id": "gph-graines-de-chia-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Graines de Chia Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-graines-de-chia-bio",
        "source": "https://www.123gelules.com/1516-graines-de-chia-bio-325-g.html"
      },
      {
        "id": "gph-graines-de-courge-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Graines de Courge Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-graines-de-courge-bio",
        "source": "https://www.123gelules.com/1517-graines-de-courge-bio.html"
      },
      {
        "id": "gph-huile-noix-de-coco-bio",
        "cat": "cosmetiques",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Noix de Coco Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-noix-de-coco-bio",
        "source": "https://www.123gelules.com/1523-huile-noix-de-coco-bio.html"
      },
      {
        "id": "gph-huile-d-amande-douce-cosmos-natural-bouteille",
        "cat": "cosmetiques",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile d'Amande douce Cosmos Natural",
        "sizes": [
          [
            "Bouteille",
            null
          ]
        ],
        "photo": "img/products/gph-huile-d-amande-douce-cosmos-natural-bouteille",
        "source": "https://www.123gelules.com/1632-huile-d-amande-douce-biologique-bouteille.html"
      },
      {
        "id": "gph-huile-de-neem-biologique",
        "cat": "cosmetiques",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile de Neem Biologique",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-de-neem-biologique",
        "source": "https://www.123gelules.com/1762-huile-de-neem-biologique.html"
      },
      {
        "id": "gph-berberine-300-mg-60-gelules-vegetales",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Berbérine",
        "sizes": [
          [
            "300 mg · 60 gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-berberine-300-mg-60-gelules-vegetales",
        "source": "https://www.123gelules.com/1807-berbérine-300-mg-60-gélules-végétales.html"
      },
      {
        "id": "gph-chardon-marie-biologique-300-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Chardon Marie biologique 300 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-chardon-marie-biologique-300-mg",
        "source": "https://www.123gelules.com/36-chardon-marie-bio-300-mg-200-gélules-végétales.html"
      },
      {
        "id": "gph-passiflore-biologique-230-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Passiflore biologique 230 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-passiflore-biologique-230-mg",
        "source": "https://www.123gelules.com/41-passiflore-biologique-230-mg.html"
      },
      {
        "id": "gph-reine-des-pres-biologique-215-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Reine des Prés biologique 215 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-reine-des-pres-biologique-215-mg",
        "source": "https://www.123gelules.com/44-reine-des-prés-biologique-215-mg.html"
      },
      {
        "id": "gph-maca-du-perou-bio-libido-500-mg-180-gelules-vegetales",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Maca du Pérou Bio (Libido)",
        "sizes": [
          [
            "500 mg · 180 gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-maca-du-perou-bio-libido-500-mg-180-gelules-vegetales",
        "source": "https://www.123gelules.com/158-maca-bio-180-gélules.html"
      },
      {
        "id": "gph-citronat-800-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Citronat 800 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-citronat-800-mg",
        "source": "https://www.123gelules.com/253-citronat-800-mg.html"
      },
      {
        "id": "gph-marron-d-inde-biologique-250-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Marron d'Inde biologique 250 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-marron-d-inde-biologique-250-mg",
        "source": "https://www.123gelules.com/267-marron-d-inde-bio-250-mg-végétales.html"
      },
      {
        "id": "gph-gingembre-racine-biologique-250-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Gingembre racine biologique 250 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-gingembre-racine-biologique-250-mg",
        "source": "https://www.123gelules.com/449-gingembre-bio-250-mg-200-gélules-végétales.html"
      },
      {
        "id": "gph-huile-essentielle-de-marjolaine-sylvestre-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Marjolaine Sylvestre Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-marjolaine-sylvestre-bio",
        "source": "https://www.123gelules.com/1026-huile-essentielle-de-marjolaine-sylvestre-bio.html"
      },
      {
        "id": "gph-spiruline-bio-500-mg-1200-comprimes-2",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Spiruline Bio",
        "sizes": [
          [
            "500 mg · 1200 comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-spiruline-bio-500-mg-1200-comprimes-2",
        "source": "https://www.123gelules.com/1042-4-piluliers-spiruline-bio-300-comprimés-500-mg.html"
      },
      {
        "id": "gph-spiruline-bio-500-mg-1500-comprimes",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Spiruline Bio",
        "sizes": [
          [
            "500 mg · 1500 comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-spiruline-bio-500-mg-1500-comprimes",
        "source": "https://www.123gelules.com/1043-5-piluliers-spiruline-bio-300-comprimés-500-mg.html"
      },
      {
        "id": "gph-reglisse-bio-racine",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Réglisse bio Racine",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-reglisse-bio-racine",
        "source": "https://www.123gelules.com/1092-reglisse-bio-racine.html"
      },
      {
        "id": "gph-guimauve-bio-racine",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Guimauve Bio Racine",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-guimauve-bio-racine",
        "source": "https://www.123gelules.com/1096-guimauve-bio-racine.html"
      },
      {
        "id": "gph-tilleul-bracte-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Tilleul Bracté Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-tilleul-bracte-bio",
        "source": "https://www.123gelules.com/1098-tilleul-bracte-bio.html"
      },
      {
        "id": "gph-verveine-odorante-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Verveine Odorante Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-verveine-odorante-bio",
        "source": "https://www.123gelules.com/1103-verveine-odorante-bio.html"
      },
      {
        "id": "gph-framboisier",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Framboisier",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-framboisier",
        "source": "https://www.123gelules.com/1104-framboisier.html"
      },
      {
        "id": "gph-vigne-rouge-bio-feuille",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Vigne Rouge Bio Feuille",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-vigne-rouge-bio-feuille",
        "source": "https://www.123gelules.com/1108-vigne-rouge-bio-feuille.html"
      },
      {
        "id": "gph-cassis-bio-feuille",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Cassis Bio Feuille",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-cassis-bio-feuille",
        "source": "https://www.123gelules.com/1113-cassis-bio-feuille.html"
      },
      {
        "id": "gph-methylsulfonylmethane-msm-180-gelules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Méthylsulfonylméthane",
        "sizes": [
          [
            "MSM+ · 180 Gélules",
            null
          ]
        ],
        "photo": "img/products/gph-methylsulfonylmethane-msm-180-gelules",
        "source": "https://www.123gelules.com/1123-méthylsulfonylméthane-msm-180-gélules.html"
      },
      {
        "id": "gph-melisse-feuille-biologique-250-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Mélisse feuille biologique 250 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-melisse-feuille-biologique-250-mg",
        "source": "https://www.123gelules.com/1393-mélisse-feuille-biologique-250-mg.html"
      },
      {
        "id": "gph-msm-en-poudre-150-grammes",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "MSM en poudre",
        "sizes": [
          [
            "150 grammes",
            null
          ]
        ],
        "photo": "img/products/gph-msm-en-poudre-150-grammes",
        "source": "https://www.123gelules.com/1507-msm-en-poudre-150-grammes.html"
      },
      {
        "id": "gph-baies-de-goji-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Baies de Goji Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-baies-de-goji-bio",
        "source": "https://www.123gelules.com/1525-baies-de-goji-bio.html"
      },
      {
        "id": "gph-pack-vitamines-et-mineraux",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Pack Vitamines et Minéraux",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-pack-vitamines-et-mineraux",
        "source": "https://www.123gelules.com/1587-pack-vitamines-et-minéraux.html"
      },
      {
        "id": "gph-huile-de-jojoba-biologique",
        "cat": "cosmetiques",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile de jojoba Biologique",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-de-jojoba-biologique",
        "source": "https://www.123gelules.com/1642-huile-de-jojoba-biologique.html"
      },
      {
        "id": "gph-beurre-de-karite-biologique",
        "cat": "cosmetiques",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Beurre de Karité biologique",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-beurre-de-karite-biologique",
        "source": "https://www.123gelules.com/1765-beurre-de-karité-biologique.html"
      },
      {
        "id": "gph-glucosamine-sulfate-2kcl-500mg-gelules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Glucosamine Sulfate 2KCL",
        "sizes": [
          [
            "500mg · Gélules",
            null
          ]
        ],
        "photo": "img/products/gph-glucosamine-sulfate-2kcl-500mg-gelules",
        "source": "https://www.123gelules.com/1771-glucosamine-500mg-gélules.html"
      },
      {
        "id": "gph-sauge-feuille-biologique-230-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Sauge feuille biologique 230 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-sauge-feuille-biologique-230-mg",
        "source": "https://www.123gelules.com/14-sauge-feuille-biologique-250-mg.html"
      },
      {
        "id": "gph-pensee-sauvage-biologique-220-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Pensée Sauvage biologique 220 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-pensee-sauvage-biologique-220-mg",
        "source": "https://www.123gelules.com/24-pensée-sauvage-biologique-220-mg.html"
      },
      {
        "id": "gph-onagre-ecocert-503-mg-100-capsules-marines",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Onagre Ecocert",
        "sizes": [
          [
            "503 mg · 100 capsules marines",
            null
          ]
        ],
        "photo": "img/products/gph-onagre-ecocert-503-mg-100-capsules-marines",
        "source": "https://www.123gelules.com/26-onagre-bio-100-capsules-à-500-mg.html"
      },
      {
        "id": "gph-bourrache-ecocert-503-mg-capsules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Bourrache Ecocert",
        "sizes": [
          [
            "503 mg · capsules",
            null
          ]
        ],
        "photo": "img/products/gph-bourrache-ecocert-503-mg-capsules",
        "source": "https://www.123gelules.com/29-bourrache-bio-200-capsules-à-500-mg.html"
      },
      {
        "id": "gph-echinacea-racine-biologique-210-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Echinacea racine biologique 210 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-echinacea-racine-biologique-210-mg",
        "source": "https://www.123gelules.com/39-echinacéa-racine-biologique-210-mg.html"
      },
      {
        "id": "gph-artichaut-biologique-200-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Artichaut Biologique",
        "sizes": [
          [
            "200 mg",
            null
          ]
        ],
        "photo": "img/products/gph-artichaut-biologique-200-mg",
        "source": "https://www.123gelules.com/40-artichaut-bio-200-mg.html"
      },
      {
        "id": "gph-hamamelis-feuille-biologique-220-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Hamamélis feuille biologique 220 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-hamamelis-feuille-biologique-220-mg",
        "source": "https://www.123gelules.com/42-hamamélis-bio-220-mg-gélules-végétales.html"
      },
      {
        "id": "gph-cassis-feuille-biologique-250-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Cassis feuille biologique 250 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-cassis-feuille-biologique-250-mg",
        "source": "https://www.123gelules.com/43-cassis-bio-200-gélules-végétales-250-mg.html"
      },
      {
        "id": "gph-aubier-de-tilleul-biologique-200-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Aubier de Tilleul biologique 200 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-aubier-de-tilleul-biologique-200-mg",
        "source": "https://www.123gelules.com/45-aubier-de-tilleul-biologique-220-mg.html"
      },
      {
        "id": "gph-ginseng-rouge-racine-biologique-300-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Ginseng rouge racine biologique 300 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-ginseng-rouge-racine-biologique-300-mg",
        "source": "https://www.123gelules.com/47-ginseng-rouge-racine-biologique-300-mg.html"
      },
      {
        "id": "gph-pissenlit-racine-biologique-270-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Pissenlit racine biologique 270 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-pissenlit-racine-biologique-270-mg",
        "source": "https://www.123gelules.com/53-pissenlit-racine-biologique-270-mg.html"
      },
      {
        "id": "gph-vigne-rouge-feuille-biologique-250-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Vigne rouge feuille biologique 250 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-vigne-rouge-feuille-biologique-250-mg",
        "source": "https://www.123gelules.com/55-vigne-rouge-feuille-biologique-250-mg.html"
      },
      {
        "id": "gph-bardane-racine-biologique-250-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Bardane racine biologique 250 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-bardane-racine-biologique-250-mg",
        "source": "https://www.123gelules.com/275-bardane-racine-biologique-250-mg.html"
      },
      {
        "id": "gph-cetone-de-framboise-250-mg-gelules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Cétone de Framboise 250 mg",
        "sizes": [
          [
            "gélules",
            null
          ]
        ],
        "photo": "img/products/gph-cetone-de-framboise-250-mg-gelules",
        "source": "https://www.123gelules.com/978-cétone-de-framboise-180-gélules-250-mg.html"
      },
      {
        "id": "gph-prele-biologique-190-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Prêle biologique 190 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-prele-biologique-190-mg",
        "source": "https://www.123gelules.com/979-prêle-biologique-190-mg.html"
      },
      {
        "id": "gph-huile-essentielle-de-pin-sylvestre-bio",
        "cat": "huiles",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile Essentielle de Pin Sylvestre Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-essentielle-de-pin-sylvestre-bio",
        "source": "https://www.123gelules.com/1032-huile-essentielle-de-pin-sylvestre-bio.html"
      },
      {
        "id": "gph-guarana-biologique-300-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Guarana biologique 300 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-guarana-biologique-300-mg",
        "source": "https://www.123gelules.com/1046-guarana-bio-300-mg-gélules-végétales.html"
      },
      {
        "id": "gph-anis-vert-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Anis Vert Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-anis-vert-bio",
        "source": "https://www.123gelules.com/1088-anis-vert-bio.html"
      },
      {
        "id": "gph-ginkgo-biloba-bio-feuille-25-g",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Ginkgo Biloba bio Feuille",
        "sizes": [
          [
            "25 g",
            null
          ]
        ],
        "photo": "img/products/gph-ginkgo-biloba-bio-feuille-25-g",
        "source": "https://www.123gelules.com/1091-ginkgo-biloba-bio-feuille.html"
      },
      {
        "id": "gph-lavande-fleur-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Lavande Fleur Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-lavande-fleur-bio",
        "source": "https://www.123gelules.com/1095-lavande-fleur-bio.html"
      },
      {
        "id": "gph-reine-des-pres-bio-25-g-tisane",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Reine des Prés Bio",
        "sizes": [
          [
            "25 g · Tisane",
            null
          ]
        ],
        "photo": "img/products/gph-reine-des-pres-bio-25-g-tisane",
        "source": "https://www.123gelules.com/1097-reine-des-pres-bio.html"
      },
      {
        "id": "gph-fenugrec-bio-semence",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Fenugrec bio Semence",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-fenugrec-bio-semence",
        "source": "https://www.123gelules.com/1099-fenugrec-bio-semence.html"
      },
      {
        "id": "gph-sauge-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Sauge Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-sauge-bio",
        "source": "https://www.123gelules.com/1107-sauge-bio.html"
      },
      {
        "id": "gph-aubepine-bio-50-g",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Aubépine Bio",
        "sizes": [
          [
            "50 g",
            null
          ]
        ],
        "photo": "img/products/gph-aubepine-bio-50-g",
        "source": "https://www.123gelules.com/1109-aubepine-bio.html"
      },
      {
        "id": "gph-millepertuis-bio-30-g-sommite-fleuries-coupee",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Millepertuis Bio",
        "sizes": [
          [
            "30 g · Sommité fleuries coupée",
            null
          ]
        ],
        "photo": "img/products/gph-millepertuis-bio-30-g-sommite-fleuries-coupee",
        "source": "https://www.123gelules.com/1110-millepertuis-bio.html"
      },
      {
        "id": "gph-tilleul-aubier-rouge-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Tilleul Aubier Rouge Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-tilleul-aubier-rouge-bio",
        "source": "https://www.123gelules.com/1111-tilleul-aubier-rouge-bio.html"
      },
      {
        "id": "gph-sureau-bio-fleur",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Sureau bio Fleur",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-sureau-bio-fleur",
        "source": "https://www.123gelules.com/1112-sureau-bio-fleur.html"
      },
      {
        "id": "gph-harpagophytum-bio-racine-40-g",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Harpagophytum Bio Racine 40 g",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-harpagophytum-bio-racine-40-g",
        "source": "https://www.123gelules.com/1116-harpagophytum-bio-racine.html"
      },
      {
        "id": "gph-ortie-partie-aerienne-biologique-210-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Ortie partie aérienne biologique 210 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-ortie-partie-aerienne-biologique-210-mg",
        "source": "https://www.123gelules.com/1146-ortie-feuille-piquante-biologique-210-mg.html"
      },
      {
        "id": "gph-rhodiola-rosea-extrait-250-mg-100-gelules-vegetales",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Rhodiola Rosea Extrait",
        "sizes": [
          [
            "250 mg · 100 gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-rhodiola-rosea-extrait-250-mg-100-gelules-vegetales",
        "source": "https://www.123gelules.com/1197-rhodiola-rosea-extrait-250mg-100-gélules-végetales.html"
      },
      {
        "id": "gph-bruyere-biologique-230-mg-gelules-vegetales",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Bruyère biologique 230 mg",
        "sizes": [
          [
            "Gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-bruyere-biologique-230-mg-gelules-vegetales",
        "source": "https://www.123gelules.com/1201-bruyère-bio-230-mg-200-gélules-végétales.html"
      },
      {
        "id": "gph-escholtzia-biologique-240-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Escholtzia biologique 240 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-escholtzia-biologique-240-mg",
        "source": "https://www.123gelules.com/1202-escholtzia-biologique-240-mg.html"
      },
      {
        "id": "gph-radis-noir-racine-biologique-270-mg",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Radis noir racine biologique 270 mg",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-radis-noir-racine-biologique-270-mg",
        "source": "https://www.123gelules.com/1332-radis-noir-racine-biologique-270-mg.html"
      },
      {
        "id": "gph-fumeterre-bio-200-mg-200-gelules-vegetales",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Fumeterre Bio",
        "sizes": [
          [
            "200 mg · 200 gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-fumeterre-bio-200-mg-200-gelules-vegetales",
        "source": "https://www.123gelules.com/1340-fumeterre-bio-200-gélules-végétales-200mg.html"
      },
      {
        "id": "gph-marc-de-raisin-biologique-360-mg-gelules-vegetales",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Marc de raisin biologique 360 mg",
        "sizes": [
          [
            "Gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-marc-de-raisin-biologique-360-mg-gelules-vegetales",
        "source": "https://www.123gelules.com/1344-marc-de-raisin-biologique-360-mg-gélules-végétales.html"
      },
      {
        "id": "gph-maca-bio-perou-500-mg-340-comprimes",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Maca Bio Pérou",
        "sizes": [
          [
            "500 mg · 340 Comprimés",
            null
          ]
        ],
        "photo": "img/products/gph-maca-bio-perou-500-mg-340-comprimes",
        "source": "https://www.123gelules.com/1346-maca-bio-500mg-340-comprimés.html"
      },
      {
        "id": "gph-msm-en-poudre-70-grammes",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "MSM en poudre",
        "sizes": [
          [
            "70 grammes",
            null
          ]
        ],
        "photo": "img/products/gph-msm-en-poudre-70-grammes",
        "source": "https://www.123gelules.com/1508-msm-en-poudre-70-grammes.html"
      },
      {
        "id": "gph-graines-de-nigelle-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Graines de Nigelle Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-graines-de-nigelle-bio",
        "source": "https://www.123gelules.com/1519-graines-de-nigelle-bio.html"
      },
      {
        "id": "gph-noix-de-cajou-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Noix de Cajou Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-noix-de-cajou-bio",
        "source": "https://www.123gelules.com/1520-noix-de-cajou-bio.html"
      },
      {
        "id": "gph-sucre-de-noix-de-coco-bio",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Sucre de Noix de Coco Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-sucre-de-noix-de-coco-bio",
        "source": "https://www.123gelules.com/1522-sucre-de-noix-de-coco-bio.html"
      },
      {
        "id": "gph-huile-de-ricin-bio",
        "cat": "cosmetiques",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Huile de Ricin Bio",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-huile-de-ricin-bio",
        "source": "https://www.123gelules.com/1526-huile-de-ricin-bio.html"
      },
      {
        "id": "gph-amandes-bio-250g",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Amandes Bio",
        "sizes": [
          [
            "250g",
            null
          ]
        ],
        "photo": "img/products/gph-amandes-bio-250g",
        "source": "https://www.123gelules.com/1606-amandes-bio-boîte-gph-250g.html"
      },
      {
        "id": "gph-beurre-de-cacao-biologique",
        "cat": "cosmetiques",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Beurre de Cacao biologique",
        "sizes": [
          [
            "",
            null
          ]
        ],
        "photo": "img/products/gph-beurre-de-cacao-biologique",
        "source": "https://www.123gelules.com/1621-beurre-de-cacao-biologique-400g.html"
      },
      {
        "id": "gph-bourrache-ecocert-503-mg-200-capsules",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Bourrache Ecocert",
        "sizes": [
          [
            "503 mg · 200 capsules",
            null
          ]
        ],
        "photo": "img/products/gph-bourrache-ecocert-503-mg-200-capsules",
        "source": "https://www.123gelules.com/1644-bourrache-ecocert-503-mg-200-capsules.html"
      },
      {
        "id": "gph-oligo-basic-complexe-200-gelules-vegetales",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Oligo Basic complexe",
        "sizes": [
          [
            "200 gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-oligo-basic-complexe-200-gelules-vegetales",
        "source": "https://www.123gelules.com/1772-oligo-basic-complexe-gélules-végétales.html"
      },
      {
        "id": "gph-chlorella-bio-300-mg-180-gelules-vegetales",
        "cat": "plantes",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Chlorella Bio",
        "sizes": [
          [
            "300 mg · 180 gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-chlorella-bio-300-mg-180-gelules-vegetales",
        "source": "https://www.123gelules.com/1777-chlorella-bio-300-mg-180-gélules-végétales.html"
      },
      {
        "id": "gph-fumeterre-bio-200-mg-200-gelules-vegetales-2",
        "cat": "complements",
        "brand": "GPH Diffusion",
        "status": "brand",
        "fr": "Fumeterre Bio",
        "sizes": [
          [
            "200 mg · 200 gélules végétales",
            null
          ]
        ],
        "photo": "img/products/gph-fumeterre-bio-200-mg-200-gelules-vegetales-2",
        "source": "https://www.123gelules.com/1778-fumeterre-bio-200-mg-200-gélules-végétales.html"
      }
    ],
    "faq": [
      {
        "fr": "Comment passer une commande ?",
        "ar": "كيف أقدّم طلبًا؟",
        "answerFr": "",
        "answerAr": ""
      },
      {
        "fr": "Livrez-vous à domicile ? Dans quelles villes ?",
        "ar": "هل توصلون الطلبات إلى المنازل؟ وإلى أي مدن؟",
        "answerFr": "",
        "answerAr": ""
      },
      {
        "fr": "Combien coûte la livraison et en combien de temps ?",
        "ar": "كم تبلغ تكلفة التوصيل وكم يستغرق من الوقت؟",
        "answerFr": "",
        "answerAr": ""
      },
      {
        "fr": "Comment se fait le paiement ?",
        "ar": "ما هي طرق الدفع؟",
        "answerFr": "",
        "answerAr": ""
      },
      {
        "fr": "Quels sont vos horaires d’ouverture ?",
        "ar": "ما هي أوقات العمل؟",
        "answerFr": "",
        "answerAr": ""
      },
      {
        "fr": "Un produit n’est pas sur le site. Pouvez-vous l’avoir ?",
        "ar": "منتج غير موجود في الموقع، هل يمكنكم توفيره؟",
        "answerFr": "",
        "answerAr": ""
      },
      {
        "fr": "Pouvez-vous me conseiller un produit ?",
        "ar": "هل يمكنكم أن تنصحوني بمنتج مناسب؟",
        "answerFr": "",
        "answerAr": ""
      },
      {
        "fr": "Peut-on échanger ou retourner un produit ?",
        "ar": "هل يمكنني استبدال منتج أو إرجاعه؟",
        "answerFr": "",
        "answerAr": ""
      }
    ]
  };
  if (typeof module === 'object' && module.exports) module.exports = CATALOGUE;
  else root.CATALOGUE = CATALOGUE;
})(typeof self !== 'undefined' ? self : this);
