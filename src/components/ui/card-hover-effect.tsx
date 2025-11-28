"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SpotlightCard from "../SpotlightCard";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link?: string;
        icon: React.ReactNode;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-4",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-primary/10 dark:bg-primary/20 block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <PremiumCard>
                        <PremiumCardTitle>{item.title}</PremiumCardTitle>
                        <PremiumCardDescription>{item.description}</PremiumCardDescription>
                        <GlowingIcon>{item.icon}</GlowingIcon>
                    </PremiumCard>
                </div>
            ))}
        </div>
    );
};

// ... (PremiumCard, PremiumCardTitle, PremiumCardDescription remain the same)

const GlowingIcon = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative w-full h-32 mt-auto flex items-center justify-center">
            {/* Icon Container with 3D and Glow Effects */}
            <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ease-out">
                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* The Icon */}
                <div className="relative z-10 text-white/80 group-hover:text-white transition-colors duration-300 [&>svg]:w-10 [&>svg]:h-10">
                    {children}
                </div>
            </div>

            {/* Reflection/Shadow */}
            <div className="absolute bottom-4 w-16 h-3 bg-primary/20 blur-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
        </div>
    );
};

const PremiumCard = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {

    return (
        <SpotlightCard
            className={cn(
                "rounded-2xl h-full w-full p-6 overflow-hidden bg-[#0a0a0a] border border-white/10 group-hover:border-primary/50 relative z-20 transition-all duration-300 flex flex-col justify-between min-h-[300px]",
                className
            )}
            spotlightColor="rgba(139, 92, 246, 0.15)"
        >
            <div className="relative z-50 flex flex-col h-full">
                {children}
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[40%] bg-primary/10 blur-[50px] rounded-full pointer-events-none" />
        </SpotlightCard>
    );

};

const PremiumCardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-white font-bold tracking-wide text-xl mb-2", className)}>
            {children}
        </h4>
    );
};

const PremiumCardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};

const GlowingBar = () => {
    return (
        <div className="relative w-full h-32 mt-auto flex items-center justify-center [perspective:1000px]">
            {/* 3D Bar Effect */}
            <div className="relative w-32 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg [transform:rotateX(20deg)_rotateZ(-15deg)] shadow-[0_0_30px_rgba(6,182,212,0.6)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] transition-all duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-white/30 rounded-lg blur-[2px]" />
            </div>

            {/* Reflection/Shadow */}
            <div className="absolute bottom-8 w-32 h-4 bg-cyan-500/20 blur-xl [transform:rotateZ(-15deg)_translateY(1rem)]" />
        </div>
    );
};
