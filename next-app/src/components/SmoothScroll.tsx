"use client";

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Inicializa o Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
            prevent: (node: any) => {
                // Previne Lenis em elementos com classe 'lenis-prevent'
                return node.classList?.contains('lenis-prevent') ||
                    node.closest?.('.lenis-prevent');
            },
        });

        lenisRef.current = lenis;

        // Expõe a instância globalmente para o hook useLenis
        (window as any).__lenis = lenis;

        let rafId: number;
        let isPageVisible = true;

        // Função de animação
        function raf(time: number) {
            if (isPageVisible) {
                lenis.raf(time);
            }
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        // Pausa o Lenis quando a página não está visível
        const handleVisibilityChange = () => {
            isPageVisible = !document.hidden;
            if (document.hidden) {
                lenis.stop();
            } else {
                lenis.start();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Cleanup
        return () => {
            cancelAnimationFrame(rafId);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            lenis.destroy();
            delete (window as any).__lenis;
        };
    }, []);

    return <>{children}</>;
}
