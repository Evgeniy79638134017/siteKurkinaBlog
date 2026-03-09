"use client";

import { heroData } from "@/lib/data/hero";
import { primaryMessenger, messengers } from "@/lib/data/messengers";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FadeIn } from "@/components/animations/FadeIn";

export function FinalCTA() {
  const ctaHref = primaryMessenger.url ?? "#";
  const altMessengers = messengers.filter((m) => !m.isPrimary);

  return (
    <section id="contact" className="bg-quote-bg py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <ScrollReveal direction="up">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Готовы начать путь к здоровью?
          </h2>
        </ScrollReveal>

        <FadeIn direction="up" delay={0.2}>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            Я сама прошла через это. На консультации мы разберём вашу
            ситуацию&nbsp;— без давления, просто честный разговор.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <Button
            asChild
            size="lg"
            className="mt-8 h-12 bg-white px-8 text-base font-medium text-accent shadow-md transition-all hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              {heroData.ctaPrimary.text}
            </a>
          </Button>

          {altMessengers.length > 0 && (
            <p className="mt-4 text-sm text-white/60">
              Также доступна в{" "}
              {altMessengers.map((m, i) => (
                <span key={m.id}>
                  {m.url ? (
                    <a
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 transition-colors hover:text-white/80"
                    >
                      {m.name}
                    </a>
                  ) : (
                    m.name
                  )}
                  {i < altMessengers.length - 1 && " и "}
                </span>
              ))}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
