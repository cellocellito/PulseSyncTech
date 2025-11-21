"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const successStories = [
    {
        title: "E-commerce Scale",
        description: "Redução de 70% no tempo de resposta e atendimento 24/7 com agentes de IA, resultando em maior satisfação do cliente.",
    },
    {
        title: "Imobiliária Prime",
        description: "Aumento de 40% na taxa de conversão com qualificação automática de leads e agendamento de visitas instantâneo.",
    },
    {
        title: "Agência Growth",
        description: "Economia de 20h semanais automatizando relatórios de performance e processos de onboarding de novos clientes.",
    },
];

export default function SuccessStoriesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                        Casos de Sucesso
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Veja como empresas estão revolucionando seus resultados com nossas automações
                    </p>
                </div>

                <HoverEffect items={successStories} className="grid-cols-1 md:grid-cols-3" />
            </div>
        </motion.section>
    );
}
