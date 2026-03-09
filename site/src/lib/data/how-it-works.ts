export interface Step {
  number: number;
  text: string;
  iconName: string;
}

export interface HowItWorksData {
  heading: string;
  steps: Step[];
  cta: string;
}

export const howItWorksData: HowItWorksData = {
  heading: "3 простых шага к результату",
  steps: [
    {
      number: 1,
      text: "Записываетесь на бесплатную консультацию",
      iconName: "MessageCircle",
    },
    {
      number: 2,
      text: "Получаете индивидуальную программу",
      iconName: "ClipboardList",
    },
    {
      number: 3,
      text: "Двигаетесь к результату с моей поддержкой",
      iconName: "Sparkles",
    },
  ],
  cta: "Начните с первого шага — это бесплатно",
};
