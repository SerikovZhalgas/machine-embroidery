import {useState} from "react";
import work1 from "@/assets/images/work1.jpeg";
import work2 from "@/assets/images/work2.jpeg";
import work3 from "@/assets/images/work3.jpeg";
import work4 from "@/assets/images/work4.jpeg";
import work5 from "@/assets/images/work5.jpeg";
import work6 from "@/assets/images/work6.jpeg";
import work7 from "@/assets/images/work7.jpeg";
import work8 from "@/assets/images/work8.jpeg";
import work9 from "@/assets/images/work9.jpeg";
import work10 from "@/assets/images/work10.jpeg";
import work11 from "@/assets/images/work11.jpeg";
import work12 from "@/assets/images/work12.jpeg";
import work13 from "@/assets/images/work13.jpeg";
import {useLanguage} from "@/contexts/LanguageContext.tsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageLightbox from "@/components/ui/image-lightbox";

import 'swiper/css';
import 'swiper/css/navigation';

const PortfolioSection = () => {
  const {t} = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const works = [
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
    {
      image: work5,
    },
    {
      image: work6,
    },
    {
      image: work7,
    },
    {
      image: work8,
    },
    {
      image: work9,
    },
    {
      image: work10,
    },
    {
      image: work11,
    },
    {
      image: work12,
    },
    {
      image: work13,
    },
  ];

  return (
      <section className="py-20 lg:py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-center text-foreground mb-16">
            {t('portfolio.title')}
          </h2>

          <div className="relative max-w-6xl mx-auto group">
            <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={2} // По умолчанию для мобильных
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                breakpoints={{
                  // Настройки адаптивности
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                className="portfolio-swiper"
            >
              {works.map((work, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="group animate-scale-in cursor-pointer"
                      onClick={() => setSelectedImage({ src: work.image, alt: t("portfolio.work") })}
                    >
                      <div className="overflow-hidden rounded-xl shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                        <div className="aspect-square overflow-hidden">
                          <img
                              src={work.image}
                              alt={t("portfolio.work")}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
              ))}
            </Swiper>

            {/* Кнопки навигации */}
            <button
                className="swiper-button-prev-custom absolute left-[-10px] md:left-[0] top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg text-foreground hover:bg-primary hover:text-white transition-colors disabled:opacity-30">
              <ChevronLeft size={24}/>
            </button>

            <button
                className="swiper-button-next-custom absolute right-[-10px] md:right-[0] top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg text-foreground hover:bg-primary hover:text-white transition-colors disabled:opacity-30">
              <ChevronRight size={24}/>
            </button>
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

export default PortfolioSection;
