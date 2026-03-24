"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CONTACT } from "@/lib/constants";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[#F7F0E6] flex items-center pt-20 md:pt-24 overflow-hidden"
    >
      {/* Параллакс-блобы */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: blob1Y }}
          className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-[#96AB88]/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: blob2Y }}
          className="absolute bottom-1/4 left-[-5%] w-[400px] h-[400px] bg-[#F4E1C4] rounded-full blur-3xl"
        />
      </div>

      <div className="container-site relative z-10 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Левая колонка: Текст */}
          <div className="max-w-2xl order-2 lg:order-1">
            {/* Бейдж */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2 bg-[#96AB88]/15 text-[#7A9270] px-4 py-2 rounded-full font-sans text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-[#96AB88] rounded-full flex-shrink-0" />
              Нутрициолог · Биохакинг для 50+
            </motion.div>

            {/* Заголовок */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-[#2C1810] leading-[1.1] mb-6"
            >
              Моё состояние в 64 года{" "}
              <span className="text-[#96AB88]">равно 40 лет.</span>
              <br />Представляете?
            </motion.h1>

            {/* Подзаголовок */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-sans text-xl text-[#6B5B52] max-w-xl mb-10 leading-relaxed"
            >
              Я восстановилась от ревматоидного артрита через клеточное питание — без
              операций и пожизненных лекарств. Теперь помогаю людям 50+&nbsp;вернуть
              здоровье и энергию.
            </motion.p>

            {/* CTA-кнопки */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href={CONTACT.telegramPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#96AB88] text-white rounded-full font-sans font-semibold text-lg hover:bg-[#7A9270] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-[#96AB88]/25"
              >
                Записаться на консультацию
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#96AB88] text-[#7A9270] rounded-full font-sans font-semibold text-lg hover:bg-[#96AB88]/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Узнать мою историю
              </Link>
            </motion.div>

            {/* Подпись */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="font-sans text-sm text-[#A58D7F]"
            >
              Бесплатная консультация · Индивидуальная программа · Результат через 4 месяца
            </motion.p>
          </div>

          {/* Правая колонка: Фото */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 relative aspect-[4/3] lg:aspect-auto lg:h-[700px] w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#2C1810]/5"
          >
            <Image
              src="/images/hero-olga.png"
              alt="Ольга Куркина - Нутрициолог"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Тонкая внутренняя рамка для изящности (editorial style) */}
            <div className="absolute inset-4 rounded-xl md:rounded-[2rem] border border-white/30 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
