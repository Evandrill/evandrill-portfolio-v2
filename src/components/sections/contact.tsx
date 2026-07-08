"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import { profile } from "@/data/profile";

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

  const labelClass = (field: string) =>
    `font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${
      focused === field ? "text-primary" : "text-foreground-muted"
    }`;

  return (
    <SectionContainer id="contact" className="pb-[var(--spacing-section-gap)] pt-20">
      <Reveal>
        <h2 className="mb-4 font-serif text-4xl text-foreground md:text-5xl">
          Collaborons.
        </h2>
        <p className="mb-12 max-w-2xl text-lg text-foreground-muted">
          Projet IA, plateforme métier ou mission fullstack — discutons d&apos;une architecture
          claire et d&apos;un impact mesurable.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <Reveal delay={0.1} className="space-y-8 lg:col-span-7">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className={labelClass("name")} htmlFor="name">
                Nom
              </label>
              <input
                id="name"
                className="w-full border-0 border-b border-outline-variant bg-transparent py-4 text-foreground outline-none transition-colors focus:border-primary"
                placeholder="Votre nom"
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
              />
            </div>
            <div className="space-y-2">
              <label className={labelClass("email")} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border-0 border-b border-outline-variant bg-transparent py-4 text-foreground outline-none transition-colors focus:border-primary"
                placeholder="exemple@domaine.com"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
            </div>
            <div className="space-y-2">
              <label className={labelClass("message")} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full resize-none border-0 border-b border-outline-variant bg-transparent py-4 text-foreground outline-none transition-colors focus:border-primary"
                placeholder="Décrivez brièvement votre projet"
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
            </div>
            <button
              type="button"
              className="group flex items-center gap-3 bg-primary px-8 py-4 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_12px_var(--primary-glow)]"
            >
              Envoyer
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.15} className="space-y-10 lg:col-span-5">
          <div className="aspect-video overflow-hidden border border-white/5 bg-surface-low">
            <div className="h-full w-full bg-gradient-to-br from-primary/30 via-surface-high to-background transition-transform duration-700 hover:scale-105" />
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
                Contact
              </h4>
              <a
                href={`mailto:${profile.contact.email}`}
                className="font-serif text-2xl text-foreground transition-colors hover:text-primary"
              >
                {profile.contact.email}
              </a>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
                Réseaux
              </h4>
              <div className="flex flex-col gap-2">
                {[
                  {
                    label: "GitHub",
                    href: profile.contact.github,
                    display: profile.contact.githubHandle,
                  },
                  {
                    label: "LinkedIn",
                    href: profile.contact.linkedin,
                    display: "junior-lamour-bikele-messanga",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-foreground-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span className="font-mono text-xs">{item.display}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
                Localisation
              </h4>
              <p className="text-foreground-muted">{profile.location}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
