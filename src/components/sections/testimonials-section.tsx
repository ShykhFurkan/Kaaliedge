import { Container } from "@/components/ui/container";
import { testimonials } from "@/data/testimonials";
import { Quote, Star } from "lucide-react";
import { UnifiedCard } from "@/components/ui/unified-card";

export function TestimonialsSection() {
    // Review Schema for SEO
    const reviewJsonLd = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Kaali Edge",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": testimonials.length.toString(),
            "bestRating": "5"
        },
        "review": testimonials.map((t) => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": t.name
            },
            "reviewBody": t.message,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
            }
        }))
    };

    return (
        <section id="testimonials" className="bg-white py-24 border-b border-[#EDEEF1] overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
            />
            <Container className="space-y-16">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-1 mb-3 text-[#C9A227]">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#C9A227]" />
                        ))}
                        <span className="text-xs font-semibold text-[#0F1B3D] ml-1.5">4.9 / 5 Rating from Students & Parents</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#0F1B3D] mb-4 tracking-tight">
                        Success Stories
                    </h2>
                    <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
                        Authentic experiences from Kashmiri medical students studying across top foreign universities.
                    </p>
                </div>

                {/* Mobile View: Manual Touch/Drag Carousel */}
                <div className="block lg:hidden overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 pb-4 -mx-4 px-4">
                    <div className="flex gap-4">
                        {testimonials.map((t, index) => {
                            const initials = t.name
                                .split(" ")
                                .map((n) => n[0])
                                .slice(0, 2)
                                .join("");

                            return (
                                <div key={index} className="w-[85vw] max-w-[340px] shrink-0 snap-center">
                                    <UnifiedCard className="h-full">
                                        <div>
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="p-2 rounded-xl bg-white border border-[#E5E7EB] text-[#C9A227]">
                                                    <Quote className="h-4 w-4 rotate-180" />
                                                </div>
                                                <span className="px-3 py-1 rounded-full bg-[#F7F8FA] border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D]">
                                                    {t.country}
                                                </span>
                                            </div>
                                            <p className="text-[#4B5563] italic text-xs leading-relaxed mb-6 font-light">
                                                "{t.message}"
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-[#EDEEF1] flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#0F1B3D] text-white flex items-center justify-center font-bold text-xs font-heading shrink-0">
                                                {initials}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-sm font-heading text-[#0F1B3D]">{t.name}</h3>
                                                <p className="text-[11px] text-[#4B5563] font-medium">{t.university}</p>
                                            </div>
                                        </div>
                                    </UnifiedCard>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Desktop View: Static 3-Column Grid */}
                <div className="hidden lg:grid grid-cols-3 gap-8">
                    {testimonials.map((t, index) => {
                        const initials = t.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("");

                        return (
                            <UnifiedCard key={index} className="h-full">
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#C9A227]">
                                            <Quote className="h-5 w-5 rotate-180" />
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-[#F7F8FA] border border-[#E5E7EB] text-xs font-semibold text-[#0F1B3D]">
                                            {t.country}
                                        </span>
                                    </div>

                                    <p className="text-[#4B5563] italic text-sm font-light leading-relaxed mb-6">
                                        "{t.message}"
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-[#EDEEF1] flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-full bg-[#0F1B3D] text-white flex items-center justify-center font-bold text-sm font-heading shrink-0 shadow-2xs">
                                        {initials}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base font-heading text-[#0F1B3D]">
                                            {t.name}
                                        </h3>
                                        <p className="text-xs text-[#4B5563] font-medium">
                                            {t.university}
                                        </p>
                                        <p className="text-[11px] text-[#9CA3AF] uppercase tracking-wider mt-0.5">
                                            Batch of {t.year}
                                        </p>
                                    </div>
                                </div>
                            </UnifiedCard>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
