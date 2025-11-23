"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from 'next-intl';

export default function SuccessStoriesSection() {
    const t = useTranslations('successStories');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const successStories = [
        {
            title: t('items.ecommerce.title'),
            description: t('items.ecommerce.description'),
        },
        {
            title: t('items.realEstate.title'),
            description: t('items.realEstate.description'),
        },
        {
            title: t('items.agency.title'),
            description: t('items.agency.description'),
        },
    ];

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-24 relative bg-secondary/20"
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

                <HoverEffect items={successStories} className="grid-cols-1 md:grid-cols-3" />
            </div>
        </motion.section>
    );
}


