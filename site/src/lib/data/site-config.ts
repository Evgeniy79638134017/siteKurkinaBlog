export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  language: string;
  url: string;
  author: {
    name: string;
    role: string;
    age: number;
  };
  og: {
    title: string;
    description: string;
    type: string;
    locale: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Ольга Куркина",
  title: "Ольга Куркина — нутрициолог",
  description:
    "Персональный нутрициолог для людей 50+. Здоровье и энергия — проверено на себе. Запишитесь на бесплатную консультацию.",
  language: "ru",
  url: "https://example.com",
  author: {
    name: "Ольга Куркина",
    role: "Нутрициолог",
    age: 64,
  },
  og: {
    title: "Ольга Куркина — нутрициолог для людей 50+",
    description:
      "Здоровье и энергия после 50 — проверено на себе. Бесплатная консультация.",
    type: "website",
    locale: "ru_RU",
  },
};
