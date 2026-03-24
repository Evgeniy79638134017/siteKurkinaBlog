import { Metadata } from "next";
import { CONTACT } from "@/lib/constants";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Запишитесь на бесплатную консультацию с Ольгой Куркиной.",
};

const CONTACT_OPTIONS = [
  {
    icon: "✈️",
    title: "Telegram (личный)",
    value: CONTACT.telegramHandle,
    href: CONTACT.telegramPersonal,
    description: "Предпочтительный способ связи. Отвечаю лично.",
    cta: "Написать в Telegram",
    primary: true,
  },
  {
    icon: "📞",
    title: "Телефон",
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phone}`,
    description: "Звоните или пишите в WhatsApp.",
    cta: "Позвонить",
    primary: false,
  },
  {
    icon: "📢",
    title: "Telegram-канал",
    value: "Подписаться",
    href: CONTACT.telegramChannel,
    description: "Полезные статьи, советы, новости — каждую неделю.",
    cta: "Перейти в канал",
    primary: false,
  },
];

const SOCIAL_OPTIONS = [
  {
    name: "Instagram",
    handle: "@olga_bog_star",
    href: CONTACT.instagram,
    note: "* Meta признана экстремистской организацией в РФ",
  },
  {
    name: "TikTok",
    handle: "@_olga_bog_remissia",
    href: CONTACT.tiktok,
    note: null,
  },
  {
    name: "Max",
    handle: "Профиль на Max",
    href: CONTACT.max,
    note: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F7F0E6]">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-[#96AB88] mb-4">
              Связаться
            </p>
            <h1 className="font-display text-[#2C1810] mb-6">
              Контакты
            </h1>
            <p className="font-sans text-xl text-[#6B5B52] leading-relaxed">
              Запишитесь на бесплатную консультацию — поговорим о вашем здоровье
              или о возможностях партнёрства. Отвечаю лично.
            </p>
          </div>
        </div>
      </section>

      {/* Основные способы связи и форма */}
      <section className="section-padding bg-[#F4E1C4]">
        <div className="container-site">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
            
            {/* Левая часть: Прямые контакты */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              <div>
                <h2 className="font-display text-[#2C1810] mb-8">
                  Как связаться со мной
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {CONTACT_OPTIONS.map((opt, i) => (
                    <div
                      key={opt.title}
                      className={`rounded-2xl p-8 flex flex-col ${
                        opt.primary
                          ? "bg-[#96AB88] text-white sm:col-span-2"
                          : "bg-white text-[#2C1810]"
                      }`}
                    >
                      <div className="text-3xl mb-4">{opt.icon}</div>
                      <p
                        className={`font-sans text-xs font-semibold uppercase tracking-widest mb-1 ${
                          opt.primary ? "text-white/60" : "text-[#A58D7F]"
                        }`}
                      >
                        {opt.title}
                      </p>
                      <p
                        className={`font-display text-xl mb-2 ${
                          opt.primary ? "text-white font-semibold" : ""
                        }`}
                      >
                        {opt.value}
                      </p>
                      <p
                        className={`font-sans text-sm leading-relaxed mb-6 flex-1 ${
                          opt.primary ? "text-white/75" : "text-[#6B5B52]"
                        }`}
                      >
                        {opt.description}
                      </p>
                      <a
                        href={opt.href}
                        target={opt.href.startsWith("tel:") ? undefined : "_blank"}
                        rel={opt.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                        className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-sans font-semibold text-sm transition-colors ${
                          opt.primary
                            ? "bg-white text-[#96AB88] hover:bg-[#F7F0E6]"
                            : "bg-[#96AB88]/15 text-[#7A9270] hover:bg-[#96AB88]/25"
                        }`}
                      >
                        {opt.cta}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Соцсети */}
              <div className="bg-white rounded-2xl p-8 border border-[#E5D5C5]">
                <h3 className="font-display text-2xl text-[#2C1810] mb-6">
                  Социальные сети
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {SOCIAL_OPTIONS.map((s) => (
                    <div key={s.name}>
                      <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#A58D7F] mb-1">
                        {s.name}
                      </p>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-[#96AB88] hover:text-[#7A9270] font-medium transition-colors block mb-1"
                      >
                        {s.handle}
                      </a>
                      {s.note && (
                        <p className="font-sans text-[10px] text-[#A58D7F] leading-snug">{s.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Правая часть: Форма */}
            <div className="lg:col-span-5">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Что ожидать */}
      <section className="section-padding bg-[#F7F0E6]">
        <div className="container-site">
          <div className="max-w-3xl">
            <h2 className="font-display text-[#2C1810] mb-8">
              Как проходит первый разговор
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Вы пишете в Telegram",
                  text: "Напишите о своей ситуации: симптомы, диагноз, что пробовали, что хотите изменить. Нет строгой формы — просто своими словами.",
                },
                {
                  step: "02",
                  title: "Я отвечаю лично",
                  text: "Обычно в течение нескольких часов. Задаю уточняющие вопросы, чтобы лучше понять вашу ситуацию.",
                },
                {
                  step: "03",
                  title: "Консультация 30–40 минут",
                  text: "Обсуждаем ваш запрос, я рассказываю, чем могу помочь. Если вижу, что мои программы подойдут — предлагаю следующий шаг. Без давления.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-[#96AB88]/15 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-base font-semibold text-[#96AB88]">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#2C1810] mb-1">{item.title}</h3>
                    <p className="font-sans text-[#6B5B52] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Финальный CTA */}
      <section className="section-padding bg-[#96AB88]">
        <div className="container-site text-center">
          <h2 className="font-display text-white mb-4">
            Первый шаг — написать мне
          </h2>
          <p className="font-sans text-white/80 text-lg mb-8 max-w-lg mx-auto">
            Бесплатно. Без обязательств. Просто поговорим.
          </p>
          <a
            href={CONTACT.telegramPersonal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 bg-white text-[#7A9270] rounded-full font-sans font-semibold text-lg hover:bg-[#F7F0E6] transition-colors"
          >
            Написать в Telegram
          </a>
        </div>
      </section>
    </>
  );
}
