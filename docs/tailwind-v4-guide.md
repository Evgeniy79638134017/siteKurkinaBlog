# Tailwind CSS v4 — краткий гайд

## Главные отличия от v3

- **Нет** `tailwind.config.js` / `tailwind.config.ts` — вся конфигурация в CSS
- **Нет** директив `@tailwind base/components/utilities`
- Используй `@import "tailwindcss"` в начале globals.css
- Кастомные значения определяются через `@theme { }` блок
- Плагины подключаются через `@plugin "имя-плагина"`

## Структура globals.css

```css
@import "tailwindcss";
@import "tw-animate-css";

@theme inline {
  --color-primary: #96AB88;
  --font-heading: var(--font-playfair);
  /* ... */
}
```

## Что делать

- Определять цвета, шрифты, радиусы в `@theme { }`
- Использовать `@import` для подключения Tailwind и плагинов
- PostCSS плагин: `@tailwindcss/postcss`
- Анимации: пакет `tw-animate-css`

## Чего НЕ делать

- Не создавать tailwind.config.js/ts
- Не использовать `@tailwind base` / `@tailwind components` / `@tailwind utilities`
- Не использовать `tailwindcss-animate` (это для v3)
- Не использовать `@apply` без крайней необходимости
