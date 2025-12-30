import HeroSection from "@/components/sections/HeroSection";
import LearnSection from "@/components/sections/LearnSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FormatSection from "@/components/sections/FormatSection";
import InstructorSection from "@/components/sections/InstructorSection";
import FooterSection from "@/components/sections/FooterSection";
import SectionDivider from "@/components/ui/section-divider";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SectionDivider />
      <LearnSection />
      <SectionDivider />
      <PortfolioSection />
      <SectionDivider />
      <FormatSection />
      <SectionDivider />
      <InstructorSection />
      <SectionDivider />
      <FooterSection />
    </main>
  );
};

export default Index;
