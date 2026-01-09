import { useState } from "react";
import { Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import VideoLightbox from "@/components/ui/video-lightbox";
import video1 from "@/assets/video/video1.mp4";
import video2 from "@/assets/video/video2.mp4";
import video3 from "@/assets/video/video3.mp4";
import videoPreview1 from "@/assets/images/video-preview1.jpg";
import videoPreview2 from "@/assets/images/video-preview2.jpg";
import videoPreview3 from "@/assets/images/video-preview3.jpg";

const VideoSection = () => {
    const { t } = useLanguage();
    const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string } | null>(null);

    const videos = [
        {
            id: 1,
            titleKey: "video.item1.title",
            descriptionKey: "video.item1.description",
            src: video1,
            thumbnail: videoPreview1,
        },
        {
            id: 2,
            titleKey: "video.item2.title",
            descriptionKey: "video.item2.description",
            src: video2,
            thumbnail: videoPreview2,
        },
        {
            id: 3,
            titleKey: "video.item3.title",
            descriptionKey: "video.item3.description",
            src: video3,
            thumbnail: videoPreview3,
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        {t("video.title")}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {t("video.subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {videos.map((video, index) => (
                        <div
                            key={video.id}
                            className="group cursor-pointer animate-scale-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => setSelectedVideo({ src: video.src, title: t(video.titleKey) })}
                        >
                            <div className="relative overflow-hidden rounded-xl shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                                <div className="aspect-[9/16] overflow-hidden bg-muted">
                                    <img
                                        src={video.thumbnail}
                                        alt={t(video.titleKey)}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/40">
                                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="font-display text-lg font-semibold text-white mb-1">
                                        {t(video.titleKey)}
                                    </h3>
                                    <p className="text-white/80 text-sm">
                                        {t(video.descriptionKey)}
                                    </p>
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

export default VideoSection;
