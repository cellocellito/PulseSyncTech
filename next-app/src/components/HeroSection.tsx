"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import DarkVeil from "./DarkVeil";

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-background">
            <div className="absolute w-[150%] h-[150%] -left-[25%] -top-[5%] z-0">
                <DarkVeil />
            </div>

            <div className="container relative z-30 px-4 mx-auto max-w-6xl text-center">
                <div className="space-y-8 animate-fade-in-up">
                    <div className="inline-flex items-center rounded-full border border-[#925cf0]/30 bg-[#925cf0]/10 px-3 py-1 text-sm font-medium text-[#925cf0] backdrop-blur-sm mb-4 animate-glow-pulse">
                        <span className="flex h-2 w-2 rounded-full bg-[#925cf0] mr-2 animate-pulse"></span>
                        Nova Era da Automação
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
                        <span className="font-sans block mb-2">Automatize o futuro</span>
                        <span className="font-serif italic font-light text-primary-foreground/90 block mt-2">
                            da sua empresa.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                        A Pulse Sync conecta sistemas, elimina tarefas manuais e acelera resultados com automações n8n inteligentes.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                        <Button
                            size="lg"
                            className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all duration-300"
                            data-testid="button-start-transformation"
                            asChild
                            enableHoverBorder={false}
                        >
                            <a href="https://crm.pulsesync.tech/" target="_blank" rel="noopener noreferrer">
                                Inicie sua transformação
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 text-lg rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300"
                            data-testid="button-learn-more"
                            asChild
                        >
                            <Link href="#services">
                                Saiba mais
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>


        </section>
    );
}
