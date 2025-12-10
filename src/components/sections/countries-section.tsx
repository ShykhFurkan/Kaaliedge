
import { Container } from "@/components/ui/container";
import { countries } from "@/data/countries";
import Link from "next/link";
import { ArrowRight, Wallet, Clock } from "lucide-react";

export function CountriesSection() {
    return (
        <section id="countries" className="bg-transparent py-24 relative overflow-hidden border-t border-slate-200/50">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight">Choose Your Destination</h2>
                    <p className="text-xl text-slate-600 font-light leading-relaxed">
                        Explore top universities across the globe tailored for Indian students.
                    </p>
                </div>

                <div className="flex items-center gap-2 mb-4 md:hidden text-xs font-bold text-black animate-pulse px-1">
                    <ArrowRight className="w-3 h-3" />
                    <span>Swipe right to see more</span>
                </div>

                <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
                    {countries.map((country, index) => {
                        // Color Theme Logic based on User Request directly matching Mission Section
                        let themeClass = "";
                        let textClass = "";
                        let watermarkClass = "";
                        let bgClass = "";
                        let buttonClass = "";
                        let borderClass = "";
                        let iconClass = "";

                        if (country.slug === 'russia' || country.slug === 'kyrgyzstan') {
                            // Blue Theme (Matches Transparency)
                            bgClass = "bg-blue-50/80 hover:bg-blue-100/80 hover:shadow-blue-200/50";
                            textClass = "text-blue-900";
                            watermarkClass = "text-blue-200/40";
                            buttonClass = "text-blue-900 border-blue-200 bg-white/60 hover:bg-blue-100 hover:text-black hover:border-blue-600";
                            borderClass = "border-blue-200";
                            iconClass = "text-blue-600";
                        } else if (country.slug === 'uzbekistan' || country.slug === 'bangladesh') {
                            // Amber Theme (Matches Student First)
                            bgClass = "bg-amber-50/80 hover:bg-amber-100/80 hover:shadow-amber-200/50";
                            textClass = "text-amber-900";
                            watermarkClass = "text-amber-200/40";
                            buttonClass = "text-amber-900 border-amber-200 bg-white/60 hover:bg-amber-100 hover:text-black hover:border-amber-600";
                            borderClass = "border-amber-200";
                            iconClass = "text-amber-600";
                        } else if (country.slug === 'kazakhstan' || country.slug === 'georgia') {
                            // Green Theme (Matches Continuous Support)
                            bgClass = "bg-green-50/80 hover:bg-green-100/80 hover:shadow-green-200/50";
                            textClass = "text-green-900";
                            watermarkClass = "text-green-200/40";
                            buttonClass = "text-green-900 border-green-200 bg-white/60 hover:bg-green-100 hover:text-black hover:border-green-600";
                            borderClass = "border-green-200";
                            iconClass = "text-green-600";
                        } else {
                            // Fallback / Iran (Indigo/Slate)
                            bgClass = "bg-indigo-50/80 hover:bg-indigo-100/80 hover:shadow-indigo-200/50";
                            textClass = "text-indigo-900";
                            watermarkClass = "text-indigo-200/40";
                            buttonClass = "text-indigo-900 border-indigo-200 bg-white/60 hover:bg-indigo-100 hover:text-black hover:border-indigo-600";
                            borderClass = "border-indigo-200";
                            iconClass = "text-indigo-600";
                        }

                        return (
                            <div
                                key={country.slug}
                                className="min-w-[85vw] md:min-w-0 snap-center fade-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Link href={`/countries/${country.slug}`} className="block group h-full">
                                    <div className={`relative h-full overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 pt-12 pb-8 px-8 rounded-3xl border ${borderClass} shadow-xl backdrop-blur-md ${bgClass}`}>

                                        {/* Massive Watermark Code */}
                                        <div className={`absolute -right-6 -top-4 text-[12rem] font-black leading-none tracking-tighter select-none pointer-events-none transition-colors duration-500 font-heading z-0 opacity-40 mix-blend-multiply ${watermarkClass}`}>
                                            {country.code}
                                        </div>

                                        <div className="relative z-10 flex flex-col h-full">
                                            {/* Flag & Title */}
                                            <div className="mb-8">
                                                <div className="text-5xl mb-6 filter drop-shadow-sm">{country.flag}</div>
                                                <h3 className={`text-3xl font-bold font-heading mb-2 ${textClass}`}>{country.name}</h3>
                                            </div>

                                            {/* Description */}
                                            <p className="text-slate-600 font-light mb-10 leading-relaxed min-h-[50px] text-[15px]">
                                                {country.description}
                                            </p>

                                            {/* Info Pills */}
                                            <div className="flex flex-wrap gap-3 mb-10 mt-auto">
                                                <div className="flex items-center gap-2 bg-white/80 border border-slate-100 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide text-slate-600 shadow-sm backdrop-blur-sm">
                                                    <Clock className={`w-3.5 h-3.5 ${iconClass}`} />
                                                    <span>{country.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2 bg-white/80 border border-slate-100 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide text-slate-600 shadow-sm backdrop-blur-sm">
                                                    <Wallet className={`w-3.5 h-3.5 ${iconClass}`} />
                                                    <span className="truncate max-w-[120px]">{country.feeRange}</span>
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            <div className={`w-full py-4 rounded-xl flex items-center justify-center font-bold text-sm tracking-wide transition-all duration-300 border shadow-sm group-hover:shadow-md ${buttonClass}`}>
                                                View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
