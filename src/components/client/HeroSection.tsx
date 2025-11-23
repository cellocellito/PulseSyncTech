"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useTranslations } from 'next-intl';
import { Link as I18nLink } from '@/i18n/routing';

export default function HeroSection() {
    const t = useTranslations('hero');
    
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
            <WavyBackground className="max-w-4xl mx-auto pb-40" backgroundFill="hsl(var(--background))" colors={["#8b5cf6", "#6366f1", "#ec4899", "#a855f7", "#d946ef"]}>
                <div className="container relative z-10 px-4 mx-auto max-w-6xl text-center">
                    <div className="space-y-8 animate-fade-in-up">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                            {t('title')}
                            <br />
                            {t('titleLine2')}
                        </h1>

                        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
                            {t('description')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <Button
                                size="lg"
                                className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary border-primary-border shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-300"
                                data-testid="button-start-transformation"
                                asChild
                            >
                                <a href="https://calendly.com/pulsesync" target="_blank" rel="noopener noreferrer">
                                    {t('startTransformation')}
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10"
                                data-testid="button-learn-more"
                                asChild
                            >
                                <I18nLink href="#services">
                                    {t('learnMore')}
                                </I18nLink>
                            </Button>
                        </div>
                    </div>
                </div>
            </WavyBackground>
        </section>
    );
}


