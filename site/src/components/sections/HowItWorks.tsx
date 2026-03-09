"use client";

import {
  MessageCircle,
  ClipboardList,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { howItWorksData } from "@/lib/data/how-it-works";
import { primaryMessenger } from "@/lib/data/messengers";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FadeIn } from "@/components/animations/FadeIn";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  ClipboardList,
  Sparkles,
};

export function HowItWorks() {
  const ctaHref = primaryMessenger.url ?? "#";

  return (
    <section id="how-it-works" className="bg-bg-section py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading */}
        <ScrollReveal direction="up" className="mb-12 text-center md:mb-16">
          <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
            {howItWorksData.heading}
          </h2>
        </ScrollReveal>

        {/* Steps */}
        <ScrollReveal
          direction="up"
          stagger={0.2}
          className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4"
        >
          {howItWorksData.steps.map((step, i) => {
            const Icon = iconMap[step.iconName];
            const isLast = i === howItWorksData.steps.length - 1;

            return (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Connector line — desktop only, between steps */}
                {!isLast && (
                  <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-0.5 w-[calc(100%-4rem)] border-t-2 border-dashed border-accent/30 md:block" />
                )}

                {/* Number circle */}
                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <span className="font-heading text-3xl font-bold text-accent">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                {Icon && (
                  <Icon className="mb-3 h-7 w-7 text-accent" strokeWidth={1.6} />
                )}

                {/* Text */}
                <p className="max-w-xs text-base leading-relaxed text-text-primary">
                  {step.text}
                </p>
              </div>
            );
          })}
        </ScrollReveal>

        {/* Mini-CTA */}
        <FadeIn direction="up" delay={0.3} className="mt-12 text-center">
          <p className="mb-5 text-lg text-text-secondary">
            {howItWorksData.cta}
          </p>
          <Button
            asChild
            size="lg"
            className="h-12 w-full bg-cta px-8 text-base text-white shadow-md transition-all hover:bg-cta-hover hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
          >
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              Записаться на консультацию
            </a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
