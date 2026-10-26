import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#services", label: "Услуги" },
  { href: "#research", label: "Исследования" },
  { href: "#modeling", label: "Моделирование и ИИ" },
  { href: "#process", label: "Процесс" },
  { href: "#about", label: "Обо мне" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="BioStat Pro — на начало страницы"
        >
          <BrandMark className="h-8 w-8" />
          <span className="text-base font-semibold tracking-tight">
            BioStat <span className="text-teal-700 dark:text-teal-300">Pro</span>
          </span>
        </a>
        <nav
          aria-label="Основная навигация"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="shrink-0">
          <a href="#contact">Обсудить задачу</a>
        </Button>
      </div>
    </header>
  );
}
