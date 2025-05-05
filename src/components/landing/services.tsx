import * as React from "react";
import { Container } from "@/components/ui/container";
import { User, Camera, CalendarDays, Briefcase } from "lucide-react";
import Image from "next/image";

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
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
                    backgroundRepeat: 'repeat',
                }}
            />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Services */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-3">
                                I&apos;m very talented.
                            </h2>
                            <p className="text-gold text-xl">Check what I can do!</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group p-6 rounded-lg transition-all duration-300 hover:shadow-xl bg-white"
                                >
                                    <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-neutral-900">{service.title}</h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Photo Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Studio lighting setup"
                            width={800}
                            height={800}
                            className="w-full h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                        />
                        <Image
                            src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Photographer with camera"
                            width={800}
                            height={800}
                            className="w-full h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                        />
                        <Image
                            src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Outdoor photography"
                            width={800}
                            height={800}
                            className="w-full h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                        />
                        <Image
                            src="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Camera equipment"
                            width={800}
                            height={800}
                            className="w-full h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
} 