import { ShieldCheck, Sparkles, Gauge, Headset, CheckCircle2 } from "lucide-react";

export default function Differentials() {
  const differentials = [
    {
      icon: Sparkles,
      title: "Design Exclusivo & Sofisticado",
      description:
        "Não usamos modelos prontos e genéricos. Cada projeto é desenhado com a personalidade da sua empresa, combinando cores elegantes, boa tipografia e máxima clareza.",
    },
    {
      icon: Gauge,
      title: "Velocidade Extrema",
      description:
        "Utilizamos as tecnologias mais modernas do mercado para garantir que suas páginas abram instantaneamente, reduzindo a taxa de rejeição e aumentando o faturamento.",
    },
    {
      icon: ShieldCheck,
      title: "Pronto para o Google (SEO Técnico)",
      description:
        "Estrutura semântica correta, metadados bem configurados, URLs amigáveis e sitemap indexável para facilitar o ranqueamento orgânico da sua empresa.",
    },
    {
      icon: Headset,
      title: "Atendimento Direto & Sem Burocracia",
      description:
        "Comunicação rápida e humanizada pelo WhatsApp. Do alinhamento do briefing à entrega final, você acompanha cada etapa com total transparência.",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-gold-700 bg-gold-50 border border-gold-200 px-3.5 py-1.5 rounded-full">
            Por Que a Mídia DSJ?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mt-4 mb-4">
            Diferenciais que Colocam sua Marca em <span className="text-gradient-gold">Outro Nível</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Mais do que criar códigos, construímos plataformas de vendas que geram autoridade e facilitam a decisão de compra do seu cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#faf9f6] p-8 rounded-2xl border border-gray-100 hover:border-gold-300 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-100/80 text-gold-700 flex items-center justify-center mb-5 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-black mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
