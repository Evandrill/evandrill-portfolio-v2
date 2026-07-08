import { Cloud, Database, Layers, Palette, Terminal } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import { profile } from "@/data/profile";

const bentoItems = [
  {
    icon: Terminal,
    index: "01",
    title: "Langages & Backend",
    description: "Python, FastAPI, Node.js — APIs robustes et pipelines IA.",
    className: "md:col-span-8 lg:col-span-6",
    highlight: false,
  },
  {
    icon: Layers,
    index: "02",
    title: "Next.js / React",
    description: "Interfaces performantes, SSR et expériences web modernes.",
    className: "md:col-span-4 lg:col-span-3",
    highlight: false,
  },
  {
    icon: Palette,
    index: "03",
    title: "Computer Vision",
    description: "Détection, reconnaissance et suivi multi-caméras en temps réel.",
    className: "md:col-span-6 lg:col-span-3",
    highlight: true,
  },
  {
    icon: Database,
    index: "04",
    title: "Données & Persistance",
    description: "PostgreSQL, SQLite, MongoDB, pgvector pour la recherche vectorielle.",
    className: "md:col-span-6 lg:col-span-4",
    highlight: false,
  },
  {
    icon: Cloud,
    index: "05",
    title: "DevOps & Déploiement",
    description: "Docker, CI/CD, déploiements automatisés et monitoring.",
    className: "md:col-span-12 lg:col-span-8",
    highlight: false,
  },
];

export function TechStack() {
  return (
    <SectionContainer
      id="expertise"
      className="border-y border-white/5 bg-surface-lowest py-[var(--spacing-section-gap)]"
    >
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Capacités
          </p>
          <h2 className="font-serif text-4xl leading-none text-foreground md:text-5xl">
            Stack
            <br />
            Technique.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="max-w-sm text-foreground-muted">
          {profile.summary}
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        {bentoItems.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.05}
            className={`border border-white/5 p-8 transition-colors hover:border-primary/30 ${item.className} ${
              item.highlight
                ? "bg-primary text-primary-foreground"
                : "bg-surface text-foreground"
            }`}
          >
            <div className="mb-6 flex items-start justify-between">
              <item.icon
                className={`size-8 ${item.highlight ? "text-primary-foreground" : "text-primary"}`}
              />
              <span
                className={`font-mono text-xs ${item.highlight ? "opacity-70" : "text-foreground-muted"}`}
              >
                {item.index}
              </span>
            </div>
            <h3 className="mb-4 font-serif text-2xl">{item.title}</h3>
            <p className={item.highlight ? "opacity-90" : "text-foreground-muted"}>
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
