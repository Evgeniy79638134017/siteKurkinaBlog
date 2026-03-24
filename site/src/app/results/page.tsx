import { Metadata } from "next";
import { CASES } from "@/lib/content/cases";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Результаты клиентов",
  description: "Реальные истории восстановления здоровья клиентов Ольги Куркиной.",
};

const TAG_LABELS: Record<string, string> = {
  joints: "Суставы",
  pressure: "Давление",
  gut: "ЖКТ",
  energy: "Энергия",
  business: "Бизнес",
  crisis: "Кризис",
};

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F7F0E6]">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-[#96AB88] mb-4">
              Реальные истории
            </p>
            <h1 className="font-display text-[#2C1810] mb-6">
              Результаты клиентов
            </h1>
            <p className="font-sans text-xl text-[#6B5B52] leading-relaxed max-w-2xl">
              Никакой рекламы и постановочных фото. Только реальные люди, реальные
              диагнозы и реальные изменения после программ клеточного питания.
            </p>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-10 bg-[#96AB88]">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "4 мес", label: "Среднее время", sub: "до стойкой ремиссии" },
              { value: "×20", label: "Максимальный рост", sub: "дохода партнёров" },
              { value: "РФ + СНГ", label: "Клиенты", sub: "по всему СНГ" },
              { value: "100%", label: "Личный опыт", sub: "сама прошла этот путь" },
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

      {/* Все кейсы */}
      <section className="section-padding bg-[#F7F0E6]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASES.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(44,24,16,0.08)]"
              >
                {/* Шапка */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h2 className="font-display text-2xl text-[#2C1810] font-semibold">
                      {c.name}
                      {c.age > 0 && (
                        <span className="font-sans text-base text-[#A58D7F] font-normal ml-2">
                          {c.age} лет
                        </span>
                      )}
                    </h2>
                    {c.location && (
                      <p className="font-sans text-sm text-[#A58D7F]">{c.location}</p>
                    )}
                  </div>
                  <span className="flex-shrink-0 font-sans text-xs font-semibold uppercase tracking-wider text-[#96AB88] bg-[#96AB88]/10 px-3 py-1 rounded-full">
                    {TAG_LABELS[c.tag] ?? c.tag}
                  </span>
                </div>

                {/* Проблема */}
                <p className="font-sans text-sm font-medium text-[#D08C60] mb-4">
                  {c.problem}
                </p>

                {/* Проблемы → Результаты */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#A58D7F] mb-2">
                      Было:
                    </p>
                    <ul className="space-y-1">
                      {c.problems.map((p, i) => (
                        <li key={i} className="font-sans text-sm text-[#6B5B52] flex gap-1.5">
                          <span className="text-[#D08C60] flex-shrink-0">✕</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#A58D7F] mb-2">
                      Стало:
                    </p>
                    <ul className="space-y-1">
                      {c.results.map((r, i) => (
                        <li key={i} className="font-sans text-sm text-[#2C1810] flex gap-1.5">
                          <span className="text-[#96AB88] flex-shrink-0">✓</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Цитата */}
                <blockquote className="border-l-2 border-[#C9A84C] pl-4 mb-3">
                  <p className="font-display text-base italic text-[#6B5B52]">
                    «{c.quote}»
                  </p>
                </blockquote>

                {/* Срок */}
                <p className="font-sans text-xs text-[#A58D7F]">Срок: {c.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#F4E1C4]">
        <div className="container-site text-center">
          <h2 className="font-display text-[#2C1810] mb-4">
            Хотите стать следующей историей?
          </h2>
          <p className="font-sans text-[#6B5B52] text-lg mb-8 max-w-xl mx-auto">
            Запишитесь на бесплатную консультацию — узнайте, как клеточное питание
            может помочь именно вам.
          </p>
          <a
            href={CONTACT.telegramPersonal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#96AB88] text-white rounded-full font-sans font-semibold text-lg hover:bg-[#7A9270] transition-colors"
          >
            Записаться на консультацию
          </a>
        </div>
      </section>
    </>
  );
}
