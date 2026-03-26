import Link from "next/link";
import { CONTACT, NAV_LINKS, SITE } from "@/lib/constants";

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.16 13.595l-2.964-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.992.964z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-cream">
      <div className="container-site py-12 md:py-16">

        {/* Верхний блок */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 pb-10 border-b border-white/10">

          {/* Бренд */}
          <div>
            <p className="font-display text-2xl font-semibold text-white mb-1">Ольга Куркина</p>
            <p className="text-white/70 text-[15px] mb-4">{SITE.tagline}</p>
            <p className="text-white/70 text-sm leading-relaxed">
              {SITE.description}
            </p>
          </div>

          {/* Навигация */}
          <div>
            <p className="font-sans text-[13px] font-semibold uppercase tracking-widest text-white/50 mb-4">
              Навигация
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-dark hover:text-white text-[15px] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты и соцсети */}
          <div>
            <p className="font-sans text-[13px] font-semibold uppercase tracking-widest text-white/50 mb-4">
              Связаться
            </p>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-cream-dark hover:text-white text-[15px] transition-colors"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.telegramPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-dark hover:text-white text-[15px] transition-colors"
                >
                  {CONTACT.telegramHandle}
                </a>
              </li>
            </ul>

            {/* Соцсети */}
            <div className="flex items-center gap-3">
              <a
                href={CONTACT.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram-канал"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-cream-dark hover:bg-sage hover:text-white transition-colors"
              >
                <TelegramIcon />
              </a>
              <a
                href={CONTACT.telegramPersonal}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram личный"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-cream-dark hover:bg-sage hover:text-white transition-colors"
              >
                <TelegramIcon />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-cream-dark hover:bg-sage hover:text-white transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href={CONTACT.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-cream-dark hover:bg-sage hover:text-white transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Нижний блок */}
        <div className="space-y-3 text-[12px] text-white/40 leading-relaxed">
          <p>© {year} Ольга Куркина. Все права защищены.</p>
          <p>
            Информация на сайте носит ознакомительный характер, отражает личный опыт автора
            и не является медицинской рекомендацией. Ольга Куркина не является врачом
            или сертифицированным нутрициологом. Перед началом любой программы
            проконсультируйтесь с лечащим врачом. Результаты индивидуальны
            и могут отличаться.
          </p>
          <p>
            Упомянутые продукты клеточного питания являются БАД (биологически активными
            добавками) и не являются лекарственными средствами.
          </p>
          <p>* Instagram — продукт компании Meta, признанной в РФ экстремистской организацией.</p>
        </div>

      </div>
    </footer>
  );
}
