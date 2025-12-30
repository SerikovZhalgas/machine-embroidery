import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-embroidery.jpg";
import { Sparkles, Home, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="container relative z-10 mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-foreground">
            Освой машинную вышивку и начни{" "}
            <span className="text-primary italic">зарабатывать</span>
            <br />
            на своём творчестве
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
            От первых стежков до уверенной работы на вышивальной машине
          </p>
          
          <Button variant="hero" size="lg" className="mt-4">
            Записаться на курс
          </Button>
        </div>
        
        {/* Benefits Bar */}
        <div className="mt-16 lg:mt-24 animate-fade-up animation-delay-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <BenefitItem 
              icon={<Sparkles className="w-6 h-6" />}
              title="Для новичков и мастеров"
            />
            <BenefitItem 
              icon={<Home className="w-6 h-6" />}
              title="Работа из дома"
            />
            <BenefitItem 
              icon={<TrendingUp className="w-6 h-6" />}
              title="Своя прибыльная ниша"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft hover:shadow-card transition-all duration-300">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
      {icon}
    </div>
    <span className="text-foreground font-medium">{title}</span>
  </div>
);

export default HeroSection;
