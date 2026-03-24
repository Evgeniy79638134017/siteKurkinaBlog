import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROGRAMS, getProgramBySlug } from "@/lib/content/programs";
import { CONTACT } from "@/lib/constants";

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

const ICONS: Record<string, string> = {
  activity: "🦴",
  heart: "❤️",
  zap: "⚡",
  sparkles: "✨",
};

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-site">
          <Link
            href="/programs"
            className="inline-flex items-center gap-1 font-sans text-sm text-sage hover:text-sage-dark transition-colors mb-8"
          >
            ← Все программы
          </Link>
          <div className="max-w-3xl">
            <div className="text-5xl mb-4">{ICONS[program.icon] ?? "🌿"}</div>
            <h1 className="font-display text-dark mb-2">
              {program.title}
            </h1>
            <p className="font-sans text-xl text-sage mb-4">{program.subtitle}</p>
            <p className="font-sans text-xl text-muted leading-relaxed max-w-2xl">
              {program.description}
            </p>
          </div>
        </div>
      </section>

      {/* Для кого */}
      <section className="section-padding bg-beige">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div>
              <h2 className="font-display text-dark mb-6">
                Программа помогает при:
              </h2>
              <ul className="space-y-3">
                {program.targetProblems.map((p) => (
                  <li key={p} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-terra/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-terra text-sm">✕</span>
                    </span>
                    <span className="font-sans text-muted text-lg">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-dark mb-6">
                Вы получите:
              </h2>
              <ul className="space-y-3">
                {program.results.map((r) => (
                  <li key={r} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-sage/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sage text-sm">✓</span>
                    </span>
                    <span className="font-sans text-dark text-lg">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3 шага */}
      <section className="section-padding bg-cream">
        <div className="container-site">
          <div className="max-w-xl mb-10">
            <h2 className="font-display text-dark mb-2">
              Как проходит работа
            </h2>
            <p className="font-sans text-taupe">Срок программы: {program.duration}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {program.steps.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(44,24,16,0.06)]">
                <div className="w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <span className="font-display text-xl font-semibold text-sage">
                    0{step.step}
                  </span>
                </div>
                <h3 className="font-display text-xl text-dark mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage">
        <div className="container-site text-center">
          <h2 className="font-display text-white mb-4">
            Начните с бесплатной консультации
          </h2>
          <p className="font-sans text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Расскажите о своих симптомах — разберёмся вместе, как программа
            «{program.title}» поможет именно вам.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT.telegramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-sage text-white rounded-full font-sans font-semibold text-lg hover:bg-sage-dark transition-colors"
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
