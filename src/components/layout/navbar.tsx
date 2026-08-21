"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/destinations", label: "Destinations" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    // Close mobile menu when route changes
    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-40 w-full border-b border-[#E5E7EB] bg-white/95 backdrop-blur-md">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold font-heading text-[#0F1B3D]">
                            Kaali<span className="text-[#1B4332]">Edge</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-[#0F1B3D]",
                                        isActive ? "text-[#0F1B3D] font-semibold underline underline-offset-4 decoration-[#C9A227] decoration-2" : "text-[#4B5563]"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <div className="flex items-center gap-3">
                            <BookConsultationBtn size="sm" className="bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 font-medium rounded-full px-5 h-9 text-xs" label="Book Free Consultation" />
                        </div>
                    </nav>

                    <div className="md:hidden flex items-center gap-3">
                        <BookConsultationBtn size="sm" className="bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 font-medium rounded-full px-3 h-8 text-xs" label="Book Free" />
                        <button
                            className="p-2 text-[#0F1B3D] hover:text-[#1B4332]"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-[#E5E7EB] bg-white"
                    >
                        <Container className="py-4 flex flex-col space-y-3">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-base font-medium p-3 rounded-lg transition-colors",
                                            isActive ? "text-[#0F1B3D] bg-[#F7F8FA] font-semibold border-l-4 border-[#0F1B3D]" : "text-[#4B5563] hover:bg-[#F7F8FA]"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <div className="pt-2">
                                <BookConsultationBtn className="w-full bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 font-medium rounded-full h-11" label="Book Free Consultation" />
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
