import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-semibold">
                <span className="text-primary">Hiring</span>
                <span className="text-primary-foreground">Bazaar</span>
              </span>
            </div>
            <p className="text-footer-foreground/80 mb-6 max-w-sm">
              Revolutionizing Talent Acquisition by AI and Strategic Collaboration. Making hiring simple, fast, and transparent.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@hiringbazaar.com" className="flex items-center gap-3 text-footer-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
                hello@hiringbazaar.com
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-3 text-footer-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5" />
                +91 123 456 7890
              </a>
              <div className="flex items-center gap-3 text-footer-foreground/80">
                <MapPin className="w-5 h-5" />
                TIDES, IIT Roorkee, Uttarakhand
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">AI Hiring Assistant</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">Agency Network</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">Campus Hiring</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">Press Kit</a></li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">API Reference</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">Case Studies</a></li>
            </ul>
            <h4 className="text-primary-foreground font-semibold mb-4 mt-8">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-primary-foreground transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-footer-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-footer-foreground/60 text-sm">
            © 2024 Hiring Bazaar (LyteHire.ai). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-footer-foreground/20 flex items-center justify-center hover:bg-footer-foreground/30 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-footer-foreground/20 flex items-center justify-center hover:bg-footer-foreground/30 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-footer-foreground/20 flex items-center justify-center hover:bg-footer-foreground/30 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
