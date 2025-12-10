"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";
import { cn } from "@/lib/utils";
import { CountUp } from "@/components/ui/count-up";
import { useIsMobile } from "@/hooks/use-is-mobile";

export function Hero() {
    const isMobile = useIsMobile();

    return (
        <section className="relative overflow-hidden bg-transparent pt-20 pb-16 lg:pt-24 lg:pb-24 border-b border-border">
            {/* Background patterned hints can be added here with CSS/SVG */}
            {/* Background patterned hints can be added here with CSS/SVG */}


            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: isMobile ? 0.3 : 0.6 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm font-medium border border-primary/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Admissions Open for 2025-26
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-slate-900 leading-tight tracking-tight">
                            Your Journey to <span className="text-primary italic">MBBS Abroad</span> <br className="hidden sm:block" /> Begins With Trust
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            Guiding Kashmiri students toward global medical careers with transparent processes, honest guidance, and complete support.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="w-full sm:w-auto"
                            >
                                <BookConsultationBtn size="lg" className="w-full sm:w-[280px] bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-white dark:text-black h-12 px-8 text-base sm:h-14 sm:px-10 sm:text-lg shadow-xl" label="Book Free Consultation" />
                            </motion.div>

                            {/* Simple SEO-friendly Contact Button */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="w-full sm:w-auto"
                            >
                                <Link
                                    href="/contact"
                                    className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-[280px] bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-white dark:text-black h-12 px-8 text-base sm:h-14 sm:px-10 sm:text-lg shadow-xl")}
                                    aria-label="Contact Kaali Edge Support"
                                >
                                    Contact Support
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.2 : 0.4 }}
                        className="pt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-slate-500"
                    >
                        <div className="text-center">
                            <CountUp end={500} suffix="+" className="block font-bold text-4xl sm:text-5xl font-heading text-slate-900 mb-1" />
                            <p className="text-sm uppercase tracking-wide font-medium">Students Placed</p>
                        </div>
                        <div className="w-px h-12 bg-slate-200 hidden sm:block" />
                        <div className="text-center">
                            <CountUp end={100} suffix="%" className="block font-bold text-4xl sm:text-5xl font-heading text-slate-900 mb-1" />
                            <p className="text-sm uppercase tracking-wide font-medium">Transparent</p>
                        </div>
                        <div className="w-px h-12 bg-slate-200 hidden sm:block" />
                        <div className="text-center">
                            <CountUp end={24} suffix="/7" className="block font-bold text-4xl sm:text-5xl font-heading text-slate-900 mb-1" />
                            <p className="text-sm uppercase tracking-wide font-medium">Support</p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
