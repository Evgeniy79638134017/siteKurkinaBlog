# Сайт Ольги Куркиной

Личный многостраничный сайт нутрициолога и эксперта по биохакингу Ольги Куркиной.

**Продакшн:** https://olga-kurkina.vercel.app

## Структура репозитория

```
/
├── CLAUDE.md          # Инструкции для Claude Code
├── README.md
├── .gitignore
├── ContentFiles/      # Контентная база (тексты, данные об Ольге)
└── site/              # Next.js приложение (Vercel root)
```

## Запуск

```bash
cd site
pnpm install
pnpm dev
```

Открыть: http://localhost:3000

## Деплой

GitHub → Vercel (автоматически при push в `main`).
Vercel настроен на папку `site/` как Root Directory.

## Стек

- Next.js 16 + TypeScript + App Router
- Tailwind CSS v4 (CSS-first)
- shadcn/ui (new-york)
- Motion (анимации)
- Resend (email)
