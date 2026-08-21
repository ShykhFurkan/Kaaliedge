import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { UnifiedCard } from "@/components/ui/unified-card";
import { countries } from "@/data/countries";
import Link from "next/link";
import {
    ArrowLeft,
    Globe,
    ShieldCheck,
    GraduationCap,
    DollarSign,
    Sparkles,
    CheckCircle2,
    ArrowRight,
    Utensils,
    Cloud,
    HelpCircle,
    Building2,
    Compass
} from "lucide-react";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";

export const metadata: Metadata = {
    title: "Top MBBS Abroad Destinations 2026 | Russia, Uzbekistan, Kazakhstan & More — Kaali Edge",
    description: "Explore top WHO and NMC recognized MBBS abroad destinations for Indian & Kashmiri students: Russia, Uzbekistan, Kazakhstan, Kyrgyzstan, Bangladesh, and Georgia. Compare total budgets, course durations, and Halal mess availability.",
    keywords: [
        "MBBS abroad destinations",
        "NMC approved foreign medical colleges",
        "Study MBBS in Russia fee",
        "Study MBBS in Uzbekistan fee",
        "Study MBBS in Kyrgyzstan fee",
        "Study MBBS in Kazakhstan fee",
        "Study MBBS in Bangladesh fee",
        "Study MBBS in Georgia fee"
    ],
    alternates: {
        canonical: "https://kaaliedge.com/destinations"
    }
};

const countryGuidingNotes = [
    {
        budget: "Budget Under ₹20 Lakhs",
        recommended: ["Kyrgyzstan", "Uzbekistan"],
        note: "Ideal for students seeking low tuition fees, low living expenses, 5+1 year NMC compliance, and direct flight access from Kashmir."
    },
    {
        budget: "Budget ₹20L – ₹25 Lakhs",
        recommended: ["Russia", "Kazakhstan"],
        note: "Ideal for high clinical practical exposure, massive multi-specialty government hospitals, and top-ranked federal academies."
    },
    {
        budget: "High FMGE Pass Target",
        recommended: ["Bangladesh"],
        note: "Highest FMGE pass percentage, identical Indian disease spectrum, and textbooks written by standard Indian authors."
    },
    {
        budget: "European Education Standard",
        recommended: ["Georgia"],
        note: "European ECTS credit system aligned with USMLE (USA) and PLAB (UK) licensing syllabi in ultra-safe cities."
    }
];

export default function DestinationsPage() {
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
                "name": "Destinations",
                "item": "https://kaaliedge.com/destinations"
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
                            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Global Medical Education Guide 2026–27
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0F1B3D] tracking-tight leading-tight">
                            Choose Your Ideal MBBS Destination
                        </h1>

                        <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
                            Compare top WHO & NMC recognized medical universities across Russia, Uzbekistan, Kazakhstan, Kyrgyzstan, Bangladesh, and Georgia tailored for Indian and Kashmiri students.
                        </p>

                        {/* Stat Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                <Globe className="w-3.5 h-3.5 text-[#0F1B3D]" /> 6 Premier Countries
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#1B4332]" /> 100% NMC Gazette Compliant
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                <DollarSign className="w-3.5 h-3.5 text-[#C9A227]" /> Total Budget ₹15L to ₹35L
                            </span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Destinations Grid */}
            <Container className="mt-16 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D]">NMC & WHO Approved Destinations</h2>
                    <p className="text-sm text-[#4B5563] font-light">Explore accurate fee ranges, duration, and top university choices for each country.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {countries.map((country) => {
                        const isFeatured = country.slug === 'russia' || country.slug === 'uzbekistan';

                        return (
                            <UnifiedCard key={country.slug} className="h-full flex flex-col justify-between p-7 sm:p-8">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-4xl">{country.flag}</span>
                                        {isFeatured && (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#C9A227]/10 text-[#C9A227] text-[10px] font-semibold uppercase tracking-wider border border-[#C9A227]/20">
                                                <Sparkles className="w-2.5 h-2.5" /> Popular Choice
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold font-heading text-[#0F1B3D] mb-2">
                                        {country.name}
                                    </h3>

                                    <p className="text-[#4B5563] text-xs leading-relaxed font-light mb-6 line-clamp-3">
                                        {country.description}
                                    </p>

                                    {/* Parameters Table */}
                                    <div className="space-y-2.5 py-4 border-y border-[#EDEEF1] text-xs">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#9CA3AF] font-medium">Total Budget:</span>
                                            <span className="font-bold text-[#0F1B3D]">{country.feeRange}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#9CA3AF] font-medium">Course Duration:</span>
                                            <span className="font-semibold text-[#4B5563]">{country.duration}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#9CA3AF] font-medium">Instruction Medium:</span>
                                            <span className="font-semibold text-[#1B4332]">{country.medium}</span>
                                        </div>
                                    </div>

                                    {/* Top Universities Tags */}
                                    <div className="pt-4 mb-6">
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#9CA3AF] block mb-2">Top Universities:</span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {country.universities.slice(0, 2).map((uni, i) => (
                                                <span key={i} className="text-[11px] font-medium px-2.5 py-1 bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D] rounded-full truncate max-w-[200px]">
                                                    🏛️ {uni.name}
                                                </span>
                                            ))}
                                            {country.universities.length > 2 && (
                                                <span className="text-[11px] font-medium px-2.5 py-1 bg-[#F7F8FA] text-[#4B5563] rounded-full">
                                                    +{country.universities.length - 2} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-[#EDEEF1]">
                                    <Link
                                        href={`/destinations/${country.slug}`}
                                        className="w-full inline-flex items-center justify-center gap-1.5 h-11 text-xs font-semibold rounded-full border border-[#0F1B3D] text-[#0F1B3D] hover:bg-[#F7F8FA] transition-colors"
                                    >
                                        Explore {country.name} Guide <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                    <BookConsultationBtn
                                        size="sm"
                                        className="w-full bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 h-10 text-xs font-semibold rounded-full"
                                        label={`Consult About ${country.name}`}
                                    />
                                </div>
                            </UnifiedCard>
                        );
                    })}
                </div>
            </Container>

            {/* Decision Helper Section */}
            <section className="mt-24 py-16 bg-[#F7F8FA] border-y border-[#EDEEF1]">
                <Container className="space-y-12">
                    <div className="text-center max-w-3xl mx-auto space-y-3">
                        <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#0F1B3D]">
                            <Compass className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D]">
                            How to Choose Your Medical Destination
                        </h2>
                        <p className="text-sm text-[#4B5563] font-light">
                            Match your academic priorities and budget with the right country.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {countryGuidingNotes.map((item, idx) => (
                            <div key={idx} className="card-texture p-6 rounded-2xl space-y-3 bg-white">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-base font-heading text-[#0F1B3D]">{item.budget}</h3>
                                    <div className="flex gap-1.5">
                                        {item.recommended.map((rec, i) => (
                                            <span key={i} className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] border border-[#1B4332]/20">
                                                {rec}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-xs text-[#4B5563] font-light leading-relaxed">{item.note}</p>
                            </div>
                        ))}
                    </div>

                    {/* Quick Comparison Hub Links */}
                    <div className="text-center pt-6 space-y-3">
                        <span className="text-xs uppercase tracking-wider font-semibold text-[#9CA3AF]">Popular Side-by-Side Comparisons:</span>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link href="/compare/russia-vs-uzbekistan" className="text-xs font-semibold px-4 py-2 rounded-full bg-white border border-[#E5E7EB] text-[#0F1B3D] hover:border-[#0F1B3D]">
                                🇷🇺 Russia vs 🇺🇿 Uzbekistan
                            </Link>
                            <Link href="/compare/kyrgyzstan-vs-kazakhstan" className="text-xs font-semibold px-4 py-2 rounded-full bg-white border border-[#E5E7EB] text-[#0F1B3D] hover:border-[#0F1B3D]">
                                🇰🇬 Kyrgyzstan vs 🇰🇿 Kazakhstan
                            </Link>
                            <Link href="/compare/bangladesh-vs-georgia" className="text-xs font-semibold px-4 py-2 rounded-full bg-white border border-[#E5E7EB] text-[#0F1B3D] hover:border-[#0F1B3D]">
                                🇧🇩 Bangladesh vs 🇬🇪 Georgia
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Destination FAQs */}
            <Container className="mt-24 max-w-3xl space-y-8">
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D]">
                        <HelpCircle className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D]">
                        Destination FAQs
                    </h2>
                </div>

                <div className="space-y-4">
                    <details className="card-texture p-5 rounded-2xl group cursor-pointer">
                        <summary className="font-bold text-sm sm:text-base font-heading text-[#0F1B3D] flex items-center justify-between list-none">
                            <span>Which country offers the most affordable MBBS degree for Indian students?</span>
                            <span className="text-[#9CA3AF] transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-3 text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed border-t border-[#EDEEF1] pt-3">
                            Kyrgyzstan and Uzbekistan offer the most cost-effective MBBS programs, with 5-year total packages ranging between ₹15.5 Lakhs to ₹22.5 Lakhs (including university tuition, hostel, and Indian mess charges).
                        </p>
                    </details>

                    <details className="card-texture p-5 rounded-2xl group cursor-pointer">
                        <summary className="font-bold text-sm sm:text-base font-heading text-[#0F1B3D] flex items-center justify-between list-none">
                            <span>Are all 6 destinations compliant with the latest NMC 2021 regulations?</span>
                            <span className="text-[#9CA3AF] transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-3 text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed border-t border-[#EDEEF1] pt-3">
                            Yes, all foreign medical universities recommended by Kaali Edge comply strictly with NMC Gazette 2021 guidelines (minimum 54 months course duration, 12 months clinical internship at the same institution, 100% English medium, and host country medical license eligibility).
                        </p>
                    </details>

                    <details className="card-texture p-5 rounded-2xl group cursor-pointer">
                        <summary className="font-bold text-sm sm:text-base font-heading text-[#0F1B3D] flex items-center justify-between list-none">
                            <span>Are Halal food and Kashmiri messes available across all these countries?</span>
                            <span className="text-[#9CA3AF] transition-transform group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-3 text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed border-t border-[#EDEEF1] pt-3">
                            Yes, dedicated Indian and Kashmiri messes operate in all primary university dormitories across Russia, Uzbekistan, Kazakhstan, Kyrgyzstan, Bangladesh, and Georgia, preparing 100% Halal fresh meals daily.
                        </p>
                    </details>
                </div>
            </Container>

            {/* Bottom CTA */}
            <Container className="mt-24">
                <div className="card-texture p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto bg-[#F7F8FA] rounded-2xl">
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D]">
                        Need Personal Advice on Destination Selection?
                    </h2>
                    <p className="text-sm sm:text-base text-[#4B5563] font-light leading-relaxed max-w-2xl mx-auto">
                        Speak directly with Dr. Mustansir to evaluate your NEET score, academic profile, and budget for the 2026 intake batch.
                    </p>
                    <div className="pt-2">
                        <BookConsultationBtn
                            size="lg"
                            className="bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 h-13 px-9 text-base font-semibold rounded-full shadow-md"
                            label="Book Free Destination Counseling"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}
