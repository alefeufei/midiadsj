import Link from "next/link";
import { Wrench, ArrowRight, Sparkles, ExternalLink, QrCode, Link2, MessageSquare, Calculator, Clock } from "lucide-react";

export default function ToolsBanner() {
  const toolsList = [
    { name: "Encurtador de Links", icon: Link2 },
    { name: "Gerador de Link WhatsApp", icon: MessageSquare },
    { name: "Gerador de QR Code", icon: QrCode },
    { name: "Calculadoras Online", icon: Calculator },
    { name: "Timer Pomodoro", icon: Clock },
  ];

  return (
    <section className="py-16 bg-[#faf9f6] border-y border-gray-100 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gold-200/80 shadow-card flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-800 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Recursos Gratuitos Mídia DSJ</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-black tracking-tight mb-3">
              Conheça nossa <span className="text-gradient-gold">Central de Ferramentas Web</span>
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Desenvolvemos utilitários práticos, rápidos e 100% gratuitos para facilitar seu dia a dia profissional: encurte links, gere links diretos de WhatsApp com mensagens personalizadas, crie QR Codes e muito mais.
            </p>

            {/* Quick badges of available tools */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-6">
              {toolsList.map((tool, idx) => {
                const ToolIcon = tool.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50/90 border border-gray-200/80 text-sm font-semibold text-gray-800 hover:border-gold-300 hover:bg-gold-50/40 hover:text-gold-900 transition-all duration-200 shadow-2xs"
                  >
                    <ToolIcon className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>{tool.name}</span>
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto text-center">
            <Link
              href="/ferramentas"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-brand-black hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-gold hover:-translate-y-0.5 group"
            >
              <Wrench className="w-5 h-5 text-gold-400 group-hover:text-white transition-colors" />
              <span>Acessar Ferramentas</span>
              <ArrowRight className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-xs text-gray-400 mt-2">
              Acesso gratuito &bull; Sem necessidade de cadastro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
