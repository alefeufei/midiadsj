import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111113] text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800/80">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block bg-white/95 p-2 rounded-xl">
              <div className="relative h-10 w-44">
                <Image
                  src="/logo.png"
                  alt="Mídia DSJ"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-base text-gray-400 max-w-sm leading-relaxed">
              Agência especializada no desenvolvimento de sites de alta performance, landing pages que convertem e sistemas web sob medida para impulsionar o seu negócio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="#inicio" className="hover:text-gold-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-gold-400 transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="#diferenciais" className="hover:text-gold-400 transition-colors">
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link
                  href="/ferramentas"
                  className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
                >
                  <span>Central de Ferramentas</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-gold-400 transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-4">
              Soluções Web
            </h4>
            <ul className="space-y-3 text-base">
              <li>
                <span className="text-gray-400">Landing Pages para Tráfego</span>
              </li>
              <li>
                <span className="text-gray-400">Sites Institucionais</span>
              </li>
              <li>
                <span className="text-gray-400">Sistemas Web & Dashboards</span>
              </li>
              <li>
                <span className="text-gray-400">Otimização PageSpeed 90+</span>
              </li>
              <li>
                <span className="text-gray-400">Consultoria Digital</span>
              </li>
            </ul>
          </div>

          {/* Contato Rápido */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-4">
              Contato Direto
            </h4>
            <ul className="space-y-3.5 text-base">
              <li>
                <a
                  href="https://wa.me/5521964167030?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-gray-300 hover:text-gold-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-gold-500" />
                  <span>(21) 96416-7030</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5521964319242?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-gray-300 hover:text-gold-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-gold-500" />
                  <span>(21) 96431-9242</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@midiadsj.com"
                  className="inline-flex items-center gap-2.5 text-gray-300 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-gold-500" />
                  <span>contato@midiadsj.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            &copy; {currentYear} Mídia DSJ - Comunicação & Marketing. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/ferramentas" className="text-gold-400 hover:underline">
              Acessar /ferramentas
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
