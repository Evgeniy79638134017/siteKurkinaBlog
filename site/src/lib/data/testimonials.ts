export interface Testimonial {
  id: string;
  age: number;
  problem: string;
  duration: string;
  result: string;
  quote: string;
  location?: string;
}

export interface TestimonialsData {
  heading: string;
  items: Testimonial[];
}

export const testimonialsData: TestimonialsData = {
  heading: "Истории тех, кому я помогла",
  items: [
    {
      id: "case-1",
      age: 56,
      problem: "Ревматоидный артрит, базисная терапия без результатов.",
      duration: "4 месяца",
      result: "Стойкая ремиссия.",
      quote: "Боли у неё были, а сейчас болей нет. Стойкая ремиссия.",
    },
    {
      id: "case-2",
      age: 67,
      problem: "Суставы, давление, ЖКТ, тахикардия. Семейная пара (67 и 60 лет).",
      duration: "2 месяца",
      result: "Кардинальное улучшение.",
      quote:
        "Они стали путешествовать, гулять, работать в саду. Образ жизни изменился кардинально.",
      location: "Казахстан",
    },
    {
      id: "case-3",
      age: 0,
      problem: "Врач, кандидат медицинских наук. Скептик. Ревматоидный артрит.",
      duration: "",
      result: "Ремиссия.",
      quote: "Вы попробуйте. А если у вас тоже получится?",
    },
    {
      id: "case-4",
      age: 0,
      problem:
        "Врач-терапевт. Полгода пользовалась продукцией, стала рекомендовать пациентам, прошла обучение в Сеченова.",
      duration: "6 месяцев",
      result: "Стала партнёром.",
      quote: "Стала самым успешным партнёром в структуре.",
    },
  ],
};
