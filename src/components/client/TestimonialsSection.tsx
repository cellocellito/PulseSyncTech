"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from 'next-intl';

export default function TestimonialsSection() {
    const t = useTranslations('testimonials');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const differentiators = [
        {
            title: t('items.security.title'),
            description: t('items.security.description'),
        },
        {
            title: t('items.implementation.title'),
            description: t('items.implementation.description'),
        },
        {
            title: t('items.support.title'),
            description: t('items.support.description'),
        },
    ];

    return (
        <motion.section
            ref={ref}
            id="about"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-24 relative"
        >
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        {t('title')}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <HoverEffect items={differentiators} />
            </div>
        </motion.section>
    );
}


