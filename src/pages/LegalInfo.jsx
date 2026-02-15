import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LegalInfo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            className="min-h-screen bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    {/* Back Button */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    {/* Header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-10 h-10 text-primary" />
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Privacy Policy</h1>
                        </div>
                        <p className="text-lg text-muted-foreground">
                            Hiring Bazaar - Privacy and Data Protection Policy
                        </p>
                        <div className="flex gap-6 mt-4 text-sm text-muted-foreground">
                            <div>
                                <span className="font-semibold">Last Updated:</span> January 2026
                            </div>
                            <div>
                                <span className="font-semibold">Effective Date:</span> January 2026
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        {/* Section 1 */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction and Overview</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Hiring Bazaar ("Platform," "We," "Us," "Our") is committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data in accordance with:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                                <li>Digital Personal Data Protection (DPDP) Act, 2023 (India)</li>
                                <li>Digital Personal Data Protection Rules, 2025</li>
                                <li>Information Technology Act, 2000 (Section 43A and Section 72)</li>
                                <li>International best practices and standards</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mb-3">1.1 Scope</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                This Privacy Policy applies to all Users of the Hiring Bazaar Platform, including:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                                <li>Placement Agencies</li>
                                <li>Corporate Clients/Companies</li>
                                <li>Candidates/Job Seekers</li>
                                <li>Recruiters and HR professionals</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mb-3">1.2 Data Controller and Contact Information</h3>
                            <div className="bg-muted/30 rounded-lg p-6 mb-6">
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-semibold text-foreground mb-2">Data Fiduciary (Data Controller):</p>
                                        <p className="text-muted-foreground">Hiring Bazaar</p>
                                        <p className="text-muted-foreground">Jaipur, Rajasthan, India</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground mb-2">Data Protection Officer:</p>
                                        <p className="text-muted-foreground flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            privacy@hiringbazaar.com
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground mb-2">Grievance Redressal Officer:</p>
                                        <p className="text-muted-foreground flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            grievance@hiringbazaar.com
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-1">Response Time: Within 48 hours</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Data We Collect</h2>

                            <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Information Collection Policy</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                We collect only essential personal data necessary for platform functionality and placement services. Data collection follows the principle of data minimization - we do not collect unnecessary information.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Data Collected From Candidates</h3>
                            <div className="mb-6">
                                <p className="font-semibold text-foreground mb-2">Essential Information:</p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                    <li>Full name and contact details (email, phone number)</li>
                                    <li>Resume/CV and work experience</li>
                                    <li>Educational qualifications and certifications</li>
                                    <li>Preferred job roles and industries</li>
                                    <li>Salary expectations</li>
                                    <li>Availability and location preferences</li>
                                    <li>Years of experience</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <p className="font-semibold text-foreground mb-2">Optional Information:</p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                    <li>LinkedIn profile URL</li>
                                    <li>Portfolio or website links</li>
                                    <li>Additional certifications or skills</li>
                                    <li>Language proficiencies</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <p className="font-semibold text-foreground mb-2">Technical Data:</p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                    <li>Login credentials (securely hashed)</li>
                                    <li>IP address and device information</li>
                                    <li>Browser type and operating system</li>
                                    <li>Platform usage patterns and activity logs</li>
                                </ul>
                            </div>

                            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                                <p className="font-semibold text-foreground mb-2">Sensitive Personal Data (if required):</p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                    <li>Background check information (only with explicit consent)</li>
                                    <li>Reference contact information (only with consent)</li>
                                    <li>Government-issued ID verification (for Premium features, if applicable)</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Legal Basis for Data Processing</h2>

                            <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Lawful Processing Basis (DPDP Act Compliance)</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We process personal data based on the following lawful grounds:
                            </p>

                            <div className="space-y-4 mb-6">
                                <div>
                                    <p className="font-semibold text-foreground mb-2">Consent:</p>
                                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                        <li>Explicit, informed consent obtained before data collection</li>
                                        <li>Separate consent for sensitive data processing</li>
                                        <li>Clear opt-in through checkboxes (never pre-checked)</li>
                                        <li>Easy withdrawal of consent at any time</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold text-foreground mb-2">Contract Fulfillment:</p>
                                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                        <li>Processing necessary to provide placement services</li>
                                        <li>Payment processing and transaction management</li>
                                        <li>Candidate-to-company matching and communication</li>
                                        <li>Service delivery and support</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold text-foreground mb-2">Legal Obligation:</p>
                                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                        <li>Tax and regulatory compliance</li>
                                        <li>Prevention of fraud and illegal activity</li>
                                        <li>Compliance with government requests (with proper legal process)</li>
                                        <li>Data retention as required by law</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 8 - User Rights */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">8. User Rights and Control</h2>

                            <h3 className="text-xl font-semibold text-foreground mb-3">8.1 Data Subject Rights (DPDP Act Compliance)</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                All data subjects have the following rights:
                            </p>

                            <div className="space-y-4 mb-6">
                                <div className="border-l-4 border-primary pl-4">
                                    <p className="font-semibold text-foreground mb-1">Right to Access</p>
                                    <p className="text-muted-foreground text-sm">Request a copy of personal data we hold about you in portable format (CSV, PDF, etc.) within 30 days, free of charge (one request per calendar year).</p>
                                </div>

                                <div className="border-l-4 border-primary pl-4">
                                    <p className="font-semibold text-foreground mb-1">Right to Correction</p>
                                    <p className="text-muted-foreground text-sm">Request correction of inaccurate data or completion of incomplete data within 30 days.</p>
                                </div>

                                <div className="border-l-4 border-primary pl-4">
                                    <p className="font-semibold text-foreground mb-1">Right to Erasure</p>
                                    <p className="text-muted-foreground text-sm">Request deletion of personal data in specified circumstances. Data deleted within 30 days where legally permissible.</p>
                                </div>

                                <div className="border-l-4 border-primary pl-4">
                                    <p className="font-semibold text-foreground mb-1">Right to Withdraw Consent</p>
                                    <p className="text-muted-foreground text-sm">Withdraw consent for data processing at any time with immediate effect.</p>
                                </div>

                                <div className="border-l-4 border-primary pl-4">
                                    <p className="font-semibold text-foreground mb-1">Right to Lodge Complaint</p>
                                    <p className="text-muted-foreground text-sm">File complaint with Data Protection Authority free of charge.</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-foreground mb-3">8.2 Exercising Your Rights</h3>
                            <div className="bg-muted/30 rounded-lg p-6">
                                <p className="font-semibold text-foreground mb-3">How to Request:</p>
                                <p className="text-muted-foreground mb-2">Contact our Data Protection Officer:</p>
                                <p className="text-muted-foreground flex items-center gap-2 mb-4">
                                    <Mail className="w-4 h-4" />
                                    privacy@hiringbazaar.com
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-semibold">Timeline:</span> Acknowledgment within 7 days, Response within 30 days
                                </p>
                            </div>
                        </section>

                        {/* Section 20 - Contact */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">20. Contact and Support</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-muted/30 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">Data Protection Officer</h3>
                                    <p className="text-sm text-muted-foreground mb-3">For Privacy-Related Inquiries:</p>
                                    <div className="space-y-2">
                                        <p className="text-muted-foreground flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            privacy@hiringbazaar.com
                                        </p>
                                        <p className="text-muted-foreground">Jaipur, Rajasthan, India</p>
                                        <p className="text-sm text-muted-foreground mt-2">Response Time: Within 7 business days</p>
                                    </div>
                                </div>

                                <div className="bg-muted/30 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">Grievance Redressal Officer</h3>
                                    <p className="text-sm text-muted-foreground mb-3">For Complaints and Grievances:</p>
                                    <div className="space-y-2">
                                        <p className="text-muted-foreground flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            grievance@hiringbazaar.com
                                        </p>
                                        <p className="text-muted-foreground">Jaipur, Rajasthan, India</p>
                                        <p className="text-sm text-muted-foreground mt-2">Response Time: Within 48 hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted/30 rounded-lg p-6 mt-6">
                                <h3 className="text-lg font-semibold text-foreground mb-3">General Support</h3>
                                <p className="text-muted-foreground flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    support@hiringbazaar.in
                                </p>
                            </div>
                        </section>

                        {/* Acknowledgment */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">22. Acknowledgment and Acceptance</h2>
                            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    By using the Hiring Bazaar Platform, you acknowledge that:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                    <li>You have read and understood this Privacy Policy</li>
                                    <li>You consent to the collection and use of personal data as described</li>
                                    <li>You understand your rights and how to exercise them</li>
                                    <li>You agree to comply with applicable data protection laws</li>
                                    <li>You acknowledge receipt of this privacy notice</li>
                                </ul>
                            </div>
                        </section>

                        {/* Footer Info */}
                        <div className="border-t border-border pt-8 mt-12">
                            <p className="text-sm text-muted-foreground">
                                <span className="font-semibold">Last Updated:</span> January 23, 2026
                            </p>
                            <p className="text-sm text-muted-foreground">
                                <span className="font-semibold">Version:</span> 1.0
                            </p>
                            <p className="text-sm text-muted-foreground mt-4">
                                This Privacy Policy is effective from January 2026 and will be reviewed periodically to ensure compliance with evolving legal requirements and best practices.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </motion.div>
    );
};

export default LegalInfo;
