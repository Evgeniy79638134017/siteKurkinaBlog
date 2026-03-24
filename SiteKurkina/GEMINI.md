---

# Контекст проекта — Сайт Ольги Куркиной

## Проект
Личный сайт нутрициолога Ольги Куркиной — wellness-эксперт, биохакинг 50+.
Целевая аудитория: женщины 45–65 лет.
Сайт должен вызывать доверие, быть простым и тёплым.

## Стек
- Next.js 16 (App Router, Server Components, TypeScript strict)
- Tailwind CSS v4 — CSS-first, без tailwind.config.js
- shadcn/ui (стиль new-york), Radix UI
- Motion 12 (импорт из "motion/react", НЕ framer-motion)
- Lucide React иконки
- React Hook Form + Zod — формы
- Resend — email с форм

## Дизайн-система

### Цвета (определены в globals.css @theme)
- Фон: cream #F7F0E6, beige #F4E1C4
- Акцент: sage #96AB88, sage-dark #7A9270
- CTA: terra #D08C60, gold #C9A84C
- Текст: dark #2C1810, muted #6B5B52

### Типографика
- Заголовки: Cormorant Garamond
- Текст: DM Sans (минимум 18px)
- Аудитория 50+: крупный шрифт, высокий контраст

### Визуальный стиль
- Тёплый, натуральный, wellness-ориентированный
- Много воздуха и белого пространства
- Мягкие земляные тона, натуральное освещение
- Референс: ContentFiles/Дизайнличногосайтадляwellnessэкспертаполноеисследование.txt

## Критичные правила кода
- @import "tailwindcss" в globals.css, НЕ директивы @tailwind base/components/utilities
- Вся тема через @theme {} в globals.css, НЕ tailwind.config.js
- @plugin директива в CSS для плагинов
- tw-animate-css, НЕ tailwindcss-animate
- bg-black/50, НЕ bg-opacity-50
- :root {} на верхнем уровне, НЕ внутри @layer base
- Named exports везде, без default exports (кроме page.tsx/layout.tsx)
- Server Components по умолчанию; "use client" только при необходимости
- Mobile-first: sm: md: lg: xl:
- next/image для всех изображений, next/link для всех ссылок
- Группировка импортов: react → next → библиотеки → @/components → @/lib

## Архитектура (site/src/)
- app/ — страницы App Router
- components/layout/ — Header, Footer
- components/sections/ — блоки страниц (HeroSection, TrustBar и т.д.)
- components/shared/ — переиспользуемые карточки, формы
- components/ui/ — shadcn компоненты (авто-генерируются)
- lib/content/ — весь контент как TypeScript данные
- lib/constants.ts — соцсети, контакты, конфигурация
- types/index.ts — TypeScript типы проекта

## Источники контента
- Все тексты: src/lib/content/
- Справочные данные об Ольге: ContentFiles/ (10 файлов в корне репо)
- Стек-референс: ContentFiles/NextjsFull-StackToolkitReferenceMarch2026.txt
- Никогда не выдумывай факты об Ольге — бери только из ContentFiles/
- Никаких стоковых фото — только реальные или сгенерированные

## Поведение агента
- Всегда читай globals.css перед стилевыми решениями
- Используй дизайн-токены — никогда не хардкодь цвета
- При генерации изображений — тёплая wellness-эстетика
- Контент берётся из src/lib/content/, НЕ хардкодится в JSX
- Сначала ПЛАН в markdown, потом КОД — никогда наоборот
- Маленькие диффы: один компонент → проверить → следующий
- Коммит после каждого завершённого компонента/страницы

## Изображения
- Плейсхолдеры: /images/placeholder-hero.jpg и т.д.
- При замене плейсхолдеров: генерируй через generate_image
- Стиль фото: тёплое естественное освещение, земляные тона
- Лицо эксперта: используй Identity Locking с референсными фото

## Команды (выполнять из папки site/)
- pnpm dev / pnpm build / pnpm lint / pnpm typecheck
- npx shadcn@latest add [component] — добавить shadcn-компонент
