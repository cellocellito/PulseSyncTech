"use client";

import { useState } from "react";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useLenis } from "@/hooks/useLenis";

const navLinks = [
    { name: "Início", link: "#home" },
    { name: "Serviços", link: "#services" },
    { name: "Sobre Nós", link: "#about" },
    { name: "Contato", link: "#contact" },
];

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lenis = useLenis();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (href.startsWith("#")) {
            // Usa o Lenis para smooth scroll
            lenis?.scrollTo(href, {
                offset: -80,
                duration: 1.5,
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={navLinks} onItemClick={() => { }} />
                <div className="flex items-center gap-4">
                    <NavbarButton
                        variant="white"
                        href="https://crm.pulsesync.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Agendar Demo
                    </NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navLinks.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={(e) => handleNavClick(e, item.link)}
                            className="relative text-muted-foreground hover:text-foreground text-lg w-full"
                        >
                            <span className="block">{item.name}</span>
                        </a>
                    ))}
                    <div className="flex w-full flex-col gap-4 mt-4">
                        <NavbarButton
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            className="w-full"
                            href="https://crm.pulsesync.tech/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agendar Demo
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
