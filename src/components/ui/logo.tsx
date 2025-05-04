import * as React from "react";
import Link from "next/link";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    linkClassName?: string;
    showIcon?: boolean;
    size?: "sm" | "md" | "lg";
    asLink?: boolean;
}

export function Logo({
    className,
    linkClassName,
    showIcon = true,
    size = "md",
    asLink = true,
}: LogoProps) {
    const sizeClasses = {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-2xl",
    };

    const iconSizes = {
        sm: { size: 18 },
        md: { size: 20 },
        lg: { size: 24 },
    };

    const logoContent = (
        <>
            {showIcon && <Camera className="text-gold" {...iconSizes[size]} />}
            <span className={cn("text-white font-semibold", className)}>
                Becca<span className="text-gold gold-glow">Studio</span>
            </span>
        </>
    );

    if (asLink) {
        return (
            <Link
                href="/"
                className={cn(
                    "flex items-center gap-2 font-bold transition-colors",
                    sizeClasses[size],
                    linkClassName
                )}
            >
                {logoContent}
            </Link>
        );
    }

    return (
        <div
            className={cn(
                "flex items-center gap-2 font-bold transition-colors",
                sizeClasses[size],
                linkClassName
            )}
        >
            {logoContent}
        </div>
    );
} 