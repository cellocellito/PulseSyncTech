"use client";

import { useState } from "react";
import { Database, Mail, Webhook, Sparkles, GitBranch, MessageSquare, Calendar, Users, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type WorkflowType = "chatbot" | "calendar" | "leads";

const workflows = [
    {
        id: "chatbot" as WorkflowType,
        icon: MessageSquare,
        label: "Chatbot IA",
        color: "from-purple-500 to-pink-500",
    },
    {
        id: "calendar" as WorkflowType,
        icon: Calendar,
        label: "Agendamento",
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: "leads" as WorkflowType,
        icon: Users,
        label: "Gestão de Leads",
        color: "from-green-500 to-emerald-500",
    },
];

const workflowSteps = {
    chatbot: [
        { icon: MessageSquare, label: "Recebe mensagem", color: "text-purple-400" },
        { icon: Sparkles, label: "Processa com IA", color: "text-pink-400" },
        { icon: Database, label: "Busca contexto", color: "text-purple-400" },
        { icon: Zap, label: "Gera resposta", color: "text-pink-400" },
        { icon: ArrowRight, label: "Envia ao cliente", color: "text-purple-400" },
    ],
    calendar: [
        { icon: Calendar, label: "Novo agendamento", color: "text-blue-400" },
        { icon: Users, label: "Verifica disponibilidade", color: "text-cyan-400" },
        { icon: Sparkles, label: "Valida regras", color: "text-blue-400" },
        { icon: Mail, label: "Envia convite", color: "text-cyan-400" },
        { icon: Database, label: "Salva no CRM", color: "text-blue-400" },
    ],
    leads: [
        { icon: Webhook, label: "Captura lead", color: "text-green-400" },
        { icon: Sparkles, label: "Enriquece dados", color: "text-emerald-400" },
        { icon: Database, label: "Verifica duplicidade", color: "text-green-400" },
        { icon: GitBranch, label: "Calcula score", color: "text-emerald-400" },
        { icon: Mail, label: "Notifica vendas", color: "text-green-400" },
    ],
};

export default function WorkflowVisualization() {
    const [activeWorkflow, setActiveWorkflow] = useState<WorkflowType>("chatbot");

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

            <div className="container px-4 mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Automação visual e inteligente
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Crie fluxos de trabalho complexos com interface visual do n8n
                    </p>
                </div>

                {/* Workflow Selector */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {workflows.map((workflow) => {
                        const Icon = workflow.icon;
                        const isActive = activeWorkflow === workflow.id;
                        return (
                            <Button
                                key={workflow.id}
                                variant={isActive ? "default" : "outline"}
                                onClick={() => setActiveWorkflow(workflow.id)}
                                className={`min-w-[160px] h-14 text-base transition-all duration-300 ${isActive
                                    ? 'shadow-[0_0_30px_rgba(139,92,246,0.4)]'
                                    : 'hover:border-primary/50'
                                    }`}
                                enableHoverBorder={!isActive}
                            >
                                <Icon className="w-5 h-5 mr-2" />
                                {workflow.label}
                            </Button>
                        );
                    })}
                </div>

                {/* Workflow Steps */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeWorkflow}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="relative"
                    >
                        {/* Steps Container */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 relative">
                            {/* Connection Lines (desktop only) */}
                            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -translate-y-1/2" />

                            {workflowSteps[activeWorkflow].map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        {/* Step Card */}
                                        <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] group">
                                            {/* Step Number */}
                                            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                                                {index + 1}
                                            </div>

                                            {/* Icon Container */}
                                            <div className="mb-3 md:mb-4 flex justify-center">
                                                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${workflows.find(w => w.id === activeWorkflow)?.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                                                    <div className="w-full h-full rounded-xl bg-background/95 flex items-center justify-center">
                                                        <Icon className={`w-8 h-8 ${step.color}`} />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Label */}
                                            <p className="text-center text-sm font-semibold text-foreground">
                                                {step.label}
                                            </p>

                                            {/* Animated pulse */}
                                            <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                                        </div>

                                        {/* Arrow (mobile only) */}
                                        {index < workflowSteps[activeWorkflow].length - 1 && (
                                            <div className="md:hidden flex justify-center my-1">
                                                <ArrowRight className="w-5 h-5 text-primary/50" />
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Animated particles */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full bg-primary"
                                    initial={{ left: '0%', opacity: 0 }}
                                    animate={{
                                        left: '100%',
                                        opacity: [0, 1, 1, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        delay: i * 1,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{
                                        boxShadow: '0 0 10px hsl(var(--primary))',
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Bottom Description */}
                <div className="mt-16 text-center">
                    <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Visualize e gerencie automações complexas com a interface drag-and-drop do n8n.
                        Conecte aplicações, adicione lógica condicional e integre IA em minutos.
                    </p>
                </div>
            </div>
        </section>
    );
}
