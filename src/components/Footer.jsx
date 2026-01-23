import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import Logo from "@/assets/IMG_2824.PNG";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary-foreground">
                Hiring<span className="text-primary">Bazaar</span>
              </h2>
            </div>
            <p className="text-sm text-footer-foreground/80 mb-6 leading-relaxed">
              Revolutionizing Talent Acquisition through AI and Strategic Collaboration.
              Simplifying hiring so u can hire with confidence
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/hiring-bazaar/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-primary-foreground font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-footer-foreground/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>

              <li>
                <a href="/pricing" className="text-sm text-footer-foreground/80 hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-primary-foreground font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://campushb.hiringbazaar.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-footer-foreground/80 hover:text-primary transition-colors"
                >
                  Campus HB
                </a>
              </li>
              <li>
                <a
                  href="https://hirespark.hiringbazaar.in/hr/login"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-footer-foreground/80 hover:text-primary transition-colors"
                >
                  Hiring Bazaar Ai
                </a>
              </li>
              <li>
                <a
                  href="https://www.partnershb.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-footer-foreground/80 hover:text-primary transition-colors"
                >
                  PartnerSHB
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-primary-foreground font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:support@hiringbazaar.in"
                  className="flex items-start gap-3 text-sm text-footer-foreground/80 hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-primary" />
                  <span>support@hiringbazaar.in</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919145938795"
                  className="flex items-start gap-3 text-sm text-footer-foreground/80 hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-primary" />
                  <span>+91 91459 38795</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-footer-foreground/80">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>TIDES, IIT Roorkee, Uttarakhand</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-footer-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-footer-foreground/60 text-sm text-center md:text-left">
              © 2026 Hiring Bazaar. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy-policy" className="text-sm text-footer-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-sm text-footer-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
