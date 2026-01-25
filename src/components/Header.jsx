import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Logo from "@/assets/IMG_2824.PNG";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 md:pt-6">
      {/* Floating Navbar Container */}
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white/90 backdrop-blur-xl rounded-full shadow-lg border border-gray-200/50 px-4 md:px-6 py-3 md:py-3.5 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <img
                src={Logo}
                alt="HiringBazaar Logo"
                className="w-32 md:w-36 h-10 md:h-12 object-contain"
              />
            </Link>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
              <a
                href="/#home"
                className="text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 px-4 py-2 rounded-full transition-all duration-300"
              >
                Home
              </a>
              <div className="relative group">
                <button className="text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1">
                  Products
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  <a
                    href="https://campushb.hiringbazaar.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="block px-5 py-3.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all"
                  >
                    Campus HB
                  </a>
                  <a
                    href="https://hirespark.hiringbazaar.in/hr/login"
                    target="_blank"
                    rel="noreferrer"
                    className="block px-5 py-3.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all"
                  >
                    Hiring Bazaar AI
                  </a>
                  <a
                    href="https://www.partnershb.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="block px-5 py-3.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all"
                  >
                    PartnerSHB
                  </a>
                </div>
              </div>
              <a
                href="/#about"
                className="text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 px-4 py-2 rounded-full transition-all duration-300"
              >
                About
              </a>
              <Link
                to="/pricing"
                className="text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 px-4 py-2 rounded-full transition-all duration-300"
              >
                Pricing
              </Link>
              <a
                href="/#contact"
                className="text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 px-4 py-2 rounded-full transition-all duration-300"
              >
                Contact
              </a>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-1">
              <a
                href="/#contact"
                className="text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 px-4 py-2 rounded-full transition-all duration-300"
              >
                Sign in
              </a>
              <a href="#demo-video" className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full px-6 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center">
                See a demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden">
            <nav className="px-6 py-6 space-y-1">
              <a
                href="/#home"
                className="block text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-xl px-4 py-3 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <div>
                <button
                  onClick={() => setIsProductOpen(!isProductOpen)}
                  className="w-full text-left text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-xl px-4 py-3 flex items-center justify-between transition-all"
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProductOpen ? "rotate-180" : ""}`} />
                </button>
                {isProductOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    <a
                      href="https://campushb.hiringbazaar.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="block text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-xl px-4 py-2.5 transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Campus HB
                    </a>
                    <a
                      href="https://hirespark.hiringbazaar.in/hr/login"
                      target="_blank"
                      rel="noreferrer"
                      className="block text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-xl px-4 py-2.5 transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hiring Bazaar AI
                    </a>
                    <a
                      href="https://www.partnershb.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="block text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-xl px-4 py-2.5 transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      PartnerSHB
                    </a>
                  </div>
                )}
              </div>
              <a
                href="/#about"
                className="block text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-xl px-4 py-3 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Link
                to="/pricing"
                className="block text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-xl px-4 py-3 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <a
                href="/#contact"
                className="block text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-xl px-4 py-3 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2 border-t border-gray-200 mt-4">
                <a
                  href="/#contact"
                  className="block text-center text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-xl px-4 py-3 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign in
                </a>
                <a
                  href="#demo-video"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full px-6 py-3 text-sm font-semibold shadow-md text-center flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  See a demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
