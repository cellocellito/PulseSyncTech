"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';
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
import LanguageSelector from "./LanguageSelector";

export default function Navigation() {
    const t = useTranslations('nav');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: t('home'), link: "#home" },
        { name: t('services'), link: "#services" },
        { name: t('about'), link: "#about" },
        { name: t('contact'), link: "#contact" },
    ];

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
                    <LanguageSelector />
                    <NavbarButton
                        variant="primary"
                        href="https://calendly.com/pulsesync"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('scheduleDemo')}
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
                        <div className="flex justify-center mb-2">
                            <LanguageSelector />
                        </div>
                        <NavbarButton
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            className="w-full"
                            href="https://calendly.com/pulsesync"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('scheduleDemo')}
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}


