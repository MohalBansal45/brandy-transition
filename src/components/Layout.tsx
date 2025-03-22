
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <AnimatePresence mode="wait">
          <div key={location.pathname}>{children}</div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
