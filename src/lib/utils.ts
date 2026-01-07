import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleBooking(isFranchise: boolean) {
  const phoneNumber = "77761259549";
  const message = encodeURIComponent("Здравствуйте! Хочу записаться на курс.");
  const messageFranchise = encodeURIComponent("Здравствуйте! Расскажите подробнее о франшизе.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${isFranchise ? messageFranchise : message}`;
  window.open(whatsappUrl, '_blank');
};