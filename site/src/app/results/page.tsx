import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Результаты клиентов",
  description: "Реальные истории восстановления здоровья клиентов Ольги Куркиной.",
};

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[#F7F0E6]">
      <div className="container-site section-padding">
        <h1 className="font-display text-5xl text-[#2C1810]">
          Результаты клиентов
        </h1>
        <p className="text-[#6B5B52] mt-4">— страница в разработке —</p>
      </div>
    </main>
  );
}
