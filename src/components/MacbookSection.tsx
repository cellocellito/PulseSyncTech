"use client";

import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookSection() {
    return (
        <section className="w-full overflow-hidden  bg-background">
            <MacbookScroll
                title={
                    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                        Visualize seus workflows <br /> com interface n8n
                    </span>
                }
                src="/screenshot po.jpg"
                showGradient={false}
            />
        </section>
    );
}
