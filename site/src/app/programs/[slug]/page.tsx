import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Bone, HeartPulse, Zap, Sparkles, Leaf, Check, X,
  Droplets, Moon, Footprints, Wind, SmilePlus,
  ChevronDown, BookOpen, Quote, Clock,
  type LucideIcon,
  Flame, Dna, CircleDot, Scale, Armchair,
  Pill, Brain, BatteryLow, ShieldOff, Utensils,
  Thermometer, Salad,
} from "lucide-react";
import { PROGRAMS, getProgramBySlug } from "@/lib/content/programs";
import { CONTACT } from "@/lib/constants";
import { renderWithPubMedLinks } from "@/lib/render-pubmed";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.description,
  };
}

const PROGRAM_ICONS: Record<string, LucideIcon> = {
  activity: Bone,
  heart: HeartPulse,
  zap: Zap,
  sparkles: Sparkles,
};

const CAUSE_ICONS: Record<string, LucideIcon> = {
  bone: Bone,
  flame: Flame,
  dna: Dna,
  droplet: Droplets,
  scale: Scale,
  armchair: Armchair,
  heart: HeartPulse,
  wind: Wind,
  brain: Brain,
  "battery-low": BatteryLow,
  pill: Pill,
  salad: Salad,
  clock: Clock,
  thermometer: Thermometer,
  "shield-off": ShieldOff,
  utensils: Utensils,
  "circle-dot": CircleDot,
};

const BASE_ICONS: LucideIcon[] = [Droplets, Moon, Footprints, Wind, SmilePlus];

const TIMELINE_LABELS = ["2–3 недели", "2 месяца", "4 месяца", "6–8 месяцев"];

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) notFound();

  const Icon = PROGRAM_ICONS[program.icon] ?? Leaf;

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-site">
          <Link
            href="/programs"
            className="inline-flex items-center gap-1 font-sans text-sm text-sage-dark hover:text-dark transition-colors mb-8"
          >
            ← Все программы
          </Link>
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-xl bg-sage/10 flex items-center justify-center mb-4">
              <Icon className="w-7 h-7 text-sage" strokeWidth={1.5} />
            </div>
            <h1 className="font-display text-dark mb-2">{program.title}</h1>
            <p className="font-sans text-xl text-sage-dark mb-4">{program.subtitle}</p>
            <p className="font-sans text-xl text-muted leading-relaxed max-w-2xl mb-2">
              {program.description}
            </p>
            <p className="font-sans text-sm text-taupe">
              Срок программы: {program.duration}
            </p>
          </div>
        </div>
      </section>

      {/* ── Цитата ── */}
      {program.heroQuote && (
        <section className="py-10 bg-sage">
          <div className="container-site max-w-3xl text-center">
            <Quote className="w-8 h-8 text-white/40 mx-auto mb-4" strokeWidth={1.5} />
            <blockquote className="font-display text-2xl md:text-3xl text-white italic leading-snug">
              {program.heroQuote}
            </blockquote>
          </div>
        </section>
      )}

      {/* ── Для кого ── */}
      <section className="section-padding bg-beige">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-dark mb-6">Программа подойдёт вам, если:</h2>
              <ul className="space-y-3">
                {program.targetProblems.map((p) => (
                  <li key={p} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-terra/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-terra" strokeWidth={2.5} />
                    </span>
                    <span className="font-sans text-muted text-lg">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-dark mb-6">Вы получите:</h2>
              <ul className="space-y-3">
                {program.results.map((r) => (
                  <li key={r} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-sage/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-sage-dark" strokeWidth={2.5} />
                    </span>
                    <span className="font-sans text-dark text-lg">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Почему возникают проблемы ── */}
      {program.causes && program.causes.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-site">
            <div className="max-w-xl mb-10">
              <h2 className="font-display text-dark mb-2">Почему возникают проблемы?</h2>
              <p className="font-sans text-muted text-lg">
                Понимание причин — первый шаг к восстановлению
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.causes.map((cause) => {
                const CauseIcon = CAUSE_ICONS[cause.icon] ?? Leaf;
                return (
                  <div
                    key={cause.title}
                    className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(44,24,16,0.06)]"
                  >
                    <div className="w-11 h-11 rounded-xl bg-terra/10 flex items-center justify-center mb-4">
                      <CauseIcon className="w-5 h-5 text-terra" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-lg text-dark mb-2">{cause.title}</h3>
                    <p className="font-sans text-muted text-base leading-relaxed">{renderWithPubMedLinks(cause.description)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Базовые условия восстановления ── */}
      {program.baseConditions && program.baseConditions.length > 0 && (
        <section className="section-padding bg-sage/10">
          <div className="container-site">
            <div className="max-w-xl mb-10">
              <h2 className="font-display text-dark mb-2">Базовые условия восстановления</h2>
              <p className="font-sans text-muted text-lg">
                Без этого фундамента ни одна программа не даст стойкий результат
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {program.baseConditions.map((condition, i) => {
                const BaseIcon = BASE_ICONS[i] ?? Leaf;
                const [title, ...rest] = condition.split(". ");
                const desc = rest.join(". ");
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 text-center shadow-[0_4px_20px_rgba(44,24,16,0.06)]"
                  >
                    <div className="w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-3">
                      <BaseIcon className="w-5 h-5 text-sage-dark" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-sans text-sm font-bold text-dark mb-1">{title}</h3>
                    <p className="font-sans text-xs text-muted leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Как проходит работа (помесячно) ── */}
      {program.weekByWeek && program.weekByWeek.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="max-w-xl mb-10">
              <h2 className="font-display text-dark mb-2">Как проходит восстановление</h2>
              <p className="font-sans text-taupe">Срок программы: {program.duration}</p>
            </div>
            <div className="space-y-6 max-w-3xl">
              {program.weekByWeek.map((week, i) => (
                <div key={i} className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-sage flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-white">{i + 1}</span>
                  </div>
                  {i < program.weekByWeek!.length - 1 && (
                    <div className="absolute left-[23px] top-12 w-0.5 h-[calc(100%+1.5rem)] bg-sage/20" />
                  )}
                  <div className="bg-cream rounded-2xl p-6">
                    <h3 className="font-display text-xl text-dark mb-1">{week.week}: {week.focus}</h3>
                    <p className="font-sans text-muted leading-relaxed">{week.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Научная база ── */}
      {program.scienceNote && (
        <section className="section-padding bg-beige">
          <div className="container-site max-w-3xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-sage/15 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-sage-dark" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-display text-dark mb-1">Подтверждено исследованиями</h2>
                <p className="font-sans text-xs text-sage-dark uppercase tracking-wider font-semibold">PubMed / научные данные</p>
              </div>
            </div>
            <p className="font-sans text-lg text-muted leading-relaxed">
              {renderWithPubMedLinks(program.scienceNote)}
            </p>
          </div>
        </section>
      )}

      {/* ── Личная история ── */}
      {program.personalStory && (
        <section className="section-padding bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-display text-dark mb-6">Реальная история</h2>
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(44,24,16,0.06)] border-l-4 border-sage">
              <p className="font-sans text-lg text-muted leading-relaxed italic">
                {program.personalStory}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── Подробное описание ── */}
      {program.detailedDescription && (
        <section className="section-padding bg-white">
          <div className="container-site max-w-3xl">
            <h2 className="font-display text-dark mb-6">Подробнее о программе</h2>
            <p className="font-sans text-lg text-muted leading-relaxed">
              {renderWithPubMedLinks(program.detailedDescription)}
            </p>
          </div>
        </section>
      )}

      {/* ── Ожидаемые результаты (таймлайн) ── */}
      {program.expectedResults && program.expectedResults.length > 0 && (
        <section className="section-padding bg-beige">
          <div className="container-site">
            <div className="max-w-xl mb-10">
              <h2 className="font-display text-dark mb-2">Ожидаемые результаты</h2>
              <p className="font-sans text-muted text-lg">
                Чего ждать на каждом этапе программы
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {program.expectedResults.map((timeline, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(44,24,16,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-sage-dark" strokeWidth={1.5} />
                    <h3 className="font-display text-lg text-dark">{timeline.period}</h3>
                  </div>
                  <ul className="space-y-2">
                    {timeline.results.map((r, j) => (
                      <li key={j} className="flex gap-2 items-start">
                        <Check className="w-4 h-4 text-sage-dark flex-shrink-0 mt-1" strokeWidth={2} />
                        <span className="font-sans text-sm text-muted">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 3 шага (как работаем) ── */}
      <section className="section-padding bg-cream">
        <div className="container-site">
          <div className="max-w-xl mb-10">
            <h2 className="font-display text-dark mb-2">3 шага к результату</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {program.steps.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(44,24,16,0.06)]">
                <div className="w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <span className="font-display text-xl font-semibold text-sage-dark">
                    0{step.step}
                  </span>
                </div>
                <h3 className="font-display text-xl text-dark mb-2">{step.title}</h3>
                <p className="font-sans text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {program.faq && program.faq.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-site max-w-3xl">
            <h2 className="font-display text-dark mb-8">Частые вопросы</h2>
            <div className="space-y-4">
              {program.faq.map((item, i) => (
                <details key={i} className="group bg-cream rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-sans text-lg text-dark font-medium list-none">
                    {item.question}
                    <ChevronDown className="w-5 h-5 text-sage-dark flex-shrink-0 transition-transform group-open:rotate-180" strokeWidth={2} />
                  </summary>
                  <div className="px-6 pb-6 -mt-2">
                    <p className="font-sans text-muted leading-relaxed">{renderWithPubMedLinks(item.answer)}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Дисклеймер ── */}
      <section className="py-6 bg-cream">
        <div className="container-site max-w-3xl">
          <p className="font-sans text-xs text-taupe leading-relaxed text-center">
            Информация носит ознакомительный характер и отражает личный опыт.
            Не является медицинской рекомендацией. Перед началом программы
            проконсультируйтесь с врачом. Результаты индивидуальны.
            Продукты клеточного питания — БАД, не являются лекарственными средствами.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-sage">
        <div className="container-site text-center">
          <h2 className="font-display text-white mb-4">Начните с бесплатной консультации</h2>
          <p className="font-sans text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Расскажите о своих симптомах — разберёмся вместе, как программа
            «{program.title}» поможет именно вам.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT.telegramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-dark rounded-full font-sans font-semibold text-lg hover:bg-cream transition-colors"
            >
              Записаться в Telegram
            </a>
            <Link
              href="/results"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white rounded-full font-sans font-semibold text-lg hover:border-white hover:bg-white/10 transition-colors"
            >
              Смотреть результаты клиентов
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
