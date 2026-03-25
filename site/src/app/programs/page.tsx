import { Metadata } from "next";
import Link from "next/link";
import { Bone, HeartPulse, Zap, Sparkles, Leaf, Microscope, ClipboardList, Handshake, Check, type LucideIcon } from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { PROGRAMS } from "@/lib/content/programs";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Программы здоровья",
  description:
    "Программы восстановления здоровья через клеточное питание: суставы, давление, ЖКТ, энергия.",
};

const ICONS: Record<string, LucideIcon> = {
  activity: Bone,
  heart: HeartPulse,
  zap: Zap,
  sparkles: Sparkles,
};

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-sage mb-4">
              Индивидуальный подход
            </p>
            <h1 className="font-display text-dark mb-6">
              Программы здоровья
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed max-w-2xl">
              Каждая программа построена на принципах клеточного питания и адаптирована
              под конкретный запрос. Никаких шаблонов — только ваши симптомы и цели.
            </p>
          </div>
        </div>
      </section>

      {/* Как работает подход */}
      <section className="py-14 bg-sage">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {([
              {
                Icon: Microscope,
                title: "Клеточное питание",
                text: "Организм получает микро- и макроэлементы на клеточном уровне — там, где обычные продукты не справляются.",
              },
              {
                Icon: ClipboardList,
                title: "Индивидуальный план",
                text: "Анкетирование, анализ симптомов, составление персональной программы — не шаблон, а решение под ваш запрос.",
              },
              {
                Icon: Handshake,
                title: "Сопровождение",
                text: "Еженедельный контроль динамики, корректировка программы, ответы на все вопросы в процессе.",
              },
            ] as const).map((item) => (
              <div key={item.title}>
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-3 mx-auto">
                  <item.Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
                <p className="font-sans text-white/75 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Карточки программ */}
      <section className="section-padding bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROGRAMS.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(44,24,16,0.08)]"
              >
                {/* Иконка + заголовок */}
                <div className="flex items-start gap-4 mb-5">
                  {(() => {
                    const Icon = ICONS[program.icon] ?? Leaf;
                    return (
                      <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-sage" strokeWidth={1.5} />
                      </div>
                    );
                  })()}
                  <div>
                    <h2 className="font-display text-2xl text-dark">
                      {program.title}
                    </h2>
                    <p className="font-sans text-sm text-sage">{program.subtitle}</p>
                  </div>
                </div>

                <p className="font-sans text-muted leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Проблемы */}
                <div className="mb-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-taupe mb-2">
                    Помогает при:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {program.targetProblems.map((p) => (
                      <span
                        key={p}
                        className="font-sans text-xs text-muted bg-beige px-3 py-1 rounded-full"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Результаты */}
                <div className="mb-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-taupe mb-2">
                    Результаты:
                  </p>
                  <ul className="space-y-1">
                    {program.results.map((r) => (
                      <li key={r} className="font-sans text-sm text-dark flex gap-2">
                        <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" strokeWidth={2.5} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Срок + CTA */}
                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <div>
                    <p className="font-sans text-xs text-taupe">Срок программы</p>
                    <p className="font-sans font-semibold text-dark">{program.duration}</p>
                  </div>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="font-sans font-semibold text-sage hover:text-sage-dark transition-colors"
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
      <section className="section-padding bg-sage">
        <div className="container-site text-center">
          <h2 className="font-display text-white mb-4">
            Не знаете, какая программа подходит?
          </h2>
          <p className="font-sans text-cream/85 text-lg mb-8 max-w-xl mx-auto">
            Запишитесь на бесплатную консультацию — вместе разберёмся с вашей ситуацией
            и подберём подходящее решение.
          </p>
          <a
            href={CONTACT.telegramPersonal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-sage-dark rounded-full font-sans font-semibold text-lg hover:bg-cream transition-colors"
          >
            Получить рекомендацию бесплатно
          </a>
        </div>
      </section>
    </>
  );
}
