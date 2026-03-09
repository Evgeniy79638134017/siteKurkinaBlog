"use client";

import { useSyncExternalStore, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookie-consent-accepted";

function subscribeStorage(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function getConsentSnapshot() {
  return localStorage.getItem(STORAGE_KEY) !== null;
}

function getServerSnapshot() {
  return true; // assume accepted on server to avoid flash
}

export function CookieConsent() {
  const accepted = useSyncExternalStore(
    subscribeStorage,
    getConsentSnapshot,
    getServerSnapshot
  );
  const [dismissed, setDismissed] = useState(false);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "1");
    setDismissed(true);
  }

  if (accepted || dismissed) return null;

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-border bg-bg-main/95 px-4 py-4 shadow-lg backdrop-blur-sm md:bottom-4 md:right-4 md:left-auto md:max-w-md md:rounded-xl md:border">
      <p className="text-sm leading-relaxed text-text-secondary">
        Мы используем файлы cookie для улучшения работы сайта. Продолжая
        использование, вы соглашаетесь с{" "}
        <Link
          href="/privacy"
          className="text-accent underline underline-offset-2 hover:text-accent-hover"
        >
          политикой конфиденциальности
        </Link>
        .
      </p>
      <Button
        onClick={accept}
        size="sm"
        className="mt-3 bg-cta text-white hover:bg-cta-hover"
      >
        Принять
      </Button>
    </div>
  );
}
