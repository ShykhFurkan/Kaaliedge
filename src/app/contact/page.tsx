import { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft, Sparkles, MapPin, Phone, Clock, Mail, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Kaali Edge | Anantnag Kashmir Office & Phone Support",
    description: "Get in touch with Kaali Edge for expert MBBS abroad counseling. Visit our Anantnag office, call +91-6005533853, or email darmustansir13@gmail.com for transparent student guidance.",
    keywords: [
        "Contact Kaali Edge",
        "Kaali Edge office address Anantnag",
        "Dr Mustansir contact number Kashmir",
        "MBBS consultancy Anantnag phone",
        "MBBS abroad inquiry Kashmir"
    ],
    alternates: {
        canonical: "https://kaaliedge.com/contact",
    },
};

export default function ContactPage() {
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://kaaliedge.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://kaaliedge.com/contact"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pb-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            {/* Hero Header */}
            <section className="bg-[#F7F8FA] pt-16 pb-20 border-b border-[#EDEEF1] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
                <Container className="relative z-10">
                    <Link href="/" className="text-[#4B5563] hover:text-[#0F1B3D] text-sm mb-6 inline-flex items-center transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
                    </Link>

                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F1B3D]/5 border border-[#0F1B3D]/10 text-[#0F1B3D] text-xs font-semibold uppercase tracking-wider">
                            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Direct Support & Office Location
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0F1B3D] tracking-tight leading-tight">
                            Contact Kaali Edge Counselors
                        </h1>

                        <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
                            Have questions about MBBS admissions, university fee structures, or eligibility? Visit our Anantnag office or send us an inquiry.
                        </p>

                        {/* Quick Contact Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                <MapPin className="w-3.5 h-3.5 text-[#1B4332]" /> Anchidora, Anantnag Office
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                <Phone className="w-3.5 h-3.5 text-[#0F1B3D]" /> +91 60055 33853
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                <Clock className="w-3.5 h-3.5 text-[#C9A227]" /> Mon–Sat: 10 AM – 6 PM
                            </span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Main Contact Section Form & Map */}
            <main>
                <ContactSection />
            </main>

            {/* Contact FAQs */}
            <Container className="mt-20 max-w-3xl space-y-8">
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D]">
                        <HelpCircle className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D]">
                        Contact FAQs
                    </h2>
                </div>

                <div className="space-y-4">
                    <details className="card-texture p-5 rounded-2xl group cursor-pointer">
                        <summary className="font-bold text-sm sm:text-base font-heading text-[#0F1B3D] flex items-center justify-between list-none">
                            <span>How can parents visit the Anantnag office for counseling?</span>
                            <span className="text-[#9CA3AF] transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-3 text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed border-t border-[#EDEEF1] pt-3">
                            Parents and students can visit our main office at Anchidora, Anantnag, Jammu & Kashmir from Monday to Saturday, between 10:00 AM and 6:00 PM. No prior appointment is strictly required, though booking in advance ensures dedicated time with Dr. Mustansir.
                        </p>
                    </details>

                    <details className="card-texture p-5 rounded-2xl group cursor-pointer">
                        <summary className="font-bold text-sm sm:text-base font-heading text-[#0F1B3D] flex items-center justify-between list-none">
                            <span>Can we schedule a video call consultation if we live far from Anantnag?</span>
                            <span className="text-[#9CA3AF] transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-3 text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed border-t border-[#EDEEF1] pt-3">
                            Yes! We offer online video call counseling sessions via Google Meet or WhatsApp for families located outside Anantnag or outside Kashmir.
                        </p>
                    </details>

                    <details className="card-texture p-5 rounded-2xl group cursor-pointer">
                        <summary className="font-bold text-sm sm:text-base font-heading text-[#0F1B3D] flex items-center justify-between list-none">
                            <span>What documents should we bring for the first consultation?</span>
                            <span className="text-[#9CA3AF] transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-3 text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed border-t border-[#EDEEF1] pt-3">
                            Please bring copies of your Class 10th and 12th marksheets, NEET scorecard (if available), and passport copy to enable an accurate eligibility and university matching assessment.
                        </p>
                    </details>
                </div>
            </Container>
        </div>
    );
}
