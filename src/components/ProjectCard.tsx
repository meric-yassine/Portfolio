import type { AcademicProject, ProjectLinkKey } from "@/data/portfolio";
import { ButtonLink } from "@/components/ButtonLink";
import { cn } from "@/lib/cn";

const LINK_LABELS: Record<ProjectLinkKey, string> = {
  github: "GitHub",
  repository: "GitLab",
  watchDemo: "Watch Demo",
  demo: "View demo",
  report: "View details",
  caseStudy: "View case study",
};

type ProjectCardProps = {
  project: AcademicProject;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const entries = project.links
    ? (Object.entries(project.links) as [ProjectLinkKey, string][])
    : [];

  const featured = project.isCapstone;

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border bg-card px-6 py-7 shadow-card transition-shadow duration-200",
        featured
          ? "border-rose-soft/70 shadow-card-soft ring-1 ring-rose-mist md:px-7 md:py-8"
          : "border-line/80 hover:shadow-card-soft",
        className,
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-2 gap-y-1">
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-ink md:text-[1.125rem]">
          {project.title}
        </h3>
        {featured ? (
          <span className="rounded-full border border-rose-soft/60 bg-rose-mist/50 px-2.5 py-1 text-xs font-medium text-rose-deep">
            Capstone
          </span>
        ) : null}
      </div>
      <p className="mt-4 flex-1 whitespace-pre-line text-base font-normal leading-[1.65] text-ink-muted">
        {project.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-rose-soft/35 bg-rose-mist/40 px-3 py-1.5 text-xs font-medium text-ink-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
      {entries.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {entries.map(([key, url]) => (
            <ButtonLink
              key={key}
              href={url}
              variant="secondary"
              className="px-5 py-2.5 text-sm"
            >
              {LINK_LABELS[key]}
            </ButtonLink>
          ))}
        </div>
      ) : null}
    </article>
  );
}
