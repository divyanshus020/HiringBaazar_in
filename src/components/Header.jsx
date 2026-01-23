import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/assets/IMG_2824.PNG";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img
              src={Logo}
              alt="HiringBazaar Logo"
              className="w-38 md:w-38 h-12 md:h-16 object-contain flex-shrink-0"
            />
          </Link>

          {/* Desktop Navigation - Right Aligned */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#home"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>
            <div className="relative group">
              <button
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <a
                  href="https://campushb.hiringbazaar.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-t-lg"
                >
                  Campus HB
                </a>
                <a
                  href="https://Hiring Bazaar Ai.hiringbazaar.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  Hiring Bazaar Ai
                </a>
                <a
                  href="https://www.partnershb.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-b-lg"
                >
                  PartnerSHB
                </a>
              </div>
            </div>
            <a
              href="/#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <Link
              to="/pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <a
              href="/#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-border/50 pt-4">
            <a
              href="/#home"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <div>
              <button
                onClick={() => setIsProductOpen(!isProductOpen)}
                className="w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center justify-between"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductOpen ? "rotate-180" : ""}`} />
              </button>
              {isProductOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <a
                    href="https://campushb.hiringbazaar.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Campus HB
                  </a>
                  <a
                    href="https://hirespark.hiringbazaar.in/hr/login"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hiring Bazaar Ai
                  </a>
                  <a
                    href="https://www.partnershb.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PartnerSHB
                  </a>
                </div>
              )}
            </div>
            <a
              href="/#about"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <Link
              to="/pricing"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <a
              href="/#contact"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
