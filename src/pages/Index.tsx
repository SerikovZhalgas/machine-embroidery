import HeroSection from "@/components/sections/HeroSection";
import LearnSection from "@/components/sections/LearnSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FormatSection from "@/components/sections/FormatSection";
import InstructorSection from "@/components/sections/InstructorSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <LearnSection />
      <PortfolioSection />
      <FormatSection />
      <InstructorSection />
      <FooterSection />
    </main>
  );
};

export default Index;
