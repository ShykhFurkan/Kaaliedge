"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";

const values = [
    {
        number: "1",
        title: "Transparency",
        description: "No hidden fees. Every cost is explained upfront, documented, and clear.",
        color: "text-blue-900",
        numberColor: "text-blue-700",
        numberBg: "bg-white border-blue-200 shadow-sm",
        cardBg: "bg-blue-50/80 hover:bg-blue-100/80 hover:shadow-blue-200/50",
        borderColor: "border-blue-200"
    },
    {
        number: "2",
        title: "Student First",
        description: "We don't just prioritize admissions; we prioritize the right admission for the student's aptitude and budget.",
        color: "text-amber-900",
        numberColor: "text-amber-700",
        numberBg: "bg-white border-amber-200 shadow-sm",
        cardBg: "bg-amber-50/80 hover:bg-amber-100/80 hover:shadow-amber-200/50",
        borderColor: "border-amber-200"
    },
    {
        number: "3",
        title: "Continuous Support",
        description: "Our job doesn't end at the airport. We support our students throughout their 5-6 year journey.",
        color: "text-green-900",
        numberColor: "text-green-700",
        numberBg: "bg-white border-green-200 shadow-sm",
        cardBg: "bg-green-50/80 hover:bg-green-100/80 hover:shadow-green-200/50",
        borderColor: "border-green-200"
    }
];

export function WhyChoose() {
    const isMobile = useIsMobile();
    return (
        <section id="why-choose" className="py-24 bg-transparent relative overflow-hidden">
            <Container className="relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight">
                        Our Mission & Values
                    </h2>
                    <p className="text-xl text-slate-600 font-light font-sans leading-relaxed">
                        Guiding principles that define our commitment to your future.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * (isMobile ? 0.1 : 0.2), duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
                            className="h-full"
                        >
                            <Card className={`h-full border backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl ${item.cardBg} ${item.borderColor}`}>
                                <CardContent className="p-10 flex flex-col items-center text-center h-full">
                                    {/* Number Indicator */}
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold font-heading mb-8 border shadow-sm ${item.numberBg} ${item.numberColor}`}>
                                        {item.number}
                                    </div>

                                    <h3 className={`text-2xl font-bold font-heading mb-6 ${item.color} opacity-90`}>
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-600 leading-loose font-light text-[17px] font-sans">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
