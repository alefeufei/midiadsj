"use client";

import { Layers, MonitorCheck, LayoutGrid, Database, Cpu, Check, ArrowRight } from "lucide-react";
import { openAlternatingWhatsApp } from "@/utils/whatsapp";

export default function Services() {

  const services = [
    {
      id: "landing-pages",
      icon: Layers,
      tag: "Vendas & Conversão",
      title: "Landing Pages de Alta Conversão",
      description:
        "Páginas estrategicamente desenhadas para transformar visitantes em clientes compradores. Ideais para lançamentos, campanhas de tráfego pago (Google Ads, Meta Ads) e captação de leads qualificados.",
      features: [
        "Copywriting persuasivo e estrutura focada em conversão",
        "Carregamento ultrarrápido (menos de 1,5 segundos)",
        "Integração com WhatsApp, CRM e ferramentas de e-mail marketing",
        "Pixels de rastreamento e tags de conversão configurados",
      ],
      whatsappMsg: "Olá! Gostaria de um orçamento para uma Landing Page de Alta Conversão.",
    },
    {
      id: "sites-institucionais",
      icon: MonitorCheck,
      tag: "Presença & Autoridade",
      title: "Sites Institucionais e Corporativos",
      description:
        "Posicione sua marca com elegância e credibilidade incomparável. Sites completos, elegantes e com arquitetura pensada para passar total confiança ao seu público.",
      features: [
        "Design exclusivo alinhado à identidade visual da sua marca",
        "Totalmente responsivo para smartphones, tablets e desktops",
        "Otimização avançada de SEO para os primeiros lugares do Google",
        "Formulários inteligentes de contato e orçamento",
      ],
      whatsappMsg: "Olá! Gostaria de um orçamento para criação de um Site Institucional.",
    },
    {
      id: "sistemas-web",
      icon: Database,
      tag: "Automação & Gestão",
      title: "Sistemas Web Sob Medida & Dashboards",
      description:
        "Automatize rotinas, gerencie dados e ganhe produtividade com aplicações sob medida desenvolvidas especificamente para o fluxo de trabalho do seu negócio.",
      features: [
        "Painéis administrativos (dashboards) claros e intuitivos",
        "Autenticação de usuários segura e níveis de permissão",
        "Integração com bancos de dados, APIs e gateways de pagamento",
        "Relatórios dinâmicos e controle total das operações",
      ],
      whatsappMsg: "Olá! Gostaria de um orçamento para desenvolvimento de um Sistema Web sob medida.",
    },
    {
      id: "otimizacao-seo",
      icon: Cpu,
      tag: "Performance & Tráfego",
      title: "Reformulação & Aceleração de Sites Existentes",
      description:
        "Se o seu site atual é lento, antigo ou não converte, nós transformamos ele em uma máquina moderna de vendas, com código limpo e nota máxima no Google.",
      features: [
        "Redesenho moderno com visual sofisticado",
        "Otimização Core Web Vitals para nota 90+ no PageSpeed",
        "Correções de responsividade para navegação mobile perfeita",
        "Blindagem de segurança e certificado SSL",
      ],
      whatsappMsg: "Olá! Gostaria de reformular e acelerar meu site atual.",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider uppercase text-gold-700 bg-gold-50 border border-gold-200 px-4 py-1.5 rounded-full">
            Nossas Especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mt-4 mb-4">
            Soluções Digitais Desenvolvidas para <span className="text-gradient-gold">Escalar seu Negócio</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Combinamos estética moderna, engenharia de software de ponta e foco total no retorno sobre o investimento (ROI).
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative bg-[#fdfdfc] rounded-2xl p-6 sm:p-10 border border-gray-100 hover:border-gold-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 group-hover:text-gold-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 text-base">
                    {service.description}
                  </p>

                  <div className="space-y-3.5 pt-4 border-t border-gray-100 mb-8">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-gold-100/70 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => openAlternatingWhatsApp(service.whatsappMsg)}
                  className="inline-flex items-center justify-between w-full py-4 px-5 rounded-xl text-base font-bold text-gray-900 bg-white border border-gray-200 hover:border-gold-500 hover:bg-gold-50/50 hover:text-gold-800 transition-all duration-200 group/btn shadow-sm cursor-pointer"
                >
                  <span>Solicitar Proposta para este Serviço</span>
                  <ArrowRight className="w-5 h-5 text-gold-600 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
