import * as React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

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
                                    href="/portfolio"
                                    className="text-white/90 hover:text-gold transition-colors"
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-white/90 hover:text-gold transition-colors"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-white/90 hover:text-gold transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-white/90 hover:text-gold transition-colors"
                                >
                                    Contact
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
                                    contact@beccastudio.com
                                </a>
                            </li>
                            <li className="text-white/90">
                                <a
                                    href="tel:+15551234567"
                                    className="text-white/90 hover:text-gold transition-colors"
                                >
                                    +1 (555) 123-4567
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mt-4">
                                <Link
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gold/90 hover:text-gold transition-colors hover:scale-110"
                                >
                                    <Instagram size={20} />
                                </Link>
                                <Link
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gold/90 hover:text-gold transition-colors hover:scale-110"
                                >
                                    <Facebook size={20} />
                                </Link>
                                <Link
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gold/90 hover:text-gold transition-colors hover:scale-110"
                                >
                                    <Twitter size={20} />
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