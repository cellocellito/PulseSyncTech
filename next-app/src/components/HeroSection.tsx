import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { StarBackground } from "@/components/ui/star-background";

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-background to-background">
            <StarBackground />

            {/* Planet Glow Effect */}
            <div className="absolute top-[80%] md:top-[75%] left-1/2 -translate-x-1/2 w-[200%] md:w-[120%] h-[400px] bg-primary/30 blur-[120px] rounded-[100%] pointer-events-none z-0" />
            <div className="absolute top-[85%] md:top-[80%] left-1/2 -translate-x-1/2 w-[180%] md:w-[100%] h-[350px] bg-primary/50 blur-[100px] rounded-[100%] pointer-events-none z-0" />

            <div className="container relative z-30 px-4 mx-auto max-w-6xl text-center">
                <div className="space-y-8 animate-fade-in-up">
                    <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-4 animate-glow-pulse">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
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
                        >
                            <a href="https://calendly.com/pulsesync" target="_blank" rel="noopener noreferrer">
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

            {/* Eclipse/Moon Effect */}
            <div className="absolute top-[85%] md:top-[80%] left-1/2 -translate-x-1/2 w-[250%] md:w-[150%] aspect-square bg-black rounded-full animate-eclipse-pulse z-20 pointer-events-none overflow-hidden">
                {/* Main Body Gradient: Purple Top -> Black Bottom (Compressed to 15%) */}
                <div className="absolute inset-0 rounded-full bg-[linear-gradient(to_bottom,hsl(var(--primary)/0.4)_0%,#000000_10%)]" />

                {/* Sharp Horizon Line Highlight */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-primary/60 shadow-[0_0_20px_rgba(139,92,246,0.5)]" />
            </div>
        </section>
    );
}
