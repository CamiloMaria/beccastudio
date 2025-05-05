import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GoldButton } from "@/components/ui/gold-button";
import { Mail, Instagram, MessageCircle } from "lucide-react"; // Using MessageCircle for WhatsApp

export function Contact() {
    return (
        <section id="contacto" className="py-24 bg-neutral-900 text-white">
            <Container>
                <SectionHeading
                    title="¡Hablemos!"
                    subtitle="Estoy aquí para ayudarte a capturar tus momentos más especiales. Contáctame a través de tu medio preferido:"
                    centered={true}
                />

                <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-16">
                    {/* WhatsApp Button */}
                    <GoldButton asChild size="lg">
                        <a
                            href="https://wa.me/18094491991?text=Hola%20Becca,%20quiero%20una%20sesión%20de%20fotos."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>WhatsApp</span>
                        </a>
                    </GoldButton>

                    {/* Email Link */}
                    <a
                        href="mailto:iambecky.057@gmail.com"
                        className="flex items-center gap-2 text-lg text-neutral-300 hover:text-gold transition-colors duration-200"
                    >
                        <Mail className="w-5 h-5" />
                        <span>iambecky.057@gmail.com</span>
                    </a>

                    {/* Instagram Link */}
                    <a
                        href="https://instagram.com/becca_rs17" // Ensure this is the correct URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-lg text-neutral-300 hover:text-gold transition-colors duration-200"
                    >
                        <Instagram className="w-5 h-5" />
                        <span>@becca_rs17</span>
                    </a>
                </div>
            </Container>
        </section>
    );
} 