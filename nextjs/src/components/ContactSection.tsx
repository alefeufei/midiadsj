"use client";

import { useState } from "react";
import { MessageCircle, Mail, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { openAlternatingWhatsApp, WHATSAPP_NUMBERS } from "@/utils/whatsapp";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("Landing Page");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name || "Cliente"}.\n\n*Tipo de Projeto:* ${projectType}\n*Telefone/WhatsApp:* ${phone}\n*Detalhes:* ${message || "Gostaria de saber mais informações e valores."}`;
    openAlternatingWhatsApp(text);
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-white to-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider uppercase text-gold-700 bg-gold-50 border border-gold-200 px-4 py-1.5 rounded-full">
            Inicie Seu Projeto
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mt-4 mb-4">
            Vamos Criar Algo <span className="text-gradient-gold">Incrível Juntos?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Conte-nos sobre o seu projeto e receba uma proposta personalizada sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-black mb-4">
                Atendimento Rápido e Personalizado
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Tire suas dúvidas, receba orientações sobre a melhor tecnologia para o seu modelo de negócio e dê o próximo passo rumo ao crescimento digital.
              </p>

              <div className="space-y-4">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                  Nossos Canais de WhatsApp:
                </p>
                {WHATSAPP_NUMBERS.map((num, idx) => (
                  <a
                    key={num.raw}
                    href={`https://wa.me/${num.raw}?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gold-50/60 border border-gold-200/60 hover:bg-gold-100/60 transition-all duration-200 group hover:-translate-y-0.5 shadow-xs"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold-500 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gold-800 uppercase tracking-wider">
                        WhatsApp Oficial {idx + 1}
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {num.display}
                      </p>
                    </div>
                  </a>
                ))}

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 rounded-lg bg-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      E-mail Institucional
                    </p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">
                      contato@midiadsj.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 rounded-lg bg-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Horário de Funcionamento
                    </p>
                    <p className="text-sm sm:text-base font-bold text-gray-900">
                      Segunda a Sexta: 09h às 18h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-gold-200/70 shadow-card">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-black mb-2">
              Envie um Briefing Rápido
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mb-8">
              Preencha os dados abaixo para direcionarmos o seu atendimento diretamente no WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Seu Nome ou Empresa *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Alexandre Cruv"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-base text-gray-900 placeholder:text-gray-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">
                    WhatsApp para Contato *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: (21) 98888-7777"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-base text-gray-900 placeholder:text-gray-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Qual solução você procura? *
                </label>
                <select
                  id="projectType"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-base text-gray-900 bg-white transition-all"
                >
                  <option value="Landing Page de Alta Conversão">Landing Page de Alta Conversão</option>
                  <option value="Site Institucional Completo">Site Institucional Completo</option>
                  <option value="Sistema Web Sob Medida / Dashboard">Sistema Web Sob Medida / Dashboard</option>
                  <option value="Reformulação de Site Existente">Reformulação de Site Existente</option>
                  <option value="Outro Projeto Digital">Outro Projeto Digital</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Conte um pouco sobre suas ideias e objetivos
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex: Preciso de uma landing page para vender um curso online / Quero um site para minha empresa com área de contato..."
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-base text-gray-900 placeholder:text-gray-400 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-brand-black hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-gold hover:-translate-y-0.5 cursor-pointer"
              >
                <Send className="w-5 h-5 text-gold-400" />
                <span>Enviar Briefing via WhatsApp</span>
              </button>

              <p className="text-[12px] text-gray-400 text-center">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
