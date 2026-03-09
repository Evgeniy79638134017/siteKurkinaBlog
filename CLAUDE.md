# Сайт Ольги Куркиной

Личный лендинг-сайт для нутрициолога Ольги Куркиной.
Аудитория — люди 50+ с хроническими проблемами здоровья.
Лайфстайл-история с мягким бизнес-вектором.
Главный CTA — запись на бесплатную консультацию через Telegram.

## Структура репозитория

- `docs/` — справочные материалы (НЕ код)
- `site/` — проект Next.js (Vercel деплоит эту папку как Root Directory)

## Справочные документы

- [docs/content-base.txt](docs/content-base.txt) — контентная база
- [docs/design-research.md](docs/design-research.md) — дизайн-исследование
- [docs/tailwind-v4-guide.md](docs/tailwind-v4-guide.md) — правила Tailwind v4
- [docs/animation-guide.md](docs/animation-guide.md) — стратегия анимаций
- [docs/prompt-log.md](docs/prompt-log.md) — лог промптов

## Каналы связи (приоритет)

1. **Telegram** — основной канал
2. **Max (VK)** — второй канал
3. **WhatsApp** — третий канал *(Meta признана экстремистской и запрещена в РФ)*

## Принципы

- Контент отделён от кода: все тексты в `site/src/lib/data/*.ts`
- Mobile-first дизайн, минимальный текст 18px
- Доступность: кнопки минимум 44x44px, prefers-reduced-motion
