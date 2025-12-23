"use client";

import { useEffect, useState } from 'react';
import Lenis from 'lenis';

/**
 * Hook para acessar a instância do Lenis e fazer scroll programático
 * 
 * Exemplo de uso:
 * ```tsx
 * const lenis = useLenis();
 * 
 * // Scroll para um elemento
 * lenis?.scrollTo('#section-id');
 * 
 * // Scroll para uma posição específica
 * lenis?.scrollTo(1000);
 * 
 * // Scroll com opções
 * lenis?.scrollTo('#section-id', { 
 *   offset: -100, 
 *   duration: 2,
 *   easing: (t) => t
 * });
 * ```
 */
export function useLenis() {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        // Procura pela instância global do Lenis
        const interval = setInterval(() => {
            const lenisInstance = (window as any).__lenis;
            if (lenisInstance) {
                setLenis(lenisInstance);
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return lenis;
}
