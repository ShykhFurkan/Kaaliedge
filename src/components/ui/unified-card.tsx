import React from "react";
import { cn } from "@/lib/utils";

interface UnifiedCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function UnifiedCard({
    children,
    className,
    hoverEffect = true,
    ...props
}: UnifiedCardProps) {
    return (
        <div
            className={cn(
                "relative bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-7 card-texture flex flex-col justify-between overflow-hidden",
                hoverEffect && "transition-all duration-200 hover:-translate-y-1 hover:border-[#0F1B3D]/30 hover:shadow-md",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
