"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export interface TextRevealProps {
  children: ReactNode;
  splitBy?: "words" | "chars";
  stagger?: number;
  duration?: number;
  delay?: number;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function TextReveal({
  children,
  splitBy = "words",
  stagger = 0.05,
  duration = 0.6,
  delay = 0,
  className,
  tag: Tag = "div",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(containerRef.current!, { opacity: 1 });
        return;
      }

      const split = SplitText.create(containerRef.current!, {
        type: splitBy,
      });

      const targets = splitBy === "words" ? split.words : split.chars;

      gsap.fromTo(
        targets,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current!,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <Tag ref={containerRef as React.Ref<never>} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
