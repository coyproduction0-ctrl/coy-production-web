/* ---------- Données portfolio ---------- */
/* Pour ajouter un projet : un objet dans PROJECTS avec une "category"
   correspondant à un "slug" existant dans CATEGORIES. Aucune autre
   modification de code n'est nécessaire. */

const CATEGORIES = [
  { slug: 'entreprise-marques', label: 'Entreprise & Marques', cover: 'assets/img/entreprise-cover.jpg' },
  { slug: 'sport', label: 'Sport', cover: 'assets/img/sport-cover.jpg' },
  { slug: 'createurs', label: 'Créateurs', cover: 'assets/img/createurs-cover.jpg' },
  { slug: 'particuliers', label: 'Particuliers', cover: 'https://images.unsplash.com/photo-1756982477754-2c05a288f4db?auto=format&fit=crop&w=1400&q=80' },
];

const PROJECTS = [
  {
    title: 'Je me qualifie pour Roland Garros à Abidjan ?', category: 'sport',
    client: 'Sport · Florent Bax — vlog tournoi',
    desc: "Suivi immersif d'un tournoi qualificatif pour Roland Garros, entre tension de jeu et coulisses de déplacement.",
    thumb: 'https://i.ytimg.com/vi/xpRlK8qydS4/hqdefault.jpg',
    youtubeId: 'xpRlK8qydS4',
  },
  {
    title: "Premier titre de l'année !", category: 'sport',
    client: 'Sport · Florent Bax — vlog tournoi',
    desc: "Un titre décroché et raconté de l'intérieur, de l'échauffement à la remise des trophées.",
    thumb: 'https://i.ytimg.com/vi/d4K7qenk1Q0/hqdefault.jpg',
    youtubeId: 'd4K7qenk1Q0',
  },
  {
    title: 'Tempête au tournoi de Reus', category: 'sport',
    client: 'Sport · Florent Bax — vlog tournoi',
    desc: "Un tournoi perturbé par la météo, capté malgré les imprévus de dernière minute.",
    thumb: 'https://i.ytimg.com/vi/USFv6GryuRQ/hqdefault.jpg',
    youtubeId: 'USFv6GryuRQ',
  },
  {
    title: "Proche de l'abandon à Abidjan !", category: 'sport',
    client: 'Sport · Florent Bax — vlog tournoi',
    desc: "Un match à suspense où tout a basculé, filmé au plus près de la compétition.",
    thumb: 'https://i.ytimg.com/vi/fiqkdX1E2mg/hqdefault.jpg',
    youtubeId: 'fiqkdX1E2mg',
  },
  {
    title: 'Match de fou avec 50 aces au CH100 de Kigali', category: 'sport',
    client: 'Sport · Florent Bax — vlog tournoi',
    desc: "Un affrontement électrique ponctué de 50 aces, restitué dans toute son intensité.",
    thumb: 'https://i.ytimg.com/vi/qTF2VW-zrZY/hqdefault.jpg',
    youtubeId: 'qTF2VW-zrZY',
  },
  {
    title: 'Studio Léa M.', category: 'createurs',
    client: 'Créateurs · Clip & contenu artiste',
    desc: "Réalisation d'un clip et d'une série de capsules pour les réseaux, pensés pour prolonger l'univers visuel de l'artiste.",
    thumb: 'https://design.canva.ai/dFbVdyuApXL9kai',
  },
  {
    title: 'Nova — créatrice lifestyle', category: 'createurs',
    client: 'Créateurs · Série YouTube',
    desc: "Production et montage d'une série hebdomadaire, format vertical et horizontal, ligne éditoriale cohérente sur toutes les plateformes.",
    thumb: 'https://design.canva.ai/jh6co_mk5qWLG7y',
  },
  {
    title: 'BR10 — Publicité', category: 'createurs',
    client: 'Créateurs · Film publicitaire',
    desc: 'Film publicitaire réalisé pour BR10.',
    thumb: 'assets/video/br10-poster.jpg',
    videoSrc: 'assets/video/br10-pub.mp4',
  },
  {
    title: 'Devine le joueur pro !', category: 'createurs',
    client: 'Créateurs · BR10 — vidéo YouTube',
    desc: "Format de jeu tourné avec plusieurs créateurs invités, pensé pour l'engagement et le partage sur les réseaux.",
    thumb: 'https://i.ytimg.com/vi/tNCyoM-T2DE/hqdefault.jpg',
    youtubeId: 'tNCyoM-T2DE',
  },
  {
    title: 'Créateurs', category: 'createurs',
    client: 'Créateurs · Reel Instagram',
    desc: '',
    externalUrl: 'https://www.instagram.com/reel/DQ7DJMjCM_a/',
  },
  {
    title: 'Nos pires unpopular opinions', category: 'createurs',
    client: 'Créateurs · BR10 — vidéo YouTube',
    desc: "Format d'échange à plusieurs voix avec FrankoEnDetente, Klemo et Aficionado, pensé pour la complicité et le partage entre créateurs.",
    thumb: 'https://i.ytimg.com/vi/IHF-Bz-26Xc/hqdefault.jpg',
    youtubeId: 'IHF-Bz-26Xc',
  },
  {
    title: 'Groupe Verrel', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Film institutionnel',
    desc: "Film de marque présentant les équipes, les valeurs et les sites de production, tourné sur trois lieux en une semaine.",
    thumb: 'https://design.canva.ai/1upsOvdhcQM50G_',
  },
  {
    title: 'Maison Aster', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Campagne produit',
    desc: "Campagne publicitaire multi-formats pour un lancement produit, déclinée pour le web, les réseaux et le point de vente.",
    thumb: 'https://design.canva.ai/6R8iKU386WpRzof',
  },
  {
    title: 'Mariage L. & M.', category: 'particuliers',
    client: 'Particuliers · Film de mariage',
    desc: "Captation et montage d'un mariage sur la journée complète, du préparatif à la soirée, restitués dans un film souvenir sobre et émouvant.",
    thumb: 'https://design.canva.ai/4hutVSwc9yqxMcM',
  },

  /* ---- Projets d'illustration (études de cas) ---- */
  {
    title: 'Stade Lavallois — Film de reprise', category: 'sport',
    client: 'Sport · Film de club',
    desc: "Film de rentrée sportive pour un club de la région : mêlée d'images d'entraînement, de portraits de joueurs et de plans de stade pour lancer la nouvelle saison sur les réseaux.",
    thumb: 'https://images.unsplash.com/photo-1665822813496-986a2f65cee4?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: '10 km de la Mayenne — Aftermovie', category: 'sport',
    client: 'Sport · Couverture d\'événement',
    desc: "Captation d'une course populaire, du sas de départ à la ligne d'arrivée, montée en aftermovie rythmé pour l'organisateur et ses partenaires.",
    thumb: 'https://images.unsplash.com/photo-1526676537331-7747bf8278fc?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'CrossZone Laval — Campagne coaching', category: 'sport',
    client: 'Sport · Coaching & fitness',
    desc: "Série de vidéos courtes pour une salle de préparation physique : démonstrations d'exercices et témoignages d'adhérents, pensés pour la conversion sur Instagram.",
    thumb: 'https://images.unsplash.com/photo-1728486145245-d4cb0c9c3470?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Maëlys — Lancement de chaîne', category: 'createurs',
    client: 'Créateurs · Format YouTube',
    desc: "Accompagnement d'une créatrice lifestyle sur ses premières vidéos : cadrage, lumière et montage pour poser une identité visuelle dès l'épisode un.",
    thumb: 'https://images.unsplash.com/photo-1758273238952-9f9521504c7d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'KEZO — Clip « Nuit blanche »', category: 'createurs',
    client: 'Créateurs · Clip musical',
    desc: "Réalisation d'un clip pour un artiste émergent, tourné en une nuit entre live session et plans urbains, avec une direction artistique au service du morceau.",
    thumb: 'https://images.unsplash.com/photo-1585175768652-019e35bc657e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Néolia — Programme immobilier neuf', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Visite vidéo & drone',
    desc: "Visite filmée d'un programme neuf avec prises de vue drone et intérieurs, conçue pour faire vivre le bien avant même la livraison.",
    thumb: 'https://images.unsplash.com/photo-1597265543804-cbc10d077285?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Delmas & Co — Aftermovie séminaire', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Événementiel',
    desc: "Captation d'un séminaire d'entreprise sur deux jours, du discours d'ouverture aux ateliers, livrée en aftermovie prêt à partager dès le lendemain.",
    thumb: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Cortessa — Marque employeur', category: 'entreprise-marques',
    client: 'Entreprise & Marques · Témoignages collaborateurs',
    desc: "Série de portraits vidéo de collaborateurs pour renforcer l'attractivité RH d'une PME : parcours, métiers et culture d'entreprise racontés avec justesse.",
    thumb: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Baptême de Gabriel', category: 'particuliers',
    client: 'Particuliers · Film de famille',
    desc: "Film souvenir d'un baptême, capté avec discrétion sur la cérémonie et le repas, monté dans un format doux à partager avec les proches.",
    thumb: 'https://images.unsplash.com/photo-1738748712479-3ff8c7bc4c23?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Demande en mariage à Saint-Malo', category: 'particuliers',
    client: 'Particuliers · Vidéo couple',
    desc: "Captation discrète d'une demande en mariage surprise face à la mer, restituée dans une vidéo émouvante de quelques minutes.",
    thumb: 'https://images.unsplash.com/photo-1683445799252-f27732c7855e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Léa & Tom — Save the date', category: 'particuliers',
    client: 'Particuliers · Teaser mariage',
    desc: "Mini-film « save the date » tourné en amont du mariage, pensé comme une invitation vidéo à envoyer aux convives.",
    thumb: 'https://images.unsplash.com/photo-1657219091536-0e9ae35f617c?auto=format&fit=crop&w=1400&q=80',
  },
];

/* ---------- Données "Ce qu'on couvre" ---------- */
/* Pour chaque catégorie : une intro courte (SEO) et des groupes de prestations
   affichés sous forme de tags. Basé sur le détail fourni par Coy Production. */
const COVERAGE = {
  sport: {
    tagline: "Capturer l'intensité du geste sportif",
    intro: "Vidéaste sportif entre Paris et Laval : couverture de compétitions, films de clubs, portraits d'athlètes et contenus pour coachs et marques sportives, en Pays de la Loire, en Île-de-France et partout en France.",
    metaTitle: 'Production vidéo sportive à Paris & Laval — Coy Production',
    metaDescription: "Vidéaste sportif entre Paris et Laval : compétitions, clubs, athlètes, coaching et marques sportives. Devis sous 48h, déplacements en Pays de la Loire et partout en France.",
    faq: [
      { q: 'Filmez-vous des compétitions sportives dans toute la France ?', a: "Oui. Basés entre Paris et Laval, nous couvrons vos compétitions, tournois et événements sportifs en Pays de la Loire, en Île-de-France et partout en France, avec des déplacements possibles à l'international pour les grands événements." },
      { q: 'Travaillez-vous avec des clubs et associations sportives ?', a: "Oui, nous accompagnons régulièrement des clubs et associations, souvent avec des budgets contraints, en proposant des formats adaptés — résumé de match, film de saison, vidéo de recrutement — sans sacrifier la qualité." },
      { q: "Combien de temps faut-il pour recevoir les images d'une compétition ?", a: "Pour un highlight ou un résumé de match, comptez généralement 3 à 5 jours ouvrés après le tournage. Les formats plus complets, comme un film de saison, suivent un planning défini ensemble dès le brief." },
      { q: 'Proposez-vous des formats pour les athlètes en personal branding ?', a: "Oui, nous construisons avec chaque athlète un format sur-mesure — portrait, showreel, contenu réseaux — selon ses objectifs de visibilité et son calendrier sportif." },
      { q: 'Pouvez-vous filmer en extérieur, par tous les temps ?', a: "Notre matériel est adapté aux conditions extérieures : pluie, luminosité changeante ou terrain difficile ne sont pas un frein à la qualité de la captation." },
    ],
    groups: [
      { title: 'Compétitions et événements', desc: "Une action rapide, une lumière qui change en une seconde, un public à ne pas gêner : couvrir un événement sportif demande un positionnement précis et des réflexes de tournage rodés. Nous captons vos tournois, championnats, courses et galas au plus près de l'action, pour des images utilisables sur vos réseaux comme dans les archives du club.", items: ['Couverture de compétition', 'Tournois', 'Championnats', 'Meetings sportifs', 'Courses (running, cyclisme...)', 'Galas et démonstrations'], img: 'https://images.unsplash.com/photo-1608154119029-53f3c6ad12e4?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Clubs et associations', desc: "Un club vit de son collectif : ses joueurs, ses bénévoles, son histoire. Nous mettons cette dynamique en image à travers un film de présentation, une vidéo de recrutement ou un résumé de saison, avec des formats pensés pour fédérer vos licenciés et convaincre de nouveaux membres de vous rejoindre.", items: ['Film de présentation du club', 'Vidéo de recrutement', 'Vidéo de saison', 'Résumé de match (highlights)', 'Interviews joueurs et entraîneurs', 'Reportage immersion'], img: 'https://images.unsplash.com/photo-1665822813496-986a2f65cee4?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Athlètes', desc: "Derrière chaque performance, un parcours, une discipline, une personnalité. Nous construisons avec chaque athlète une image forte — portrait, personal branding, showreel ou documentaire court — qui parle autant à ses partenaires qu'à sa communauté.", items: ["Portrait d'athlète", 'Personal branding', 'Showreel / highlight reel', "Shooting d'entraînement", 'Préparation de compétition', 'Documentaire court'], img: 'https://images.unsplash.com/photo-1758922769578-68c5ba000d87?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Coaching & fitness', desc: "Vendre un programme de coaching en ligne tient souvent à une chose : donner confiance en quelques secondes de vidéo. Nous produisons vos démonstrations d'exercices, publicités et témoignages clients dans un format clair et efficace, pensé pour convertir sur les réseaux sociaux.", items: [ "Vidéos d'exercices", 'Programmes en ligne', 'Contenus réseaux sociaux', 'Publicités pour coach sportif', 'Témoignages clients'], img: 'https://images.unsplash.com/photo-1728486145245-d4cb0c9c3470?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Marques sportives', desc: "Une marque sportive se juge autant sur le terrain que sur les réseaux. Nous produisons vos publicités produits, campagnes de lancement et contenus lifestyle avec l'énergie et l'esthétique qui donnent envie — pour marquer les esprits, pas seulement remplir un calendrier éditorial.", items: ['Publicités produits', 'Campagnes marketing', 'Lancement de collection', 'Tests produits', 'Contenus UGC', 'Lifestyle sportif'], img: 'https://images.unsplash.com/photo-1587296104393-8db6cda4418d?auto=format&fit=crop&w=1400&q=80' },
    ],
  },
  createurs: {
    tagline: 'Donner corps à votre univers créatif',
    intro: "Production vidéo pour créateurs de contenu, entre Paris et Laval : vlogs, clips musicaux, formats YouTube et contenus pensés pour chaque plateforme, avec des déplacements dans toute la France.",
    metaTitle: 'Production vidéo pour créateurs de contenu — Coy Production',
    metaDescription: "Vlogs, YouTube, clips musicaux, contenus pour artistes et créateurs digitaux : une production pensée pour chaque plateforme, entre Paris, Laval et toute la France.",
    faq: [
      { q: 'Travaillez-vous avec des créateurs qui débutent ou uniquement des profils établis ?', a: "Nous accompagnons aussi bien des créateurs en développement que des profils confirmés — l'objectif est toujours d'affiner un univers visuel cohérent, quel que soit le nombre d'abonnés." },
      { q: 'Pouvez-vous produire plusieurs formats à partir d’un seul tournage (YouTube, réels, TikTok) ?', a: "Oui, c'est une demande fréquente : une même journée de tournage peut être déclinée en vidéo YouTube longue, plusieurs reels et des shorts, pour optimiser le temps de tournage et le budget." },
      { q: 'Assurez-vous le montage ou uniquement le tournage ?', a: "Les deux. Nous proposons un accompagnement complet, du tournage au montage final, mais pouvons aussi intervenir uniquement sur une étape si vous avez déjà une équipe en place." },
      { q: 'Pouvez-vous filmer un clip musical avec un budget limité ?', a: "Oui, nous adaptons le format — lieu, équipe, durée de tournage — à votre budget tout en préservant une direction artistique forte et cohérente avec votre univers musical." },
      { q: 'Intervenez-vous en dehors de Paris et de la région parisienne ?', a: "Oui, nous nous déplaçons dans toute la France pour les tournages de créateurs, notamment en Pays de la Loire où nous sommes également implantés, à Laval." },
    ],
    groups: [
      { title: 'Influenceurs', desc: "Quelques secondes : c'est le temps qu'un contenu a pour retenir l'attention avant le swipe suivant. Nous tournons et montons vos vlogs, reels et shorts avec ce rythme en tête, sans sacrifier la sincérité qui fait la différence entre un contenu vu et un contenu qui engage.", items: ['Vlogs', 'Reels Instagram', 'TikTok', 'Shorts YouTube', 'Behind the scenes', 'Daily vlog', 'Contenu lifestyle', 'Voyages'], img: 'https://images.unsplash.com/photo-1758273239210-59fea02475eb?auto=format&fit=crop&w=1400&q=80' },
      { title: 'YouTube', desc: "Un format YouTube qui dure dans le temps se construit, il ne s'improvise pas. Nous accompagnons vos tournages multicaméra, vos podcasts filmés et vos mini-documentaires du concept jusqu'au montage final, avec la rigueur nécessaire pour tenir une ligne éditoriale sur la durée.", items: ['Montage vidéo', 'Tournage multicaméra', 'Podcasts filmés', 'Interviews', 'Mini-documentaires', 'Challenges', 'FAQ'], img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Musique', desc: "Un clip réussi ne concurrence jamais la musique, il la sert. Nous construisons une direction artistique cohérente avec votre univers sonore, du clip musical à la captation de concert, en passant par la live session et le teaser de sortie.", items: ['Clip musical', 'Live session', 'Teaser de sortie', 'Visualizer', 'Captation de concert', 'Making-of'], img: 'https://images.unsplash.com/photo-1585175768652-019e35bc657e?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Artistes', desc: "Filmer une démarche artistique demande de la patience : entrer dans l'atelier, comprendre le geste, laisser place au silence quand il le faut. Nous produisons portraits, films d'atelier et documentaires créatifs avec cette justesse, pour raconter votre travail sans le trahir.", items: ['Portrait artistique', "Bande-annonce d'exposition", "Film d'atelier", 'Documentaire créatif', 'Performance artistique'], img: 'https://images.unsplash.com/photo-1781545385260-9f321f8d3f78?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Créateurs digitaux', desc: "Une formation en ligne ou une masterclass se vend sur la clarté autant que sur le fond. Nous produisons des contenus pédagogiques soignés — formation vidéo, masterclass, présentation de produits — pour donner à votre offre la crédibilité visuelle qu'elle mérite dès le lancement.", items: ['Formation vidéo', 'Masterclass', 'Publicités', 'Présentation de produits', 'Lancement de marque'], img: 'https://images.unsplash.com/photo-1610716632424-4d45990bcd48?auto=format&fit=crop&w=1400&q=80' },
    ],
  },
  'entreprise-marques': {
    tagline: 'Raconter votre marque en image',
    intro: "Production vidéo corporate et publicitaire pour entreprises et marques, entre Paris et Laval : films institutionnels, campagnes marketing, événementiel et contenus produits, en Île-de-France, en Pays de la Loire et partout en France.",
    metaTitle: 'Production vidéo corporate & marketing — Coy Production',
    metaDescription: "Films institutionnels, campagnes marketing, événementiel et contenus produits pour entreprises et marques, entre Paris, Laval et toute la France. Devis sous 48h.",
    faq: [
      { q: 'Quel est le délai moyen pour un film corporate ?', a: "Comptez en moyenne 3 à 6 semaines entre le brief et la livraison finale, selon la complexité du projet — nombre de lieux, interviews, animations graphiques." },
      { q: 'Travaillez-vous avec des PME ou uniquement de grandes entreprises ?', a: "Nous accompagnons des structures de toutes tailles, de la PME familiale au grand groupe, en adaptant le format et le budget à vos objectifs de communication." },
      { q: 'Pouvez-vous couvrir un événement professionnel sur une journée complète ?', a: "Oui, nous proposons une captation complète de vos événements — conférences, séminaires, lancements de produit — avec une livraison rapide d'un aftermovie prêt à partager." },
      { q: 'Livrez-vous les fichiers dans des formats adaptés à chaque réseau social ?', a: "Oui, chaque projet est exporté dans les formats nécessaires (carré, vertical, horizontal) pour LinkedIn, Instagram, YouTube ou vos supports internes." },
      { q: 'Intervenez-vous à Paris et en Île-de-France pour les entreprises ?', a: "Oui, Paris et l'Île-de-France font partie de nos zones d'intervention régulières, au même titre que la Mayenne et les Pays de la Loire." },
    ],
    groups: [
      { title: 'Communication institutionnelle', desc: "Un film d'entreprise réussi donne à voir des visages, pas seulement un logo. Nous produisons vos films institutionnels, présentations d'équipe et vidéos de recrutement pour donner une image humaine et professionnelle à votre structure — celle que vos futurs clients et candidats retiennent.", items: ["Film d'entreprise", "Présentation de l'équipe", 'Vidéo corporate', 'Vidéo de recrutement', "Culture d'entreprise", 'Visite des locaux'], img: 'https://images.unsplash.com/photo-1779700210487-a01758a3c55a?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Marketing', desc: "Chaque plateforme a ses propres codes de lecture. Nous concevons vos publicités, spots promotionnels et campagnes digitales en pensant directement aux formats natifs de Meta, TikTok et YouTube, pour des contenus qui convertissent plutôt que d'être simplement vus.", items: ['Publicité', 'Spot promotionnel', 'Lancement de produit', 'Campagne digitale', 'Vidéo pour réseaux sociaux', 'Publicité Meta / TikTok / YouTube'], img: 'https://images.unsplash.com/photo-1758876204260-bdb299fa4374?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Événementiel', desc: "Un événement professionnel ne se refait pas : la captation doit être fiable du premier au dernier instant. Nous couvrons vos conférences, séminaires, soirées d'entreprise et lancements de produit dans leur intégralité, jusqu'à la livraison d'un aftermovie prêt à partager dès le lendemain.", items: ['Conférences', 'Salons professionnels', 'Séminaires', "Soirées d'entreprise", 'Lancement de produit', 'Inaugurations', 'Galas et cérémonies', 'Aftermovie'], img: 'https://images.unsplash.com/photo-1784542471032-9ba2b8386ca7?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Produits', desc: "Avant d'acheter, un client veut voir le produit en mouvement et entendre d'autres avis. Nous produisons vos packshots vidéo, démonstrations, tutoriels et témoignages clients dans cet objectif précis : lever les derniers doutes avant la conversion.", items: ['Packshot vidéo', 'Démonstration produit', 'Tutoriels', 'Unboxing', 'Témoignages clients', 'Cas clients'], img: 'https://images.unsplash.com/photo-1780943004195-3bd30f748872?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Immobilier', desc: "La première visite d'un bien se fait aujourd'hui à l'écran. Nous réalisons vos visites vidéo, prises de vue drone et présentations de programmes neufs pour faire vivre un lieu et provoquer l'envie, bien avant la visite physique.", items: ['Visite vidéo', 'Drone', "Présentation d'agence", 'Programme immobilier neuf', 'Hôtels', 'Restaurants'], img: 'https://images.unsplash.com/photo-1597265543804-cbc10d077285?auto=format&fit=crop&w=1400&q=80' },
      { title: 'RH', desc: "Attirer les bons talents demande de montrer, pas seulement de décrire, votre culture d'entreprise. Nous produisons vos témoignages collaborateurs, contenus de marque employeur et vidéos d'onboarding pour renforcer à la fois votre attractivité externe et l'engagement de vos équipes en place.", items: ['Témoignages collaborateurs', 'Marque employeur', 'Vidéo onboarding', 'Formation interne', 'E-learning'], img: 'https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Réseaux sociaux', desc: "Publier régulièrement sans y passer vos journées : c'est l'équation que nous résolvons avec une banque de contenus mensuelle — reels, stories, capsules vidéo — tournée en une seule session pour alimenter vos réseaux plusieurs semaines durant.", items: ['Banque de contenus mensuelle', 'Reels', 'Stories', 'Interviews', 'Capsules vidéo'], img: 'https://images.unsplash.com/photo-1612130536441-95ece5dcbb86?auto=format&fit=crop&w=1400&q=80' },
    ],
  },
  particuliers: {
    tagline: 'Des souvenirs filmés avec justesse',
    intro: "Films de mariage, naissances et événements de famille en Mayenne et en Pays de la Loire, avec des déplacements partout en France : des souvenirs filmés avec soin, sobres et sincères.",
    metaTitle: 'Film de mariage & souvenirs de famille — Coy Production',
    metaDescription: "Films de mariage, naissances et événements de famille en Mayenne, en Pays de la Loire et partout en France : des souvenirs filmés avec soin, sobres et sincères.",
    faq: [
      { q: "Combien de temps à l'avance faut-il réserver un film de mariage ?", a: "Nous recommandons de réserver 6 à 12 mois à l'avance, surtout pour les mariages en période estivale, afin de garantir la disponibilité de la date." },
      { q: 'Le film de mariage est-il personnalisable selon nos envies ?', a: "Oui, chaque film est construit avec vous : durée, moments à privilégier, musique, ton sobre, festif ou émouvant — rien n'est standardisé." },
      { q: 'Proposez-vous des formats courts en plus du film complet ?', a: "Oui, en complément du film intégral, nous proposons un teaser et un highlight de quelques minutes, pensés pour être partagés facilement avec vos proches." },
      { q: 'Intervenez-vous en dehors de la Mayenne et des Pays de la Loire ?', a: "Oui, nous nous déplaçons dans toute la France pour les mariages et événements privés, avec des frais de déplacement calculés selon la distance." },
      { q: "Combien de temps faut-il pour recevoir le film final après l'événement ?", a: "Comptez généralement 4 à 8 semaines pour un film de mariage complet, selon la période de l'année et la complexité du montage." },
    ],
    groups: [
      { title: 'Mariages', desc: "Le jour J passe vite, souvent trop vite pour en garder tous les détails en mémoire. Nous racontons votre histoire avec sobriété et émotion — film complet, teaser, highlight, love story avant mariage — du premier regard au brunch du lendemain, pour pouvoir la revivre autant de fois que vous le souhaitez.", items: ['Film de mariage', 'Teaser', 'Highlight', 'Vidéo complète', 'Love story avant mariage', 'Brunch du lendemain'], img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Famille', desc: "Les premiers instants d'une vie ne se rejouent pas. Nous filmons grossesse, naissance, baptême et anniversaires d'enfant avec douceur et discrétion, pour garder une trace sincère de ce qui compte, sans jamais forcer un moment.", items: ['Grossesse', 'Naissance', 'Baptême', 'Gender reveal', 'Baby shower', "Anniversaire d'enfant"], img: 'https://images.unsplash.com/photo-1764267703908-b7d151e22c13?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Événements', desc: "Une fête de famille réussie ne s'arrête pas quand la caméra arrive. Nous captons l'ambiance et les instants complices de vos anniversaires, communions et soirées privées en restant discrets, pour que vos proches oublient vite notre présence.", items: ['Anniversaire', 'Soirée privée', 'Communion', 'Bar mitzvah', 'Fête de famille', 'Cousinade'], img: 'https://images.unsplash.com/photo-1609614350505-7bb4dbdd5e62?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Couples', desc: "Les grandes étapes d'un couple méritent mieux qu'un selfie. Nous immortalisons vos séances couple, demandes en mariage et renouvellements de vœux avec des images naturelles, loin des poses forcées.", items: ['Séance couple', 'Demande en mariage', 'Fiançailles', 'Saint-Valentin', 'Renouvellement de vœux'], img: 'https://images.unsplash.com/photo-1756804528328-8ac54d25b49e?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Portraits', desc: "Une bonne image professionnelle en dit souvent plus qu'un long CV. Nous réalisons vos portraits personnels, professionnels et CV vidéo avec une mise en image soignée, pensée pour vos réseaux, votre book ou vos candidatures.", items: ['Portrait personnel', 'CV vidéo', 'Portrait professionnel', 'Book artistique', 'Réseaux sociaux'], img: 'https://images.unsplash.com/photo-1532170579297-281918c8ae72?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Souvenirs', desc: "Des heures de rushes qui dorment dans un téléphone ne racontent aucune histoire. Nous transformons vos souvenirs de vacances, journaux de voyage ou hommages vidéo en un montage sobre et structuré, pensé pour être revu pendant des années sans jamais lasser.", items: ['Film de vacances', 'Journal de voyage', 'Documentaire familial', 'Hommage vidéo', 'Montage de souvenirs'], img: 'https://images.unsplash.com/photo-1453828423292-392a660a502f?auto=format&fit=crop&w=1400&q=80' },
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
    description: "Agence de production vidéo et photo entre Paris et Laval (Mayenne) : films pour le sport, les créateurs, les entreprises et les particuliers. Devis sous 48h, déplacements partout en France.",
  },
  portfolio: {
    title: 'Portfolio — Plus de 50 projets vidéo | Coy Production',
    description: "Découvrez nos réalisations vidéo et photo pour le sport, les créateurs, les entreprises et les particuliers, filmées entre Paris, Laval et partout en France.",
  },
  expertises: {
    title: 'Nos expertises — Entreprises, Sport, Créateurs, Particuliers',
    description: "Production vidéo et photo pour les entreprises & marques, le sport, les créateurs de contenu et les particuliers. Basés entre Paris et Laval, présents partout en France.",
  },
  'a-propos': {
    title: 'À propos — Hugo Coyard, fondateur de Coy Production',
    description: "Hugo Coyard, fondateur de Coy Production : vidéaste indépendant entre Paris et Laval, interlocuteur unique qui s'entoure des bons profils selon les tournages. Formation en communication, expérience terrain.",
  },
  contact: {
    title: 'Contact — Devis vidéo gratuit sous 48h | Coy Production',
    description: "Contactez Coy Production, studio de production vidéo entre Paris et Laval. Devis gratuit sous 48h, sans engagement, pour vos projets sport, entreprise, créateurs et particuliers.",
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
    if (youtubeId) {
      modalMedia.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&autoplay=1" title="${item.dataset.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
    } else if (videoSrc) {
      modalMedia.innerHTML = `<video src="${videoSrc}" controls autoplay playsinline></video>`;
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
    <article class="${cls}" style="animation-delay:${(i % 9) * 60}ms" tabindex="0" data-title="${p.title}" data-client="${p.client}" data-desc="${p.desc}"${p.youtubeId ? ` data-youtube="${p.youtubeId}"` : ''}${p.videoSrc ? ` data-video="${p.videoSrc}"` : ''}>
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
    document.querySelectorAll('.coverage-row.reveal').forEach(el => io.observe(el));

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
    const finish = () => {
      if (onReady) onReady();
      allViews.forEach(v => { v.hidden = (v !== view); });
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
        window.scrollTo(0, 0);
      });
      return;
    }

    if (hash.startsWith('#/portfolio')) {
      showView(viewPortfolio, () => {
        renderPortfolio('all');
        setFAQSchema(null);
        setPageMeta(PAGE_META.portfolio.title, PAGE_META.portfolio.description);
        window.scrollTo(0, 0);
      });
      return;
    }

    if (hash.startsWith('#/couvre/')) {
      const slug = hash.replace('#/couvre/', '');
      showView(viewCoverage, () => { renderCoverageDetail(slug); window.scrollTo(0, 0); });
      return;
    }

    if (hash.startsWith('#/a-propos')) {
      showView(viewAbout, () => {
        setFAQSchema(null);
        setPageMeta(PAGE_META['a-propos'].title, PAGE_META['a-propos'].description);
        window.scrollTo(0, 0);
      });
      return;
    }

    if (hash.startsWith('#/expertises')) {
      showView(viewExpertises, () => {
        renderExpertisesPage();
        setFAQSchema(null);
        setPageMeta(PAGE_META.expertises.title, PAGE_META.expertises.description);
        window.scrollTo(0, 0);
      });
      return;
    }

    if (hash.startsWith('#/contact')) {
      showView(viewContact, () => {
        renderFAQList(contactPageFaqList, FAQ_CONTACT);
        setFAQSchema(FAQ_CONTACT);
        setPageMeta(PAGE_META.contact.title, PAGE_META.contact.description);
        window.scrollTo(0, 0);
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
      window.scrollTo(0, 0);
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
