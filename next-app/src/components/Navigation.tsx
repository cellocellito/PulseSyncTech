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

const navLinks = [
    { name: "Início", link: "#home" },
    { name: "Serviços", link: "#services" },
    { name: "Sobre Nós", link: "#about" },
    { name: "Contato", link: "#contact" },
];

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (href: string) => {
        if (href.startsWith("#")) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
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
                        href="https://calendly.com/pulsesync"
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
                            onClick={() => handleNavClick(item.link)}
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
                            href="https://calendly.com/pulsesync"
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
