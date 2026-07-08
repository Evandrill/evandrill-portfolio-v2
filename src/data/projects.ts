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
      "Projet réalisé pour Mira en site industriel : flux caméra, données de production et interfaces de suivi restent non publiables pour des raisons de confidentialité client et de sécurité du site.",
    problem:
      "Le comptage des sacs de ciment devait être fiabilisé dans un environnement industriel surveillé par caméras, avec le risque de confondre les objets présents dans le flux.",
    users: "Opérateurs de production, équipes de supervision et responsables de suivi industriel.",
    impact:
      "Le projet automatise le comptage en temps réel et centralise le suivi dans un tableau de bord connecté aux caméras HikVision. [À COMPLÉTER: gain mesurable]",
    constraints:
      "Le modèle devait distinguer uniquement les sacs de l’entreprise dans des scènes industrielles visuellement chargées.",
    contribution:
      "J’ai contribué au backend, aux tests, à l’intégration du modèle de détection/comptage et au déploiement automatisé avec Docker.",
    stack: ["Node.js", "Python", "Next.js", "PostgreSQL", "SQLite", "Docker"],
    challenges:
      "Le principal défi était de calibrer l’IA sur des conditions caméra réelles tout en réduisant les faux positifs.",
    lessons:
      "Ce projet confirme qu’en vision industrielle, la fiabilité vient d’une boucle terrain courte : annotation, essais caméra et itérations ciblées.",
  },
  {
    slug: "lynxvision",
    title: "LynxVision",
    category: "Computer Vision",
    layout: "tall",
    confidential: true,
    confidentialReason:
      "Projet réalisé pour Mira en site industriel : modèles de détection, preuves et flux multi-caméras HikVision ne sont pas diffusables pour des raisons de NDA et de sécurité opérationnelle.",
    problem:
      "Les équipes devaient détecter plus tôt les menaces potentielles dans un environnement industriel suivi par plusieurs caméras.",
    users: "Équipes de sécurité, opérateurs de supervision et responsables de sites industriels.",
    impact:
      "La solution regroupe détection en temps réel des émotions, formes humaines et armes blanches, avec gestion des preuves. [À COMPLÉTER: KPI]",
    constraints:
      "L’architecture devait maintenir un suivi temps réel, 3D et multi-caméras sur des flux HikVision.",
    contribution:
      "J’ai travaillé sur la partie IA, le backend, l’orchestration des flux et les interfaces de suivi.",
    stack: ["Node.js", "Python", "ConvNeXt", "Next.js", "PostgreSQL", "SQLite"],
    challenges:
      "Le défi central consistait à préserver la précision de détection sans introduire une latence incompatible avec l’usage terrain.",
    lessons:
      "Une base de menaces structurée et un pipeline computer vision modulaire rendent ce type de système plus maintenable.",
  },
  {
    slug: "fleetvision",
    title: "FleetVision",
    category: "Vision & Traçabilité",
    layout: "square",
    confidential: true,
    confidentialReason:
      "Projet réalisé pour Mira en site industriel : données de traçabilité, flux ANPR et informations d’accès véhicules restent confidentiels pour protéger le client et la sûreté du site.",
    problem:
      "L’entreprise devait mieux suivre les entrées et sorties de véhicules, notamment pour prévenir les détournements et les non-retours.",
    users: "Responsables de flotte, équipes de sécurité et direction des opérations.",
    impact:
      "La traçabilité repose sur une identification multi-critères : plaque, numéro de châssis, forme et couleur du véhicule. [À COMPLÉTER: réduction incidents]",
    constraints:
      "L’identification devait rester fiable même lorsque la plaque seule ne suffisait pas.",
    contribution:
      "J’ai contribué à la logique de traçabilité et à l’intégration entre reconnaissance véhicule, ANPR, suivi 3D et multi-caméras.",
    stack: ["Node.js", "Python", "ANPR", "Next.js", "PostgreSQL", "SQLite"],
    challenges:
      "Le point sensible était la fusion de plusieurs signaux visuels pour éviter les collisions d’identité entre véhicules.",
    lessons:
      "Les systèmes de sûreté deviennent plus robustes lorsqu’ils combinent plusieurs identifiants plutôt que de dépendre d’un seul signal.",
  },
  {
    slug: "gestion-acces-oit",
    title: "Gestion des Accès OIT",
    category: "Sécurité événementielle",
    layout: "wide",
    problem:
      "La conférence ministérielle de l’OIT organisée au Cameroun en mars nécessitait un contrôle des accès par zones et niveaux d’autorisation.",
    users:
      "Administrateurs de la conférence, agents de sécurité et participants aux profils variés : journalistes, chargés de mission, ingénieurs et autres intervenants.",
    impact:
      "La solution couvre l’administration web des badges QR, le scan mobile sur le terrain, le suivi des entrées et les échecs de validation en temps réel, avec un mode hors ligne de 4h.",
    constraints:
      "Le système devait rester utilisable pendant la conférence même en cas d’indisponibilité temporaire du réseau.",
    contribution:
      "J’ai développé l’application mobile React Native, l’interface web React et le backend Node.js de gestion des accès.",
    stack: ["React Native", "React", "Node.js", "PostgreSQL", "SQLite"],
    challenges:
      "Le défi majeur était de gérer les validations hors ligne dans une file d’attente locale puis de les synchroniser proprement au retour de la connexion.",
    lessons:
      "Pour un système événementiel critique, la continuité d’usage dépend autant du mode offline que de l’interface principale.",
  },
  {
    slug: "fydelys",
    title: "Fydelys",
    category: "Fintech Métier",
    layout: "default",
    problem:
      "Les entreprises avaient besoin d’une plateforme pour gérer cartes de fidélité, cartes de type débit, retraits comptables et personnalisation client.",
    users: "Entreprises affiliées, équipes de caisse, comptables et clients finaux.",
    impact:
      "La plateforme centralise transactions, messages WhatsApp automatiques, calculs comptables de base et recommandations fondées sur les habitudes d’achat. [À COMPLÉTER: adoption]",
    constraints:
      "Chaque entreprise devait pouvoir configurer son usage sans modification directe du code.",
    contribution:
      "J’ai conçu l’architecture applicative et implémenté les modules liés aux transactions, à la configuration entreprise et aux notifications.",
    stack: ["React", "Node.js", "MongoDB", "WhatsApp"],
    challenges:
      "Le défi était de maintenir une cohérence comptable sur des flux mêlant achats clients, retraits et mouvements de caisse.",
    lessons:
      "La configurabilité métier doit être pensée dès le modèle de données pour éviter de multiplier les adaptations spécifiques.",
  },
  {
    slug: "invoicenet",
    title: "InvoiceNet",
    category: "ERP / Odoo",
    layout: "default",
    confidential: true,
    confidentialReason:
      "Module Odoo développé en contexte entreprise : règles de facturation, taxes et processus comptables internes ne peuvent pas être exposés publiquement.",
    problem:
      "L’entreprise devait automatiser une logique de facturation personnalisée directement dans son environnement Odoo.",
    users: "Équipes comptables, administrateurs ERP et utilisateurs internes impliqués dans la facturation.",
    impact:
      "Le module automatise les calculs de taxes, remises et totaux de factures selon des règles métier spécifiques.",
    constraints:
      "Les extensions devaient rester alignées avec les mécanismes Odoo tout en intégrant les besoins comptables internes.",
    contribution:
      "J’ai développé le module Odoo en Python/XML et implémenté les règles de calcul liées à la facturation.",
    stack: ["Python", "XML", "Odoo"],
    challenges:
      "Le principal enjeu était de traduire la logique comptable client sans fragiliser le fonctionnement natif de l’ERP.",
    lessons:
      "Sur un ERP, une extension ciblée et bien isolée vaut mieux qu’une personnalisation trop large.",
  },
  {
    slug: "whatsllama",
    title: "WhatsLLaMA",
    category: "IA Locale",
    layout: "default",
    problem:
      "Le projet visait à automatiser des interactions WhatsApp Web à l’aide d’un LLM exécuté localement.",
    users: "Utilisateurs avancés cherchant à automatiser WhatsApp Web tout en gardant le traitement IA en local.",
    impact:
      "L’extension de navigateur s’appuie sur Phi-3 via Ollama pour piloter des workflows conversationnels automatisés. [À COMPLÉTER: cas d’usage quantifiés]",
    constraints:
      "L’intégration devait combiner exécution locale du modèle, contrôle du navigateur et stabilité sur WhatsApp Web.",
    contribution:
      "J’ai développé l’extension et l’orchestration entre WhatsApp Web, le code navigateur et le LLM local.",
    stack: ["JavaScript", "Python", "Ollama", "HTML", "CSS"],
    challenges:
      "Le défi était de maintenir des interactions fiables avec une interface web évolutive tout en conservant un contexte utile pour le modèle.",
    lessons:
      "L’IA locale impose plus de contraintes d’intégration, mais donne un meilleur contrôle sur l’autonomie et la confidentialité.",
  },
  {
    slug: "pife",
    title: "PIFE",
    category: "Reconnaissance Faciale",
    layout: "default",
    problem:
      "Le projet devait permettre de retrouver une personne précise à partir d’une photo dans une base d’images.",
    users: "Opérateurs d’identification et équipes techniques chargées de gérer les profils.",
    impact:
      "La recherche faciale s’appuie sur des embeddings et pgvector, avec un ajout de profils à partir d’informations et de plusieurs photos lorsque possible.",
    constraints:
      "Le système devait conserver une recherche pertinente malgré la variabilité des photos et des profils ajoutés.",
    contribution:
      "J’ai implémenté les API, le pipeline de reconnaissance faciale et la recherche vectorielle avec PostgreSQL/pgvector.",
    stack: ["FastAPI", "Flask", "ArcFace", "DeepFace", "PostgreSQL", "pgvector", "Vue.js", "Docker"],
    challenges:
      "Le défi portait sur la qualité des embeddings, leur normalisation et la rapidité de recherche dans la base.",
    lessons:
      "En reconnaissance faciale, la performance finale dépend fortement de la préparation des images et de la qualité des vecteurs stockés.",
  },
  {
    slug: "kmerfoodlens",
    title: "KmerFoodLens",
    category: "IA Mobile",
    layout: "default",
    problem:
      "Le projet répond au besoin de reconnaître des plats camerounais à partir d’images dans une application mobile.",
    users:
      "Utilisateurs mobiles intéressés par la découverte culinaire, les restaurants proches et les fonctionnalités sociales.",
    impact:
      "Conçue avec l’équipe TechaInova lors du hackathon CONIA, l’application a obtenu la 4e place nationale et combine IA sur 9 classes, social, jeux, restaurants proches et reconnaissance vocale.",
    constraints:
      "Le projet dépend d’un dataset local de plats camerounais suffisamment représentatif pour maintenir la qualité de classification.",
    contribution:
      "J’ai contribué avec l’équipe TechaInova au développement mobile React, au backend Python et à l’intégration du modèle de reconnaissance.",
    stack: ["React", "Python", "Computer Vision"],
    challenges:
      "Le défi principal était d’équilibrer le dataset et de rendre les prédictions robustes sur des images prises en conditions réelles.",
    lessons:
      "Un produit IA mobile progresse par itérations courtes entre expérience utilisateur, collecte de données et amélioration du modèle.",
  },
  {
    slug: "iot-faux-billet",
    title: "Détection IoT de faux billet",
    category: "IoT",
    layout: "default",
    problem:
      "Le projet visait à aider les personnes malvoyantes à identifier de faux billets avec un dispositif simple d’usage.",
    users: "Personnes malvoyantes et personnes pouvant les assister au quotidien.",
    impact:
      "Le prototype de hackathon associe une caméra embarquée et une carte ESP32 pour apporter une assistance directement sur le terrain.",
    constraints:
      "La solution devait composer avec les limites de calcul et d’intégration propres à l’embarqué.",
    contribution:
      "J’ai participé à la conception du dispositif et au prototypage de la partie IoT/vision.",
    stack: ["ESP32", "Computer Vision", "Embedded Camera"],
    challenges:
      "Le défi était de rendre la détection exploitable malgré des ressources matérielles limitées.",
    lessons:
      "Pour un outil d’accessibilité, la simplicité d’usage doit guider les choix techniques dès le prototype.",
  },
  {
    slug: "women-in-ai-cm",
    title: "Women in AI Cameroon",
    category: "Web Platform",
    layout: "default",
    problem:
      "L’association Women in AI Cameroon avait besoin d’un site institutionnel complet, personnalisable et adapté à ses contenus.",
    users:
      "Équipe de l’association, membres, visiteurs, apprenants et donateurs.",
    impact:
      "Le site womeninaicameroon.org repose sur un thème WordPress sur mesure, avec WooCommerce pour les paiements et dons.",
    constraints:
      "Le thème devait être spécifique à l’association tout en restant modifiable comme un thème WordPress classique.",
    contribution:
      "J’ai créé le thème personnalisé, structuré les contenus et intégré WooCommerce, FluentForms, The Events Calendar, LearnPress, ACF et CPT UI.",
    stack: ["WordPress", "PHP", "WooCommerce", "FluentForms", "ACF", "CPT UI"],
    challenges:
      "Le défi était de combiner une identité visuelle dédiée avec une administration simple pour l’équipe.",
    lessons:
      "Un thème WordPress custom reste durable lorsqu’il respecte les conventions de la plateforme et les habitudes d’administration.",
  },
];
