"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { getFeaturedCases } from "@/lib/content/cases";

export function TestimonialsSection() {
  const cases = getFeaturedCases();

  return (
    <section className="section-padding bg-beige">
      <div className="container-site">

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-sage-dark mb-3">
            Реальные результаты
          </p>
          <h2 className="font-display text-dark mb-4">
            Истории клиентов
          </h2>
          <p className="font-sans text-muted text-lg">
            Не обещания, а факты. Реальные люди — реальные изменения.
          </p>
        </motion.div>

        {/* Карточки кейсов со stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(44,24,16,0.08)] flex flex-col hover:shadow-[0_20px_60px_rgba(44,24,16,0.14)] hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Заголовок кейса */}
              <div className="mb-5">
                <p className="font-display text-xl text-dark font-semibold mb-0.5">
                  {c.name}
                  {c.age > 0 && (
                    <span className="font-sans text-sm text-taupe font-normal ml-2">
                      {c.age} лет
                    </span>
                  )}
                  {c.location && (
                    <span className="font-sans text-sm text-taupe font-normal ml-1">
                      · {c.location}
                    </span>
                  )}
                </p>
                <p className="font-sans text-sm text-taupe">{c.problem}</p>
              </div>

              {/* Проблемы */}
              <div className="mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-taupe mb-2">
                  Было:
                </p>
                <ul className="space-y-1.5">
                  {c.problems.slice(0, 2).map((p, i) => (
                    <li key={i} className="font-sans text-muted text-sm flex gap-2">
                      <X className="w-4 h-4 text-terra shrink-0 mt-0.5" strokeWidth={2.5} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Результаты */}
              <div className="mb-5 flex-1">
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-taupe mb-2">
                  Стало:
                </p>
                <ul className="space-y-1.5">
                  {c.results.slice(0, 3).map((r, i) => (
                    <li key={i} className="font-sans text-dark text-sm flex gap-2">
                      <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" strokeWidth={2.5} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Цитата */}
              <blockquote className="border-l-2 border-gold pl-4 mt-auto">
                <p className="font-display text-base italic text-muted leading-snug">
                  «{c.quote}»
                </p>
              </blockquote>

              {/* Срок */}
              <p className="font-sans text-xs text-taupe mt-3">
                Срок: {c.duration}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sage-dark hover:text-dark transition-colors text-lg"
          >
            Смотреть все результаты →
          </Link>
        </div>

      </div>
    </section>
  );
}
