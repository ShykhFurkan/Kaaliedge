
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";
import { services } from "@/data/services";

export function ServicesSection() {
    return (
        <section id="services" className="bg-transparent min-h-screen py-16 border-b border-border">
            {/* Hero */}
            <div className="text-center mb-12">
                <Container>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight">Our Services</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Comprehensive support at every stage of your medical education journey.
                    </p>
                </Container>
            </div>

            <Container>
                <div className="flex items-center gap-2 mb-4 md:hidden text-xs font-bold text-black animate-pulse px-1">
                    <ArrowRight className="w-3 h-3" />
                    <span>Swipe right to see more</span>
                </div>

                {/* Mobile: Horizontal Scroll | Desktop: Grid */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="min-w-[85vw] md:min-w-0 snap-center fade-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Card className={`h-full border shadow-sm backdrop-blur-md hover:-translate-y-2 transition-all duration-300 group ${service.cardBg} ${service.borderColor}`}>
                                <CardHeader className="pb-2">
                                    <div className={`h-14 w-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm ${service.iconBg} ${service.iconColor}`}>
                                        <service.icon className="h-7 w-7" />
                                    </div>
                                    <CardTitle className={`text-xl font-heading opacity-90 ${service.color}`}>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 text-[15px] leading-relaxed font-light">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-24 p-8 text-center max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold font-heading text-slate-900 mb-4 tracking-tight">Ready to start your application?</h3>
                    <p className="text-slate-600 mb-8 font-light text-lg">
                        Get expert advice on documentation and university selection today.
                    </p>
                    <BookConsultationBtn className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 text-white px-8 font-medium transition-colors hover:bg-slate-800" label="Book Free Consultation" />
                </div>
            </Container>
        </section>
    );
}
