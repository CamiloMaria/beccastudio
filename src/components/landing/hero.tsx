import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
    return (
        <section className="relative w-full h-[90vh] overflow-hidden">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Professional photography showcase"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            {/* Hero Content */}
            <Container className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
                    Capturing Your Most Precious Moments
                </h1>

                <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/80">
                    Professional photography services that bring your vision to life through
                    the art of visual storytelling
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="min-w-40">
                        <Link href="/book">Book a Session</Link>
                    </Button>

                    <Button asChild size="lg" variant="outline" className="min-w-40 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20">
                        <Link href="/portfolio">Explore Portfolio</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
} 