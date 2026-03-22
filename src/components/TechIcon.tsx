import type { LucideIcon } from "lucide-react";
import {
  Apple,
  Box,
  Braces,
  Code2,
  Coffee,
  Component,
  Container,
  Cpu,
  Database,
  Flame,
  GitBranch,
  Github,
  Hash,
  Layers,
  LayoutTemplate,
  Link2,
  MonitorSmartphone,
  Paintbrush,
  Plug,
  Send,
  Server,
  Share2,
  Smartphone,
  Table2,
  TableProperties,
  Terminal,
  TestTube,
  Circle,
} from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Maps `SkillItem.icon` strings from portfolio.ts to Lucide icons.
 * All use currentColor — parent applies `text-ink-muted` for a soft, on-palette look.
 * To add a skill with a new icon: 1) import icon 2) add entry here 3) use that key in portfolio data.
 */
const ICON_MAP: Record<string, LucideIcon> = {
  layout: LayoutTemplate,
  paintbrush: Paintbrush,
  braces: Braces,
  typescript: Code2,
  component: Component,
  server: Server,
  link: Link2,
  share: Share2,
  smartphone: Smartphone,
  apple: Apple,
  database: Database,
  table: Table2,
  flame: Flame,
  git: GitBranch,
  github: Github,
  container: Container,
  send: Send,
  code: Code2,
  cpu: Cpu,
  box: Box,
  plug: Plug,
  responsive: MonitorSmartphone,
  test: TestTube,
  tableprops: TableProperties,
  layers: Layers,
  java: Coffee,
  python: Terminal,
  csharp: Hash,
};

type TechIconProps = {
  name: string;
  className?: string;
};

export function TechIcon({ name, className }: TechIconProps) {
  const Icon = ICON_MAP[name] ?? Circle;
  return (
    <Icon
      className={cn("shrink-0 text-ink-muted", className)}
      strokeWidth={1.5}
      aria-hidden
    />
  );
}
