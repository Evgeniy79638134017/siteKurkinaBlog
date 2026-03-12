import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Запишитесь на бесплатную консультацию с Ольгой Куркиной.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F0E6]">
      <div className="container-site section-padding">
        <h1 className="font-display text-5xl text-[#2C1810]">Контакты</h1>
        <p className="text-[#6B5B52] mt-4">— страница в разработке —</p>
      </div>
    </main>
  );
}
