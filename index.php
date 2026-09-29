<?php
// index.php
require_once 'includes/header.php';
?>

<main class="flex-grow">
    <!-- Hero Section -->
    <section id="inicio" class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#fdfbf8] via-white to-white">
        <!-- Background subtle elements -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
            <div class="absolute top-20 -left-20 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl"></div>
            <div class="absolute top-40 -right-20 w-96 h-96 bg-gold-300/15 rounded-full blur-3xl"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center max-w-3xl mx-auto">
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 border border-gold-200/80 text-gold-800 text-sm font-semibold mb-6 shadow-sm">
                    <i data-lucide="sparkles" class="w-4 h-4 text-gold-600 flex-shrink-0 animate-[spin_6s_linear_infinite]"></i>
                    <span>Desenvolvimento Web de Alto Padrão</span>
                </div>

                <!-- Main Title -->
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black tracking-tight leading-[1.18] mb-6">
                    Criamos <span class="text-gradient-gold">Sites</span>, 
                    <span class="text-gradient-gold">Sistemas Web</span> e 
                    <span class="text-gradient-gold">Landing Pages</span> que Geram Resultados
                </h1>

                <!-- Subtitle -->
                <p class="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
                    Design elegante, tecnologia de ponta e páginas 100% responsivas feitas sob medida para acelerar suas vendas e posicionar sua empresa como autoridade no mercado.
                </p>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onclick="handleBudgetClick(event)" class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-brand-black hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-gold hover:-translate-y-0.5 group cursor-pointer">
                        <i data-lucide="message-circle" class="w-5 h-5 text-gold-400 group-hover:text-white transition-colors flex-shrink-0"></i>
                        <span>Solicitar Orçamento no WhatsApp</span>
                        <i data-lucide="arrow-right" class="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform"></i>
                    </button>

                    <a href="#servicos" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base sm:text-lg font-semibold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gold-300 transition-all duration-200 shadow-sm">
                        <span>Conhecer Nossas Soluções</span>
                    </a>
                </div>
            </div>

            <!-- Highlights / Trust metrics -->
            <div class="max-w-6xl mx-auto pt-14 border-t border-gray-100 mt-14">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    <div class="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200/70 shadow-subtle hover:border-gold-300 hover:shadow-card transition-all duration-300">
                        <div class="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 flex-shrink-0">
                            <i data-lucide="zap" class="w-6 h-6"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-base font-bold text-gray-900 leading-snug whitespace-nowrap">Ultra Rápido</p>
                            <p class="text-xs sm:text-sm text-gray-500 whitespace-nowrap">PageSpeed 90+</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200/70 shadow-subtle hover:border-gold-300 hover:shadow-card transition-all duration-300">
                        <div class="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 flex-shrink-0">
                            <i data-lucide="smartphone" class="w-6 h-6"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-base font-bold text-gray-900 leading-snug whitespace-nowrap">100% Responsivo</p>
                            <p class="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Celular, Tablet e PC</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200/70 shadow-subtle hover:border-gold-300 hover:shadow-card transition-all duration-300">
                        <div class="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 flex-shrink-0">
                            <i data-lucide="globe" class="w-6 h-6"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-base font-bold text-gray-900 leading-snug whitespace-nowrap">Otimizado para SEO</p>
                            <p class="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Destaque no Google</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200/70 shadow-subtle hover:border-gold-300 hover:shadow-card transition-all duration-300">
                        <div class="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-700 flex-shrink-0">
                            <i data-lucide="shield-check" class="w-6 h-6"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-base font-bold text-gray-900 leading-snug whitespace-nowrap">Seguro & Estável</p>
                            <p class="text-xs sm:text-sm text-gray-500 whitespace-nowrap">SSL e Código Limpo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="servicos" class="py-24 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-sm font-bold tracking-wider uppercase text-gold-700 bg-gold-50 border border-gold-200 px-4 py-1.5 rounded-full">
                    Nossas Especialidades
                </span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mt-4 mb-4">
                    Transformamos Ideias em <span class="text-gradient-gold">Projetos de Sucesso</span>
                </h2>
                <p class="text-base sm:text-lg text-gray-600">
                    Soluções digitais completas desenvolvidas com tecnologias modernas para garantir máxima velocidade, segurança e conversão.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Service 1: Landing Page -->
                <div class="group relative bg-[#fdfdfc] rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-100 hover:border-gold-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-14 h-14 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                                <i data-lucide="target" class="w-7 h-7"></i>
                            </div>
                            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">Conversão</span>
                        </div>
                        <h3 class="text-xl sm:text-2xl font-bold text-brand-black mb-3 group-hover:text-gold-700 transition-colors">
                            Landing Pages de Alta Conversão
                        </h3>
                        <p class="text-gray-600 leading-relaxed mb-6 text-base">
                            Páginas focadas em um único objetivo: transformar visitantes em leads e clientes através de design persuasivo e velocidade extrema.
                        </p>
                        <div class="space-y-3.5 pt-4 border-t border-gray-100 mb-8">
                            <div class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                                <div class="w-5 h-5 rounded-full bg-gold-100/70 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="check" class="w-3.5 h-3.5"></i></div>
                                <span>Copywriting Persuasivo</span>
                            </div>
                            <div class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                                <div class="w-5 h-5 rounded-full bg-gold-100/70 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="check" class="w-3.5 h-3.5"></i></div>
                                <span>Ideal para Tráfego Pago (Ads)</span>
                            </div>
                            <div class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                                <div class="w-5 h-5 rounded-full bg-gold-100/70 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="check" class="w-3.5 h-3.5"></i></div>
                                <span>Carregamento em milissegundos</span>
                            </div>
                        </div>
                    </div>
                    <button onclick="openAlternatingWhatsApp('Olá, quero saber mais sobre a criação de uma Landing Page de Alta Conversão!')" class="inline-flex items-center justify-between w-full py-3.5 px-4 sm:px-5 rounded-xl text-sm sm:text-base font-bold text-gray-900 bg-white border border-gray-200 hover:border-gold-500 hover:bg-gold-50/50 hover:text-gold-800 transition-all duration-200 group/btn shadow-sm cursor-pointer">
                        <span>Solicitar Proposta</span>
                        <i data-lucide="arrow-right" class="w-4 h-4 sm:w-5 sm:h-5 text-gold-600 group-hover/btn:translate-x-1 transition-transform flex-shrink-0 ml-2"></i>
                    </button>
                </div>

                <!-- Service 2: Institucional -->
                <div class="group relative bg-[#fdfdfc] rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-100 hover:border-gold-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-14 h-14 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                                <i data-lucide="layout" class="w-7 h-7"></i>
                            </div>
                            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">Institucional</span>
                        </div>
                        <h3 class="text-xl sm:text-2xl font-bold text-brand-black mb-3 group-hover:text-gold-700 transition-colors">
                            Sites Institucionais
                        </h3>
                        <p class="text-gray-600 leading-relaxed mb-6 text-base">
                            Apresente sua empresa ao mundo com um site robusto, moderno e preparado para se destacar nas buscas orgânicas do Google.
                        </p>
                        <div class="space-y-3.5 pt-4 border-t border-gray-100 mb-8">
                            <div class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                                <div class="w-5 h-5 rounded-full bg-gold-100/70 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="check" class="w-3.5 h-3.5"></i></div>
                                <span>Múltiplas Páginas Organizacionais</span>
                            </div>
                            <div class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                                <div class="w-5 h-5 rounded-full bg-gold-100/70 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="check" class="w-3.5 h-3.5"></i></div>
                                <span>Otimização Avançada (SEO)</span>
                            </div>
                            <div class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                                <div class="w-5 h-5 rounded-full bg-gold-100/70 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="check" class="w-3.5 h-3.5"></i></div>
                                <span>Integração com Redes e Mapas</span>
                            </div>
                        </div>
                    </div>
                    <button onclick="openAlternatingWhatsApp('Olá, quero saber mais sobre a criação de um Site Institucional!')" class="inline-flex items-center justify-between w-full py-3.5 px-4 sm:px-5 rounded-xl text-sm sm:text-base font-bold text-gray-900 bg-white border border-gray-200 hover:border-gold-500 hover:bg-gold-50/50 hover:text-gold-800 transition-all duration-200 group/btn shadow-sm cursor-pointer">
                        <span>Solicitar Proposta</span>
                        <i data-lucide="arrow-right" class="w-4 h-4 sm:w-5 sm:h-5 text-gold-600 group-hover/btn:translate-x-1 transition-transform flex-shrink-0 ml-2"></i>
                    </button>
                </div>

                <!-- Service 3: Sistemas Web -->
                <div class="group relative bg-[#fdfdfc] rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-100 hover:border-gold-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-14 h-14 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                                <i data-lucide="code" class="w-7 h-7"></i>
                            </div>
                            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">Sistemas & API</span>
                        </div>
                        <h3 class="text-xl sm:text-2xl font-bold text-brand-black mb-3 group-hover:text-gold-700 transition-colors">
                            Sistemas Web & Dashboards
                        </h3>
                        <p class="text-gray-600 leading-relaxed mb-6 text-base">
                            Plataformas personalizadas, painéis administrativos e portais interativos integrados com bancos de dados e APIs externas.
                        </p>
                        <div class="space-y-3.5 pt-4 border-t border-gray-100 mb-8">
                            <div class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                                <div class="w-5 h-5 rounded-full bg-gold-100/70 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="check" class="w-3.5 h-3.5"></i></div>
                                <span>Bancos de Dados e Autenticação</span>
                            </div>
                            <div class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                                <div class="w-5 h-5 rounded-full bg-gold-100/70 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="check" class="w-3.5 h-3.5"></i></div>
                                <span>Fluxos Automatizados e KPIs</span>
                            </div>
                            <div class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                                <div class="w-5 h-5 rounded-full bg-gold-100/70 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="check" class="w-3.5 h-3.5"></i></div>
                                <span>Segurança Avançada</span>
                            </div>
                        </div>
                    </div>
                    <button onclick="openAlternatingWhatsApp('Olá, preciso de um orçamento para um Sistema Web/Dashboard personalizado!')" class="inline-flex items-center justify-between w-full py-3.5 px-4 sm:px-5 rounded-xl text-sm sm:text-base font-bold text-gray-900 bg-white border border-gray-200 hover:border-gold-500 hover:bg-gold-50/50 hover:text-gold-800 transition-all duration-200 group/btn shadow-sm cursor-pointer">
                        <span>Solicitar Proposta</span>
                        <i data-lucide="arrow-right" class="w-4 h-4 sm:w-5 sm:h-5 text-gold-600 group-hover/btn:translate-x-1 transition-transform flex-shrink-0 ml-2"></i>
                    </button>
                </div>

                <!-- Service 4: Reformulação -->
                <div class="group relative bg-[#fdfdfc] rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-100 hover:border-gold-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-14 h-14 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                                <i data-lucide="rocket" class="w-7 h-7"></i>
                            </div>
                            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">Performance</span>
                        </div>
                        <h3 class="text-xl sm:text-2xl font-bold text-brand-black mb-3 group-hover:text-gold-700 transition-colors">
                            Reformulação e Otimização
                        </h3>
                        <p class="text-gray-600 leading-relaxed mb-6 text-base">
                            Seu site atual é lento ou não vende? Nós reestruturamos toda a base técnica e visual para atingir pontuações máximas no PageSpeed.
                        </p>
                        <div class="space-y-3.5 pt-4 border-t border-gray-100 mb-8">
                            <div class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                                <div class="w-5 h-5 rounded-full bg-gold-100/70 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="check" class="w-3.5 h-3.5"></i></div>
                                <span>Refatoração de Código e Assets</span>
                            </div>
                            <div class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                                <div class="w-5 h-5 rounded-full bg-gold-100/70 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="check" class="w-3.5 h-3.5"></i></div>
                                <span>Modernização Visual / Redesign</span>
                            </div>
                            <div class="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                                <div class="w-5 h-5 rounded-full bg-gold-100/70 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="check" class="w-3.5 h-3.5"></i></div>
                                <span>Correção de Bugs e Responsividade</span>
                            </div>
                        </div>
                    </div>
                    <button onclick="openAlternatingWhatsApp('Olá, gostaria de reformular/otimizar meu site atual!')" class="inline-flex items-center justify-between w-full py-3.5 px-4 sm:px-5 rounded-xl text-sm sm:text-base font-bold text-gray-900 bg-white border border-gray-200 hover:border-gold-500 hover:bg-gold-50/50 hover:text-gold-800 transition-all duration-200 group/btn shadow-sm cursor-pointer">
                        <span>Solicitar Proposta</span>
                        <i data-lucide="arrow-right" class="w-4 h-4 sm:w-5 sm:h-5 text-gold-600 group-hover/btn:translate-x-1 transition-transform flex-shrink-0 ml-2"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Differentials Section -->
    <section id="diferenciais" class="py-24 bg-brand-light border-y border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mb-4">
                    Por que escolher a <span class="text-gradient-gold">Mídia DSJ?</span>
                </h2>
                <p class="text-base sm:text-lg text-gray-600">
                    Nosso compromisso é entregar projetos de excelência, sem templates engessados, garantindo exclusividade e resultados reais.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-card transition-shadow">
                    <div class="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mb-6">
                        <i data-lucide="paint-bucket" class="w-6 h-6 text-gold-600"></i>
                    </div>
                    <h3 class="text-xl font-bold text-brand-black mb-3">Design Exclusivo</h3>
                    <p class="text-base text-gray-600">Não usamos templates genéricos. Cada layout é pensado para a identidade e público da sua marca.</p>
                </div>

                <div class="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-card transition-shadow">
                    <div class="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mb-6">
                        <i data-lucide="gauge" class="w-6 h-6 text-gold-600"></i>
                    </div>
                    <h3 class="text-xl font-bold text-brand-black mb-3">Performance</h3>
                    <p class="text-base text-gray-600">Código limpo e otimizado para carregamento rápido, essencial para não perder clientes impacientes.</p>
                </div>

                <div class="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-card transition-shadow">
                    <div class="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mb-6">
                        <i data-lucide="headphones" class="w-6 h-6 text-gold-600"></i>
                    </div>
                    <h3 class="text-xl font-bold text-brand-black mb-3">Suporte Ativo</h3>
                    <p class="text-base text-gray-600">Atendimento próximo e humanizado. Acompanhamos o projeto antes, durante e após a entrega.</p>
                </div>

                <div class="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-card transition-shadow">
                    <div class="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mb-6">
                        <i data-lucide="gem" class="w-6 h-6 text-gold-600"></i>
                    </div>
                    <h3 class="text-xl font-bold text-brand-black mb-3">Foco em Vendas</h3>
                    <p class="text-base text-gray-600">Aplicamos gatilhos mentais e usabilidade (UX) estratégica para guiar o usuário até a conversão final.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Tools Banner Section -->
    <section class="py-20 relative overflow-hidden bg-white">
        <div class="absolute inset-0 bg-gold-50/30"></div>
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-100/40 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="bg-white rounded-3xl p-8 sm:p-12 border border-gold-200/80 shadow-card flex flex-col lg:flex-row items-center justify-between gap-10">
                <div class="max-w-2xl">
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-800 text-sm font-bold mb-4">
                        <i data-lucide="sparkles" class="w-4 h-4 text-gold-600 flex-shrink-0"></i>
                        <span>Recursos Gratuitos Mídia DSJ</span>
                    </div>
                    <h3 class="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mb-4">
                        Conheça nossa <span class="text-gradient-gold">Central de Ferramentas Web</span>
                    </h3>
                    <p class="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                        Desenvolvemos utilitários práticos, rápidos e 100% gratuitos para facilitar seu dia a dia profissional: encurte links, gere links diretos de WhatsApp com mensagens personalizadas, crie QR Codes e muito mais.
                    </p>
                    <div class="flex flex-wrap gap-2.5 mb-8">
                        <span class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50/90 border border-gray-200/80 text-sm sm:text-base font-semibold text-gray-800 hover:border-gold-300 hover:bg-gold-50/40 hover:text-gold-900 transition-all duration-200 shadow-sm">
                            <i data-lucide="link" class="w-4 h-4 text-gold-600 flex-shrink-0"></i>
                            <span>Encurtador de URLs</span>
                        </span>
                        <span class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50/90 border border-gray-200/80 text-sm sm:text-base font-semibold text-gray-800 hover:border-gold-300 hover:bg-gold-50/40 hover:text-gold-900 transition-all duration-200 shadow-sm">
                            <i data-lucide="message-square" class="w-4 h-4 text-gold-600 flex-shrink-0"></i>
                            <span>Gerador de Link WhatsApp</span>
                        </span>
                        <span class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50/90 border border-gray-200/80 text-sm sm:text-base font-semibold text-gray-800 hover:border-gold-300 hover:bg-gold-50/40 hover:text-gold-900 transition-all duration-200 shadow-sm">
                            <i data-lucide="qr-code" class="w-4 h-4 text-gold-600 flex-shrink-0"></i>
                            <span>Gerador de QR Code</span>
                        </span>
                        <span class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50/90 border border-gray-200/80 text-sm sm:text-base font-semibold text-gray-800 hover:border-gold-300 hover:bg-gold-50/40 hover:text-gold-900 transition-all duration-200 shadow-sm">
                            <i data-lucide="calculator" class="w-4 h-4 text-gold-600 flex-shrink-0"></i>
                            <span>Calculadoras</span>
                        </span>
                    </div>
                </div>
                <div class="flex-shrink-0 w-full lg:w-auto text-center">
                    <a href="<?= $base_url ?>ferramentas.php" class="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-brand-black hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-gold hover:-translate-y-0.5 group">
                        <i data-lucide="wrench" class="w-5 h-5 text-gold-400 group-hover:text-white transition-colors flex-shrink-0"></i>
                        <span>Acessar Ferramentas</span>
                        <i data-lucide="arrow-right" class="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform"></i>
                    </a>
                    <p class="text-sm text-gray-500 mt-2">Acesso gratuito &bull; Sem necessidade de cadastro</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contato" class="py-24 bg-gradient-to-b from-white to-[#faf9f6]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-sm font-bold tracking-wider uppercase text-gold-700 bg-gold-50 border border-gold-200 px-4 py-1.5 rounded-full">Inicie Seu Projeto</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mt-4 mb-4">
                    Vamos Criar Algo <span class="text-gradient-gold">Incrível Juntos?</span>
                </h2>
                <p class="text-base sm:text-lg text-gray-600">
                    Conte-nos sobre o seu projeto e receba uma proposta personalizada sem compromisso.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div class="lg:col-span-5 space-y-6">
                    <div class="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 class="text-xl sm:text-2xl font-bold text-brand-black mb-4">Atendimento Rápido e Personalizado</h3>
                        <p class="text-base text-gray-600 leading-relaxed mb-6">
                            Tire suas dúvidas, receba orientações sobre a melhor tecnologia para o seu modelo de negócio e dê o próximo passo rumo ao crescimento digital.
                        </p>
                        <div class="space-y-4">
                            <div onclick="openWhatsAppSpecific('5521964167030', 'Olá, vim pelo site e gostaria de um orçamento.')" class="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gold-300 hover:bg-gold-50/30 transition-all cursor-pointer group">
                                <div class="w-12 h-12 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                                    <i data-lucide="message-circle" class="w-6 h-6"></i>
                                </div>
                                <div>
                                    <p class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">WhatsApp Principal</p>
                                    <p class="text-base sm:text-lg font-bold text-gray-900 group-hover:text-brand-black">(21) 96416-7030</p>
                                </div>
                            </div>
                            <div onclick="openWhatsAppSpecific('5521964319242', 'Olá, vim pelo site e gostaria de um orçamento.')" class="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gold-300 hover:bg-gold-50/30 transition-all cursor-pointer group">
                                <div class="w-12 h-12 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                                    <i data-lucide="message-circle" class="w-6 h-6"></i>
                                </div>
                                <div>
                                    <p class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">WhatsApp Secundário</p>
                                    <p class="text-base sm:text-lg font-bold text-gray-900 group-hover:text-brand-black">(21) 96431-9242</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <div class="w-12 h-12 rounded-lg bg-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="mail" class="w-6 h-6"></i>
                                </div>
                                <div>
                                    <p class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">E-mail Institucional</p>
                                    <p class="text-base sm:text-lg font-bold text-gray-900">contato@midiadsj.com</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <div class="w-12 h-12 rounded-lg bg-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="clock" class="w-6 h-6"></i>
                                </div>
                                <div>
                                    <p class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">Horário de Funcionamento</p>
                                    <p class="text-sm sm:text-base font-bold text-gray-900">Segunda a Sexta: 09h às 18h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-gold-200/70 shadow-card">
                    <h3 class="text-2xl sm:text-3xl font-bold text-brand-black mb-2">Envie um Briefing Rápido</h3>
                    <p class="text-sm sm:text-base text-gray-500 mb-8">Preencha os dados abaixo para direcionarmos o seu atendimento diretamente no WhatsApp.</p>

                    <form id="contact-form" class="space-y-5">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label for="name" class="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Seu Nome ou Empresa *</label>
                                <input type="text" id="name" required placeholder="Ex: Alexandre Cruv" class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-base text-gray-900 placeholder:text-gray-400 transition-all">
                            </div>
                            <div>
                                <label for="phone" class="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">WhatsApp para Contato *</label>
                                <input type="tel" id="phone" required placeholder="Ex: (21) 98888-7777" class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-base text-gray-900 placeholder:text-gray-400 transition-all">
                            </div>
                        </div>
                        <div>
                            <label for="projectType" class="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Qual solução você procura? *</label>
                            <select id="projectType" class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-base text-gray-900 bg-white transition-all">
                                <option value="Landing Page de Alta Conversão">Landing Page de Alta Conversão</option>
                                <option value="Site Institucional Completo">Site Institucional Completo</option>
                                <option value="Sistema Web / Dashboard">Sistema Web / Dashboard</option>
                                <option value="Reformulação de Site Atual">Reformulação de Site Atual</option>
                                <option value="Outro (Detalhar abaixo)">Outro (Detalhar abaixo)</option>
                            </select>
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Conte um pouco sobre suas ideias e objetivos</label>
                            <textarea id="message" rows="4" placeholder="Ex: Preciso de uma landing page para vender um curso online..." class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none text-base text-gray-900 placeholder:text-gray-400 transition-all resize-none"></textarea>
                        </div>
                        <button type="submit" class="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-brand-black hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-gold hover:-translate-y-0.5 cursor-pointer">
                            <i data-lucide="send" class="w-5 h-5 text-gold-400"></i>
                            <span>Enviar Briefing via WhatsApp</span>
                        </button>
                        <p class="text-[12px] text-gray-400 text-center">Seus dados estão seguros. Não enviamos spam.</p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>

<?php 
require_once 'includes/floating_whatsapp.php';
require_once 'includes/footer.php'; 
?>
