import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Моя история",
  description:
    "Как директор школы победила ревматоидный артрит через клеточное питание и стала нутрициологом. История Ольги Куркиной.",
};

const TIMELINE = [
  {
    period: "30 лет",
    title: "Управленец и педагог",
    text: "30 лет в образовании. Директор, руководитель — привыкла ставить цели и достигать их. Активная, энергичная жизнь.",
    accent: false,
  },
  {
    period: "2020",
    title: "Диагноз: ревматоидный артрит",
    text: "Серьёзное аутоиммунное заболевание. Базисная терапия, гормоны, метотрексаты. Врачи сказали прямо: «Пожизненно. Привыкайте».",
    accent: true,
  },
  {
    period: "2021",
    title: "Случайное открытие",
    text: "Узнала о клеточном питании. Первая реакция — скептицизм. «Это же не лекарство». Но терять было нечего. Решила попробовать.",
    accent: false,
  },
  {
    period: "Через 1 месяц",
    title: "Первые изменения",
    text: "Боли начали стихать. Поначалу не верила — думала, совпадение. Но улучшения продолжались. Анализы начали приходить в норму.",
    accent: false,
  },
  {
    period: "Через 4 месяца",
    title: "Стойкая ремиссия",
    text: "Отмена тяжёлых препаратов. Состояние — как в 40 лет. Ревматолог был удивлён. Я понимала: нашла то, что работает.",
    accent: false,
  },
  {
    period: "2021–2022",
    title: "Новая миссия",
    text: "Начала помогать другим. Первые клиенты — друзья и знакомые. Потом — незнакомые люди по рекомендациям. Результаты повторялись.",
    accent: false,
  },
  {
    period: "Сегодня",
    title: "Нутрициолог и предприниматель",
    text: "Доход вырос с 12 000 до 200 000 ₽/мес. Сотни клиентов по всей России и СНГ. Помогаю людям 50+ вернуть здоровье и создать дополнительный доход.",
    accent: false,
  },
];

const VALUES = [
  {
    title: "Не навреди",
    text: "Мой основной принцип. Никакой агрессивной продажи, никаких обещаний чудес. Только честность о том, что поможет конкретному человеку.",
  },
  {
    title: "Результаты — это факты",
    text: "Когда говоришь факты и результаты — люди прислушиваются. Я не убеждаю словами, я показываю реальные изменения реальных людей.",
  },
  {
    title: "В 50+ можно всё",
    text: "«Можно сказать, ещё не жили. Здесь сейчас, в нашем возрасте, можно всё.» Пенсия — это не финал, это свобода для нового начала.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F7F0E6] overflow-hidden">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="max-w-xl order-2 md:order-1">
              <p className="font-sans text-sm font-semibold uppercase tracking-widest text-[#96AB88] mb-4">
                Моя история
              </p>
              <h1 className="font-display text-[#2C1810] mb-6">
                Как директор школы победила ревматоидный артрит
              </h1>
              <p className="font-sans text-xl text-[#6B5B52] leading-relaxed">
                Меня зовут Ольга Куркина. Мне 64 года. Моё физическое состояние
                соответствует 40 годам. И это — не метафора, а факт, подтверждённый
                анализами и ощущениями каждого дня.
              </p>
            </div>

            <div className="order-1 md:order-2 relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl shadow-[#2C1810]/5">
              <Image
                src="/images/about-olga.png"
                alt="Ольга Куркина"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-4 rounded-xl md:rounded-[1.5rem] border border-white/40 pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* Ключевые цифры */}
      <section className="py-10 bg-[#96AB88]">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "64", label: "Мой возраст", sub: "состояние = 40 лет" },
              { value: "4 мес", label: "До ремиссии", sub: "среднее по клиентам" },
              { value: "×20", label: "Рост дохода", sub: "12К → 200К ₽/мес" },
              { value: "5 лет", label: "В нутрициологии", sub: "помогаю людям 50+" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl text-white font-semibold mb-0.5">
                  {s.value}
                </p>
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-white/80 mb-0.5">
                  {s.label}
                </p>
                <p className="font-sans text-xs text-white/60">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Таймлайн */}
      <section className="section-padding bg-[#F7F0E6]">
        <div className="container-site">
          <h2 className="font-display text-[#2C1810] mb-12 max-w-xl">
            Хронология: от болезни к здоровью и бизнесу
          </h2>

          <div className="relative max-w-3xl">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-[#E5D5C5]" />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <div key={i} className="relative flex gap-6 pl-14">
                  <div
                    className={`absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.accent
                        ? "bg-[#D08C60]"
                        : i === TIMELINE.length - 1
                        ? "bg-[#2C1810]"
                        : "bg-[#96AB88]"
                    }`}
                  >
                    <span className="text-white font-display text-sm font-semibold">
                      {i + 1}
                    </span>
                  </div>

                  <div>
                    <p className="font-sans text-xs text-[#A58D7F] mb-0.5">{item.period}</p>
                    <h3 className="font-display text-2xl text-[#2C1810] mb-2">{item.title}</h3>
                    <p className="font-sans text-[#6B5B52] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className="section-padding bg-[#F4E1C4]">
        <div className="container-site">
          <div className="max-w-xl mb-12">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-[#96AB88] mb-3">
              Мои принципы
            </p>
            <h2 className="font-display text-[#2C1810]">
              На чём строится моя работа
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8">
                <div className="w-10 h-10 rounded-full bg-[#96AB88]/15 flex items-center justify-center mb-5">
                  <span className="font-display text-lg font-semibold text-[#96AB88]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[#2C1810] mb-3">{v.title}</h3>
                <p className="font-sans text-[#6B5B52] leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Цитата */}
      <section className="py-16 bg-[#F7F0E6]">
        <div className="container-site">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="font-display text-3xl md:text-4xl text-[#2C1810] italic leading-snug mb-4">
              «Только позитив. И будет всё хорошо.»
            </p>
            <cite className="font-sans text-[#A58D7F] not-italic">— Ольга Куркина</cite>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#96AB88]">
        <div className="container-site text-center">
          <h2 className="font-display text-white mb-4">
            Хотите такой же результат?
          </h2>
          <p className="font-sans text-[#F7F0E6]/85 text-lg mb-8 max-w-xl mx-auto">
            Запишитесь на бесплатную консультацию. Я расскажу, как клеточное питание
            может помочь именно вам.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT.telegramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#7A9270] rounded-full font-sans font-semibold text-lg hover:bg-[#F7F0E6] transition-colors"
            >
              Записаться в Telegram
            </a>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-sans font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Посмотреть программы
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
