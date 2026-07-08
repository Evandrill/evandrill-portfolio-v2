import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import { profile } from "@/data/profile";

export function About() {
  return (
    <SectionContainer
      id="about"
      className="pb-[var(--spacing-section-gap)] pt-20 md:pt-32"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="space-y-8 lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Récit professionnel
          </p>
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
            De la précision technique à{" "}
            <span className="italic text-primary">l&apos;architecture minimale</span>.
          </h2>
          <div className="max-w-2xl space-y-6 text-foreground-muted">
            <p className="text-lg leading-relaxed">{profile.about}</p>
            <p className="text-base leading-relaxed">{profile.summary}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="group relative aspect-[4/5] overflow-hidden border border-white/5 bg-surface transition-colors duration-700 hover:border-primary/50">
            <Image
              src="/profile.png"
              alt={`Portrait de ${profile.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6 border-l-2 border-primary pl-4">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-primary">
                Focus actuel
              </span>
              <span className="mt-1 block font-serif text-2xl text-foreground">
                {profile.focus}
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-20 text-center">
        <blockquote className="mx-auto max-w-4xl font-serif text-3xl leading-tight text-foreground md:text-4xl">
          &ldquo;{profile.quote}&rdquo;
        </blockquote>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted">
          {profile.name}
        </p>
      </Reveal>
    </SectionContainer>
  );
}
