import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Zap, Star, CreditCard, Users } from "lucide-react";

const Pricing = () => {
  const [customResumes, setCustomResumes] = useState(1700);
  const [customInterviews, setCustomInterviews] = useState(57);

  const plans = [

    {
      id: "starter",
      name: "Starter",
      candidates: 200,
      price: 499,
      description: "Perfect for small teams just getting started",
      features: [
        "200 Resume analysis credits",
        "10 AI Interviews included",
        "Email support",
      ],
      icon: Zap,
      popular: false,
    },
    {
      id: "growth",
      name: "Growth",
      candidates: 500,
      price: 799,
      description: "For growing hiring teams scaling fast",
      features: [
        "500 Resume analysis credits",
        "25 AI Interviews included",
        "Multiple recruiter seats",
        "Priority support",
      ],
      icon: Star,
      popular: true,
    },
    {
      id: "custom_bundle",
      name: "Custom Bundle",
      candidates: "Custom",
      price: null,
      description: "Build exactly what you need, unit by unit",
      features: [],
      icon: CreditCard,
      popular: false,
      isCustomBundle: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      candidates: "Unlimited",
      price: null,
      description: "For large-scale hiring operations",
      features: [
        "Unlimited Resumes",
        "1,000+ AI Interviews",
        "Dedicated account manager",
        "Custom integrations",
      ],
      icon: Users,
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "What happens after I click Get Started?",
      answer:
        "You can connect the buttons to your billing app, signup flow, or contact form depending on the plan you want users to choose.",
    },
    {
      question: "Can I start small and upgrade later?",
      answer:
        "Yes. Teams can begin with Starter or Growth and move to custom or enterprise plans as hiring volume increases.",
    },
    {
      question: "How does custom bundle pricing work?",
      answer:
        "Custom bundle pricing is calculated based on the number of resumes and AI interviews you choose.",
    },
    {
      question: "Do you offer enterprise pricing?",
      answer:
        "Yes. Enterprise is designed for large-scale hiring teams that need unlimited workflows, dedicated support, and integrations.",
    },
  ];

  const openContact = () => {
    window.location.href = "/#contact";
  };

  const openBilling = () => {
    window.location.href = "https://hiringai.hiringbazaar.in/dashboard/billing";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald/10 rounded-full blur-[100px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-0"
      >
        <section className="pt-28 pb-12 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 font-serif"
            >
              Flexible pricing for <span className="text-gradient">every hiring stage</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Start small, scale fast, or build your own bundle. Choose the plan
              that fits your hiring workflow.
            </motion.p>
          </div>
        </section>

        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-[1450px]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5"
            >
              {plans.map((plan) => {
                const Icon = plan.icon;
                const isTest = plan.isTest;
                const isCustomBundle = plan.isCustomBundle;

                return (
                  <motion.div
                    key={plan.id}
                    variants={itemVariants}
                    className={`relative flex flex-col rounded-[28px] border bg-white shadow-sm transition-all duration-200 hover:shadow-md ${isTest
                      ? "border-dashed border-yellow-400 bg-yellow-50/30"
                      : plan.popular
                        ? "border-primary/50 ring-1 ring-primary/20"
                        : "border-border"
                      }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                        <span className="bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-xs font-bold shadow uppercase tracking-wide">
                          Popular
                        </span>
                      </div>
                    )}

                    {isTest && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                        <span className="bg-yellow-400 text-yellow-900 px-5 py-1.5 rounded-full text-xs font-bold shadow uppercase tracking-wide">
                          Test Only
                        </span>
                      </div>
                    )}

                    <div className="p-8 flex flex-col h-full">
                      <div
                        className={`p-3 rounded-2xl w-fit mb-5 ${isTest ? "bg-yellow-100" : "bg-primary/10"
                          }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${isTest ? "text-yellow-600" : "text-primary"
                            }`}
                        />
                      </div>

                      <h2 className="text-[22px] leading-tight font-semibold mb-4">
                        {plan.name}
                      </h2>

                      <div className="mb-4 min-h-[88px]">
                        {isCustomBundle ? (
                          <div className="text-[26px] font-bold leading-tight">
                            Pay per
                            <br />
                            unit
                          </div>
                        ) : plan.price !== null ? (
                          <div className="flex items-baseline gap-1">
                            <span className="text-muted-foreground text-2xl">₹</span>
                            <span className="text-5xl font-bold leading-none">
                              {plan.price}
                            </span>
                          </div>
                        ) : (
                          <div className="text-[26px] font-bold leading-tight">
                            Contact
                            <br />
                            Sales
                          </div>
                        )}
                      </div>

                      <p className="text-muted-foreground text-[15px] leading-8 mb-8 min-h-[92px]">
                        {plan.description}
                      </p>

                      {isCustomBundle ? (
                        <div className="flex-1 flex flex-col">
                          <p className="text-xs text-muted-foreground mb-6 font-medium text-center bg-muted/50 py-2 rounded-2xl">
                            ₹100 per 100 resumes <span className="px-1">•</span> ₹30 per AI interview
                          </p>

                          <div className="space-y-6">
                            <div>
                              <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                                Resumes to add
                              </label>
                              <div className="flex items-center gap-3">
                                <input
                                  type="number"
                                  min="0"
                                  value={customResumes}
                                  onChange={(e) => setCustomResumes(Number(e.target.value))}
                                  className="flex h-12 w-full rounded-full border border-input bg-transparent px-4 py-2 text-base text-center focus:outline-none focus:ring-1 focus:ring-primary font-medium"
                                />
                                <span className="text-base font-semibold whitespace-nowrap">
                                  ₹{(customResumes * 1).toLocaleString()}
                                </span>
                              </div>
                            </div>

                            <div>
                              <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                                Interviews to add
                              </label>
                              <div className="flex items-center gap-3">
                                <input
                                  type="number"
                                  min="0"
                                  value={customInterviews}
                                  onChange={(e) => setCustomInterviews(Number(e.target.value))}
                                  className="flex h-12 w-full rounded-full border border-input bg-transparent px-4 py-2 text-base text-center focus:outline-none focus:ring-1 focus:ring-primary font-medium"
                                />
                                <span className="text-base font-semibold whitespace-nowrap">
                                  ₹{(customInterviews * 30).toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 border-t bg-primary/5 -mx-8 px-8 py-6">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-2xl">Total</span>
                              <span className="text-4xl font-bold text-primary">
                                ₹{((customResumes * 1) + (customInterviews * 30)).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col h-full flex-1">
                          <div className="flex items-center gap-2 text-primary font-semibold mb-6 text-[18px]">
                            <Users className="h-5 w-5" />
                            <span>{plan.candidates} Candidates</span>
                          </div>

                          <ul className="space-y-5 flex-1">
                            {plan.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-3 text-[16px] text-muted-foreground"
                              >
                                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="pt-8">
                        <Button
                          onClick={
                            plan.id === "enterprise" ? openContact : openBilling
                          }
                          variant={plan.popular ? "default" : "outline"}
                          className="w-full h-14 rounded-full font-semibold text-xl"
                        >
                          {plan.id === "enterprise" ? "Contact Sales" : "Get Started"}
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about our plans and pricing.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border-none rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Pricing;










// import { motion } from "framer-motion";
// import { Check, Info, HelpCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Header from "@/components/Header";
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion";

// const Pricing = () => {
//     const basicFeatures = [
//         "Multiple job boards pay only for what u choose",
//         "Free AI powered ATS",
//         "Free email engagement",
//         "Special network of college and training centres",
//         "Whatsapp engagement",
//         "AI calling agent",
//         "AI video interviews"
//     ];

//     const aiEquippedFeatures = [
//         "All features of basic*",
//         "Special network of placement agencies",
//         "HB perfect match",
//         "Replacement guarantee",
//         "From sourcing from special network to engaging, to initial rounds of interview, to their background verification all will be done by HB."
//     ];

//     const faqs = [
//         {
//             question: "What is the Free AI powered ATS?",
//             answer: "Our Applicant Tracking System uses AI to help you manage candidates, screen resumes, and track the hiring process efficiently."
//         },
//         {
//             question: "How does the AI calling agent work?",
//             answer: "The AI calling agent can perform initial screening calls with candidates to gather basic information and assess their qualifications."
//         },
//         {
//             question: "What is 'HB perfect match'?",
//             answer: "HB perfect match is our proprietary AI algorithm that matches candidates to your job requirements with high precision."
//         },
//         {
//             question: "Can I upgrade or downgrade my plan at any time?",
//             answer: "Yes, you can switch between plans or customize your basic features as your hiring needs change."
//         }
//     ];

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.1
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1
//         }
//     };

//     return (
//         <div className="min-h-screen bg-background relative overflow-hidden">
//             {/* Animated Background Blobs */}
//             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
//                 <motion.div
//                     className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"
//                     animate={{
//                         x: [0, 50, 0],
//                         y: [0, 30, 0],
//                     }}
//                     transition={{
//                         duration: 10,
//                         repeat: Infinity,
//                         ease: "easeInOut"
//                     }}
//                 />
//                 <motion.div
//                     className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald/10 rounded-full blur-[100px]"
//                     animate={{
//                         x: [0, -50, 0],
//                         y: [0, -30, 0],
//                     }}
//                     transition={{
//                         duration: 12,
//                         repeat: Infinity,
//                         ease: "easeInOut"
//                     }}
//                 />
//             </div>

//             <Header />

//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="relative z-0"
//             >
//                 {/* Hero Section */}
//                 <section className="pt-32 pb-16 px-4">
//                     <div className="container mx-auto max-w-6xl text-center">
//                         <motion.h1
//                             initial={{ y: 20, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{ delay: 0.2 }}
//                             className="text-4xl md:text-6xl font-bold mb-6 font-serif"
//                         >
//                             The only partner your <span className="text-gradient">hiring needs</span>
//                         </motion.h1>
//                         <motion.p
//                             initial={{ y: 20, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{ delay: 0.3 }}
//                             className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
//                         >
//                             Our mission is to fix the broken hiring pipeline by uniting AI precision with human expertise,
//                             so every company can hire with confidence
//                         </motion.p>
//                     </div>
//                 </section>

//                 {/* Pricing Cards Section */}
//                 <section className="pb-20 px-4">
//                     <div className="container mx-auto max-w-6xl">
//                         <motion.div
//                             variants={containerVariants}
//                             initial="hidden"
//                             animate="visible"
//                             className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//                         >
//                             {/* Basic Plan */}
//                             <motion.div
//                                 variants={itemVariants}
//                                 className="relative group"
//                             >
//                                 <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
//                                 <div className="relative bg-card/60 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 h-full flex flex-col shadow-2xl overflow-hidden">
//                                     {/* Card Header */}
//                                     <div className="mb-8">
//                                         <div className="flex items-center gap-2 mb-4">
//                                             <div className="p-2 rounded-xl bg-primary/10">
//                                                 <Info className="w-5 h-5 text-primary" />
//                                             </div>
//                                             <span className="text-sm font-semibold text-primary uppercase tracking-wider">Entry Level</span>
//                                         </div>
//                                         <h2 className="text-4xl font-bold mb-3 font-serif">Basic Plan</h2>
//                                         <p className="text-muted-foreground leading-relaxed">AI assistant powers your hiring with essential tools for growth.</p>
//                                     </div>

//                                     {/* Features List */}
//                                     <div className="flex-grow space-y-5">
//                                         <p className="text-sm font-medium text-foreground/70 mb-4">What's included:</p>
//                                         <ul className="space-y-4">
//                                             {basicFeatures.map((feature, index) => (
//                                                 <motion.li
//                                                     key={index}
//                                                     initial={{ x: -10, opacity: 0 }}
//                                                     whileInView={{ x: 0, opacity: 1 }}
//                                                     transition={{ delay: index * 0.05 }}
//                                                     className="flex items-start gap-3 group/item"
//                                                 >
//                                                     <div className="mt-1 flex-shrink-0">
//                                                         <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
//                                                             <Check className="w-3 h-3 text-primary" />
//                                                         </div>
//                                                     </div>
//                                                     <span className="text-foreground/80 text-[15px] leading-relaxed group-hover/item:text-foreground transition-colors">{feature}</span>
//                                                 </motion.li>
//                                             ))}
//                                         </ul>
//                                     </div>

//                                     {/* CTA */}
//                                     <div className="mt-10">
//                                         <Button
//                                             className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-xl text-lg font-medium transition-all duration-300"
//                                             onClick={() => window.location.href = '/#contact'}
//                                         >
//                                             Get Started
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </motion.div>

//                             {/* AI Equipped Expert HRs Plan */}
//                             <motion.div
//                                 variants={itemVariants}
//                                 className="relative group"
//                             >
//                                 <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
//                                 <div className="relative bg-card border-2 border-primary/30 rounded-3xl p-8 h-full flex flex-col shadow-2xl overflow-hidden">
//                                     <div className="absolute top-0 right-0 p-6 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none">
//                                         <HelpCircle className="w-24 h-24 text-primary/5 absolute top-[-20px] right-[-20px] -rotate-12" />
//                                     </div>

//                                     <div className="absolute top-4 right-8">
//                                         <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-primary/20 uppercase tracking-widest">
//                                             Most Popular
//                                         </span>
//                                     </div>

//                                     {/* Card Header */}
//                                     <div className="mb-8 mt-4">
//                                         <div className="flex items-center gap-2 mb-4">
//                                             <div className="p-2 rounded-xl bg-primary/20">
//                                                 <Check className="w-5 h-5 text-primary" />
//                                             </div>
//                                             <span className="text-sm font-semibold text-primary uppercase tracking-wider">Full Service</span>
//                                         </div>
//                                         <h2 className="text-3xl font-bold mb-3 font-serif bg-gradient-to-r from-primary to-emerald bg-clip-text text-transparent">
//                                             AI EQUIPPED EXPERT HRs
//                                         </h2>
//                                         <p className="text-muted-foreground leading-relaxed italic">
//                                             "aap bas job post karo baaki saara kaam hamare ai equipped expert hr dekh lenge"
//                                         </p>
//                                     </div>

//                                     {/* Features List */}
//                                     <div className="flex-grow space-y-5">
//                                         <p className="text-sm font-medium text-foreground/70 mb-4">Everything in Basic, plus:</p>
//                                         <ul className="space-y-4">
//                                             {aiEquippedFeatures.map((feature, index) => (
//                                                 <motion.li
//                                                     key={index}
//                                                     initial={{ x: -10, opacity: 0 }}
//                                                     whileInView={{ x: 0, opacity: 1 }}
//                                                     transition={{ delay: index * 0.1 }}
//                                                     className="flex items-start gap-3 group/item"
//                                                 >
//                                                     <div className="mt-1 flex-shrink-0">
//                                                         <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover/item:bg-primary/30 transition-colors">
//                                                             <Check className="w-3 h-3 text-primary" />
//                                                         </div>
//                                                     </div>
//                                                     <span className="text-foreground font-medium text-[15px] leading-relaxed group-hover/item:text-primary transition-colors">{feature}</span>
//                                                 </motion.li>
//                                             ))}
//                                         </ul>
//                                     </div>

//                                     {/* CTA */}
//                                     <div className="mt-10">
//                                         <Button
//                                             className="w-full bg-gradient-to-r from-primary to-emerald hover:shadow-xl hover:shadow-primary/20 text-primary-foreground h-12 rounded-xl text-lg font-bold transition-all duration-300 transform group-hover:scale-[1.02]"
//                                             onClick={() => window.location.href = '/#contact'}
//                                         >
//                                             Contact Sales
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </motion.div>
//                     </div>
//                 </section>

//                 {/* FAQ Section */}
//                 <section className="py-20 px-4 bg-muted/30">
//                     <div className="container mx-auto max-w-3xl">
//                         <div className="text-center mb-12">
//                             <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Frequently Asked Questions</h2>
//                             <p className="text-muted-foreground">Everything you need to know about our plans and services.</p>
//                         </div>

//                         <Accordion type="single" collapsible className="w-full space-y-4">
//                             {faqs.map((faq, index) => (
//                                 <AccordionItem key={index} value={`item-${index}`} className="bg-card border-none rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow">
//                                     <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
//                                         {faq.question}
//                                     </AccordionTrigger>
//                                     <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
//                                         {faq.answer}
//                                     </AccordionContent>
//                                 </AccordionItem>
//                             ))}
//                         </Accordion>
//                     </div>
//                 </section>
//             </motion.div>
//         </div>
//     );
// };

// export default Pricing;

