"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
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

// Define ITEMS_PER_PAGE constant
const ITEMS_PER_PAGE = 10;

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
    // Add state for visible items count
    const [visibleItemsCount, setVisibleItemsCount] = useState<number>(ITEMS_PER_PAGE);

    // Reset visible count when filter changes
    useEffect(() => {
        setVisibleItemsCount(ITEMS_PER_PAGE);
    }, [filter]);

    // 5. Filtering Logic - Get all images matching filter
    const allFilteredImages = useMemo(() => {
        if (filter === "All") {
            return portfolioImages;
        }
        return portfolioImages.filter((image) => image.category === filter);
    }, [filter]);

    // Slice the filtered images based on visible count
    const imagesToDisplay = useMemo(() => {
        return allFilteredImages.slice(0, visibleItemsCount);
    }, [allFilteredImages, visibleItemsCount]);

    // 6. Lightbox Logic - Adjusted for allFilteredImages
    const openLightbox = useCallback((indexInDisplayed: number) => {
        const clickedImage = imagesToDisplay[indexInDisplayed];
        if (!clickedImage) return;

        const indexInAllFiltered = allFilteredImages.findIndex(img => img.src === clickedImage.src);

        if (indexInAllFiltered !== -1) {
            setLightboxIndex(indexInAllFiltered);
            setLightboxOpen(true);
        }
    }, [imagesToDisplay, allFilteredImages]); // Added allFilteredImages dependency

    // Generate slides from all filtered images
    const slides = useMemo(() => {
        return allFilteredImages.map((image) => ({
            src: image.src,
            width: image.width,
            height: image.height,
            alt: image.alt,
        }));
    }, [allFilteredImages]);

    // Function to load more items
    const loadMoreItems = useCallback(() => {
        setVisibleItemsCount(prevCount =>
            Math.min(prevCount + ITEMS_PER_PAGE, allFilteredImages.length)
        );
    }, [allFilteredImages.length]);

    // 7. Component Structure (JSX)
    return (
        <section id="galeria" className="py-24 bg-neutral-950 text-white">
            <Container>
                <SectionHeading
                    title="Galería de Proyectos"
                    subtitle="Explora una selección de mi trabajo reciente."
                    centered={true}
                    className="mb-12"
                />

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={filter === category ? 'secondary' : 'outline'}
                            onClick={() => setFilter(category)}
                            className={cn(
                                "border-neutral-700 hover:bg-neutral-800 hover:text-white",
                                filter === category && "bg-gold text-black border-gold hover:bg-gold/90 hover:text-black"
                            )}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Image Grid - Masonry using CSS columns - Now maps imagesToDisplay */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 lg:gap-6">
                    {imagesToDisplay.map((image, index) => (
                        <div
                            key={image.src}
                            className="mb-4 lg:mb-6 break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg border border-neutral-800/50 shadow-md hover:shadow-gold/20 transition-all duration-300"
                            onClick={() => openLightbox(index)} // Index is now relative to imagesToDisplay
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                priority={index < ITEMS_PER_PAGE} // Prioritize loading initial page items
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white text-sm font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message if no images match filter - Use allFilteredImages */}
                {allFilteredImages.length === 0 && (
                    <p className="text-center text-neutral-500 mt-12">
                        No hay imágenes que coincidan con la categoría &quot;{filter}&quot;.
                    </p>
                )}

                {/* Load More Button - Conditional rendering */}
                {visibleItemsCount < allFilteredImages.length && (
                    <div className="text-center mt-12">
                        <Button
                            onClick={loadMoreItems}
                            variant="secondary"
                            className="bg-gold text-black border-gold hover:bg-gold/90 hover:text-black"
                        >
                            Cargar Más
                        </Button>
                    </div>
                )}

            </Container>

            {/* Lightbox Component */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={slides} // Slides are generated from allFilteredImages
                index={lightboxIndex} // Index is calculated correctly for allFilteredImages
            // Optional Plugins (Uncomment to enable)
            // plugins={[Thumbnails, Zoom]}
            />
        </section>
    );
} 