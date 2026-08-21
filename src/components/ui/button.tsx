import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
}

const buttonVariants = ({ variant = "default", size = "default", className = "" }: { variant?: ButtonProps["variant"], size?: ButtonProps["size"], className?: string } = {}) => {
    const base = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F1B3D] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99]";

    const variants: Record<string, string> = {
        default: "bg-[#0F1B3D] text-white hover:bg-[#0F1B3D]/90 shadow-2xs",
        outline: "border border-[#0F1B3D] text-[#0F1B3D] bg-white hover:bg-[#F7F8FA] shadow-2xs",
        ghost: "text-[#0F1B3D] hover:underline underline-offset-4 bg-transparent",
    }

    const sizes: Record<string, string> = {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10 p-0",
    }

    const v = variant || "default";
    const s = size || "default";

    return cn(base, variants[v] || variants.default, sizes[s] || sizes.default, className);
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                className={buttonVariants({ variant, size, className })}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }

