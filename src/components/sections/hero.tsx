"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center px-gutter pb-20 pt-28 md:pt-32"
    >
      <div className="mx-auto flex w-full max-w-[var(--spacing-container-max)] flex-col gap-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-primary"
        >
          Basé à {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="max-w-4xl font-serif text-[40px] leading-[1.1] text-foreground md:text-[64px]"
        >
          Concevoir la{" "}
          <span className="italic text-primary">prochaine génération</span> de systèmes
          intelligents.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="max-w-2xl text-lg font-light leading-relaxed text-foreground-muted"
        >
          {profile.headline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="bg-primary px-8 py-4 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Voir les projets
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-outline-variant px-8 py-4 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-white/5"
          >
            Me contacter
            <ArrowRight className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
