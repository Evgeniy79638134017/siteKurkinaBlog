export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: "Обо мне", href: "#about" },
  { label: "Программы", href: "#services" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];
