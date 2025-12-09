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
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#countries", label: "Countries" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    // Close mobile menu when route changes
    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 dark:border-slate-800">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold font-heading !text-black">Kaali<span className="!text-black">Edge</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex items-center gap-3">
                            <BookConsultationBtn size="sm" className="bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 font-semibold shadow-sm" />
                        </div>
                    </nav>

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            className="p-2 !text-black hover:text-primary"
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
                        className="md:hidden border-b bg-background dark:border-slate-800"
                    >
                        <Container className="py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-sm font-medium p-2 rounded-md hover:bg-accent/10 dark:hover:bg-slate-800 transition-colors",
                                        pathname === link.href ? "text-primary dark:text-white bg-primary/5 dark:bg-slate-800" : "text-muted-foreground dark:text-slate-400"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <BookConsultationBtn className="w-full bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-white dark:text-black font-semibold shadow-sm" />
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
