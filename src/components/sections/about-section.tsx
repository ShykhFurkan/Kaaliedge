"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";
import Image from "next/image";

export function AboutSection() {
    const isMobile = useIsMobile();

    return (
        <section id="about" className="bg-transparent min-h-screen py-16 border-b border-border">
            {/* Hero */}
            <div className="text-center mb-12">
                <Container>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight">About Kaali Edge</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Founded with a vision to bring transparency and trust to medical education consultancy.
                    </p>
                </Container>
            </div>

            <Container className="space-y-16">
                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: isMobile ? 0.3 : 0.6 }}
                        className="h-full"
                    >
                        <Card className="h-full border border-slate-200/60 shadow-sm bg-slate-50/80 backdrop-blur-md p-8 md:p-10 rounded-3xl hover:shadow-slate-200/50 transition-all duration-300">
                            <div className="space-y-8 h-full flex flex-col justify-center">
                                <h3 className="text-3xl font-bold font-heading text-slate-900 border-l-4 border-slate-300 pl-4">Our Story</h3>
                                <div className="space-y-6">
                                    <p className="text-slate-600 leading-loose text-lg font-light">
                                        Kaali Edge was established in 2020 by <strong>Dr. Mustansir</strong>, a medical professional who understood the challenges students face when seeking education abroad. Witnessing the misinformation and hidden costs prevalent in the industry, he founded Kaali Edge to offer a safe, transparent alternative.
                                    </p>
                                    <p className="text-slate-600 leading-loose text-lg font-light">
                                        Starting from a small office in Anantnag, we have grown into a trusted name across Kashmir, helping over 500 students secure their futures in top global universities.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: isMobile ? 0.3 : 0.6 }}
                        className="h-full"
                    >
                        <Card className="h-full min-h-[400px] border border-blue-200/60 shadow-sm bg-blue-50/80 backdrop-blur-md p-4 rounded-3xl hover:shadow-blue-200/50 transition-all duration-300 flex items-center justify-center">
                            <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/dr-mustansir.png"
                                    alt="Dr. Mustansir"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </Card>
                    </motion.div>
                </div>

            </Container>
        </section>
    );
}
