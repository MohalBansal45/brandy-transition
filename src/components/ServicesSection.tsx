
import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { Button as LucideButton, Code, Lightbulb, LayoutPanelLeft, FileText, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ServicesSection() {
  const services = [
    {
      icon: Lightbulb,
      title: "Strategy & Consulting",
      description: "Personalized branding strategies to help you stand out in your industry and connect with your target audience.",
    },
    {
      icon: Code,
      title: "App Development",
      description: "Custom application development to create digital platforms that showcase your personal brand and expertise.",
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Compelling content that tells your story, communicates your value, and engages your audience across platforms.",
    },
    {
      icon: Smartphone,
      title: "Digital Presence",
      description: "Cohesive digital presence across multiple platforms, ensuring your personal brand is consistent and impactful.",
    },
    {
      icon: LayoutPanelLeft,
      title: "Visual Identity",
      description: "Professional visual identity including logos, color schemes, and design systems that reflect your personal brand.",
    },
    {
      icon: LucideButton,
      title: "Brand Messaging",
      description: "Clear, consistent messaging that communicates your unique value proposition and resonates with your audience.",
    },
  ];

  return (
    <section id="services" className="section-container bg-secondary/30">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="subheading mb-4 text-primary"
        >
          My Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="heading-2 mb-6"
        >
          Comprehensive <span className="text-primary">Branding Solutions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-muted-foreground text-lg"
        >
          From strategic planning to execution, I offer a range of services to build and enhance your personal brand.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            delay={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center"
      >
        <Button asChild size="lg" className="rounded-md">
          <Link to="/services">View All Services</Link>
        </Button>
      </motion.div>
    </section>
  );
}
