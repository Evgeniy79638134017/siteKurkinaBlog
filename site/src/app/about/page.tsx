import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Моя история",
  description:
    "Как бывший директор в 64 года преодолела ревматоидный артрит и построила бизнес с доходом 200 000 ₽/мес.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F0E6]">
      <div className="container-site section-padding">
        <h1 className="font-display text-5xl text-[#2C1810]">Моя история</h1>
        <p className="text-[#6B5B52] mt-4">— страница в разработке —</p>
      </div>
    </main>
  );
}
