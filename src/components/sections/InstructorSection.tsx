import { Button } from "@/components/ui/button";
import instructorImage from "@/assets/instructor.png";
import {useLanguage} from "@/contexts/LanguageContext.tsx";
import {handleBooking} from "@/lib/utils.ts";

const InstructorSection = () => {
  const {t} = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-up order-2 lg:order-1">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground">
                {t('instructor.name')}
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                {t('instructor.role')}
              </p>
            </div>

            <p className="text-foreground leading-relaxed">
              {t('instructor.description')}
            </p>

            <blockquote className="relative pl-6 border-l-4 border-primary py-2">
              <p className="text-lg italic text-foreground">
                {t('instructor.quote')}
              </p>
            </blockquote>

            <Button onClick={() => handleBooking(false)} variant="hero" size="lg" className="mt-6">
              {t('hero.cta')}
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-up animation-delay-200 order-1 lg:order-2">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-terracotta-light/20 rounded-3xl transform rotate-3 scale-105" />
              
              <div className="relative overflow-hidden rounded-3xl shadow-elevated">
                <img
                  src={instructorImage}
                  alt={t('instructor.imageAlt')}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
