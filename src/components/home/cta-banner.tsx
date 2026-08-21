"use client";

import { Container } from "@/components/ui/container";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";
import { ShieldCheck } from "lucide-react";

export function CtaBanner() {
    return (
        <section className="py-20 border-y border-[#EDEEF1] bg-[#F7F8FA]">
            <Container>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0F1B3D] tracking-tight leading-tight">
                            Start Your MBBS Journey With <span className="italic font-bold">Trusted Guidance</span>.
                        </h2>
                        <p className="text-[#4B5563] text-base sm:text-lg font-light leading-relaxed">
                            Book a free session today with Dr. Mustansir to evaluate university eligibility and fee breakdowns.
                        </p>
                        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1B4332] pt-1">
                            <ShieldCheck className="w-4 h-4 text-[#1B4332]" />
                            <span>No hidden fees. 100% transparent admission process.</span>
                        </div>
                    </div>

                    <div className="shrink-0">
                        <BookConsultationBtn
                            size="lg"
                            className="bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 h-14 px-9 text-base font-semibold rounded-full shadow-md"
                            label="Book Free Consultation"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
