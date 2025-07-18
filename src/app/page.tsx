import BetaProgramSection from "@/components/BetaProgramSection";
import CtaSection from "@/components/CtaSection";
import DailyDigestSection from "@/components/DailyDigestSection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/Features";
import { HeroSection } from "@/components/HeroSection";
import JoinBetaSection from "@/components/JoinBetaSection";
import DripwisesStatsSection from "@/components/NuggetStatsSection";
import PricingSection from "@/components/PricingSection";
import ProspectingProblemSection from "@/components/ProspectingProblemSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function page() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DailyDigestSection />
      <ProspectingProblemSection />
      <CtaSection />
      <TestimonialsSection />
      <PricingSection />
      <BetaProgramSection />
      <DripwisesStatsSection />
      <JoinBetaSection />
      <FaqSection />
    </>
  );
}
