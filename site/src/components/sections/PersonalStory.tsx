"use client";

import { useRef } from "react";
import { Camera } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { personalStoryData } from "@/lib/data/personal-story";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FadeIn } from "@/components/animations/FadeIn";

gsap.registerPlugin(ScrollTrigger);

export function PersonalStory() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduced) {
        gsap.set(lineRef.current!, { scaleY: 1 });
        gsap.set(".timeline-marker", { scale: 1, opacity: 1 });
        return;
      }

      // Animated line drawing on scroll
      gsap.fromTo(
        lineRef.current!,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current!,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 0.5,
          },
        }
      );

      // Markers pop in
      gsap.utils.toArray<HTMLElement>(".timeline-marker").forEach((marker) => {
        gsap.fromTo(
          marker,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: marker,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: timelineRef }
  );

  return (
    <section id="story" className="bg-bg-section py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* Section heading */}
        <ScrollReveal direction="up" className="mb-12 text-center md:mb-16">
          <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
            {personalStoryData.heading}
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div
            ref={lineRef}
            className="absolute top-0 h-full w-0.5 origin-top bg-accent left-4 md:left-1/2 md:-translate-x-1/2"
            style={{ transform: "scaleY(0)" }}
          />

          {/* Stages */}
          <div className="flex flex-col gap-16 md:gap-24">
            {personalStoryData.stages.map((stage, i) => {
              const isEven = i % 2 === 1;
              return (
                <div key={stage.id} className="relative">
                  {/* Marker dot */}
                  <div
                    className="timeline-marker absolute left-4 top-0 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2"
                    style={{ opacity: 0 }}
                  >
                    <div className="h-4 w-4 rounded-full border-2 border-accent bg-bg-section shadow-sm" />
                    <div className="absolute h-2 w-2 rounded-full bg-accent" />
                  </div>

                  {/* Content card */}
                  <ScrollReveal
                    direction={isEven ? "right" : "left"}
                    className={[
                      "ml-10 md:ml-0 md:w-[calc(50%-2rem)]",
                      isEven ? "md:ml-auto md:pl-0" : "md:mr-auto md:pr-0",
                    ].join(" ")}
                  >
                    <div className="rounded-xl border border-border bg-bg-main p-6 shadow-sm">
                      <h3 className="mb-2 font-heading text-xl font-bold text-accent md:text-2xl">
                        {stage.title}
                      </h3>
                      <p className="mb-4 text-base leading-relaxed text-text-secondary">
                        {stage.description}
                      </p>

                      {/* Quote */}
                      <blockquote className="rounded-lg bg-accent/5 p-4">
                        <span className="font-heading text-2xl leading-none text-accent">
                          &laquo;
                        </span>
                        <p className="mt-1 font-heading text-base italic leading-relaxed text-text-primary md:text-lg">
                          {stage.quote}
                        </p>
                        <span className="mt-1 block text-right font-heading text-2xl leading-none text-accent">
                          &raquo;
                        </span>
                      </blockquote>

                      {/* Photo placeholder */}
                      <FadeIn direction="up" delay={0.2} className="mt-4">
                        <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-border bg-bg-warm/40">
                          <Camera className="mr-2 h-5 w-5 text-text-secondary/40" />
                          <span className="text-sm text-text-secondary/60">
                            Фото
                          </span>
                        </div>
                      </FadeIn>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bridge text */}
        <FadeIn direction="up" delay={0.2} className="mt-12 text-center md:mt-16">
          <p className="mx-auto max-w-2xl font-heading text-xl italic leading-relaxed text-text-secondary md:text-2xl">
            {personalStoryData.bridge}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
