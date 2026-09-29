/* ---------- Données portfolio ---------- */
/* Pour ajouter un projet : un objet dans PROJECTS avec une "category"
   correspondant à un "slug" existant dans CATEGORIES. Aucune autre
   modification de code n'est nécessaire. */

const CATEGORIES = [
  { slug: 'entreprise-marques', label: 'Entreprise & Marques', cover: 'assets/img/matcha.jpg' },
  { slug: 'personnalites', label: 'Personnalités', cover: 'assets/img/createurs-cover.jpg' },
  { slug: 'evenementiel', label: 'Événementiel', cover: 'assets/img/rennes-3.jpg' },
];

const PROJECTS = [
  {
    title: 'Riodesol — Campagne maillots de bain', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Riodesol',
    desc: "Série de visuels de campagne pour la marque de maillots de bain Riodesol, capturée en lumière naturelle de fin de journée pour un rendu solaire et éditorial.",
    thumb: 'assets/img/riodesol.jpg',
    gallery: ['assets/img/riodesol.jpg','assets/img/riodesol-2.jpg','assets/img/riodesol-3.jpg','assets/img/riodesol-4.jpg','assets/img/riodesol-5.jpg'],
  },
  {
    title: 'Devine le joueur pro !', category: 'personnalites',
    client: 'Créateurs · BR10 — vidéo YouTube',
    desc: "Format de jeu tourné avec plusieurs créateurs invités, pensé pour l'engagement et le partage sur les réseaux.",
    thumb: 'https://i.ytimg.com/vi/tNCyoM-T2DE/hqdefault.jpg',
    youtubeId: 'tNCyoM-T2DE',
  },
  {
    title: 'Villa à Bali — Photos pour Airbnb', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Location saisonnière',
    desc: "Reportage photo complet d'une villa balinaise destinée à la location Airbnb : pièces de vie, cuisine, chambres et terrasse avec piscine, cadrées en lumière naturelle pour donner envie de réserver dès la première image de l'annonce.",
    thumb: 'assets/img/villa-bali-1.jpg',
    gallery: ['assets/img/villa-bali-1.jpg','assets/img/villa-bali-2.jpg','assets/img/villa-bali-3.jpg','assets/img/villa-bali-4.jpg','assets/img/villa-bali-5.jpg','assets/img/villa-bali-6.jpg','assets/img/villa-bali-7.jpg','assets/img/villa-bali-8.jpg'],
  },
  {
    title: 'Je me qualifie pour Roland Garros à Abidjan ?', category: 'personnalites',
    client: 'Sport · Florent Bax — vlog tournoi',
    desc: "Suivi immersif d'un tournoi qualificatif pour Roland Garros, entre tension de jeu et coulisses de déplacement.",
    thumb: 'https://i.ytimg.com/vi/xpRlK8qydS4/hqdefault.jpg',
    youtubeId: 'xpRlK8qydS4',
  },
  {
    title: 'Lancement de formation — Shooting studio', category: 'personnalites',
    client: 'Créateurs · Studio',
    desc: "Séance photo en studio pour une créatrice de contenu, à l'occasion du lancement de sa formation : direction artistique soignée, fond neutre et univers premium pour habiller l'ensemble de ses supports de communication.",
    thumb: 'assets/img/formation-studio.jpg',
    gallery: ['assets/img/formation-studio.jpg','assets/img/formation-2.jpg','assets/img/formation-3.jpg','assets/img/formation-4.jpg','assets/img/formation-5.jpg','assets/img/formation-6.jpg'],
  },
  {
    title: 'BR10 — Publicité', category: 'personnalites',
    client: 'Créateurs · Film publicitaire',
    desc: 'Film publicitaire réalisé pour BR10.',
    thumb: 'assets/video/br10-poster.jpg',
    videoSrc: 'assets/video/br10-pub.mp4',
  },
  {
    title: 'Shooting produit — Marque de matcha', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Matcha',
    desc: "Shooting photo produit et lifestyle pour une marque de matcha : direction artistique colorée et lumière travaillée pour des visuels prêts à l'emploi sur les réseaux et l'e-commerce.",
    thumb: 'assets/img/matcha.jpg',
    gallery: ['assets/img/matcha.jpg','assets/img/matcha-3.jpg','assets/img/matcha-7.jpg','assets/img/matcha-6.jpg','assets/img/matcha-5.jpg','assets/img/matcha-4.jpg','assets/img/matcha-social.jpg'],
  },
  {
    title: 'Château de Chantilly — Vidéo de présentation', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Château de Chantilly',
    desc: "Vidéo de présentation aérienne réalisée pour le site internet du Château de Chantilly : un survol du domaine et de ses jardins à la française en lumière de fin de journée, pour donner envie de le découvrir.",
    thumb: 'assets/video/chantilly-poster.jpg',
    videoSrc: 'assets/video/chantilly.mp4',
  },
  {
    title: 'Challenger de Rennes — Couverture du tournoi', category: 'evenementiel',
    client: 'Sport · ATP Challenger de Rennes',
    desc: "Couverture photo du tournoi ATP Challenger de Rennes : les matchs au plus près du court, mais aussi la scénographie du tournoi, comme l'entrée des joueurs sous les lumières et la fumée.",
    thumb: 'assets/img/tennis-indoor.jpg',
    gallery: ['assets/img/tennis-indoor.jpg','assets/img/rennes-2.jpg','assets/img/rennes-3.jpg'],
  },
  {
    title: 'Nos pires unpopular opinions', category: 'personnalites',
    client: 'Créateurs · BR10 — vidéo YouTube',
    desc: "Format d'échange à plusieurs voix avec FrankoEnDetente, Klemo et Aficionado, pensé pour la complicité et le partage entre créateurs.",
    thumb: 'https://i.ytimg.com/vi/IHF-Bz-26Xc/hqdefault.jpg',
    youtubeId: 'IHF-Bz-26Xc',
  },
  {
    title: 'Exposition Cléopâtre — Grand Palais', category: 'evenementiel',
    client: 'Entreprise & Marques · Culture & musées',
    desc: "Couverture photo de l'exposition Cléopâtre au Grand Palais : sculptures, pièces de haute couture et installations captées en lumière de scénographie, pour restituer l'atmosphère du parcours et alimenter la communication de l'exposition.",
    thumb: 'assets/img/cleopatre-1.jpg',
    gallery: ['assets/img/cleopatre-1.jpg', 'assets/img/cleopatre-2.jpg', 'assets/img/cleopatre-3.jpg'],
  },
  {
    title: 'Florent Bax — Teaser de lancement', category: 'personnalites',
    client: 'Sport · Florent Bax — annonce chaîne YouTube',
    desc: "Teaser d'annonce du lancement de la chaîne YouTube de Florent Bax : un film court et rythmé, pensé pour créer l'attente avant la toute première vidéo.",
    thumb: 'assets/video/flobax-teaser-poster.jpg',
    videoSrc: 'assets/video/flobax-teaser.mp4',
  },
  {
    title: 'Orphelinats de Bali — Campagne de sensibilisation', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Association',
    desc: "Campagne de sensibilisation photo pour des orphelinats balinais : une série de portraits lumineux et dignes, pensée pour raconter le quotidien des enfants et soutenir les actions de l'association auprès de ses donateurs.",
    thumb: 'assets/img/bali-orphelinat-1.jpg',
    gallery: ['assets/img/bali-orphelinat-1.jpg', 'assets/img/bali-orphelinat-2.jpg', 'assets/img/bali-orphelinat-3.jpg'],
  },
  {
    title: "Premier titre de l'année !", category: 'personnalites',
    client: 'Sport · Florent Bax — vlog tournoi',
    desc: "Un titre décroché et raconté de l'intérieur, de l'échauffement à la remise des trophées.",
    thumb: 'https://i.ytimg.com/vi/d4K7qenk1Q0/hqdefault.jpg',
    youtubeId: 'd4K7qenk1Q0',
  },
  {
    title: 'Croisière au Komodo — Campagne publicitaire', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Croisière Komodo',
    desc: "Campagne publicitaire pour une croisière dans l'archipel de Komodo : lumière dorée de fin de journée et cadrages larges pour vendre l'évasion et une expérience de voyage haut de gamme.",
    thumb: 'assets/img/komodo-croisiere.jpg',
  },
  {
    title: 'Berry Beats — Aftermovie de soirée', category: 'evenementiel',
    client: 'Événementiel · Berry Beats',
    desc: "Aftermovie de la soirée du collectif Berry Beats : captation au cœur de la piste, jeux de néons et montage rythmé sur le set, pour restituer l'énergie de la nuit et donner envie d'être à la prochaine.",
    thumb: 'assets/video/berry-beats-poster.jpg',
    videoSrc: 'assets/video/berry-beats.mp4',
  },
  {
    title: 'Acalapati — Film de marque', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Acalapati',
    desc: "Film de marque lifestyle pour Acalapati : une esthétique solaire et premium au service de l'univers de la marque, pensée pour ses réseaux et sa communication.",
    thumb: 'assets/video/acalapati-poster.jpg',
    videoSrc: 'assets/video/acalapati.mp4',
  },
  {
    title: 'Hôtellerie urbaine — Jakarta', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Immobilier & hôtellerie',
    desc: "Série photo pour l'hôtellerie haut de gamme à Jakarta : rooftops, piscines à débordement et skyline au coucher du soleil, pour vendre une expérience autant qu'une chambre.",
    thumb: 'assets/img/jakarta-rooftop.jpg',
  },
  {
    title: 'Arconit — Film de marque', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Arconit',
    desc: "Film de marque pour Arconit : mettre en image le savoir-faire et la précision de l'atelier, monté comme un manifeste industriel court, rythmé et haut de gamme.",
    thumb: 'assets/video/arconit-poster.jpg',
    videoSrc: 'assets/video/arconit.mp4',
  },
  {
    title: 'Éco-lodge à Bali — Visite en images', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Hôtellerie',
    desc: "Reportage photo pour un éco-lodge en bambou niché dans la jungle balinaise : architecture, piscines et végétation, mis en image pour le site et les plateformes de réservation.",
    thumb: 'assets/img/ecolodge.jpg',
  },
  {
    title: 'Paul & Pauline — Film de mariage', category: 'evenementiel',
    client: 'Particuliers · Mariage',
    desc: "Teaser du mariage de Pauline & Paul : les alliances, la cérémonie, les retrouvailles et la fête, condensés en un film court et émouvant, fidèle à l'énergie de la journée.",
    thumb: 'assets/img/mariage-hero.jpg',
    videoSrc: 'assets/video/mariage.mp4',
  },
  {
    title: 'Gala de gymnastique — Captation associative', category: 'evenementiel',
    client: 'Sport · Association',
    desc: "Captation du gala annuel d'une association de gymnastique rythmique : chorégraphies, lumière de scène et émotion du public, restituées pour le club et les familles.",
    thumb: 'assets/img/gala.jpg',
  },
  {
    title: 'Babi Paris — Film de restaurant', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Restauration',
    desc: "Film de présentation pour le restaurant Babi Paris : la devanture, la salle et la parole du fondateur, pour donner envie de pousser la porte avant même d'avoir vu la carte.",
    thumb: 'assets/video/babi-poster.jpg',
    videoSrc: 'assets/video/babi.mp4',
  },
  {
    title: 'Une école en Indonésie — Documentaire', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Association',
    desc: "Documentaire tourné dans une école en Indonésie : un regard sensible sur le quotidien des élèves, entre portraits et scènes de vie, dans une approche immersive et humaine.",
    thumb: 'assets/img/doc-indonesie.jpg',
  },
  {
    title: 'Tempête au tournoi de Reus', category: 'personnalites',
    client: 'Sport · Florent Bax — vlog tournoi',
    desc: "Un tournoi perturbé par la météo, capté malgré les imprévus de dernière minute.",
    thumb: 'https://i.ytimg.com/vi/USFv6GryuRQ/hqdefault.jpg',
    youtubeId: 'USFv6GryuRQ',
  },
  {
    title: "Proche de l'abandon à Abidjan !", category: 'personnalites',
    client: 'Sport · Florent Bax — vlog tournoi',
    desc: "Un match à suspense où tout a basculé, filmé au plus près de la compétition.",
    thumb: 'https://i.ytimg.com/vi/fiqkdX1E2mg/hqdefault.jpg',
    youtubeId: 'fiqkdX1E2mg',
  },
  {
    title: 'Match de fou avec 50 aces au CH100 de Kigali', category: 'personnalites',
    client: 'Sport · Florent Bax — vlog tournoi',
    desc: "Un affrontement électrique ponctué de 50 aces, restitué dans toute son intensité.",
    thumb: 'https://i.ytimg.com/vi/qTF2VW-zrZY/hqdefault.jpg',
    youtubeId: 'qTF2VW-zrZY',
  },
  {
    title: 'Créateurs', category: 'personnalites',
    client: 'Créateurs · Reel Instagram',
    desc: '',
    externalUrl: 'https://www.instagram.com/reel/DQ7DJMjCM_a/',
  },
];

/* ---------- Données "Ce qu'on couvre" ---------- */
/* Pour chaque catégorie : une intro courte (SEO) et des groupes de prestations
   affichés sous forme de tags. Basé sur le détail fourni par Coy Production. */
const COVERAGE = {
  'entreprise-marques': {
    tagline: 'Faire connaître votre activité',
    intro: "Production vidéo et photo pour entreprises, marques et associations, entre Paris et Laval : films institutionnels, campagnes publicitaires, contenus produits, immobilier et marque employeur, en Île-de-France, en Pays de la Loire et partout en France.",
    metaTitle: 'Production vidéo pour entreprises & marques — Coy Production',
    metaDescription: "Films d'entreprise, publicités, contenus produits, immobilier et marque employeur, entre Paris et Laval. Devis sous 48h, déplacements partout en France.",
    faq: [
      { q: 'Quel budget prévoir pour un film d’entreprise ?', a: "Tout dépend du format et de la durée de tournage. Un film de présentation tourné sur une journée démarre autour de 1 200 €, une campagne multi-formats se construit sur devis. Nous cadrons toujours le budget avant de réserver une date." },
      { q: 'Combien de temps faut-il entre le brief et la livraison ?', a: "Comptez en moyenne deux à trois semaines pour un film d'entreprise : un échange de cadrage, le repérage si nécessaire, la journée de tournage, puis le montage avec un aller-retour de corrections inclus." },
      { q: 'Pouvez-vous décliner un même tournage pour les réseaux sociaux ?', a: "Oui, et c'est même recommandé : une seule journée de tournage peut produire le film principal ainsi que plusieurs formats verticaux courts pour LinkedIn, Instagram ou TikTok, sans surcoût de production." },
      { q: 'Travaillez-vous avec des associations et des structures à budget réduit ?', a: "Oui. Nous adaptons le format à l'enveloppe disponible — un reportage photo, une captation légère ou un film court — plutôt que de dégrader la qualité d'un format trop ambitieux." },
      { q: 'Intervenez-vous en dehors de Paris et de la Mayenne ?', a: "Oui, nous nous déplaçons partout en France et à l'international. Les frais de déplacement sont annoncés dans le devis, sans surprise." },
    ],
    groups: [
      { title: 'Communication institutionnelle', desc: "Un film d'entreprise réussi donne à voir des visages, pas seulement un logo. Nous produisons vos films institutionnels, présentations d'équipe et vidéos de recrutement pour donner une image humaine et professionnelle à votre structure — celle que vos futurs clients et candidats retiennent.", items: ["Film d'entreprise", "Présentation de l'équipe", 'Vidéo corporate', 'Vidéo de recrutement', "Culture d'entreprise", 'Visite des locaux'], img: 'assets/img/atelier.jpg' },
      { title: 'Marketing & publicité', desc: "Chaque plateforme a ses propres codes de lecture. Nous concevons vos publicités, spots promotionnels et campagnes digitales en pensant directement aux formats natifs de Meta, TikTok et YouTube, pour des contenus qui convertissent plutôt que d'être simplement vus.", items: ['Publicité', 'Spot promotionnel', 'Lancement de produit', 'Campagne digitale', 'Publicité Meta / TikTok / YouTube', 'Marques sportives', 'Lancement de collection'], img: 'assets/img/marketing-xgimi.jpg' },
      { title: 'Produits', desc: "Avant d'acheter, un client veut voir le produit en mouvement et entendre d'autres avis. Nous produisons vos packshots vidéo, démonstrations, tutoriels et témoignages clients dans cet objectif précis : lever les derniers doutes avant la conversion.", items: ['Packshot vidéo', 'Démonstration produit', 'Shooting produit', 'Tutoriels', 'Unboxing', 'Témoignages clients'], img: 'assets/img/matcha.jpg' },
      { title: 'Immobilier & hôtellerie', desc: "La première visite d'un bien se fait aujourd'hui à l'écran. Nous réalisons vos visites vidéo, prises de vue drone et reportages photo pour faire vivre un lieu et provoquer l'envie, bien avant la visite physique.", items: ['Visite vidéo', 'Drone', 'Photos pour annonce et Airbnb', 'Programme immobilier neuf', 'Hôtels et lodges', 'Restaurants'], img: 'assets/img/immo-villa.jpg' },
      { title: 'Marque employeur & RH', desc: "Attirer les bons talents demande de montrer, pas seulement de décrire, votre culture d'entreprise. Nous produisons vos témoignages collaborateurs, contenus de marque employeur et vidéos d'onboarding pour renforcer à la fois votre attractivité externe et l'engagement de vos équipes en place.", items: ['Témoignages collaborateurs', 'Marque employeur', 'Vidéo onboarding', 'Formation interne', 'E-learning'], img: 'https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Réseaux sociaux', desc: "Publier régulièrement sans y passer vos journées : c'est l'équation que nous résolvons avec une banque de contenus mensuelle — reels, stories, capsules vidéo — tournée en une seule session pour alimenter vos réseaux plusieurs semaines durant.", items: ['Banque de contenus mensuelle', 'Reels', 'Stories', 'Interviews', 'Capsules vidéo'], img: 'assets/img/matcha-social.jpg' },
      { title: 'Clubs & associations', desc: "Un club vit de son collectif : ses joueurs, ses bénévoles, son histoire. Nous mettons cette dynamique en image à travers un film de présentation, une vidéo de recrutement ou un résumé de saison, avec des formats pensés pour fédérer vos licenciés et convaincre de nouveaux membres de vous rejoindre.", items: ['Film de présentation du club', 'Vidéo de recrutement', 'Vidéo de saison', 'Campagne de sensibilisation', 'Interviews', 'Reportage immersion'], img: 'assets/img/bourny-tennis.jpg' },
    ],
  },
  personnalites: {
    tagline: 'Développer votre image et votre audience',
    intro: "Production vidéo et photo pour athlètes, créateurs de contenu, artistes et formateurs, entre Paris et Laval : personal branding, vlogs, clips, formations filmées et portraits, avec des déplacements partout en France et à l'international.",
    metaTitle: 'Production vidéo pour personnalités & créateurs — Coy Production',
    metaDescription: "Athlètes, créateurs de contenu, artistes, coachs et formateurs : personal branding, vlogs, clips et portraits, entre Paris, Laval et toute la France.",
    faq: [
      { q: 'Accompagnez-vous les profils qui débutent ?', a: "Oui, aussi bien des personnalités en développement que des profils confirmés. L'objectif est le même : construire un univers visuel cohérent et reconnaissable, quel que soit le nombre d'abonnés au départ." },
      { q: 'Peut-on tirer plusieurs formats d’un seul tournage ?', a: "C'est la demande la plus fréquente, et la plus rentable : une journée de tournage peut donner une vidéo longue, plusieurs reels et des shorts, pour alimenter toutes vos plateformes sans multiplier les jours de production." },
      { q: 'Proposez-vous un accompagnement régulier dans la durée ?', a: "Oui. Beaucoup de personnalités travaillent avec nous en sessions récurrentes — mensuelles ou par saison — pour tenir une ligne éditoriale sur la durée plutôt que de publier par à-coups." },
      { q: 'Pouvez-vous nous suivre en déplacement ou en compétition ?', a: "Oui, nous suivons régulièrement des athlètes et des créateurs en tournoi ou en voyage, en France comme à l'étranger, avec un dispositif léger pensé pour ne jamais gêner la performance." },
      { q: 'Assurez-vous le montage seul, sans le tournage ?', a: "Oui. Nous pouvons intervenir uniquement au montage si vous tournez déjà vos images, ou prendre l'ensemble en charge, du concept à la livraison finale." },
    ],
    groups: [
      { title: 'Athlètes', desc: "Derrière chaque performance, un parcours, une discipline, une personnalité. Nous construisons avec chaque athlète une image forte — portrait, personal branding, showreel ou documentaire court — qui parle autant à ses partenaires qu'à sa communauté.", items: ["Portrait d'athlète", 'Personal branding', 'Showreel / highlight reel', "Shooting d'entraînement", 'Suivi en tournoi', 'Documentaire court'], img: 'assets/video/flobax-teaser-poster.jpg' },
      { title: 'Créateurs de contenu', desc: "Quelques secondes : c'est le temps qu'un contenu a pour retenir l'attention avant le swipe suivant. Nous tournons et montons vos vlogs, reels et formats YouTube avec ce rythme en tête, sans sacrifier la sincérité qui fait la différence entre un contenu vu et un contenu qui engage.", items: ['Vlogs', 'Reels Instagram', 'TikTok', 'Shorts et formats YouTube', 'Tournage multicaméra', 'Podcasts filmés', 'Behind the scenes'], img: 'assets/img/createur-br10.jpg' },
      { title: 'Artistes & musique', desc: "Un clip réussi ne concurrence jamais la musique, il la sert. Nous construisons une direction artistique cohérente avec votre univers — du clip musical à la captation de concert, du portrait d'atelier au film d'exposition — pour raconter votre travail sans le trahir.", items: ['Clip musical', 'Live session', 'Teaser de sortie', 'Portrait artistique', "Film d'atelier", 'Documentaire créatif'], img: 'assets/img/artiste.jpg' },
      { title: 'Coachs & formateurs', desc: "Une formation en ligne ou un programme de coaching se vend sur la clarté autant que sur le fond. Nous produisons des contenus pédagogiques soignés — formation vidéo, masterclass, publicités et témoignages — pour donner à votre offre la crédibilité visuelle qu'elle mérite dès le lancement.", items: ['Formation vidéo', 'Masterclass', 'Lancement de programme', "Vidéos d'exercices", 'Témoignages clients', 'Publicités'], img: 'assets/img/formation-studio.jpg' },
      { title: 'Portraits & personal branding', desc: "Une bonne image professionnelle en dit souvent plus qu'un long CV. Nous réalisons vos portraits et shootings de personal branding avec une direction artistique soignée, pensée pour vos réseaux, votre site, votre book ou vos candidatures.", items: ['Portrait professionnel', 'Shooting personal branding', 'Book artistique', 'CV vidéo', 'Photos pour les réseaux'], img: 'assets/img/formation-2.jpg' },
    ],
  },
  evenementiel: {
    tagline: 'Immortaliser une date',
    intro: "Captation d'événements entre Paris et Laval : séminaires et soirées d'entreprise, compétitions sportives, mariages, célébrations privées et événements culturels. Un moment qui ne se rejoue pas mérite un dispositif fiable du premier au dernier instant.",
    metaTitle: "Captation d'événements — séminaires, mariages, compétitions | Coy Production",
    metaDescription: "Aftermovie de séminaire, film de mariage, captation de compétition et d'événement culturel, entre Paris et Laval. Déplacements partout en France, devis sous 48h.",
    faq: [
      { q: 'Combien de temps après l’événement recevons-nous les images ?', a: "Pour un aftermovie, comptez 5 à 10 jours ouvrés. Nous pouvons aussi livrer un format court dès le lendemain si vous devez communiquer à chaud — c'est à préciser au moment du devis." },
      { q: 'Êtes-vous présents sur toute la durée de l’événement ?', a: "Oui, la formule habituelle couvre l'événement du début à la fin. Pour les formats longs — séminaire sur deux jours, mariage de la préparation à la soirée — nous cadrons ensemble les moments clés à ne pas manquer." },
      { q: 'Que se passe-t-il en cas d’imprévu technique ?', a: "Nous travaillons systématiquement avec du matériel doublé — boîtiers, batteries, cartes mémoire — précisément parce qu'un événement ne se rejoue pas. Les fichiers sont sauvegardés sur deux supports dès la fin du tournage." },
      { q: 'Filmez-vous aussi les événements privés en plus des événements d’entreprise ?', a: "Oui. Mariages, anniversaires, baptêmes et fêtes de famille font partie de notre quotidien, avec la même exigence technique que pour un événement professionnel — et beaucoup de discrétion." },
      { q: 'Proposez-vous la photo en plus de la vidéo ?', a: "Oui, la photo peut être assurée en parallèle de la captation vidéo sur le même événement, ce qui évite d'avoir à coordonner deux prestataires le jour J." },
    ],
    groups: [
      { title: "Événements d'entreprise", desc: "Un événement professionnel ne se refait pas : la captation doit être fiable du premier au dernier instant. Nous couvrons vos conférences, séminaires, salons, soirées d'entreprise et lancements de produit dans leur intégralité, jusqu'à la livraison d'un aftermovie prêt à partager dès le lendemain.", items: ['Conférences', 'Séminaires', 'Salons professionnels', "Soirées d'entreprise", 'Lancement de produit', 'Inaugurations', 'Aftermovie'], img: 'assets/img/defile-miroir.jpg' },
      { title: 'Sport & compétitions', desc: "Une action rapide, une lumière qui change en une seconde, un public à ne pas gêner : couvrir un événement sportif demande un positionnement précis et des réflexes de tournage rodés. Nous captons vos tournois, championnats, courses et galas au plus près de l'action, pour des images utilisables sur vos réseaux comme dans vos archives.", items: ['Couverture de compétition', 'Tournois et championnats', 'Meetings sportifs', 'Courses (running, cyclisme...)', 'Galas et démonstrations', 'Résumé de match (highlights)'], img: 'assets/img/competition.jpg' },
      { title: 'Mariages & couples', desc: "Le jour J passe vite, souvent trop vite pour en garder tous les détails en mémoire. Nous racontons votre histoire avec sobriété et émotion — film complet, teaser, highlight — du premier regard au brunch du lendemain, pour pouvoir la revivre autant de fois que vous le souhaitez.", items: ['Film de mariage', 'Teaser', 'Highlight', 'Vidéo complète', 'Love story avant mariage', 'Demande en mariage', 'Séance couple'], img: 'assets/img/mariage-hero.jpg' },
      { title: 'Célébrations privées', desc: "Une fête de famille réussie ne s'arrête pas quand la caméra arrive. Nous captons l'ambiance et les instants complices de vos anniversaires, baptêmes et soirées privées en restant discrets, pour que vos proches oublient vite notre présence.", items: ['Anniversaire', 'Baptême', 'Communion', 'Naissance et grossesse', 'Soirée privée', 'Fête de famille', 'Film souvenir'], img: 'https://images.unsplash.com/photo-1758523981334-4b7d5e179efa?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Culture & spectacle', desc: "Filmer un spectacle ou une exposition demande de composer avec une lumière pensée pour la scène, pas pour la caméra. Nous captons vos expositions, défilés, concerts et galas en respectant la scénographie, pour restituer l'atmosphère telle que le public l'a vécue.", items: ['Exposition', 'Défilé', 'Concert et captation live', 'Gala et cérémonie', 'Performance artistique', 'Bande-annonce culturelle'], img: 'assets/img/cleopatre-2.jpg' },
    ],
  },
};

/* FAQ générale de la home — répond aux objections et intentions de recherche
   transverses (zones d'intervention, tarifs, délais, agence vs. DIY...). */
const FAQ_HOME = [
  { q: 'Intervenez-vous uniquement à Paris et à Laval ?', a: "Non. Nous sommes basés entre Paris et Laval, en Mayenne, mais nous nous déplaçons dans toute l'Île-de-France, les Pays de la Loire, partout en France et à l'international selon les projets." },
  { q: 'Combien coûte une production vidéo avec Coy Production ?', a: "Chaque projet est unique : le tarif dépend du format, de la durée de tournage, du nombre de lieux et du travail de post-production. Nous établissons un devis détaillé et gratuit après un premier échange sur vos objectifs." },
  { q: 'Combien de temps dure un projet, du brief à la livraison ?', a: "Cela varie selon le format : quelques jours pour un contenu réseaux sociaux, plusieurs semaines pour un film corporate ou un mariage complet. Le planning est cadré ensemble dès le brief." },
  { q: 'Pourquoi faire appel à une agence plutôt que réaliser le contenu soi-même ?', a: "Une production professionnelle apporte un cadrage, une lumière, un rythme de montage et une direction artistique qui transforment un contenu correct en contenu qui capte l'attention et sert vos objectifs de communication." },
  { q: 'Quels types de projets réalisez-vous ?', a: "Nous couvrons quatre univers : le sport (compétitions, clubs, athlètes), les créateurs de contenu (YouTube, musique, réseaux), les entreprises & marques (corporate, marketing, événementiel) et les particuliers (mariages, famille, souvenirs)." },
  { q: 'Proposez-vous uniquement de la vidéo ou aussi de la photo ?', a: "Les deux. La plupart de nos projets combinent captation vidéo et shooting photo, pour une cohérence visuelle sur tous vos supports." },
];

/* FAQ propre à la page Contact : questions qui lèvent les derniers freins
   juste avant l'envoi du formulaire (délais, tarifs, zones, engagement). */
const FAQ_CONTACT = [
  { q: 'Sous combien de temps recevrai-je une réponse ?', a: "Nous répondons à chaque demande sous 48h ouvrées, avec un premier retour sur la faisabilité et, dès que possible, un devis détaillé." },
  { q: 'Le devis est-il gratuit et sans engagement ?', a: "Oui. L'échange initial et le devis sont entièrement gratuits et sans engagement : ils servent à cadrer votre projet, son format et son budget avant toute décision." },
  { q: 'Dois-je déjà avoir un budget ou un cahier des charges précis ?', a: "Non. Même une idée encore floue suffit pour démarrer la discussion. Nous vous aidons à définir le format le plus pertinent et à estimer le budget correspondant." },
  { q: 'Vous déplacez-vous pour les tournages ?', a: "Oui. Basés entre Paris et Laval, nous intervenons dans toute l'Île-de-France et les Pays de la Loire, et nous nous déplaçons partout en France — à l'international pour les projets qui le demandent." },
];

/* Meta title/description par route — mis à jour dynamiquement au routing car
   le site est une SPA à page HTML unique (pas de rendu serveur par URL). */
const PAGE_META = {
  home: {
    title: 'Coy Production — Agence de production vidéo à Paris & Laval',
    description: "Agence de production vidéo et photo entre Paris et Laval (Mayenne) : films pour les entreprises et marques, les personnalités et les événements. Devis sous 48h, déplacements partout en France.",
  },
  portfolio: {
    title: 'Portfolio — Nos réalisations vidéo & photo | Coy Production',
    description: "Découvrez nos réalisations vidéo et photo pour les entreprises et marques, les personnalités et l'événementiel, filmées entre Paris, Laval et partout en France.",
  },
  expertises: {
    title: 'Nos expertises — Entreprises & Marques, Personnalités, Événementiel',
    description: "Production vidéo et photo autour de trois univers : entreprises & marques, personnalités et événementiel. Basés entre Paris et Laval, présents partout en France.",
  },
  'a-propos': {
    title: 'À propos — Hugo Coyard, fondateur de Coy Production',
    description: "Hugo Coyard, fondateur de Coy Production : vidéaste indépendant entre Paris et Laval, interlocuteur unique qui s'entoure des bons profils selon les tournages. Formation en communication, expérience terrain.",
  },
  contact: {
    title: 'Contact — Devis vidéo gratuit sous 48h | Coy Production',
    description: "Contactez Coy Production, studio de production vidéo entre Paris et Laval. Devis gratuit sous 48h, sans engagement, pour vos projets d'entreprise, de personal branding ou d'événement.",
  },
};

document.addEventListener('DOMContentLoaded', () => {

  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.getElementById('year').textContent = new Date().getFullYear();

  /* animation du logo au clic (header + footer) : un tour 3D, relançable. */
  document.querySelectorAll('.logo img').forEach((img) => {
    img.parentElement.addEventListener('click', () => {
      if (reduceMotionQuery.matches) return;
      img.classList.remove('logo-anim');
      void img.offsetWidth; /* reflow → permet de relancer l'animation */
      img.classList.add('logo-anim');
    });
    img.addEventListener('animationend', () => img.classList.remove('logo-anim'));
  });

  /* services — liste éditoriale : l'image d'aperçu à droite suit la ligne
     survolée / focalisée. Un léger fondu accompagne chaque changement. */
  (function initServicesPreview() {
    const list = document.getElementById('svcList');
    const img = document.getElementById('svcPreviewImg');
    const tag = document.getElementById('svcPreviewTag');
    if (!list || !img) return;
    const items = Array.from(list.querySelectorAll('.svc-item'));
    let current = null;
    const activate = (item) => {
      if (!item || item === current) return;
      current = item;
      items.forEach((el) => el.classList.toggle('is-active', el === item));
      const src = item.getAttribute('data-img');
      const name = item.querySelector('.svc-name');
      img.classList.add('is-swapping');
      const swap = () => {
        img.style.backgroundImage = `url('${src}')`;
        if (tag && name) tag.textContent = name.textContent;
        requestAnimationFrame(() => img.classList.remove('is-swapping'));
      };
      window.setTimeout(swap, 160);
    };
    items.forEach((item) => {
      item.addEventListener('mouseenter', () => activate(item));
      item.addEventListener('focus', () => activate(item));
    });
  })();

  /* intro — flash de logo bref, non bloquant : la home est visible et utilisable tout de suite */
  const intro = document.getElementById('introOverlay');
  if (intro) {
    if (reduceMotionQuery.matches) {
      intro.remove();
    } else {
      const endIntro = () => intro.remove();
      intro.addEventListener('animationend', (e) => {
        if (e.target === intro) endIntro();
      });
      setTimeout(endIntro, 1200);
    }
  }

  /* header + scroll progress */
  const header = document.getElementById('siteHeader');
  const progress = document.getElementById('scrollProgress');
  const heroBg = document.querySelector('.hero-bg');
  /* CTA persistant mobile : apparaît une fois le hero dépassé, disparaît à
     l'approche du footer/formulaire de contact pour ne jamais le recouvrir. */
  const mobileCtaBar = document.getElementById('mobileCtaBar');
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    const doc = document.documentElement;
    const pct = (y / (doc.scrollHeight - doc.clientHeight)) * 100;
    progress.style.width = pct + '%';

    /* effet de profondeur léger sur le hero */
    if (heroBg && !reduceMotionQuery.matches && y < window.innerHeight) {
      heroBg.style.transform = `translateY(${y * 0.18}px)`;
    }

    if (mobileCtaBar) {
      const nearBottom = (doc.scrollHeight - y - window.innerHeight) < 700;
      mobileCtaBar.classList.toggle('visible', y > window.innerHeight * 0.7 && !nearBottom);
    }
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* vidéo de fond du hero : coupée si l'utilisateur préfère moins d'animation */
  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo && reduceMotionQuery.matches) {
    heroVideo.pause();
    heroVideo.removeAttribute('autoplay');
  }

  /* mobile nav */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.classList.remove('open');
    document.body.style.overflow = '';
  }));

  /* scroll reveal (page d'accueil uniquement) */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* compteur animé réutilisable (chiffres clés du studio, total du portfolio...) */
  function animateCount(el) {
    const target = parseInt(el.dataset.countTo, 10) || 0;
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    if (reduceMotionQuery.matches) {
      el.textContent = prefix + target + suffix;
      return;
    }
    el._counting = true;
    const duration = 1100;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el._counting = false;
    };
    requestAnimationFrame(tick);
  }

  /* les compteurs se relancent à chaque fois que la bande revient dans le champ
     de vision (remis à zéro quand elle en sort). */
  const countEls = document.querySelectorAll('.count-up:not(#portfolioCount)');
  if (countEls.length) {
    const countIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          if (!el._counting) animateCount(el);
        } else if (!el._counting) {
          el.textContent = (el.dataset.prefix || '') + '0' + (el.dataset.suffix || '');
        }
      });
    }, { threshold: 0.5 });
    countEls.forEach(el => countIo.observe(el));
  }

  /* ---------- Modale projet ---------- */
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalTag = document.getElementById('modalTag');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalMedia = document.getElementById('modalMedia');

  function openModal(item) {
    modalTitle.textContent = item.dataset.title;
    modalTag.textContent = item.dataset.client;
    modalDesc.textContent = item.dataset.desc;
    const youtubeId = item.dataset.youtube;
    const videoSrc = item.dataset.video;
    const thumb = item.dataset.thumb;
    const gallery = item.dataset.gallery ? item.dataset.gallery.split('|') : null;
    if (gallery) {
      /* série photo : galerie horizontale défilable, une image par écran */
      modalMedia.innerHTML = `<div class="modal-gallery">${gallery.map((src, i) =>
        `<img src="${src}" alt="${item.dataset.title} — photo ${i + 1}" loading="${i ? 'lazy' : 'eager'}">`).join('')}</div>`;
    } else if (youtubeId) {
      modalMedia.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&autoplay=1" title="${item.dataset.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
    } else if (videoSrc) {
      modalMedia.innerHTML = `<video src="${videoSrc}" controls autoplay playsinline></video>`;
    } else if (thumb) {
      /* projets photo : la modale affiche l'image en grand */
      modalMedia.innerHTML = `<img src="${thumb}" alt="${item.dataset.title}">`;
    } else {
      modalMedia.innerHTML = '<i class="fa-solid fa-play" aria-hidden="true"></i>';
    }
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }
  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalMedia.innerHTML = '<i class="fa-solid fa-play" aria-hidden="true"></i>'; /* coupe la lecture vidéo */
  }
  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  /* délégation d'événements : fonctionne pour les projets générés dynamiquement */
  const portfolioGrid = document.getElementById('portfolioGrid');
  portfolioGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.portfolio-item');
    if (item) openModal(item);
  });
  portfolioGrid.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return;
    const item = e.target.closest('.portfolio-item');
    if (item) openModal(item);
  });

  /* ---------- Rendu portfolio : une seule page, filtrable par catégorie ---------- */
  const portfolioCount = document.getElementById('portfolioCount');
  const portfolioFilters = document.getElementById('portfolioFilters');

  function projectCardHTML(p, i, featured) {
    /* les projets sans lecteur intégrable (ex. reel Instagram, sans miniature
       récupérable) s'ouvrent en lien externe plutôt que dans la modale */
    if (p.externalUrl) {
      return `
        <a class="portfolio-item project-card project-card-external rise-in" style="animation-delay:${(i % 9) * 60}ms" href="${p.externalUrl}" target="_blank" rel="noopener">
          <div class="thumb project-card-thumb project-card-thumb-external">
            <i class="fa-brands fa-instagram" aria-hidden="true"></i>
          </div>
          <div class="project-card-text">
            <span class="project-card-index">${String(i + 1).padStart(2, '0')}</span>
            <h3>${p.title}</h3>
            <p class="project-card-tag">${p.client}</p>
            <p class="project-card-desc">Voir le reel sur Instagram <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></p>
          </div>
        </a>`;
    }
    /* première réalisation mise en avant : carte pleine largeur, visuel large
       + texte à côté, pour donner un point d'entrée éditorial à la grille. */
    const cls = featured ? 'portfolio-item project-card project-card-featured rise-in' : 'portfolio-item project-card rise-in';
    return `
    <article class="${cls}" style="animation-delay:${(i % 9) * 60}ms" tabindex="0" data-title="${p.title}" data-client="${p.client}" data-desc="${p.desc}" data-thumb="${p.thumb}"${p.gallery ? ` data-gallery="${p.gallery.join('|')}"` : ''}${p.youtubeId ? ` data-youtube="${p.youtubeId}"` : ''}${p.videoSrc ? ` data-video="${p.videoSrc}"` : ''}>
      <div class="thumb project-card-thumb">
        <span class="thumb-bg" style="background-image:url('${p.thumb}')"></span>
        <span class="thumb-shade"></span>
        ${(p.youtubeId || p.videoSrc) ? '<i class="fa-solid fa-play" aria-hidden="true"></i>' : ''}
      </div>
      <div class="project-card-text">
        <span class="project-card-index">${String(i + 1).padStart(2, '0')}${featured ? ' · À la une' : ''}</span>
        <h3>${p.title}</h3>
        <p class="project-card-tag">${p.client}</p>
        <p class="project-card-desc">${p.desc}</p>
        ${featured ? '<span class="project-card-cue">Voir le projet <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>' : ''}
      </div>
    </article>`;
  }

  function renderPortfolioFilters(active) {
    if (!portfolioFilters) return;
    const pills = [{ slug: 'all', label: 'Tous', count: PROJECTS.length }]
      .concat(CATEGORIES.map(cat => ({ slug: cat.slug, label: cat.label, count: PROJECTS.filter(p => p.category === cat.slug).length })));
    portfolioFilters.innerHTML = pills.map(p => `
      <a class="filter-pill${p.slug === active ? ' active' : ''}" href="${p.slug === 'all' ? '#/portfolio' : `#/portfolio/${p.slug}`}">
        ${p.label} <span>${p.count}</span>
      </a>
    `).join('');
  }

  function renderPortfolio(filter) {
    const slug = filter && filter !== 'all' ? filter : 'all';
    const projects = slug === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === slug);
    renderPortfolioFilters(slug);
    /* la 1re réalisation (si intégrable) devient la carte "à la une" */
    portfolioGrid.innerHTML = projects
      .map((p, i) => projectCardHTML(p, i, i === 0 && !p.externalUrl))
      .join('');
    if (portfolioCount) {
      portfolioCount.textContent = '0';
      animateCount(portfolioCount);
    }
  }

  /* ---------- Rendu "Nos expertises" niveau 1 : carrousel sur la home ---------- */
  const coverageGrid = document.getElementById('coverageGrid');
  function renderCoverageGrid() {
    if (!coverageGrid) return;
    coverageGrid.innerHTML = CATEGORIES.map((cat, i) => {
      const data = COVERAGE[cat.slug];
      const examples = data ? data.groups.slice(0, 3).map(g => g.title).join(' · ') : '';
      return `
        <a class="coverage-slide rise-in" style="animation-delay:${i * 90}ms" href="#/couvre/${cat.slug}">
          <span class="coverage-slide-bg" style="background-image:url('${cat.cover}')"></span>
          <span class="coverage-slide-shade"></span>
          <span class="coverage-slide-logo" aria-hidden="true"></span>
          <span class="coverage-slide-content">
            <span class="coverage-slide-title">${cat.label}</span>
            <span class="coverage-slide-examples">${examples}</span>
            <span class="coverage-slide-btn">Découvrir <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
          </span>
        </a>`;
    }).join('');
  }
  renderCoverageGrid();

  /* flèches du carrousel "Nos expertises" */
  const coverageArrowPrev = document.getElementById('coverageArrowPrev');
  const coverageArrowNext = document.getElementById('coverageArrowNext');
  if (coverageArrowPrev && coverageArrowNext && coverageGrid) {
    const scrollByTile = (dir) => {
      const tile = coverageGrid.querySelector('.coverage-slide');
      const step = tile ? tile.getBoundingClientRect().width + 6 : coverageGrid.clientWidth * 0.8;
      coverageGrid.scrollBy({ left: dir * step, behavior: 'smooth' });
    };
    coverageArrowPrev.addEventListener('click', () => scrollByTile(-1));
    coverageArrowNext.addEventListener('click', () => scrollByTile(1));
  }

  /* ---------- Rendu "Ce qu'on couvre" niveau 2 : détail par catégorie ---------- */
  const coverageTitle = document.getElementById('coverageTitle');
  const coverageTagline = document.getElementById('coverageTagline');
  const coverageIntro = document.getElementById('coverageIntro');
  const coverageSignature = document.getElementById('coverageSignature');
  const coverageHeroBg = document.getElementById('coverageHeroBg');
  const coverageGroups = document.getElementById('coverageGroups');
  /* images réelles du portfolio pour la catégorie, utilisées en illustration
     des groupes de prestations (avec repli sur la couverture de catégorie) */
  function getCategoryImages(slug, cover) {
    const fromProjects = PROJECTS
      .filter(p => p.category === slug && p.thumb)
      .map(p => p.thumb);
    const all = cover ? [cover, ...fromProjects] : fromProjects;
    return [...new Set(all)];
  }

  function renderCoverageDetail(slug) {
    const cat = CATEGORIES.find(c => c.slug === slug);
    const data = COVERAGE[slug];
    coverageTitle.textContent = cat ? cat.label : 'Catégorie introuvable';
    coverageTagline.textContent = data ? data.tagline : '';
    coverageIntro.textContent = data ? data.intro : '';
    const total = data ? data.groups.reduce((sum, g) => sum + g.items.length, 0) : 0;
    coverageSignature.textContent = `Coy Production — ${total} prestations`;
    if (cat) coverageHeroBg.style.backgroundImage = `url('${cat.cover}')`;
    const images = cat ? getCategoryImages(slug, cat.cover) : [];
    coverageGroups.innerHTML = data ? data.groups.map((g, i) => {
      const img = g.img || (images.length ? images[i % images.length] : '');
      return `
      <div class="coverage-row reveal" style="transition-delay:${(i % 3) * 90}ms">
        <div class="coverage-row-media">
          ${img ? `<img src="${img}" alt="${g.title} — ${cat.label}" loading="lazy" decoding="async">` : ''}
          <span class="coverage-row-badge">${String(i + 1).padStart(2, '0')}</span>
        </div>
        <div class="coverage-row-content">
          <h3 class="coverage-group-title">${g.title}</h3>
          <p class="coverage-group-desc">${g.desc}</p>
          <div class="coverage-chips">
            ${g.items.map(item => `<span class="coverage-chip">${item}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
    }).join('') : '';
    /* liens croisés : rattrape le visiteur entré par le mauvais univers
       (le cas le plus fréquent : événement d'entreprise vs contenu de marque). */
    if (data) {
      const CROSS = {
        'entreprise-marques': [
          { slug: 'evenementiel', txt: "Vous cherchez la captation d'un séminaire ou d'une soirée d'entreprise ?" },
          { slug: 'personnalites', txt: 'Vous êtes une personnalité et non une structure ?' },
        ],
        personnalites: [
          { slug: 'evenementiel', txt: 'Vous avez une compétition ou un événement à faire couvrir ?' },
          { slug: 'entreprise-marques', txt: 'Vous représentez une marque ou une entreprise ?' },
        ],
        evenementiel: [
          { slug: 'entreprise-marques', txt: 'Vous cherchez plutôt du contenu de marque, hors événement ?' },
          { slug: 'personnalites', txt: "Vous voulez développer votre image sur la durée ?" },
        ],
      };
      const links = (CROSS[slug] || []).map(c => {
        const target = CATEGORIES.find(x => x.slug === c.slug);
        return target ? `<a class="coverage-cross-link" href="#/couvre/${c.slug}">${c.txt} <strong>${target.label}</strong> <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>` : '';
      }).join('');
      if (links) coverageGroups.insertAdjacentHTML('beforeend', `<div class="coverage-cross reveal"><p class="coverage-cross-label">Vous hésitez entre deux univers ?</p>${links}</div>`);
    }
    document.querySelectorAll('.coverage-row.reveal, .coverage-cross.reveal').forEach(el => io.observe(el));

    if (data && data.faq && data.faq.length) {
      if (coverageFaqWrap) coverageFaqWrap.hidden = false;
      if (coverageFaqTitle) coverageFaqTitle.textContent = `Questions fréquentes — ${cat ? cat.label : ''}`;
      renderFAQList(coverageFaqList, data.faq);
      if (coverageFaqWrap) io.observe(coverageFaqWrap);
    } else {
      if (coverageFaqWrap) coverageFaqWrap.hidden = true;
      if (coverageFaqList) coverageFaqList.innerHTML = '';
    }
    setFAQSchema(data ? data.faq : null);
    setPageMeta(data ? data.metaTitle : null, data ? data.metaDescription : null);
  }

  /* ---------- Page dédiée "Nos expertises" : vue d'ensemble des 4 univers ---------- */
  const expertisesGroups = document.getElementById('expertisesGroups');
  function renderExpertisesPage() {
    if (!expertisesGroups) return;
    expertisesGroups.innerHTML = CATEGORIES.map((cat, i) => {
      const data = COVERAGE[cat.slug];
      const total = data ? data.groups.reduce((sum, g) => sum + g.items.length, 0) : 0;
      const examples = data ? data.groups.slice(0, 3).map(g => g.title).join(' · ') : '';
      return `
      <div class="coverage-row reveal" style="transition-delay:${(i % 3) * 90}ms">
        <div class="coverage-row-media">
          <img src="${cat.cover}" alt="${cat.label}" loading="lazy" decoding="async">
          <span class="coverage-row-badge">${String(i + 1).padStart(2, '0')}</span>
        </div>
        <div class="coverage-row-content">
          <p class="expertise-row-label">${total} prestations</p>
          <h3 class="expertise-row-title">${cat.label}</h3>
          <p class="expertise-row-examples">${examples}</p>
          <p class="coverage-group-desc">${data ? data.intro : ''}</p>
          <a href="#/couvre/${cat.slug}" class="coverage-slide-btn">Découvrir en détail <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>`;
    }).join('');
    document.querySelectorAll('#expertisesGroups .coverage-row.reveal').forEach(el => io.observe(el));
  }

  /* ---------- SEO dynamique : meta tags + FAQ (site en SPA, une seule page HTML) ---------- */
  const metaDescriptionTag = document.querySelector('meta[name="description"]');
  const ogTitleTag = document.querySelector('meta[property="og:title"]');
  const ogDescTag = document.querySelector('meta[property="og:description"]');
  function setPageMeta(title, description) {
    if (title) {
      document.title = title;
      if (ogTitleTag) ogTitleTag.setAttribute('content', title);
    }
    if (description) {
      if (metaDescriptionTag) metaDescriptionTag.setAttribute('content', description);
      if (ogDescTag) ogDescTag.setAttribute('content', description);
    }
  }

  /* injecte/retire un bloc JSON-LD FAQPage : les moteurs IA (AI Overviews,
     ChatGPT, Perplexity) extraient directement ce balisage pour construire
     leurs réponses, même sans rich result classique dans Google. */
  function setFAQSchema(items) {
    let tag = document.getElementById('faqSchema');
    if (!items || !items.length) {
      if (tag) tag.remove();
      return;
    }
    if (!tag) {
      tag = document.createElement('script');
      tag.type = 'application/ld+json';
      tag.id = 'faqSchema';
      document.head.appendChild(tag);
    }
    tag.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
  }

  /* rendu d'un accordéon FAQ accessible : <details>/<summary> natifs,
     stylés pour coller à la charte graphique (voir .faq-item dans le CSS). */
  function renderFAQList(container, items) {
    if (!container) return;
    container.innerHTML = (items || []).map(item => `
      <details class="faq-item">
        <summary><span>${item.q}</span><i class="fa-solid fa-plus faq-icon" aria-hidden="true"></i></summary>
        <div class="faq-answer"><p>${item.a}</p></div>
      </details>
    `).join('');
  }

  const faqListHome = document.getElementById('faqList');
  const coverageFaqList = document.getElementById('coverageFaqList');
  const coverageFaqTitle = document.getElementById('coverageFaqTitle');
  const coverageFaqWrap = document.getElementById('coverageFaqWrap');
  const contactPageFaqList = document.getElementById('contactPageFaqList');

  /* ---------- Routing par hash ---------- */
  const viewHome = document.getElementById('view-home');
  const viewPortfolio = document.getElementById('view-portfolio');
  const viewCoverage = document.getElementById('view-coverage');
  const viewAbout = document.getElementById('view-about');
  const viewExpertises = document.getElementById('view-expertises');
  const viewContact = document.getElementById('view-contact');
  const allViews = [viewHome, viewPortfolio, viewCoverage, viewAbout, viewExpertises, viewContact];
  /* transition douce entre les pages (fondu + léger mouvement) plutôt qu'un
     cut instantané : la vue active s'efface, le contenu se met à jour et se
     recale en haut pendant qu'elle est invisible, puis la nouvelle vue entre. */
  let hasRoutedOnce = false;
  function showView(view, onReady) {
    const current = allViews.find(v => !v.hidden);
    if (current === view) {
      if (onReady) onReady();
      return;
    }
    /* on bascule les vues AVANT le onReady : ainsi le scrollTo(0,0) des routes
       s'applique sur la hauteur réelle de la nouvelle page (sinon, avec
       scroll-behavior:smooth, le défilement animé se fait couper par le
       changement de hauteur et laisse le visiteur bloqué en bas de page). */
    const finish = () => {
      allViews.forEach(v => { v.hidden = (v !== view); });
      if (onReady) onReady();
    };
    if (!current || !hasRoutedOnce || reduceMotionQuery.matches) {
      finish();
      return;
    }
    current.classList.add('view-leaving');
    window.setTimeout(() => {
      current.classList.remove('view-leaving');
      finish();
    }, 260);
  }

  function route() {
    const hash = window.location.hash;

    if (hash.startsWith('#/portfolio/')) {
      const slug = hash.replace('#/portfolio/', '');
      showView(viewPortfolio, () => {
        renderPortfolio(slug);
        setFAQSchema(null);
        setPageMeta(PAGE_META.portfolio.title, PAGE_META.portfolio.description);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      });
      return;
    }

    if (hash.startsWith('#/portfolio')) {
      showView(viewPortfolio, () => {
        renderPortfolio('all');
        setFAQSchema(null);
        setPageMeta(PAGE_META.portfolio.title, PAGE_META.portfolio.description);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      });
      return;
    }

    if (hash.startsWith('#/couvre/')) {
      const slug = hash.replace('#/couvre/', '');
      showView(viewCoverage, () => { renderCoverageDetail(slug); window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); });
      return;
    }

    if (hash.startsWith('#/a-propos')) {
      showView(viewAbout, () => {
        setFAQSchema(null);
        setPageMeta(PAGE_META['a-propos'].title, PAGE_META['a-propos'].description);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      });
      return;
    }

    if (hash.startsWith('#/expertises')) {
      showView(viewExpertises, () => {
        renderExpertisesPage();
        setFAQSchema(null);
        setPageMeta(PAGE_META.expertises.title, PAGE_META.expertises.description);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      });
      return;
    }

    if (hash.startsWith('#/contact')) {
      showView(viewContact, () => {
        renderFAQList(contactPageFaqList, FAQ_CONTACT);
        setFAQSchema(FAQ_CONTACT);
        setPageMeta(PAGE_META.contact.title, PAGE_META.contact.description);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      });
      return;
    }

    showView(viewHome, () => {
      renderFAQList(faqListHome, FAQ_HOME);
      setFAQSchema(FAQ_HOME);
      setPageMeta(PAGE_META.home.title, PAGE_META.home.description);
      /* "#/" (retour à l'accueil depuis les sous-pages) n'est pas un sélecteur
         CSS valide pour querySelector : on l'exclut explicitement, et on se
         protège par un try/catch contre tout autre hash imprévu. */
      if (hash && hash.length > 1 && hash !== '#/') {
        let target = null;
        try { target = document.querySelector(hash); } catch (e) { target = null; }
        if (target) {
          requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth' }));
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  }
  window.addEventListener('hashchange', route);
  route();
  hasRoutedOnce = true;

  /* ---------- Témoignages ---------- */
  const testimonials = document.querySelectorAll('.testimonial');
  const dotsWrap = document.getElementById('testimonialDots');
  let activeIndex = 0;
  let timer;

  testimonials.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', 'Témoignage ' + (i + 1));
    dot.addEventListener('click', () => showTestimonial(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('button');

  function showTestimonial(i) {
    testimonials[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');
    activeIndex = i;
    testimonials[activeIndex].classList.add('active');
    dots[activeIndex].classList.add('active');
    resetTimer();
  }
  function nextTestimonial() {
    showTestimonial((activeIndex + 1) % testimonials.length);
  }
  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextTestimonial, 6000);
  }
  resetTimer();

  /* ---------- Formulaire de contact (front-end uniquement) ---------- */
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = 'Merci, votre demande est bien partie. Nous revenons vers vous sous 48h ouvrées.';
    form.reset();
  });

});
