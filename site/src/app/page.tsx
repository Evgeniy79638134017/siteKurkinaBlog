import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { PainPoints } from "@/components/sections/PainPoints";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <PainPoints />
    </main>
  );
}
