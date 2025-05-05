"use client";

import Image from "next/image";

import { Container } from "@/components/ui/container";
import { GoldButton } from "@/components/ui/gold-button";
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
        <section className="relative h-screen w-full overflow-hidden">
            {/* Dark overlay with texture */}
            <div
                className="absolute inset-0 z-10 bg-black/60"
                style={{
                    backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
                    backgroundBlendMode: 'overlay',
                }}
            />

            {/* Hero Background Image */}
            <div ref={parallaxRef} className="absolute inset-0 z-0 flex">
                <div className="w-1/2 h-full">
                    <Image
                        src="/images/rebeca.jpg"
                        alt="Professional photography showcase left"
                        width={800}
                        height={800}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
                <div className="w-1/2 h-full">
                    <Image
                        src="/images/rebeca-2.jpg"
                        alt="Professional photography showcase right"
                        width={800}
                        height={800}
                        className="object-cover w-full h-full object-top"
                        priority
                    />
                </div>
            </div>

            {/* Hero Content */}
            <Container className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
                    Capturando Tus <span className="text-gold gold-glow">Momentos</span> Más Preciosos
                </h1>

                <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/90">
                    Servicios de fotografía profesional que dan vida a tu visión a través
                    del arte de contar historias visuales
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <GoldButton
                        href="/book"
                        size="lg"
                        variant="glow"
                        className="min-w-40"
                    >
                        Reserva una sesión
                    </GoldButton>

                    <GoldButton
                        href="/portfolio"
                        size="lg"
                        variant="outline"
                        className="min-w-40 backdrop-blur-sm"
                    >
                        Explora mi portafolio
                    </GoldButton>
                </div>
            </Container>
        </section>
    );
} 