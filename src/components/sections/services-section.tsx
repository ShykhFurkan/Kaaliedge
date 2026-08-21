
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";
import { BookConsultationBtn } from "@/components/common/book-consultation-btn";
import { services } from "@/data/services";

export function ServicesSection() {
    return (
        <section id="services" className="bg-[#F7F8FA] py-24 border-b border-[#EDEEF1]">
            <Container className="space-y-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#0F1B3D] mb-4 tracking-tight">
                        Our Services
                    </h2>
                    <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
                        Comprehensive end-to-end guidance across every stage of your medical education journey.
                    </p>
                </div>

                {/* Mobile View: Animated Right-to-Left Marquee */}
                <div className="block sm:hidden w-full overflow-hidden no-scrollbar py-2">
                    <div className="animate-marquee-slow flex items-stretch gap-4">
                        {[...services, ...services].map((service, index) => {
                            const isNavy = service.accent === "navy";
                            const iconColorClass = isNavy ? "text-[#0F1B3D]" : "text-[#1B4332]";

                            return (
                                <div
                                    key={index}
                                    className="w-[270px] shrink-0"
                                >
                                    <div className="h-full flex flex-col justify-between p-6 rounded-2xl card-texture group overflow-hidden">
                                        <div>
                                            <div className="mb-4 inline-flex p-3 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB]">
                                                <service.icon className={`h-5 w-5 ${iconColorClass}`} />
                                            </div>
                                            <h3 className="text-lg font-bold font-heading text-[#0F1B3D] mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-[#4B5563] text-xs font-light leading-relaxed mb-4 line-clamp-3">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="pt-3 border-t border-[#EDEEF1] flex items-center justify-between">
                                            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                                                Step 0{(index % services.length) + 1}
                                            </span>
                                            <div className="inline-flex items-center text-xs font-semibold text-[#0F1B3D]">
                                                Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tablet & Desktop View: 3-Column Grid */}
                <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => {
                        const isNavy = service.accent === "navy";
                        const iconColorClass = isNavy ? "text-[#0F1B3D]" : "text-[#1B4332]";

                        return (
                            <div
                                key={index}
                                className="fade-up"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl card-texture group overflow-hidden">
                                    <div>
                                        {/* Icon */}
                                        <div className="mb-6 inline-flex p-3.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB]">
                                            <service.icon className={`h-6 w-6 ${iconColorClass}`} />
                                        </div>

                                        {/* Title & Description */}
                                        <h3 className="text-xl font-bold font-heading text-[#0F1B3D] mb-3 group-hover:text-[#1B4332] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-[#4B5563] text-sm font-light leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-[#EDEEF1] flex items-center justify-between">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                                            Step 0{index + 1}
                                        </span>
                                        <div className="inline-flex items-center text-xs font-semibold text-[#0F1B3D] group-hover:text-[#1B4332] transition-colors">
                                            Learn More <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action Banner Box */}
                <div className="p-8 sm:p-10 rounded-2xl card-texture text-center max-w-4xl mx-auto space-y-4 overflow-hidden">
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F1B3D] tracking-tight">
                        Ready to Begin Your Application Process?
                    </h3>
                    <p className="text-[#4B5563] text-base font-light max-w-xl mx-auto">
                        Speak directly with Dr. Mustansir and our senior counselors for personalized advice on university eligibility and documentation.
                    </p>
                    <div className="pt-2">
                        <BookConsultationBtn
                            size="lg"
                            className="bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 h-13 px-8 text-base font-semibold rounded-full shadow-sm"
                            label="Book Free Counseling Session"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
