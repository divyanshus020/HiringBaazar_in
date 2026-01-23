import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Pricing = () => {
    const basicFeatures = [
        "Multiple job boards pay only for what u choose",
        "Free AI powered ATS",
        "Free email engagement",
        "Special network of college and training centres",
        "Whatsapp engagement",
        "AI calling agent",
        "AI video interviews"
    ];

    const aiEquippedFeatures = [
        "All features of basic*",
        "Special network of placement agencies",
        "HB perfect match",
        "From sourcing from special network to engaging, to initial rounds of interview, to their background verification all will be done by HB."
    ];

    return (
        <motion.div
            className="min-h-screen bg-background"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4">
                <div className="container mx-auto max-w-6xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        The only partner your hiring needs
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Our mission is to fix the broken hiring pipeline by uniting AI precision with human expertise,
                        so every company can hire with confidence
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Basic Plan */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                            <div className="relative bg-card border border-border rounded-2xl p-8 h-full flex flex-col">
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold mb-2">Basic Plan</h2>
                                    <p className="text-muted-foreground text-lg">AI assistant powers your hiring</p>
                                </div>

                                <div className="flex-grow">
                                    <ul className="space-y-4">
                                        {basicFeatures.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0">
                                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                                        <Check className="w-3 h-3 text-primary" />
                                                    </div>
                                                </div>
                                                <span className="text-foreground leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <Button
                                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground"
                                        size="lg"
                                        onClick={() => window.location.href = '/#contact'}
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* AI Equipped Expert HRs Plan */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative bg-card border-2 border-primary/50 rounded-2xl p-8 h-full flex flex-col">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                                        RECOMMENDED
                                    </span>
                                </div>

                                <div className="mb-6 mt-2">
                                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                        AI EQUIPPED EXPERT HRs
                                    </h2>
                                    <p className="text-muted-foreground text-lg">
                                        aap bas job post karo baaki saara kaam hamare ai equipped expert hr dekh lenge
                                    </p>
                                </div>

                                <div className="flex-grow">
                                    <ul className="space-y-4">
                                        {aiEquippedFeatures.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0">
                                                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                                        <Check className="w-3 h-3 text-primary" />
                                                    </div>
                                                </div>
                                                <span className="text-foreground leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <Button
                                        className="w-full bg-gradient-to-r from-primary to-primary/60 hover:from-primary/90 hover:to-primary/50 text-primary-foreground shadow-lg shadow-primary/20"
                                        size="lg"
                                        onClick={() => window.location.href = '/#contact'}
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Pricing;
