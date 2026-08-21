import { Container } from "@/components/ui/container";
import { countries } from "@/data/countries";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
    CheckCircle2,
    MapPin,
    Cloud,
    Shield,
    Utensils,
    GraduationCap,
    Award,
    FileText,
    HelpCircle,
    ArrowRight,
    ShieldCheck,
    Building2,
    Calendar,
    DollarSign,
    Globe,
    Sparkles,
    BookOpen,
    ArrowLeft
} from "lucide-react";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const country = countries.find((c) => c.slug === slug);
    if (!country) return { title: "Destination Not Found | Kaali Edge" };

    const keywords = [
        `MBBS in ${country.name}`,
        `MBBS in ${country.name} fees 2026`,
        `Study Medicine in ${country.name}`,
        `NMC recognized medical colleges in ${country.name}`,
        `MBBS abroad for Kashmiri students`,
        `WHO listed universities ${country.name}`,
        `Direct admission MBBS ${country.name}`,
        `Dr Mustansir Kashmir MBBS consultancy`
    ];

    return {
        title: `MBBS in ${country.name} 2026: Fees, NMC Recognized Universities & Admission Guide`,
        description: `Complete 2026 guide for studying MBBS in ${country.name}. Discover top WHO & NMC recognized universities, total fee structures (${country.feeRange}), admission eligibility, Kashmiri Halal food options, and direct counseling with Dr. Mustansir.`,
        keywords: keywords,
        authors: [{ name: "Dr. Mustansir", url: "https://kaaliedge.com" }],
        alternates: {
            canonical: `https://kaaliedge.com/destinations/${country.slug}`
        },
        openGraph: {
            title: `MBBS in ${country.name} 2026 | Fees, Top Universities & Admission Guide`,
            description: `Study MBBS in ${country.name} with 100% transparent fee structure, WHO/NMC recognized medical universities, English medium instruction, and 6-year local student support.`,
            type: "article",
            url: `https://kaaliedge.com/destinations/${country.slug}`,
            siteName: "Kaali Edge Education Consultancy"
        },
        twitter: {
            card: "summary_large_image",
            title: `MBBS in ${country.name} | Kaali Edge`,
            description: `Complete guide for MBBS in ${country.name}. Top medical universities, fee breakdowns, and Kashmir student guidance.`
        }
    };
}

export async function generateStaticParams() {
    return countries.map((country) => ({
        slug: country.slug,
    }));
}

export default async function DestinationDetailsPage({ params }: Props) {
    const { slug } = await params;
    const country = countries.find((c) => c.slug === slug);

    if (!country) {
        notFound();
    }

    // JSON-LD Schemas for SEO (Course, Organization, FAQPage, Breadcrumbs)
    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": `MBBS in ${country.name}`,
        "description": country.description,
        "provider": {
            "@type": "EducationalOrganization",
            "name": "Kaali Edge Education Consultancy",
            "sameAs": "https://kaaliedge.com",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Anantnag",
                "addressRegion": "Kashmir",
                "addressCountry": "IN"
            }
        },
        "educationalCredentialAwarded": "Doctor of Medicine (MD) / MBBS",
        "coursePrerequisites": "10+2 with 50% in PCB & Qualifying NEET Score",
        "hasCourseInstance": country.universities.map(uni => ({
            "@type": "CourseInstance",
            "name": uni.name,
            "location": `${uni.location}, ${country.name}`
        }))
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": country.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

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
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `MBBS in ${country.name}`,
                "item": `https://kaaliedge.com/destinations/${country.slug}`
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pb-32">
            {/* SEO Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            {/* Hero Banner */}
            <section className="bg-[#F7F8FA] pt-16 pb-20 border-b border-[#EDEEF1] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
                <Container className="relative z-10">
                    <Link href="/destinations" className="text-[#4B5563] hover:text-[#0F1B3D] text-sm mb-6 inline-flex items-center transition-colors font-medium tracking-wide group">
                        <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" /> Back to Destinations
                    </Link>

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="space-y-4 max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F1B3D]/5 border border-[#0F1B3D]/10 text-[#0F1B3D] text-xs font-semibold uppercase tracking-wider">
                                <span>{country.flag}</span> Admissions Open for Intake 2026–27
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0F1B3D] tracking-tight leading-tight">
                                Study MBBS in <span className="italic">{country.name}</span>
                            </h1>

                            <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
                                {country.description}
                            </p>

                            {/* Quick Badges Bar */}
                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                    <GraduationCap className="w-3.5 h-3.5 text-[#1B4332]" /> {country.duration}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                    <Globe className="w-3.5 h-3.5 text-[#0F1B3D]" /> {country.medium}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                    <DollarSign className="w-3.5 h-3.5 text-[#C9A227]" /> {country.feeRange}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#1B4332] shadow-2xs">
                                    <ShieldCheck className="w-3.5 h-3.5 text-[#1B4332]" /> NMC & WHO Listed
                                </span>
                            </div>
                        </div>

                        <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                            <BookConsultationBtn
                                size="lg"
                                className="bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 h-13 px-8 text-base font-semibold rounded-full shadow-md"
                                label="Apply / Free Counseling"
                            />
                            <a
                                href="#fees"
                                className="inline-flex items-center justify-center h-13 px-8 text-sm font-semibold rounded-full border border-[#E5E7EB] bg-white text-[#0F1B3D] hover:bg-[#F7F8FA] transition-colors"
                            >
                                View Fee Breakdown
                            </a>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Accreditations Bar */}
            <div className="border-b border-[#EDEEF1] bg-white py-4 overflow-hidden">
                <Container>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-[#4B5563]">
                        <span className="text-[11px] uppercase tracking-widest text-[#9CA3AF]">Recognitions:</span>
                        {country.accreditations.map((acc, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D]">
                                <Award className="w-3.5 h-3.5 text-[#C9A227]" /> {acc}
                            </span>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Main Content Layout */}
            <Container className="mt-16 grid lg:grid-cols-12 gap-12 items-start">
                {/* Left Primary Content */}
                <div className="lg:col-span-8 space-y-16">

                    {/* Section 1: Overview & Academic Excellence */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D]">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D] tracking-tight">
                                Overview & Academic Program
                            </h2>
                        </div>

                        <div className="card-texture p-6 sm:p-8 rounded-2xl space-y-4 text-[#4B5563] text-sm font-light leading-relaxed">
                            <p>{country.overview}</p>
                            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#1B4332]">
                                <ShieldCheck className="w-4 h-4 text-[#1B4332]" />
                                <span>Fully compliant with NMC Gazette 2021 guidelines (Minimum 54 months course + 12 months internship).</span>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Why Choose Highlights */}
                    <section className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D] tracking-tight">
                            Key Benefits of Studying MBBS in {country.name}
                        </h2>

                        <div className="grid gap-3">
                            {country.whyChoose.map((reason, index) => (
                                <div key={index} className="card-texture p-4 sm:p-5 rounded-2xl flex items-start gap-3.5">
                                    <div className="bg-white p-1.5 rounded-full border border-[#E5E7EB] text-[#1B4332] shrink-0 mt-0.5 shadow-2xs">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </div>
                                    <span className="text-[#0F1B3D] text-sm sm:text-base font-medium leading-relaxed">{reason}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 3: Fee Breakdown Table */}
                    <section id="fees" className="space-y-6 scroll-mt-28">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#C9A227]">
                                    <DollarSign className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D] tracking-tight">
                                    Estimated Fee Structure & Package
                                </h2>
                            </div>
                        </div>

                        <div className="card-texture p-6 sm:p-8 rounded-2xl space-y-6 overflow-hidden">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] space-y-1">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">Average Tuition Fee</span>
                                    <p className="text-lg sm:text-xl font-bold font-heading text-[#0F1B3D]">{country.feeBreakdown.tuitionPerYear}</p>
                                </div>
                                <div className="p-5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] space-y-1">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">Hostel & Indian Mess</span>
                                    <p className="text-lg sm:text-xl font-bold font-heading text-[#0F1B3D]">{country.feeBreakdown.hostelMessPerYear}</p>
                                </div>
                                <div className="p-5 rounded-xl bg-[#0F1B3D] text-white space-y-1 sm:col-span-2">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Total Complete Package (INR)</span>
                                    <p className="text-2xl sm:text-3xl font-bold font-heading text-white">{country.feeBreakdown.totalPackageINR}</p>
                                    <p className="text-xs text-slate-300 pt-1">Approx. {country.feeBreakdown.totalPackageUSD} including tuition, hostel accommodation & Indian mess fees.</p>
                                </div>
                            </div>

                            <p className="text-xs text-[#4B5563] font-light italic">
                                * Note: Exact fee schedules vary slightly by university. Tuition fees are payable directly to the university cashier/bank account per semester. Zero hidden agent charges.
                            </p>
                        </div>
                    </section>

                    {/* Section 4: Top Recognized Universities */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D]">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D] tracking-tight">
                                Top Medical Universities in {country.name}
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {country.universities.map((uni, index) => (
                                <div key={index} className="card-texture p-6 sm:p-7 rounded-2xl flex flex-col justify-between overflow-hidden group">
                                    <div>
                                        <div className="flex items-start justify-between gap-2 mb-3">
                                            <h3 className="font-bold text-lg font-heading text-[#0F1B3D] group-hover:text-[#1B4332] transition-colors leading-snug">
                                                {uni.name}
                                            </h3>
                                            {uni.tuitionFeeUSD && (
                                                <span className="shrink-0 px-2.5 py-1 rounded-full bg-[#F7F8FA] border border-[#E5E7EB] text-[11px] font-semibold text-[#0F1B3D]">
                                                    {uni.tuitionFeeUSD}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-xs text-[#4B5563] mb-4 flex items-center font-medium">
                                            <MapPin className="h-3.5 w-3.5 mr-1 text-[#1B4332]" /> {uni.location}
                                            {uni.established && <span className="ml-2 text-[#9CA3AF]">• Est. {uni.established}</span>}
                                        </p>

                                        <p className="text-[#4B5563] text-xs leading-relaxed mb-6 font-light">
                                            {uni.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {uni.highlights.map((tag, i) => (
                                                <span key={i} className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D] rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-[#EDEEF1]">
                                        <BookConsultationBtn
                                            className="w-full bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 rounded-full h-11 text-xs font-semibold"
                                            label={`Inquire About ${uni.name}`}
                                            size="sm"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 5: Admission Eligibility & Document Checklist */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D]">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D] tracking-tight">
                                Admission Eligibility & Document Checklist
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Eligibility Criteria */}
                            <div className="card-texture p-6 sm:p-7 rounded-2xl space-y-4">
                                <h3 className="text-lg font-bold font-heading text-[#0F1B3D] flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#1B4332]" /> Eligibility Criteria
                                </h3>
                                <ul className="space-y-3 text-xs text-[#4B5563] font-light leading-relaxed">
                                    {country.admissionRequirements.map((req, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <div className="h-1.5 w-1.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Required Documents */}
                            <div className="card-texture p-6 sm:p-7 rounded-2xl space-y-4">
                                <h3 className="text-lg font-bold font-heading text-[#0F1B3D] flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-[#0F1B3D]" /> Documents Required
                                </h3>
                                <ul className="space-y-3 text-xs text-[#4B5563] font-light leading-relaxed">
                                    {country.documentsRequired.map((doc, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <div className="h-1.5 w-1.5 rounded-full bg-[#0F1B3D] mt-1.5 shrink-0" />
                                            <span>{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Student Life, Safety & Halal Food */}
                    <section className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D] tracking-tight">
                            Student Life, Safety & Kashmiri Food
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="card-texture p-6 rounded-2xl space-y-2">
                                <h3 className="text-base font-bold font-heading text-[#0F1B3D] flex items-center gap-2">
                                    <Shield className="h-4 w-4 text-[#1B4332]" /> Safety & Security
                                </h3>
                                <p className="text-[#4B5563] text-xs font-light leading-relaxed">{country.safety}</p>
                            </div>
                            <div className="card-texture p-6 rounded-2xl space-y-2">
                                <h3 className="text-base font-bold font-heading text-[#0F1B3D] flex items-center gap-2">
                                    <Utensils className="h-4 w-4 text-[#C9A227]" /> Indian & Halal Mess
                                </h3>
                                <p className="text-[#4B5563] text-xs font-light leading-relaxed">{country.food}</p>
                            </div>
                            <div className="card-texture p-6 rounded-2xl space-y-2">
                                <h3 className="text-base font-bold font-heading text-[#0F1B3D] flex items-center gap-2">
                                    <Cloud className="h-4 w-4 text-[#0F1B3D]" /> Climate & Weather
                                </h3>
                                <p className="text-[#4B5563] text-xs font-light leading-relaxed">{country.climate}</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: FAQs (SEO Rich Snippets) */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D]">
                                <HelpCircle className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D] tracking-tight">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {country.faqs.map((faq, index) => (
                                <details key={index} className="card-texture p-5 rounded-2xl group cursor-pointer">
                                    <summary className="font-bold text-base font-heading text-[#0F1B3D] flex items-center justify-between list-none">
                                        <span>{faq.question}</span>
                                        <span className="text-[#9CA3AF] transition-transform group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="mt-4 text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed border-t border-[#EDEEF1] pt-3">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </section>

                </div>

                {/* Right Sticky Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="sticky top-28">
                        <div className="card-texture rounded-2xl overflow-hidden shadow-xs">
                            <div className="bg-[#0F1B3D] p-6 text-white">
                                <h3 className="font-heading font-bold text-xl">Quick Admission Summary</h3>
                                <p className="text-slate-300 text-xs font-light mt-1">Study MBBS in {country.name}</p>
                            </div>

                            <div className="p-6 space-y-6">
                                <div>
                                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#9CA3AF] block mb-1">Total Fee Package</span>
                                    <p className="text-2xl font-bold font-heading text-[#0F1B3D]">{country.feeRange}</p>
                                    <p className="text-xs text-[#1B4332] font-semibold mt-0.5">Payable in annual instalments</p>
                                </div>

                                <div className="w-full h-px bg-[#EDEEF1]" />

                                <div className="space-y-3 text-xs">
                                    <div className="flex justify-between">
                                        <span className="text-[#9CA3AF]">Course Duration:</span>
                                        <span className="font-semibold text-[#0F1B3D]">{country.duration}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[#9CA3AF]">Instruction Medium:</span>
                                        <span className="font-semibold text-[#0F1B3D]">{country.medium}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[#9CA3AF]">Intake Batch:</span>
                                        <span className="font-semibold text-[#1B4332]">{country.intakePeriod}</span>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-[#EDEEF1]" />

                                <div>
                                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#9CA3AF] block mb-3">Key Eligibility Criteria</span>
                                    <ul className="space-y-2">
                                        {country.admissionRequirements.slice(0, 3).map((req, i) => (
                                            <li key={i} className="text-xs text-[#4B5563] font-light flex items-start gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-2 space-y-3">
                                    <BookConsultationBtn
                                        className="w-full h-12 text-sm font-semibold rounded-full bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90"
                                        label="Book Free Consultation"
                                    />
                                    <p className="text-[11px] text-center text-[#4B5563] font-light">
                                        Direct counseling by Dr. Mustansir • No hidden fees
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Bottom CTA Banner */}
            <section className="mt-24 py-16 bg-[#F7F8FA] border-t border-[#EDEEF1]">
                <Container className="text-center max-w-3xl space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0F1B3D] tracking-tight">
                        Need Guidance on MBBS in {country.name}?
                    </h2>
                    <p className="text-[#4B5563] text-base font-light leading-relaxed">
                        Speak directly with Dr. Mustansir to evaluate your NEET score, eligibility, and university selection with complete fee transparency.
                    </p>
                    <div className="pt-2">
                        <BookConsultationBtn
                            size="lg"
                            className="bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 h-13 px-9 text-base font-semibold rounded-full shadow-md"
                            label={`Consult Dr. Mustansir About ${country.name}`}
                        />
                    </div>
                </Container>
            </section>
        </div>
    );
}
