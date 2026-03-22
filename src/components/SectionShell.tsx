import type { ReactNode } from "react";

export type SectionSurface = "default" | "sand" | "blush";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabelledBy?: string;
  /** Background band: default matches page cream; sand / blush add soft section color */
  surface?: SectionSurface;
  /** Tighter vertical padding for short sections (e.g. résumé) */
  density?: "default" | "compact";
};

export function SectionShell({
  id,
  children,
  className = "",
  ariaLabelledBy,
  surface = "default",
  density = "default",
}: SectionShellProps) {
  const surfaceClass =
    surface === "sand" ? "bg-sand" : surface === "blush" ? "bg-blush" : "";

  const pad =
    density === "compact" ? "py-11 md:py-14" : "py-14 md:py-20";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`scroll-mt-[4.25rem] border-t border-line/50 ${surfaceClass} ${className}`}
    >
      <div className={`mx-auto max-w-layout px-6 md:px-10 ${pad}`}>
        {children}
      </div>
    </section>
  );
}
