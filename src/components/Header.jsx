import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/assets/IMG_2824.PNG";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLink =
    "relative text-sm font-medium text-white px-3 py-2 transition duration-300 hover:text-emerald-700 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-600 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-6">
      <div className="max-w-4xl mx-auto">
        {/* Navbar */}
        <div className="relative bg-emerald-900/25 backdrop-blur-2xl rounded-full border border-emerald-200/80 px-6 py-0 shadow-[0_0_0_1px_rgba(6,78,59,0.6),0_10px_30px_rgba(0,0,0,0.2)]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="HiringBazaar Logo"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-2 mx-4">
              <a
                href="https://hiringai.hiringbazaar.in/"
                target="_blank"
                rel="noreferrer"
                className={navLink}
              >
                Employers
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfc8T3GjQtkx6r4J88qP34iWMsWbYICeIQGNN80KcISQJJ33w/viewform"
                target="_blank"
                rel="noreferrer"
                className={navLink}
              >
                Students
              </a>

              <a
                href="https://partners.hiringbazaar.in"
                target="_blank"
                rel="noreferrer"
                className={navLink}
              >
                Partners
              </a>

              <a href="#contact" className={navLink}>
                Contact
              </a>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://hiringai.hiringbazaar.in/signin"
                className="text-sm font-medium text-white hover:text-emerald-300 transition"
              >
                Log in
              </a>
              <a
                href="https://hiringai.hiringbazaar.in/signup"
                className="bg-emerald-800/40 hover:bg-emerald-700/60 font-medium text-white border border-emerald-500/50 px-5 py-2.5 rounded-full text-sm transition"
              >
                Sign up
              </a>
              <a
                href="#how-it-works"
                className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-emerald-950 px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition flex items-center"
              >
                See Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-emerald-700" />
              ) : (
                <Menu className="w-5 h-5 text-emerald-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 bg-emerald-900/80 backdrop-blur-xl rounded-3xl border border-emerald-800/70 shadow-xl overflow-hidden">
            <nav className="px-6 py-6 space-y-2">
              <a
                href="https://hiringai.hiringbazaar.in/"
                className="block px-4 py-3 rounded-xl hover:bg-white/10 text-white"
              >
                For Employers
              </a>

              <a
                href="https://campushb.hiringbazaar.in"
                className="block px-4 py-3 rounded-xl hover:bg-white/10 text-white"
              >
                For Students
              </a>

              <a
                href="https://partners.hiringbazaar.in"
                className="block px-4 py-3 rounded-xl hover:bg-white/10 text-white"
              >
                For Partners
              </a>

              <a
                href="#contact"
                className="block px-4 py-3 rounded-xl hover:bg-white/10 text-white"
              >
                Contact
              </a>

              <div className="pt-4 border-t border-emerald-700 space-y-3">
                <a
                  href="https://hiringai.hiringbazaar.in/signin"
                  className="block text-center text-white px-6 py-2.5 rounded-full font-semibold border border-emerald-500/50 bg-emerald-800/40"
                >
                  Log in
                </a>
                <a
                  href="https://hiringai.hiringbazaar.in/signup"
                  className="block text-center bg-white/10 text-white px-6 py-2.5 rounded-full font-semibold"
                >
                  Sign up
                </a>
                <a
                  href="#how-it-works"
                  className="block text-center bg-gradient-to-r from-emerald-500 to-teal-500 text-emerald-950 px-6 py-3 rounded-full font-semibold"
                >
                  See Demo
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
