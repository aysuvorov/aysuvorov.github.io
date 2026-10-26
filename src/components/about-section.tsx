import { ExternalLink, GraduationCap, Landmark } from "lucide-react";
import Image from "next/image";

import {
  PROFILE_ORCID_URL,
  PROFILE_SCOPUS_URL,
  PROFILE_WOS_URL,
} from "@/lib/contacts";
import { SectionHeading } from "@/components/section-heading";

const STATS = [
  { value: "95+", label: "публикаций в рецензируемых журналах" },
  { value: "15+", label: "статей в журналах квартиля Q1" },
  { value: "8–10", label: "публикаций в год с 2014 года" },
];

const EXPERIENCE = [
  {
    years: "2023 — н. в.",
    role: "Главный биостатистик",
    place:
      "Департамент аналитики и научного прогнозирования, Сеченовский университет",
  },
  {
    years: "2023 — н. в.",
    role: "Главный биостатистик",
    place:
      "Институт персонализированной кардиологии, Сеченовский университет",
  },
  {
    years: "2021–2023",
    role: "Главный биостатистик",
    place: "Центр анализа сложных систем, Сеченовский университет",
  },
  {
    years: "2021–2022",
    role: "Научный сотрудник",
    place:
      "ННГУ им. Н.И. Лобачевского — объяснимый искусственный интеллект, анализ данных",
  },
  {
    years: "2020–2022",
    role: "Биостатистик",
    place: "ООО «Ферон» — анализ данных, планирование КИ, отчётность",
  },
  {
    years: "2016–2017",
    role: "Ассистент кафедры общей терапии",
    place: "РНИМУ им. Н.И. Пирогова",
  },
  {
    years: "2012–2016",
    role: "Научный сотрудник",
    place: "НМИЦ терапии и профилактической медицины",
  },
];

const EDUCATION = [
  {
    years: "2012–2015",
    role: "Кандидат медицинских наук, «Кардиология»",
    place: "НИЦ терапии и профилактической медицины",
  },
  {
    years: "2003–2009",
    role: "Лечебное дело",
    place: "Первый МГМУ им. И.М. Сеченова",
  },
];

const TEACHING = [
  "«Биостатистика» для магистрантов — Университет «Сириус», 2025",
  "«Биостатистика и дизайн исследований и экспериментов» — ФГБУ НЦЭСП, 2025",
  "«Биостатистика и дизайн исследований» — Сеченовский университет, 2024",
  "Курс по систематическим обзорам и мета-анализам — Самарский ГМУ",
  "Академические курсы в Сеченовском университете: статистика и планирование эксперимента, мета-анализы, машинное обучение для медиков",
  "Научное руководство аспирантом — фенотипическое профилирование выдыхаемого воздуха, 2025",
];

const FUNDING = [
  "РНФ, 2025 — 4 заявки (≈7 млн ₽/год каждая), одна — руководство проектом по анализу данных с машинным обучением",
  "РНФ № 25-25-00332 — биомаркеры метаболомного профилирования при атеросклерозе брахиоцефальных артерий",
  "РНФ № 24-15-00549 — неинвазивная диагностика заболеваний лёгких: протонная масс-спектрометрия и ИИ",
  "«Приоритет 2030» — руководитель локального проекта Сеченовского университета",
  "2021–2022 — участник групп «Надёжный и логически прозрачный ИИ» и «Цифровой биодизайн»",
];

const INTERESTS = [
  "ML и наука о данных в медицине",
  "Сетевой анализ",
  "Временные ряды и продольные данные",
  "Дизайн клинических испытаний",
  "Статистическое моделирование",
  "Систематические обзоры и мета-анализы",
  "Клиническая эпидемиология",
];

const PROFILE_LINKS = [
  {
    href: PROFILE_ORCID_URL,
    label: "ORCID",
    note: "полный список публикаций",
  },
  {
    href: PROFILE_WOS_URL,
    label: "Web of Science",
    note: "H-индекс",
  },
  {
    href: PROFILE_SCOPUS_URL,
    label: "Scopus",
    note: "H-индекс",
  },
];

function CvCard({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: string[];
  icon: typeof GraduationCap;
}) {
  return (
    <div className="rounded-2xl border border-border/70 bg-card/50 p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange-400/25 bg-orange-400/10">
          <Icon className="h-4 w-4 text-orange-700 dark:text-orange-300" aria-hidden="true" />
        </span>
        <h3 className="font-medium">{title}</h3>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="border-l-2 border-border/60 pl-4 text-sm leading-relaxed text-muted-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Timeline({
  title,
  items,
}: {
  title: string;
  items: { years: string; role: string; place: string }[];
}) {
  return (
    <div className="rounded-2xl border border-border/70 bg-card/50 p-6 sm:p-7">
      <h3 className="font-medium">{title}</h3>
      <ol className="mt-5 space-y-4">
        {items.map((item, i) => (
          <li
            key={`${item.years}-${item.role}-${item.place}`}
            className="relative border-l-2 border-border/60 pl-4"
          >
            <span
              className={`absolute -left-[5px] top-1.5 h-2 w-2 rounded-full ${
                i === 0 ? "bg-orange-400" : "bg-orange-400/40"
              }`}
              aria-hidden="true"
            />
            <p className="font-mono text-xs text-orange-700/80 dark:text-orange-300/80">{item.years}</p>
            <p className="mt-1 text-sm font-medium leading-snug">{item.role}</p>
            <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
              {item.place}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container">
        <div className="flex items-center justify-between gap-6">
          <SectionHeading
            index="05"
            eyebrow="Обо мне"
            title={
              <>
                Александр <span className="text-orange-700 dark:text-orange-300">Суворов</span>
              </>
            }
          />
          <Image
            src="/avatar.jpg"
            alt="Фотография: Александр Суворов"
            width={1280}
            height={1280}
            sizes="(min-width: 640px) 192px, 144px"
            className="h-36 w-36 shrink-0 rounded-full object-cover ring-1 ring-orange-400/30 sm:h-48 sm:w-48"
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Левая колонка: профиль, метрики, кредо */}
          <div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-xl border border-border/70 bg-card/50 p-4"
                >
                  <p className="font-mono text-2xl font-semibold text-orange-700 dark:text-orange-300">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 font-serif text-base leading-relaxed text-muted-foreground">
              <p>
                Я — биостатистик Сеченовского университета, где на стыке
                медицины, математики и искусственного интеллекта мы создаём
                исследования, меняющие практику здравоохранения.
              </p>
              <p>
                Моё научное кредо — превращать сложные медицинские данные в
                ясные решения. С медицинским образованием, опытом публикаций в
                топ-журналах и экспертизой в машинном обучении я помогаю
                исследователям находить истину в данных, а не просто цифры.
              </p>
              <p>
                Вместе мы разрабатываем передовые методы анализа для клинических
                испытаний, создаём прогностические модели, раскрываем потенциал
                мета-анализов и внедряем объяснимый ИИ в медицинскую практику.
              </p>
              <p>
                Если вы готовы вывести свои исследования на новый уровень
                точности и значимости — давайте работать вместе.{" "}
                <span className="text-orange-700 dark:text-orange-300">
                  Ваше следующее открытие начинается здесь.
                </span>
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {PROFILE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-md border border-border/70 bg-card/50 px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-orange-400/40 hover:text-foreground"
                  >
                    <span className="text-orange-700 dark:text-orange-300">
                      {link.label}
                    </span>
                    <span aria-hidden="true">·</span>
                    {link.note}
                    <ExternalLink
                      className="h-3 w-3 shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Правая колонка: опыт и образование */}
          <div className="space-y-5">
            <Timeline title="Опыт работы" items={EXPERIENCE} />
            <Timeline title="Образование" items={EDUCATION} />
          </div>
        </div>

        {/* Научные интересы */}
        <div className="mt-10">
          <h3 className="font-medium">Научные интересы</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {INTERESTS.map((interest) => (
              <li
                key={interest}
                className="rounded-md border border-border/70 bg-card/50 px-2.5 py-1.5 text-xs text-muted-foreground"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>

        {/* Преподавание и гранты */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <CvCard title="Преподавание и руководство" items={TEACHING} icon={GraduationCap} />
          <CvCard title="Гранты и финансирование" items={FUNDING} icon={Landmark} />
        </div>
      </div>
    </section>
  );
}
