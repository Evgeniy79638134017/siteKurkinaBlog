export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imagePlaceholder: boolean;
}

export interface BlogData {
  heading: string;
  posts: BlogPost[];
}

export const blogData: BlogData = {
  heading: "Полезные статьи",
  posts: [
    {
      id: "post-1",
      slug: "pitanie-posle-50",
      title: "Питание после 50: с чего начать",
      excerpt:
        "Простые шаги, которые помогут наладить питание и почувствовать первые результаты уже через пару недель. Без жёстких диет и голодовок.",
      date: "2026-02-15",
      imagePlaceholder: true,
    },
    {
      id: "post-2",
      slug: "vitaminy-iz-apteki",
      title: "Почему витамины из аптеки не работают",
      excerpt:
        "Разбираемся, почему синтетические витамины усваиваются хуже и чем клеточное питание отличается от обычных добавок.",
      date: "2026-02-01",
      imagePlaceholder: true,
    },
    {
      id: "post-3",
      slug: "sustavy-chto-delat",
      title: "Суставы: что делать, когда таблетки не помогают",
      excerpt:
        "Личный опыт и истории клиентов: как правильное питание и микроэлементы помогают там, где медикаменты бессильны.",
      date: "2026-01-20",
      imagePlaceholder: true,
    },
  ],
};
