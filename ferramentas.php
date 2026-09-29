<?php
// ferramentas.php
$page_title = "Central de Ferramentas Web Gratuitas | Mídia DSJ";
$page_description = "Coleção de ferramentas online práticas e gratuitas desenvolvidas pela Mídia DSJ: Encurtador de URLs, Gerador de Link WhatsApp, QR Code, Pomodoro e muito mais.";
require_once 'includes/header.php';

$tools = [
    [
        "id" => "encurtador",
        "title" => "Encurtador de Links",
        "tag" => "Produtividade",
        "description" => "Encurte seus links longos de forma rápida, segura e elegante para compartilhar em redes sociais e campanhas.",
        "icon" => "link-2",
        "image" => "ferramentas/images/encurtador.png",
        "link" => "https://encurtaurl.vercel.app/",
        "isExternal" => true,
        "badge" => "Gratuito",
    ],
    [
        "id" => "gerador-whatsapp",
        "title" => "Gerador de Link WhatsApp",
        "tag" => "Comunicação & Vendas",
        "description" => "Crie links diretos para seu WhatsApp com número e mensagem personalizada pronta para o cliente iniciar a conversa.",
        "icon" => "message-square",
        "image" => "ferramentas/images/gerador.png",
        "link" => "ferramentas/geralinkzap/index.html",
        "isExternal" => true,
        "badge" => "Mais Usado",
    ],
    [
        "id" => "qrcode",
        "title" => "Gerador de QR Code",
        "tag" => "Marketing & Design",
        "description" => "Gere códigos QR dinâmicos e vibrantes instantaneamente para seus links, redes sociais, chave Pix ou textos.",
        "icon" => "qr-code",
        "image" => "ferramentas/images/qrcode.png",
        "link" => "ferramentas/qrcode/index.html",
        "isExternal" => true,
        "badge" => "Gratuito",
    ],
    [
        "id" => "calculadoras",
        "title" => "Calculadoras de Custos",
        "tag" => "Finanças & Gestão",
        "description" => "Calcule seus custos de trabalho, precificação e orçamentos de forma rápida, eficiente e descomplicada.",
        "icon" => "calculator",
        "image" => "ferramentas/images/calculadora.svg",
        "link" => "ferramentas/calculadoras/index.html",
        "isExternal" => true,
        "badge" => "Utilidade",
    ],
    [
        "id" => "pomodoro",
        "title" => "Pomodoro Timer",
        "tag" => "Foco & Tempo",
        "description" => "Gerencie seu tempo de trabalho e intervalos com foco e eficiência usando a consagrada técnica Pomodoro.",
        "icon" => "clock",
        "image" => "ferramentas/images/pomodoro.png",
        "link" => "ferramentas/pomodoro/index.html",
        "isExternal" => true,
        "badge" => "Gratuito",
    ],
    [
        "id" => "jogo-forca",
        "title" => "Jogo da Forca Bíblico",
        "tag" => "Interativo & Jogos",
        "description" => "Um desafio interativo de palavras e conhecimentos baseado em temas, histórias e personagens bíblicos.",
        "icon" => "gamepad-2",
        "image" => "ferramentas/images/jogo_forca.png",
        "link" => "https://jogo-da-forca-biblico.vercel.app/",
        "isExternal" => true,
        "badge" => "Jogo",
    ],
    [
        "id" => "leitura-biblica",
        "title" => "Planos de Leitura Bíblica",
        "tag" => "Estudo & Fé",
        "description" => "Acompanhe planos diários e cronogramas organizados de leitura bíblica para edificar e enriquecer seus estudos.",
        "icon" => "book-open",
        "image" => "ferramentas/images/leitura_biblica.png",
        "link" => "ferramentas/leiturabiblica/index.html",
        "isExternal" => true,
        "badge" => "Guia",
    ]
];
?>

<main class="flex-grow pt-28 pb-24">
    <!-- Breadcrumb & Intro Header -->
    <div class="bg-gradient-to-b from-gray-50 via-white to-transparent border-b border-gray-100 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
                <a href="<?= $base_url ?>index.php" class="hover:text-gold-600 transition-colors">Início</a>
                <i data-lucide="chevron-right" class="w-4 h-4"></i>
                <span class="text-gold-700 font-semibold">Ferramentas</span>
            </nav>

            <div class="max-w-3xl">
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-800 text-sm font-bold mb-4 shadow-sm">
                    <i data-lucide="sparkles" class="w-4 h-4 text-gold-600"></i>
                    <span>Central de Utilidades Online</span>
                </div>

                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight mb-4">
                    Ferramentas <span class="text-gradient-gold">Mídia DSJ</span>
                </h1>

                <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Uma coleção completa de ferramentas úteis, leves e 100% gratuitas para acelerar seu marketing, comunicação e produtividade diária.
                </p>
            </div>
        </div>
    </div>

    <!-- Tools Grid Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php foreach ($tools as $tool): ?>
                <div class="bg-white rounded-2xl border border-gray-100 hover:border-gold-300 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
                    <div>
                        <!-- Visual Banner Preview -->
                        <div class="relative h-48 w-full bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-100 flex items-center justify-center overflow-hidden p-4">
                            <?php if (!empty($tool['image'])): ?>
                                <div class="relative w-full h-full flex items-center justify-center">
                                    <img src="<?= $base_url ?><?= $tool['image'] ?>" alt="<?= $tool['title'] ?>" class="object-contain p-2 transition-transform duration-300 group-hover:scale-105 w-full h-full" />
                                </div>
                            <?php else: ?>
                                <div class="w-16 h-16 rounded-2xl bg-gold-100 text-gold-700 flex items-center justify-center">
                                    <i data-lucide="<?= $tool['icon'] ?>" class="w-8 h-8"></i>
                                </div>
                            <?php endif; ?>

                            <span class="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gold-800 border border-gold-200/80 shadow-xs">
                                <?= $tool['badge'] ?>
                            </span>
                        </div>

                        <!-- Content -->
                        <div class="p-6">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                    <?= $tool['tag'] ?>
                                </span>
                            </div>

                            <h2 class="text-xl sm:text-2xl font-bold text-brand-black mb-2.5 group-hover:text-gold-700 transition-colors">
                                <?= $tool['title'] ?>
                            </h2>

                            <p class="text-base text-gray-600 leading-relaxed line-clamp-3">
                                <?= $tool['description'] ?>
                            </p>
                        </div>
                    </div>

                    <!-- Action Button -->
                    <div class="px-6 pb-6 pt-2">
                        <a
                            href="<?= $tool['isExternal'] && strpos($tool['link'], 'http') !== 0 ? $base_url . $tool['link'] : $tool['link'] ?>"
                            target="<?= $tool['isExternal'] ? '_blank' : '_self' ?>"
                            <?= $tool['isExternal'] ? 'rel="noopener noreferrer"' : '' ?>
                            class="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-base font-bold text-white bg-brand-black hover:bg-gold-600 transition-all duration-200 shadow-sm group/btn"
                        >
                            <span>Acessar Ferramenta</span>
                            <?php if ($tool['isExternal']): ?>
                                <i data-lucide="external-link" class="w-4 h-4 text-gold-400 group-hover/btn:text-white transition-colors"></i>
                            <?php else: ?>
                                <i data-lucide="arrow-right" class="w-4 h-4 text-gold-400 group-hover/btn:translate-x-1 group-hover/btn:text-white transition-all"></i>
                            <?php endif; ?>
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- Bottom Back Button & Note -->
        <div class="mt-16 text-center bg-[#faf9f6] rounded-2xl p-8 sm:p-10 border border-gray-100">
            <h3 class="text-xl sm:text-2xl font-bold text-brand-black mb-3">
                Precisa de uma ferramenta personalizada para sua empresa?
            </h3>
            <p class="text-base text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed">
                Desenvolvemos sistemas web, calculadoras, dashboards e ferramentas sob medida com alta performance, APIs e banco de dados.
            </p>
            <a href="<?= $base_url ?>index.php#contato" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-brand-black bg-white hover:bg-gold-50 border border-gray-200 hover:border-gold-300 transition-all shadow-sm">
                <span>Fazer Orçamento de Sistema Web</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-gold-600"></i>
            </a>
        </div>
    </div>
</main>

<?php 
require_once 'includes/floating_whatsapp.php';
require_once 'includes/footer.php'; 
?>
