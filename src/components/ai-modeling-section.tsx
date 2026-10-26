import {
  BrainCircuit,
  Cpu,
  Dna,
  GitBranch,
  Hourglass,
  Image as ImageIcon,
  Network,
  Radar,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const MODELS: {
  icon: LucideIcon;
  title: string;
  description: string;
  note?: string;
}[] = [
  {
    icon: BrainCircuit,
    title: "Консультирование и объём выборки",
    description:
      "Оценка выполнимости задачи и объёма данных, достаточного для цели моделирования.",
  },
  {
    icon: Cpu,
    title: "Диагностика и статичные модели",
    description:
      "Диагностические и прогностические модели на клинических и лабораторных признаках.",
  },
  {
    icon: Hourglass,
    title: "Дожитие",
    description:
      "Модели времени до события — от классических методов до машинного обучения.",
  },
  {
    icon: Dna,
    title: "Биохимия и биоинформатика",
    description:
      "Работа с лабораторными и омиксными данными, поиск биомаркеров.",
  },
  {
    icon: Network,
    title: "Моделирование взаимодействий",
    description:
      "Взаимодействия факторов и структура связей между переменными.",
  },
  {
    icon: GitBranch,
    title: "Причинно-следственный анализ",
    description:
      "Каузальные постановки: от причинных графов до оценки эффектов вмешательств.",
  },
  {
    icon: Radar,
    title: "Поисковые исследования",
    description:
      "Разведочный анализ данных и генерация гипотез для новых исследований.",
  },
  {
    icon: ImageIcon,
    title: "Работа с изображениями",
    description:
      "Анализ медицинских изображений методами компьютерного зрения.",
  },
  {
    icon: Waves,
    title: "Дифференциальные уравнения",
    description:
      "Динамические модели с ОДУ — точечно, в зависимости от постановки задачи.",
    note: "ограниченно",
  },
];

export function AiModelingSection() {
  return (
    <section id="modeling" className="py-20 sm:py-28">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            accent="orange"
            index="03"
            eyebrow="Моделирование и ИИ"
            title="Математическое моделирование и алгоритмы ИИ"
            lede="Когда классических методов недостаточно: предиктивные модели, причинно-следственный анализ и машинное обучение для биомедицинских данных."
          />
          <div className="mt-8 rounded-xl border border-orange-400/25 bg-orange-400/5 p-5">
            <h3 className="text-sm font-medium text-orange-800 dark:text-orange-200">
              Принцип работы с моделями
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Модель — инструмент ответа на содержательный вопрос: сначала
              валидация данных и корректная постановка задачи, затем обучение и
              честная проверка качества на данных, которые модель не видела.
            </p>
          </div>
        </div>
        <ul className="lg:pt-2">
          {MODELS.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-4 border-b border-border/60 py-4 first:pt-0 last:border-b-0 last:pb-0"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-orange-400/25 bg-orange-400/10">
                <item.icon className="h-4 w-4 text-orange-700 dark:text-orange-300" aria-hidden="true" />
              </span>
              <div>
                <h3 className="flex flex-wrap items-center gap-2 text-sm font-medium">
                  {item.title}
                  {item.note ? (
                    <span className="rounded border border-orange-400/30 bg-orange-400/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-orange-800 dark:text-orange-200">
                      {item.note}
                    </span>
                  ) : null}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
