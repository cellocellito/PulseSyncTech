"use client";

import React, { useState, useEffect } from "react";

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    animationDuration: string;
    animationDelay: string;
}

export const StarBackground = () => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars: Star[] = [];
            const starCount = 100; // Adjust for density

            for (let i = 0; i < starCount; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 2 + 1, // 1px to 3px
                    opacity: Math.random() * 0.7 + 0.3,
                    animationDuration: `${Math.random() * 3 + 2}s`, // 2s to 5s
                    animationDelay: `${Math.random() * 2}s`,
                });
            }
            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-white animate-twinkle"
                    style={{
                        top: `${star.y}%`,
                        left: `${star.x}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        animationDuration: star.animationDuration,
                        animationDelay: star.animationDelay,
                    }}
                />
            ))}

            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>
    );
};
