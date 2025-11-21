"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
    {
        title: "Velocidade",
        description: "Automatize processos em minutos, não em meses. Reduza o tempo de execução em até 90%.",
    },
    {
        title: "Eficiência",
        description: "Elimine erros humanos e tarefas repetitivas. Foque no que realmente importa.",
    },
    {
        title: "Integração",
        description: "Conecte mais de 400+ aplicações sem código. Sincronize dados em tempo real.",
    },
    {
        title: "Precisão",
        description: "Fluxos de trabalho inteligentes com IA. Decisões baseadas em dados confiáveis.",
    },
];

export default function BenefitsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-24 relative"
        >
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Transforme seu negócio
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Potencie sua empresa com automações inteligentes que entregam resultados reais
                    </p>
                </div>

                <HoverEffect items={benefits} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4" />
            </div>
        </motion.section>
    );
}
