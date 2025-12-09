"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { useModal } from "@/context/modal-context";
import { cn } from "@/lib/utils";

interface BookConsultationBtnProps extends ButtonProps {
    label?: string;
}

export function BookConsultationBtn({ label = "Book Free Consultation", className, ...props }: BookConsultationBtnProps) {
    const { openModal } = useModal();

    return (
        <Button onClick={openModal} className={cn("", className)} {...props}>
            {label}
        </Button>
    );
}
