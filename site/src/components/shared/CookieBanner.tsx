"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "cookie-consent";

type ConsentValue = "all" | "essential" | null;

function getStoredConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (v === "all" || v === "essential") return v;
  return null;
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) setVisible(true);
  }, []);

  function accept(value: "all" | "essential") {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Согласие на использование cookie"
      className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6"
    >
      <div className="container-site">
        <div className="bg-white rounded-2xl shadow-xl shadow-dark/10 border border-border p-6 md:p-8 max-w-3xl mx-auto">
          <p className="font-sans text-dark text-base leading-relaxed mb-2">
            Мы используем cookie-файлы для корректной работы сайта и аналитики.
          </p>
          <p className="font-sans text-muted text-sm leading-relaxed mb-5">
            Подробнее в{" "}
            <Link
              href="/cookies"
              className="text-sage underline hover:text-sage-dark transition-colors"
            >
              Политике cookie
            </Link>{" "}
            и{" "}
            <Link
              href="/privacy"
              className="text-sage underline hover:text-sage-dark transition-colors"
            >
              Политике конфиденциальности
            </Link>
            . Вы можете изменить выбор в любое время.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => accept("all")}
              className="bg-sage hover:bg-sage-dark text-white rounded-full px-6 py-3 font-sans font-semibold transition-colors"
            >
              Принять все
            </Button>
            <Button
              onClick={() => accept("essential")}
              variant="outline"
              className="rounded-full px-6 py-3 font-sans font-semibold border-border hover:bg-cream transition-colors"
            >
              Только необходимые
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
