"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all",
        "duration-300",
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(44,24,16,0.08)]"
          : "bg-transparent"
      )}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Логотип */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="font-display text-xl md:text-2xl font-semibold text-dark group-hover:text-sage transition-colors">
              Ольга Куркина
            </span>
            <span className="font-sans text-[13px] text-muted tracking-wide">
              Эксперт клеточного питания · Биохакинг 50+
            </span>
          </Link>

          {/* Навигация — десктоп */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 font-sans text-[15px] font-medium transition-colors duration-200",
                  "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:rounded-full after:transition-all after:duration-200",
                  pathname === link.href
                    ? "text-dark after:bg-gold"
                    : "text-muted hover:text-dark after:bg-transparent hover:after:bg-gold/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Бургер */}
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.max}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-sage text-white rounded-full font-sans text-[15px] font-semibold hover:bg-sage-dark hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
            >
              Записаться
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-dark hover:text-sage transition-colors"
              aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="lg:hidden bg-cream border-t border-border shadow-lg">
          <nav className="container-site py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "px-4 py-3 rounded-xl font-sans text-base font-medium transition-colors",
                  pathname === link.href
                    ? "bg-sage/15 text-sage-dark"
                    : "text-dark hover:bg-beige"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CONTACT.max}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-center py-3.5 bg-sage text-white rounded-full font-sans font-semibold hover:bg-sage-dark transition-colors"
            >
              Записаться на консультацию
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
