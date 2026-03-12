// ─── Контактная информация ───────────────────────────────────
export const CONTACT = {
  phone: "+79141595737",
  phoneDisplay: "+7 (914) 159-57-37",
  telegramChannel: "https://t.me/start63100",
  telegramPersonal: "https://t.me/Olga_bog_star",
  telegramHandle: "@Olga_bog_star",
  instagram: "https://www.instagram.com/olga_bog_star",
  instagramHandle: "@olga_bog_star",
  tiktok: "https://www.tiktok.com/@_olga_bog_remissia",
  tiktokHandle: "@_olga_bog_remissia",
  max: "https://max.ru/u/f9LHodD0cOLqBTFFRQBGaDzw_70CO08W6VqnqEQdnND6JT6iupDTToAJ3WI",
} as const;

// ─── Навигация ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Главная", href: "/" },
  { label: "Моя история", href: "/about" },
  { label: "Программы", href: "/programs" },
  { label: "Результаты", href: "/results" },
  { label: "Партнёрство", href: "/partner" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "/contact" },
] as const;

// ─── Ключевые цифры ─────────────────────────────────────────
export const STATS = [
  {
    value: "×20",
    label: "Рост дохода",
    description: "с 12 000 до 200 000 ₽/мес",
  },
  {
    value: "4 мес",
    label: "До ремиссии",
    description: "среднее время восстановления",
  },
  {
    value: "5 лет",
    label: "В бизнесе",
    description: "помогаю людям 50+",
  },
  {
    value: "64",
    label: "Мой возраст",
    description: "состояние = 40 лет",
  },
] as const;

// ─── Социальные сети (для футера и кнопок) ───────────────────
export const SOCIAL_LINKS = [
  {
    name: "Telegram (канал)",
    href: CONTACT.telegramChannel,
    icon: "telegram",
  },
  {
    name: "Telegram (личный)",
    href: CONTACT.telegramPersonal,
    icon: "telegram",
  },
  {
    name: "Instagram",
    href: CONTACT.instagram,
    icon: "instagram",
    note: "* Instagram — продукт Meta, признанной в РФ экстремистской организацией",
  },
  {
    name: "TikTok",
    href: CONTACT.tiktok,
    icon: "tiktok",
  },
  {
    name: "Max",
    href: CONTACT.max,
    icon: "max",
  },
] as const;

// ─── Мета-данные сайта ───────────────────────────────────────
export const SITE = {
  name: "Ольга Куркина",
  tagline: "Нутрициолог. Биохакинг для 50+",
  url: "https://olga-kurkina.vercel.app",
  description:
    "Личный опыт: ремиссия ревматоидного артрита. Помогаю людям 50+ восстановить здоровье и создать дополнительный доход.",
} as const;
