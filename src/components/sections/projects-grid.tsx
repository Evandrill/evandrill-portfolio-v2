"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectDetailModal } from "@/components/projects/project-detail-modal";
import { Reveal } from "@/components/ui/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import { layoutClasses } from "@/lib/project-visuals";
import { projects, type ProjectNarrative } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [selected, setSelected] = useState<ProjectNarrative | null>(null);

  const featured = projects.filter((p) => p.layout !== "default");
  const others = projects.filter((p) => p.layout === "default");

  return (
    <>
      <SectionContainer
        id="projects"
        className="py-[var(--spacing-section-gap)]"
      >
        <Reveal className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Réalisations
            </p>
            <h2 className="font-serif text-4xl text-foreground md:text-5xl">
              Projets sélectionnés
            </h2>
          </div>
          <p className="hidden font-mono text-xs uppercase tracking-widest text-foreground-muted md:block">
            Cliquer pour l&apos;étude de cas
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          {featured.map((project, index) => (
            <div
              key={project.slug}
              className={cn("min-w-0", layoutClasses[project.layout])}
            >
              <Reveal delay={index * 0.05} className="h-full">
                <ProjectCard project={project} onSelect={setSelected} />
              </Reveal>
            </div>
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-gutter grid grid-cols-1 gap-gutter md:grid-cols-2">
            {others.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.04}>
                <ProjectCard project={project} onSelect={setSelected} />
              </Reveal>
            ))}
          </div>
        )}
      </SectionContainer>

      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
