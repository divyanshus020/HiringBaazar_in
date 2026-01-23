import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Hiring Bazaar reduced our time-to-hire by 45%. The AI screening is incredibly accurate and has helped us find better candidates faster than ever before.",
    name: "Kritcure Pharmaceuticals",
    initials: "KP",
    color: "bg-emerald-light text-primary",
  },
  {
    quote:
      "The agency network feature is a game-changer. We now have complete visibility into our recruitment partners' progress and performance.",
    name: "Changepay",
    role: "Partner Network",
    initials: "CP",
    color: "bg-rose-light text-accent",
  },
  {
    quote:
      "Oqlous AI - Campus hiring became very much easier for us",
    name: "Oqlous AI",

    initials: "OA",
    color: "bg-emerald-light text-primary",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-accent text-xs md:text-sm font-medium mb-4 md:mb-6">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium">
            What Our <span className="italic text-accent">Partners</span> Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 border border-border card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-emerald-light mb-4" />

              {/* Quote */}
              <p className="text-xs md:text-sm text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2 md:gap-4">
                <div
                  className={`w-10 md:w-12 h-10 md:h-12 rounded-full ${testimonial.color} flex items-center justify-center font-semibold text-xs md:text-sm flex-shrink-0`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
