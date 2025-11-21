"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const differentiators = [
    {
        title: "Segurança de dados",
        description: "Self-hosted ou cloud, você decide. Controle total sobre seus dados.",
    },
    {
        title: "Implementação rápida",
        description: "Do planejamento à execução em dias, não meses.",
    },
    {
        title: "Suporte especializado",
        description: "Time de experts em n8n 100% em português.",
    },
];

export default function TestimonialsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                        Por que escolher a Pulse Sync?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Junte-se a empresas que já transformaram seus processos
                    </p>
                </div>

                <HoverEffect items={differentiators} />
            </div>
        </motion.section>
    );
}
