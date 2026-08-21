import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0F1B3D] text-white">
            <Container className="py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Column 1: Brand & Tagline */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold font-heading text-white">
                                Kaali<span className="text-[#C9A227]">Edge</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-300 leading-relaxed font-light">
                            Guiding Kashmiri students toward global medical careers with restraint, transparency, and complete 6-year support since 2020.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-full bg-white/10 hover:bg-[#C9A227] hover:text-[#0F1B3D] flex items-center justify-center text-slate-300 transition-all">
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/10 hover:bg-[#C9A227] hover:text-[#0F1B3D] flex items-center justify-center text-slate-300 transition-all">
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-white/10 hover:bg-[#C9A227] hover:text-[#0F1B3D] flex items-center justify-center text-slate-300 transition-all">
                                <Linkedin className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-5 font-sans">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-slate-300 font-light">
                            <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/#services" className="hover:text-white transition-colors">Our Services</Link></li>
                            <li><Link href="/#countries" className="hover:text-white transition-colors">Destinations</Link></li>
                            <li><Link href="/#testimonials" className="hover:text-white transition-colors">Success Stories</Link></li>
                            <li><Link href="/#contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Destinations */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-5 font-sans">Top Destinations</h3>
                        <ul className="space-y-3 text-sm text-slate-300 font-light">
                            <li><Link href="/destinations/kyrgyzstan" className="hover:text-white transition-colors">MBBS in Kyrgyzstan</Link></li>
                            <li><Link href="/destinations/uzbekistan" className="hover:text-white transition-colors">MBBS in Uzbekistan</Link></li>
                            <li><Link href="/destinations/kazakhstan" className="hover:text-white transition-colors">MBBS in Kazakhstan</Link></li>
                            <li><Link href="/destinations/russia" className="hover:text-white transition-colors">MBBS in Russia</Link></li>
                            <li><Link href="/destinations/bangladesh" className="hover:text-white transition-colors">MBBS in Bangladesh</Link></li>
                            <li><Link href="/destinations/georgia" className="hover:text-white transition-colors">MBBS in Georgia</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info & Hours */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-5 font-sans">Office & Hours</h3>
                        <ul className="space-y-3 text-sm text-slate-300 font-light">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 mt-1 shrink-0 text-[#C9A227]" />
                                <span>Anchidora, Anantnag, Kashmir, 192101</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 shrink-0 text-[#C9A227]" />
                                <a href="tel:+916005533853" className="hover:text-white">+91 60055 33853</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 shrink-0 text-[#C9A227]" />
                                <a href="mailto:darmustansir13@gmail.com" className="hover:text-white break-all">darmustansir13@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-xs text-slate-400 pt-2 border-t border-white/10">
                                <Clock className="h-3.5 w-3.5 text-[#C9A227]" />
                                <span>Mon–Sat: 10:00 AM – 6:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
                    <p>© 2026 KaaliEdge Consultancy. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
