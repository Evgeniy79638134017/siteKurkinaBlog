import Link from "next/link";

const PAINS = [
  {
    emoji: "🦴",
    title: "Боли в суставах",
    description:
      "Просыпаетесь с болью, ограниченной подвижностью. Врачи говорят «пожизненно на таблетках». Но есть другой путь.",
    solution: "Ремиссия через 4 месяца",
    href: "/programs/joints",
  },
  {
    emoji: "❤️",
    title: "Давление и сердце",
    description:
      "Скачет давление, шум в ушах, тахикардия. Привычные таблетки дают побочки, а проблема остаётся.",
    solution: "Нормализация через 4–6 недель",
    href: "/programs/pressure",
  },
  {
    emoji: "💰",
    title: "Финансы на пенсии",
    description:
      "12 000 ₽ пенсии. Зависимость от детей. Ощущение, что лучшее позади. Но в 50+ можно начать всё заново.",
    solution: "Доход до 200 000 ₽/мес",
    href: "/partner",
  },
];

export function PainSection() {
  return (
    <section className="section-padding bg-[#F4E1C4]">
      <div className="container-site">

        {/* Заголовок */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-[#96AB88] mb-3">
            Узнаёте себя?
          </p>
          <h2 className="font-display text-[#2C1810] mb-4">
            Три главные проблемы людей 50+
          </h2>
          <p className="font-sans text-[#6B5B52] text-lg">
            Я сама прошла через всё это — и нашла выход. Теперь помогаю другим.
          </p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAINS.map((pain) => (
            <div
              key={pain.title}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(44,24,16,0.08)] flex flex-col"
            >
              <div className="text-4xl mb-4">{pain.emoji}</div>
              <h3 className="font-display text-2xl text-[#2C1810] mb-3">
                {pain.title}
              </h3>
              <p className="font-sans text-[#6B5B52] text-base leading-relaxed mb-6 flex-1">
                {pain.description}
              </p>
              <div className="border-t border-[#E5D5C5] pt-4">
                <p className="font-sans text-sm text-[#A58D7F] mb-2">Решение:</p>
                <Link
                  href={pain.href}
                  className="font-sans font-semibold text-[#96AB88] hover:text-[#7A9270] transition-colors"
                >
                  {pain.solution} →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
