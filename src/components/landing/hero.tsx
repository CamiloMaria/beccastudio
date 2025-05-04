"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useEffect, useRef } from "react";

export function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrollValue = window.scrollY;
                parallaxRef.current.style.transform = `translateY(${scrollValue * 0.3}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative w-full h-[90vh] overflow-hidden">
            {/* Hero Background Image */}
            <div ref={parallaxRef} className="absolute inset-0 z-0">
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
                    Capturando Tus Momentos Más Preciosos
                </h1>

                <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/80">
                    Servicios de fotografía profesional que dan vida a tu visión a través
                    del arte de contar historias visuales
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="min-w-40">
                        <Link href="/book">Reserva una sesión</Link>
                    </Button>

                    <Button asChild size="lg" variant="outline" className="min-w-40 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20">
                        <Link href="/portfolio">Explora el portafolio</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
} 