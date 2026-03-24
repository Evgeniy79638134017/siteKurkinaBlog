"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PROGRAMS } from "@/lib/content/programs";

const ICONS: Record<string, string> = {
  activity: "🦴",
  heart: "❤️",
  zap: "⚡",
  sparkles: "✨",
};

export function ProgramsSection() {
  return (
    <section className="section-padding bg-[#F4E1C4]">
      <div className="container-site">

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-[#96AB88] mb-3">
            Программы здоровья
          </p>
          <h2 className="font-display text-[#2C1810] mb-4">
            Выберите свой запрос
          </h2>
          <p className="font-sans text-[#6B5B52] text-lg">
            Каждая программа — это индивидуальный подход, основанный на клеточном
            питании и проверенный на сотнях клиентов.
          </p>
        </motion.div>

        {/* Карточки со stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(44,24,16,0.08)] flex flex-col hover:shadow-[0_20px_60px_rgba(44,24,16,0.14)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{ICONS[program.icon] ?? "🌿"}</div>
              <h3 className="font-display text-2xl text-[#2C1810] mb-1">
                {program.title}
              </h3>
              <p className="font-sans text-[#A58D7F] text-sm mb-3">
                {program.subtitle}
              </p>
              <p className="font-sans text-[#6B5B52] text-sm leading-relaxed mb-4 flex-1">
                {program.description}
              </p>
              <div className="bg-[#F7F0E6] rounded-xl px-4 py-2 mb-4">
                <p className="font-sans text-xs text-[#A58D7F]">Срок программы</p>
                <p className="font-sans font-semibold text-[#2C1810] text-sm">
                  {program.duration}
                </p>
              </div>
              <Link
                href={`/programs/${program.slug}`}
                className="font-sans font-semibold text-[#96AB88] hover:text-[#7A9270] text-sm transition-colors"
              >
                Подробнее →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 font-sans font-semibold text-[#6B5B52] hover:text-[#2C1810] transition-colors text-lg"
          >
            Посмотреть все программы →
          </Link>
        </div>

      </div>
    </section>
  );
}
