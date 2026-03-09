"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
}: CountUpProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current!;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        el.textContent = `${prefix}${end}${suffix}`;
        return;
      }

      const counter = { value: 0 };

      gsap.to(counter, {
        value: end,
        duration,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
        onUpdate() {
          el.textContent = `${prefix}${Math.round(counter.value)}${suffix}`;
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <span ref={containerRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
