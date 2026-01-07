import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ImageLightboxProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    imageAlt: string;
}

const ImageLightbox = ({ isOpen, onClose, imageSrc, imageAlt }: ImageLightboxProps) => {
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
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ImageLightbox;
