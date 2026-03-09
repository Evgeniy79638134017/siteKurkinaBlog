import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { PainPoints } from "@/components/sections/PainPoints";
import { PersonalStory } from "@/components/sections/PersonalStory";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <PainPoints />
      <PersonalStory />
    </main>
  );
}
