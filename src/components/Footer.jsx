import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Logo from "@/assets/IMG_2824.PNG";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/#about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/#contact" },
    ],
    products: [
      { name: "Campus HB", href: "https://campushb.hiringbazaar.in/", external: true },
      { name: "Hiring Bazaar AI", href: "https://hirespark.hiringbazaar.in/hr/login", external: true },
      { name: "PartnerSHB", href: "https://www.partnershb.in/", external: true },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ]
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/hiring-bazaar/",
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      color: "#0A66C2"
    },
  ];

  return (
    <footer className="relative bg-white text-gray-700 overflow-hidden pt-20 pb-10 border-t border-gray-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald/5 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4 max-w-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <img src={Logo} alt="Hiring Bazaar Logo" className="w-10 h-10 object-contain rounded-lg" />
              <h2 className="text-2xl font-bold font-serif tracking-tight text-gray-900">
                Hiring<span className="text-gradient">Bazaar</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-base leading-relaxed mb-8"
            >
              Revolutionizing Talent Acquisition through AI and Strategic Collaboration.
              We're dedicated to fixing the broken hiring pipeline with precision and empathy.
            </motion.p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6 transition-all duration-300 group-hover:scale-110" style={{ color: social.color }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-6 relative inline-block">
                Company
                <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-primary rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary flex items-center gap-2 group transition-colors"
                    >
                      <span className="w-0 group-hover:w-1.5 h-[1.5px] bg-primary transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-6 relative inline-block">
                Products
                <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-primary rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                {footerLinks.products.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="text-gray-600 hover:text-primary flex items-center gap-2 group transition-colors text-sm"
                    >
                      <span className="w-0 group-hover:w-1.5 h-[1.5px] bg-primary transition-all duration-300"></span>
                      {link.name}
                      {link.external && <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -rotate-45 transition-all" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-gray-900 font-semibold text-lg mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-primary rounded-full"></span>
            </h3>
            <div className="space-y-6">
              <a href="mailto:support@hiringbazaar.in" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Email Us</p>
                  <p className="text-sm text-gray-600 group-hover:text-primary transition-colors">support@hiringbazaar.in</p>
                </div>
              </a>
              <a href="tel:+919145938795" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-all">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Call Us</p>
                  <p className="text-sm text-gray-600 group-hover:text-primary transition-colors">+91 91459 38795</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Location</p>
                  <p className="text-sm text-gray-600 leading-relaxed">TIDES, IIT Roorkee, Uttarakhand</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400 font-medium">
            © {currentYear} <span className="text-gray-500">Hiring Bazaar</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {footerLinks.legal.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs text-gray-400 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-rose-500 mx-1"
            >
              ❤
            </motion.div>
            <span>at IIT Roorkee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

