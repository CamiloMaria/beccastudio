import * as React from "react";
import { Container } from "@/components/ui/container";
import { User, Camera, CalendarDays, Briefcase } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "../ui/section-heading";

// Define a type for our service items
interface ServiceItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function Services() {
    // Define our service items
    const services: ServiceItem[] = [
        {
            icon: <User className="text-gold" size={28} />,
            title: "Portraits",
            description: "Capture your personality with our professional portrait photography services.",
        },
        {
            icon: <Camera className="text-gold" size={28} />,
            title: "Family shots",
            description: "Create timeless memories with stunning family photography sessions.",
        },
        {
            icon: <Briefcase className="text-gold" size={28} />,
            title: "Commercial / Corporate",
            description: "Elevate your brand with high-quality commercial photography.",
        },
        {
            icon: <CalendarDays className="text-gold" size={28} />,
            title: "Weddings",
            description: "Document your special day with elegant wedding photography.",
        },
    ];

    return (
        <section className="py-24 bg-black">
            <Container>
                <SectionHeading
                    title="Nuestros Servicios"
                    accentText="Servicios"
                    subtitle="Descubre nuestra colección de servicios fotográficos profesionales diseñados para capturar tus momentos más importantes con elegancia y estilo."
                    centered
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left column - Services */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6 flex flex-col"
                            >
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-black">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right column - Photo grid */}
                    <div className="grid grid-cols-2 gap-4 h-fit">
                        <div className="relative aspect-square rounded-lg overflow-hidden">
                            <Image
                                src="/images/services/keyboard.jpg"
                                alt="Photography equipment"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 25vw, 50vw"
                            />
                        </div>
                        <div className="relative aspect-square rounded-lg overflow-hidden">
                            <Image
                                src="/images/services/event.jpg"
                                alt="Event photography"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 25vw, 50vw"
                            />
                        </div>
                        <div className="relative aspect-square rounded-lg overflow-hidden">
                            <Image
                                src="/images/services/portrait.jpg"
                                alt="Portrait photography"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 25vw, 50vw"
                            />
                        </div>
                        <div className="relative aspect-square rounded-lg overflow-hidden">
                            <Image
                                src="/images/services/professional.jpg"
                                alt="Professional photography"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 25vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
} 