
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Linkedin, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "(+91) 7719613078",
      href: "tel:+917719613078"
    },
    {
      icon: Mail,
      title: "Email",
      value: "mb@mohalbansal",
      href: "mailto:mb@mohalbansal"
    },
    {
      icon: X,
      title: "X (Twitter)",
      value: "@MohalBansal",
      href: "https://x.com/MohalBansal"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@mohalbansal45",
      href: "https://www.instagram.com/mohalbansal45/"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "mohal-bansal",
      href: "https://www.linkedin.com/in/mohal-bansal/"
    }
  ];

  return (
    <PageTransition>
      <section className="pt-24 relative">
        <div className="absolute inset-0 -z-10 h-[30vh] bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="section-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="subheading mb-4 text-primary"
            >
              Get in Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="heading-1 mb-6"
            >
              Let's Connect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-muted-foreground text-lg"
            >
              Have a question or interested in working together? Reach out through any of these channels.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-3 mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                opportunities, and ways to help elevate your personal brand.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                    className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="p-3 rounded-full bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-3 mb-6">Send Me a Message</h2>
              <p className="text-muted-foreground mb-8">
                Have a specific question or project in mind? Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card/50 backdrop-blur-sm border-border"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card/50 backdrop-blur-sm border-border"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-card/50 backdrop-blur-sm border-border"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-32 bg-card/50 backdrop-blur-sm border-border"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-md">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </motion.div>
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
                Frequently Asked Questions
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.5 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3">What is your typical process?</h3>
                <p className="text-muted-foreground">
                  My process typically includes discovery, strategy development, implementation, and ongoing refinement. 
                  I tailor this approach based on your specific needs and goals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3">How long does a project typically take?</h3>
                <p className="text-muted-foreground">
                  Project timelines vary based on scope and complexity. A basic personal branding project might take 4-6 weeks, 
                  while more comprehensive initiatives may extend to 3-4 months.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3">Do you work with clients internationally?</h3>
                <p className="text-muted-foreground">
                  Yes, I work with clients globally. With digital collaboration tools, timezone coordination, 
                  and regular communication, distance is not a barrier to successful projects.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3">What industries do you specialize in?</h3>
                <p className="text-muted-foreground">
                  While I work with clients across various industries, I have particular expertise in technology, 
                  professional services, creative fields, and entrepreneurship.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
