"use client";

import { useModal } from "@/context/modal-context";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export function ConsultationModal() {
    const { isOpen, closeModal } = useModal();
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const form = useRef<HTMLFormElement>(null);

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
                    setSubmitted(true);
                    toast.success("Request received!");
                    setTimeout(() => {
                        setSubmitted(false);
                        closeModal();
                    }, 3000);
                },
                (error) => {
                    toast.error("Failed to make request. Please try again.");
                    console.error("FAILED...", error);
                }
            )
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Modal isOpen={isOpen} onClose={closeModal} title="Start Your Journey" className="md:max-w-md">
            {!submitted ? (
                <form ref={form} onSubmit={sendEmail} className="space-y-4 py-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <Input name="name" required placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <Input name="phone" required placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <Input name="email" type="email" required placeholder="name@example.com" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Message (Optional)</label>
                        <textarea
                            name="message"
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Which country are you interested in?"
                        />
                    </div>
                    <div className="pt-2">
                        <Button disabled={isLoading} type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800">
                            {isLoading ? "Sending..." : "Book Free Consultation"}
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                        We respect your privacy. No spam.
                    </p>
                </form>
            ) : (
                <div className="py-8 text-center space-y-4">
                    <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                        ✓
                    </div>
                    <h3 className="text-xl font-bold font-heading">Request Received!</h3>
                    <p className="text-muted-foreground">
                        Thank you. Our counselor will call you shortly on the provided number.
                    </p>
                </div>
            )}
        </Modal>
    );
}
