
import { Container } from "@/components/ui/container";
import { MoveRight, Phone, MessageCircle, FileText, Plane, Home, GraduationCap, MapPin, ArrowRight } from "lucide-react";
import { steps } from "@/data/workflow";

export function Workflow() {
    return (
        <section className="py-24 bg-transparent overflow-hidden">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight">Your Journey To MBBS</h2>
                    <p className="text-xl text-slate-600 font-light font-sans leading-relaxed">A simple step-by-step process to your dream university.</p>
                </div>

                <div className="relative">
                    <div className="flex items-center gap-2 mb-4 md:hidden text-xs font-bold text-black animate-pulse px-1">
                        <ArrowRight className="w-3 h-3" />
                        <span>Swipe right to see more</span>
                    </div>

                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="h-full min-w-[280px] md:min-w-0 flex justify-center snap-center fade-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`w-64 h-64 mx-auto rounded-full border backdrop-blur-md shadow-sm transition-all duration-300 flex flex-col items-center justify-center p-4 text-center group hover:-translate-y-2 hover:scale-105 ${step.cardBg} ${step.borderColor}`}>
                                    <div className={`h-14 w-14 rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300 ${step.iconBg} ${step.iconColor}`}>
                                        <step.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className={`font-bold text-lg font-heading mb-2 leading-tight ${step.color}`}>{step.title}</h3>
                                    <p className="text-[13px] text-slate-600 font-light leading-snug max-w-[180px]">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
