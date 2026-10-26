import { BarChart3, Check, ClipboardList } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const SERVICES: {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}[] = [
  {
    icon: ClipboardList,
    title: "Планирование и консультирование",
    description:
      "Полный контур подготовки исследования — от гипотезы до зафиксированного протокола анализа.",
    items: [
      "Статистический план анализа (SAP)",
      "Дизайн исследования, конечные точки и методы анализа",
      "Методы представления результатов",
      "Расчёт объёма выборки и статистической мощности",
    ],
  },
  {
    icon: BarChart3,
    title: "Анализ данных",
    description:
      "Классическая и современная биостатистика для экспериментальных и наблюдательных данных.",
    items: [
      "Экспериментальные и обсервационные исследования",
      "Повторные измерения и смешанные модели",
      "Анализ дожития: Kaplan–Meier, модель Кокса, параметрические модели",
      "Мета-анализы и синтез доказательств",
    ],
  },
];

export function ResearchServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="Научные исследования"
          title="Биостатистика в научных исследованиях"
          lede="Полный цикл работы с данными: от протокола и статистического плана до итоговых таблиц, графиков и выводов."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-border/70 bg-card/50 p-6 transition-colors hover:border-orange-400/40 sm:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-orange-400/25 bg-orange-400/10">
                <service.icon className="h-5 w-5 text-orange-700 dark:text-orange-300" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
