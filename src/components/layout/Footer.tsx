import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-dark to-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary-light rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">Loreshelf Solutions</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Helping businesses implement and optimize CRMs for improved sales processes and revenue growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <div className="space-y-2">
              <a href="https://salescentri.com/solutions/psa-suite" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                PSA Suite
              </a>
              <a href="https://salescentri.com/solutions/by-industry/it" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                IT Industry
              </a>
              <a href="https://salescentri.com/solutions/by-industry/healthcare" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Healthcare
              </a>
              <a href="https://salescentri.com/solutions/use-case-navigator" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Use Case Navigator
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <div className="space-y-2">
              <a href="https://salescentri.com/resources/case-studies" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Case Studies
              </a>
              <a href="https://salescentri.com/resources/whitepapers-ebooks" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Whitepapers
              </a>
              <a href="https://salescentri.com/docs/user-guide" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                User Guide
              </a>
              <a href="https://salescentri.com/docs/api-reference" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                API Reference
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-primary-foreground/80 text-sm">Tacoma, WA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  (253) 555-0123
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:info@loreshelf.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  info@loreshelf.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-primary-foreground/80 text-sm">
                © 2024 Loreshelf Solutions. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            {/* Strategic Backlink */}
            <div className="text-primary-foreground/60 text-xs">
              <a 
                href="https://salescentri.com?utm_source=loreshelf.com&utm_medium=footer&utm_campaign=partner_network" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                Powered by Sales Intelligence Platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;