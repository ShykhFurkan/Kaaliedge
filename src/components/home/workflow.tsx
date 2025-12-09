"use client";

import { Container } from "@/components/ui/container";
import { MoveRight, Phone, MessageCircle, FileText, Plane, Home, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";

const steps = [
    {
        icon: Phone,
        title: "First Contact",
        desc: "You reach out to us.",
        color: "text-violet-900",
        iconColor: "text-violet-700",
        iconBg: "bg-white border-violet-200",
        cardBg: "bg-violet-50/80 hover:bg-violet-100/80 hover:shadow-violet-200/50",
        borderColor: "border-violet-200"
    },
    {
        icon: MessageCircle,
        title: "Counseling",
        desc: "We understand your needs.",
        color: "text-indigo-900",
        iconColor: "text-indigo-700",
        iconBg: "bg-white border-indigo-200",
        cardBg: "bg-indigo-50/80 hover:bg-indigo-100/80 hover:shadow-indigo-200/50",
        borderColor: "border-indigo-200"
    },
    {
        icon: MapPin,
        title: "Choosing Country",
        desc: "Selecting the best option.",
        color: "text-sky-900",
        iconColor: "text-sky-700",
        iconBg: "bg-white border-sky-200",
        cardBg: "bg-sky-50/80 hover:bg-sky-100/80 hover:shadow-sky-200/50",
        borderColor: "border-sky-200"
    },
    {
        icon: FileText,
        title: "Documentation",
        desc: "We prevent all errors.",
        color: "text-cyan-900",
        iconColor: "text-cyan-700",
        iconBg: "bg-white border-cyan-200",
        cardBg: "bg-cyan-50/80 hover:bg-cyan-100/80 hover:shadow-cyan-200/50",
        borderColor: "border-cyan-200"
    },
    {
        icon: FileText,
        title: "Visa Processing",
        desc: "100% success rate support.",
        color: "text-emerald-900",
        iconColor: "text-emerald-700",
        iconBg: "bg-white border-emerald-200",
        cardBg: "bg-emerald-50/80 hover:bg-emerald-100/80 hover:shadow-emerald-200/50",
        borderColor: "border-emerald-200"
    },
    {
        icon: Plane,
        title: "Travel",
        desc: "We fly with you.",
        color: "text-teal-900",
        iconColor: "text-teal-700",
        iconBg: "bg-white border-teal-200",
        cardBg: "bg-teal-50/80 hover:bg-teal-100/80 hover:shadow-teal-200/50",
        borderColor: "border-teal-200"
    },
    {
        icon: Home,
        title: "Accommodation",
        desc: "Hostel & food setup.",
        color: "text-amber-900",
        iconColor: "text-amber-700",
        iconBg: "bg-white border-amber-200",
        cardBg: "bg-amber-50/80 hover:bg-amber-100/80 hover:shadow-amber-200/50",
        borderColor: "border-amber-200"
    },
    {
        icon: GraduationCap,
        title: "Local Support",
        desc: "Guidance till you graduate.",
        color: "text-rose-900",
        iconColor: "text-rose-700",
        iconBg: "bg-white border-rose-200",
        cardBg: "bg-rose-50/80 hover:bg-rose-100/80 hover:shadow-rose-200/50",
        borderColor: "border-rose-200"
    },
];

export function Workflow() {
    const isMobile = useIsMobile();
    return (
        <section className="py-24 bg-transparent overflow-hidden">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight">Your Journey To MBBS</h2>
                    <p className="text-xl text-slate-600 font-light font-sans leading-relaxed">A simple step-by-step process to your dream university.</p>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * (isMobile ? 0.05 : 0.1), duration: isMobile ? 0.3 : 0.5 }}
                                className="h-full"
                            >
                                <div className={`w-64 h-64 mx-auto rounded-full border backdrop-blur-md shadow-sm transition-all duration-300 flex flex-col items-center justify-center p-4 text-center group hover:-translate-y-2 hover:scale-105 ${step.cardBg} ${step.borderColor}`}>
                                    <div className={`h-14 w-14 rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300 ${step.iconBg} ${step.iconColor}`}>
                                        <step.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className={`font-bold text-lg font-heading mb-2 leading-tight ${step.color}`}>{step.title}</h3>
                                    <p className="text-[13px] text-slate-600 font-light leading-snug max-w-[180px]">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
