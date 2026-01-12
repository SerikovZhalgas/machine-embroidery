import learnPreparation from "@/assets/images/work13.jpeg";
import learnDesignImage from "@/assets/images/learn-image.jpg";
import learnDesignVideo from "@/assets/video/video4.mp4";
import {useLanguage} from "@/contexts/LanguageContext.tsx";
import VideoLightbox from "@/components/ui/video-lightbox.tsx";
import {useState} from "react";
import {Play} from "lucide-react";

const LearnSection = () => {
  const {t} = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string } | null>(null);

  const courses = [
    {
      id: 1,
      image: learnPreparation,
      titleKey: "learn.item1.title",
      altKey: "learn.item1.alt",
    },
    {
      id: 2,
      src: learnDesignVideo,
      image: learnDesignImage,
      titleKey: "learn.item2.title",
      altKey: "learn.item2.alt",
    }
  ];

  const handleImage = (course: any) => {
    if (course.src) {
      setSelectedVideo({ src: course.src, title: t(course.titleKey) })
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-center text-foreground mb-16">
          {t('learn.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={course.titleKey}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleImage(course)}
            >
              <div className="overflow-hidden rounded-2xl shadow-card bg-background transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  {course.src ?
                      <>
                        <img
                            src={course.image}
                            alt={t(course.titleKey)}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/40">
                          <div
                              className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor"/>
                          </div>
                        </div>
                      </>
                      : <img
                          src={course.image}
                          alt={course.altKey}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                  }
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

      <VideoLightbox
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoSrc={selectedVideo?.src || ""}
          videoTitle={selectedVideo?.title || ""}
      />
    </section>
  );
};

export default LearnSection;
