import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { GoldButton } from "./gold-button";

interface PricingFeature {
    text: string;
    included: boolean;
}

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: PricingFeature[];
    popular?: boolean;
    className?: string;
    ctaText?: string;
    ctaLink?: string;
}

export function PricingCard({
    title,
    price,
    description,
    features,
    popular = false,
    className,
    ctaText = "Book Now",
    ctaLink = "/book",
}: PricingCardProps) {
    return (
        <div className={cn(
            "rounded-lg border p-6 transition-all relative",
            popular
                ? "border-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.25)] scale-105 z-10"
                : "border-white/10 hover:border-gold/30",
            className
        )}>
            {popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-black text-xs py-1 px-3 rounded-full font-medium">
                    Popular
                </div>
            )}

            <h3 className={cn(
                "text-xl font-bold mb-2",
                popular ? "text-gold" : "text-white"
            )}>
                {title}
            </h3>

            <div className="mb-4">
                <span className="text-3xl font-bold">{price}</span>
                <span className="text-white/70 ml-1">/ session</span>
            </div>

            <p className="text-white/70 mb-6 text-sm">
                {description}
            </p>

            <ul className="space-y-3 mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <Check
                            className={cn(
                                "w-5 h-5 mt-0.5",
                                feature.included ? "text-gold" : "text-white/30"
                            )}
                        />
                        <span className={feature.included ? "text-white/90" : "text-white/50 line-through"}>
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>

            <GoldButton
                href={ctaLink}
                variant={popular ? "glow" : "outline"}
                className="w-full"
            >
                {ctaText}
            </GoldButton>
        </div>
    );
} 