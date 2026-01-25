import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Zap, Mail, MapPin, User, MessageSquare } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xeeqqnne");

  if (state.succeeded) {
    return (
      <div className="text-center py-12 bg-white/80 backdrop-blur-xl rounded-3xl border border-emerald-200/50 shadow-2xl">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <p className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent mb-2">
          Thanks for joining!
        </p>
        <p className="text-base text-gray-600">
          We'll be in touch soon with exclusive opportunities.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-6">
      {/* First Name & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group flex flex-col">
          <label htmlFor="firstName" className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <User className="w-4 h-4 text-emerald-600" />
            First Name *
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300"
            placeholder="John"
          />
          <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
        </div>

        <div className="group flex flex-col">
          <label htmlFor="lastName" className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <User className="w-4 h-4 text-emerald-600" />
            Last Name *
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required
            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300"
            placeholder="Doe"
          />
          <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
        </div>
      </div>

      {/* Email & City Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <Mail className="w-4 h-4 text-emerald-600" />
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300"
            placeholder="john@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="group flex flex-col">
          <label htmlFor="location" className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-600" />
            City & Location *
          </label>
          <input
            id="location"
            type="text"
            name="location"
            required
            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300"
            placeholder="New York, USA"
          />
          <ValidationError prefix="Location" field="location" errors={state.errors} />
        </div>
      </div>

      {/* Why are you interested */}
      <div className="group flex flex-col">
        <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          Why are you interested? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 resize-none transition-all duration-300 hover:border-emerald-300"
          placeholder="Tell us why you're interested in Hiring Bazaar..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={state.submitting}
        className="group w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-700 hover:via-teal-700 hover:to-emerald-700 text-white rounded-2xl px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        <span className="relative z-10 flex items-center justify-center">
          {state.submitting ? (
            <>
              <Zap className="mr-2 w-5 h-5 animate-pulse" />
              Sending...
            </>
          ) : (
            <>
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </span>
      </Button>

      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
        <Shield className="w-4 h-4 text-emerald-600" />
        <p>Your information is secure and will only be used to contact you about Hiring Bazaar.</p>
      </div>
    </form>
  );
}

const CTASection = () => {
  return (
    <section id="cta" className="relative py-20 md:py-32 overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 border-4 border-emerald-300/30 rounded-full animate-float" />
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-10 w-8 h-8 bg-teal-400/30 rounded-full animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-full shadow-lg mb-8">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
              Join 500+ Companies
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Ready to Transform Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                Hiring Process
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 400 12" preserveAspectRatio="none">
                <path
                  d="M0,7 Q100,3 200,7 T400,7"
                  stroke="url(#gradient-cta)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient-cta" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(152, 45%, 42%)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(152, 45%, 42%)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            ?
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed font-medium">
            Join hundreds of companies that have revolutionized their talent acquisition with{" "}
            <span className="text-emerald-700 font-semibold">Hiring Bazaar</span>
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200/50 shadow-md">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-gray-700">60% Faster Hiring</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200/50 shadow-md">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-gray-700">Pre-vetted Talent</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200/50 shadow-md">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-gray-700">AI-Powered Matching</span>
            </div>
          </div>
        </div>

        {/* Glassmorphic Form Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[3rem] blur-2xl opacity-20" />

          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
