import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { About } from "@/components/about";
import { StorefrontBanner } from "@/components/storefront-banner";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <StorefrontBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
