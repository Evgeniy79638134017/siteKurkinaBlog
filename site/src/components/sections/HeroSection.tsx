"use client";

import { Camera } from "lucide-react";
import { heroData } from "@/lib/data/hero";
import { primaryMessenger } from "@/lib/data/messengers";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn } from "@/components/animations/FadeIn";

export function HeroSection() {
  const ctaPrimaryHref = primaryMessenger.url ?? "#";

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-b from-bg-warm to-bg-main pt-24 md:pt-0"
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-8 px-4 md:flex-row md:gap-12 md:py-0">
        {/* Photo placeholder — mobile first */}
        <div className="order-first mt-4 w-full max-w-xs md:order-last md:mt-0 md:w-[45%] md:max-w-none">
          <FadeIn direction="up" delay={0.2} className="md:hidden">
            <PhotoPlaceholder />
          </FadeIn>
          <FadeIn direction="right" delay={0.2} className="hidden md:block">
            <PhotoPlaceholder />
          </FadeIn>
        </div>

        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <TextReveal
            tag="h1"
            splitBy="words"
            className="font-heading text-4xl font-bold leading-tight text-text-primary md:text-5xl lg:text-6xl"
          >
            {heroData.heading}
          </TextReveal>

          <FadeIn direction="up" delay={0.4} className="mt-6">
            <p className="max-w-lg text-lg text-text-secondary md:text-xl">
              {heroData.subheading}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.7} className="mt-8 w-full md:w-auto">
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 bg-cta px-8 text-base text-white shadow-md transition-all hover:bg-cta-hover hover:-translate-y-0.5 hover:shadow-lg"
              >
                <a
                  href={ctaPrimaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {heroData.ctaPrimary.text}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 border-border px-8 text-base text-text-primary hover:bg-bg-section"
              >
                <a href={heroData.ctaSecondary.href}>
                  {heroData.ctaSecondary.text}
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function PhotoPlaceholder() {
  return (
    <div className="flex aspect-3/4 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-bg-main/60 shadow-sm">
      <Camera className="mb-3 h-12 w-12 text-text-secondary/40" />
      <span className="text-sm text-text-secondary/60">Фото Ольги</span>
    </div>
  );
}
