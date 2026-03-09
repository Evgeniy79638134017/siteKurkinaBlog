"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "motion/react";

export interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  inView?: boolean;
  className?: string;
}

function getInitialOffset(direction: string, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 20,
  inView = true,
  className,
}: FadeInProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const offset = getInitialOffset(direction, distance);
  const initial = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0, ...offset };
  const animate = { opacity: 1, x: 0, y: 0 };
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration, delay, ease: "easeOut" as const };

  if (inView) {
    return (
      <motion.div
        className={className}
        initial={initial}
        whileInView={animate}
        viewport={{ once: true, margin: "-15%" }}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
