import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutMe() {
    return (
        <section id="sobre-mi" className="py-24 bg-neutral-900 text-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    {/* Text Column */}
                    <div className="lg:col-span-2 order-2 lg:order-1">
                        <SectionHeading
                            title="¡Hola, soy Becca!"
                            subtitle="¡Qué bueno tenerte por aquí!"
                            accentText="Becca!"
                        />
                        <p className="text-neutral-300 mb-4 leading-relaxed">
                            ¡Qué bueno tenerte por aquí! Soy Rebeca Ramos (pero entre nosotros, Becca está perfecto). Orgullosamente dominicana, encuentro mi pasión en el arte de la fotografía, especialmente en capturar la belleza natural y espontánea de la vida.
                        </p>
                        <p className="text-neutral-300 mb-4 leading-relaxed">
                            Mi enfoque se centra en dejar que los momentos fluyan. Busco crear un ambiente relajado donde te sientas tú misma/o, permitiéndome capturar imágenes luminosas, llenas de emoción y con un cuidado especial por cada detalle. Desde bodas llenas de amor, retratos que reflejan tu yo interior, sesiones 2x2 profesionales hasta eventos vibrantes, estoy aquí para documentar tu historia con autenticidad.
                        </p>
                        <strong className="block mt-6 text-gold/90 mb-4">
                            &quot;La belleza está en los detalles y la emoción del momento.&quot;
                        </strong>
                        <p className="text-neutral-300 mb-4 leading-relaxed">
                            Soy una observadora por naturaleza y me encanta encontrar esos pequeños gestos que lo dicen todo. Me verás totalmente inmersa durante una sesión, ¡y probablemente sonriendo si la luz y el momento se alinean a la perfección! (Además, una buena taza de café por la mañana es mi ritual para empezar con energía creativa).
                        </p>
                        <p className="text-neutral-300 leading-relaxed">
                            ¿Conversamos sobre cómo puedo ayudarte a atesorar tus momentos más especiales?
                        </p>
                    </div>

                    {/* Image Column */}
                    <div className="lg:col-span-3 order-1 lg:order-2">
                        <Image
                            // IMPORTANT: Replace with actual image path and dimensions
                            src="/images/rebeca-profile.jpg" // Make sure this image exists in /public/images
                            alt="Fotógrafa Rebeca Ramos (Becca)"
                            width={800} // Adjust width based on image aspect ratio
                            height={1000} // Adjust height based on image aspect ratio
                            className="rounded-lg shadow-xl w-full h-auto object-cover object-top max-w-lg mx-auto lg:max-w-none border-4 border-neutral-800"
                            priority // Prioritize loading this image as it's likely important
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
} 