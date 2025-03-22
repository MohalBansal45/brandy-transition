
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
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
              About Me
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="heading-1 mb-6"
            >
              My Journey & Expertise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-muted-foreground text-lg"
            >
              Discover my background, skills, and approach to personal branding.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl -z-10" />
              <img
                src="/lovable-uploads/09f32019-7804-4b6c-b3ac-c38600601d24.png"
                alt="Mohal Bansal"
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h2 className="heading-3 mb-6">Who I Am</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                I'm Mohal Bansal, a personal branding specialist with a passion for helping professionals
                and entrepreneurs develop their unique identity in the digital landscape.
              </p>
              <p className="mb-6 text-lg text-muted-foreground">
                With expertise in strategic consulting, app development, and content creation, I provide
                comprehensive solutions that help my clients stand out in their industries and connect
                with their target audiences.
              </p>
              <p className="text-lg text-muted-foreground">
                My approach combines analytical thinking with creative strategies to build memorable,
                impactful personal brands that drive professional success.
              </p>
            </motion.div>
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="heading-2 mb-6"
              >
                My Expertise
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-muted-foreground text-lg max-w-3xl mx-auto"
              >
                Here are the key areas where I can help elevate your personal brand.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.5 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm"
              >
                <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Consulting</h3>
                <p className="text-muted-foreground">
                  I develop tailored strategies that align with your professional goals,
                  values, and target audience to create a compelling personal brand that
                  differentiates you in your industry.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm"
              >
                <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Technical Development</h3>
                <p className="text-muted-foreground">
                  With advanced skills in app development and digital platform creation,
                  I build custom solutions that showcase your expertise and provide value
                  to your audience across multiple channels.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm"
              >
                <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Content Strategy</h3>
                <p className="text-muted-foreground">
                  I create compelling content strategies that tell your story, communicate
                  your value proposition, and engage your audience through consistent,
                  high-quality content across all your platforms.
                </p>
              </motion.div>
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="heading-2 mb-6"
              >
                My Approach
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-muted-foreground text-lg max-w-3xl mx-auto"
              >
                Here's how I work with clients to create successful personal brands.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Discovery</h3>
                  <p className="text-muted-foreground">
                    I begin with an in-depth exploration of your professional background, goals, values,
                    and target audience to understand the foundation of your personal brand.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
                  <p className="text-muted-foreground">
                    Based on the discovery insights, I create a tailored strategy that outlines your brand
                    positioning, messaging, visual identity, and platform approach.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Implementation</h3>
                  <p className="text-muted-foreground">
                    I execute the strategy through app development, content creation, and platform optimization,
                    ensuring all elements of your personal brand work together cohesively.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
                  <p className="text-muted-foreground">
                    I provide ongoing support and refinement based on performance data and evolving goals,
                    ensuring your personal brand continues to grow and adapt over time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
