import { ArrowRight } from "lucide-react";

import { HazardPanel, SurvivalPanel } from "@/components/survival-chart";
import { MathFormula } from "@/components/math-formula";
import { Button } from "@/components/ui/button";

const METHOD_CHIPS = [
  "статплан (SAP)",
  "объём выборки",
  "анализ дожития",
  "мета-анализ",
  "биоэквивалентность",
  "причинно-следственный анализ",
  "модели и ИИ",
];

const LEGEND = [
  { swatch: "h-2 w-2 rounded-sm bg-orange-500 dark:bg-orange-300", label: "S(t) — доля без события" },
  { swatch: "h-2 w-2 rounded-sm bg-emerald-600 dark:bg-emerald-300", label: "h(t) — риск события" },
  {
    swatch: "h-2 w-4 rounded-sm bg-orange-400/20 ring-1 ring-orange-400/40",
    label: "95% ДИ",
  },
  {
    swatch: "h-2 w-4 rounded-sm bg-emerald-600/20 dark:bg-emerald-300/20 ring-1 ring-emerald-600/40 dark:ring-emerald-300/40",
    label: "площадь под h(t)",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-44 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container relative grid items-center gap-14 pb-20 pt-16 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/5 px-3.5 py-1.5 text-xs text-orange-800 dark:text-orange-200">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" aria-hidden="true" />
            Биостатистика · Клинические исследования · Математическое моделирование
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.35rem]">
            Биостатистика и{" "}
            <span className="text-orange-600 dark:text-orange-300">аналитика данных</span> в
            биомедицине
          </h1>
          <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-muted-foreground">
            Помогаю спланировать исследование, рассчитать объём выборки и
            получить достоверные выводы — от доклинических экспериментов до
            клинических исследований фаз 0–4 и моделей на основе ИИ.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-11 px-6 text-base">
              <a href="#contact">
                Обсудить задачу
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 border-border/70 bg-card/40 px-6 text-base"
            >
              <a href="#services">Направления работы</a>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {METHOD_CHIPS.map((chip) => (
              <li
                key={chip}
                className="rounded-md border border-border/70 bg-card/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-orange-400/[0.07] blur-2xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-border/80 bg-card/70 p-4 shadow-2xl shadow-black/10 dark:shadow-black/40 backdrop-blur sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                S(t) и h(t) · дожитие и риск
              </p>
              <p className="font-mono text-[11px] text-muted-foreground/70">
                иллюстрация
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="bg-grid overflow-hidden rounded-lg border border-border/70">
                <SurvivalPanel />
              </div>
              <div className="bg-grid overflow-hidden rounded-lg border border-border/70">
                <HazardPanel />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border/60 pt-4">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {LEGEND.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span
                      className={`shrink-0 ${item.swatch}`}
                      aria-hidden="true"
                    />
                    {item.label}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  риск из дожития
                </span>
                <MathFormula
                  tex={String.raw`h(t)=-\frac{d}{dt}\,\ln \hat{S}(t)`}
                  className="text-sm text-foreground/85"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
