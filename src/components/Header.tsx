"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { openAlternatingWhatsApp } from "@/utils/whatsapp";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBudgetClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openAlternatingWhatsApp("Olá, gostaria de um orçamento para criação de site/sistema!");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-11 w-44 sm:h-12 sm:w-52">
            <Image
              src="/logo.png"
              alt="Mídia DSJ"
              fill
              priority
              className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </Link>

        {/* Desktop Navigation (visível a partir de 1024px para acomodar todos os itens confortavelmente) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link
            href="#inicio"
            className="text-sm font-medium text-gray-700 hover:text-gold-600 transition-colors"
          >
            Início
          </Link>
          <Link
            href="#servicos"
            className="text-sm font-medium text-gray-700 hover:text-gold-600 transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="#diferenciais"
            className="text-sm font-medium text-gray-700 hover:text-gold-600 transition-colors"
          >
            Diferenciais
          </Link>
          <Link
            href="/ferramentas"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-700 hover:text-gold-800 bg-gold-50/80 px-3 py-1.5 rounded-full border border-gold-200/60 transition-all hover:bg-gold-100/80"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
            Ferramentas
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </Link>
          <Link
            href="#contato"
            className="text-sm font-medium text-gray-700 hover:text-gold-600 transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* Header Actions (visível a partir de 1024px) */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={handleBudgetClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-black hover:bg-gold-600 transition-all duration-300 shadow-sm hover:shadow-gold hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-gold-400" />
            <span>Solicitar Orçamento</span>
          </button>
        </div>

        {/* Mobile & Tablet menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-gold-600 hover:bg-gray-100 focus:outline-none cursor-pointer"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile & Tablet menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-xl px-6 py-6 transition-all animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-4 max-w-lg mx-auto">
            <Link
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-gray-800 hover:text-gold-600 py-1"
            >
              Início
            </Link>
            <Link
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-gray-800 hover:text-gold-600 py-1"
            >
              Serviços
            </Link>
            <Link
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-gray-800 hover:text-gold-600 py-1"
            >
              Diferenciais
            </Link>
            <Link
              href="/ferramentas"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-between text-lg font-bold text-gold-700 bg-gold-50 px-4 py-3 rounded-xl border border-gold-200"
            >
              <span>Central de Ferramentas</span>
              <ArrowUpRight className="w-5 h-5 text-gold-600" />
            </Link>
            <Link
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-gray-800 hover:text-gold-600 py-1"
            >
              Contato
            </Link>
            <hr className="border-gray-100 my-1" />
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleBudgetClick(e);
              }}
              className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl text-base font-bold text-white bg-brand-black hover:bg-gold-600 transition-colors shadow-md cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-gold-400" />
              <span>Solicitar Orçamento via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
