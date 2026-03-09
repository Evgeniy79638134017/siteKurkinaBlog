export interface HeroData {
  heading: string;
  subheading: string;
  ctaPrimary: {
    text: string;
    href: "messenger";
  };
  ctaSecondary: {
    text: string;
    href: string;
  };
  bannerQuote: string;
}

export const heroData: HeroData = {
  heading: "Здоровье и энергия после 50 — проверено на себе",
  subheading:
    "Нутрициолог · Помогла 200+ клиентам вернуть лёгкость и радость жизни",
  ctaPrimary: {
    text: "Записаться на бесплатную консультацию",
    href: "messenger",
  },
  ctaSecondary: {
    text: "Узнать мою историю",
    href: "#story",
  },
  bannerQuote: "Моё состояние в 64 года равно 40 лет. Представляете?",
};
