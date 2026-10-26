import {
  FlaskConical,
  Layers,
  Map,
  Microscope,
  Scale,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { SectionHeading } from "@/components/section-heading";

const TOPICS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Map,
    title: "Все этапы планирования",
    description:
      "От концепции и протокола до клинического отчёта: промежуточные и окончательные анализы.",
  },
  {
    icon: FlaskConical,
    title: "Биоэквивалентность",
    description:
      "Дизайн и статистический анализ исследований биоэквивалентности и биодоступности.",
  },
  {
    icon: Microscope,
    title: "Эксперименты",
    description:
      "Планирование и анализ экспериментальных исследований в лабораторных моделях.",
  },
  {
    icon: Stethoscope,
    title: "Медицинские изделия",
    description:
      "Статистическое обоснование и анализ клинических исследований медицинских изделий.",
  },
  {
    icon: Layers,
    title: "Фазы 0–4",
    description:
      "От первых исследований у человека до пострегистрационного наблюдения.",
  },
  {
    icon: Scale,
    title: "Сравнительная эффективность",
    description:
      "Дизайны superiority и non-inferiority, оценка относительной эффективности.",
  },
];

export function ClinicalResearchSection() {
  return (
    <section
      id="research"
      className="border-y border-border/60 bg-card/30 py-20 sm:py-28"
    >
      <div className="container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            accent="green"
            index="02"
            eyebrow="Коммерческие исследования"
            title="Клинические и коммерческие исследования"
            lede="Статистическое сопровождение исследований лекарственных препаратов и медицинских изделий на всех этапах — с длительным опытом подготовки отчётности и взаимодействия с Минздравом России."
          />
          <Badge
            variant="outline"
            className="w-fit shrink-0 border-emerald-400/30 bg-emerald-400/5 font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-emerald-800 dark:text-emerald-200 lg:mb-1.5"
          >
            Опыт работы с МЗ РФ
          </Badge>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((topic) => (
            <article
              key={topic.title}
              className="group rounded-xl border border-border/70 bg-background/40 p-5 transition-colors hover:border-emerald-400/40 sm:p-6"
            >
              <topic.icon
                className="h-5 w-5 text-emerald-700 dark:text-emerald-300 transition-transform duration-200 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-medium">{topic.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
