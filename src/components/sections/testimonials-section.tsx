
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { Quote, ArrowRight } from "lucide-react";

const colors = [
    {
        bg: "bg-emerald-50/80 hover:bg-emerald-100/80 hover:shadow-emerald-200/50",
        border: "border-emerald-200",
        quoteBg: "bg-white border-emerald-100 text-emerald-600",
        text: "text-emerald-900",
        subtext: "text-emerald-700",
        divider: "border-emerald-200/50"
    },
    {
        bg: "bg-sky-50/80 hover:bg-sky-100/80 hover:shadow-sky-200/50",
        border: "border-sky-200",
        quoteBg: "bg-white border-sky-100 text-sky-600",
        text: "text-sky-900",
        subtext: "text-sky-700",
        divider: "border-sky-200/50"
    },
    {
        bg: "bg-violet-50/80 hover:bg-violet-100/80 hover:shadow-violet-200/50",
        border: "border-violet-200",
        quoteBg: "bg-white border-violet-100 text-violet-600",
        text: "text-violet-900",
        subtext: "text-violet-700",
        divider: "border-violet-200/50"
    },
    {
        bg: "bg-amber-50/80 hover:bg-amber-100/80 hover:shadow-amber-200/50",
        border: "border-amber-200",
        quoteBg: "bg-white border-amber-100 text-amber-600",
        text: "text-amber-900",
        subtext: "text-amber-700",
        divider: "border-amber-200/50"
    },
    {
        bg: "bg-rose-50/80 hover:bg-rose-100/80 hover:shadow-rose-200/50",
        border: "border-rose-200",
        quoteBg: "bg-white border-rose-100 text-rose-600",
        text: "text-rose-900",
        subtext: "text-rose-700",
        divider: "border-rose-200/50"
    },
    {
        bg: "bg-indigo-50/80 hover:bg-indigo-100/80 hover:shadow-indigo-200/50",
        border: "border-indigo-200",
        quoteBg: "bg-white border-indigo-100 text-indigo-600",
        text: "text-indigo-900",
        subtext: "text-indigo-700",
        divider: "border-indigo-200/50"
    }
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="bg-transparent min-h-screen py-16 flex flex-col justify-center">
            <div className="text-center mb-12">
                <Container>
                    <h2 className="text-4xl font-bold font-heading text-slate-900 mb-6 tracking-tight">Success Stories</h2>
                    <p className="text-xl text-slate-600 font-light">Hear from our students pursuing their dreams across the globe.</p>
                </Container>
            </div>

            <Container className="relative flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 no-scrollbar">
                <div className="absolute left-4 -top-8 flex items-center gap-2 md:hidden text-xs font-bold text-black animate-pulse">
                    <ArrowRight className="w-3 h-3" />
                    <span>Swipe right to see more</span>
                </div>
                {testimonials.map((t, index) => {
                    const theme = colors[index % colors.length];
                    return (
                        <div
                            key={index}
                            className="h-full min-w-[85vw] md:min-w-0 snap-center fade-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Card className={`h-full border shadow-sm backdrop-blur-md hover:-translate-y-2 transition-all duration-300 rounded-2xl group ${theme.bg} ${theme.border}`}>
                                <CardHeader className="pb-4 pt-8 px-8">
                                    <div className={`h-12 w-12 rounded-full flex items-center justify-center shadow-sm mb-2 ${theme.quoteBg}`}>
                                        <Quote className="h-5 w-5 rotate-180" />
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6 px-8 pb-8">
                                    <p className="text-slate-700 italic leading-loose text-[15px] font-light">
                                        "{t.message}"
                                    </p>
                                    <div className={`border-t pt-6 ${theme.divider}`}>
                                        <h3 className={`font-bold text-lg font-heading tracking-wide mb-1 opacity-90 ${theme.text}`}>{t.name}</h3>
                                        <p className={`text-sm font-medium ${theme.subtext}`}>{t.university}, {t.country}</p>
                                        <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider font-semibold">Batch of {t.year}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    );
                })}
            </Container>
        </section>
    );
}
