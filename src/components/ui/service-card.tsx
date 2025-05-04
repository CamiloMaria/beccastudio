import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GoldButton } from "./gold-button";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    price?: string;
    duration?: string;
    ctaText?: string;
    ctaLink?: string;
    className?: string;
}

export function ServiceCard({
    title,
    description,
    image,
    price,
    duration,
    ctaText = "Book Service",
    ctaLink = "/book",
    className,
}: ServiceCardProps) {
    return (
        <div className={cn(
            "group rounded-lg overflow-hidden border border-white/10 transition-all hover:border-gold/30 flex flex-col",
            className
        )}>
            <div className="relative h-60 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                {price && (
                    <div className="absolute top-4 right-4 bg-gold text-black font-bold py-1 px-3 rounded-full text-sm">
                        {price}
                    </div>
                )}

                {duration && (
                    <div className="absolute bottom-4 left-4 bg-black/80 border border-gold/30 text-gold py-1 px-3 rounded-full text-xs">
                        {duration}
                    </div>
                )}
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gold">{title}</h3>
                <p className="text-white/70 mb-6 flex-1">{description}</p>

                <GoldButton
                    href={ctaLink}
                    variant="outline"
                    className="mt-auto"
                >
                    {ctaText}
                </GoldButton>
            </div>
        </div>
    );
} 