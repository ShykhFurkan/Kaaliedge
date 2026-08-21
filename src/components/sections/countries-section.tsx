
import { Container } from "@/components/ui/container";
import { countries } from "@/data/countries";
import Link from "next/link";
import { ArrowRight, Wallet, Clock, Sparkles } from "lucide-react";

export function CountriesSection() {
    return (
        <section id="countries" className="bg-[#F7F8FA] py-24 relative overflow-hidden border-t border-[#EDEEF1]">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#0F1B3D] mb-4 tracking-tight">
                        Choose Your Destination
                    </h2>
                    <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
                        Explore WHO & NMC recognized medical universities across top global destinations tailored for Indian students.
                    </p>
                </div>

                {/* Mobile View: Touch / Drag Scrollable Slider */}
                <div className="block sm:hidden relative">
                    <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-[#4B5563]">
                        <ArrowRight className="w-3.5 h-3.5 text-[#0F1B3D]" />
                        <span>Swipe / drag to view all 6 destinations</span>
                    </div>

                    <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 pb-4 -mx-4 px-4 active:cursor-grabbing">
                        {countries.map((country, index) => {
                            const isFeatured = country.slug === 'russia' || country.slug === 'uzbekistan';

                            return (
                                <div
                                    key={country.slug}
                                    className="w-[82vw] max-w-[300px] shrink-0 snap-center"
                                >
                                    <Link href={`/destinations/${country.slug}`} className="block group h-full">
                                        <div className="relative h-full flex flex-col justify-between p-6 rounded-2xl card-texture overflow-hidden">
                                            {isFeatured && (
                                                <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#C9A227]/10 text-[#C9A227] text-[10px] font-semibold uppercase tracking-wider border border-[#C9A227]/20">
                                                    <Sparkles className="w-2.5 h-2.5" /> Popular
                                                </div>
                                            )}
                                            <div>
                                                <div className="mb-4">
                                                    <div className="text-3xl mb-2">{country.flag}</div>
                                                    <h3 className="text-xl font-bold font-heading text-[#0F1B3D]">
                                                        {country.name}
                                                    </h3>
                                                </div>
                                                <p className="text-[#4B5563] text-xs font-light leading-relaxed mb-4 line-clamp-3">
                                                    {country.description}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-1.5 mb-3 pt-3 border-t border-[#EDEEF1]">
                                                    <span className="text-[11px] font-semibold text-[#0F1B3D] bg-[#F7F8FA] border border-[#E5E7EB] px-2.5 py-1 rounded-full">
                                                        💰 {country.feeRange}
                                                    </span>
                                                </div>
                                                <div className="inline-flex items-center font-semibold text-xs text-[#0F1B3D]">
                                                    Explore Universities <ArrowRight className="ml-1 h-3.5 w-3.5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tablet & Desktop View: 3x2 Grid */}
                <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {countries.map((country, index) => {
                        const isFeatured = country.slug === 'russia' || country.slug === 'uzbekistan';

                        return (
                            <div
                                key={country.slug}
                                className="fade-up"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <Link href={`/destinations/${country.slug}`} className="block group h-full">
                                    <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl card-texture overflow-hidden">
                                        {/* Optional Featured Badge */}
                                        {isFeatured && (
                                            <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#C9A227] text-xs font-semibold uppercase tracking-wider border border-[#C9A227]/20">
                                                <Sparkles className="w-3 h-3" /> Popular Choice
                                            </div>
                                        )}

                                        <div>
                                            {/* Flag & Title */}
                                            <div className="mb-6">
                                                <div className="text-4xl mb-4">{country.flag}</div>
                                                <h3 className="text-2xl font-bold font-heading text-[#0F1B3D] group-hover:text-[#1B4332] transition-colors">
                                                    {country.name}
                                                </h3>
                                            </div>

                                            {/* Description */}
                                            <p className="text-[#4B5563] text-sm font-light leading-relaxed mb-6 line-clamp-3">
                                                {country.description}
                                            </p>
                                        </div>

                                        <div>
                                            {/* Info Badges */}
                                            <div className="flex flex-wrap items-center gap-2 mb-6 pt-4 border-t border-[#EDEEF1]">
                                                <div className="inline-flex items-center gap-1.5 bg-[#F7F8FA] border border-[#E5E7EB] px-3 py-1.5 rounded-full text-xs font-medium text-[#0F1B3D] whitespace-nowrap">
                                                    <Clock className="w-3.5 h-3.5 text-[#1B4332]" />
                                                    <span>{country.duration}</span>
                                                </div>
                                                <div className="inline-flex items-center gap-1.5 bg-[#F7F8FA] border border-[#E5E7EB] px-3 py-1.5 rounded-full text-xs font-semibold text-[#0F1B3D] whitespace-nowrap">
                                                    <Wallet className="w-3.5 h-3.5 text-[#C9A227]" />
                                                    <span>{country.feeRange}</span>
                                                </div>
                                            </div>

                                            {/* Action Link */}
                                            <div className="inline-flex items-center font-semibold text-sm text-[#0F1B3D] group-hover:text-[#1B4332] transition-colors">
                                                Explore Universities <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
