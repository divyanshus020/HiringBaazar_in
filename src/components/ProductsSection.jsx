import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#F7F6F3]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#2D4A3E] font-serif">
            See How HiringBazaar Works — Step by Step
          </h2>
          <p className="text-lg text-[#6B7C75] max-w-2xl mx-auto font-medium">
            From posting a role to shortlisting candidates — all in one flow.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-4 md:p-8 shadow-sm border border-gray-100/50">
          <div className="relative rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 mb-12">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
              alt="HiringBazaar Dashboard"
              className="w-full h-auto object-cover opacity-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-[#2D4A3E]/90 backdrop-blur-sm hover:bg-[#2D4A3E] rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer">
                <Play className="w-10 h-10 fill-current ml-1" />
              </div>
            </div>
          </div>

          <div className="text-center pb-8">
            <Button
              asChild
              size="lg"
              className="bg-[#2D4A3E] hover:bg-[#233B31] text-white rounded-xl px-12 py-8 text-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-[#2D4A3E]/20"
            >
              <a href="https://hirespark.hiringbazaar.in/hr/login">
                <span className="flex items-center">
                  Start Hiring for Your Role »
                </span>
              </a>
            </Button>
            <div className="mt-4 flex items-center justify-center gap-6 text-sm font-medium text-[#6B7C75]">
              <span>No credit card</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>Free role posting</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;