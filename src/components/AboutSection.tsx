
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function AboutSection() {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative hidden md:block"
        >
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl -z-10" />
          <img
            src="/lovable-uploads/09f32019-7804-4b6c-b3ac-c38600601d24.png"
            alt="Mohal Bansal"
            className="rounded-2xl shadow-xl object-cover w-full max-w-md mx-auto"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="subheading mb-4 text-primary">About Me</p>
          <h2 className="heading-2 mb-6">Passionate About Building <span className="text-primary">Personal Brands</span></h2>
          <p className="mb-6 text-lg text-muted-foreground">
            I'm a personal branding specialist focused on helping professionals and entrepreneurs develop
            their unique identity and digital presence. With expertise in strategic consulting, app development,
            and content creation, I provide comprehensive solutions to elevate your personal brand.
          </p>
          <p className="mb-8 text-lg text-muted-foreground">
            My approach combines technical skills with creative strategies to create memorable, impactful
            personal brands that resonate with your target audience and help you achieve your professional goals.
          </p>
          <Button asChild size="lg" className="rounded-md">
            <Link to="/about">Learn More About Me</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
