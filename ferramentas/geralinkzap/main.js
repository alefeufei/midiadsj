document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const generateBtn = document.getElementById('generate-btn');
    const resultContainer = document.getElementById('result-container');
    const resultUrl = document.getElementById('result-url');
    const copyBtn = document.getElementById('copy-btn');
    const formatButtons = document.querySelectorAll('.btn-tool');
    const toast = document.getElementById('toast');

    // Phone Masking Logic (Improved)
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (!value.startsWith('55') && value.length <= 11) {
                // If it doesn't start with 55, assume it's just the Brazilian number and prepend 55
                // But only if it looks like a BR number (10 or 11 digits)
                // Actually, let's just make it easier: if it's less than 11 digits and doesn't start with 55, 
                // we'll keep it as is until they finish or we prepend 55.
            }
            
            let formatted = '';
            if (value.startsWith('55')) {
                formatted = '+55 ';
                let rest = value.substring(2);
                if (rest.length > 0) {
                    formatted += '(' + rest.substring(0, 2);
                    if (rest.length > 2) {
                        formatted += ') ' + rest.substring(2, 7);
                        if (rest.length > 7) {
                            formatted += '-' + rest.substring(7, 11);
                        }
                    }
                }
            } else {
                // If no 55, just show numbers or simple (DD) 9XXXX-XXXX
                if (value.length > 2) {
                    formatted = '(' + value.substring(0, 2) + ') ';
                    if (value.length > 7) {
                        formatted += value.substring(2, 7) + '-' + value.substring(7, 11);
                    } else {
                        formatted += value.substring(2);
                    }
                } else {
                    formatted = value;
                }
            }
            e.target.value = formatted;
        }
    });

    // Formatting Logic
    formatButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const format = btn.getAttribute('data-format');
            const start = messageInput.selectionStart;
            const end = messageInput.selectionEnd;
            const text = messageInput.value;
            const selectedText = text.substring(start, end);
            
            let symbol = '';
            switch(format) {
                case 'bold': symbol = '*'; break;
                case 'italic': symbol = '_'; break;
                case 'strike': symbol = '~'; break;
                case 'code': symbol = '```'; break;
            }

            const replacement = symbol + selectedText + symbol;
            messageInput.value = text.substring(0, start) + replacement + text.substring(end);
            
            // Re-focus and set selection
            messageInput.focus();
            const newCursorPos = start + symbol.length;
            if (selectedText) {
                messageInput.setSelectionRange(start, start + replacement.length);
            } else {
                messageInput.setSelectionRange(newCursorPos, newCursorPos);
            }
        });
    });

    // Generate Link
    generateBtn.addEventListener('click', () => {
        let phone = phoneInput.value.replace(/\D/g, '');
        const message = messageInput.value;
        
        if (!phone) {
            alert('Por favor, insira um número de telefone.');
            return;
        }

        // Logic to ensure 55 prefix for Brazil (10 or 11 digits without prefix)
        if (phone.length === 10 || phone.length === 11) {
            if (!phone.startsWith('55')) {
                phone = '55' + phone;
            }
        }

        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phone}?text=${encodedMessage}`;
        
        resultUrl.value = url;
        resultContainer.classList.remove('hidden');
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    });

    // Copy Link
    copyBtn.addEventListener('click', () => {
        resultUrl.select();
        document.execCommand('copy');
        
        // Toast feedback
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    });
});
