"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/916005533853?text=Hello,%20I%20would%20like%20to%20inquire%20about%20MBBS%20abroad."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="h-6 w-6 fill-current" />
        </a>
    );
}
