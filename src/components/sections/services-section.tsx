"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Plane, Home, GraduationCap, CheckCircle } from "lucide-react";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";

const services = [
    {
        icon: GraduationCap,
        title: "Admission Counseling",
        description: "Personalized guidance to help you select the right country and university based on your budget and academic goals. We also provide basic NEET guidance.",
        color: "text-blue-900",
        iconColor: "text-blue-700",
        iconBg: "bg-white border-blue-200",
        cardBg: "bg-blue-50/80 hover:bg-blue-100/80 hover:shadow-blue-200/50",
        borderColor: "border-blue-200"
    },
    {
        icon: FileText,
        title: "Documentation Support",
        description: "Complete assistance with apostille, translation, and embassy legalization. We handle the paperwork so you don't have to worry about errors.",
        color: "text-emerald-900",
        iconColor: "text-emerald-700",
        iconBg: "bg-white border-emerald-200",
        cardBg: "bg-emerald-50/80 hover:bg-emerald-100/80 hover:shadow-emerald-200/50",
        borderColor: "border-emerald-200"
    },
    {
        icon: CheckCircle,
        title: "Visa Assistance",
        description: "End-to-end support for student visa applications, including mock interviews if required and checklist verification to ensure 100% success.",
        color: "text-purple-900",
        iconColor: "text-purple-700",
        iconBg: "bg-white border-purple-200",
        cardBg: "bg-purple-50/80 hover:bg-purple-100/80 hover:shadow-purple-200/50",
        borderColor: "border-purple-200"
    },
    {
        icon: Plane,
        title: "Travel Arrangements",
        description: "Group bookings for students to ensure they travel together. We provide pre-departure briefings and airport assistance.",
        color: "text-sky-900",
        iconColor: "text-sky-700",
        iconBg: "bg-white border-sky-200",
        cardBg: "bg-sky-50/80 hover:bg-sky-100/80 hover:shadow-sky-200/50",
        borderColor: "border-sky-200"
    },
    {
        icon: Home,
        title: "Post-Arrival Support",
        description: "We don't leave you at the airport. Our local coordinators assist with hostel allotment, SIM cards, bank account opening, and university registration.",
        color: "text-amber-900",
        iconColor: "text-amber-700",
        iconBg: "bg-white border-amber-200",
        cardBg: "bg-amber-50/80 hover:bg-amber-100/80 hover:shadow-amber-200/50",
        borderColor: "border-amber-200"
    },
    {
        icon: CheckCircle,
        title: "MCI/NMC Guidance",
        description: "Guidance on the latest NMC regulations to ensure your degree is valid for practice in India. We keep you updated on NEXT exam patterns.",
        color: "text-rose-900",
        iconColor: "text-rose-700",
        iconBg: "bg-white border-rose-200",
        cardBg: "bg-rose-50/80 hover:bg-rose-100/80 hover:shadow-rose-200/50",
        borderColor: "border-rose-200"
    }
];

export function ServicesSection() {
    const isMobile = useIsMobile();

    return (
        <section id="services" className="bg-transparent min-h-screen py-16 border-b border-border">
            {/* Hero */}
            <div className="text-center mb-12">
                <Container>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight">Our Services</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Comprehensive support at every stage of your medical education journey.
                    </p>
                </Container>
            </div>

            <Container>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * (isMobile ? 0.05 : 0.1), duration: isMobile ? 0.3 : 0.5 }}
                        >
                            <Card className={`h-full border shadow-sm backdrop-blur-md hover:-translate-y-2 transition-all duration-300 group ${service.cardBg} ${service.borderColor}`}>
                                <CardHeader className="pb-2">
                                    <div className={`h-14 w-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm ${service.iconBg} ${service.iconColor}`}>
                                        <service.icon className="h-7 w-7" />
                                    </div>
                                    <CardTitle className={`text-xl font-heading opacity-90 ${service.color}`}>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 text-[15px] leading-relaxed font-light">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-24 p-8 text-center max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold font-heading text-slate-900 mb-4 tracking-tight">Ready to start your application?</h3>
                    <p className="text-slate-600 mb-8 font-light text-lg">
                        Get expert advice on documentation and university selection today.
                    </p>
                    <BookConsultationBtn className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 text-white px-8 font-medium transition-colors hover:bg-slate-800" label="Book Free Consultation" />
                </div>
            </Container>
        </section>
    );
}
