
import { PageTransition } from "@/components/PageTransition";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <PageTransition>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </PageTransition>
  );
};

export default Index;
