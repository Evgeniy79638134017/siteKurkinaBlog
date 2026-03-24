"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";
import { STATS } from "@/lib/constants";

function parseStatValue(raw: string): { prefix: string; num: number; suffix: string } {
  // "×20" → { prefix: "×", num: 20, suffix: "" }
  // "4 мес" → { prefix: "", num: 4, suffix: " мес" }
  // "5 лет" → { prefix: "", num: 5, suffix: " лет" }
  // "64" → { prefix: "", num: 64, suffix: "" }
  const withPrefix = raw.match(/^([^\d]+)(\d+)(.*)$/);
  if (withPrefix) {
    return { prefix: withPrefix[1], num: parseInt(withPrefix[2]), suffix: withPrefix[3] };
  }
  const withSuffix = raw.match(/^(\d+)(.*)$/);
  if (withSuffix) {
    return { prefix: "", num: parseInt(withSuffix[1]), suffix: withSuffix[2] };
  }
  return { prefix: "", num: 0, suffix: raw };
}

function AnimatedCounter({ value }: { value: string }) {
  const { prefix, num, suffix } = parseStatValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(count, num, { duration: 1.8, ease: "easeOut" });
    }
  }, [isInView, count, num]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function TrustBar() {
  return (
    <section className="bg-sage py-12">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              <p className="font-display text-4xl md:text-5xl text-white font-semibold mb-1">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="font-sans text-xs font-semibold text-white/80 uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <p className="font-sans text-xs text-white/60 leading-snug">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
