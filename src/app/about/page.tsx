import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { UnifiedCard } from "@/components/ui/unified-card";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    CheckCircle2,
    ShieldCheck,
    HeartHandshake,
    Award,
    Stethoscope,
    Sparkles,
    Building2,
    MapPin,
    Users,
    HelpCircle,
    Calendar,
    Target
} from "lucide-react";

export const metadata: Metadata = {
    title: "About Kaali Edge | Dr. Mustansir & Kashmir's Premier Medical Consultancy",
    description: "Learn about Kaali Edge: Kashmir's trusted MBBS-abroad consultancy founded by Dr. Mustansir (MBBS) in Anantnag. Discover our origin story, ethical principles, transparent fee policy, and 500+ placed medical students.",
    keywords: [
        "About Kaali Edge",
        "Dr Mustansir MBBS Kashmir",
        "Education consultancy Anantnag",
        "Transparent MBBS consultancy",
        "Kashmir medical study abroad"
    ],
    alternates: {
        canonical: "https://kaaliedge.com/about"
    }
};

const corePillars = [
    {
        icon: Stethoscope,
        title: "Doctor-Led Mentorship",
        description: "Counseling is led directly by medical doctors who have undergone rigorous clinical training, ensuring realistic academic advice tailored for NEXT/FMGE success."
    },
    {
        icon: ShieldCheck,
        title: "100% Direct Fee Transparency",
        description: "Zero hidden processing charges, zero inflated tuition quotes, and zero cash demands. All tuition fees are paid directly to university bank accounts."
    },
    {
        icon: HeartHandshake,
        title: "6-Year On-Ground Hosteler Care",
        description: "Stationed local coordinators across Bishkek, Tashkent, Kazan, & Tbilisi providing continuous assistance with medical insurance, hostels, & residency visas."
    },
    {
        icon: Award,
        title: "NMC Gazette 2021 Compliance",
        description: "We strictly recommend universities fulfilling the 54-month academic course + 12-month clinical internship rules issued by the National Medical Commission."
    }
];

export default function AboutPage() {
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
                "name": "About Us",
                "item": "https://kaaliedge.com/about"
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
                            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Our Origin & Mission
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0F1B3D] tracking-tight leading-tight">
                            Building Trust in International Medical Education
                        </h1>

                        <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
                            Founded by Dr. Mustansir (MBBS) in Anantnag, Kaali Edge was established to eliminate misleading agent practices and guide Kashmiri medical aspirants with doctor-led integrity.
                        </p>

                        {/* Quick Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                <Stethoscope className="w-3.5 h-3.5 text-[#1B4332]" /> Founded by Dr. Mustansir, MBBS
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                <MapPin className="w-3.5 h-3.5 text-[#0F1B3D]" /> Anantnag, J&K Office
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                <Users className="w-3.5 h-3.5 text-[#C9A227]" /> 500+ Students Placed
                            </span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Founder Showcase & Story */}
            <Container className="mt-16 space-y-16">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Founder Image Card */}
                    <div className="lg:col-span-5">
                        <div className="card-texture p-6 rounded-2xl relative overflow-hidden text-center space-y-4">
                            <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden bg-[#F7F8FA] border border-[#E5E7EB]">
                                <Image
                                    src="/images/dr-mustansir.png"
                                    alt="Dr. Mustansir, MBBS, Founder and Lead Counselor at Kaali Edge"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    priority
                                />
                            </div>

                            <div className="pt-2">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-semibold mb-2 border border-[#1B4332]/20">
                                    <ShieldCheck className="w-3.5 h-3.5" /> Medical Doctor & Lead Counselor
                                </div>
                                <h2 className="text-xl font-bold font-heading text-[#0F1B3D]">Dr. Mustansir (MBBS)</h2>
                                <p className="text-xs text-[#4B5563] font-medium">Founder, Kaali Edge Education Consultancy</p>
                            </div>
                        </div>
                    </div>

                    {/* Founder Narrative */}
                    <div className="lg:col-span-7 space-y-6 text-[#4B5563] text-sm sm:text-base font-light leading-relaxed">
                        <span className="text-xs uppercase tracking-wider font-semibold text-[#C9A227]">The Kaali Edge Journey</span>
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D] leading-tight">
                            "Why We Founded Kaali Edge in Kashmir"
                        </h2>

                        <p>
                            For years, thousands of talented medical aspirants in Jammu & Kashmir faced immense challenges due to limited government seats and rampant misinformation spread by commercial agents. Students were often admitted to unrecognized institutions or faced hidden financial demands halfway through their studies.
                        </p>

                        <p>
                            Having completed my medical degree and understood clinical training requirements firsthand, I established <strong>Kaali Edge</strong> in Anantnag with one core directive: <em>to make foreign medical admissions 100% ethical, transparent, and student-focused.</em>
                        </p>

                        <p>
                            Today, Kaali Edge has guided over 500 students to premier WHO & NMC listed universities across Central Asia, Russia, Bangladesh, and Europe, providing complete on-ground support and authentic Kashmiri Halal food messes.
                        </p>

                        {/* Milestone Bar */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#EDEEF1] text-center">
                            <div className="card-texture p-4 rounded-xl bg-[#F7F8FA]">
                                <span className="block font-bold text-xl sm:text-2xl font-heading text-[#0F1B3D]">2020</span>
                                <span className="text-[11px] text-[#4B5563] font-medium uppercase">Established</span>
                            </div>
                            <div className="card-texture p-4 rounded-xl bg-[#F7F8FA]">
                                <span className="block font-bold text-xl sm:text-2xl font-heading text-[#0F1B3D]">500+</span>
                                <span className="text-[11px] text-[#4B5563] font-medium uppercase">Students Placed</span>
                            </div>
                            <div className="card-texture p-4 rounded-xl bg-[#F7F8FA]">
                                <span className="block font-bold text-xl sm:text-2xl font-heading text-[#0F1B3D]">100%</span>
                                <span className="text-[11px] text-[#1B4332] font-semibold uppercase">Fee Transparency</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Ethical Pillars Grid */}
            <section className="mt-24 py-16 bg-[#F7F8FA] border-y border-[#EDEEF1]">
                <Container className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D]">Our Core Ethical Pillars</h2>
                        <p className="text-sm text-[#4B5563] font-light">The standards that define our work every day.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {corePillars.map((pillar, i) => {
                            const IconComp = pillar.icon;
                            return (
                                <UnifiedCard key={i} className="p-7 sm:p-8 space-y-4 bg-white">
                                    <div className="p-3 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D] w-fit">
                                        <IconComp className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold font-heading text-[#0F1B3D]">{pillar.title}</h3>
                                    <p className="text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed">{pillar.description}</p>
                                </UnifiedCard>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* About FAQs */}
            <Container className="mt-24 max-w-3xl space-y-8">
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D]">
                        <HelpCircle className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D]">
                        About Kaali Edge FAQs
                    </h2>
                </div>

                <div className="space-y-4">
                    <details className="card-texture p-5 rounded-2xl group cursor-pointer">
                        <summary className="font-bold text-sm sm:text-base font-heading text-[#0F1B3D] flex items-center justify-between list-none">
                            <span>Where is Kaali Edge's main office located in Kashmir?</span>
                            <span className="text-[#9CA3AF] transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-3 text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed border-t border-[#EDEEF1] pt-3">
                            Our main office is located in Anchidora, Anantnag, Jammu & Kashmir (Postal Code: 192101). Students and parents are welcome to visit Monday to Saturday, 10:00 AM to 6:00 PM for in-person counseling.
                        </p>
                    </details>

                    <details className="card-texture p-5 rounded-2xl group cursor-pointer">
                        <summary className="font-bold text-sm sm:text-base font-heading text-[#0F1B3D] flex items-center justify-between list-none">
                            <span>Why is doctor-led counseling better for medical aspirants?</span>
                            <span className="text-[#9CA3AF] transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-3 text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed border-t border-[#EDEEF1] pt-3">
                            Doctor-led counseling ensures that advice is based on actual medical curricula, clinical hospital rotations, and NEXT/FMGE exam requirements, rather than commercial sales targets.
                        </p>
                    </details>

                    <details className="card-texture p-5 rounded-2xl group cursor-pointer">
                        <summary className="font-bold text-sm sm:text-base font-heading text-[#0F1B3D] flex items-center justify-between list-none">
                            <span>How does Kaali Edge handle student emergencies abroad?</span>
                            <span className="text-[#9CA3AF] transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-3 text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed border-t border-[#EDEEF1] pt-3">
                            We have full-time on-ground coordinators stationed in key educational hubs (Bishkek, Tashkent, Samarkand, Kazan, & Tbilisi) who assist students with medical care, hospital admissions, hostel matters, and family updates 24/7.
                        </p>
                    </details>
                </div>
            </Container>

            {/* Bottom CTA */}
            <Container className="mt-24">
                <div className="card-texture p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto bg-[#F7F8FA] rounded-2xl">
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D]">
                        Start Your Medical Journey With Confidence
                    </h2>
                    <p className="text-sm sm:text-base text-[#4B5563] font-light leading-relaxed max-w-2xl mx-auto">
                        Visit our office in Anantnag or schedule a 1-on-1 video call directly with Dr. Mustansir.
                    </p>
                    <div className="pt-2">
                        <BookConsultationBtn
                            size="lg"
                            className="bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 h-13 px-9 text-base font-semibold rounded-full shadow-md"
                            label="Schedule Consultation With Dr. Mustansir"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}
