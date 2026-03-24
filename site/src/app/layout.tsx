import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ольга Куркина — нутрициолог, биохакинг для 50+",
    template: "%s | Ольга Куркина",
  },
  description:
    "Нутрициолог и эксперт по биохакингу для людей 50+. Помогаю восстановить здоровье и энергию через клеточное питание. Личный опыт: ремиссия ревматоидного артрита.",
  keywords: [
    "нутрициолог",
    "биохакинг",
    "здоровье после 50",
    "клеточное питание",
    "ревматоидный артрит",
    "активное долголетие",
    "консультация нутрициолога",
  ],
  authors: [{ name: "Ольга Куркина" }],
  creator: "Ольга Куркина",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://olga-kurkina.vercel.app",
    siteName: "Ольга Куркина",
    title: "Ольга Куркина — нутрициолог, биохакинг для 50+",
    description:
      "Нутрициолог и эксперт по биохакингу для людей 50+. Помогаю восстановить здоровье и энергию через клеточное питание.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ольга Куркина — нутрициолог",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ольга Куркина — нутрициолог, биохакинг для 50+",
    description: "Нутрициолог и эксперт по биохакингу для людей 50+.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${cormorantGaramond.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingCTA />
        </body>
    </html>
  );
}
