import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { 
  Lightbulb, Code, FileText, Smartphone, LayoutPanelLeft, 
  Button as LucideButton, Globe, MessagesSquare, LineChart, Users
} from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const coreServices = [
    {
      icon: Lightbulb,
      title: "Strategy & Consulting",
      description: "Comprehensive personal branding strategies tailored to your professional goals, industry, and target audience.",
      points: [
        "Brand positioning and differentiation",
        "Competitive analysis and market research",
        "Target audience identification",
        "Brand messaging and story development",
        "Strategic roadmap creation"
      ]
    },
    {
      icon: Code,
      title: "App Development",
      description: "Custom applications and digital platforms that showcase your expertise and provide value to your audience.",
      points: [
        "Personal portfolio websites",
        "Custom web applications",
        "Mobile app development",
        "API integration and development",
        "Technical architecture design"
      ]
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "High-quality content that communicates your value proposition and engages your target audience.",
      points: [
        "Content strategy development",
        "Blog and article writing",
        "Social media content creation",
        "Newsletter and email copywriting",
        "Thought leadership content"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Smartphone,
      title: "Digital Presence",
      description: "Cohesive digital presence across multiple platforms, ensuring your personal brand is consistent and impactful."
    },
    {
      icon: LayoutPanelLeft,
      title: "Visual Identity",
      description: "Professional visual identity including logos, color schemes, and design systems that reflect your personal brand."
    },
    {
      icon: LucideButton,
      title: "Brand Messaging",
      description: "Clear, consistent messaging that communicates your unique value proposition and resonates with your audience."
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description: "Search engine optimization to increase your online visibility and help the right audience find you."
    },
    {
      icon: MessagesSquare,
      title: "Communication Training",
      description: "Guidance on effectively communicating your personal brand through speaking, writing, and presentations."
    },
    {
      icon: LineChart,
      title: "Analytics & Reporting",
      description: "Data-driven insights to measure the performance of your personal brand and inform ongoing optimization."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Strategies for building and engaging a community around your personal brand and professional expertise."
    }
  ];

  return (
    <PageTransition>
      <section className="pt-24 relative">
        <div className="absolute inset-0 -z-10 h-[50vh] bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="section-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="subheading mb-4 text-primary"
            >
              My Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="heading-1 mb-6"
            >
              Personal Branding Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-muted-foreground text-lg"
            >
              Comprehensive services to build and enhance your personal brand.
            </motion.p>
          </div>

          {/* Core Services */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="heading-2 mb-6"
              >
                Core Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-muted-foreground text-lg max-w-3xl mx-auto"
              >
                My primary offerings that form the foundation of my personal branding approach.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary text-lg leading-tight">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="heading-2 mb-6"
              >
                Additional Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-muted-foreground text-lg max-w-3xl mx-auto"
              >
                Complementary services to enhance and expand your personal brand.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index}
                />
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="heading-2 mb-6"
              >
                My Process
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-muted-foreground text-lg max-w-3xl mx-auto"
              >
                A structured approach to developing and implementing your personal brand.
              </motion.p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Line connecting steps */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5"></div>

              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 mb-12"
              >
                <div className="md:text-right md:pr-8">
                  <h3 className="text-xl font-bold mb-2">Discovery & Analysis</h3>
                  <p className="text-muted-foreground">
                    In-depth exploration of your background, goals, and target audience to establish the foundation of your personal brand.
                  </p>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center z-10 md:col-start-2">
                  <span className="text-primary font-bold">1</span>
                </div>
                
                <div className="col-span-2 md:col-span-1"></div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 mb-12"
              >
                <div className="md:col-start-3 md:col-span-1">
                  <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
                  <p className="text-muted-foreground">
                    Creation of a comprehensive strategy that defines your brand positioning, messaging, visual identity, and platform approach.
                  </p>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center z-10 md:col-start-2">
                  <span className="text-primary font-bold">2</span>
                </div>
                
                <div className="col-span-2 md:col-span-1"></div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 mb-12"
              >
                <div className="md:text-right md:pr-8">
                  <h3 className="text-xl font-bold mb-2">Implementation</h3>
                  <p className="text-muted-foreground">
                    Execution of the strategy through app development, content creation, and platform optimization to build your personal brand.
                  </p>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center z-10 md:col-start-2">
                  <span className="text-primary font-bold">3</span>
                </div>
                
                <div className="col-span-2 md:col-span-1"></div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="relative grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8"
              >
                <div className="md:col-start-3 md:col-span-1">
                  <h3 className="text-xl font-bold mb-2">Refinement & Growth</h3>
                  <p className="text-muted-foreground">
                    Ongoing optimization and expansion of your personal brand based on performance data and evolving professional goals.
                  </p>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center z-10 md:col-start-2">
                  <span className="text-primary font-bold">4</span>
                </div>
                
                <div className="col-span-2 md:col-start-1 md:col-span-1"></div>
              </motion.div>
            </div>
          </div>

          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="heading-3 mb-6"
            >
              Ready to Elevate Your Personal Brand?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how my services can help you achieve your professional goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button asChild size="lg" className="rounded-md">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
