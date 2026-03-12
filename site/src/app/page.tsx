import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ольга Куркина — нутрициолог, биохакинг для 50+",
  description:
    "Нутрициолог и эксперт по биохакингу. Личный опыт: ремиссия ревматоидного артрита. Помогаю людям 50+ восстановить здоровье и энергию.",
};

// TODO: Компоненты секций (добавляются в следующих спринтах)
// import { HeroSection } from "@/components/sections/HeroSection";
// import { TrustBar } from "@/components/sections/TrustBar";
// import { PainSection } from "@/components/sections/PainSection";
// import { StorySection } from "@/components/sections/StorySection";
// import { ProgramsSection } from "@/components/sections/ProgramsSection";
// import { HowItWorks } from "@/components/sections/HowItWorks";
// import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
// import { LeadMagnet } from "@/components/sections/LeadMagnet";
// import { BlogPreview } from "@/components/sections/BlogPreview";
// import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main>
      {/* Временная заглушка — будет заменена на секции */}
      <section className="min-h-screen flex items-center justify-center bg-[#F7F0E6]">
        <div className="text-center max-w-2xl px-6">
          <p className="text-[#96AB88] text-lg mb-4 font-sans tracking-widest uppercase">
            Нутрициолог · Биохакинг для 50+
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-[#2C1810] mb-6 leading-tight">
            Ольга Куркина
          </h1>
          <p className="text-[#6B5B52] text-xl mb-8 leading-relaxed font-sans">
            «Моё состояние в 64 года равно 40 лет. Представляете?»
          </p>
          <p className="text-[#A58D7F] text-base font-sans">
            Сайт в разработке — скоро здесь будет всё самое важное
          </p>
        </div>
      </section>
    </main>
  );
}
