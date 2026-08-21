"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";
import { CountUp } from "@/components/ui/count-up";
import { useIsMobile } from "@/hooks/use-is-mobile";

const partnerLogos = [
    "Kazan Federal University",
    "Tashkent State Medical University",
    "Osh State University",
    "Tbilisi State Medical University",
    "Semey State Medical University"
];

export function Hero() {
    const isMobile = useIsMobile();

    return (
        <section className="relative overflow-hidden py-20 lg:py-28 border-b border-[#E5E7EB]">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/kashmir-hero-bg.png"
                    alt="Kashmir Dal lake and mountain landscape"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                {/* Soft gradient overlay to ensure text contrast while keeping image clearly visible */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/30 to-white/90" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: isMobile ? 0.3 : 0.5 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F1B3D]/5 text-[#0F1B3D] text-xs font-semibold uppercase tracking-wider border border-[#0F1B3D]/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B4332] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1B4332]"></span>
                            </span>
                            Admissions Open for 2026–27
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#0F1B3D] leading-tight tracking-tight">
                            Your Journey to <span className="italic text-[#0F1B3D]">MBBS Abroad</span><br className="hidden sm:block" /> Begins With Trust
                        </h1>

                        <p className="text-lg sm:text-xl text-[#4B5563] leading-relaxed max-w-2xl mx-auto font-light">
                            Guiding Kashmiri students toward global medical careers with transparent fees, ethical counseling, and 6-year complete support.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <BookConsultationBtn
                                size="lg"
                                className="bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 h-13 px-8 text-base font-semibold rounded-full shadow-md"
                                label="Book Free Consultation"
                            />
                            <Link
                                href="/#countries"
                                className="inline-flex items-center justify-center h-13 px-8 text-base font-semibold rounded-full border border-[#0F1B3D] text-[#0F1B3D] bg-white hover:bg-[#F7F8FA] transition-colors"
                            >
                                Explore Destinations
                            </Link>
                        </div>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: isMobile ? 0.4 : 0.7, delay: 0.2 }}
                        className="pt-10 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-[#9CA3AF]"
                    >
                        <div className="text-center">
                            <CountUp end={500} suffix="+" className="block font-bold text-3xl sm:text-4xl font-heading text-[#0F1B3D] mb-1" />
                            <p className="text-xs uppercase tracking-wider font-semibold text-[#4B5563]">Students Placed</p>
                        </div>
                        <div className="w-px h-10 bg-[#E5E7EB] hidden sm:block" />
                        <div className="text-center">
                            <CountUp end={100} suffix="%" className="block font-bold text-3xl sm:text-4xl font-heading text-[#0F1B3D] mb-1" />
                            <p className="text-xs uppercase tracking-wider font-semibold text-[#4B5563]">Fee Transparency</p>
                        </div>
                        <div className="w-px h-10 bg-[#E5E7EB] hidden sm:block" />
                        <div className="text-center">
                            <CountUp end={24} suffix="/7" className="block font-bold text-3xl sm:text-4xl font-heading text-[#0F1B3D] mb-1" />
                            <p className="text-xs uppercase tracking-wider font-semibold text-[#4B5563]">Local Support</p>
                        </div>
                    </motion.div>

                    {/* Animated Marquee Trust Strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="pt-10 border-t border-[#EDEEF1] overflow-hidden"
                    >
                        <p className="text-xs uppercase tracking-widest text-[#9CA3AF] font-semibold mb-6">Partner Medical Universities</p>
                        <div className="relative w-full overflow-hidden no-scrollbar">
                            <div className="animate-marquee-slow flex items-center gap-4 py-1">
                                {[...partnerLogos, ...partnerLogos].map((name, i) => (
                                    <span key={i} className="shrink-0 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] shadow-2xs text-xs font-semibold text-[#0F1B3D]">
                                        🏛️ {name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
