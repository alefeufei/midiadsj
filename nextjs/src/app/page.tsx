import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import ToolsBanner from "@/components/ToolsBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero />
      <Services />
      <Differentials />
      <ToolsBanner />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
