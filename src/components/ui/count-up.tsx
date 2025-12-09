"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
    end: number;
    suffix?: string;
    duration?: number;
    className?: string;
}

export function CountUp({ end, suffix = "", duration = 2000, className }: CountUpProps) {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    let startTimestamp: number | null = null;
                    const step = (timestamp: number) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

                        // Easing function (easeOutExpo) for smooth finish
                        const easeOut = 1 - Math.pow(1 - progress, 3);

                        setCount(Math.floor(easeOut * end));

                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            setCount(end); // Ensure exact final value
                        }
                    };

                    window.requestAnimationFrame(step);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [end, duration]);

    return (
        <span ref={elementRef} className={className}>
            {count}{suffix}
        </span>
    );
}
