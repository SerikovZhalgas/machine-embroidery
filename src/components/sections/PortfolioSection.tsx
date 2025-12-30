import workJacket from "@/assets/work-jacket.jpg";
import workName from "@/assets/work-name.jpg";
import workMonogram from "@/assets/work-monogram.jpg";
import workChristmas from "@/assets/work-christmas.jpg";

const PortfolioSection = () => {
  const works = [
    {
      image: workJacket,
      alt: "Вышивка на джинсовой куртке",
    },
    {
      image: workName,
      alt: "Именная вышивка",
    },
    {
      image: workMonogram,
      alt: "Монограмма",
    },
    {
      image: workChristmas,
      alt: "Новогодние украшения",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-center text-foreground mb-16">
          Ваши будущие работы:
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {works.map((work, index) => (
            <div
              key={index}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden rounded-xl shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
