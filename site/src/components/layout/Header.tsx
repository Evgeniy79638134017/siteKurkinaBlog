"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navigationItems } from "@/lib/data/navigation";
import { primaryMessenger, siteConfig } from "./layout-data";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg-main/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-heading text-lg font-bold text-text-primary md:text-xl">
            {siteConfig.author.name}
          </span>
          <span className="text-xs text-text-secondary">
            {siteConfig.author.role}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button
          asChild
          className="hidden bg-cta text-white hover:bg-cta-hover md:inline-flex"
        >
          <a
            href={primaryMessenger.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Записаться
          </a>
        </Button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center justify-center text-text-primary md:hidden"
          aria-label="Открыть меню"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onOpenChange={setMobileOpen} />
    </header>
  );
}
