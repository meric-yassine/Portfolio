type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

/**
 * Playfair for title (h2); Inter for label + description.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-10 md:mb-12">
      {eyebrow ? (
        <div className="mb-4 flex items-center gap-3">
          <span
            className="h-px w-10 shrink-0 bg-rose-soft"
            aria-hidden
          />
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2
        id={id}
        className="text-balance font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-3xl md:font-bold"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base font-normal leading-[1.65] text-ink-muted">
          {description}
        </p>
      ) : null}
    </header>
  );
}
