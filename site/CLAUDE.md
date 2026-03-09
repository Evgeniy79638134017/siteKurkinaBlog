# site/ — технический CLAUDE.md

## Стек

- Next.js 16+ (App Router, React 19, Server Components)
- TypeScript (strict)
- Tailwind CSS v4 (CSS-first, никакого tailwind.config)
- shadcn/ui (new-york) — button, card, sheet, badge, separator, input
- GSAP 3.14 + @gsap/react | Motion 12 | Lenis 1.3
- Lucide React | pnpm

## Команды

```bash
pnpm dev      # dev-сервер
pnpm build    # production-сборка
pnpm lint     # ESLint
```

## Tailwind v4

- `@import "tailwindcss"` вместо @tailwind директив
- `@theme { }` в globals.css для кастомных цветов/шрифтов
- НЕТ tailwind.config.js/ts — вся конфигурация через CSS
- `tw-animate-css` вместо tailwindcss-animate

## Анимации

- **GSAP** — scroll-triggered, timeline, сложные последовательности
- **Motion** — hover, tap, mount/unmount, layout-анимации
- НЕ смешивать GSAP и Motion на одном элементе
- Всегда проверять `prefers-reduced-motion`

## Палитра

| Роль | Цвет |
|------|------|
| Фон основной | #FFFDF7 |
| Фон тёплый | #F4E1C4 |
| Фон секций | #FBF7F0 |
| Акцент (sage) | #96AB88, hover #7D9470 |
| CTA (терракота) | #D08C60, hover #B8764F |
| Текст основной | #3D3D3D |
| Текст вторичный | #6B6B6B |
| Границы | #E8DDD0 |
| Quote фон/текст | #96AB88 / #FFFFFF |

## Шрифты

- Заголовки: **Playfair Display** (serif, cyrillic + latin)
- Текст: **Montserrat** (sans-serif, cyrillic + latin)
- Минимум 18px, межстрочный 1.7–1.8x

## Конвенции

- Named exports для компонентов
- Server Components по умолчанию, "use client" только при необходимости
- Контент в `src/lib/data/` — отделён от компонентов
- Mobile-first, кнопки минимум 44x44px
- Размер файла компонента — до 150 строк
