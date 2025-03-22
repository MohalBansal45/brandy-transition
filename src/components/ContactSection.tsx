
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="subheading mb-4 text-primary"
        >
          Get in Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="heading-2 mb-6"
        >
          Let's <span className="text-primary">Connect</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-muted-foreground text-lg"
        >
          Have a question or interested in working together? Reach out through any of these channels.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <motion.a
          href="tel:+917719613078"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0, duration: 0.5 }}
          className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
        >
          <div className="mb-4 p-3 rounded-full bg-primary/10">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Phone</h3>
          <p className="text-muted-foreground text-center">+91 7719613078</p>
        </motion.a>

        <motion.a
          href="mailto:mb@mohalbansal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
        >
          <div className="mb-4 p-3 rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-muted-foreground text-center">mb@mohalbansal</p>
        </motion.a>

        <motion.a
          href="https://x.com/MohalBansal"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
        >
          <div className="mb-4 p-3 rounded-full bg-primary/10">
            <X className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">X (Twitter)</h3>
          <p className="text-muted-foreground text-center">@MohalBansal</p>
        </motion.a>

        <motion.a
          href="https://www.instagram.com/mohalbansal45/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
        >
          <div className="mb-4 p-3 rounded-full bg-primary/10">
            <Instagram className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Instagram</h3>
          <p className="text-muted-foreground text-center">@mohalbansal45</p>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/mohal-bansal/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 md:col-span-2 lg:col-start-2"
        >
          <div className="mb-4 p-3 rounded-full bg-primary/10">
            <Linkedin className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
          <p className="text-muted-foreground text-center">linkedin.com/in/mohal-bansal</p>
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center"
      >
        <Button asChild size="lg" className="rounded-md">
          <a href="mailto:mb@mohalbansal">Send a Message</a>
        </Button>
      </motion.div>
    </section>
  );
}
