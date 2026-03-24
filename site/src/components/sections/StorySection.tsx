import Image from "next/image";
import Link from "next/link";

const TIMELINE = [
  {
    year: "До 2020",
    label: "Успешный руководитель",
    text: "30 лет в управлении — директор, педагог. Активная жизнь. Всё было хорошо.",
    color: "bg-[#96AB88]",
  },
  {
    year: "2020",
    label: "Ревматоидный артрит",
    text: "Диагноз. Базисная терапия, гормоны, метотрексаты. Врачи сказали: «Пожизненно».",
    color: "bg-[#D08C60]",
  },
  {
    year: "2021",
    label: "Перелом",
    text: "Узнала о клеточном питании. Скептицизм. Попробовала. Через месяц — первые улучшения.",
    color: "bg-[#C9A84C]",
  },
  {
    year: "2021–2022",
    label: "Ремиссия",
    text: "4 месяца — стойкая ремиссия. Отмена тяжёлых препаратов. Состояние как в 40 лет.",
    color: "bg-[#96AB88]",
  },
  {
    year: "Сегодня",
    label: "Нутрициолог и предприниматель",
    text: "Доход вырос с 12 000 до 200 000 ₽/мес. Помогаю людям 50+ пройти тот же путь.",
    color: "bg-[#2C1810]",
  },
];

export function StorySection() {
  return (
    <section className="section-padding bg-[#F7F0E6]">
      <div className="container-site">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Левая колонка — текст */}
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-[#96AB88] mb-3">
              Личная история
            </p>
            <h2 className="font-display text-[#2C1810] mb-6">
              Как директор школы стала нутрициологом
            </h2>
            <blockquote className="quote-gold mb-6">
              Я просто дала организму необходимые микро-макроэлементы, витамины
              в виде клеточного питания — и организм сам у меня решил проблему.
            </blockquote>
            <p className="font-sans text-[#6B5B52] text-lg leading-relaxed mb-8">
              Мне было за 60. Ревматоидный артрит. Базисная терапия. Врачи
              говорили, что это навсегда. Но я нашла другой путь — и это
              изменило всё: здоровье, финансы, смысл жизни.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-sans font-semibold text-[#96AB88] hover:text-[#7A9270] transition-colors text-lg mb-12"
            >
              Читать полную историю →
            </Link>

            {/* Фото */}
            <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-lg shadow-[#2C1810]/5">
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
            <div className="absolute left-5 top-0 bottom-0 w-px bg-[#E5D5C5]" />

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
                    <p className="font-sans text-[13px] text-[#A58D7F] mb-0.5">
                      {item.year}
                    </p>
                    <p className="font-display text-xl text-[#2C1810] font-semibold mb-1">
                      {item.label}
                    </p>
                    <p className="font-sans text-[#6B5B52] text-base leading-relaxed">
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
