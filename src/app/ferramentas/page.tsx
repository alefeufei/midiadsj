import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import Image from "next/image";
import {
  Link2,
  MessageSquare,
  QrCode,
  Gamepad2,
  Clock,
  Calculator,
  BookOpen,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Central de Ferramentas Web Gratuitas | Mídia DSJ",
  description:
    "Coleção de ferramentas online práticas e gratuitas desenvolvidas pela Mídia DSJ: Encurtador de URLs, Gerador de Link WhatsApp, QR Code, Pomodoro e muito mais.",
};

export default function FerramentasPage() {
  const tools = [
    {
      id: "encurtador",
      title: "Encurtador de Links",
      tag: "Produtividade",
      description: "Encurte seus links longos de forma rápida, segura e elegante para compartilhar em redes sociais e campanhas.",
      icon: Link2,
      image: "/ferramentas/images/encurtador.png",
      link: "https://encurtaurl.vercel.app/",
      isExternal: true,
      badge: "Gratuito",
    },
    {
      id: "gerador-whatsapp",
      title: "Gerador de Link WhatsApp",
      tag: "Comunicação & Vendas",
      description: "Crie links diretos para seu WhatsApp com número e mensagem personalizada pronta para o cliente iniciar a conversa.",
      icon: MessageSquare,
      image: "/ferramentas/images/gerador.png",
      link: "/ferramentas/geralinkzap/index.html",
      isExternal: true,
      badge: "Mais Usado",
    },
    {
      id: "qrcode",
      title: "Gerador de QR Code",
      tag: "Marketing & Design",
      description: "Gere códigos QR dinâmicos e vibrantes instantaneamente para seus links, redes sociais, chave Pix ou textos.",
      icon: QrCode,
      image: "/ferramentas/images/qrcode.png",
      link: "/ferramentas/qrcode/index.html",
      isExternal: true,
      badge: "Gratuito",
    },
    {
      id: "calculadoras",
      title: "Calculadoras de Custos",
      tag: "Finanças & Gestão",
      description: "Calcule seus custos de trabalho, precificação e orçamentos de forma rápida, eficiente e descomplicada.",
      icon: Calculator,
      image: "/ferramentas/images/calculadora.svg",
      link: "/ferramentas/calculadoras/index.html",
      isExternal: true,
      badge: "Utilidade",
    },
    {
      id: "pomodoro",
      title: "Pomodoro Timer",
      tag: "Foco & Tempo",
      description: "Gerencie seu tempo de trabalho e intervalos com foco e eficiência usando a consagrada técnica Pomodoro.",
      icon: Clock,
      image: "/ferramentas/images/pomodoro.png",
      link: "/ferramentas/pomodoro/index.html",
      isExternal: true,
      badge: "Gratuito",
    },
    {
      id: "jogo-forca",
      title: "Jogo da Forca Bíblico",
      tag: "Interativo & Jogos",
      description: "Um desafio interativo de palavras e conhecimentos baseado em temas, histórias e personagens bíblicos.",
      icon: Gamepad2,
      image: "/ferramentas/images/jogo_forca.png",
      link: "https://jogo-da-forca-biblico.vercel.app/",
      isExternal: true,
      badge: "Jogo",
    },
    {
      id: "leitura-biblica",
      title: "Planos de Leitura Bíblica",
      tag: "Estudo & Fé",
      description: "Acompanhe planos diários e cronogramas organizados de leitura bíblica para edificar e enriquecer seus estudos.",
      icon: BookOpen,
      image: "/ferramentas/images/leitura_biblica.png",
      link: "/ferramentas/leiturabiblica/index.html",
      isExternal: true,
      badge: "Guia",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfd]">
      <Header />

      <main className="flex-grow pt-28 pb-24">
        {/* Breadcrumb & Intro Header */}
        <div className="bg-gradient-to-b from-gray-50 via-white to-transparent border-b border-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
              <Link href="/" className="hover:text-gold-600 transition-colors">
                Início
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gold-700 font-semibold">Ferramentas</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-800 text-sm font-bold mb-4 shadow-sm">
                <Sparkles className="w-4 h-4 text-gold-600" />
                <span>Central de Utilidades Online</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight mb-4">
                Ferramentas <span className="text-gradient-gold">Mídia DSJ</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Uma coleção completa de ferramentas úteis, leves e 100% gratuitas para acelerar seu marketing, comunicação e produtividade diária.
              </p>
            </div>
          </div>
        </div>

        {/* Tools Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.id}
                  className="bg-white rounded-2xl border border-gray-100 hover:border-gold-300 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
                >
                  <div>
                    {/* Visual Banner Preview */}
                    <div className="relative h-48 w-full bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-100 flex items-center justify-center overflow-hidden p-4">
                      {tool.image ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={tool.image}
                            alt={tool.title}
                            fill
                            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-2xl bg-gold-100 text-gold-700 flex items-center justify-center">
                          <Icon className="w-8 h-8" />
                        </div>
                      )}

                      <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gold-800 border border-gold-200/80 shadow-xs">
                        {tool.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          {tool.tag}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-brand-black mb-2.5 group-hover:text-gold-700 transition-colors">
                        {tool.title}
                      </h2>

                      <p className="text-base text-gray-600 leading-relaxed line-clamp-3">
                        {tool.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="px-6 pb-6 pt-2">
                    <a
                      href={tool.link}
                      target={tool.isExternal ? "_blank" : "_self"}
                      rel={tool.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-base font-bold text-white bg-brand-black hover:bg-gold-600 transition-all duration-200 shadow-sm group/btn"
                    >
                      <span>Acessar Ferramenta</span>
                      {tool.isExternal ? (
                        <ExternalLink className="w-4 h-4 text-gold-400 group-hover/btn:text-white transition-colors" />
                      ) : (
                        <ArrowRight className="w-4 h-4 text-gold-400 group-hover/btn:translate-x-1 group-hover/btn:text-white transition-all" />
                      )}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Back Button & Note */}
          <div className="mt-16 text-center bg-[#faf9f6] rounded-2xl p-8 sm:p-10 border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-black mb-3">
              Precisa de uma ferramenta personalizada para sua empresa?
            </h3>
            <p className="text-base text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed">
              Desenvolvemos sistemas web, calculadoras, dashboards e ferramentas sob medida com alta performance, APIs e banco de dados.
            </p>
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-brand-black bg-white hover:bg-gold-50 border border-gray-200 hover:border-gold-300 transition-all shadow-sm"
            >
              <span>Fazer Orçamento de Sistema Web</span>
              <ArrowRight className="w-4 h-4 text-gold-600" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
