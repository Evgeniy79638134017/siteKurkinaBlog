export interface PainPoint {
  text: string;
  iconName: string;
}

export interface PainPointsData {
  heading: string;
  items: PainPoint[];
  bridge: string;
}

export const painPointsData: PainPointsData = {
  heading: "Знакомо?",
  items: [
    {
      text: "Постоянная усталость и упадок сил",
      iconName: "Battery",
    },
    {
      text: "Боли в суставах, спине, ногах",
      iconName: "Bone",
    },
    {
      text: "Зависимость от таблеток без улучшения",
      iconName: "Pill",
    },
    {
      text: "Проблемы с давлением, ЖКТ, сном",
      iconName: "HeartPulse",
    },
    {
      text: "Ощущение «в моём возрасте уже поздно что-то менять»",
      iconName: "Clock",
    },
  ],
  bridge: "Я знаю, каково это — потому что я сама прошла через всё это.",
};
