import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const goldButtonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-gold text-black shadow-xs hover:bg-gold-light",
                outline:
                    "border border-gold bg-transparent text-gold shadow-xs hover:bg-gold/10",
                ghost:
                    "text-gold hover:bg-gold/10",
                link:
                    "text-gold underline-offset-4 hover:underline",
                subtle:
                    "bg-gold/20 text-gold hover:bg-gold/30",
                glow:
                    "bg-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.7)] hover:shadow-[0_0_25px_rgba(212,175,55,0.9)] hover:bg-gold-light",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-11 rounded-md px-6 text-base",
                icon: "h-9 w-9 p-0",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface GoldButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof goldButtonVariants> {
    asChild?: boolean;
    href?: string;
    external?: boolean;
}

const GoldButton = React.forwardRef<HTMLButtonElement, GoldButtonProps>(
    ({ className, variant, size, asChild = false, href, external = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        if (href) {
            return (
                <Link
                    href={href}
                    className={cn(goldButtonVariants({ variant, size, className }))}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                >
                    {children}
                </Link>
            );
        }

        return (
            <Comp
                className={cn(goldButtonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {children}
            </Comp>
        );
    }
);
GoldButton.displayName = "GoldButton";

export { GoldButton, goldButtonVariants }; 