
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";
import { steps } from "@/data/workflow";

export function Workflow() {
    return (
        <section id="journey" className="py-24 bg-[#F7F8FA] border-b border-[#EDEEF1]">
            <Container className="space-y-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#0F1B3D] mb-4 tracking-tight">
                        Your Journey to MBBS
                    </h2>
                    <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
                        A predictable 8-step roadmap from initial inquiry to campus graduation.
                    </p>
                </div>

                {/* Mobile View: Animated Right-to-Left Marquee */}
                <div className="block md:hidden w-full overflow-hidden no-scrollbar py-2">
                    <div className="animate-marquee-slow flex items-stretch gap-4">
                        {[...steps, ...steps].map((step, index) => (
                            <div
                                key={index}
                                className="w-[260px] shrink-0"
                            >
                                <div className="h-full flex flex-col justify-between p-6 rounded-2xl card-texture group overflow-hidden">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="w-8 h-8 rounded-full bg-[#0F1B3D] text-white flex items-center justify-center font-bold text-xs font-heading">
                                                0{step.stepNumber}
                                            </span>
                                            <div className="p-2 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D]">
                                                <step.icon className="h-4 w-4" />
                                            </div>
                                        </div>
                                        <h3 className="text-base font-bold font-heading text-[#0F1B3D] mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-[#4B5563] text-xs font-light leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tablet & Desktop View: 4-Column Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="fade-up relative h-full"
                            style={{ animationDelay: `${index * 0.06}s` }}
                        >
                            <div className="h-full flex flex-col justify-between p-6 rounded-2xl card-texture group overflow-hidden">
                                <div>
                                    {/* Header: Sequence Badge + Icon */}
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="w-9 h-9 rounded-full bg-[#0F1B3D] text-white flex items-center justify-center font-bold text-xs font-heading">
                                            0{step.stepNumber}
                                        </span>
                                        <div className="p-2.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-[#0F1B3D] group-hover:text-[#1B4332] transition-colors">
                                            <step.icon className="h-5 w-5" />
                                        </div>
                                    </div>

                                    {/* Title & Desc */}
                                    <h3 className="text-lg font-bold font-heading text-[#0F1B3D] mb-2 group-hover:text-[#1B4332] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#4B5563] text-xs font-light leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#9CA3AF]">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
