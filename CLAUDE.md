# Сайт Ольги Куркиной — нутрициолог, биохакинг 50+

## Стек
- Next.js 16 (App Router, Server Components, TypeScript strict)
- Tailwind CSS v4 — CSS-first, НИКАКОГО tailwind.config.js
- shadcn/ui, стиль new-york, Radix UI primitives
- Motion 12 (импорт из "motion/react", НЕ framer-motion)
- Lucide React иконки
- React Hook Form + Zod — формы
- Resend — email с форм

## Команды (выполнять из папки site/)
- `pnpm dev` / `pnpm build` / `pnpm lint` / `pnpm typecheck`
- `npx shadcn@latest add [component]` — добавить shadcn-компонент

## КРИТИЧНО: Tailwind v4
- `@import "tailwindcss"` в globals.css, НЕ директивы @tailwind base/components/utilities
- Вся тема через `@theme {}` в globals.css, НЕ tailwind.config.js
- Плагины через `@plugin` директиву в CSS
- `tw-animate-css`, НЕ tailwindcss-animate
- `bg-black/50`, НЕ bg-opacity-50
- `:root {}` на верхнем уровне, НЕ внутри `@layer base`

## КРИТИЧНО: shadcn/ui
- Стиль new-york (НЕ default)
- `components.json` — поле `tailwind.config` = пустая строка (CSS-first v4)
- Импорт из `@/components/ui/[component]`
- `cn()` из `@/lib/utils` для условных классов
- `sonner` для тостов, НЕ устаревший toast

## Архитектура (site/src/)
- `app/` — страницы App Router
- `components/layout/` — Header, Footer
- `components/sections/` — блоки страниц (HeroSection, TrustBar и т.д.)
- `components/shared/` — переиспользуемые карточки, формы
- `components/ui/` — shadcn компоненты (авто-генерируются)
- `lib/content/` — весь контент как TypeScript данные (cases, programs, quotes)
- `lib/constants.ts` — соцсети, контакты, конфигурация сайта
- `types/index.ts` — TypeScript типы проекта

## Дизайн-система (определена в globals.css @theme)
- Фон: cream `#F7F0E6`, beige `#F4E1C4`
- Акцент: sage `#96AB88`, sage-dark `#7A9270`
- CTA: terra `#D08C60`, gold `#C9A84C`
- Текст: dark `#2C1810`, muted `#6B5B52`
- Шрифты: Cormorant Garamond (заголовки) + DM Sans (текст, min 18px)
- Аудитория 50+: крупный шрифт, высокий контраст, простая навигация

## Правила кода
- Named exports везде, без default exports (кроме page.tsx/layout.tsx)
- Server Components по умолчанию; "use client" только при необходимости
- Сначала мобильная версия (mobile-first): sm: md: lg: xl:
- next/image для всех изображений, next/link для всех ссылок
- Группировка импортов: react → next → библиотеки → @/components → @/lib

## Контент
- Все тексты — в src/lib/content/ (НЕ хардкодить в JSX)
- Цитаты и данные — только из папки ContentFiles/ в корне репо
- Изображения-заглушки: `/images/placeholder-hero.jpg` и т.д.
- Никаких стоковых фото — только реальные (добавим позже)

## Воркфлоу
- Сначала ПЛАН в markdown, потом КОД — никогда наоборот
- Маленькие диффы: один компонент → проверить → следующий
- Коммит после каждого завершённого компонента/страницы

## Справочные материалы
- Контент сайта: ContentFiles/ (10 файлов с данными об Ольге)
- Стек: ContentFiles/NextjsFull-StackToolkitReferenceMarch2026.txt
- Дизайн: ContentFiles/Дизайнличногосайтадляwellnessэкспертаполноеисследование.txt
