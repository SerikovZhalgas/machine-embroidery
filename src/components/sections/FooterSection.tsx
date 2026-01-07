import {useLanguage} from "@/contexts/LanguageContext.tsx";

const FooterSection = () => {
  const {t} = useLanguage();

  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-lg font-serif">
            {t("footer.tagline")}
          </p>
          <p className="text-sm opacity-70">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
