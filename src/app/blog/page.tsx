import { Container } from "@/components/ui/container";
import { blogPosts } from "@/data/blog";
import { Metadata } from "next";
import Link from "next/link";
import { Calendar, User, Clock, ArrowRight, BookOpen, Sparkles, Stethoscope, ArrowLeft, Tag } from "lucide-react";
import { UnifiedCard } from "@/components/ui/unified-card";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";

export const metadata: Metadata = {
    title: "MBBS Abroad Student Guides & Articles | Kaali Edge Kashmir",
    description: "Expert articles, NMC 2021 gazette guides, university comparison reviews, and admission advice by Dr. Mustansir for Kashmiri students planning to study MBBS abroad.",
    keywords: [
        "MBBS abroad guide Kashmir",
        "NMC gazette 2021 rules",
        "Best MBBS consultancy Anantnag",
        "FMGE exam preparation tips",
        "Kaali Edge medical blog"
    ],
    alternates: {
        canonical: "https://kaaliedge.com/blog"
    }
};

export default function BlogIndexPage() {
    const featuredPost = blogPosts[0];
    const regularPosts = blogPosts.slice(1);

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
                "name": "Blog",
                "item": "https://kaaliedge.com/blog"
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
                            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Knowledge Center & Student Advice
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0F1B3D] tracking-tight leading-tight">
                            MBBS Abroad Insights & Guides
                        </h1>

                        <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
                            Doctor-led articles, admission advice, NMC 2021 gazette breakdowns, and practical guidance for Kashmiri medical aspirants and parents.
                        </p>

                        {/* Quick Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                <Stethoscope className="w-3.5 h-3.5 text-[#1B4332]" /> Authored by Dr. Mustansir (MBBS)
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D] shadow-2xs">
                                <BookOpen className="w-3.5 h-3.5 text-[#0F1B3D]" /> NMC Gazette 2021 Analysis
                            </span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Featured Article Card */}
            {featuredPost && (
                <Container className="mt-16">
                    <div className="card-texture p-8 sm:p-10 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] hover:border-[#0F1B3D]/30 transition-all duration-200">
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 rounded-full bg-[#0F1B3D] text-white text-xs font-semibold uppercase tracking-wider">
                                        Featured Article
                                    </span>
                                    <span className="text-xs text-[#9CA3AF] flex items-center gap-1 font-medium">
                                        <Clock className="w-3.5 h-3.5 text-[#1B4332]" /> {featuredPost.readTime}
                                    </span>
                                    <span className="text-xs text-[#9CA3AF] flex items-center gap-1 font-medium hidden sm:flex">
                                        <Calendar className="w-3.5 h-3.5 text-[#C9A227]" /> {featuredPost.publishedAt}
                                    </span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D] hover:text-[#1B4332] transition-colors leading-snug">
                                    <Link href={`/blog/${featuredPost.slug}`}>
                                        {featuredPost.title}
                                    </Link>
                                </h2>

                                <p className="text-sm text-[#4B5563] font-light leading-relaxed">
                                    {featuredPost.description}
                                </p>

                                <div className="pt-2 flex items-center gap-4">
                                    <Link
                                        href={`/blog/${featuredPost.slug}`}
                                        className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-[#0F1B3D] text-white text-xs font-semibold hover:bg-[#0F1B3D]/90 transition-colors shadow-xs"
                                    >
                                        Read Full Featured Guide <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#EDEEF1] pt-6 lg:pt-0 lg:pl-8 space-y-3">
                                <span className="text-xs uppercase tracking-wider font-semibold text-[#9CA3AF] block">Author Info:</span>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#0F1B3D] text-white flex items-center justify-center font-bold text-xs font-heading">
                                        DM
                                    </div>
                                    <div>
                                        <span className="font-bold text-sm text-[#0F1B3D] block">{featuredPost.author}</span>
                                        <span className="text-xs text-[#4B5563] font-light">Lead Medical Counselor</span>
                                    </div>
                                </div>
                                <p className="text-xs text-[#4B5563] font-light leading-relaxed pt-1">
                                    Practical guidance based on active hospital rotations and NMC licensing criteria.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            )}

            {/* Articles Grid */}
            <Container className="mt-16 space-y-8">
                <div className="flex items-center justify-between border-b border-[#EDEEF1] pb-4">
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0F1B3D] flex items-center gap-2">
                        <Tag className="w-5 h-5 text-[#1B4332]" /> All Student Guides & Insights
                    </h2>
                    <span className="text-xs text-[#9CA3AF] font-medium">{regularPosts.length + 1} Articles Published</span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="block group h-full">
                            <UnifiedCard className="h-full flex flex-col justify-between p-7">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-[#F7F8FA] border border-[#E5E7EB] text-[11px] font-semibold text-[#0F1B3D] uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-[#9CA3AF] flex items-center gap-1 font-medium">
                                            <Clock className="w-3.5 h-3.5" /> {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold font-heading text-[#0F1B3D] group-hover:text-[#1B4332] transition-colors leading-snug mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-xs text-[#4B5563] font-light leading-relaxed mb-6 line-clamp-3">
                                        {post.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-[#EDEEF1] flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs text-[#4B5563]">
                                        <User className="w-3.5 h-3.5 text-[#0F1B3D]" />
                                        <span>{post.author}</span>
                                    </div>
                                    <span className="inline-flex items-center text-xs font-semibold text-[#0F1B3D] group-hover:translate-x-1 transition-transform">
                                        Read Guide &rarr;
                                    </span>
                                </div>
                            </UnifiedCard>
                        </Link>
                    ))}
                </div>
            </Container>

            {/* Bottom CTA Banner */}
            <Container className="mt-24">
                <div className="card-texture p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto bg-[#F7F8FA] rounded-2xl">
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D]">
                        Have Specific Questions About MBBS Abroad?
                    </h2>
                    <p className="text-sm sm:text-base text-[#4B5563] font-light leading-relaxed max-w-2xl mx-auto">
                        Speak directly with Dr. Mustansir for personalized university matching, fee transparency, and NMC compliance advice.
                    </p>
                    <div className="pt-2">
                        <BookConsultationBtn
                            size="lg"
                            className="bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 h-13 px-9 text-base font-semibold rounded-full shadow-md"
                            label="Book Free Counseling Session"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}
