"use client";

import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { primaryMessenger } from "@/lib/data/messengers";

export function StickyContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={primaryMessenger.url ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в Telegram"
      className={`fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-cta text-white shadow-lg transition-all duration-300 hover:bg-cta-hover md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Send className="h-6 w-6" />
    </a>
  );
}
