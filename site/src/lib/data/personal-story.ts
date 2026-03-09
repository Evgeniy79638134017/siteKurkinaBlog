export interface TimelineStage {
  id: string;
  title: string;
  description: string;
  quote: string;
}

export interface PersonalStoryData {
  heading: string;
  stages: TimelineStage[];
  bridge: string;
}

export const personalStoryData: PersonalStoryData = {
  heading: "Мой путь",
  stages: [
    {
      id: "diagnosis",
      title: "Диагноз",
      description:
        "Бывший директор, 60+ лет, ревматоидный артрит, базисная терапия, гормоны, метотрексаты.",
      quote:
        "Я поняла, что придётся принимать эти лекарства ежемесячно на долгие-долгие годы. Тогда я задалась вопросом: а что делать дальше?",
    },
    {
      id: "turning-point",
      title: "Поворотный момент",
      description:
        "Знакомство с клеточным питанием, курсы нутрициологии.",
      quote:
        "Я просто дала организму необходимые микро-макроэлементы, витамины в виде клеточного питания — и организм сам у меня решил проблему.",
    },
    {
      id: "result",
      title: "Результат",
      description:
        "Стойкая ремиссия, отмена тяжёлых препаратов, новый образ жизни.",
      quote: "Моё состояние в 64 года равно 40 лет. Представляете?",
    },
  ],
  bridge: "Теперь я помогаю другим пройти этот путь.",
};
