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
  metadataBase: new URL("https://olga-kurkina.vercel.app"),
  title: {
    default: "Ольга Куркина — эксперт клеточного питания, биохакинг 50+",
    template: "%s | Ольга Куркина",
  },
  description:
    "Эксперт клеточного питания и биохакинг для людей 50+. Делюсь личным опытом восстановления здоровья через клеточное питание. Ремиссия ревматоидного артрита.",
  keywords: [
    "клеточное питание эксперт",
    "биохакинг",
    "здоровье после 50",
    "клеточное питание",
    "ревматоидный артрит",
    "активное долголетие",
    "консультация по клеточному питанию",
  ],
  authors: [{ name: "Ольга Куркина" }],
  creator: "Ольга Куркина",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://olga-kurkina.vercel.app",
    siteName: "Ольга Куркина",
    title: "Ольга Куркина — эксперт клеточного питания, биохакинг 50+",
    description:
      "Эксперт клеточного питания и биохакинг для людей 50+. Делюсь личным опытом восстановления здоровья через клеточное питание.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ольга Куркина — эксперт клеточного питания, биохакинг 50+",
    description: "Эксперт клеточного питания и биохакинг для людей 50+.",
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
