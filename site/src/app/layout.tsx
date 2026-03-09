import type { Metadata } from "next";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/montserrat";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
