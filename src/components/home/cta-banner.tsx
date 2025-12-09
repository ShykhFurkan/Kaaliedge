"use client";

import { Container } from "@/components/ui/container";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";

export function CtaBanner() {
    return (
        <section className="py-24 border-y border-blue-200/60 bg-blue-50/80 backdrop-blur-md relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/20 blur-[120px] rounded-full -z-10" />

            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                    <div className="space-y-6 max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
                            Start your MBBS journey with <span className="text-primary italic">trusted guidance</span>.
                        </h2>
                        <p className="text-slate-600 text-xl font-light max-w-2xl leading-relaxed">
                            Book a free consultation today. Dr. Mustansir and the team are ready to help you plan your future.
                        </p>
                    </div>
                    <BookConsultationBtn size="lg" className="bg-slate-900 text-white hover:bg-slate-800 font-semibold h-16 px-10 text-lg shadow-xl shadow-blue-200/50 rounded-full transition-all hover:scale-105 hover:shadow-2xl" label="Book Free Consultation" />
                </div>
            </Container>
        </section>
    );
}
