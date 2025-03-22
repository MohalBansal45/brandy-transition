
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, className, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.2, duration: 0.5 }}
      className={cn(
        "bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300",
        className
      )}
    >
      <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}
