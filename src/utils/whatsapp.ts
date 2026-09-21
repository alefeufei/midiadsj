export const WHATSAPP_NUMBERS = [
  { raw: "5521964167030", display: "(21) 96416-7030" },
  { raw: "5521964319242", display: "(21) 96431-9242" },
];

let fallbackCounter = 0;

export function getNextWhatsAppNumber() {
  if (typeof window !== "undefined") {
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
  fallbackCounter = (fallbackCounter + 1) % WHATSAPP_NUMBERS.length;
  return WHATSAPP_NUMBERS[fallbackCounter];
}

export function createWhatsAppUrl(phoneRaw: string, text: string) {
  return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(text)}`;
}

export function openAlternatingWhatsApp(text: string) {
  const selected = getNextWhatsAppNumber();
  const url = createWhatsAppUrl(selected.raw, text);
  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }
  return url;
}
