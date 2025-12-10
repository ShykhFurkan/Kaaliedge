"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export function ContactSection() {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        if (!form.current) return;

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
                }
            )
            .then(
                () => {
                    toast.success("Email sent successfully!");
                    form.current?.reset();
                },
                (error: any) => {
                    toast.error("Failed to send email. Please try again.");
                    console.error("FAILED...", error);
                }
            )
            .finally(() => {
                setIsLoading(false);
            });
    };

    // Debugging: Check if keys are loaded
    if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        console.warn("EmailJS Public Key is missing!");
    }

    return (
        <section id="contact" className="bg-transparent min-h-screen py-16 fade-up">
            <div className="text-center mb-12">
                <Container>
                    <h2 className="text-4xl font-bold font-heading text-slate-900 mb-6 tracking-tight">Contact Us</h2>
                    <p className="text-xl text-slate-600 font-light">We are here to answer all your questions.</p>
                </Container>
            </div>

            <Container>
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-3xl font-bold font-heading text-slate-900 mb-6 tracking-tight">Get in Touch</h3>
                            <p className="text-slate-600 mb-8 max-w-md font-light leading-relaxed">
                                Visit our office for a face-to-face counseling session or reach out via phone/email.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Card className="h-full border border-blue-200/60 shadow-sm hover:shadow-blue-200/50 bg-blue-50/80 backdrop-blur-md hover:-translate-y-1 transition-all duration-300 rounded-xl group">
                                <CardContent className="p-8 flex items-start gap-6">
                                    <div className="h-12 w-12 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-blue-900 font-heading">Office Address</h3>
                                        <p className="text-slate-600 font-light mt-1">Anchidora, Anantnag, Kashmir, 192101</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="h-full border border-blue-200/60 shadow-sm hover:shadow-blue-200/50 bg-blue-50/80 backdrop-blur-md hover:-translate-y-1 transition-all duration-300 rounded-xl group">
                                <CardContent className="p-8 flex items-start gap-6">
                                    <div className="h-12 w-12 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-blue-900 font-heading">Phone & WhatsApp</h3>
                                        <p className="text-slate-600 font-light mt-1">+91 60055 33853</p>
                                        <p className="text-xs text-slate-400 mt-2 font-medium tracking-wide">Available 24/7 Support</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="h-full border border-blue-200/60 shadow-sm hover:shadow-blue-200/50 bg-blue-50/80 backdrop-blur-md hover:-translate-y-1 transition-all duration-300 rounded-xl group">
                                <CardContent className="p-8 flex items-start gap-6">
                                    <div className="h-12 w-12 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-blue-900 font-heading">Email</h3>
                                        <p className="text-slate-600 font-light mt-1">darmustansir13@gmail.com</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="h-full border border-indigo-200/60 shadow-sm bg-indigo-50/80 backdrop-blur-md rounded-3xl p-10 hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-2xl font-bold font-heading text-indigo-950 mb-8 tracking-tight">Send us a Message</h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-900">Full Name</label>
                                    <input name="name" id="name" autoComplete="name" required className="w-full p-4 rounded-xl border border-indigo-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none transition-all placeholder:text-slate-400" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-900">Phone Number</label>
                                    <input name="phone" id="phone" autoComplete="tel" required className="w-full p-4 rounded-xl border border-indigo-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none transition-all placeholder:text-slate-400" placeholder="+91 XXXXX XXXXX" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-900">Email Address</label>
                                <input name="email" id="email" type="email" autoComplete="email" required className="w-full p-4 rounded-xl border border-indigo-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none transition-all placeholder:text-slate-400" placeholder="name@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-900">Message/Query</label>
                                <textarea name="message" id="message" rows={4} className="w-full p-4 rounded-xl border border-indigo-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none transition-all placeholder:text-slate-400" placeholder="How can we help you?" />
                            </div>

                            <Button
                                size="lg"
                                disabled={isLoading}
                                className="w-full h-14 text-lg font-medium shadow-lg hover:shadow-xl transition-all rounded-xl bg-slate-900 text-white hover:bg-slate-800"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </Button>
                        </form>
                    </div>

                </div>
            </Container>
        </section>
    );
}
