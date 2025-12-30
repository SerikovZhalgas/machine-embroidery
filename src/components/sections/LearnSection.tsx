import learnPreparation from "@/assets/learn-preparation.jpg";
import learnDesign from "@/assets/learn-design.jpg";
import learnCommercial from "@/assets/learn-commercial.jpg";

const LearnSection = () => {
  const courses = [
    {
      image: learnPreparation,
      title: "Подготовка и настройки",
      alt: "Нитки для вышивки",
    },
    {
      image: learnDesign,
      title: "Создание дизайнов",
      alt: "Создание дизайнов на компьютере",
    },
    {
      image: learnCommercial,
      title: "Коммерческая вышивка",
      alt: "Монограмма на полотенце",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-center text-foreground mb-16">
          Чему вы научитесь:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden rounded-2xl shadow-card bg-background transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-medium text-foreground">
                    {course.title}
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
