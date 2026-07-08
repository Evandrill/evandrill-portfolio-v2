"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#projects", label: "Projets" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full border-b border-white/5 bg-surface/80 backdrop-blur-xl transition-all duration-300",
        scrolled ? "h-16" : "h-20",
      )}
    >
      <div className="mx-auto flex h-full max-w-[var(--spacing-container-max)] items-center justify-between px-gutter">
        <a
          href="#hero"
          className="font-serif text-xl font-bold tracking-tighter text-foreground transition-colors hover:text-primary"
        >
          BIKELE.DEV
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-tight text-foreground-muted transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="border border-white/5 bg-primary px-6 py-2 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:brightness-110 active:scale-95"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
