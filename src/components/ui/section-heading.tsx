import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    accentText?: string;
    centered?: boolean;
    className?: string;
}

export function SectionHeading({
    title,
    subtitle,
    accentText,
    centered = false,
    className,
}: SectionHeadingProps) {
    // Format the title by replacing the accent text with a gold-styled version if provided
    const formattedTitle = accentText && title.includes(accentText)
        ? title.split(accentText).map((part, i, arr) =>
            i < arr.length - 1
                ? <React.Fragment key={i}>
                    {part}<span className="text-gold gold-glow">{accentText}</span>
                </React.Fragment>
                : part
        )
        : title;

    return (
        <div
            className={cn(
                "mb-10",
                centered ? "text-center" : "text-left",
                className
            )}
        >
            <h2 className="text-3xl md:text-4xl font-bold">
                {formattedTitle}
            </h2>

            {subtitle && (
                <p className="mt-3 text-white/70 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}

            <div className={cn(
                "h-1 w-20 bg-gold mt-4",
                centered ? "mx-auto" : ""
            )} />
        </div>
    );
} 