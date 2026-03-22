"use client";

import { useId, useState } from "react";
import { ExternalLink } from "lucide-react";
import { CAPSTONE_TABS, SECTION_COPY } from "@/data/portfolio";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";

export function CapstoneSection() {
  const [active, setActive] = useState(CAPSTONE_TABS[0]?.id ?? "");
  const baseId = useId();
  const tabPanelId = (tabId: string) => `${baseId}-${tabId}-panel`;
  const tabButtonId = (tabId: string) => `${baseId}-${tabId}-tab`;

  const current = CAPSTONE_TABS.find((t) => t.id === active) ?? CAPSTONE_TABS[0];
  const heading = SECTION_COPY.capstone;

  return (
    <div>
      <SectionHeading
        id="capstone-heading"
        eyebrow={heading.eyebrow}
        title={heading.title}
        description={heading.description}
      />

      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[minmax(0,13.5rem)_1fr] lg:items-start lg:gap-10">
        {/* Grouped tab rail — paths & PDFs live in portfolio.ts (`CAPSTONE_TABS`) */}
        <div
          role="tablist"
          aria-label="Capstone deliverables"
          className="flex flex-row flex-wrap gap-1.5 rounded-2xl border border-line/80 bg-card p-1.5 shadow-card lg:flex-col lg:flex-nowrap lg:gap-1"
        >
          {CAPSTONE_TABS.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={tabButtonId(tab.id)}
                aria-selected={selected}
                aria-controls={tabPanelId(tab.id)}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                className={`rounded-full border px-4 py-2 text-left text-sm transition-colors lg:w-full lg:rounded-xl lg:px-3.5 lg:py-2.5 ${
                  selected
                    ? "border-rose-soft bg-blush font-semibold text-ink shadow-sm ring-2 ring-rose-soft/70"
                    : "border-transparent bg-transparent font-normal text-ink-muted hover:border-rose-soft/40 hover:bg-rose-mist/35 hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={tabPanelId(current.id)}
          aria-labelledby={tabButtonId(current.id)}
          className="rounded-2xl border border-line/80 bg-card px-6 py-6 shadow-card md:px-7 md:py-7"
        >
          <div className="max-w-2xl">
            {/* Matches section eyebrows + Education/Certifications labels: weight medium, soft muted */}
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink-muted/80">
              Document
            </p>
            {/* Matches ProjectCard titles (sans, same weight/size as project names) */}
            <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-ink md:text-[1.125rem]">
              {current.documentTitle}
            </h3>
            {current.documentLinks && current.documentLinks.length > 0 ? (
              <p className="mt-2 text-sm font-normal leading-snug text-ink-muted">
                PDF document
              </p>
            ) : null}
            {/* Body: same role as project card description — spacing rhythm mt-4 → mt-6 to actions */}
            <div className="mt-4 space-y-4 text-base font-normal leading-[1.65] text-ink-muted">
              {current.paragraphs.map((p, index) => (
                <p key={`${current.id}-p-${index}`}>{p}</p>
              ))}
            </div>
            {current.documentLinks && current.documentLinks.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {current.documentLinks.map((link) => (
                  <ButtonLink
                    key={`${current.id}-${link.href}`}
                    href={link.href}
                    variant="secondary"
                    className="gap-2 px-5 py-2.5 text-sm"
                  >
                    <ExternalLink
                      className="h-4 w-4 shrink-0 opacity-80"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    {link.label}
                  </ButtonLink>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
