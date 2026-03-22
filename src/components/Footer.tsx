import { YOUR_NAME } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/50 bg-sand">
      <div className="mx-auto max-w-layout px-6 py-8 md:px-10">
        <p className="text-center text-sm font-normal text-ink-muted">
          © {year} {YOUR_NAME}
        </p>
      </div>
    </footer>
  );
}
