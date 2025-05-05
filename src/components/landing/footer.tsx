import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { GoldButton } from "@/components/ui/gold-button";

export function Footer() {
    return (
        <footer className="bg-black py-12 mt-auto border-t border-gold/20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="md:col-span-2">
                        <Logo />
                        <p className="text-white/90 max-w-md mt-4">
                            Professional photography services specializing in portraits, events,
                            and special moments. We capture memories that last a lifetime.
                        </p>
                        <GoldButton variant="link" href="/contact" className="mt-4 px-0">
                            Contactar ahora →
                        </GoldButton>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-medium text-lg mb-4 text-gold">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#galeria"
                                    className="text-white/90 hover:text-gold transition-colors"
                                >
                                    Galeria
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#servicios"
                                    className="text-white/90 hover:text-gold transition-colors"
                                >
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#testimonios"
                                    className="text-white/90 hover:text-gold transition-colors"
                                >
                                    Testimonios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#sobre-mi"
                                    className="text-white/90 hover:text-gold transition-colors"
                                >
                                    Sobre Mi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contacto"
                                    className="text-white/90 hover:text-gold transition-colors"
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-medium text-lg mb-4 text-gold">Contacto</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="mailto:contact@beccastudio.com"
                                    className="text-white/90 hover:text-gold transition-colors"
                                >
                                    iambecky.057@gmail.com
                                </a>
                            </li>
                            <li className="text-white/90">
                                <a
                                    href="tel:+15551234567"
                                    className="text-white/90 hover:text-gold transition-colors"
                                >
                                    +1 (809) 449-1991
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mt-4">
                                <Link
                                    href="https://instagram.com/becca_rs17"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gold/90 hover:text-gold transition-colors hover:scale-110"
                                >
                                    <Instagram size={20} />
                                </Link>
                                <Link
                                    href="https://wa.me/18094491991"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gold/90 hover:text-gold transition-colors hover:scale-110"
                                >
                                    <MessageCircle size={20} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gold/20 mt-8 pt-8 text-center text-white/70">
                    <p>© {new Date().getFullYear()} <span className="text-gold">BeccaStudio Photography</span>. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
} 