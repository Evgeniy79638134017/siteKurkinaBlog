import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Моя история",
  description:
    "Как руководитель предприятия победила ревматоидный артрит через клеточное питание и стала экспертом биохакинга 50+. История Ольги Куркиной.",
};

const TIMELINE = [
  {
    period: "1980",
    title: "Образование и начало карьеры",
    text: "Окончила СКИФ (Ставропольский краевой институт физкультуры). После замужества переехала в Хабаровск. Работала учителем обслуживающего труда в школе.",
    accent: false,
  },
  {
    period: "10 лет роста",
    title: "От торгового представителя до генерального директора",
    text: "Перешла в коммерцию. Прошла путь от торгового представителя до руководителя предприятия за 10 лет. Была назначена генеральным директором компании.",
    accent: false,
  },
  {
    period: "До 60 лет",
    title: "Руководитель рыбоперерабатывающего завода",
    text: "Приглашена генеральным директором на рыбоперерабатывающий завод для восстановления предприятия. Провела полный ремонт, наладила производство. Работала до выхода на пенсию.",
    accent: false,
  },
  {
    period: "60 лет",
    title: "Диагноз: ревматоидный артрит",
    text: "Серьёзное аутоиммунное заболевание. 4 года базисной терапии по назначению ревматолога — гормоны, метотрексат, НПВС. Без результата. Только нарастающая зависимость от препаратов. Врачи сказали: «Пожизненно».",
    accent: true,
  },
  {
    period: "Через 2–4 месяца",
    title: "Клеточное питание и восстановление",
    text: "Только после 4 лет безуспешного лечения узнала о продукции Адженис. Решила попробовать. Через 2–4 месяца — значительное улучшение. Анализы пришли в норму. Приняла решение развиваться в этом направлении.",
    accent: false,
  },
  {
    period: "Новый этап",
    title: "Уход из найма и новая миссия",
    text: "Уволилась с должности генерального директора завода. Окончила курсы нутрициолога. Открыла аккаунты в соцсетях, начала онлайн-консультации.",
    accent: false,
  },
  {
    period: "Сегодня",
    title: "Эксперт клеточного питания и предприниматель",
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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-cream overflow-hidden">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="max-w-xl order-2 md:order-1">
              <p className="font-sans text-sm font-semibold uppercase tracking-widest text-sage mb-4">
                Моя история
              </p>
              <h1 className="font-display text-dark mb-6">
                Как руководитель предприятия победила ревматоидный артрит
              </h1>
              <p className="font-sans text-xl text-muted leading-relaxed">
                Меня зовут Ольга Куркина. Мне 64 года. Моё физическое состояние
                соответствует 40 годам. И это — не метафора, а факт, подтверждённый
                анализами и ощущениями каждого дня.
              </p>
            </div>

            <div className="order-1 md:order-2 relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl shadow-dark/5">
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
      <section className="py-10 bg-sage">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "64", label: "Мой возраст", sub: "состояние = 40 лет" },
              { value: "4 мес", label: "До ремиссии", sub: "среднее по клиентам" },
              { value: "×20", label: "Рост дохода", sub: "12К → 200К ₽/мес" },
              { value: "5 лет", label: "В клеточном питании", sub: "помогаю людям 50+" },
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
      <section className="section-padding bg-cream">
        <div className="container-site">
          <h2 className="font-display text-dark mb-12 max-w-xl">
            Хронология: от болезни к здоровью и бизнесу
          </h2>

          <div className="relative max-w-3xl">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <div key={i} className="relative flex gap-6 pl-14">
                  <div
                    className={`absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.accent
                        ? "bg-terra"
                        : i === TIMELINE.length - 1
                        ? "bg-dark"
                        : "bg-sage"
                    }`}
                  >
                    <span className="text-white font-display text-sm font-semibold">
                      {i + 1}
                    </span>
                  </div>

                  <div>
                    <p className="font-sans text-xs text-taupe mb-0.5">{item.period}</p>
                    <h3 className="font-display text-2xl text-dark mb-2">{item.title}</h3>
                    <p className="font-sans text-muted leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className="section-padding bg-beige">
        <div className="container-site">
          <div className="max-w-xl mb-12">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-sage mb-3">
              Мои принципы
            </p>
            <h2 className="font-display text-dark">
              На чём строится моя работа
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8">
                <div className="w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <span className="font-display text-lg font-semibold text-sage">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-dark mb-3">{v.title}</h3>
                <p className="font-sans text-muted leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Цитата */}
      <section className="py-16 bg-cream">
        <div className="container-site">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="font-display text-3xl md:text-4xl text-dark italic leading-snug mb-4">
              «Только позитив. И будет всё хорошо.»
            </p>
            <cite className="font-sans text-taupe not-italic">— Ольга Куркина</cite>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage">
        <div className="container-site text-center">
          <h2 className="font-display text-white mb-4">
            Хотите такой же результат?
          </h2>
          <p className="font-sans text-cream/85 text-lg mb-8 max-w-xl mx-auto">
            Запишитесь на бесплатную консультацию. Я расскажу, как клеточное питание
            может помочь именно вам.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT.max}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-dark rounded-full font-sans font-semibold text-lg hover:bg-cream transition-colors"
            >
              Написать в Max
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
