"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Modal } from "@/components/ui/modal";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function AdmissionsPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 800);
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => setIsOpen(false);

    return (
        <Modal isOpen={isOpen} onClose={closePopup} hideHeader className="md:max-w-lg">
            <div className="space-y-6 text-center pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm font-medium border border-primary/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    Admissions Open for 2026-27
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 leading-tight tracking-tight">
                    🌍 Now Accepting Applications Worldwide
                </h2>

                <p className="text-slate-600 leading-relaxed text-left sm:text-center">
                    We are pleased to announce that admissions are open for students from{" "}
                    <strong className="text-slate-900">India</strong> and across the globe, including{" "}
                    <strong className="text-slate-900">
                        Uzbekistan, Kazakhstan, Kyrgyzstan, Russia, Georgia, Bangladesh
                    </strong>
                    , and many other countries.
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold border border-primary/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    Admissions Open • Limited Seats Available
                </div>

                <Link
                    href="/contact"
                    onClick={closePopup}
                    className={cn(
                        buttonVariants({ size: "lg" }),
                        "w-full h-12 sm:h-14 text-base sm:text-lg font-semibold bg-slate-900 text-white hover:bg-slate-800 shadow-xl"
                    )}
                >
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </div>
        </Modal>
    );
}
