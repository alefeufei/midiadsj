<?php
// includes/footer.php
?>
<footer class="bg-white border-t border-gray-100 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <!-- Brand -->
            <div class="lg:col-span-1">
                <a href="<?= $base_url ?>index.php" class="inline-block mb-6">
                    <img src="<?= $base_url ?>assets/images/logo.png" alt="Mídia DSJ" class="h-10 w-auto object-contain" />
                </a>
                <p class="text-base text-gray-500 leading-relaxed mb-6">
                    Especialistas em desenvolvimento web de alta performance. Criamos soluções digitais que transformam visitantes em clientes.
                </p>
                <div class="flex items-center gap-4">
                    <a href="https://instagram.com/midiadsj" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gold-50 hover:text-gold-600 transition-colors">
                        <i data-lucide="instagram" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>

            <!-- Links Rápidos -->
            <div>
                <h4 class="text-base font-bold text-gray-900 mb-6 uppercase tracking-wider">Links Rápidos</h4>
                <ul class="space-y-4">
                    <li><a href="<?= $base_url ?>index.php#inicio" class="text-base text-gray-500 hover:text-gold-600 transition-colors">Início</a></li>
                    <li><a href="<?= $base_url ?>index.php#servicos" class="text-base text-gray-500 hover:text-gold-600 transition-colors">Nossos Serviços</a></li>
                    <li><a href="<?= $base_url ?>index.php#diferenciais" class="text-base text-gray-500 hover:text-gold-600 transition-colors">Diferenciais</a></li>
                    <li><a href="<?= $base_url ?>ferramentas.php" class="text-base text-gray-500 hover:text-gold-600 transition-colors">Central de Ferramentas</a></li>
                </ul>
            </div>

            <!-- Soluções -->
            <div>
                <h4 class="text-base font-bold text-gray-900 mb-6 uppercase tracking-wider">Soluções</h4>
                <ul class="space-y-4">
                    <li><a href="#" onclick="openAlternatingWhatsApp('Olá, quero saber mais sobre Sites Institucionais!')" class="text-base text-gray-500 hover:text-gold-600 transition-colors cursor-pointer">Sites Institucionais</a></li>
                    <li><a href="#" onclick="openAlternatingWhatsApp('Olá, quero saber mais sobre Landing Pages!')" class="text-base text-gray-500 hover:text-gold-600 transition-colors cursor-pointer">Landing Pages</a></li>
                    <li><a href="#" onclick="openAlternatingWhatsApp('Olá, quero saber mais sobre Sistemas Web!')" class="text-base text-gray-500 hover:text-gold-600 transition-colors cursor-pointer">Sistemas Web</a></li>
                    <li><a href="#" onclick="openAlternatingWhatsApp('Olá, quero saber mais sobre Reformulação de Sites!')" class="text-base text-gray-500 hover:text-gold-600 transition-colors cursor-pointer">Otimização (SEO & PageSpeed)</a></li>
                </ul>
            </div>

            <!-- Contato -->
            <div>
                <h4 class="text-base font-bold text-gray-900 mb-6 uppercase tracking-wider">Contato</h4>
                <ul class="space-y-4">
                    <li>
                        <a href="#" onclick="openWhatsAppSpecific('5521964167030', 'Olá, vim pelo site e gostaria de um orçamento.')" class="flex items-start gap-3 group cursor-pointer">
                            <i data-lucide="phone" class="w-5 h-5 text-gold-500 mt-0.5 group-hover:text-gold-600"></i>
                            <span class="text-base text-gray-500 group-hover:text-gold-600 transition-colors">(21) 96416-7030</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" onclick="openWhatsAppSpecific('5521964319242', 'Olá, vim pelo site e gostaria de um orçamento.')" class="flex items-start gap-3 group cursor-pointer">
                            <i data-lucide="phone" class="w-5 h-5 text-gold-500 mt-0.5 group-hover:text-gold-600"></i>
                            <span class="text-base text-gray-500 group-hover:text-gold-600 transition-colors">(21) 96431-9242</span>
                        </a>
                    </li>
                    <li class="flex items-start gap-3">
                        <i data-lucide="mail" class="w-5 h-5 text-gold-500 mt-0.5"></i>
                        <span class="text-base text-gray-500">contato@midiadsj.com</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Bottom -->
        <div class="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-sm text-gray-400">
                &copy; <?= date('Y') ?> Mídia DSJ. Todos os direitos reservados.
            </p>
            <div class="flex items-center gap-1.5 text-sm text-gray-400">
                Desenvolvido com <i data-lucide="heart" class="w-4 h-4 text-gold-500"></i> por Mídia DSJ
            </div>
        </div>
    </div>
</footer>

<script src="<?= $base_url ?>assets/js/main.js"></script>
<script>
    // Initialize Lucide Icons
    lucide.createIcons();
</script>
</body>
</html>
