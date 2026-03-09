"use client";

import { Calendar, Users, Award, Globe, type LucideIcon } from "lucide-react";
import { trustItems } from "@/lib/data/trust-bar";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CountUp } from "@/components/animations/CountUp";

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Users,
  Award,
  Globe,
};

/** Parse "200+" → { num: 200, suffix: "+" }; "Россия" → null */
function parseNumericValue(value: string) {
  const match = value.match(/^(\d+)(\+?)$/);
  if (!match) return null;
  return { num: Number(match[1]), suffix: match[2] };
}

export function TrustBar() {
  return (
    <section id="trust" className="bg-bg-section py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal direction="up" stagger={0.15} className="grid grid-cols-2 md:grid-cols-4">
          {trustItems.map((item, i) => {
            const Icon = iconMap[item.iconName];
            const numeric = parseNumericValue(item.value);

            return (
              <div
                key={i}
                className={[
                  "flex flex-col items-center gap-1 py-4",
                  // 2×2 on mobile, 4-col on desktop
                  "col-span-1",
                  // vertical divider on desktop (not on first item)
                  i > 0
                    ? "md:border-l md:border-border"
                    : "",
                ].join(" ")}
              >
                {Icon && (
                  <Icon className="mb-1 h-6 w-6 text-accent" strokeWidth={1.8} />
                )}
                <span className="font-heading text-xl font-bold text-text-primary sm:text-2xl md:text-3xl">
                  {numeric ? (
                    <CountUp end={numeric.num} suffix={numeric.suffix} />
                  ) : (
                    item.value
                  )}
                </span>
                <span className="text-sm text-text-secondary">{item.label}</span>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
