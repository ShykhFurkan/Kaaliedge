"use client";

export function BackgroundPattern() {
    return (
        <div className="fixed inset-0 -z-50 pointer-events-none select-none overflow-hidden bg-[#FAFAF9]">
            {/* Fine Paper Grain Texture Overlay */}
            <div
                className="absolute inset-0 opacity-50 mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperNoise)' opacity='0.08'/%3E%3C/svg%3E")`
                }}
            />

            {/* Subtle Dot Matrix Grid Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />

            {/* Ambient Background Glows */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#0F1B3D]/5 rounded-full blur-[140px]" />
            <div className="absolute top-[40%] -right-40 w-[600px] h-[600px] bg-[#1B4332]/5 rounded-full blur-[140px]" />
            <div className="absolute -bottom-40 left-[30%] w-[600px] h-[600px] bg-[#C9A227]/5 rounded-full blur-[140px]" />
        </div>
    );
}

