"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Loader2, Clock, CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        if (!form.current) return;

        const formData = new FormData(form.current);
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                toast.success("Query submitted successfully!");
                setIsSubmitted(true);
                form.current?.reset();
            } else {
                toast.error(result.error || "Failed to send query. Please try again.");
            }
        } catch (error) {
            console.error("Failed to send email...", error);
            toast.error("Failed to send query. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-[#F7F8FA] py-24 border-b border-[#EDEEF1]">
            <Container className="space-y-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#0F1B3D] mb-4 tracking-tight">
                        Contact Support
                    </h2>
                    <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
                        Have questions about MBBS admission, university fees, or eligibility? Speak with our team.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 items-start">

                    {/* Left Column: Contact Info Cards & Map Embed */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-heading text-[#0F1B3D] tracking-tight">
                                Visit Our Office or Reach Out
                            </h3>
                            <p className="text-[#4B5563] text-sm font-light leading-relaxed">
                                We welcome parents and students for in-person counseling at our main Kashmir office in Anantnag.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-5 rounded-2xl card-texture flex items-start gap-4 overflow-hidden">
                                <div className="p-2.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D] shrink-0">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div className="space-y-1 text-xs">
                                    <h4 className="font-bold text-sm text-[#0F1B3D] font-heading">Address</h4>
                                    <p className="text-[#4B5563]">Anchidora, Anantnag, Kashmir, 192101</p>
                                </div>
                            </div>

                            <div className="p-5 rounded-2xl card-texture flex items-start gap-4 overflow-hidden">
                                <div className="p-2.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D] shrink-0">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div className="space-y-1 text-xs">
                                    <h4 className="font-bold text-sm text-[#0F1B3D] font-heading">Phone / WhatsApp</h4>
                                    <p className="text-[#4B5563]">+91 60055 33853</p>
                                </div>
                            </div>

                            <div className="p-5 rounded-2xl card-texture flex items-start gap-4 overflow-hidden">
                                <div className="p-2.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D] shrink-0">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div className="space-y-1 text-xs">
                                    <h4 className="font-bold text-sm text-[#0F1B3D] font-heading">Email</h4>
                                    <p className="text-[#4B5563] break-all">darmustansir13@gmail.com</p>
                                </div>
                            </div>

                            <div className="p-5 rounded-2xl card-texture flex items-start gap-4 overflow-hidden">
                                <div className="p-2.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#1B4332] shrink-0">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <div className="space-y-1 text-xs">
                                    <h4 className="font-bold text-sm text-[#0F1B3D] font-heading">Office Hours & SLA</h4>
                                    <p className="text-[#4B5563]">Mon–Sat: 10:00 AM – 6:00 PM</p>
                                    <p className="text-[11px] text-[#1B4332] font-semibold">We reply within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Google Maps Location Card */}
                        <div className="rounded-2xl overflow-hidden card-texture p-2">
                            <iframe
                                title="Kaali Edge Office Location Anantnag"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5!2d75.15!3d33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e2000000000001%3A0x0!2sAnantnag%2C%20Kashmir!5e0!3m2!1sen!2sin!4v1700000000000"
                                width="100%"
                                height="220"
                                style={{ border: 0, borderRadius: "12px" }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Right Column: Form Container */}
                    <div className="lg:col-span-6">
                        <div className="p-8 sm:p-10 rounded-2xl card-texture overflow-hidden">
                            {isSubmitted ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-[#1B4332]/10 text-[#1B4332] mx-auto flex items-center justify-center">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-heading text-[#0F1B3D]">
                                        Thank You for Contacting Us
                                    </h3>
                                    <p className="text-[#4B5563] text-sm max-w-md mx-auto font-light leading-relaxed">
                                        Your message has been logged. Dr. Mustansir or a senior counselor will reach out to you within 24 hours.
                                    </p>
                                    <Button
                                        onClick={() => setIsSubmitted(false)}
                                        className="bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 rounded-full px-6 text-sm font-semibold h-11 mt-4"
                                    >
                                        Send Another Query
                                    </Button>
                                </div>
                            ) : (
                                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold font-heading text-[#0F1B3D] mb-2 tracking-tight">
                                            Send a Consultation Inquiry
                                        </h3>
                                        <p className="text-xs text-[#4B5563] font-light">
                                            Fields marked with <span className="text-[#B3261E] font-bold">*</span> are required.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[#0F1B3D]">
                                                Full Name <span className="text-[#B3261E]">*</span>
                                            </label>
                                            <input
                                                name="name"
                                                id="name"
                                                autoComplete="name"
                                                required
                                                className="w-full h-11 px-4 text-sm rounded-xl border border-[#E5E7EB] bg-white text-[#0F1B3D] focus:ring-2 focus:ring-[#0F1B3D] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF]"
                                                placeholder="Student / Parent name"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-[#0F1B3D]">
                                                Phone / WhatsApp <span className="text-[#B3261E]">*</span>
                                            </label>
                                            <input
                                                name="phone"
                                                id="phone"
                                                autoComplete="tel"
                                                required
                                                className="w-full h-11 px-4 text-sm rounded-xl border border-[#E5E7EB] bg-white text-[#0F1B3D] focus:ring-2 focus:ring-[#0F1B3D] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF]"
                                                placeholder="+91 XXXXX XXXXX"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#0F1B3D]">
                                            Email Address <span className="text-[#B3261E]">*</span>
                                        </label>
                                        <input
                                            name="email"
                                            id="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="w-full h-11 px-4 text-sm rounded-xl border border-[#E5E7EB] bg-white text-[#0F1B3D] focus:ring-2 focus:ring-[#0F1B3D] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF]"
                                            placeholder="name@example.com"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#0F1B3D]">
                                            Message / Destination Query
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="w-full p-4 text-sm rounded-xl border border-[#E5E7EB] bg-white text-[#0F1B3D] focus:ring-2 focus:ring-[#0F1B3D] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF]"
                                            placeholder="Specify preferred countries, budget range, or NEET score..."
                                        />
                                    </div>

                                    <Button
                                        size="lg"
                                        disabled={isLoading}
                                        className="w-full h-13 text-base font-semibold rounded-full bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 shadow-xs"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Sending Query...
                                            </>
                                        ) : (
                                            "Submit Consultation Query"
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
