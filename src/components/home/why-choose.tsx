
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { values } from "@/data/why-choose";
import { AnimatedInView } from "@/components/ui/animated-in-view";

export function WhyChoose() {
    return (
        <section id="why-choose" className="py-24 bg-transparent relative overflow-hidden">
            <Container className="relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight">
                        Our Mission & Values
                    </h2>
                    <p className="text-xl text-slate-600 font-light font-sans leading-relaxed">
                        Guiding principles that define our commitment to your future.
                    </p>
                </div>

                <div className="flex items-center gap-2 mb-4 md:hidden text-xs font-bold text-black animate-pulse px-1">
                    <ArrowRight className="w-3 h-3" />
                    <span>Swipe right to see more</span>
                </div>

                <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="h-full min-w-[85vw] md:min-w-0 snap-center"
                        >
                            <AnimatedInView delay={index * 0.1}>
                                <Card className={`h-full border backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl ${item.cardBg} ${item.borderColor}`}>
                                    <CardContent className="p-10 flex flex-col items-center text-center h-full">
                                        {/* Number Indicator */}
                                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold font-heading mb-8 border shadow-sm ${item.numberBg} ${item.numberColor}`}>
                                            {item.number}
                                        </div>

                                        <h3 className={`text-2xl font-bold font-heading mb-6 ${item.color} opacity-90`}>
                                            {item.title}
                                        </h3>

                                        <p className="text-slate-600 leading-loose font-light text-[17px] font-sans">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </AnimatedInView>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
