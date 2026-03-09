"use client";

import {
  MessageCircle,
  ClipboardList,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { servicesData } from "@/lib/data/services";
import { primaryMessenger } from "@/lib/data/messengers";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  ClipboardList,
  Handshake,
};

export function Services() {
  const ctaHref = primaryMessenger.url ?? "#";

  return (
    <section id="services" className="bg-bg-main py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading */}
        <ScrollReveal direction="up" className="mb-10 text-center md:mb-14">
          <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
            {servicesData.heading}
          </h2>
        </ScrollReveal>

        {/* Cards */}
        <ScrollReveal
          direction="up"
          stagger={0.15}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {servicesData.cards.map((card, i) => {
            const Icon = iconMap[card.iconName];
            const isPrimary = i === 0;

            return (
              <div
                key={card.id}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {Icon && (
                  <Icon
                    className="mb-4 h-8 w-8 text-accent"
                    strokeWidth={1.6}
                  />
                )}
                <h3 className="mb-2 font-heading text-xl font-bold text-text-primary">
                  {card.title}
                </h3>
                <p className="mb-6 flex-1 text-base leading-relaxed text-text-secondary">
                  {card.description}
                </p>
                <Button
                  asChild
                  size="lg"
                  className={
                    isPrimary
                      ? "h-12 bg-cta text-white shadow-sm hover:bg-cta-hover hover:shadow-md"
                      : "h-12 border-border text-text-primary hover:bg-bg-section"
                  }
                  variant={isPrimary ? "default" : "outline"}
                >
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card.ctaText}
                  </a>
                </Button>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
