import HeroSection from "@/components/sections/HeroSection";
import LearnSection from "@/components/sections/LearnSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FormatSection from "@/components/sections/FormatSection";
import InstructorSection from "@/components/sections/InstructorSection";
import FooterSection from "@/components/sections/FooterSection";
import LanguageSwitcher from "@/components/LanguageSwitcher.tsx";
import ReviewsSection from "@/components/sections/ReviewsSection.tsx";
import {FranchiseSection} from "@/components/sections/FranchiseSection.tsx";

const Index = () => {
  return (
    <main className="min-h-screen">
        <LanguageSwitcher/>
      <HeroSection />
      <LearnSection />
      <PortfolioSection />
      <FormatSection />
        <ReviewsSection />
      <InstructorSection />
        <FranchiseSection />
      <FooterSection />
    </main>
  );
};

export default Index;
