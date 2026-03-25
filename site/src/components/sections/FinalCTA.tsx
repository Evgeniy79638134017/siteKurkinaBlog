import Image from "next/image";
import { CONTACT } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative px-4 py-24 md:py-32 overflow-hidden flex items-center justify-center min-h-[600px] mt-10 lg:mt-0">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/vitality-olga.png"
          alt="Витальность и энергия 50+"
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        {/* Оверлей */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />
      </div>

      <div className="container-site relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Подзаголовок */}
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-beige mb-4">
            Первый шаг бесплатно
          </p>

          {/* Заголовок */}
          <h2 className="font-display text-white mb-6">
            Готовы узнать, что мешает вашему здоровью?
          </h2>

          {/* Цитата */}
          <blockquote className="font-display text-2xl md:text-3xl italic text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
            «Самое главное — здоровье. Не будет здоровья, тогда и деньги не нужны будут.»
          </blockquote>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={CONTACT.telegramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-sage text-white rounded-full font-sans font-semibold text-lg hover:bg-sage-dark hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-sage/25"
            >
              Записаться на консультацию
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center px-10 py-4 bg-transparent text-white rounded-full font-sans font-semibold text-lg hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border-2 border-white/40 hover:border-white"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Подпись */}
          <p className="font-sans text-sm text-white/70 mt-8">
            Отвечаю лично · Консультация 30–40 минут · Бесплатно
          </p>

        </div>
      </div>
    </section>
  );
}
