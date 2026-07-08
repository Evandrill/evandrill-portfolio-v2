export type ProjectLayout = "hero" | "tall" | "square" | "wide" | "default";

export type ProjectNarrative = {
  slug: string;
  title: string;
  category: string;
  layout: ProjectLayout;
  confidential?: boolean;
  confidentialReason?: string;
  problem: string;
  users: string;
  impact: string;
  constraints: string;
  contribution: string;
  stack: string[];
  challenges: string;
  lessons: string;
};

export const projects: ProjectNarrative[] = [
  {
    slug: "compteur-ciment",
    title: "Compteur Ciment",
    category: "IA Industrielle",
    layout: "hero",
    confidential: true,
    confidentialReason:
      "Projet réalisé pour Mira en site industriel — flux caméra, données de production et interfaces non publiables (confidentialité client et sécurité du site).",
    problem:
      "Comptage manuel imprécis des sacs de ciment dans un environnement industriel à fort volume.",
    users: "Opérateurs de production et équipes de supervision industrielle.",
    impact:
      "Automatisation du comptage en temps réel avec tableau de bord et suivi caméra HikVision. [À COMPLÉTER: gain mesurable]",
    constraints:
      "Ne compter que les sacs de l’entreprise dans un flux visuel bruité multi-objets.",
    contribution:
      "Développement backend, tests, intégration IA de détection/comptage et déploiement Docker.",
    stack: ["Node.js", "Python", "Next.js", "PostgreSQL", "SQLite", "Docker"],
    challenges:
      "Calibration du modèle IA sur conditions réelles et réduction des faux positifs.",
    lessons:
      "Importance de la boucle terrain (annotation, tests caméra, itérations rapides) pour la fiabilité industrielle.",
  },
  {
    slug: "lynxvision",
    title: "LynxVision",
    category: "Computer Vision",
    layout: "tall",
    confidential: true,
    confidentialReason:
      "Projet réalisé pour Mira en site industriel — modèles de détection, preuves et flux multi-caméras HikVision non diffusables (NDA / sécurité opérationnelle).",
    problem:
      "Besoin de détection proactive de menaces en environnement industriel multi-caméras.",
    users: "Équipes sécurité et supervision de sites industriels.",
    impact:
      "Détection en temps réel des émotions, formes humaines et armes blanches avec gestion de preuves. [À COMPLÉTER: KPI]",
    constraints:
      "Traitement temps réel avec suivi 3D et architecture multi-caméras HikVision.",
    contribution:
      "Conception backend/IA, orchestration des flux et interface de suivi.",
    stack: ["Node.js", "Python", "ConvNeXt", "Next.js", "PostgreSQL", "SQLite"],
    challenges:
      "Concilier précision de détection et latence opérationnelle.",
    lessons:
      "Pipeline CV modulaire + base de menaces structurée = meilleure maintenabilité.",
  },
  {
    slug: "fleetvision",
    title: "FleetVision",
    category: "Vision & Traçabilité",
    layout: "square",
    confidential: true,
    confidentialReason:
      "Projet réalisé pour Mira en site industriel — traçabilité véhicules et données ANPR non publiables (confidentialité client et sûreté des accès).",
    problem:
      "Détournement et non-retour de véhicules dans un contexte industriel.",
    users: "Responsables flotte, sécurité et direction des opérations.",
    impact:
      "Traçabilité entrées/sorties via identification multi-critères (plaque, châssis, forme, couleur). [À COMPLÉTER: réduction incidents]",
    constraints:
      "Fiabiliser l’identification au-delà de la plaque ANPR seule.",
    contribution:
      "Implémentation logique métier de traçabilité et intégration IA+ANPR.",
    stack: ["Node.js", "Python", "ANPR", "Next.js", "PostgreSQL", "SQLite"],
    challenges:
      "Fusion de signaux hétérogènes pour éviter collisions d’identités véhicules.",
    lessons:
      "Les systèmes de sûreté gagnent en robustesse avec des identifiants composites.",
  },
  {
    slug: "gestion-acces-oit",
    title: "Gestion des Accès OIT",
    category: "Sécurité événementielle",
    layout: "wide",
    problem:
      "Contrôler les accès par zones et niveaux pour la conférence ministérielle de l’OIT organisée au Cameroun en mars.",
    users:
      "Administrateurs de conférence, agents de sécurité, participants (journalistes, missions, ingénieurs…).",
    impact:
      "Application complète mobile + web déployée pour l’événement : badges QR par niveau et zone, monitoring des validations/échecs et mode offline 4h.",
    constraints:
      "Continuité d’exploitation malgré l’instabilité réseau pendant la conférence.",
    contribution:
      "Conception fonctionnelle et implémentation React Native / React / Node.js du contrôle d’accès pour la conférence ministérielle.",
    stack: ["React Native", "React", "Node.js", "PostgreSQL", "SQLite"],
    challenges:
      "Synchronisation des événements différés après période hors-ligne.",
    lessons:
      "Une file d’attente locale fiable est essentielle pour les systèmes critiques terrain.",
  },
  {
    slug: "fydelys",
    title: "Fydelys",
    category: "Fintech Métier",
    layout: "default",
    problem:
      "Gérer fidélité, cartes prépayées, retraits comptables et personnalisation client.",
    users: "Entreprises affiliées, équipes caisse/comptabilité, clients finaux.",
    impact:
      "Plateforme configurable par entreprise avec messages WhatsApp automatiques et recommandations IA. [À COMPLÉTER: adoption]",
    constraints:
      "Concevoir une base configurable sans modification de code pour chaque client.",
    contribution:
      "Architecture applicative et implémentation des modules transactionnels.",
    stack: ["React", "Node.js", "MongoDB", "WhatsApp"],
    challenges:
      "Garantir cohérence comptable sur flux mixtes (clients/comptables).",
    lessons:
      "La configurabilité produit doit être prévue dès le modèle de données.",
  },
  {
    slug: "invoicenet",
    title: "InvoiceNet",
    category: "ERP / Odoo",
    layout: "default",
    confidential: true,
    confidentialReason:
      "Module Odoo développé en contexte entreprise — règles de facturation, taxes et processus comptables internes non diffusables.",
    problem:
      "Automatiser la facturation et la logique comptable personnalisée dans Odoo.",
    users: "Équipes comptables et administrateurs ERP.",
    impact:
      "Calcul automatique des taxes, remises et totaux dans un module Odoo custom.",
    constraints:
      "Respecter les mécanismes Odoo tout en ajoutant des règles métier spécifiques.",
    contribution:
      "Développement du module et des règles de calcul de facturation.",
    stack: ["Python", "XML", "Odoo"],
    challenges:
      "Aligner logique métier client et extension propre de l’ERP.",
    lessons:
      "Les modules ERP gagnent en stabilité avec des extensions limitées et testées.",
  },
  {
    slug: "whatsllama",
    title: "WhatsLLaMA",
    category: "IA Locale",
    layout: "default",
    problem:
      "Automatiser des interactions WhatsApp Web avec un LLM local autonome.",
    users: "Utilisateurs avancés souhaitant automatisation et confidentialité locale.",
    impact:
      "Extension pilotée par Phi-3 (Ollama) pour workflows conversationnels automatisés. [À COMPLÉTER: cas d’usage quantifiés]",
    constraints:
      "Exécuter un LLM local avec intégration navigateur robuste.",
    contribution:
      "Développement extension + orchestration IA locale.",
    stack: ["JavaScript", "Python", "Ollama", "HTML", "CSS"],
    challenges:
      "Stabilité des interactions UI web et prompts contextuels persistants.",
    lessons:
      "L’IA locale apporte un compromis intéressant entre autonomie et privacy.",
  },
  {
    slug: "pife",
    title: "PIFE",
    category: "Reconnaissance Faciale",
    layout: "default",
    problem:
      "Retrouver une personne à partir d’une photo dans une base d’images volumineuse.",
    users: "Opérateurs d’identification et équipes techniques.",
    impact:
      "Recherche faciale avec vecteurs (pgvector) et ajout simplifié de nouveaux profils.",
    constraints:
      "Conserver précision de matching sur données hétérogènes.",
    contribution:
      "Implémentation du backend API et pipeline de recherche vectorielle.",
    stack: ["FastAPI", "Flask", "ArcFace", "DeepFace", "PostgreSQL", "pgvector", "Vue.js", "Docker"],
    challenges:
      "Optimisation de la recherche vectorielle et normalisation des embeddings.",
    lessons:
      "La qualité des embeddings et du pré-traitement domine la performance finale.",
  },
  {
    slug: "kmerfoodlens",
    title: "KmerFoodLens",
    category: "IA Mobile",
    layout: "default",
    problem:
      "Reconnaître des plats camerounais via IA sur application mobile.",
    users:
      "Utilisateurs mobiles cherchant découverte culinaire et fonctionnalités sociales.",
    impact:
      "Application conçue avec l’équipe TechaInova lors du hackathon CONIA — 4e place nationale. Prototype IA (dataset 9 classes) + social, géolocalisation restaurants, jeux et reconnaissance vocale. Projet en cours.",
    constraints:
      "Constituer un dataset local pertinent et maintenir la qualité de classification.",
    contribution:
      "Développement en équipe TechaInova (hackathon CONIA) côté application mobile React et backend IA Python.",
    stack: ["React", "Python", "Computer Vision"],
    challenges:
      "Équilibrage dataset et robustesse des prédictions sur images terrain.",
    lessons:
      "Le produit IA mobile doit itérer en continu avec des données utilisateurs réelles.",
  },
  {
    slug: "iot-faux-billet",
    title: "Détection IoT de faux billet",
    category: "IoT",
    layout: "default",
    problem:
      "Aider les personnes malvoyantes à détecter les faux billets rapidement.",
    users: "Personnes malvoyantes et aidants.",
    impact:
      "Prototype hackathon combinant caméra embarquée et ESP32 pour assistance terrain.",
    constraints:
      "Capacité de traitement limitée côté embarqué.",
    contribution:
      "Conception et prototypage du dispositif IoT + vision.",
    stack: ["ESP32", "Computer Vision", "Embedded Camera"],
    challenges:
      "Fiabiliser détection avec ressources matérielles contraintes.",
    lessons:
      "L’accessibilité impose simplicité d’usage avant sophistication technique.",
  },
  {
    slug: "women-in-ai-cm",
    title: "Women in AI Cameroon",
    category: "Web Platform",
    layout: "default",
    problem:
      "Créer un site institutionnel complet, personnalisable et monétisable.",
    users:
      "Association Women in AI Cameroon, membres, visiteurs et donateurs.",
    impact:
      "Mise en ligne du site womeninaicameroon.org avec thème custom et WooCommerce.",
    constraints:
      "Éviter dépendance à un thème générique tout en gardant la maintenabilité WordPress.",
    contribution:
      "Conception du thème sur mesure, intégrations plugin et architecture contenu.",
    stack: ["WordPress", "PHP", "WooCommerce", "FluentForms", "ACF", "CPT UI"],
    challenges:
      "Concilier personnalisation forte et administration simple pour l’équipe.",
    lessons:
      "Un thème custom bien structuré reste modifiable comme un thème natif.",
  },
];
