import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    const languages: { code: Language; label: string }[] = [
        { code: "ru", label: "РУС" },
        { code: "kk", label: "ҚАЗ" },
    ];

    return (
        <div className="fixed top-4 right-4 z-50 flex bg-card/80 backdrop-blur-sm rounded-full border border-border shadow-soft overflow-hidden">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        language === lang.code
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-muted"
                    }`}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
