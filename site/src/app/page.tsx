import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { PainSection } from "@/components/sections/PainSection";
import { StorySection } from "@/components/sections/StorySection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AnimatedSection><PainSection /></AnimatedSection>
      <AnimatedSection><StorySection /></AnimatedSection>
      <ProgramsSection />
      <AnimatedSection><HowItWorks /></AnimatedSection>
      <TestimonialsSection />
      <AnimatedSection><FAQSection /></AnimatedSection>
      <AnimatedSection><LeadMagnet /></AnimatedSection>
      <BlogPreview />
      <AnimatedSection><FinalCTA /></AnimatedSection>
    </>
  );
}
