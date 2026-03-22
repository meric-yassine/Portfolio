"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ITEMS, YOUR_NAME } from "@/data/portfolio";

const SECTION_IDS = ["hero", ...NAV_ITEMS.map((item) => item.id)];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-68px 0px -52% 0px",
        threshold: [0.08, 0.2, 0.35, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const shortName = YOUR_NAME.split(" ")[0] ?? YOUR_NAME;

  return (
    <header className="sticky top-0 z-50 border-b border-line/50 bg-cream">
      <nav
        className="mx-auto flex max-w-layout items-center justify-between gap-4 px-6 py-3 md:px-10"
        aria-label="Primary"
      >
        <Link
          href="#hero"
          className="text-base font-semibold tracking-tight text-ink"
          title={YOUR_NAME}
          onClick={() => setOpen(false)}
        >
          {shortName}
        </Link>

        <button
          type="button"
          className="rounded-full px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-rose-mist/50 hover:text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <ul className="hidden items-center justify-end gap-2 md:flex">
          <li>
            <NavAnchor href="#hero" isActive={active === "hero"}>
              Home
            </NavAnchor>
          </li>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavAnchor href={`#${item.id}`} isActive={active === item.id}>
                {item.label}
              </NavAnchor>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line/50 bg-cream md:hidden"
        >
          <ul className="mx-auto flex max-w-layout flex-col gap-0.5 px-6 py-3 md:px-10">
            <li>
              <MobileNavLink href="#hero" onNavigate={() => setOpen(false)}>
                Home
              </MobileNavLink>
            </li>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <MobileNavLink
                  href={`#${item.id}`}
                  onNavigate={() => setOpen(false)}
                >
                  {item.label}
                </MobileNavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

function NavAnchor({
  href,
  children,
  isActive,
}: {
  href: string;
  children: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      scroll
      className={`inline-block border-b-2 px-3 py-2 text-sm transition-colors ${
        isActive
          ? "border-rose-deep font-medium text-ink"
          : "border-transparent font-medium text-ink-muted hover:border-rose-soft/45 hover:text-ink"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      scroll
      className="block rounded-lg px-3 py-2.5 text-base font-normal text-ink hover:bg-rose-mist/40"
      onClick={onNavigate}
    >
      {children}
    </Link>
  );
}
