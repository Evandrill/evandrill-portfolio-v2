import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section id={id} className={cn("px-gutter", className)}>
      <div className="mx-auto max-w-[var(--spacing-container-max)]">{children}</div>
    </section>
  );
}
