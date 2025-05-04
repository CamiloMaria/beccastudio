import * as React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
    quote: string;
    author: {
        name: string;
        title?: string;
        image?: string;
    };
    rating?: number;
    className?: string;
}

export function TestimonialCard({
    quote,
    author,
    rating = 5,
    className,
}: TestimonialCardProps) {
    return (
        <div className={cn(
            "rounded-lg border border-white/10 p-6 hover:border-gold/30 transition-all",
            className
        )}>
            <Quote className="text-gold/70 w-10 h-10 mb-4" />

            <p className="text-white/90 mb-6 italic">
                &ldquo;{quote}&rdquo;
            </p>

            <div className="flex items-center gap-4">
                {author.image && (
                    <Image
                        src={author.image}
                        alt={author.name}
                        width={50}
                        height={50}
                        className="rounded-full border-2 border-gold/50"
                    />
                )}

                <div>
                    <h4 className="text-gold font-medium">{author.name}</h4>
                    {author.title && (
                        <p className="text-white/70 text-sm">{author.title}</p>
                    )}
                </div>
            </div>

            {rating > 0 && (
                <div className="flex mt-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={i < rating ? "currentColor" : "none"}
                            stroke={i < rating ? "none" : "currentColor"}
                            className={cn(
                                "w-4 h-4",
                                i < rating ? "text-gold" : "text-white/30"
                            )}
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ))}
                </div>
            )}
        </div>
    );
} 