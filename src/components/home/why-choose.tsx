
import { Container } from "@/components/ui/container";
import { values } from "@/data/why-choose";
import { Quote } from "lucide-react";

export function WhyChoose() {
    return (
        <section id="why-choose" className="py-24 bg-white border-b border-[#EDEEF1]">
            <Container className="space-y-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#0F1B3D] mb-4 tracking-tight">
                        Our Mission & Values
                    </h2>
                    <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
                        Ethical principles that govern every admission decision and student partnership.
                    </p>
                </div>

                {/* 4 Core Value Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="fade-up h-full"
                            style={{ animationDelay: `${index * 0.08}s` }}
                        >
                            <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl card-texture overflow-hidden">
                                <div>
                                    {/* Number Indicator */}
                                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-lg font-bold font-heading text-[#0F1B3D] mb-6 shadow-2xs">
                                        {item.number}
                                    </div>

                                    <h3 className="text-xl font-bold font-heading text-[#0F1B3D] mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-[#4B5563] text-sm font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Founder Quote Card */}
                <div className="p-8 sm:p-10 rounded-2xl card-texture relative overflow-hidden">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] shrink-0 text-[#C9A227]">
                            <Quote className="w-8 h-8 rotate-180" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-[#0F1B3D] text-lg sm:text-xl font-heading italic leading-relaxed">
                                "A consultancy sells trust, not hype. Parents sending their children abroad deserve total honesty about costs, recognition, and safety."
                            </p>
                            <p className="text-xs uppercase tracking-widest font-semibold text-[#1B4332]">
                                — Dr. Mustansir, Founder & Lead Medical Consultant
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
