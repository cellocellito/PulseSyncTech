"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, User, Smartphone, MessageSquare, ArrowRight, Send, Instagram } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function FinalCTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const isFormValid = formData.name && formData.phone && formData.email && formData.service && formData.message;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        const subject = `Novo Contato via Site - ${formData.service}`;
        const body = `Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Serviço: ${formData.service}

Mensagem:
${formData.message}`;

        const mailtoLink = `mailto:pulsesyncwork@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <motion.section
            ref={ref}
            id="contact"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="py-24 relative overflow-hidden bg-background"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-chart-2/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-chart-2/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container relative z-10 px-4 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Column: Contact Info */}
                    <div className="flex flex-col gap-8 h-full">
                        <div>
                            <span className="text-primary font-medium tracking-wider uppercase text-sm">Fale Conosco</span>
                            <h2 className="mt-2 text-4xl md:text-5xl font-bold leading-tight">
                                Vamos Iniciar Sua <br />
                                <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
                                    Jornada de Transformação
                                </span>
                            </h2>
                            <p className="mt-4 text-muted-foreground text-lg max-w-md">
                                Estamos prontos para levar sua empresa ao próximo nível com nossas soluções de automação inteligente.
                            </p>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-card/30 backdrop-blur-md border border-border/50 rounded-2xl p-8 space-y-6 shadow-lg flex-1 flex flex-col justify-center">
                            <h3 className="text-xl font-semibold text-foreground">Entre em Contato</h3>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Localização</p>
                                        <p className="text-sm text-muted-foreground">Botucatu, São Paulo, Brasil</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Instagram className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Instagram</p>
                                        <a href="https://www.instagram.com/pulsesync.tech?igsh=MjFndTVpMWY1bXBl" className="text-sm text-muted-foreground hover:text-primary transition-colors">@pulsesync.tech</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Email</p>
                                        <a href="mailto:pulsesyncwork@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            pulsesyncwork@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-10 shadow-2xl h-full flex flex-col justify-center">
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-foreground">Ainda tem dúvidas?</h3>
                            <p className="text-muted-foreground mt-2">
                                Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            name="name"
                                            placeholder="Nome Completo"
                                            className="pl-10 bg-background/50 border-border/50 focus:border-primary transition-colors h-14 text-base"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            name="phone"
                                            placeholder="Telefone / WhatsApp"
                                            className="pl-10 bg-background/50 border-border/50 focus:border-primary transition-colors h-14 text-base"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="Seu Email"
                                            className="pl-10 bg-background/50 border-border/50 focus:border-primary transition-colors h-14 text-base"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="relative">
                                        <select
                                            name="service"
                                            className="flex h-14 w-full rounded-md border border-border/50 bg-background/50 px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-muted-foreground focus:text-foreground"
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Selecione um Serviço</option>
                                            <option value="automacao">Automação de Processos</option>
                                            <option value="chatbot">Chatbots Inteligentes</option>
                                            <option value="integracao">Integração de Sistemas</option>
                                            <option value="consultoria">Consultoria n8n</option>
                                            <option value="outro">Outro</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-muted-foreground" />
                                    <textarea
                                        name="message"
                                        placeholder="Como podemos ajudar?"
                                        className="flex min-h-[180px] w-full rounded-md border border-border/50 bg-background/50 px-3 py-3 pl-10 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                disabled={!isFormValid}
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg font-medium shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                enableHoverBorder={false}
                            >
                                Enviar Mensagem
                                <Send className="ml-2 h-5 w-5" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
