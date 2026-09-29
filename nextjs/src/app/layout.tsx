import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://midiadsj.com"),
  title: "Mídia DSJ | Criação de Sites, Sistemas Web e Landing Pages",
  description:
    "Desenvolvimento profissional de sites modernos, sistemas web sob medida e landing pages de alta conversão. Performance, design exclusivo e resultados para sua empresa.",
  keywords: [
    "criação de sites",
    "desenvolvimento web",
    "landing pages",
    "sistemas web",
    "sites responsivos",
    "mídia dsj",
    "agência web",
    "nextjs",
  ],
  authors: [{ name: "Mídia DSJ" }],
  openGraph: {
    title: "Mídia DSJ | Criação de Sites, Sistemas Web e Landing Pages",
    description:
      "Transformamos ideias em plataformas digitais de alto impacto, sites rápidos e landing pages de alta conversão.",
    url: "https://midiadsj.com",
    siteName: "Mídia DSJ",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 400,
        alt: "Mídia DSJ Comunicação & Marketing",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/logo-perfil.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-brand-black bg-[#fdfdfd] min-h-screen selection:bg-gold-200 selection:text-brand-black">
        {children}
      </body>
    </html>
  );
}
