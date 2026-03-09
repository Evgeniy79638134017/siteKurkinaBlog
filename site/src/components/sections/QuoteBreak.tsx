"use client";

import { quotes } from "@/lib/data/quotes";
import { FadeIn } from "@/components/animations/FadeIn";

interface QuoteBreakProps {
  quoteIndex: number;
}

export function QuoteBreak({ quoteIndex }: QuoteBreakProps) {
  const quote = quotes[quoteIndex];

  return (
    <section className="overflow-hidden bg-quote-bg py-16 md:py-24">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Decorative open quote */}
        <span
          aria-hidden
          className="absolute -top-4 left-2 font-heading text-7xl leading-none text-white/20 md:-top-6 md:left-0 md:text-9xl"
        >
          &laquo;
        </span>

        <FadeIn direction="up">
          <blockquote className="relative z-10">
            <p className="font-heading text-2xl italic leading-relaxed text-quote-text md:text-3xl lg:text-4xl">
              {quote.text}
            </p>
            <footer className="mt-6 text-sm text-white/70">
              — {quote.author}
            </footer>
          </blockquote>
        </FadeIn>

        {/* Decorative close quote */}
        <span
          aria-hidden
          className="absolute -bottom-4 right-2 font-heading text-7xl leading-none text-white/20 md:-bottom-6 md:right-0 md:text-9xl"
        >
          &raquo;
        </span>
      </div>
    </section>
  );
}
