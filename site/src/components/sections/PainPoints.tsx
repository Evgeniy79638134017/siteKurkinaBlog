"use client";

import {
  Battery,
  Bone,
  Pill,
  HeartPulse,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { painPointsData } from "@/lib/data/pain-points";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FadeIn } from "@/components/animations/FadeIn";

const iconMap: Record<string, LucideIcon> = {
  Battery,
  Bone,
  Pill,
  HeartPulse,
  Clock,
};

export function PainPoints() {
  return (
    <section id="about" className="bg-bg-main py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* Section heading */}
        <ScrollReveal direction="up" className="mb-10 text-center md:mb-14">
          <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
            {painPointsData.heading}
          </h2>
        </ScrollReveal>

        {/* Pain point cards — 3+2 grid on desktop */}
        <ScrollReveal
          direction="up"
          stagger={0.12}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6"
        >
          {painPointsData.items.map((item, i) => {
            const Icon = iconMap[item.iconName];
            return (
              <div
                key={i}
                className={[
                  "flex items-start gap-4 rounded-xl border border-border bg-bg-section p-5 shadow-sm",
                  // center the last 2 cards on md (3-col row)
                  i === 3 ? "md:col-start-2" : "",
                ].join(" ")}
              >
                {Icon && (
                  <Icon
                    className="mt-0.5 h-6 w-6 shrink-0 text-accent"
                    strokeWidth={1.8}
                  />
                )}
                <p className="text-base leading-relaxed text-text-primary">
                  {item.text}
                </p>
              </div>
            );
          })}
        </ScrollReveal>

        {/* Bridge text */}
        <FadeIn direction="up" delay={0.3} className="mt-10 text-center md:mt-14">
          <p className="mx-auto max-w-2xl font-heading text-xl italic leading-relaxed text-text-secondary md:text-2xl">
            {painPointsData.bridge}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
