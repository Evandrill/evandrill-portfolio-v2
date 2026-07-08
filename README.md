# Portfolio — Bikele Messanga Junior Lamour

Portfolio personnel (one-pager) de **Bikele Messanga Junior Lamour**, ingénieur Fullstack & IA basé à Yaoundé, Cameroun.

Le site présente un parcours orienté impact autour de la Computer Vision, du backend Python/FastAPI et des interfaces web modernes (Next.js/React), avec des réalisations en contextes industriels, événementiels, ERP et applications mobiles.

## Aperçu

Application web construite avec un design system « Nocturne Noir / Dark Tech » :

- Noir OLED `#0a0a0a`, rouge accent `#991b1b`
- Typographies Newsreader (serif), Geist (sans) et JetBrains Mono
- Overlay de grain, angles nets, animations au défilement
- Grille de projets en bento avec modale d'étude de cas détaillée

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **UI** : Tailwind CSS v4, shadcn/ui
- **Animations** : Framer Motion
- **Langage** : TypeScript
- **Gestionnaire de paquets** : pnpm

## Démarrage en local

Installer les dépendances puis lancer le serveur de développement :

```bash
pnpm install
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `pnpm dev` | Serveur de développement |
| `pnpm build` | Build de production |
| `pnpm start` | Démarrage du build de production |
| `pnpm lint` | Analyse ESLint |

## Structure du projet

```
src/
├── app/                  # App Router, layout, styles globaux
├── components/
│   ├── layout/           # En-tête, pied de page, overlay de grain
│   ├── projects/         # Cartes projets et modale d'étude de cas
│   ├── sections/         # Hero, À propos, Stack, Projets, Contact
│   └── ui/               # Composants shadcn/ui
├── data/                 # Profil et données des projets
└── lib/                  # Utilitaires et visuels des projets
```

## Déploiement

Le projet est optimisé pour un déploiement sur [Vercel](https://vercel.com). Il suffit d'importer le dépôt : le framework Next.js est détecté automatiquement.

---

Conçu et développé par Bikele Messanga Junior Lamour.
