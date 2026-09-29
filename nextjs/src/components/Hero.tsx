"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Zap, Sparkles, Laptop, Smartphone, Globe } from "lucide-react";
import { openAlternatingWhatsApp } from "@/utils/whatsapp";

export default function Hero() {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openAlternatingWhatsApp("Olá, quero um orçamento para meu projeto com a Mídia DSJ!");
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#fdfbf8] via-white to-white">
      {/* Background subtle elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-gold-300/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 border border-gold-200/80 text-gold-800 text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold-600 animate-spin flex-shrink-0" style={{ animationDuration: "6s" }} />
            <span>Desenvolvimento Web de Alto Padrão</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black tracking-tight leading-[1.18] mb-6">
            Criamos <span className="text-gradient-gold">Sites</span>,{" "}
            <span className="text-gradient-gold">Sistemas Web</span> e{" "}
            <span className="text-gradient-gold">Landing Pages</span> que Geram Resultados
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            Design elegante, tecnologia de ponta e páginas 100% responsivas feitas sob medida para acelerar suas vendas e posicionar sua empresa como autoridade no mercado.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-brand-black hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-gold hover:-translate-y-0.5 group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-gold-400 group-hover:text-white transition-colors flex-shrink-0" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base sm:text-lg font-semibold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gold-300 transition-all duration-200 shadow-sm"
            >
              <span>Conhecer Nossas Soluções</span>
            </Link>
          </div>
        </div>

        {/* Highlights / Trust metrics (Largo e Espaçoso) */}
        <div className="max-w-6xl mx-auto pt-14 border-t border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200/70 shadow-subtle hover:border-gold-300 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 flex-shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-base font-bold text-gray-900 leading-snug whitespace-nowrap">Ultra Rápido</p>
                <p className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">PageSpeed 90+</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200/70 shadow-subtle hover:border-gold-300 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 flex-shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-base font-bold text-gray-900 leading-snug whitespace-nowrap">100% Responsivo</p>
                <p className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Celular, Tablet e PC</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200/70 shadow-subtle hover:border-gold-300 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 flex-shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-base font-bold text-gray-900 leading-snug whitespace-nowrap">Otimizado para SEO</p>
                <p className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Destaque no Google</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200/70 shadow-subtle hover:border-gold-300 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-700 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-base font-bold text-gray-900 leading-snug whitespace-nowrap">Seguro & Estável</p>
                <p className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">SSL e Código Limpo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
