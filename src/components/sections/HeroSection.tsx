import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-embroidery.jpg";
import { Sparkles, Home, TrendingUp } from "lucide-react";
import {ThemeSwitcher} from "@/switcher/ThemeSwitcher.tsx";
import {useTheme} from "@/hooks/useTheme.ts";
import {useLanguage} from "@/contexts/LanguageContext.tsx";
import {handleBooking} from "@/lib/utils.ts";

const HeroSection = () => {
    const {t} = useLanguage();

    return (
        <section className="relative min-h-[90vh] bg-background overflow-hidden">
            {/*<div className="relative z-20">*/}
            {/* <ThemeSwitcher />*/}
            {/*</div>*/}
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card"/>

            <div className="container relative z-10 mx-auto px-4 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-up">
                        <h1 className="max-w-[90vw] text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-foreground break-words overflow-wrap-anywhere">
                            {t("hero.title1")}{" "}
                            <span className="text-primary italic">{t("hero.title2")}</span>
                            <br/>
                            {t("hero.title3")}
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                            {t("hero.subtitle")}
                        </p>

                        <Button onClick={() => handleBooking(false)} variant="hero" size="lg" className="mt-4">
                            {t("hero.cta")}
                        </Button>
                    </div>

                    {/* Right Image */}
                    <div className="relative animate-fade-up animation-delay-200">
                        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                            <img
                                src={heroImage}
                                alt="Машинная вышивка цветочного узора"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"/>
                        <div
                            className="absolute -top-4 -left-4 w-32 h-32 bg-terracotta-light/20 rounded-full blur-3xl"/>
                    </div>
                </div>

                {/* Benefits Bar */}
                <div className="mt-16 lg:mt-24 animate-fade-up animation-delay-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <BenefitItem
                            icon={<Sparkles className="w-6 h-6"/>}
                            title={t("hero.benefit1")}
                        />
                        <BenefitItem
                            icon={<Home className="w-6 h-6"/>}
                            title={t("hero.benefit2")}
                        />
                        <BenefitItem
                            icon={<TrendingUp className="w-6 h-6"/>}
                            title={t("hero.benefit3")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const BenefitItem = ({icon, title}: { icon: React.ReactNode; title: string }) => (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft hover:shadow-card transition-all duration-300">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
        </div>
        <span className="text-foreground font-medium">{title}</span>
    </div>
);

export default HeroSection;
