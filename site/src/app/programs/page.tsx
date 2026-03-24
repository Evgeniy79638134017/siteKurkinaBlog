import { Metadata } from "next";
import Link from "next/link";
import { FAQSection } from "@/components/sections/FAQSection";
import { PROGRAMS } from "@/lib/content/programs";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Программы здоровья",
  description:
    "Программы восстановления здоровья через клеточное питание: суставы, давление, ЖКТ, энергия.",
};

const ICONS: Record<string, string> = {
  activity: "🦴",
  heart: "❤️",
  zap: "⚡",
  sparkles: "✨",
};

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F7F0E6]">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-[#96AB88] mb-4">
              Индивидуальный подход
            </p>
            <h1 className="font-display text-[#2C1810] mb-6">
              Программы здоровья
            </h1>
            <p className="font-sans text-xl text-[#6B5B52] leading-relaxed max-w-2xl">
              Каждая программа построена на принципах клеточного питания и адаптирована
              под конкретный запрос. Никаких шаблонов — только ваши симптомы и цели.
            </p>
          </div>
        </div>
      </section>

      {/* Как работает подход */}
      <section className="py-14 bg-[#96AB88]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "🔬",
                title: "Клеточное питание",
                text: "Организм получает микро- и макроэлементы на клеточном уровне — там, где обычные продукты не справляются.",
              },
              {
                icon: "📋",
                title: "Индивидуальный план",
                text: "Анкетирование, анализ симптомов, составление персональной программы — не шаблон, а решение под ваш запрос.",
              },
              {
                icon: "🤝",
                title: "Сопровождение",
                text: "Еженедельный контроль динамики, корректировка программы, ответы на все вопросы в процессе.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
                <p className="font-sans text-white/75 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Карточки программ */}
      <section className="section-padding bg-[#F7F0E6]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROGRAMS.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(44,24,16,0.08)]"
              >
                {/* Иконка + заголовок */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="text-4xl flex-shrink-0">{ICONS[program.icon] ?? "🌿"}</div>
                  <div>
                    <h2 className="font-display text-2xl text-[#2C1810]">
                      {program.title}
                    </h2>
                    <p className="font-sans text-sm text-[#96AB88]">{program.subtitle}</p>
                  </div>
                </div>

                <p className="font-sans text-[#6B5B52] leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Проблемы */}
                <div className="mb-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#A58D7F] mb-2">
                    Помогает при:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {program.targetProblems.map((p) => (
                      <span
                        key={p}
                        className="font-sans text-xs text-[#6B5B52] bg-[#F4E1C4] px-3 py-1 rounded-full"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Результаты */}
                <div className="mb-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#A58D7F] mb-2">
                    Результаты:
                  </p>
                  <ul className="space-y-1">
                    {program.results.map((r) => (
                      <li key={r} className="font-sans text-sm text-[#2C1810] flex gap-2">
                        <span className="text-[#96AB88] flex-shrink-0">✓</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Срок + CTA */}
                <div className="flex items-center justify-between pt-5 border-t border-[#E5D5C5]">
                  <div>
                    <p className="font-sans text-xs text-[#A58D7F]">Срок программы</p>
                    <p className="font-sans font-semibold text-[#2C1810]">{program.duration}</p>
                  </div>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="font-sans font-semibold text-[#96AB88] hover:text-[#7A9270] transition-colors"
                  >
                    Подробнее →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <section className="section-padding bg-[#96AB88]">
        <div className="container-site text-center">
          <h2 className="font-display text-white mb-4">
            Не знаете, какая программа подходит?
          </h2>
          <p className="font-sans text-[#F7F0E6]/85 text-lg mb-8 max-w-xl mx-auto">
            Запишитесь на бесплатную консультацию — вместе разберёмся с вашей ситуацией
            и подберём подходящее решение.
          </p>
          <a
            href={CONTACT.telegramPersonal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-[#7A9270] rounded-full font-sans font-semibold text-lg hover:bg-[#F7F0E6] transition-colors"
          >
            Получить рекомендацию бесплатно
          </a>
        </div>
      </section>
    </>
  );
}
