import learnPreparation from "@/assets/images/learn-preparation.jpg";
import learnDesign from "@/assets/images/learn-design.jpg";
import learnCommercial from "@/assets/images/learn-commercial.jpg";
import {useLanguage} from "@/contexts/LanguageContext.tsx";

const LearnSection = () => {
  const {t} = useLanguage();
  const courses = [
    {
      image: learnPreparation,
      titleKey: "learn.item1.title",
      altKey: "learn.item1.alt",
    },
    {
      image: learnDesign,
      titleKey: "learn.item2.title",
      altKey: "learn.item2.alt",
    },
    {
      image: learnCommercial,
      titleKey: "learn.item3.title",
      altKey: "learn.item3.alt",
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-center text-foreground mb-16">
          {t('learn.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={course.titleKey}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden rounded-2xl shadow-card bg-background transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.altKey}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-medium text-foreground">
                    {t(course.titleKey)}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
