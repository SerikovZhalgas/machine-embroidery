import work1 from "@/assets/images/review1.jpeg";
import work2 from "@/assets/images/review2.jpeg";
import work3 from "@/assets/images/review3.jpeg";
import work4 from "@/assets/images/review4.jpg";
import {useLanguage} from "@/contexts/LanguageContext.tsx";
import {useState} from "react";
import ImageLightbox from "@/components/ui/image-lightbox.tsx";

const ReviewsSection = () => {
  const {t} = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const reviews = [
    {
      image: work1,
    },
    {
      image: work2,
    },
    {
      image: work3,
    },
    {
      image: work4,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-center text-foreground mb-16">
          {t('reviews.title')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {reviews.map((work, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="group animate-scale-in cursor-pointer"
              onClick={() => setSelectedImage({ src: work.image, alt: t("portfolio.work") })}
            >
              <div className="overflow-hidden rounded-xl shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={work.image}
                    alt={t("reviews.work")}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageLightbox
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage?.src || ""}
          imageAlt={selectedImage?.alt || ""}
      />
    </section>
  );
};

export default ReviewsSection;
