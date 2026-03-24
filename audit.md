# 🔍 Аудит проекта — Сайт Ольги Куркиной

> Дата: 24 марта 2026  
> Стек: Next.js 16 · Tailwind CSS v4 · shadcn/ui · Motion 12 · TypeScript

---

## 1. Структура проекта

```
/
├── CLAUDE.md                  # Инструкции для AI-ассистентов
├── README.md                  # Описание проекта
├── .gitignore
│
├── SiteKurkina/
│   └── ContentFiles/          # 15 файлов — контентная база об Ольге
│       ├── 1..10              # Тематические файлы (личность, миссия, продукт, ЦА, кейсы, конкуренты, цитаты, стратегия, тренды, география)
│       ├── olga_site_content.txt
│       ├── Дизайн...исследование.txt
│       ├── NextjsFull-StackToolkit...txt
│       ├── Claude_Code_промпт...txt
│       └── инструментыВвайбКодинг.md
│
└── site/                      # ← Next.js приложение (Vercel root)
    ├── package.json           # pnpm, Next 16, React 19
    ├── tsconfig.json
    ├── next.config.ts
    ├── postcss.config.mjs
    ├── eslint.config.mjs
    ├── components.json        # shadcn/ui конфиг (стиль new-york)
    │
    ├── public/
    │   └── images/
    │       └── .gitkeep       # ⚠️ Папка пустая — изображений нет
    │
    └── src/
        ├── app/               # Страницы (App Router)
        │   ├── layout.tsx     # RootLayout + шрифты + Header/Footer/FloatingCTA
        │   ├── page.tsx       # Главная (10 секций)
        │   ├── globals.css    # Дизайн-система (@theme)
        │   ├── not-found.tsx  # 404
        │   ├── about/page.tsx
        │   ├── programs/page.tsx
        │   ├── programs/[slug]/page.tsx
        │   ├── results/page.tsx
        │   ├── partner/page.tsx
        │   ├── blog/page.tsx
        │   └── contact/page.tsx
        │
        ├── components/
        │   ├── layout/
        │   │   ├── Header.tsx          # Фиксированный, с бургер-меню
        │   │   ├── Footer.tsx          # SVG-иконки соцсетей, навигация
        │   │   └── FloatingCTA.tsx     # Плавающая кнопка «Записаться»
        │   │
        │   ├── sections/              # 10 секций главной страницы
        │   │   ├── HeroSection.tsx
        │   │   ├── TrustBar.tsx
        │   │   ├── PainSection.tsx
        │   │   ├── StorySection.tsx
        │   │   ├── ProgramsSection.tsx
        │   │   ├── HowItWorks.tsx
        │   │   ├── TestimonialsSection.tsx
        │   │   ├── LeadMagnet.tsx
        │   │   ├── BlogPreview.tsx
        │   │   └── FinalCTA.tsx
        │   │
        │   ├── shared/
        │   │   └── AnimatedSection.tsx  # Обёртка motion whileInView
        │   │
        │   └── ui/                     # ⚠️ Пустая — shadcn-компоненты не установлены
        │
        ├── hooks/                      # ⚠️ Пустая
        │
        ├── lib/
        │   ├── constants.ts            # Контакты, навигация, статистика, соцсети
        │   ├── utils.ts                # cn() — clsx + tailwind-merge
        │   └── content/
        │       ├── programs.ts         # 4 программы (joints, pressure, gut, energy)
        │       ├── cases.ts            # 7 кейсов клиентов
        │       └── quotes.ts           # 16 цитат Ольги (4 категории)
        │
        └── types/
            └── index.ts               # Case, Program, BlogPost, Quote, NavLink
```

---

## 2. Страницы и секции сайта

| Маршрут | Страница | Секции / Содержимое | Статус |
|---------|----------|---------------------|--------|
| `/` | Главная | HeroSection → TrustBar → PainSection → StorySection → ProgramsSection → HowItWorks → TestimonialsSection → LeadMagnet → BlogPreview → FinalCTA | ✅ Готово |
| `/about` | Моя история | Hero + Цифры + Таймлайн (7 этапов) + Ценности (3) + Цитата + CTA | ✅ Готово |
| `/programs` | Программы | Hero + Подход (3 столпа) + Карточки (4 программы) + CTA | ✅ Готово |
| `/programs/[slug]` | Деталь программы | Breadcrumb + Hero + Для кого / Результаты + 3 шага + CTA | ✅ Готово |
| `/results` | Результаты | Hero + Статистика + Все 7 кейсов + CTA | ✅ Готово |
| `/partner` | Партнёрство | Hero + Рост дохода + Честно об MLM + Преимущества + Кейсы партнёров + FAQ (5) + CTA | ✅ Готово |
| `/blog` | Блог | Hero + Карточки статей (5 заглушек) + CTA | ⚠️ Частично |
| `/contact` | Контакты | Hero + 3 способа связи + Соцсети + Как проходит разговор + CTA | ✅ Готово |
| `404` | Не найдено | Стилизованная 404 + кнопка «На главную» | ✅ Готово |

---

## 3. Созданные компоненты

### Layout (3)
| Компонент | Описание | Клиент/Сервер |
|-----------|----------|---------------|
| `Header` | Фиксированный header, прозрачный → blur при скролле, бургер-меню на мобильных, кнопка CTA | `"use client"` |
| `Footer` | 3-колоночный: бренд, навигация, контакты + соцсети (SVG-иконки Telegram, Instagram, TikTok) | Server |
| `FloatingCTA` | Плавающая кнопка «Записаться» (появляется при scrollY > 500), spring-анимация | `"use client"` |

### Sections (10 — все на главной)
| Компонент | Описание | Анимации |
|-----------|----------|----------|
| `HeroSection` | Параллакс-блобы, бейдж, h1, подзаголовок, 2 CTA-кнопки | Параллакс, stagger fade-in |
| `TrustBar` | 4 ключевые цифры с анимированными счётчиками | `AnimatedCounter` + stagger |
| `PainSection` | 3 карточки болей ЦА с решениями | — |
| `StorySection` | Текст слева + таймлайн справа (5 этапов), цитата | — |
| `ProgramsSection` | 4 карточки программ из `PROGRAMS` данных | stagger whileInView |
| `HowItWorks` | 3 шага + CTA-баннер | — |
| `TestimonialsSection` | 3 кейса из `getFeaturedCases()` | stagger whileInView |
| `LeadMagnet` | Чек-лист здоровья + CTA на Telegram-канал | — |
| `BlogPreview` | 3 превью статей | stagger whileInView |
| `FinalCTA` | Финальный блок с цитатой + 2 кнопки | — |

### Shared (1)
| Компонент | Описание |
|-----------|----------|
| `AnimatedSection` | Обёртка `motion.div` с `whileInView` fade-in-up |

### UI (shadcn) — пусто
> ❗ Папка `components/ui/` существует, но **ни один** shadcn-компонент не установлен.

---

## 4. Плейсхолдеры изображений

### В коде
`next/image` **нигде не используется**. Ни один компонент не ссылается на файлы изображений.

Места, где **должны быть** изображения (но их нет):

| Место | Что нужно | Текущее решение |
|-------|-----------|-----------------|
| HeroSection | Фото Ольги или lifestyle-кадр | CSS-блобы (декоративные пятна) |
| StorySection | Фото Ольги «до/после» | Только текст + таймлайн |
| About (Hero) | Портретное фото | Только текст |
| ProgramsSection | Иконки программ | Emoji (🦴❤️⚡✨) |
| TestimonialsSection | Фото клиентов | Только текст |
| BlogPreview | Обложки статей | Только текстовые карточки |
| OpenGraph | `/og-image.jpg` в metadata | ❌ Файл не существует |

### В CLAUDE.md
Упоминается:
- `/images/placeholder-hero.jpg` — заглушка для Hero
- «Никаких стоковых фото — только реальные (добавим позже)»

---

## 5. Реальные изображения

### В `public/images/`
**Пусто.** Только `.gitkeep`.

### В `public/`
**Нет** `favicon.ico`, `og-image.jpg`, `robots.txt`, `sitemap.xml`.

### Итого
> 🔴 **Ноль реальных изображений** в проекте. Сайт на 100% текстовый.

---

## 6. Что готово, что нужно доделать

### ✅ Готово

| Категория | Детали |
|-----------|--------|
| **Дизайн-система** | Полная: цвета, шрифты, радиусы, тени, анимации в `globals.css @theme` |
| **Типографика** | Cormorant Garamond (заголовки) + DM Sans (текст), clamp-размеры |
| **Доступность** | `focus-visible`, `prefers-reduced-motion`, `aria-label` на кнопках |
| **SEO** | `metadata` на всех страницах, OpenGraph, Twitter Card, lang="ru" |
| **Навигация** | 7 пунктов, работает, закрывается при смене маршрута |
| **Главная** | Все 10 секций полностью реализованы с анимациями |
| **О себе** | Полная страница: таймлайн, ценности, цитата, CTA |
| **Программы** | Листинг всех 4 + динамическая страница `[slug]` с `generateStaticParams` |
| **Результаты** | Все 7 кейсов с фильтрацией по тегам |
| **Партнёрство** | Полная страница: рост дохода, MLM-прозрачность, преимущества, FAQ |
| **Контакты** | 3 способа связи, соцсети, процесс консультации |
| **404** | Стилизованная страница |
| **Контент-данные** | 4 программы, 7 кейсов, 16 цитат в TypeScript данных |
| **TypeScript типы** | `Case`, `Program`, `BlogPost`, `Quote`, `NavLink` |
| **Константы** | Контакты, навигация, статистика, соцсети |

### ⚠️ Нужно доделать

| Приоритет | Задача | Подробности |
|-----------|--------|-------------|
| 🔴 **Критично** | Фотографии Ольги | Hero, About, StorySection — без фото сайт не воспринимается как личный |
| 🔴 **Критично** | OG-Image | `/og-image.jpg` указан в metadata, но файла нет — социальные превью не работают |
| 🔴 **Критично** | Favicon | Нет `favicon.ico` — вкладка без иконки |
| 🟠 **Важно** | Blog: страницы статей | `/blog/[slug]` — маршрут не создан, ссылки ведут в 404 |
| 🟠 **Важно** | Blog: контент | 5 статей заданы как заглушки в `POSTS`, но полный контент отсутствует |
| 🟠 **Важно** | shadcn/ui компоненты | Папка `ui/` пуста — Accordion (FAQ), Dialog, Toast (sonner) не установлены |
| 🟠 **Важно** | Форма обратной связи | `react-hook-form` + `zod` + `resend` подключены, но **ни одной** формы не создано |
| 🟠 **Важно** | Кнопка CTA в HowItWorks | Кнопка «Написать в Telegram» визуально сливается — тот же `bg-[#96AB88]` на sage-фоне |
| 🟡 **Желательно** | `robots.txt` и `sitemap.xml` | Отсутствуют — нужны для SEO |
| 🟡 **Желательно** | Изображения для блог-карточек | Карточки визуально однообразны без обложек |
| 🟡 **Желательно** | Анимации на внутренних страницах | About, Programs, Results — без motion-анимаций (только главная анимирована) |
| 🟡 **Желательно** | hooks/ | Папка пустая — кастомные хуки не созданы |
| 🟡 **Желательно** | Опечатка | `/partner` page.tsx: «ответю» → «отвечу» |
| 💡 **Мелочи** | `next/image` | Нигде не используется — при добавлении фото использовать `Image` вместо `<img>` |
| 💡 **Мелочи** | Dark mode | Не предусмотрен (не требуется для ЦА 50+, но стоит учесть) |
