export interface Messenger {
  id: string;
  name: string;
  url: string | undefined;
  isPrimary?: boolean;
  disclaimer?: string;
}

export const messengers: Messenger[] = [
  {
    id: "telegram",
    name: "Telegram",
    url: process.env.NEXT_PUBLIC_TELEGRAM_URL,
    isPrimary: true,
  },
  {
    id: "max",
    name: "Max (VK)",
    url: process.env.NEXT_PUBLIC_MAX_VK_URL,
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    url: process.env.NEXT_PUBLIC_WHATSAPP_URL,
    disclaimer:
      "WhatsApp принадлежит компании Meta Platforms Inc., признанной экстремистской организацией и запрещённой на территории Российской Федерации.",
  },
];

export const primaryMessenger = messengers.find((m) => m.isPrimary)!;

export const phone: string | undefined = process.env.NEXT_PUBLIC_PHONE;
