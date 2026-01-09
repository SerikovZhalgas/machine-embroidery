import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoLightboxProps {
    isOpen: boolean;
    onClose: () => void;
    videoSrc: string;
    videoTitle: string;
}

const VideoLightbox = ({ isOpen, onClose, videoSrc, videoTitle }: VideoLightboxProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
                    aria-label="Close"
                >
                    <X className="w-6 h-6" />
                </button>
                <div className="flex items-center justify-center">
                    <video
                        src={videoSrc}
                        controls
                        autoPlay
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        title={videoTitle}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default VideoLightbox;
