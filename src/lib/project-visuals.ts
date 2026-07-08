import type { ProjectNarrative } from "@/data/projects";

const categoryStyles: Record<string, { gradient: string; accent: string }> = {
  "IA Industrielle": {
    gradient: "from-[#2a1810] via-[#1a1010] to-[#0a0a0a]",
    accent: "text-amber-700/80",
  },
  "Computer Vision": {
    gradient: "from-[#1a0a0a] via-[#150808] to-[#0a0a0a]",
    accent: "text-primary",
  },
  "Vision & Traçabilité": {
    gradient: "from-[#101820] via-[#0d1218] to-[#0a0a0a]",
    accent: "text-slate-400",
  },
  "Sécurité événementielle": {
    gradient: "from-[#101018] via-[#0d0d14] to-[#0a0a0a]",
    accent: "text-violet-400/70",
  },
  "Fintech Métier": {
    gradient: "from-[#0a1810] via-[#0d1410] to-[#0a0a0a]",
    accent: "text-emerald-600/70",
  },
  "ERP / Odoo": {
    gradient: "from-[#0a140a] via-[#0d120d] to-[#0a0a0a]",
    accent: "text-emerald-700/70",
  },
  "IA Locale": {
    gradient: "from-[#181018] via-[#120d12] to-[#0a0a0a]",
    accent: "text-purple-400/60",
  },
  "Reconnaissance Faciale": {
    gradient: "from-[#101018] via-[#0d0d14] to-[#0a0a0a]",
    accent: "text-blue-400/60",
  },
  "IA Mobile": {
    gradient: "from-[#1a1008] via-[#140d08] to-[#0a0a0a]",
    accent: "text-orange-600/70",
  },
  IoT: {
    gradient: "from-[#101820] via-[#0d1218] to-[#0a0a0a]",
    accent: "text-cyan-600/60",
  },
  "Web Platform": {
    gradient: "from-[#180a14] via-[#120810] to-[#0a0a0a]",
    accent: "text-pink-500/60",
  },
};

export function getProjectVisual(project: ProjectNarrative) {
  return (
    categoryStyles[project.category] ?? {
      gradient: "from-surface-high via-surface to-background",
      accent: "text-primary",
    }
  );
}

export const layoutClasses: Record<ProjectNarrative["layout"], string> = {
  hero: "md:col-span-8",
  tall: "md:col-span-4",
  square: "md:col-span-5",
  wide: "md:col-span-7",
  default: "md:col-span-6",
};
