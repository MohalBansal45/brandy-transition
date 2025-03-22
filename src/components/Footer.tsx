
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone, X } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold">Mohal Bansal</span>
            </Link>
            <p className="text-muted-foreground max-w-xs mx-auto md:mx-0">
              Personal branding specialist focused on helping professionals develop their unique identity and digital presence.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-6">Connect With Me</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="https://x.com/MohalBansal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors"
                aria-label="X (Twitter)"
              >
                <X className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/mohalbansal45/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohal-bansal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:mb@mohalbansal" 
                className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+917719613078" 
                className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 text-muted-foreground">
              <a href="tel:+917719613078" className="hover:text-primary transition-colors">
                (+91) 7719613078
              </a>
            </p>
            <p className="text-muted-foreground">
              <a href="mailto:mb@mohalbansal" className="hover:text-primary transition-colors">
                mb@mohalbansal
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {year} Mohal Bansal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
