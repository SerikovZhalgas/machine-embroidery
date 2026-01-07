import React, { createContext, useContext, useState, useCallback } from "react";

export type Language = "ru" | "kk";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    ru: {
        // Hero
        "hero.title1": "Освой машинную вышивку и начни",
        "hero.title2": "зарабатывать",
        "hero.title3": "на своём творчестве",
        "hero.subtitle": "От первых стежков до уверенной работы на вышивальной машине",
        "hero.cta": "Записаться на курс",
        "hero.benefit1": "Для новичков и мастеров",
        "hero.benefit2": "Работа из дома",
        "hero.benefit3": "Своя прибыльная ниша",

        // Learn
        "learn.title": "Чему вы научитесь",
        "learn.item1.title": "Подготовка и настройки",
        "learn.item1.alt": "Нитки для вышивки",
        "learn.item2.title": "Создание дизайнов",
        "learn.item2.alt": "Создание дизайнов на компьютере",
        "learn.item3.title": "Коммерческая вышивка",
        "learn.item3.alt": "Монограмма на полотенце",

        // Portfolio
        "portfolio.title": "Ваши будущие работы",
        "portfolio.work": "Вышивка",

        // Reviews
        "reviews.title": "Отзывы",

        // Format
        "format.title": "Формат обучения",
        "format.item1": "Видео-уроки",
        "format.item2": "Обратная связь от куратора",
        "format.item3": "Закрытый чат сообщества",

        // Instructor
        "instructor.name": "Джумабекова Бану,",
        "instructor.role": "Ваш эксперт по машинной вышивке",
        "instructor.description": "7 лет опыта, 200+ довольных учениц и тысяча вышитых изделий",
        "instructor.quote": "«Поверьте в себя — и у вас всё получится!»",
        "instructor.imageAlt": "Джумабекова Бану - эксперт по машинной вышивке",

        // Franchise
        "franchise.title": "Франшиза",
        "franchise.cta": "Связаться",

        // Footer
        "footer.tagline": "Машинная вышивка — ваш путь к творчеству и заработку",
        "footer.copyright": "© 2026 Все права защищены",
    },
    kk: {
        // Hero
        "hero.title1": "Машиналық кестені меңгер және",
        "hero.title2": "табыс таба",
        "hero.title3": "бастаңыз өз шығармашылығыңызбен",
        "hero.subtitle": "Алғашқы тігістерден кесте машинасында сенімді жұмысқа дейін",
        "hero.cta": "Курсқа жазылу",
        "hero.benefit1": "Жаңадан бастаушылар мен шеберлерге",
        "hero.benefit2": "Үйден жұмыс",
        "hero.benefit3": "Өзіңіздің табысты тауашаңыз",

        // Learn
        "learn.title": "Сіз не үйренесіз",
        "learn.item1.title": "Дайындық және баптаулар",
        "learn.item1.alt": "Кестеге арналған жіптер",
        "learn.item2.title": "Дизайн жасау",
        "learn.item2.alt": "Компьютерде дизайн жасау",
        "learn.item3.title": "Коммерциялық кесте",
        "learn.item3.alt": "Сүлгідегі монограмма",

        // Portfolio
        "portfolio.title": "Сіздің болашақ жұмыстарыңыз",
        "portfolio.work": "Кесте",

        // Reviews
        "reviews.title": "Пікірлар",

        // Format
        "format.title": "Оқыту форматы",
        "format.item1": "Бейне-сабақтар",
        "format.item2": "Куратордан кері байланыс",
        "format.item3": "Жабық қоғамдастық чаты",

        // Instructor
        "instructor.name": "Джумабекова Бану,",
        "instructor.role": "Машиналық кесте бойынша сарапшыңыз",
        "instructor.description": "7 жылдық тәжірибе, 200+ қанағаттанған оқушылар және мыңдаған кестеленген бұйымдар",
        "instructor.quote": "«Өзіңізге сеніңіз — сізде бәрі шығады!»",
        "instructor.imageAlt": "Джумабекова Бану - машиналық кесте сарапшысы",

        // Franchise
        "franchise.title": "Франшиза",
        "franchise.cta": "Байланыс",

        // Footer
        "footer.tagline": "Машиналық кесте — шығармашылық пен табысқа жолыңыз",
        "footer.copyright": "© 2026 Барлық құқықтар қорғалған",
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>("ru");

    const t = useCallback(
        (key: string): string => {
            return translations[language][key] || key;
        },
        [language]
    );

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
