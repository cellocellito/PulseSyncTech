"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";

interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}

interface NavBodyProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface NavItemsProps {
    items: {
        name: string;
        link: string;
    }[];
    className?: string;
    onItemClick?: () => void;
}

interface MobileNavProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface MobileNavHeaderProps {
    children: React.ReactNode;
    className?: string;
}

interface MobileNavMenuProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            ref={ref}
            className={cn("fixed inset-x-0 top-4 z-50 w-full px-4", className)}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(
                        child as React.ReactElement<{ visible?: boolean }>,
                        { visible },
                    )
                    : child,
            )}
        </motion.div>
    );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                width: visible ? "60%" : "70%",
                y: visible ? 10 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
            }}
            className={cn(
                "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-[#0a0a10]/80 backdrop-blur-md px-6 py-3 lg:flex border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]",
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-8 text-sm font-medium transition duration-200 lg:flex",
                className,
            )}
        >
            {items.map((item, idx) => (
                <a
                    onMouseEnter={() => setHovered(idx)}
                    onClick={onItemClick}
                    className="relative px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                    key={`link-${idx}`}
                    href={item.link}
                >
                    <span className="relative z-20">{item.name}</span>
                </a>
            ))}
        </motion.div>
    );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: "blur(10px)",
                width: visible ? "90%" : "100%",
                borderRadius: "2rem",
            }}
            className={cn(
                "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-[#0a0a10]/90 border border-white/10 py-3 lg:hidden",
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({
    children,
    className,
}: MobileNavHeaderProps) => {
    return (
        <div
            className={cn(
                "flex w-full flex-row items-center justify-between px-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const MobileNavMenu = ({
    children,
    className,
    isOpen,
    onClose,
}: MobileNavMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={cn(
                        "w-full flex flex-col items-start justify-start gap-4 px-4 py-4 mt-2",
                        className,
                    )}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({
    isOpen,
    onClick,
}: {
    isOpen: boolean;
    onClick: () => void;
}) => {
    return isOpen ? (
        <IconX className="text-foreground cursor-pointer" onClick={onClick} />
    ) : (
        <IconMenu2 className="text-foreground cursor-pointer" onClick={onClick} />
    );
};

export const NavbarLogo = () => {
    return (
        <a
            href="#home"
            className="relative z-20 mr-4 flex items-center space-x-2 px-2"
        >
            <span className="font-sora font-bold text-xl text-white uppercase tracking-wider pt-1">
                Pulse Sync
            </span>
        </a>
    );
};

export const NavbarButton = ({
    href,
    as: Tag = "a",
    children,
    className,
    variant = "primary",
    ...props
}: {
    href?: string;
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "dark" | "gradient" | "white";
} & (
        | React.ComponentPropsWithoutRef<"a">
        | React.ComponentPropsWithoutRef<"button">
    )) => {
    const baseStyles =
        "px-6 py-2 rounded-full text-sm font-medium relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

    const variantStyles = {
        primary:
            "bg-primary text-primary-foreground shadow-[0_0_24px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]",
        secondary: "bg-transparent shadow-none text-foreground hover:bg-primary/10",
        dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]",
        white: "bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)]",
        gradient:
            "bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
    };

    return (
        <Tag
            href={href || undefined}
            className={cn(baseStyles, variantStyles[variant], className)}
            {...props}
        >
            {children}
        </Tag>
    );
};
