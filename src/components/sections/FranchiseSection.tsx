import {useLanguage} from "@/contexts/LanguageContext.tsx";
import {Button} from "@/components/ui/button.tsx";
import {handleBooking} from "@/lib/utils.ts";

export const FranchiseSection = () => {
    const {t, language} = useLanguage();

    return (
        <section className="py-10 lg:py-10 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-center text-foreground mb-6">
                    {t("franchise.title")}
                </h2>

                <div className="flex justify-center">
                    <Button onClick={()=>handleBooking(language, true)} variant="hero" size="lg" className="text-center">
                        {t('franchise.cta')}
                    </Button>
                </div>
            </div>
        </section>
)
}