import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { PainPoints } from "@/components/sections/PainPoints";
import { PersonalStory } from "@/components/sections/PersonalStory";
import { QuoteBreak } from "@/components/sections/QuoteBreak";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <PainPoints />
      <PersonalStory />
      <QuoteBreak quoteIndex={0} />
      <Services />
    </main>
  );
}
