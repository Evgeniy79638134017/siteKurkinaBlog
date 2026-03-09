"use client";

import { Send, Check } from "lucide-react";
import { primaryMessenger } from "@/lib/data/messengers";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const checklistItems = [
  "Какие витамины действительно нужны после 50",
  "Простые изменения в питании с первого дня",
  "На что обратить внимание в анализах",
  "Ежедневный ритуал для энергии",
];

export function LeadMagnet() {
  const ctaHref = primaryMessenger.url ?? "#";

  return (
    <section id="lead-magnet" className="bg-bg-warm py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <ScrollReveal direction="up">
          <div className="rounded-2xl border border-border bg-bg-main/80 p-8 shadow-sm md:flex md:items-center md:gap-12 md:p-12">
            {/* Text */}
            <div className="flex-1">
              <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl lg:text-4xl">
                Получите бесплатный чек-лист
              </h2>
              <p className="mt-2 text-lg text-text-secondary">
                5 шагов к энергии и лёгкости после 50
              </p>

              <ul className="mt-6 space-y-3">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-base text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="mt-8 h-12 w-full bg-cta px-8 text-base text-white shadow-md transition-all hover:bg-cta-hover hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
              >
                <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2 h-4 w-4" />
                  Получить бесплатно в Telegram
                </a>
              </Button>
            </div>

            {/* Decorative placeholder */}
            <div className="mx-auto mt-8 flex aspect-square w-full max-w-[200px] items-center justify-center rounded-xl bg-bg-warm/60 md:mx-0 md:mt-0 md:max-w-[240px]">
              <span className="text-center font-heading text-5xl leading-none text-accent/30">
                📋
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
