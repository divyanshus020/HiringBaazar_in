import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-emerald-light mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Reimagining Professional Connections</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
            Where Exceptional Talent
            <br />
            <span className="italic text-primary">Meets Opportunity</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Connect with forward-thinking companies, discover roles that align with your vision, and take the next meaningful step in your career journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Explore Opportunities
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border bg-card hover:bg-secondary px-8 py-6 text-lg"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Introduction
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>TIDES IIT Roorkee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>100+ Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>500+ Agencies</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-gold" />
              <div className="w-3 h-3 rounded-full bg-muted" />
            </div>
            
            {/* Tab Navigation */}
            <div className="flex items-center gap-6 px-6 py-4 border-b border-border">
              <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                Dashboard
              </div>
              <span className="text-muted-foreground text-sm">Candidates</span>
              <span className="text-muted-foreground text-sm">Jobs</span>
              <span className="text-muted-foreground text-sm">Analytics</span>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6 space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-primary/30 rounded-full w-3/4" />
                    <div className="h-2 bg-muted rounded-full w-1/2" />
                  </div>
                  <div className={`w-3 h-3 rounded-full ${item === 2 ? 'bg-accent' : 'bg-primary'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
