import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { UnifiedCard } from "@/components/ui/unified-card";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";
import Link from "next/link";
import {
    ArrowLeft,
    CheckCircle2,
    ShieldCheck,
    HeartHandshake,
    FileCheck,
    Plane,
    Building2,
    Headphones,
    Award,
    Stethoscope,
    Compass,
    Sparkles,
    HelpCircle,
    XCircle
} from "lucide-react";

export const metadata: Metadata = {
    title: "Our MBBS Abroad Services | Doctor-Led Counseling & 6-Year Student Care — Kaali Edge",
    description: "Explore end-to-end MBBS abroad services by Kaali Edge Kashmir: Doctor-led career counseling, university selection, MEA apostille, visa processing, group air travel, Kashmiri Halal mess setup, and 6-year local student support.",
    keywords: [
        "MBBS abroad services Kashmir",
        "Medical admission guidance Anantnag",
        "Student visa assistance J&K",
        "NMC guidance Dr Mustansir",
        "Kaali Edge services"
    ],
    alternates: {
        canonical: "https://kaaliedge.com/services"
    }
};

const detailedServices = [
    {
        id: "01",
        icon: Stethoscope,
        title: "Doctor-Led Career & University Counseling",
        badge: "Initial Phase",
        description: "Personalized 1-on-1 counseling led directly by Dr. Mustansir (MBBS). We evaluate your NEET score, Class 12th PCB percentage, and financial budget to match you with the best foreign medical universities.",
        features: [
            "NEET score & eligibility evaluation under NMC 2021 Gazette rules",
            "100% transparent fee calculation (Tuition, Hostel, Mess, & Living)",
            "Honest comparison between Russia, Uzbekistan, Kazakhstan, & Georgia",
            "Parent counseling sessions at our Anantnag office or via Video Call"
        ]
    },
    {
        id: "02",
        icon: Compass,
        title: "University Admission & Seat Allocation",
        badge: "Official Acceptance",
        description: "Direct university application submission without middleman agents. We secure official Admission Letters from WHO & NMC listed government and top-tier private medical academies.",
        features: [
            "Official Admission Letter issuance within 3 to 5 working days",
            "Verification of WDOMS, ECFMG, & WFME university listings",
            "Direct fee payment guidance to university bank accounts (Zero markups)",
            "Reserved seat confirmation for autumn intake 2026"
        ]
    },
    {
        id: "03",
        icon: FileCheck,
        title: "Document Verification, MEA Apostille & Visa Processing",
        badge: "Legal Documentation",
        description: "Hassle-free legal document preparation. We manage Ministry of External Affairs (MEA) apostille, translation, embassy verification, and student visa stamping with a 99.8% approval rate.",
        features: [
            "Class 10th & 12th marksheet apostille & HRD attestation",
            "Official University Invitation Letter from foreign Ministries",
            "Embassy visa file submission & interview briefing",
            "Medical clearance & HIV negative certificate processing"
        ]
    },
    {
        id: "04",
        icon: Plane,
        title: "Accompanied Group Flights & Airport Reception",
        badge: "Safe Travel",
        description: "Students never travel alone. We organize group flights from Srinagar and New Delhi accompanied by senior Kaali Edge representatives, ensuring a smooth transition to host countries.",
        features: [
            "Pre-departure orientation for students & parents in Kashmir",
            "Group air ticket booking with extra student baggage allowance",
            "Accompanied flight escort from Delhi to destination airport",
            "24/7 airport reception & official campus transport transfer"
        ]
    },
    {
        id: "05",
        icon: Building2,
        title: "Hostel Accommodation & Kashmiri Halal Mess Setup",
        badge: "On-Campus Living",
        description: "Comfortable, secure hostel rooms with 24/7 security. We guarantee dedicated Indian and Kashmiri food messes serving 100% Halal fresh meals daily.",
        features: [
            "Secured university hostel room allocation (2–3 sharing basis)",
            "Dedicated Kashmiri cook preparing daily rice, dal, and Halal meat",
            "High-speed Wi-Fi, heating systems, & study rooms",
            "Separate female hostels with 24/7 security wardens & CCTV"
        ]
    },
    {
        id: "06",
        icon: Headphones,
        title: "6-Year Continuous On-Ground Student Support",
        badge: "Long-Term Care",
        description: "Our commitment extends throughout your 6-year medical degree. Local Kaali Edge coordinators stationed in Bishkek, Tashkent, Samarkand, & Kazan assist with ongoing student welfare.",
        features: [
            "Annual visa extension & local residency registration assistance",
            "Medical insurance claim assistance & hospital emergency care",
            "Academic performance tracking & semester examination support",
            "NEXT / FMGE preparation guidance & clinical rotation assistance"
        ]
    }
];

const comparisonData = [
    {
        feature: "Counseling Leadership",
        agent: "Unqualified sales agents seeking commissions",
        kaali: "Doctor-Led (Dr. Mustansir, MBBS) with medical ethics"
    },
    {
        feature: "Fee Transparency",
        agent: "Hidden fees, inflated package rates, cash demands",
        kaali: "100% Transparent fees paid directly to university banks"
    },
    {
        feature: "NMC Gazette Compliance",
        agent: "Often promises non-compliant 4-year fast-track courses",
        kaali: "Strictly 54-month + 12-month internship compliant"
    },
    {
        feature: "Food & Mess Facility",
        agent: "Generic local food or unorganized self-cooking",
        kaali: "Dedicated Kashmiri & Indian mess serving 100% Halal meals"
    },
    {
        feature: "Support Duration",
        agent: "Disappears after landing at the destination airport",
        kaali: "6-Year continuous on-ground coordinators in host cities"
    }
];

export default function ServicesPage() {
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
                "name": "Services",
                "item": "https://kaaliedge.com/services"
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
                            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Comprehensive Medical Admission Services
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0F1B3D] tracking-tight leading-tight">
                            End-to-End MBBS Counseling & 6-Year Student Support
                        </h1>

                        <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
                            From your first counseling session in Kashmir to your graduation ceremony abroad, Kaali Edge delivers 100% transparent, doctor-led guidance every step of the way.
                        </p>

                        {/* Quick Trust Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                <Stethoscope className="w-3.5 h-3.5 text-[#1B4332]" /> Doctor-Led Counseling
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#0F1B3D]" /> 100% NMC 2021 Compliant
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                <Award className="w-3.5 h-3.5 text-[#C9A227]" /> Zero Hidden Charges
                            </span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Detailed Services Section */}
            <Container className="mt-16 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D]">Our Complete Service Suite</h2>
                    <p className="text-sm text-[#4B5563] font-light">6 structured phases designed to protect students and reassure parents.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {detailedServices.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <UnifiedCard key={service.id} className="h-full flex flex-col justify-between p-7 sm:p-8">
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="p-3 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D]">
                                            <IconComponent className="h-6 w-6 text-[#0F1B3D]" />
                                        </div>
                                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D] rounded-full">
                                            {service.badge}
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <span className="text-xs font-bold text-[#C9A227] block mb-1">Phase {service.id}</span>
                                        <h3 className="text-xl font-bold font-heading text-[#0F1B3D] leading-snug">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className="text-[#4B5563] text-xs leading-relaxed font-light mb-6">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-2.5 pt-4 border-t border-[#EDEEF1]">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-xs text-[#4B5563] font-light">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4332] shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6 mt-6 border-t border-[#EDEEF1]">
                                    <BookConsultationBtn
                                        size="sm"
                                        className="w-full bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 h-10 text-xs font-semibold rounded-full"
                                        label="Inquire About This Service"
                                    />
                                </div>
                            </UnifiedCard>
                        );
                    })}
                </div>
            </Container>

            {/* Comparison Section: Why Choose Kaali Edge */}
            <section className="mt-24 py-16 bg-[#F7F8FA] border-y border-[#EDEEF1]">
                <Container className="space-y-12">
                    <div className="text-center max-w-3xl mx-auto space-y-3">
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D]">
                            Why Students & Parents Trust Kaali Edge
                        </h2>
                        <p className="text-sm sm:text-base text-[#4B5563] font-light leading-relaxed">
                            See how our doctor-led, transparent approach compares to typical local commission agents.
                        </p>
                    </div>

                    <div className="card-texture rounded-2xl overflow-hidden shadow-xs max-w-4xl mx-auto border border-[#E5E7EB]">
                        <div className="grid grid-cols-12 bg-[#0F1B3D] text-white p-4 sm:p-5 text-xs sm:text-sm font-bold font-heading">
                            <div className="col-span-4 sm:col-span-3">Service Feature</div>
                            <div className="col-span-4 sm:col-span-4 text-slate-300">Local Commission Agents</div>
                            <div className="col-span-4 sm:col-span-5 text-[#C9A227]">Kaali Edge Consultancy</div>
                        </div>

                        <div className="divide-y divide-[#EDEEF1] text-xs sm:text-sm">
                            {comparisonData.map((row, idx) => (
                                <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 bg-white items-center gap-2">
                                    <div className="col-span-4 sm:col-span-3 font-semibold text-[#0F1B3D]">
                                        {row.feature}
                                    </div>
                                    <div className="col-span-4 sm:col-span-4 text-[#4B5563] font-light flex items-start gap-1.5">
                                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                        <span className="line-clamp-2 sm:line-clamp-none">{row.agent}</span>
                                    </div>
                                    <div className="col-span-4 sm:col-span-5 text-[#0F1B3D] font-medium flex items-start gap-1.5 bg-[#1B4332]/5 p-2 rounded-lg border border-[#1B4332]/10">
                                        <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                                        <span>{row.kaali}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Service Process Roadmap */}
            <Container className="mt-24 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D]">
                        How We Deliver Our Services
                    </h2>
                    <p className="text-sm text-[#4B5563] font-light">A seamless 5-stage admission journey.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {[
                        { step: "01", title: "Free Counseling", desc: "Evaluate NEET score & budget in Anantnag or online." },
                        { step: "02", title: "Admission Letter", desc: "Receive official university acceptance letter." },
                        { step: "03", title: "Visa & Apostille", desc: "Complete MEA apostille & embassy visa stamping." },
                        { step: "04", title: "Escorted Flight", desc: "Fly in student group accompanied by Kaali escorts." },
                        { step: "05", title: "6-Year Hosteler Care", desc: "Campus check-in, Halal mess, & local coordinator support." }
                    ].map((st, i) => (
                        <div key={i} className="card-texture p-5 rounded-2xl space-y-2 relative">
                            <span className="text-2xl font-bold font-heading text-[#C9A227]">{st.step}</span>
                            <h3 className="text-sm font-bold font-heading text-[#0F1B3D]">{st.title}</h3>
                            <p className="text-xs text-[#4B5563] font-light leading-relaxed">{st.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Services FAQ Accordion */}
            <Container className="mt-24 max-w-3xl space-y-8">
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D]">
                        <HelpCircle className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D]">
                        Service FAQs
                    </h2>
                </div>

                <div className="space-y-4">
                    <details className="card-texture p-5 rounded-2xl group cursor-pointer">
                        <summary className="font-bold text-sm sm:text-base font-heading text-[#0F1B3D] flex items-center justify-between list-none">
                            <span>Are tuition fees paid to Kaali Edge or directly to the university?</span>
                            <span className="text-[#9CA3AF] transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-3 text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed border-t border-[#EDEEF1] pt-3">
                            All university tuition fees are paid directly to the official bank account or cashier of your university abroad. Kaali Edge never accepts tuition cash or inflates university rates.
                        </p>
                    </details>

                    <details className="card-texture p-5 rounded-2xl group cursor-pointer">
                        <summary className="font-bold text-sm sm:text-base font-heading text-[#0F1B3D] flex items-center justify-between list-none">
                            <span>Who accompanies students during flight travel from India?</span>
                            <span className="text-[#9CA3AF] transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-3 text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed border-t border-[#EDEEF1] pt-3">
                            Senior Kaali Edge escorts accompany all student batches from Indira Gandhi International Airport (New Delhi) to the university campus dormitories abroad.
                        </p>
                    </details>

                    <details className="card-texture p-5 rounded-2xl group cursor-pointer">
                        <summary className="font-bold text-sm sm:text-base font-heading text-[#0F1B3D] flex items-center justify-between list-none">
                            <span>How does 6-year student support work after admission?</span>
                            <span className="text-[#9CA3AF] transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-3 text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed border-t border-[#EDEEF1] pt-3">
                            We have local coordinators stationed in key university cities (Tashkent, Bishkek, Samarkand, Kazan, etc.) who assist students with medical insurance, annual visa renewals, hostel issues, and emergency family communication throughout their 6 years of study.
                        </p>
                    </details>
                </div>
            </Container>

            {/* Bottom CTA */}
            <Container className="mt-24">
                <div className="card-texture p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto bg-[#F7F8FA] rounded-2xl">
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D]">
                        Ready for Professional Medical Admission Guidance?
                    </h2>
                    <p className="text-sm sm:text-base text-[#4B5563] font-light leading-relaxed max-w-2xl mx-auto">
                        Schedule a free counseling session with Dr. Mustansir at our Anantnag office or online via video consultation.
                    </p>
                    <div className="pt-2">
                        <BookConsultationBtn
                            size="lg"
                            className="bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 h-13 px-9 text-base font-semibold rounded-full shadow-md"
                            label="Book Free Service Counseling"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}
