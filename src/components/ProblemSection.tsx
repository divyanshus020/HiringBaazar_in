import { Clock, Scale, Eye } from "lucide-react";

const problems = [
  {
    icon: Clock,
    stat: "40%",
    title: "Time Wasted on Manual Screening",
    description: "HR teams spend nearly half their working hours sorting through resumes and scheduling calls manually.",
    color: "text-accent",
    barColor: "bg-accent",
  },
  {
    icon: Scale,
    stat: "3x",
    title: "Inconsistent Hiring Quality",
    description: "Different interviewers, different standards. Your hiring quality varies wildly across teams and roles.",
    color: "text-gold",
    barColor: "bg-gold",
  },
  {
    icon: Eye,
    stat: "0%",
    title: "Agency Partnership Transparency",
    description: "Working with agencies? Good luck tracking progress. No visibility, no accountability, endless delays.",
    color: "text-gold",
    barColor: "bg-gold",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-accent text-sm font-medium mb-6">
            THE PROBLEM
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium">
            Hiring Shouldn't Be This <span className="italic text-accent">Painful</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Every day, HR professionals battle through outdated processes that drain productivity and hurt candidate experience.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl bg-rose-light flex items-center justify-center`}>
                  <problem.icon className={`w-7 h-7 ${problem.color}`} />
                </div>
                <span className={`text-4xl font-serif ${problem.color}`}>{problem.stat}</span>
              </div>
              <div className={`h-1 ${problem.barColor} rounded-full mb-6`} />
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <a href="#" className="text-primary hover:text-primary/80 inline-flex items-center gap-2 font-medium">
            Watch: A Day in the Life of an Overwhelmed HR Manager
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
