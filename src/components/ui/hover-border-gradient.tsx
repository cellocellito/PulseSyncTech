"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export const HoverBorderGradient = React.forwardRef<
    HTMLElement,
    React.PropsWithChildren<
        {
            as?: React.ElementType;
            asChild?: boolean;
            containerClassName?: string;
            className?: string;
            bgClassName?: string;
            duration?: number;
            clockwise?: boolean;
        } & React.HTMLAttributes<HTMLElement>
    >
>(
    (
        {
            children,
            containerClassName,
            className,
            bgClassName = "bg-black",
            asChild = false,
            as: Tag = "button",
            duration = 1,
            clockwise = true,
            ...props
        },
        ref
    ) => {
        const [hovered, setHovered] = useState<boolean>(false);
        const [direction, setDirection] = useState<Direction>("TOP");

        const rotateDirection = (currentDirection: Direction): Direction => {
            const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
            const currentIndex = directions.indexOf(currentDirection);
            const nextIndex = clockwise
                ? (currentIndex - 1 + directions.length) % directions.length
                : (currentIndex + 1) % directions.length;
            return directions[nextIndex];
        };

        const movingMap: Record<Direction, string> = {
            TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
            LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
            BOTTOM:
                "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
            RIGHT:
                "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        };

        const highlight =
            "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

        useEffect(() => {
            if (!hovered) {
                const interval = setInterval(() => {
                    setDirection((prevState) => rotateDirection(prevState));
                }, duration * 1000);
                return () => clearInterval(interval);
            }
        }, [hovered, duration, clockwise]);

        const content = (
            <>
                <div
                    className={cn(
                        "z-10 w-full h-full flex items-center justify-center bg-transparent rounded-[inherit]",
                        className
                    )}
                >
                    {asChild && React.isValidElement(children)
                        ? (children as React.ReactElement<any>).props.children
                        : children}
                </div>
                <motion.div
                    className={cn(
                        "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
                    )}
                    style={{
                        filter: "blur(2px)",
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                    }}
                    initial={{ background: movingMap[direction] }}
                    animate={{
                        background: hovered
                            ? [movingMap[direction], highlight]
                            : movingMap[direction],
                    }}
                    transition={{ ease: "linear", duration: duration ?? 1 }}
                />
                <div
                    className={cn(
                        "absolute z-1 flex-none inset-[2px] rounded-[inherit]",
                        bgClassName
                    )}
                />
            </>
        );

        const containerClass = cn(
            "relative flex items-center justify-center bg-transparent transition duration-500 overflow-visible decoration-clone",
            containerClassName
        );

        if (asChild && React.isValidElement(children)) {
            const child = children as React.ReactElement<any>;
            const childProps = child.props;
            const { className: childClassName, ...restChildProps } = childProps;

            return React.cloneElement(
                child,
                {
                    ...restChildProps,
                    ...props,
                    ref,
                    className: cn(containerClass, childClassName),
                    onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
                        setHovered(true);
                        childProps.onMouseEnter?.(e);
                        props.onMouseEnter?.(e);
                    },
                    onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
                        setHovered(false);
                        childProps.onMouseLeave?.(e);
                        props.onMouseLeave?.(e);
                    },
                },
                content
            );
        }

        return (
            <Tag
                ref={ref}
                onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
                    setHovered(true);
                    props.onMouseEnter?.(event);
                }}
                onMouseLeave={(event: React.MouseEvent<HTMLDivElement>) => {
                    setHovered(false);
                    props.onMouseLeave?.(event);
                }}
                className={containerClass}
                {...props}
            >
                {content}
            </Tag>
        );
    }
);
HoverBorderGradient.displayName = "HoverBorderGradient";
