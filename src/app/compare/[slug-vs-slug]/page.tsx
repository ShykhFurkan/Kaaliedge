import { Container } from "@/components/ui/container";
import { countries } from "@/data/countries";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowLeft, GraduationCap, DollarSign, Clock, Utensils, Cloud, Shield } from "lucide-react";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";

type Props = {
    params: Promise<{ "slug-vs-slug": string }>;
};

export async function generateStaticParams() {
    const paramsList: Array<{ "slug-vs-slug": string }> = [];

    for (let i = 0; i < countries.length; i++) {
        for (let j = i + 1; j < countries.length; j++) {
            paramsList.push({
                "slug-vs-slug": `${countries[i].slug}-vs-${countries[j].slug}`
            });
        }
    }

    return paramsList;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const parts = resolvedParams["slug-vs-slug"].split("-vs-");
    const country1 = countries.find((c) => c.slug === parts[0]);
    const country2 = countries.find((c) => c.slug === parts[1]);

    if (!country1 || !country2) return { title: "Comparison Not Found | Kaali Edge" };

    return {
        title: `MBBS in ${country1.name} vs ${country2.name} 2026: Fees, Eligibility & University Comparison`,
        description: `Detailed comparison of studying MBBS in ${country1.name} vs ${country2.name}. Compare total budget, course duration, NMC/WHO accreditations, climate, and Kashmiri student safety.`,
        keywords: [
            `MBBS in ${country1.name} vs ${country2.name}`,
            `Study medicine ${country1.name} vs ${country2.name}`,
            `${country1.name} or ${country2.name} for MBBS`,
            "MBBS abroad comparison for Kashmiri students"
        ],
        alternates: {
            canonical: `https://kaaliedge.com/compare/${resolvedParams["slug-vs-slug"]}`
        }
    };
}

export default async function ComparePage({ params }: Props) {
    const resolvedParams = await params;
    const parts = resolvedParams["slug-vs-slug"].split("-vs-");
    const c1 = countries.find((c) => c.slug === parts[0]);
    const c2 = countries.find((c) => c.slug === parts[1]);

    if (!c1 || !c2) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen pb-32">
            {/* Header */}
            <section className="bg-[#F7F8FA] pt-16 pb-20 border-b border-[#EDEEF1] relative overflow-hidden">
                <Container>
                    <Link href="/#countries" className="text-[#4B5563] hover:text-[#0F1B3D] text-sm mb-6 inline-flex items-center transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Destinations
                    </Link>

                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <span className="px-3.5 py-1 rounded-full bg-[#0F1B3D]/5 border border-[#0F1B3D]/10 text-[#0F1B3D] text-xs font-semibold uppercase tracking-wider">
                            Side-by-Side Destination Comparison
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0F1B3D] tracking-tight">
                            MBBS in {c1.name} <span className="text-[#C9A227]">VS</span> {c2.name}
                        </h1>
                        <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
                            Compare tuition fees, course duration, NMC/WHO accreditations, climate, and student living to choose the right medical destination for your future.
                        </p>
                    </div>
                </Container>
            </section>

            <Container className="mt-16 space-y-12">
                {/* Visual Header Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="card-texture p-8 rounded-2xl space-y-4 text-center border-2 border-[#0F1B3D]/20">
                        <span className="text-5xl block">{c1.flag}</span>
                        <h2 className="text-2xl font-bold font-heading text-[#0F1B3D]">{c1.name}</h2>
                        <p className="text-xs text-[#4B5563] font-light leading-relaxed">{c1.description}</p>
                        <div className="pt-2">
                            <Link href={`/destinations/${c1.slug}`} className="inline-flex items-center text-xs font-semibold text-[#0F1B3D] hover:underline">
                                View Full {c1.name} Guide &rarr;
                            </Link>
                        </div>
                    </div>

                    <div className="card-texture p-8 rounded-2xl space-y-4 text-center border-2 border-[#1B4332]/20">
                        <span className="text-5xl block">{c2.flag}</span>
                        <h2 className="text-2xl font-bold font-heading text-[#0F1B3D]">{c2.name}</h2>
                        <p className="text-xs text-[#4B5563] font-light leading-relaxed">{c2.description}</p>
                        <div className="pt-2">
                            <Link href={`/destinations/${c2.slug}`} className="inline-flex items-center text-xs font-semibold text-[#1B4332] hover:underline">
                                View Full {c2.name} Guide &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Comparison Matrix Table */}
                <div className="card-texture rounded-2xl overflow-hidden shadow-xs border border-[#E5E7EB]">
                    <div className="bg-[#0F1B3D] p-6 text-white text-center">
                        <h3 className="font-heading font-bold text-xl">Comparison Breakdown</h3>
                        <p className="text-xs text-slate-300 font-light mt-1">Key parameters at a glance</p>
                    </div>

                    <div className="divide-y divide-[#EDEEF1] text-xs sm:text-sm">
                        {/* Fee Package */}
                        <div className="grid grid-cols-3 p-5 sm:p-6 bg-white items-center">
                            <div className="font-bold text-[#0F1B3D] flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-[#C9A227]" /> Total Fee Package
                            </div>
                            <div className="font-bold text-[#0F1B3D] text-center">{c1.feeRange}</div>
                            <div className="font-bold text-[#0F1B3D] text-center">{c2.feeRange}</div>
                        </div>

                        {/* Duration */}
                        <div className="grid grid-cols-3 p-5 sm:p-6 bg-[#F7F8FA] items-center">
                            <div className="font-semibold text-[#0F1B3D] flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#1B4332]" /> Course Duration
                            </div>
                            <div className="text-center font-medium text-[#4B5563]">{c1.duration}</div>
                            <div className="text-center font-medium text-[#4B5563]">{c2.duration}</div>
                        </div>

                        {/* Medium */}
                        <div className="grid grid-cols-3 p-5 sm:p-6 bg-white items-center">
                            <div className="font-semibold text-[#0F1B3D] flex items-center gap-2">
                                <GraduationCap className="w-4 h-4 text-[#0F1B3D]" /> Instruction Medium
                            </div>
                            <div className="text-center font-medium text-[#4B5563]">{c1.medium}</div>
                            <div className="text-center font-medium text-[#4B5563]">{c2.medium}</div>
                        </div>

                        {/* Accreditations */}
                        <div className="grid grid-cols-3 p-5 sm:p-6 bg-[#F7F8FA] items-center">
                            <div className="font-semibold text-[#0F1B3D] flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-[#1B4332]" /> Accreditations
                            </div>
                            <div className="text-center text-xs text-[#4B5563]">NMC, WHO, FAIMER, WDOMS</div>
                            <div className="text-center text-xs text-[#4B5563]">NMC, WHO, FAIMER, WDOMS</div>
                        </div>

                        {/* Kashmiri & Indian Food */}
                        <div className="grid grid-cols-3 p-5 sm:p-6 bg-white items-center">
                            <div className="font-semibold text-[#0F1B3D] flex items-center gap-2">
                                <Utensils className="w-4 h-4 text-[#C9A227]" /> Food & Halal Mess
                            </div>
                            <div className="text-center text-xs text-[#4B5563]">{c1.food}</div>
                            <div className="text-center text-xs text-[#4B5563]">{c2.food}</div>
                        </div>

                        {/* Climate */}
                        <div className="grid grid-cols-3 p-5 sm:p-6 bg-[#F7F8FA] items-center">
                            <div className="font-semibold text-[#0F1B3D] flex items-center gap-2">
                                <Cloud className="w-4 h-4 text-[#0F1B3D]" /> Climate
                            </div>
                            <div className="text-center text-xs text-[#4B5563]">{c1.climate}</div>
                            <div className="text-center text-xs text-[#4B5563]">{c2.climate}</div>
                        </div>

                        {/* Safety */}
                        <div className="grid grid-cols-3 p-5 sm:p-6 bg-white items-center">
                            <div className="font-semibold text-[#0F1B3D] flex items-center gap-2">
                                <Shield className="w-4 h-4 text-[#1B4332]" /> Safety Record
                            </div>
                            <div className="text-center text-xs text-[#4B5563]">{c1.safety}</div>
                            <div className="text-center text-xs text-[#4B5563]">{c2.safety}</div>
                        </div>
                    </div>
                </div>

                {/* Consultation Banner */}
                <div className="text-center pt-8 space-y-4">
                    <h3 className="text-xl font-bold font-heading text-[#0F1B3D]">Need Help Deciding Between {c1.name} and {c2.name}?</h3>
                    <p className="text-xs text-[#4B5563] font-light max-w-xl mx-auto">
                        Speak directly with Dr. Mustansir to evaluate your NEET score, academic profile, and budget.
                    </p>
                    <div className="pt-2">
                        <BookConsultationBtn
                            size="lg"
                            className="bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 h-12 px-8 text-sm font-semibold rounded-full shadow-md"
                            label="Book Free Counseling Session"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}
