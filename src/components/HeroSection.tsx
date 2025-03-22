
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90 z-10" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="subheading mb-4 text-primary"
            >
              Personal Branding Specialist
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="heading-1 mb-6"
            >
              Elevate Your <span className="text-primary">Personal Brand</span> to New Heights
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto md:mx-0"
            >
              Strategic consulting, app development, and content creation services 
              tailored to build your unique personal brand and digital presence.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button asChild size="lg" className="rounded-md">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-md">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl -z-10" />
              <img 
                src="/lovable-uploads/09f32019-7804-4b6c-b3ac-c38600601d24.png" 
                alt="Mohal Bansal" 
                className="rounded-2xl shadow-xl shadow-primary/10 w-full object-cover border border-border"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-primary"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
