import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowLeft, Home, BookOpen } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center py-24 bg-white">
            <Container className="text-center max-w-2xl space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0F1B3D]/5 text-[#0F1B3D] font-heading font-bold text-2xl border border-[#0F1B3D]/10">
                    404
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold font-heading text-[#0F1B3D] tracking-tight">
                    Page Not Found
                </h1>

                <p className="text-[#4B5563] text-base font-light leading-relaxed">
                    The medical destination page or resource you are looking for might have been moved or updated.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#0F1B3D] text-white font-semibold text-sm hover:bg-[#0F1B3D]/90 transition-colors"
                    >
                        <Home className="w-4 h-4" /> Return to Homepage
                    </Link>
                    <Link
                        href="/#countries"
                        className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-[#0F1B3D] text-[#0F1B3D] bg-white font-semibold text-sm hover:bg-[#F7F8FA] transition-colors"
                    >
                        <BookOpen className="w-4 h-4" /> View Destinations
                    </Link>
                </div>
            </Container>
        </div>
    );
}
