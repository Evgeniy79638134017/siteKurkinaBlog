import Image from "next/image";
import Link from "next/link";

const TIMELINE = [
  {
    year: "До 2020",
    label: "Успешный руководитель",
    text: "От учителя — к торговому представителю. За 10 лет выросла до генерального директора. Активная, энергичная жизнь.",
    color: "bg-sage",
  },
  {
    year: "2020",
    label: "Ревматоидный артрит",
    text: "Диагноз. Базисная терапия, гормоны, метотрексаты. Врачи сказали: «Пожизненно».",
    color: "bg-terra",
  },
  {
    year: "2021",
    label: "Перелом",
    text: "Узнала о клеточном питании. Скептицизм. Попробовала. Через месяц — первые улучшения.",
    color: "bg-gold",
  },
  {
    year: "2021–2022",
    label: "Ремиссия",
    text: "4 месяца — стойкая ремиссия. Отмена тяжёлых препаратов. Состояние как в 40 лет.",
    color: "bg-sage",
  },
  {
    year: "Сегодня",
    label: "Эксперт клеточного питания и предприниматель",
    text: "Доход вырос с 12 000 до 200 000 ₽/мес. Помогаю людям 50+ пройти тот же путь.",
    color: "bg-dark",
  },
];

export function StorySection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-site">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Левая колонка — текст */}
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-sage mb-3">
              Личная история
            </p>
            <h2 className="font-display text-dark mb-6">
              Как руководитель предприятия стала экспертом клеточного питания
            </h2>
            <blockquote className="quote-gold mb-6">
              Я просто дала организму необходимые микро-макроэлементы, витамины
              в виде клеточного питания — и организм сам у меня решил проблему.
            </blockquote>
            <p className="font-sans text-muted text-lg leading-relaxed mb-8">
              Мне было за 60. Ревматоидный артрит. Базисная терапия. Врачи
              говорили, что это навсегда. Но я нашла другой путь — и это
              изменило всё: здоровье, финансы, смысл жизни.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sage hover:text-sage-dark transition-colors text-lg mb-12"
            >
              Читать полную историю →
            </Link>

            {/* Фото */}
            <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-lg shadow-dark/5">
              <Image
                src="/images/story-work-olga.png"
                alt="Ольга Куркина за работой"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Правая колонка — таймлайн */}
          <div className="relative">
            {/* Вертикальная линия */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div key={i} className="relative flex gap-6 pl-14">
                  {/* Точка на линии */}
                  <div
                    className={`absolute left-0 top-1 w-10 h-10 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-sans text-[10px] font-bold text-center leading-tight px-1">
                      {item.year.length > 7 ? item.year.split("–")[0] : item.year}
                    </span>
                  </div>

                  {/* Контент */}
                  <div>
                    <p className="font-sans text-[13px] text-taupe mb-0.5">
                      {item.year}
                    </p>
                    <p className="font-display text-xl text-dark font-semibold mb-1">
                      {item.label}
                    </p>
                    <p className="font-sans text-muted text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
