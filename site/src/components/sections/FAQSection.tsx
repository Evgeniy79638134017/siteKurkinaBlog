"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Поможет ли программа, если врачи сказали «это возрастное»?",
    answer: "Врачи часто списывают артрит, гипертонию и слабость на возраст. Но наш организм способен к восстановлению, если дать ему правильный строительный материал — клеточное питание. Мой опыт и опыт моих подопечных показывает, что «возрастные» изменения можно перевести в стойкую ремиссию."
  },
  {
    question: "Нужно ли сдавать анализы перед началом?",
    answer: "Для старта программы базово мы ориентируемся на ваше самочувствие, анамнез и подробную анкету. Клеточное питание работает комплексно, закрывая дефициты. Если у вас есть свежие анализы — это отлично, но специально сдавать их перед первой консультацией необязательно."
  },
  {
    question: "Как быстро я увижу результаты?",
    answer: "Первые изменения — улучшение сна, больший запас энергии — многие замечают уже в первые 2–4 недели. Стойкий системный результат (снижение болей в суставах, нормализация работы ЖКТ) обычно фиксируется через 3–4 месяца. Клеточное восстановление требует времени."
  },
  {
    question: "Придётся ли мне сидеть на строгой диете?",
    answer: "Нет. Мы не используем жесткие ограничительные диеты, они ведут к стрессу и срывам. Программа выстроена на мягком добавлении нутрицевтиков и постепенной коррекции питьевого режима и рациона. Вы будете питаться комфортно."
  },
  {
    question: "Можно ли совмещать программу с лекарствами?",
    answer: "Да. Клеточное питание не отменяет назначения лечащего врача. Наоборот, оно снижает токсическую нагрузку от медикаментов и помогает организму быстрее восстановиться. Отмена или снижение дозы лекарств происходит только после объективного улучшения и согласования."
  }
];

export function FAQSection() {
  return (
    <section className="section-padding bg-beige">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-10">
            <h2 className="font-display text-dark mb-4">
              Частые вопросы
            </h2>
            <p className="font-sans text-lg text-muted">
              Всё, что обычно спрашивают перед началом работы
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-border/50">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="font-sans font-semibold text-lg text-dark hover:text-sage text-left hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-base text-muted leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}
