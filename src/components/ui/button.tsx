import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0" +
    " hover-elevate active-elevate-2",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-purple-80 border border-purple-80",
                destructive:
                    "bg-destructive text-destructive-foreground border border-destructive-border",
                outline:
                    // Shows the background color of whatever card / sidebar / accent background it is inside of.
                    // Inherits the current text color.
                    " border [border-color:var(--button-outline)]  shadow-xs active:shadow-none ",
                secondary: "border bg-secondary text-secondary-foreground border border-secondary-border ",
                // Add a transparent border so that when someone toggles a border on later, it doesn't shift layout/size.
                ghost: "border border-transparent",
            },
            // Heights are set as "min" heights, because sometimes Ai will place large amount of content
            // inside buttons. With a min-height they will look appropriate with small amounts of content,
            // but will expand to fit large amounts of content.
            size: {
                default: "min-h-9 px-4 py-2",
                sm: "min-h-8 rounded-md px-3 text-xs",
                lg: "min-h-10 rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // Map variants to background colors for the inner part of HoverBorderGradient
        const getBgClass = () => {
            switch (variant) {
                case "destructive":
                    return "bg-destructive";
                case "secondary":
                    return "bg-secondary";
                case "ghost":
                    return "bg-transparent";
                case "outline":
                    return "bg-background";
                default:
                    return "bg-primary";
            }
        };

        return (
            <HoverBorderGradient
                asChild={asChild}
                containerClassName={cn(buttonVariants({ variant, size, className }), "bg-transparent border-none")}
                className="bg-transparent p-0 m-0" // Ensure content doesn't have conflicting bg/padding if handled by container
                bgClassName={getBgClass()}
                ref={ref}
                {...props}
            >
                {props.children}
            </HoverBorderGradient>
        )
    },
)
Button.displayName = "Button"

export { Button, buttonVariants }
