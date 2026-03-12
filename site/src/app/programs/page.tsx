import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Программы здоровья",
  description:
    "Программы восстановления здоровья через клеточное питание: суставы, давление, ЖКТ, энергия.",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#F7F0E6]">
      <div className="container-site section-padding">
        <h1 className="font-display text-5xl text-[#2C1810]">
          Программы здоровья
        </h1>
        <p className="text-[#6B5B52] mt-4">— страница в разработке —</p>
      </div>
    </main>
  );
}
