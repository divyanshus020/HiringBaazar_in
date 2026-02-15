import { Play } from "lucide-react";

const WhyWeBuiltSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#F7F6F3]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-12 md:p-20 shadow-sm border border-gray-100/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#2D4A3E] font-serif">
              Why We Built HiringBazaar
            </h2>

            <div className="relative aspect-[2/1] max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-lg mb-10 group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1522071823991-b9671f903f79?auto=format&fit=crop&q=80&w=2000"
                alt="HiringBazaar Team"
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#2D4A3E] hover:bg-[#233B31] rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl text-[#6B7C75] max-w-2xl mx-auto leading-relaxed">
              Hiring today is expensive, fragmented, and slow. We built HiringBazaar to fix this using AI + verified human networks.
            </p>
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

export default WhyWeBuiltSection;
