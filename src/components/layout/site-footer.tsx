import { profile } from "@/data/profile";

const links = [
  { label: "GITHUB", href: profile.contact.github },
  { label: "LINKEDIN", href: profile.contact.linkedin },
  { label: "EMAIL", href: `mailto:${profile.contact.email}` },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="mx-auto flex max-w-[var(--spacing-container-max)] flex-col gap-6 px-gutter py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-2xl text-primary">BIKELE.DEV</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-foreground-muted">
            © {new Date().getFullYear()} — {profile.name}
          </p>
        </div>

        <div className="flex flex-wrap gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "EMAIL" ? undefined : "_blank"}
              rel={link.label === "EMAIL" ? undefined : "noopener noreferrer"}
              className="font-mono text-[10px] uppercase tracking-widest text-foreground-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
