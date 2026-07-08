"use client";

import { ArrowUpRight, Lock } from "lucide-react";
import type { ProjectNarrative } from "@/data/projects";
import { getProjectVisual } from "@/lib/project-visuals";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: ProjectNarrative;
  onSelect: (project: ProjectNarrative) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const visual = getProjectVisual(project);

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className={cn(
        "group relative flex h-full w-full min-w-0 cursor-pointer flex-col overflow-hidden border border-white/5 bg-surface-low text-left transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_12px_var(--primary-glow)]",
        project.layout === "tall" && "h-full",
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-gradient-to-br",
          visual.gradient,
          project.layout === "hero" && "aspect-[16/10]",
          project.layout === "tall" && "min-h-[280px] flex-1",
          project.layout === "square" && "aspect-square",
          project.layout === "wide" && "aspect-[16/9]",
          project.layout === "default" && "aspect-[16/10]",
        )}
      >
        {project.confidential && (
          <span className="absolute right-4 top-4 flex items-center gap-1.5 border border-white/10 bg-surface/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground-muted backdrop-blur-sm">
            <Lock className="size-3" />
            Confidentiel
          </span>
        )}
        <div className="absolute inset-0 flex items-end p-6">
          <p className={cn("font-mono text-[10px] uppercase tracking-[0.2em]", visual.accent)}>
            {project.category}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex items-start justify-between border-t border-white/5 bg-surface-high/50 p-6 backdrop-blur-sm">
        <div>
          <h3 className="font-serif text-2xl text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          {project.confidential && project.confidentialReason && (
            <p className="mt-2 font-mono text-[11px] leading-relaxed text-foreground-muted/80">
              {project.confidentialReason}
            </p>
          )}
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((item) => (
              <span
                key={item}
                className="border border-outline-variant bg-surface-highest px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </button>
  );
}
