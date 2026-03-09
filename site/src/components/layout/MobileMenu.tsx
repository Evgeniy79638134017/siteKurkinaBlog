"use client";

import { Send, MessageSquare, Phone } from "lucide-react";
import { navigationItems } from "@/lib/data/navigation";
import { messengers, primaryMessenger } from "@/lib/data/messengers";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const messengerIcons: Record<string, React.ReactNode> = {
  telegram: <Send className="h-5 w-5" />,
  max: <MessageSquare className="h-5 w-5" />,
  whatsapp: <Phone className="h-5 w-5" />,
};

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex w-72 flex-col bg-bg-main">
        <SheetHeader>
          <SheetTitle className="font-heading text-lg text-text-primary">
            Меню
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-4 flex flex-1 flex-col gap-1">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => onOpenChange(false)}
              className="flex h-12 items-center rounded-lg px-3 text-base font-medium text-text-primary transition-colors hover:bg-bg-section"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-4 border-t border-border pt-4">
          <Button
            asChild
            className="w-full bg-cta text-white hover:bg-cta-hover"
          >
            <a
              href={primaryMessenger.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Записаться на консультацию
            </a>
          </Button>

          <div className="flex items-center justify-center gap-4">
            {messengers.map((m) => (
              <a
                key={m.id}
                href={m.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full p-2 text-text-secondary transition-colors hover:bg-bg-section hover:text-text-primary"
                aria-label={m.name}
                title={m.name}
              >
                {messengerIcons[m.id]}
              </a>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
