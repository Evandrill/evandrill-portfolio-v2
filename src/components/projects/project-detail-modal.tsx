"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Lock, X } from "lucide-react";
import type { ProjectNarrative } from "@/data/projects";
import { getProjectVisual } from "@/lib/project-visuals";

const fields = [
  { key: "problem", label: "Le Problème" },
  { key: "users", label: "Les Utilisateurs" },
  { key: "impact", label: "L'Impact" },
  { key: "constraints", label: "Les Contraintes" },
  { key: "contribution", label: "La Contribution" },
  { key: "challenges", label: "Les Défis" },
  { key: "lessons", label: "Les Leçons" },
] as const;

type ProjectDetailModalProps = {
  project: ProjectNarrative | null;
  onClose: () => void;
};

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const visual = project ? getProjectVisual(project) : null;

  return (
    <AnimatePresence>
      {project && visual && (
        <>
          <motion.button
            type="button"
            aria-label="Fermer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto p-4 md:items-center md:p-8">
            <motion.div
              role="dialog"
              aria-modal
              aria-labelledby="project-detail-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="my-auto w-full max-w-4xl border border-white/10 bg-surface shadow-[0_0_40px_rgba(153,27,27,0.15)]"
            >
              <div
                className={`relative border-b border-white/5 bg-gradient-to-br px-6 py-8 ${visual.gradient}`}
              >
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-4 top-4 text-foreground-muted transition-colors hover:text-primary"
                >
                  <X className="size-5" />
                </button>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  Étude de cas • {project.category}
                </p>
                <h2
                  id="project-detail-title"
                  className="mt-3 font-serif text-3xl text-foreground md:text-4xl"
                >
                  {project.title}
                </h2>
                {project.confidential && project.confidentialReason && (
                  <p className="mt-4 flex items-start gap-2 border border-white/10 bg-surface/60 p-3 font-mono text-xs leading-relaxed text-foreground-muted">
                    <Lock className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    <span>
                      <span className="uppercase tracking-[0.15em] text-primary">
                        Confidentiel —{" "}
                      </span>
                      {project.confidentialReason}
                    </span>
                  </p>
                )}
              </div>

              <div className="grid gap-px bg-outline-variant md:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.key} className="bg-surface p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                      {field.label}
                    </p>
                    <p className="mt-2 font-mono text-sm leading-relaxed text-foreground-muted">
                      {project[field.key]}
                    </p>
                  </div>
                ))}
                <div className="bg-surface p-5 md:col-span-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    La Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="border border-outline-variant bg-surface-high px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
