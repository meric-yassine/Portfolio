import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-soft";

const variants: Record<Variant, string> = {
  primary:
    "bg-rose-deep text-cream hover:bg-rose-DEFAULT",
  secondary:
    "border border-line/90 bg-card text-ink hover:border-rose-soft hover:bg-blush/50",
  ghost:
    "text-ink-muted underline-offset-[0.2em] hover:text-ink hover:underline",
};

/** Same-tab navigation: in-page anchors and mailto only */
function shouldOpenInNewTab(href: string): boolean {
  if (href.startsWith("#")) return false;
  if (href.startsWith("mailto:")) return false;
  if (/^https?:\/\//i.test(href)) return true;
  const path = href.split("?")[0].split("#")[0];
  return /\.(pdf|docx?|pptx?|ppt|zip|txt|csv|xlsx?)$/i.test(path);
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();
  /** In-page targets (navbar / project cards → section ids) */
  const isInPageAnchor =
    href.startsWith("#") || href.startsWith("/#");

  if (isInPageAnchor) {
    return (
      <Link href={href} className={classes} scroll>
        {children}
      </Link>
    );
  }

  const newTab = shouldOpenInNewTab(href);
  const tabAttrs = newTab
    ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
    : {};

  return (
    <a href={href} className={classes} {...tabAttrs}>
      {children}
    </a>
  );
}
