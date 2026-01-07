import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleBooking(language: 'ru' | 'kk', isFranchise: boolean) {
  const phoneNumber = "77761259549";
  const message = encodeURIComponent(language === 'ru' ? "Здравствуйте! Хочу записаться на курс." : "Сәлеметсіз бе! Курсқа жазылғым келеді.");
  const messageFranchise = encodeURIComponent(language === 'ru' ? "Здравствуйте! Расскажите подробнее о франшизе." : "Сәлеметсіз бе! Франшиза туралы толығырақ айтып беріңізші.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${isFranchise ? messageFranchise : message}`;
  window.open(whatsappUrl, '_blank');
};