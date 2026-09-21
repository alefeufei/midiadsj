"use client";

import { MessageCircle } from "lucide-react";
import { openAlternatingWhatsApp } from "@/utils/whatsapp";

export default function FloatingWhatsApp() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openAlternatingWhatsApp("Olá, estou no site da Mídia DSJ e gostaria de tirar uma dúvida!");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Falar conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer border-none"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="hidden sm:inline font-bold text-sm">
        Falar no WhatsApp
      </span>
    </button>
  );
}
