import { Send, MessageSquare, Phone as PhoneIcon } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";
import { navigationItems } from "@/lib/data/navigation";
import { messengers, phone } from "@/lib/data/messengers";
import { Separator } from "@/components/ui/separator";

const messengerIcons: Record<string, React.ReactNode> = {
  telegram: <Send className="h-4 w-4" />,
  max: <MessageSquare className="h-4 w-4" />,
  whatsapp: <PhoneIcon className="h-4 w-4" />,
};

export function Footer() {
  const whatsappDisclaimer = messengers.find(
    (m) => m.disclaimer
  )?.disclaimer;

  return (
    <footer className="bg-bg-section">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-6">
        {/* Columns */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-heading text-xl font-bold text-text-primary">
              {siteConfig.author.name}
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              {siteConfig.author.role} · Помогаю вернуть здоровье после 50
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-3 text-sm font-semibold text-text-primary">
              Навигация
            </p>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="mb-3 text-sm font-semibold text-text-primary">
              Контакты
            </p>
            <ul className="space-y-2">
              {messengers.map((m) => (
                <li key={m.id}>
                  <a
                    href={m.url ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {messengerIcons[m.id]}
                    {m.name}
                  </a>
                </li>
              ))}
              {phone && (
                <li>
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    {phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <Separator className="my-6 bg-border" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 text-sm text-text-secondary md:flex-row">
          <span>&copy; 2026 {siteConfig.author.name}</span>
          <a
            href="/privacy"
            className="transition-colors hover:text-text-primary"
          >
            Политика конфиденциальности
          </a>
        </div>

        {/* Disclaimers */}
        <div className="mt-6 space-y-2 text-xs text-text-secondary/70">
          {whatsappDisclaimer && <p>* {whatsappDisclaimer}</p>}
          <p>
            Информация на сайте не является медицинской консультацией. Перед
            применением рекомендаций проконсультируйтесь со специалистом.
          </p>
        </div>
      </div>
    </footer>
  );
}
