/**
 * Home - section copy in src/data/portfolio.ts (SECTION_COPY + TODO_REPLACE).
 */

import { CapstoneSection } from "@/components/CapstoneSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionShell } from "@/components/SectionShell";
import { ButtonLink } from "@/components/ButtonLink";
import { Eye, FileText } from "lucide-react";
import Image from "next/image";
import type { ProfessionalVolunteerEntry } from "@/data/portfolio";
import {
  ACADEMIC_PROJECTS,
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_PDF_PATH,
  SECTION_COPY,
  aboutBio,
  academicCredentials,
  careerPhilosophy,
  coverLetter,
  professionalSection,
  resumeSection,
} from "@/data/portfolio";

export default function Home() {
  const s = SECTION_COPY;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />

        <SectionShell id="about" ariaLabelledBy="about-heading" surface="sand">
          <SectionHeading
            id="about-heading"
            eyebrow={s.about.eyebrow}
            title={s.about.title}
            description={s.about.description}
          />
          <div className="space-y-6 text-base font-normal leading-[1.65] text-ink">
            <p>{aboutBio.lead}</p>
            <p>{aboutBio.priorEducation}</p>
            <p>{aboutBio.interests}</p>
          </div>
        </SectionShell>

        <SectionShell id="philosophy" ariaLabelledBy="philosophy-heading">
          <SectionHeading
            id="philosophy-heading"
            eyebrow={s.philosophy.eyebrow}
            title={s.philosophy.title}
            description={s.philosophy.description}
          />
          <div className="space-y-10 text-base font-normal leading-[1.65] text-ink">
            <figure className="rounded-2xl border border-line/80 bg-card/80 px-6 py-6 shadow-card sm:px-7 sm:py-7">
              <blockquote className="font-display text-lg font-medium leading-snug text-ink md:text-xl">
                <p>“{careerPhilosophy.quote.text}”</p>
              </blockquote>
              <figcaption className="mt-4 text-sm font-normal text-ink-muted">
                - {careerPhilosophy.quote.attribution}
              </figcaption>
            </figure>
            <div className="space-y-8">
              {careerPhilosophy.sections.map((block) => (
                <section key={block.id} aria-labelledby={`${block.id}-title`}>
                  <h3
                    id={`${block.id}-title`}
                    className="text-lg font-semibold leading-snug text-ink"
                  >
                    {block.title}
                  </h3>
                  <p className="mt-3 text-ink">{block.body}</p>
                </section>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell id="skills" ariaLabelledBy="skills-heading" surface="sand">
          <SkillsSection />
        </SectionShell>

        <SectionShell
          id="resume"
          ariaLabelledBy="resume-heading"
          surface="sand"
          density="compact"
        >
          <SectionHeading
            id="resume-heading"
            eyebrow={s.resume.eyebrow}
            title={s.resume.title}
            description={s.resume.description}
          />
          <div className="flex flex-col gap-4 rounded-2xl border border-line/80 bg-card p-5 shadow-card sm:flex-row sm:items-center sm:gap-5 md:p-6">
            <div className="flex min-w-0 flex-1 items-start gap-3">
              <FileText
                className="mt-1 h-[1.125rem] w-[1.125rem] shrink-0 text-ink-muted/55"
                strokeWidth={1.5}
                aria-hidden
              />
              <p className="text-base font-normal leading-[1.65] text-ink-muted">
                {resumeSection.summary}
              </p>
            </div>
            <ButtonLink
              href={RESUME_PDF_PATH}
              className="w-full shrink-0 sm:w-auto sm:self-center"
            >
              {resumeSection.actionLabel}
            </ButtonLink>
          </div>
        </SectionShell>

        <SectionShell id="cover-letter" ariaLabelledBy="cover-heading">
          <SectionHeading
            id="cover-heading"
            eyebrow={s.coverLetter.eyebrow}
            title={s.coverLetter.title}
            description={s.coverLetter.description}
          />
          <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
            <div className="flex h-full flex-col rounded-2xl border border-line/80 bg-card px-6 py-7 shadow-card">
              <div className="flex flex-1 items-start gap-3">
                <FileText
                  className="mt-1 h-[1.125rem] w-[1.125rem] shrink-0 text-ink-muted/55"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold leading-snug text-ink">
                    {coverLetter.previewTitle}
                  </h3>
                  <p className="mt-4 text-base font-normal leading-[1.65] text-ink-muted">
                    {coverLetter.previewBody}
                  </p>
                </div>
              </div>
            </div>
            <details className="flex h-full min-h-0 flex-col justify-center rounded-2xl border border-line/80 bg-card px-6 py-6 shadow-card open:justify-start md:py-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-soft [&::-webkit-details-marker]:hidden">
                <span>{coverLetter.detailsSummaryLabel}</span>
                <Eye
                  className="h-4 w-4 shrink-0 text-ink-muted/60"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </summary>
              <div className="mt-5 space-y-3 border-t border-line/80 pt-5 text-base font-normal leading-[1.65] text-ink">
                {coverLetter.fullParagraphs.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </details>
          </div>
        </SectionShell>

        <SectionShell id="credentials" ariaLabelledBy="credentials-heading">
          <SectionHeading
            id="credentials-heading"
            eyebrow={s.credentials.eyebrow}
            title={s.credentials.title}
            description={s.credentials.description}
          />
          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                Education
              </h3>
              <ul className="mt-4 space-y-5">
                {academicCredentials.education.map((edu) => (
                  <li
                    key={edu.id}
                    className="rounded-2xl border border-line/80 bg-card p-6 shadow-card md:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="min-w-0 flex-1 text-pretty text-lg font-semibold leading-snug text-ink">
                        {edu.institution}
                      </p>
                      <Image
                        src={edu.logoImage.src}
                        alt={edu.logoImage.alt}
                        width={120}
                        height={48}
                        className="h-8 w-auto max-h-9 max-w-[5.5rem] shrink-0 object-contain object-right opacity-[0.88] saturate-[0.88] sm:h-9 sm:max-h-10 sm:max-w-[6.25rem]"
                      />
                    </div>
                    <p className="mt-4 text-base font-normal text-ink-muted">
                      {edu.credential}
                    </p>
                    <p className="mt-2 text-sm font-normal text-ink-muted">
                      {edu.dates}
                    </p>
                    <p className="mt-4 text-base font-normal leading-[1.65] text-ink">
                      {edu.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              {academicCredentials.certifications.length > 0 ? (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                    Certifications
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {academicCredentials.certifications.map((c) => (
                      <li
                        key={c.id}
                        className="flex flex-col gap-4 rounded-2xl border border-line/80 bg-card p-6 shadow-card sm:flex-row sm:items-start sm:justify-between sm:gap-5"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-base font-medium text-ink">
                            {c.name}
                          </p>
                          <p className="mt-1 text-sm font-normal text-ink-muted">
                            {c.issuer} · {c.year}
                          </p>
                          {c.certificatePdf ? (
                            <div className="mt-3">
                              <ButtonLink
                                href={c.certificatePdf.href}
                                variant="secondary"
                                className="px-5 py-2 text-sm"
                              >
                                {c.certificatePdf.label ?? "View certificate"}
                              </ButtonLink>
                            </div>
                          ) : null}
                        </div>
                        {c.badgeImage ? (
                          <Image
                            src={c.badgeImage.src}
                            alt={c.badgeImage.alt}
                            width={120}
                            height={120}
                            className="h-12 w-auto max-h-[3.5rem] max-w-[4.5rem] shrink-0 object-contain object-left sm:mt-0.5 sm:object-right"
                          />
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {academicCredentials.awards.length > 0 ? (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                    Awards
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {academicCredentials.awards.map((a) => (
                      <li
                        key={a.id}
                        className="flex flex-col gap-4 rounded-2xl border border-line/80 bg-card p-6 shadow-card sm:flex-row sm:items-start sm:justify-between sm:gap-5"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-base font-medium text-ink">
                            {a.name}
                          </p>
                          <p className="mt-1 text-sm font-normal text-ink-muted">
                            {a.issuer}
                          </p>
                          <p className="mt-3 text-base font-normal leading-[1.65] text-ink-muted">
                            {a.description}
                          </p>
                          {a.lettersPdf ? (
                            <div className="mt-3">
                              <ButtonLink
                                href={a.lettersPdf.href}
                                variant="secondary"
                                className="px-5 py-2 text-sm"
                              >
                                {a.lettersPdf.label ?? "View letters"}
                              </ButtonLink>
                            </div>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="rounded-2xl border border-dashed border-rose-soft/50 bg-blush/30 px-6 py-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  Transcript
                </h3>
                <p className="mt-3 text-base font-normal leading-[1.65] text-ink-muted">
                  {academicCredentials.transcript.description}
                </p>
                <div className="mt-5">
                  <ButtonLink
                    href={academicCredentials.transcript.href}
                    variant="secondary"
                    className="text-sm"
                  >
                    {academicCredentials.transcript.label}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="work-samples" ariaLabelledBy="work-heading" surface="sand">
          <SectionHeading
            id="work-heading"
            eyebrow={s.workSamples.eyebrow}
            title={s.workSamples.title}
            description={s.workSamples.description}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {ACADEMIC_PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className={project.isCapstone ? "sm:col-span-2" : undefined}
              />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="capstone" ariaLabelledBy="capstone-heading" surface="blush">
          <CapstoneSection />
        </SectionShell>

        <SectionShell id="professional" ariaLabelledBy="professional-heading">
          <SectionHeading
            id="professional-heading"
            eyebrow={s.professional.eyebrow}
            title={s.professional.title}
            description={s.professional.description}
          />
          <ul
            className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-stretch md:gap-x-4 md:gap-y-4"
            aria-label="Work and volunteering experience"
          >
            {[
              ...professionalSection.workExperience,
              ...professionalSection.volunteer,
            ].map((entry) => (
              <ProfessionalRoleCard
                key={entry.id}
                entry={entry}
                sectionLabel={
                  entry.id === professionalSection.volunteer[0]?.id
                    ? professionalSection.headings.volunteer
                    : undefined
                }
              />
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-line/80 bg-card px-6 py-6 shadow-card sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                {professionalSection.headings.recommendations}
              </h3>
              <p className="mt-4 text-base font-normal leading-[1.65] text-ink-muted">
                {professionalSection.recommendations.body}
              </p>
            </div>
            <div className="shrink-0 sm:self-center">
              <ButtonLink
                href={`mailto:${CONTACT_EMAIL}`}
                variant="secondary"
                className="w-full px-5 py-2.5 text-sm sm:w-auto"
              >
                Contact via email
              </ButtonLink>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="contact" ariaLabelledBy="contact-heading" surface="sand">
          <SectionHeading
            id="contact-heading"
            eyebrow={s.contact.eyebrow}
            title={s.contact.title}
            description={s.contact.description}
          />
          <ul className="flex max-w-content flex-col gap-4 text-base font-normal leading-[1.65]">
            <li>
              <span className="text-ink-muted">Email · </span>
              <a
                className="text-ink underline-offset-[0.2em] hover:underline"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <span className="text-ink-muted">LinkedIn · </span>
              <a
                className="text-ink underline-offset-[0.2em] hover:underline"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile
              </a>
            </li>
            <li>
              <span className="text-ink-muted">GitHub · </span>
              <a
                className="text-ink underline-offset-[0.2em] hover:underline"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositories
              </a>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="primary">
              Email me
            </ButtonLink>
            <ButtonLink href={LINKEDIN_URL} variant="secondary">
              LinkedIn
            </ButtonLink>
            <ButtonLink href={GITHUB_URL} variant="secondary">
              GitHub
            </ButtonLink>
          </div>
        </SectionShell>
      </main>
      <Footer />
    </>
  );
}

function ProfessionalRoleCard({
  entry,
  sectionLabel,
}: {
  entry: ProfessionalVolunteerEntry;
  sectionLabel?: string;
}) {
  const cardBody = (
    <>
      <div className="flex items-start gap-3 sm:gap-3.5">
        {entry.logo ? (
          <Image
            src={entry.logo.src}
            alt={entry.logo.alt}
            width={32}
            height={32}
            className="h-8 w-auto max-w-[5rem] shrink-0 object-contain object-left opacity-[0.92]"
          />
        ) : null}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <p className="min-w-0 flex-1 text-pretty text-base font-semibold leading-snug text-ink">
              {entry.title}
            </p>
            {entry.dates ? (
              <p className="shrink-0 text-right text-sm font-normal leading-snug text-ink-muted">
                {entry.dates}
              </p>
            ) : null}
          </div>
          <p className="mt-1 text-sm font-normal text-ink-muted">
            {entry.organization}
          </p>
        </div>
      </div>
      <div className="mt-4 flex min-h-0 flex-1 flex-col space-y-3 text-base font-normal leading-[1.65] text-ink-muted">
        {entry.description
          .split(/\n\n+/)
          .map((para) => para.trim())
          .filter(Boolean)
          .map((para, i) => (
            <p key={i}>{para}</p>
          ))}
      </div>
    </>
  );

  if (sectionLabel) {
    return (
      <li className="flex h-full min-h-0 flex-col">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
          {sectionLabel}
        </p>
        <div className="flex min-h-0 flex-1 flex-col rounded-2xl border border-line/80 bg-card px-6 py-6 shadow-card">
          {cardBody}
        </div>
      </li>
    );
  }

  return (
    <li className="flex h-full min-h-0 flex-col rounded-2xl border border-line/80 bg-card px-6 py-6 shadow-card">
      {cardBody}
    </li>
  );
}
