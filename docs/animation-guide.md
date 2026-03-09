# Стратегия анимаций

## Два движка — разделение обязанностей

### GSAP 3.14 + @gsap/react
- Scroll-triggered анимации (ScrollTrigger)
- Сложные timeline-последовательности
- Анимации при появлении секций

### Motion 12 (пакет `motion`)
- Hover, tap, focus взаимодействия
- Mount/unmount анимации
- Layout-анимации

**Правило:** НЕ смешивать GSAP и Motion на одном DOM-элементе.

## Lenis 1.3
- Smooth scroll для всей страницы
- Инициализировать в layout один раз

## Правила реализации

1. Используй хук `useGSAP` из `@gsap/react` (не useEffect)
2. Вызывай `registerPlugin(ScrollTrigger)` один раз
3. Передавай `containerRef` как scope в useGSAP
4. Всегда проверяй `prefers-reduced-motion`:
   ```ts
   const prefersReducedMotion = window.matchMedia(
     "(prefers-reduced-motion: reduce)"
   ).matches;
   ```
5. При reduced-motion — отключай все анимации, показывай финальное состояние
