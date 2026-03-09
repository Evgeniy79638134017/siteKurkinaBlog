export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  iconName: string;
}

export interface ServicesData {
  heading: string;
  cards: ServiceCard[];
}

export const servicesData: ServicesData = {
  heading: "Как я могу помочь",
  cards: [
    {
      id: "consultation",
      title: "Бесплатная консультация",
      description: "Разбор вашей ситуации, без обязательств.",
      ctaText: "Записаться",
      iconName: "MessageCircle",
    },
    {
      id: "program",
      title: "Индивидуальная программа",
      description: "Персональный план питания и восстановления.",
      ctaText: "Узнать подробнее",
      iconName: "ClipboardList",
    },
    {
      id: "partnership",
      title: "Партнёрство",
      description:
        "Возможность дополнительного дохода через рекомендации.",
      ctaText: "Обсудить",
      iconName: "Handshake",
    },
  ],
};
