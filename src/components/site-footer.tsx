import { BrandMark } from "@/components/brand-mark";
import {
  CONTACT_EMAIL,
  CONTACT_TG_NICK,
  CONTACT_TG_URL,
} from "@/lib/contacts";

const FOOTER_LINKS = [
  { href: "#services", label: "Научные исследования" },
  { href: "#research", label: "Клинические исследования" },
  { href: "#modeling", label: "Моделирование и ИИ" },
  { href: "#process", label: "Процесс" },
  { href: "#about", label: "Обо мне" },
  { href: "#contact", label: "Контакты" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_1fr_auto] md:items-start">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <BrandMark className="h-7 w-7" />
            <span className="font-semibold tracking-tight">
              BioStat <span className="text-teal-700 dark:text-teal-300">Pro</span>
            </span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Биостатистика, математическое моделирование и ИИ для биомедицинских
            исследований.
          </p>
        </div>
        <nav
          aria-label="Навигация в подвале"
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground md:justify-center"
        >
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="space-y-1.5 font-mono text-xs text-muted-foreground md:text-right">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="block transition-colors hover:text-foreground"
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href={CONTACT_TG_URL}
            target="_blank"
            rel="noreferrer"
            className="block transition-colors hover:text-foreground"
          >
            {CONTACT_TG_NICK}
          </a>
        </div>
      </div>
      <div className="container mt-8 flex flex-col gap-2 border-t border-border/40 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} BioStat Pro</span>
        <span className="font-mono">
          доказательная аналитика · фазы 0–4 · модели и ИИ
        </span>
      </div>
    </footer>
  );
}
