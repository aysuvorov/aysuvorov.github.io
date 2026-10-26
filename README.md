# Giga Studio — шаблон Next.js для GitHub Pages

Тот же шаблон Next.js 16 + TypeScript + shadcn/ui + Tailwind, но перенастроенный
под **статический хостинг GitHub Pages**. Никакого Node-сервера не требуется —
`next build` собирает папку `out/`, которую GitHub Pages раздаёт как обычные
статические файлы.

## Что изменилось по сравнению с исходным шаблоном

| Файл | Изменение |
|------|-----------|
| `next.config.mjs` | `output: "export"`, `images.unoptimized: true`, динамические `basePath`/`assetPrefix` из env, убран `headers()` (не поддерживается в static export), `trailingSlash: true` |
| `public/.nojekyll` | Пустой файл, чтобы GitHub Pages не игнорировал `_next/` |
| `.github/workflows/deploy.yml` | Авто-сборка и деплой на Pages при пуше в `main` |
| `package.json` | Скрипты `dev`/`build`/`lint`/`typecheck` без изменений — собирается обычным `next build`. Менеджер пакетов — Bun (`packageManager: bun@1.3.14`), `bun.lock` входит в репозиторий |
| `src/app/page.tsx`, `layout.tsx`, компоненты UI | Без изменений — ничего переделывать не нужно, всё уже клиент-side |

Динамическая отрисовка не понадобилась: единственные «динамические» части
шаблона (`next-themes` переключение темы, шрифты `geist` через `next/font`,
компонент `next/image`) полностью работают в static export.

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

## Стек

- Next.js 16 (App Router, static export)
- React 19
- TypeScript 5
- Tailwind CSS 3 + shadcn/ui (new-york)
- next-themes (тёмная/светлая тема)
- Geist Sans / Mono (через `next/font`)
