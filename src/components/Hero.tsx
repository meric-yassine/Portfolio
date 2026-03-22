import Image from "next/image";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  PROFILE_IMAGE_ALT,
  PROFILE_IMAGE_SRC,
  YOUR_NAME,
  YOUR_TITLE,
  heroIntro,
  heroKicker,
  RESUME_PDF_PATH,
  resumeSection,
} from "@/data/portfolio";
import { ButtonLink } from "@/components/ButtonLink";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-[4.25rem] overflow-hidden"
    >
      {/* Static tint only — no animation */}
      <div
        className="pointer-events-none absolute inset-0 bg-blush/25 bg-[radial-gradient(ellipse_90%_65%_at_100%_-10%,rgba(232,208,216,0.45),transparent_50%),radial-gradient(ellipse_70%_55%_at_-5%_110%,rgba(241,236,228,0.85),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-layout px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-12">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12 lg:gap-16">
          <div className="order-2 min-w-0 md:order-1">
            {heroKicker ? (
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
                {heroKicker}
              </p>
            ) : null}
            <h1
              id="hero-heading"
              className={`font-display text-4xl font-semibold leading-[1.12] tracking-[-0.02em] text-ink md:text-5xl md:font-bold ${heroKicker ? "mt-4" : ""}`}
            >
              {YOUR_NAME}
            </h1>
            <p className="mt-4 text-lg font-normal leading-snug text-ink-muted md:text-xl">
              {YOUR_TITLE}
            </p>
            <div className="mt-8 max-w-contentWide space-y-4 text-pretty font-normal leading-[1.65] text-ink md:text-lead">
              {heroIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-2.5">
              <ButtonLink href={RESUME_PDF_PATH}>
                {resumeSection.actionLabel}
              </ButtonLink>
              <ButtonLink href={GITHUB_URL} variant="secondary">
                GitHub
              </ButtonLink>
              <ButtonLink href={LINKEDIN_URL} variant="secondary">
                LinkedIn
              </ButtonLink>
              <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
                Email
              </ButtonLink>
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-[13.5rem] sm:max-w-[15rem] md:order-2 md:mx-0 md:w-[17rem] md:max-w-none md:shrink-0 md:justify-self-end">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-rose-mist via-card to-sand p-1.5 shadow-card-soft">
              <div className="overflow-hidden rounded-[1.125rem] bg-card ring-1 ring-line/70">
                <Image
                  src={PROFILE_IMAGE_SRC}
                  alt={PROFILE_IMAGE_ALT}
                  width={640}
                  height={800}
                  sizes="(max-width: 768px) 240px, 260px"
                  className="aspect-[4/5] h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
