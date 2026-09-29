<?php
// includes/header.php
$base_url = ''; // Caminho relativo
?>
<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $page_title ?? 'Mídia DSJ | Sites, Sistemas Web e Landing Pages' ?></title>
    <meta name="description" content="<?= $page_description ?? 'Desenvolvimento de Sites, Sistemas Web e Landing Pages de alta conversão. Aumente suas vendas com a Mídia DSJ.' ?>">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Icons (Lucide) -->
    <script src="https://unpkg.com/lucide@latest"></script>

    <!-- Tailwind CSS (via CDN para uso em PHP puro sem node) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        gold: {
                            50: "#faf7ee",
                            100: "#f3ebd6",
                            200: "#e6d5ad",
                            300: "#d7bc80",
                            400: "#c8a55c",
                            500: "#c5a86d",
                            600: "#ab9262",
                            700: "#8e754d",
                            800: "#745e3e",
                            900: "#604d35",
                        },
                        brand: {
                            black: "#111113",
                            dark: "#1c1c20",
                            muted: "#646473",
                            border: "#e7e5e0",
                            light: "#faf9f6",
                        }
                    },
                    fontFamily: {
                        sans: ['Outfit', 'system-ui', 'sans-serif'],
                    },
                    boxShadow: {
                        gold: "0 10px 25px -5px rgba(197, 168, 109, 0.25), 0 8px 10px -6px rgba(197, 168, 109, 0.2)",
                        subtle: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
                        card: "0 10px 30px -10px rgba(0, 0, 0, 0.07)",
                    }
                }
            }
        }
    </script>

    <!-- Custom CSS -->
    <link rel="stylesheet" href="<?= $base_url ?>assets/css/style.css">
</head>
<body class="text-brand-black bg-[#fdfdfc] overflow-x-hidden">

<!-- Header Component -->
<header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-sm py-5 border-b border-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <!-- Logo -->
        <a href="<?= $base_url ?>index.php" class="flex items-center gap-2 group">
            <div class="relative h-11 w-44 sm:h-12 sm:w-52">
                <img src="<?= $base_url ?>assets/images/logo.png" alt="Mídia DSJ" class="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02] w-full h-full" />
            </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="<?= $base_url ?>index.php#inicio" class="text-sm font-medium text-gray-700 hover:text-gold-600 transition-colors">Início</a>
            <a href="<?= $base_url ?>index.php#servicos" class="text-sm font-medium text-gray-700 hover:text-gold-600 transition-colors">Serviços</a>
            <a href="<?= $base_url ?>index.php#diferenciais" class="text-sm font-medium text-gray-700 hover:text-gold-600 transition-colors">Diferenciais</a>
            <a href="<?= $base_url ?>ferramentas.php" class="inline-flex items-center gap-1.5 text-sm font-medium text-gold-700 hover:text-gold-800 bg-gold-50/80 px-3 py-1.5 rounded-full border border-gold-200/60 transition-all hover:bg-gold-100/80">
                <span class="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
                Ferramentas
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 opacity-70"></i>
            </a>
            <a href="<?= $base_url ?>index.php#contato" class="text-sm font-medium text-gray-700 hover:text-gold-600 transition-colors">Contato</a>
        </nav>

        <!-- Header Actions -->
        <div class="hidden lg:flex items-center gap-4">
            <button onclick="handleBudgetClick(event)" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-black hover:bg-gold-600 transition-all duration-300 shadow-sm hover:shadow-gold hover:-translate-y-0.5 cursor-pointer">
                <i data-lucide="message-circle" class="w-4 h-4 text-gold-400"></i>
                <span>Solicitar Orçamento</span>
            </button>
        </div>

        <!-- Mobile & Tablet menu button -->
        <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg text-gray-700 hover:text-gold-600 hover:bg-gray-100 focus:outline-none cursor-pointer" aria-label="Abrir menu">
            <i data-lucide="menu" id="mobile-menu-icon" class="w-6 h-6"></i>
        </button>
    </div>

    <!-- Mobile & Tablet menu dropdown -->
    <div id="mobile-menu-dropdown" class="hidden lg:hidden bg-white border-b border-gray-100 shadow-xl px-6 py-6 transition-all">
        <div class="flex flex-col gap-4 max-w-lg mx-auto">
            <a href="<?= $base_url ?>index.php#inicio" class="mobile-link text-lg font-semibold text-gray-800 hover:text-gold-600 py-1">Início</a>
            <a href="<?= $base_url ?>index.php#servicos" class="mobile-link text-lg font-semibold text-gray-800 hover:text-gold-600 py-1">Serviços</a>
            <a href="<?= $base_url ?>index.php#diferenciais" class="mobile-link text-lg font-semibold text-gray-800 hover:text-gold-600 py-1">Diferenciais</a>
            <a href="<?= $base_url ?>ferramentas.php" class="mobile-link inline-flex items-center justify-between text-lg font-bold text-gold-700 bg-gold-50 px-4 py-3 rounded-xl border border-gold-200">
                <span>Central de Ferramentas</span>
                <i data-lucide="arrow-up-right" class="w-5 h-5 text-gold-600"></i>
            </a>
            <a href="<?= $base_url ?>index.php#contato" class="mobile-link text-lg font-semibold text-gray-800 hover:text-gold-600 py-1">Contato</a>

            <button onclick="handleBudgetClick(event)" class="mobile-link inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl text-base font-bold text-white bg-brand-black hover:bg-gold-600 transition-colors shadow-md cursor-pointer">
                <i data-lucide="message-circle" class="w-5 h-5 text-gold-400"></i>
                <span>Solicitar Orçamento via WhatsApp</span>
            </button>
        </div>
    </div>
</header>
