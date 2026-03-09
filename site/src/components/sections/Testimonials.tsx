"use client";

import { User } from "lucide-react";
import { testimonialsData, type Testimonial } from "@/lib/data/testimonials";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

function getLabel(item: Testimonial) {
  if (item.age > 0) {
    const parts = [`${item.age} лет`];
    if (item.location) parts.push(item.location);
    return parts.join(" · ");
  }
  // Doctors — extract profession from problem
  if (item.problem.startsWith("Врач")) {
    const prof = item.problem.split(".")[0];
    return item.location ? `${prof} · ${item.location}` : prof;
  }
  return item.location ?? "";
}

function isDoctor(item: Testimonial) {
  return item.problem.toLowerCase().includes("врач");
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg-main py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading */}
        <ScrollReveal direction="up" className="mb-10 text-center md:mb-14">
          <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
            {testimonialsData.heading}
          </h2>
        </ScrollReveal>

        {/* Cards */}
        <ScrollReveal
          direction="up"
          stagger={0.15}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {testimonialsData.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              {/* Avatar + meta */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <User className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="text-sm font-medium text-text-primary">
                    {getLabel(item)}
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {item.duration && (
                      <span className="text-xs text-text-secondary">
                        {item.duration}
                      </span>
                    )}
                    {isDoctor(item) && (
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                        Врач
                      </span>
                    )}
                    {item.location && (
                      <span className="text-xs text-text-secondary">
                        Дистанционно
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Problem */}
              <p className="mb-2 text-sm leading-relaxed text-text-secondary">
                {item.problem}
              </p>

              {/* Result */}
              <p className="mb-4 text-base font-medium text-text-primary">
                {item.result}
              </p>

              {/* Quote */}
              <blockquote className="mt-auto rounded-lg bg-accent/5 p-4">
                <p className="font-heading text-sm italic leading-relaxed text-text-primary">
                  <span className="text-accent">&laquo;</span>
                  {item.quote}
                  <span className="text-accent">&raquo;</span>
                </p>
              </blockquote>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
