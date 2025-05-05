import * as React from "react";
import { Container } from "@/components/ui/container";
import { User, Camera, CalendarDays, Briefcase } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

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
            title: "Retratos",
            description: "Captura tu personalidad con nuestros servicios profesionales de fotografía de retratos.",
        },
        {
            icon: <Camera className="text-gold" size={28} />,
            title: "Sesiones familiares",
            description: "Crea recuerdos eternos con impresionantes sesiones de fotografía familiar.",
        },
        {
            icon: <Briefcase className="text-gold" size={28} />,
            title: "Comercial / Corporativo",
            description: "Eleva tu marca con fotografía comercial de alta calidad.",
        },
        {
            icon: <CalendarDays className="text-gold" size={28} />,
            title: "Bodas",
            description: "Documenta tu día especial con elegante fotografía de bodas.",
        },
    ];

    return (
        <section id="servicios" className="py-24">
            <div className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
                    backgroundRepeat: 'repeat',
                }}
            />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Services */}
                    <div className="space-y-12">
                        <SectionHeading
                            title="Explora Mis Servicios."
                            subtitle="¡Revisa lo que puedo hacer!"
                            accentText="Servicios"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group p-8 rounded-xl transition-all duration-300 bg-neutral-800/50 border border-neutral-700 shadow-lg hover:shadow-gold/10"
                                >
                                    <div className="mb-5 transform transition-all duration-300 group-hover:scale-105 bg-neutral-700/60 p-3 rounded-full inline-block group-hover:bg-gold/20">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-neutral-100">{service.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Photo Grid */}
                    <div className="relative min-h-[22rem]">
                        <Image
                            src="/images/gallery/gallery-6.jpg"
                            alt="Studio lighting setup"
                            width={800}
                            height={800}
                            className="absolute top-4 right-4 w-3/5 z-20 transform rotate-2 hover:z-40 h-48 object-cover rounded-xl shadow-xl transition-all duration-300 hover:scale-103 border-2 border-neutral-800 hover:border-gold/30 hover:shadow-gold/20"
                        />
                        <Image
                            src="/images/gallery/gallery-4.jpg"
                            alt="Photographer with camera"
                            width={800}
                            height={800}
                            className="absolute top-0 left-0 w-1/2 z-10 transform -rotate-3 hover:z-40 h-48 object-cover rounded-xl shadow-xl transition-all duration-300 hover:scale-103 border-2 border-neutral-800 hover:border-gold/30 hover:shadow-gold/20"
                        />
                        <Image
                            src="/images/gallery/gallery-2.jpg"
                            alt="Outdoor photography"
                            width={800}
                            height={800}
                            className="absolute top-60 right-0 w-2/3 z-0 transform -rotate-2 hover:z-40 h-48 object-cover rounded-xl shadow-xl transition-all duration-300 hover:scale-103 border-2 border-neutral-800 hover:border-gold/30 hover:shadow-gold/20"
                        />
                        <Image
                            src="/images/gallery/gallery-3.jpg"
                            alt="Camera equipment"
                            width={800}
                            height={800}
                            className="absolute top-96 left-8 w-1/2 z-30 transform rotate-1 hover:z-40 h-48 object-cover rounded-xl shadow-xl transition-all duration-300 hover:scale-103 border-2 border-neutral-800 hover:border-gold/30 hover:shadow-gold/20"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
} 