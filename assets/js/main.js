// assets/js/main.js

// WhatsApp Numbers Configuration
const WHATSAPP_NUMBERS = [
    { raw: "5521964167030", display: "(21) 96416-7030" },
    { raw: "5521964319242", display: "(21) 96431-9242" },
];

let fallbackCounter = 0;

function getNextWhatsAppNumber() {
    try {
        const saved = localStorage.getItem("dsj_wa_index");
        const current = saved !== null ? parseInt(saved, 10) : Math.floor(Math.random() * 2);
        const next = (current + 1) % WHATSAPP_NUMBERS.length;
        localStorage.setItem("dsj_wa_index", next.toString());
        return WHATSAPP_NUMBERS[current % WHATSAPP_NUMBERS.length];
    } catch {
        fallbackCounter = (fallbackCounter + 1) % WHATSAPP_NUMBERS.length;
        return WHATSAPP_NUMBERS[fallbackCounter];
    }
}

function createWhatsAppUrl(phoneRaw, text) {
    return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(text)}`;
}

window.openAlternatingWhatsApp = function(text) {
    const selected = getNextWhatsAppNumber();
    const url = createWhatsAppUrl(selected.raw, text);
    window.open(url, "_blank");
    return url;
};

window.openWhatsAppSpecific = function(phoneRaw, text) {
    const url = createWhatsAppUrl(phoneRaw, text);
    window.open(url, "_blank");
    return url;
};

window.handleBudgetClick = function(e) {
    e.preventDefault();
    openAlternatingWhatsApp("Olá, quero um orçamento para meu projeto com a Mídia DSJ!");
};

// Header Scroll Effect & Mobile Menu Logic
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuDropdown = document.getElementById('mobile-menu-dropdown');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    let isMenuOpen = false;

    // Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.remove('bg-white/80', 'py-5', 'border-transparent');
            header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-3', 'border-gray-100');
        } else {
            header.classList.add('bg-white/80', 'py-5', 'border-transparent');
            header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-3', 'border-gray-100');
        }
    });

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenuDropdown.classList.remove('hidden');
            mobileMenuIcon.setAttribute('data-lucide', 'x');
        } else {
            mobileMenuDropdown.classList.add('hidden');
            mobileMenuIcon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons(); // re-init icons for the new X or Menu
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileMenuDropdown.classList.add('hidden');
            mobileMenuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });

    // Contact form submission via WhatsApp
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value || "Cliente";
            const phone = document.getElementById('phone').value;
            const projectType = document.getElementById('projectType').value;
            const message = document.getElementById('message').value || "Gostaria de saber mais informações e valores.";
            
            const text = `Olá! Meu nome é ${name}.\n\n*Tipo de Projeto:* ${projectType}\n*Telefone/WhatsApp:* ${phone}\n*Detalhes:* ${message}`;
            openAlternatingWhatsApp(text);
        });
    }
});
