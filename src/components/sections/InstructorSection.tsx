import { Button } from "@/components/ui/button";
import instructorImage from "@/assets/instructor.jpg";

const InstructorSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-up order-2 lg:order-1">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground">
                Татьяна Иванова,
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                Ваш эксперт по машинной вышивке
              </p>
            </div>

            <p className="text-foreground leading-relaxed">
              10 лет опыта, сотни довольных учениц и тысяча вышитых изделий
            </p>

            <blockquote className="relative pl-6 border-l-4 border-primary py-2">
              <p className="text-lg italic text-foreground">
                «Поверьте в себя — и у вас всё получится!»
              </p>
            </blockquote>

            <Button variant="hero" size="lg" className="mt-6">
              Записаться на курс
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
                  alt="Татьяна Иванова - эксперт по машинной вышивке"
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
