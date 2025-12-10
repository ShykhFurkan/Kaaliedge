import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { countries } from "@/data/countries";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MapPin, Cloud, Shield, Utensils } from "lucide-react";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const country = countries.find((c) => c.slug === slug);
    if (!country) return { title: "Country Not Found" };

    const keywords = [
        `MBBS in ${country.name}`,
        "Medical colleges abroad",
        "MBBS abroad for Kashmir students",
        `Study Medicine in ${country.name}`,
        `${country.name} Medical Universities`,
        "Affordable MBBS",
        "NMC Recognized Universities"
    ];

    return {
        title: `MBBS in ${country.name} | Affordable Medical Education Abroad`,
        description: `Study MBBS in ${country.name}. Discover top universities like ${country.universities[0]?.name}, fees starting from ${country.feeRange}. Safe environment for Kashmiri students with English medium education.`,
        keywords: keywords,
        openGraph: {
            title: `MBBS in ${country.name} | Kaali Edge`,
            description: `Complete guide to studying MBBS in ${country.name}. Recognized universities, affordable fees, and safety for Indian students.`,
            type: "article",
            url: `https://kaaliedge.com/countries/${country.slug}`,
        }
    };
}

// Generate static params for all known countries
export async function generateStaticParams() {
    return countries.map((country) => ({
        slug: country.slug,
    }));
}

export default async function CountryDetailsPage({ params }: Props) {
    const { slug } = await params;
    const country = countries.find((c) => c.slug === slug);

    if (!country) {
        notFound();
    }

    // JSON-LD Schema for Educational Program / Course
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": `MBBS in ${country.name}`,
        "description": country.description,
        "provider": {
            "@type": "EducationalOrganization",
            "name": "Kaali Edge",
            "sameAs": "https://kaaliedge.com"
        },
        "educationalCredentialAwarded": "MBBS",
        "offers": {
            "@type": "Offer",
            "category": "Tuition Fees",
            "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "INR",
                "minPrice": country.feeRange.split(' ')[0], // Approximate parsing
            }
        },
        "hasCourseInstance": country.universities.map(uni => ({
            "@type": "CourseInstance",
            "name": uni.name,
            "location": uni.location
        }))
    };

    return (
        <div className="bg-transparent min-h-screen pb-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Header - Redesigned for Premium Minimalist Look */}
            <section className="bg-transparent pt-[72px] pb-12 border-b border-border relative overflow-hidden">
                <Container className="relative z-10">
                    <Link href="/#countries" className="text-slate-500 hover:text-primary text-sm mb-8 inline-flex items-center transition-colors font-medium tracking-wide group">
                        <span className="group-hover:-translate-x-1 transition-transform inline-block mr-1">&larr;</span> Back to Countries
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-slate-900 mb-6 tracking-tight leading-tight">
                        MBBS in {country.name}
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl text-slate-600 font-light leading-relaxed">
                        {country.description}
                    </p>
                </Container>
            </section>

            <Container className="mt-24 grid lg:grid-cols-12 gap-12 lg:gap-24">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-20">

                    <section>
                        <h2 className="text-3xl font-bold font-heading text-slate-900 mb-8 tracking-tight">Overview</h2>
                        <div className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-loose">
                            <p>{country.overview}</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold font-heading text-slate-900 mb-8 tracking-tight">Top Universities</h2>
                        <div className="grid sm:grid-cols-2 gap-8">
                            {country.universities.map((uni, index) => (
                                <Card key={index} className="bg-card border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 rounded-xl group h-full flex flex-col">
                                    <CardContent className="p-8 flex flex-col h-full">
                                        <div className="flex-1">
                                            <h3 className="font-bold text-xl text-slate-900 font-heading mb-2 group-hover:text-primary transition-colors">{uni.name}</h3>
                                            <p className="text-sm text-slate-500 mb-4 flex items-center font-medium"><MapPin className="h-4 w-4 mr-2" /> {uni.location}</p>

                                            <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                                                {uni.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {uni.highlights.map((tag, i) => (
                                                    <span key={i} className="text-[11px] uppercase tracking-wider font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-border mt-auto">
                                            <BookConsultationBtn
                                                className="w-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200/50"
                                                label="Book Consultation"
                                                size="sm"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold font-heading text-slate-900 mb-8 tracking-tight">Why Choose {country.name}?</h2>
                        <ul className="grid gap-4">
                            {country.whyChoose.map((reason, index) => (
                                <li key={index} className="flex items-start gap-4 bg-muted p-6 rounded-2xl">
                                    <div className="bg-card p-2 rounded-full shadow-sm text-primary shrink-0">
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <span className="text-slate-700 leading-relaxed font-light py-1">{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-border">
                        <section className="text-center md:text-left">
                            <h3 className="text-lg font-bold font-heading text-slate-900 mb-3 flex items-center justify-center md:justify-start gap-2"><Shield className="h-5 w-5 text-primary" /> Safety</h3>
                            <p className="text-slate-600 text-sm font-light leading-relaxed">{country.safety}</p>
                        </section>
                        <section className="text-center md:text-left">
                            <h3 className="text-lg font-bold font-heading text-slate-900 mb-3 flex items-center justify-center md:justify-start gap-2"><Utensils className="h-5 w-5 text-primary" /> Food & Living</h3>
                            <p className="text-slate-600 text-sm font-light leading-relaxed">{country.food}</p>
                        </section>
                        <section className="text-center md:text-left">
                            <h3 className="text-lg font-bold font-heading text-slate-900 mb-3 flex items-center justify-center md:justify-start gap-2"><Cloud className="h-5 w-5 text-primary" /> Climate</h3>
                            <p className="text-slate-600 text-sm font-light leading-relaxed">{country.climate}</p>
                        </section>
                    </div>

                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-12">
                    <div className="sticky top-32">
                        <Card className="border-none shadow-[0_20px_50px_rgb(0,0,0,0.05)] bg-card rounded-3xl overflow-hidden">
                            <div className="bg-primary p-8 text-primary-foreground">
                                <CardTitle className="font-heading text-xl md:text-2xl">Quick Facts</CardTitle>
                                <p className="text-slate-400 text-sm font-light mt-2">Key information at a glance</p>
                            </div>
                            <CardContent className="p-8 space-y-8">
                                <div>
                                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-2">Total Budget Range</span>
                                    <p className="text-2xl font-bold font-heading text-primary">{country.feeRange}</p>
                                </div>
                                <div className="w-full h-px bg-border" />
                                <div>
                                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-2">Course Duration</span>
                                    <p className="font-medium text-slate-700 text-lg">{country.duration}</p>
                                </div>
                                <div className="w-full h-px bg-border" />
                                <div>
                                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-4">Admission Requirements</span>
                                    <ul className="space-y-3">
                                        {country.admissionRequirements.map((req, i) => (
                                            <li key={i} className="text-sm text-slate-600 font-light flex items-start gap-3">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <BookConsultationBtn className="w-full h-14 text-lg shadow-xl shadow-slate-200 mt-6 rounded-xl font-medium bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-white dark:text-black" label="Book Consultation" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
}
