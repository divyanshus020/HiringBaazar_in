import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Hiring Bazaar reduced our time-to-hire by 45%. The AI screening is incredibly accurate and has helped us find better candidates faster than ever before.",
    name: "Priya Sharma",
    role: "Head of HR, TechCorp India",
    initials: "PS",
    color: "bg-emerald-light text-primary",
  },
  {
    quote: "The agency network feature is a game-changer. We now have complete visibility into our recruitment partners' progress and performance.",
    name: "Rajesh Kumar",
    role: "Talent Acquisition Director, StartupX",
    initials: "RK",
    color: "bg-rose-light text-accent",
  },
  {
    quote: "Our campus placement rate doubled within the first year. The AI matching is remarkably good at connecting students with the right opportunities.",
    name: "Dr. Anita Desai",
    role: "Placement Director, National Institute of Technology",
    initials: "AD",
    color: "bg-emerald-light text-primary",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-accent text-sm font-medium mb-6">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium">
            What Our <span className="italic text-accent">Partners</span> Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-emerald-light mb-4" />

              {/* Quote */}
              <p className="text-muted-foreground mb-8 leading-relaxed">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center font-semibold text-sm`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
