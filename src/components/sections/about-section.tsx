
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { Award, CheckCircle2, Calendar } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="bg-white py-24 border-b border-[#EDEEF1]">
            <Container className="space-y-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#0F1B3D] mb-4 tracking-tight">
                        About Kaali Edge
                    </h2>
                    <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
                        Founded with a mission to bring restraint, transparency, and trust to medical education consultancy in Kashmir.
                    </p>
                </div>

                {/* Main Story & Founder Photo Grid */}
                <div className="grid md:grid-cols-12 gap-8 items-center">
                    {/* Story Content */}
                    <div className="md:col-span-7 space-y-6">
                        <div className="p-8 rounded-2xl card-texture space-y-6 overflow-hidden">
                            <h3 className="text-2xl font-bold font-heading text-[#0F1B3D]">
                                Our Story & Philosophy
                            </h3>
                            <p className="text-[#4B5563] leading-relaxed text-base font-light">
                                Kaali Edge was established in 2020 by <strong className="font-semibold text-[#0F1B3D]">Dr. Mustansir</strong>, a medical doctor who personally experienced the complexities and misleading promises surrounding study-abroad options. Witnessing Kashmir students trapped by hidden charges and unverified institutions, he created a consultancy built solely on student welfare.
                            </p>
                            <p className="text-[#4B5563] leading-relaxed text-base font-light">
                                Operating from our central office in Anantnag, we provide honest academic guidance, transparent fee documentation, and continuous local support across the entire 6-year MBBS journey.
                            </p>

                            <div className="pt-4 border-t border-[#E5E7EB] flex flex-wrap gap-4 text-xs font-semibold text-[#0F1B3D]">
                                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full border border-[#E5E7EB]">
                                    <Award className="w-4 h-4 text-[#C9A227]" />
                                    <span>Dr. Mustansir, MBBS (Lead Consultant)</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full border border-[#E5E7EB]">
                                    <CheckCircle2 className="w-4 h-4 text-[#1B4332]" />
                                    <span>WHO & NMC Verification Standard</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Founder Image Card */}
                    <div className="md:col-span-5">
                        <div className="relative rounded-2xl overflow-hidden card-texture p-2 group">
                            <div className="relative w-full h-[380px] sm:h-[420px] rounded-xl overflow-hidden">
                                <Image
                                    src="/images/dr-mustansir.png"
                                    alt="Dr. Mustansir - Founder of Kaali Edge"
                                    fill
                                    className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h4 className="font-bold text-lg font-heading text-[#0F1B3D]">Dr. Mustansir</h4>
                                <p className="text-xs text-[#4B5563] font-medium uppercase tracking-wider">MBBS | Founder & Principal Medical Counselor</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple Horizontal Milestone Bar */}
                <div className="p-6 rounded-2xl card-texture grid grid-cols-1 sm:grid-cols-3 gap-6 text-center overflow-hidden">
                    <div className="space-y-1">
                        <span className="text-2xl font-bold font-heading text-[#0F1B3D]">2020</span>
                        <p className="text-xs uppercase tracking-wider font-semibold text-[#4B5563]">Founded in Anantnag</p>
                    </div>
                    <div className="space-y-1 border-y sm:border-y-0 sm:border-x border-[#E5E7EB] py-4 sm:py-0">
                        <span className="text-2xl font-bold font-heading text-[#0F1B3D]">500+</span>
                        <p className="text-xs uppercase tracking-wider font-semibold text-[#4B5563]">Students Successfully Placed</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-2xl font-bold font-heading text-[#0F1B3D]">100%</span>
                        <p className="text-xs uppercase tracking-wider font-semibold text-[#4B5563]">Fee Transparency Guarantee</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
