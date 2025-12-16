"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Headphones } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import MetallicPaint, { parseLogoImage } from "@/components/ui/metallic-paint";
import ShinyText from "@/components/ui/shiny-text";
import { useState, useEffect } from "react";

const differentiators = [
    {
        title: "Segurança de dados",
        description: "Self-hosted ou cloud, você decide. Controle total sobre seus dados.",
        icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
        title: "Implementação rápida",
        description: "Do planejamento à execução em dias, não meses.",
        icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
        title: "Suporte especializado",
        description: "Time de experts em n8n 100% em português.",
        icon: <Headphones className="w-6 h-6 text-primary" />,
    },
];

export default function WhyChooseUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [imageData, setImageData] = useState<ImageData | null>(null);

    useEffect(() => {
        async function loadDefaultImage() {
            try {
                const response = await fetch("/logo.svg");
                const blob = await response.blob();
                const file = new File([blob], "default.png", { type: blob.type });

                const parsedData = await parseLogoImage(file);
                setImageData(parsedData?.imageData ?? null);

            } catch (err) {
                console.error("Error loading default image:", err);
            }
        }

        loadDefaultImage();
    }, []);

    return (
        <section
            ref={ref}
            id="about"
            className="h-auto md:h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/80 antialiased relative overflow-hidden py-10 md:py-0"
        >

            <Spotlight />

            <div className="container px-4 mx-auto max-w-7xl relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Column: Text */}
                    <div className="space-y-6 text-left max-w-3xl">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                                Por que escolher a
                            </h2>
                            <ShinyText
                                text="Pulse Sync?"
                                disabled={false}
                                speed={3}
                                className="font-sora font-bold text-4xl md:text-7xl uppercase tracking-wider pt-2"
                            />
                        </div>
                        <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
                            <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
                                {imageData ? (
                                    <MetallicPaint
                                        imageData={imageData}
                                        params={{ edge: 1.0, patternBlur: 0.005, patternScale: 2, refraction: 0.015, speed: 0.3, liquid: 0.07 }}
                                    />
                                ) : (
                                    <img
                                        src="/logo.svg"
                                        alt="Pulse Sync Logo"
                                        className="w-full h-full object-contain"
                                    />
                                )}
                            </div>
                            <p className="font-normal text-base text-neutral-300 leading-relaxed text-center md:text-left">
                                Junte-se a empresas que já transformaram seus processos.
                                A Pulse Sync oferece soluções robustas e escaláveis para automatizar seu negócio com segurança e eficiência, permitindo que você foque no que realmente importa: o crescimento da sua empresa.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Cards */}
                    <div className="flex flex-col gap-4">
                        {differentiators.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="p-4 md:p-6 rounded-2xl border border-white/10 bg-transparent hover:bg-white/5 transition-colors duration-300 flex items-center gap-4 group backdrop-blur-sm"
                            >
                                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors border border-primary/20 flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                    <p className="text-sm text-neutral-400">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
