import { SectionHeading } from "@/components/section-heading";

const STEPS = [
  {
    number: "01",
    title: "Задача и данные",
    description:
      "Обсуждаем цель исследования, дизайн, доступные данные и ограничения.",
  },
  {
    number: "02",
    title: "План анализа",
    description:
      "Фиксируем конечные точки, методы, объём выборки и статистический план.",
  },
  {
    number: "03",
    title: "Анализ",
    description:
      "Подготовка данных, проверка допущений, основной и чувствительные анализы.",
  },
  {
    number: "04",
    title: "Результаты",
    description:
      "Отчёт с таблицами и графиками — для публикации, диссертации или регуляторной подачи.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-y border-border/60 bg-card/30 py-20 sm:py-28"
    >
      <div className="bg-grid bg-grid-fade-radial absolute inset-0" aria-hidden="true" />
      <div className="container relative">
        <SectionHeading
          index="04"
          eyebrow="Процесс"
          title="Как строится работа"
          lede="Прозрачные этапы с понятными результатами — от первой постановки задачи до готового отчёта."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="rounded-xl border border-border/70 bg-background/50 p-6 transition-colors hover:border-orange-400/40"
            >
              <p className="font-mono text-sm font-semibold text-orange-700/80 dark:text-orange-300/80">
                {step.number}
              </p>
              <h3 className="mt-3 font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
