import { Container } from "@/components/ui/container";
import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, BookOpen, Share2 } from "lucide-react";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Article Not Found | Kaali Edge" };

    return {
        title: `${post.title} | Kaali Edge Medical Blog`,
        description: post.description,
        authors: [{ name: post.author }],
        alternates: {
            canonical: `https://kaaliedge.com/blog/${post.slug}`
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: `https://kaaliedge.com/blog/${post.slug}`,
            siteName: "Kaali Edge Education Consultancy"
        }
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Kaali Edge",
            "logo": {
                "@type": "ImageObject",
                "url": "https://kaaliedge.com/icon.png"
            }
        },
        "datePublished": "2026-02-20",
        "mainEntityOfPage": `https://kaaliedge.com/blog/${post.slug}`
    };

    return (
        <div className="bg-white min-h-screen pb-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />

            {/* Header */}
            <section className="bg-[#F7F8FA] pt-16 pb-20 border-b border-[#EDEEF1]">
                <Container className="max-w-4xl">
                    <Link href="/blog" className="text-[#4B5563] hover:text-[#0F1B3D] text-sm mb-6 inline-flex items-center transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Articles
                    </Link>

                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-[#0F1B3D]/5 border border-[#0F1B3D]/10 text-[#0F1B3D] text-xs font-semibold uppercase tracking-wider">
                                {post.category}
                            </span>
                            <span className="text-xs text-[#9CA3AF] flex items-center gap-1 font-medium">
                                <Clock className="w-3.5 h-3.5" /> {post.readTime}
                            </span>
                            <span className="text-xs text-[#9CA3AF] flex items-center gap-1 font-medium">
                                <Calendar className="w-3.5 h-3.5" /> {post.publishedAt}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0F1B3D] tracking-tight leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-3 pt-2 text-xs text-[#4B5563]">
                            <div className="w-8 h-8 rounded-full bg-[#0F1B3D] text-white flex items-center justify-center font-bold text-xs">
                                KM
                            </div>
                            <div>
                                <span className="font-semibold text-[#0F1B3D] block">{post.author}</span>
                                <span className="text-[#9CA3AF] font-light">Kaali Edge Lead Consultant</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Article Content */}
            <Container className="mt-16 max-w-4xl">
                <div className="grid lg:grid-cols-12 gap-12">
                    <article className="lg:col-span-8 space-y-6 text-[#4B5563] text-base font-light leading-relaxed">
                        {post.content.map((paragraph, idx) => {
                            const isHeading = /^\d+\.\s/.test(paragraph) || paragraph.endsWith(":");
                            const isBullet = paragraph.startsWith("• ") || paragraph.startsWith("- ");
                            const isTableLine = paragraph.includes("|");

                            if (isHeading) {
                                return (
                                    <h2 key={idx} className="text-xl sm:text-2xl font-bold font-heading text-[#0F1B3D] pt-4 pb-1 border-b border-[#EDEEF1]">
                                        {paragraph}
                                    </h2>
                                );
                            }

                            if (isBullet) {
                                return (
                                    <div key={idx} className="flex items-start gap-2.5 pl-2 text-sm sm:text-base text-[#374151]">
                                        <span className="text-[#0F1B3D] font-bold mt-1">•</span>
                                        <p className="leading-relaxed font-light">{paragraph.replace(/^[•-]\s*/, "")}</p>
                                    </div>
                                );
                            }

                            if (isTableLine) {
                                const parts = paragraph.split("|").map((p) => p.trim());
                                return (
                                    <div key={idx} className="overflow-x-auto my-2">
                                        <div className="flex justify-between items-center p-3 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-xs sm:text-sm font-medium text-[#0F1B3D]">
                                            {parts.map((part, pIdx) => (
                                                <span key={pIdx} className={pIdx === 0 ? "font-bold" : ""}>
                                                    {part}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <p key={idx} className="leading-relaxed text-sm sm:text-base">
                                    {paragraph}
                                </p>
                            );
                        })}

                        <div className="pt-8 border-t border-[#EDEEF1]">
                            <div className="card-texture p-6 rounded-2xl space-y-4 bg-[#F7F8FA]">
                                <h3 className="text-lg font-bold font-heading text-[#0F1B3D]">Have Questions About MBBS Admissions?</h3>
                                <p className="text-xs text-[#4B5563] font-light leading-relaxed">
                                    Speak directly with Dr. Mustansir for personalized university matching and fee transparency.
                                </p>
                                <BookConsultationBtn
                                    size="sm"
                                    className="bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 h-10 px-6 text-xs font-semibold rounded-full"
                                    label="Book Free Consultation"
                                />
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="sticky top-28 card-texture p-6 rounded-2xl space-y-4">
                            <h3 className="font-heading font-bold text-base text-[#0F1B3D]">Popular Destinations</h3>
                            <ul className="space-y-2 text-xs font-medium">
                                <li>
                                    <Link href="/destinations/russia" className="text-[#4B5563] hover:text-[#0F1B3D] flex justify-between py-1.5 border-b border-[#EDEEF1]">
                                        <span>🇷🇺 Russia MBBS</span>
                                        <span>₹18–25L</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/destinations/uzbekistan" className="text-[#4B5563] hover:text-[#0F1B3D] flex justify-between py-1.5 border-b border-[#EDEEF1]">
                                        <span>🇺🇿 Uzbekistan MBBS</span>
                                        <span>₹18–22L</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/destinations/kyrgyzstan" className="text-[#4B5563] hover:text-[#0F1B3D] flex justify-between py-1.5 border-b border-[#EDEEF1]">
                                        <span>🇰🇬 Kyrgyzstan MBBS</span>
                                        <span>₹15–20L</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/destinations/kazakhstan" className="text-[#4B5563] hover:text-[#0F1B3D] flex justify-between py-1.5 border-b border-[#EDEEF1]">
                                        <span>🇰🇿 Kazakhstan MBBS</span>
                                        <span>₹20–25L</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
