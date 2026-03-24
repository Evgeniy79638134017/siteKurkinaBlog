import { Metadata } from "next";
import { CONTACT } from "@/lib/constants";
import { getCasesByTag } from "@/lib/content/cases";

export const metadata: Metadata = {
  title: "Стать партнёром",
  description:
    "Как стать партнёром и построить дополнительный доход на пенсии. Реальная история роста с 12 000 до 200 000 ₽/мес.",
};

const INCOME_STAGES = [
  { period: "Старт", amount: "12 000 ₽", note: "Обычная пенсия" },
  { period: "3 месяца", amount: "30 000 ₽", note: "Первые продажи" },
  { period: "6 месяцев", amount: "60 000 ₽", note: "Постоянные клиенты" },
  { period: "1 год", amount: "100 000 ₽", note: "Своя команда" },
  { period: "Сегодня", amount: "200 000+ ₽", note: "Лидер структуры" },
];

const ADVANTAGES = [
  {
    title: "Реальный продукт",
    text: "Клеточное питание — продукт, который реально помогает. Вы продаёте то, в чём уверены на 100%.",
  },
  {
    title: "Личный опыт",
    text: "Вы сами прошли через восстановление здоровья. Ваша история — лучший аргумент для клиентов.",
  },
  {
    title: "Тёплая аудитория",
    text: "Люди 50+ активно ищут решения для здоровья. Они готовы слушать тех, кто прошёл этот путь.",
  },
  {
    title: "Обучение и поддержка",
    text: "Я веду свою структуру лично. Обучаю, мотивирую, помогаю с первыми продажами.",
  },
  {
    title: "Свой график",
    text: "Работайте когда удобно: дома, через Telegram, без офиса и начального капитала.",
  },
  {
    title: "Пассивный доход",
    text: "Когда вы строите команду, деньги приходят и от продаж вашей структуры — не только ваших личных.",
  },
];

const FAQ = [
  {
    q: "Это сетевой маркетинг?",
    a: "Да, честно. Это партнёрство с компанией по клеточному питанию. Модель MLM — у вас есть личные продажи и бонусы от команды. Я не скрываю структуру и не обещаю лёгких денег.",
  },
  {
    q: "Нужны ли стартовые вложения?",
    a: "Минимальные. Для начала достаточно приобрести стартовый набор для личного использования — вы сами убедитесь в результате перед тем, как рекомендовать другим.",
  },
  {
    q: "Что если у меня нет опыта в продажах?",
    a: "У меня его тоже не было. 30 лет в образовании — не продажи. Я учила других строить бизнес так же, как сама его строила: честно, через личную историю и результаты.",
  },
  {
    q: "Сколько времени нужно уделять?",
    a: "Зависит от ваших целей. Первые 3–6 месяцев — активно, 2–4 часа в день. Потом структура начинает работать сама.",
  },
  {
    q: "Можно ли совмещать с основной работой?",
    a: "Да. Многие мои партнёры начинали, продолжая работать на основном месте. Когда доход вырастает — решают сами.",
  },
];

export default function PartnerPage() {
  const businessCases = getCasesByTag("business");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-sage mb-4">
              Партнёрство
            </p>
            <h1 className="font-display text-dark mb-6">
              Дополнительный доход на пенсии — это реально
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed max-w-2xl">
              Я начинала с пенсии 12 000 ₽. Через 5 лет — 200 000 ₽/мес. Не потому
              что повезло, а потому что продукт, в который верю, помогает реальным людям.
            </p>
          </div>
        </div>
      </section>

      {/* История роста дохода */}
      <section className="py-14 bg-sage">
        <div className="container-site">
          <h2 className="font-display text-white text-center mb-10">
            Рост моего дохода — реальная хронология
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {INCOME_STAGES.map((stage, i) => (
              <div
                key={i}
                className={`text-center p-5 rounded-2xl ${
                  i === INCOME_STAGES.length - 1
                    ? "bg-dark"
                    : "bg-white/20"
                }`}
              >
                <p className="font-sans text-xs text-white/70 mb-1">{stage.period}</p>
                <p className={`font-display text-2xl font-semibold mb-1 ${
                  i === INCOME_STAGES.length - 1 ? "text-white" : "text-gold"
                }`}>
                  {stage.amount}
                </p>
                <p className={`font-sans text-xs ${i === INCOME_STAGES.length - 1 ? "text-white/60" : "text-muted-light"}`}>{stage.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Честно об MLM */}
      <section className="section-padding bg-beige">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-dark mb-6">
              Честно о том, как это работает
            </h2>
            <div className="bg-white rounded-2xl p-8 mb-8">
              <p className="font-sans text-muted text-lg leading-relaxed mb-4">
                Это сетевой маркетинг — я не скрываю. Компания по клеточному питанию.
                Вы покупаете продукт по партнёрской цене и рекомендуете другим.
                С каждой покупки получаете вознаграждение.
              </p>
              <p className="font-sans text-muted text-lg leading-relaxed mb-4">
                Когда вы строите команду — получаете бонусы и от продаж своей структуры.
                Это называется пассивный доход.
              </p>
              <p className="font-sans text-dark font-semibold text-lg">
                Главное условие: верьте в то, что рекомендуете.
                Именно поэтому я прошу каждого партнёра начать с личного опыта.
              </p>
            </div>

            {/* Сравнение */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream rounded-2xl p-6">
                <h3 className="font-display text-xl text-taupe mb-4">
                  Обычный покупатель
                </h3>
                <ul className="space-y-2">
                  {["Покупает по розничной цене", "Только личные продукты", "Нет дохода от рекомендаций"].map((item) => (
                    <li key={item} className="font-sans text-sm text-muted flex gap-2">
                      <span className="text-taupe">○</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-sage/15 rounded-2xl p-6 border-2 border-sage/30">
                <h3 className="font-display text-xl text-sage mb-4">
                  Партнёр
                </h3>
                <ul className="space-y-2">
                  {[
                    "Покупает по партнёрской цене",
                    "Доход с каждой рекомендации",
                    "Бонусы от команды",
                    "Карьерный рост внутри компании",
                  ].map((item) => (
                    <li key={item} className="font-sans text-sm text-dark flex gap-2">
                      <span className="text-sage">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="section-padding bg-cream">
        <div className="container-site">
          <h2 className="font-display text-dark mb-10 max-w-xl">
            Почему это работает для людей 50+
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv, i) => (
              <div key={i} className="bg-white rounded-2xl p-7">
                <div className="w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center mb-4">
                  <span className="font-display text-base font-semibold text-sage">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl text-dark mb-2">{adv.title}</h3>
                <p className="font-sans text-muted text-sm leading-relaxed">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Кейсы партнёров */}
      {businessCases.length > 0 && (
        <section className="section-padding bg-beige">
          <div className="container-site">
            <h2 className="font-display text-dark mb-10">
              Истории партнёров
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businessCases.map((c) => (
                <div key={c.id} className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(44,24,16,0.08)]">
                  <p className="font-display text-xl text-dark font-semibold mb-1">
                    {c.name}
                    {c.age > 0 && (
                      <span className="font-sans text-sm text-taupe font-normal ml-2">
                        {c.age} лет
                      </span>
                    )}
                  </p>
                  <p className="font-sans text-sm text-taupe mb-4">{c.problem}</p>
                  <ul className="space-y-1 mb-5">
                    {c.results.map((r, i) => (
                      <li key={i} className="font-sans text-sm text-dark flex gap-2">
                        <span className="text-sage flex-shrink-0">✓</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="border-l-2 border-gold pl-4">
                    <p className="font-display text-base italic text-muted">
                      «{c.quote}»
                    </p>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding bg-cream">
        <div className="container-site">
          <h2 className="font-display text-dark mb-10 max-w-xl">
            Частые вопросы
          </h2>
          <div className="max-w-3xl space-y-4">
            {FAQ.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7">
                <h3 className="font-display text-xl text-dark mb-3">
                  {item.q}
                </h3>
                <p className="font-sans text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage">
        <div className="container-site text-center">
          <h2 className="font-display text-white mb-4">
            Готовы узнать подробнее?
          </h2>
          <p className="font-sans text-cream/85 text-lg mb-8 max-w-xl mx-auto">
            Напишите мне в Telegram — расскажу о старте, отвечу на все вопросы.
            Никакого давления, только честный разговор.
          </p>
          <a
            href={CONTACT.telegramPersonal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-sage-dark rounded-full font-sans font-semibold text-lg hover:bg-cream transition-colors"
          >
            Написать Ольге в Telegram
          </a>
        </div>
      </section>
    </>
  );
}
