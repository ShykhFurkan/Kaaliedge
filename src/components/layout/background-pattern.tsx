"use client";

import { motion } from "framer-motion";

export function BackgroundPattern() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none">
            {/* Base Background */}
            <div className="absolute inset-0 bg-white" />

            {/* Animated Clouds / Blobs */}
            <div className="absolute inset-0">
                {/* Blob 1: Primary Blue (Top Left) */}
                <motion.div
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, 30, 0, 0],
                        scale: [1, 1.1, 1, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute -top-[10%] -left-[10%] w-[90vw] h-[90vw] md:w-[50vw] md:h-[50vw] rounded-full bg-blue-400/20 blur-[80px] md:blur-[100px]"
                />

                {/* Blob 2: Secondary Green (Bottom Right) */}
                <motion.div
                    animate={{
                        x: [0, -30, 30, 0],
                        y: [0, -50, 0, 0],
                        scale: [1, 1.2, 1, 1]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute -bottom-[10%] -right-[10%] w-[90vw] h-[90vw] md:w-[50vw] md:h-[50vw] rounded-full bg-green-400/20 blur-[80px] md:blur-[100px]"
                />

                {/* Blob 3: Accent Gold (Center-ish) */}
                <motion.div
                    animate={{
                        x: [0, 40, -40, 0],
                        y: [0, 40, -40, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 5
                    }}
                    className="absolute top-[30%] left-[30%] w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] rounded-full bg-yellow-400/20 blur-[100px] md:blur-[120px]"
                />
            </div>

            {/* Architectural Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.8]"
                style={{
                    backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px),
                                     linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Vignette for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,white_100%)] opacity-60" />
        </div>
    );
}
