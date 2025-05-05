"use client";

import * as React from "react";
import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// Optional plugins (can be added later if needed)
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button"; // Using standard button
import { cn } from "@/lib/utils";

// 1. Define Image Data Structure
interface PortfolioItem {
    src: string;
    alt: string;
    category: string;
    width: number;
    height: number;
}

// 2. Define Placeholder Image Data
// Replace with your actual image paths and details
const portfolioImages: PortfolioItem[] = [
    { src: '/images/gallery/gallery-1.jpg', alt: 'Descripción foto 1', category: 'Bodas', width: 800, height: 1200 },
    { src: '/images/gallery/gallery-2.jpg', alt: 'Descripción foto 2', category: 'Sesiones familiares', width: 1200, height: 800 },
    { src: '/images/gallery/gallery-3.jpg', alt: 'Descripción foto 3', category: 'Fotos 2x2', width: 800, height: 800 },
    { src: '/images/gallery/gallery-4.jpg', alt: 'Descripción foto 4', category: 'Comercios', width: 1200, height: 700 },
    { src: '/images/gallery/gallery-5.jpg', alt: 'Descripción foto 5', category: 'Bodas', width: 800, height: 1000 },
    { src: '/images/gallery/gallery-6.jpg', alt: 'Descripción foto 6', category: 'Otros', width: 900, height: 900 },
    { src: '/images/gallery/gallery-7.jpg', alt: 'Descripción foto 7', category: 'Sesiones familiares', width: 1000, height: 800 },
    { src: '/images/gallery/gallery-8.jpg', alt: 'Descripción foto 8', category: 'Fotos 2x2', width: 800, height: 1000 },
    { src: '/images/gallery/gallery-9.jpg', alt: 'Descripción foto 9', category: 'Bodas', width: 1200, height: 800 },
    { src: '/images/gallery/gallery-10.jpg', alt: 'Descripción foto 10', category: 'Comercios', width: 1000, height: 1000 },
];

// 3. Define Categories
const categories: string[] = ["All", "Fotos 2x2", "Sesiones familiares", "Comercios", "Bodas", "Otros"];

export function PortfolioGallery() {
    // 4. Component State
    const [filter, setFilter] = useState<string>("All");
    const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
    const [lightboxIndex, setLightboxIndex] = useState<number>(0);

    // 5. Filtering Logic
    const filteredImages = useMemo(() => {
        if (filter === "All") {
            return portfolioImages;
        }
        return portfolioImages.filter((image) => image.category === filter);
    }, [filter]);

    // 6. Lightbox Logic
    const openLightbox = useCallback((index: number) => {
        // Find the index in the *original* unfiltered array for consistent lightbox behavior if needed,
        // but it's simpler to use the filtered index if lightbox only shows filtered images.
        // Let's map index from filteredImages to the index within that filtered array.
        setLightboxIndex(index);
        setLightboxOpen(true);
    }, []);

    const slides = useMemo(() => {
        return filteredImages.map((image) => ({
            src: image.src,
            width: image.width,
            height: image.height,
            alt: image.alt,
        }));
    }, [filteredImages]);

    // 7. Component Structure (JSX)
    return (
        <section className="py-24 bg-neutral-950 text-white">
            <Container>
                <SectionHeading
                    title="Galería de Proyectos"
                    subtitle="Explora una selección de mi trabajo reciente."
                    centered={true}
                    className="mb-12" // Added margin bottom here instead of filter div
                />

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={filter === category ? 'secondary' : 'outline'} // Using secondary for active
                            onClick={() => setFilter(category)}
                            className={cn(
                                "border-neutral-700 hover:bg-neutral-800 hover:text-white",
                                filter === category && "bg-gold text-black border-gold hover:bg-gold/90 hover:text-black" // Specific gold style for active
                            )}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Image Grid - Masonry using CSS columns */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 lg:gap-6">
                    {filteredImages.map((image, index) => (
                        <div
                            key={image.src}
                            className="mb-4 lg:mb-6 break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg border border-neutral-800/50 shadow-md hover:shadow-gold/20 transition-all duration-300"
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={image.width} // Required for Next.js Image
                                height={image.height} // Required for Next.js Image
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                priority={index < 8} // Prioritize loading initial images
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white text-sm font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message if no images match filter */}
                {filteredImages.length === 0 && (
                    <p className="text-center text-neutral-500 mt-12">
                        No hay imágenes que coincidan con la categoría &quot;{filter}&quot;.
                    </p>
                )}

            </Container>

            {/* Lightbox Component */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={slides}
                index={lightboxIndex}
            // Optional Plugins (Uncomment to enable)
            // plugins={[Thumbnails, Zoom]}
            />
        </section>
    );
} 