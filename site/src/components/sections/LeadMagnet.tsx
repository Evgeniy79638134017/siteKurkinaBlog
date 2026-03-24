import { LeadMagnetForm } from "@/components/shared/LeadMagnetForm";

const CHECKLIST_ITEMS = [
  "5 главных дефицитов, вызывающих боли в суставах",
  "Продукты, которые разрушают суставы (уберите их из рациона)",
  "Простая формула клеточного питания для 50+",
  "3 признака, что ваши клетки голодают прямо сейчас",
  "Первые шаги к ремиссии — без врачей и лекарств",
];

export function LeadMagnet() {
  return (
    <section className="section-padding bg-[#96AB88]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Левая часть */}
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-[#F7F0E6]/70 mb-3">
              Бесплатно
            </p>
            <h2 className="font-display text-white mb-4">
              Чек-лист здоровья для 50+
            </h2>
            <p className="font-sans text-[#F7F0E6]/85 text-lg leading-relaxed mb-6">
              Получите мой авторский чек-лист «5 шагов к восстановлению здоровья» —
              и узнайте, с чего начать прямо сейчас.
            </p>
            <div className="mt-8">
              <LeadMagnetForm />
            </div>
          </div>

          {/* Правая часть — содержимое чек-листа */}
          <div className="bg-white/15 rounded-2xl p-8">
            <p className="font-sans text-sm font-semibold uppercase tracking-wider text-[#F7F0E6]/70 mb-4">
              Что внутри:
            </p>
            <ul className="space-y-3">
              {CHECKLIST_ITEMS.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-sans text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <span className="font-sans text-[#F7F0E6] text-base leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
