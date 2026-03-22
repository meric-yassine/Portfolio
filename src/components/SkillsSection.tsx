import { SectionHeading } from "@/components/SectionHeading";
import { TechIcon } from "@/components/TechIcon";
import { SECTION_COPY, SKILL_CATEGORIES } from "@/data/portfolio";

/**
 * Unified Skills card — all groups live in portfolio.ts (`SKILL_CATEGORIES`).
 */
const skillChipClass =
  "inline-flex items-center gap-1.5 rounded-full border border-rose-soft/35 bg-rose-mist/40 px-3 py-1.5 text-xs font-medium text-ink";

export function SkillsSection() {
  const s = SECTION_COPY.skills;

  return (
    <div>
      <SectionHeading
        id="skills-heading"
        eyebrow={s.eyebrow}
        title={s.title}
        description={s.description}
      />

      <div className="rounded-2xl border border-line/80 bg-card p-6 shadow-card md:p-7">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-5 lg:grid-cols-3 lg:gap-y-6">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.id} className="min-w-0">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                {category.title}
              </p>
              <ul
                className="flex flex-wrap gap-1.5"
                aria-label={category.title}
              >
                {category.items.map((item) => (
                  <li key={`${category.id}-${item.label}`}>
                    <span className={skillChipClass}>
                      <TechIcon name={item.icon} className="h-3.5 w-3.5" />
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
