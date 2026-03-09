import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/montserrat";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyContact } from "@/components/layout/StickyContact";
import { CookieConsent } from "@/components/layout/CookieConsent";

const YANDEX_METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://kurkina.ru"
  ),
  title: "Ольга Куркина — Нутрициолог | Здоровье и энергия после 50",
  description:
    "Помогаю людям 50+ вернуть энергию и здоровье через клеточное питание. 200+ клиентов, стойкие результаты. Бесплатная консультация.",
  keywords: [
    "нутрициолог",
    "здоровье после 50",
    "клеточное питание",
    "ревматоидный артрит",
    "консультация нутрициолога",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ольга Куркина — Нутрициолог | Здоровье и энергия после 50",
    description:
      "Помогаю людям 50+ вернуть энергию и здоровье через клеточное питание. Бесплатная консультация.",
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ольга Куркина — Нутрициолог",
    description:
      "Помогаю людям 50+ вернуть энергию и здоровье. Бесплатная консультация.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
        <CookieConsent />

        {YANDEX_METRIKA_ID && (
          <>
            <Script id="yandex-metrika" strategy="afterInteractive">
              {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return;}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
ym(${YANDEX_METRIKA_ID},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`}
            </Script>
            <noscript>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
                  style={{ position: "absolute", left: "-9999px" }}
                  alt=""
                />
              </div>
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
