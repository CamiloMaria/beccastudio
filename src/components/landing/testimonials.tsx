"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 1. Define Testimonial Data Structure
interface TestimonialData {
    quote: string;
    author: {
        name: string;
        title?: string;
        image?: string; // Optional image
    };
    rating?: number;
}

// 2. Define Placeholder Testimonial Data
// Replace with actual testimonials and image paths
const testimonialsData: TestimonialData[] = [
    {
        quote: "¡Las fotos quedaron espectaculares! Becca capturó la esencia de nuestra boda de una manera única. ¡Gracias infinitas!",
        author: { name: "Ana y Juan Pérez", title: "Novios Felices", image: "/images/avatars/avatar1.png" },
        rating: 5
    },
    {
        quote: "Profesionalismo y calidez definen a Becca. Las fotos de mi sesión 2x2 superaron mis expectativas.",
        author: { name: "Carlos Gómez", title: "Emprendedor" }, // No image example
        rating: 5
    },
    {
        quote: "La sesión familiar fue muy divertida y las fotos reflejan perfectamente nuestra conexión. ¡Totalmente recomendada!",
        author: { name: "Familia Martínez", image: "/images/avatars/avatar2.png" },
        rating: 5
    },
    {
        quote: "Becca tiene un ojo increíble para los detalles. Las fotos comerciales para mi negocio quedaron impecables.",
        author: { name: "Sofía Castillo", title: "Dueña de Tienda Local", image: "/images/avatars/avatar3.png" },
        rating: 5
    },
    {
        quote: "Desde el primer contacto hasta la entrega final, todo fue excelente. ¡Amo mis retratos!",
        author: { name: "Laura Fernández" },
        rating: 4 // Example with different rating
    },
];

export function Testimonials() {
    // 3. Setup Carousel Hook with Autoplay plugin
    const [emblaRef, emblaApi]: UseEmblaCarouselType = useEmblaCarousel(
        { loop: true, align: 'start' },
        [Autoplay({ delay: 5000, stopOnInteraction: true })]
    );

    // 4. Navigation State & Callbacks
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback((currentEmblaApi: NonNullable<UseEmblaCarouselType[1]>) => {
        if (!currentEmblaApi) return;
        setPrevBtnDisabled(!currentEmblaApi.canScrollPrev());
        setNextBtnDisabled(!currentEmblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    // 5. Component Structure (JSX)
    return (
        <section id="testimonios" className="py-24 bg-neutral-950 text-white">
            <Container>
                {/* Header Area with Title and Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <SectionHeading
                        title="Lo Que Dicen Mis Clientes"
                        className="mb-0 flex-1"
                    />
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollPrev}
                            disabled={prevBtnDisabled}
                            className="border-neutral-700 hover:bg-neutral-800 disabled:opacity-30 rounded-full w-10 h-10"
                        >
                            <ChevronLeft className="h-5 w-5" />
                            <span className="sr-only">Anterior</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollNext}
                            disabled={nextBtnDisabled}
                            className="border-neutral-700 hover:bg-neutral-800 disabled:opacity-30 rounded-full w-10 h-10"
                        >
                            <ChevronRight className="h-5 w-5" />
                            <span className="sr-only">Siguiente</span>
                        </Button>
                    </div>
                </div>

                {/* Carousel Viewport - Updated to use Embla's class naming conventions */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {testimonialsData.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4"
                            >
                                <TestimonialCard {...testimonial} />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
} 