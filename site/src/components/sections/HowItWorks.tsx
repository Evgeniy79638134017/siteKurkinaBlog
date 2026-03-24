import Image from "next/image";
import { CONTACT } from "@/lib/constants";

const STEPS = [
  {
    number: "01",
    title: "Бесплатная консультация",
    description:
      "Рассказываете о своих симптомах и состоянии здоровья. Я задаю вопросы, оцениваю ситуацию и объясняю, чем могу помочь.",
    note: "30–40 минут в Telegram или по телефону",
  },
  {
    number: "02",
    title: "Индивидуальная программа",
    description:
      "На основе анкетирования составляю персональную программу клеточного питания. Никаких шаблонов — только под ваш запрос.",
    note: "Анкета + программа в течение 2–3 дней",
  },
  {
    number: "03",
    title: "Сопровождение и результат",
    description:
      "Еженедельно проверяем динамику, корректируем программу при необходимости. Цель — стойкий результат, а не временное улучшение.",
    note: "4 месяца до стойкой ремиссии",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-[#F7F0E6]">
      <div className="container-site">

        {/* Заголовок */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-[#96AB88] mb-3">
            Как это работает
          </p>
          <h2 className="font-display text-[#2C1810] mb-4">
            Три шага к результату
          </h2>
          <p className="font-sans text-[#6B5B52] text-lg">
            Простой путь от «не знаю с чего начать» до стойкого улучшения здоровья.
          </p>
        </div>

        {/* Шаги */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {STEPS.map((step, i) => (
            <div key={i} className="relative">
              {/* Разделитель между шагами */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-[#E5D5C5] z-0 -translate-x-1/2" />
              )}

              <div className="relative z-10">
                {/* Номер */}
                <div className="w-16 h-16 rounded-full bg-[#96AB88]/15 flex items-center justify-center mb-6">
                  <span className="font-display text-2xl font-semibold text-[#96AB88]">
                    {step.number}
                  </span>
                </div>

                {/* Текст */}
                <h3 className="font-display text-2xl text-[#2C1810] mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-[#6B5B52] text-base leading-relaxed mb-3">
                  {step.description}
                </p>
                <p className="font-sans text-xs text-[#A58D7F] bg-[#F4E1C4] rounded-full px-3 py-1 inline-block">
                  {step.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#2C1810]/10">
          <Image
            src="/images/consultation-olga.png"
            alt="Бесплатная консультация"
            fill
            className="object-cover object-[center_30%]"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          {/* Оверлей для читаемости */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30 bg-gradient-to-r from-black/70 to-transparent" />
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col items-start gap-6 max-w-xl">
            <div>
              <p className="font-display text-3xl md:text-4xl text-white mb-3">
                Начните с бесплатной консультации
              </p>
              <p className="font-sans text-white/90 text-lg leading-relaxed">
                Никаких обязательств. Просто поговорим о вашем здоровье, и я расскажу, с чего мы можем начать.
              </p>
            </div>
            <a
              href={CONTACT.telegramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-[#2C1810] rounded-full font-sans font-semibold text-lg hover:bg-[#F7F0E6] transition-colors"
            >
              Написать в Telegram
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
