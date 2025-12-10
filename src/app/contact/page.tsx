
import { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
    title: "Contact Kaali Edge | MBBS Consultants in Kashmir",
    description: "Get in touch with Kaali Edge for expert MBBS abroad counseling. Visit our Anantnag office, call +91-6005533853, or email us for transparent guidance.",
    alternates: {
        canonical: "https://kaaliedge.com/contact",
    },
};

export default function ContactPage() {
    return (
        <main className="pt-20">
            <ContactSection />
        </main>
    );
}
