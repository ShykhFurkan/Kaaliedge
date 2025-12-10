import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-muted border-t fade-up">
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <span className="text-xl font-bold font-heading text-primary">Kaali<span className="text-secondary">Edge</span></span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Guiding Kashmiri students toward global medical careers with trust, support, and transparent processes since 2020.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-primary mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                            <li><Link href="/countries" className="hover:text-primary transition-colors">Destinations</Link></li>
                            <li><Link href="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-primary mb-4">Contact Info</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1 shrink-0 text-secondary" />
                                <span>Anchidora, Anantnag, Kashmir</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                                <a href="tel:+916005533853" className="hover:text-primary">6005533853</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                                <a href="mailto:darmustansir13@gmail.com" className="hover:text-primary break-all">darmustansir13@gmail.com</a>
                            </li>
                            <li className="text-xs text-muted-foreground/80 pt-2">
                                Available 24/7 for support
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-primary mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            {/* Social placeholders */}
                            <Link href="#" aria-label="Instagram" className="h-8 w-8 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                                <Instagram className="h-4 w-4" />
                            </Link>
                            <Link href="#" aria-label="Facebook" className="h-8 w-8 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link href="#" aria-label="LinkedIn" className="h-8 w-8 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                                <Linkedin className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Kaali Edge Consultancy. All rights reserved.</p>
                </div>
            </Container>
        </footer >
    );
}
