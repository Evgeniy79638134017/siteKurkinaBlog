"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  direction?: "vertical" | "horizontal";
  className?: string;
}

export function ParallaxLayer({
  children,
  speed = 0.5,
  direction = "vertical",
  className,
}: ParallaxLayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const movement = 100 * speed;
      const props =
        direction === "vertical" ? { y: movement } : { x: movement };

      gsap.to(containerRef.current!, {
        ...props,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current!,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
