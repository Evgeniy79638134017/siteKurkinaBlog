import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { PainPoints } from "@/components/sections/PainPoints";
import { PersonalStory } from "@/components/sections/PersonalStory";
import { QuoteBreak } from "@/components/sections/QuoteBreak";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <PainPoints />
      <PersonalStory />
      <QuoteBreak quoteIndex={0} />
      <Services />
      <HowItWorks />
      <QuoteBreak quoteIndex={1} />
      <Testimonials />
      <LeadMagnet />
      <BlogPreview />
      <FinalCTA />
    </main>
  );
}
