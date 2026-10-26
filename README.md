# BioStat Pro — лендинг на Next.js для GitHub Pages

Лендинг биостатистика (BioStat Pro / Александр Суворов), перенастроенный под
**статический хостинг GitHub Pages**. Никакого Node-сервера не требуется —
`next build` собирает папку `out/`, которую GitHub Pages раздаёт как обычные
статические файлы. KaTeX-формулы и `next/font` уже отрабатывают на этапе
сборки (SSG), так что готовый HTML содержит уже отрендеренную разметку.

## Что изменилось по сравнению с исходным шаблоном

| Файл | Изменение |
|------|-----------|
| `next.config.mjs` | `output: "export"`, `images.unoptimized: true`, динамические `basePath`/`assetPrefix` из env, убран `headers()` (CSP) — не поддерживается в static export, `trailingSlash: true` |
| `public/.nojekyll` | Пустой файл, чтобы GitHub Pages не игнорировал `_next/` |
| `.github/workflows/deploy.yml` | Авто-сборка и деплой на Pages при пуше в `main`. Установка через Bun (под `bun.lock`), basePath определяется автоматически по имени репозитория |
| `src/app/page.tsx`, секции, `math-formula.tsx`, `copy-email-button.tsx` | Без изменений — всё, что было «динамическим», работает на клиенте или на этапе сборки |

Динамическая отрисовка не понадобилась:

- `MathFormula` рендерит TeX через `katex.renderToString` при сборке — это
  статическая генерация (SSG), а не SSR. Результат попадает в HTML как
  готовая разметка.
- `next/font/google` (Geist Sans/Mono + Lora с кириллицей) скачивает шрифты
  во время `next build` и инлайнит их в CSS — в рантайме сетевых запросов
  к Google Fonts нет.
- `next/image` для `/logo.svg` и `/avatar.jpg` работает в режиме
  `unoptimized: true` — картинки отдаются «как есть», но basePath
  подставляется автоматически.
- `CopyEmailButton` — клиентский компонент, `navigator.clipboard` работает
  на любой статике.
- `next-themes` переключатель темы — полностью клиентский.

## Быстрый старт

### Локально

Проект использует **Bun** (версия 1.3.14 указана в `package.json` через
`packageManager` и в `.node-version` — Node 24). Если Bun не установлен,
поставьте его одной командой:

```bash
# macOS / Linux / WSL
curl -fsSL https://bun.sh/install | bash
# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"
```

Далее:

```bash
bun install          # установка зависимостей (по bun.lock)
bun run dev          # http://localhost:3000
```

Если хотите работать через npm, удалите `bun.lock` и `packageManager` из
`package.json`, затем `npm install` создаст `package-lock.json`.

### Локальная сборка статического сайта

```bash
bun run build        # создаёт папку out/
bunx serve out       # посмотреть результат локально
```

Если репозиторий будет лежать не в корне `user.github.io`, а по под-пути
`user.github.io/<repo>/`, локально тоже нужно задать basePath, чтобы пути
сходились:

```bash
NEXT_PUBLIC_BASE_PATH=/my-repo bun run build
bunx serve out       # открыть http://localhost:3000/my-repo/
```

## Деплой на GitHub Pages

1. Залейте проект в репозиторий на GitHub.
2. В репозитории: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Сделайте push в ветку `main` (или запустите workflow вручную: **Actions →
   Deploy to GitHub Pages → Run workflow**).
4. Через 1–2 минуты сайт появится по адресу:
   - `https://<user>.github.io/` — если репозиторий называется `<user>.github.io`,
   - `https://<user>.github.io/<repo>/` — для любого другого имени.

Workflow сам определяет, какой `basePath` подставить, исходя из имени
репозитория — ничего вручную править не нужно.

## Как переключить basePath вручную (если нужно)

`basePath` читается из переменной окружения `NEXT_PUBLIC_BASE_PATH` во время
сборки. Примеры:

| Сценарий | Значение |
|----------|----------|
| Репозиторий `<user>.github.io` | не задавать (пустая строка) |
| Репозиторий `my-project` | `/my-project` |
| Кастомный домен `example.com` | не задавать (пустая строка) |

GitHub Actions уже это делает автоматически.

## Известные ограничения GitHub Pages

- **Нет серверной оптимизации картинок** — `next/image` работает в режиме
  `unoptimized: true`. Картинки отдаются «как есть».
- **Нет API routes** — любые `/api/*` нужно выносить в сторонний бэкенд
  (Cloudflare Workers, Vercel Functions и т. п.) либо реализовывать
  полностью на клиенте.
- **Нет middleware и Server Actions** — только клиентские взаимодействия.
- **404 на свежем деплое** — Pages иногда кэширует редиректы; подождите
  минуту или сделайте hard refresh (Ctrl+Shift+R).
- **CSP для iframe-встраивания** — исходный шаблон выставлял
  `frame-ancestors *;` через `headers()`, что недоступно в static export.
  Если сайт нужно встраивать в iframe, добавьте
  `<meta http-equiv="Content-Security-Policy" content="frame-ancestors *;">`
  в `src/app/layout.tsx`.

## Структура

```
src/
  app/                     # App Router (одна страница-лендинг)
    layout.tsx             # шрифты, ThemeProvider, метаданные
    page.tsx               # композиция секций
    globals.css            # тема (light/dark), утилиты .bg-grid
    site.json              # title / description / url
  components/
    hero-section.tsx       # первая секция: SVG-кривые дожития, KaTeX-формула
    research-services-section.tsx
    clinical-research-section.tsx
    ai-modeling-section.tsx
    process-section.tsx
    about-section.tsx      # CV, опыт, гранты, фото
    contact-section.tsx
    site-header.tsx        # sticky-навигация
    site-footer.tsx
    math-formula.tsx       # KaTeX рендер на этапе сборки
    survival-chart.tsx     # декоративные SVG S(t) и h(t)
    copy-email-button.tsx  # клиентский copy-to-clipboard
    brand-mark.tsx
    ui/                    # shadcn/ui (new-york)
  lib/
    utils.ts               # cn()
    contacts.ts            # email, Telegram, ORCID, WoS, Scopus
public/
  logo.svg
  avatar.jpg
  .nojekyll                # чтобы GitHub Pages не прятал _next/
.github/workflows/
  deploy.yml               # авто-деплой на Pages (Bun + next build)
```

## Стек

- Next.js 16 (App Router, static export)
- React 19
- TypeScript 5
- Tailwind CSS 3 + shadcn/ui (new-york)
- next-themes (тёмная/светлая тема, по умолчанию светлая)
- KaTeX 0.19 (рендер TeX при сборке)
- Geist Sans / Mono + Lora (через `next/font/google`, кириллица включена)
