"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, ChartBar, Blocks, Target } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const benefits = [
    {
        title: "Velocidade",
        description: "Automatize processos em minutos, não em meses. Reduza o tempo de execução em até 90%.",
        icon: <Zap className="w-8 h-8 text-primary" />,
    },
    {
        title: "Eficiência",
        description: "Elimine erros humanos e tarefas repetitivas. Otimize recursos e foque no que realmente importa.",
        icon: <ChartBar className="w-8 h-8 text-primary" />,
    },
    {
        title: "Integração",
        description: "Conecte mais de 400+ aplicações sem código. Sincronize dados em tempo real.",
        icon: <Blocks className="w-8 h-8 text-primary" />,
    },
    {
        title: "Precisão",
        description: "Fluxos de trabalho inteligentes com IA. Decisões baseadas em dados confiáveis.",
        icon: <Target className="w-8 h-8 text-primary" />,
    },
];

export default function BenefitsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 relative bg-background overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

            <div className="container px-4 mx-auto max-w-7xl relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div className="max-w-3xl">
                        <span className="text-primary font-medium mb-4 block">
                            Nossos Valores
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                            Transforme seu negócio <br />
                            <span className="text-muted-foreground">com Soluções Inovadoras</span>
                        </h2>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-6 max-w-md text-left lg:text-right">
                        <p className="text-muted-foreground text-lg">
                            Potencialize sua empresa com automações inteligentes que entregam resultados reais através de estratégias únicas.
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <SpotlightCard className="h-full p-8 rounded-3xl border border-white/10 bg-transparent backdrop-blur-sm hover:bg-card/50 transition-all duration-500 hover:border-primary/50" spotlightColor="rgba(139, 92, 246, 0.2)">
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                                    <div className="p-3 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/30 group-hover:bg-primary/20 transition-colors duration-500">
                                        {benefit.icon}
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>

                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}
