import type { Metadata } from "next";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/montserrat";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyContact } from "@/components/layout/StickyContact";

export const metadata: Metadata = {
  title: "Ольга Куркина — нутрициолог",
  description:
    "Персональный нутрициолог для людей 50+. Запишитесь на бесплатную консультацию.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <StickyContact />
      </body>
    </html>
  );
}
