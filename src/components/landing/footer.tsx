import * as React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function Footer() {
    return (
        <footer className="bg-black py-12 mt-auto border-t border-white/10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="md:col-span-2">
                        <Logo className="mb-4" />
                        <p className="text-white/90 max-w-md">
                            Professional photography services specializing in portraits, events,
                            and special moments. We capture memories that last a lifetime.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-medium text-lg mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/portfolio"
                                    className="text-white/90 hover:text-white transition-colors"
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-white/90 hover:text-white transition-colors"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-white/90 hover:text-white transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-white/90 hover:text-white transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-medium text-lg mb-4 text-white">Contact</h3>
                        <ul className="space-y-2">
                            <li className="text-white/90">contact@enfocate.com</li>
                            <li className="text-white/90">+1 (555) 123-4567</li>
                            <li className="text-white/90">
                                123 Photography St, Suite 101<br />
                                City, State 12345
                            </li>
                            <li className="flex items-center gap-4 mt-4">
                                <Link
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/90 hover:text-white transition-colors"
                                >
                                    <Instagram size={20} />
                                </Link>
                                <Link
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/90 hover:text-white transition-colors"
                                >
                                    <Facebook size={20} />
                                </Link>
                                <Link
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/90 hover:text-white transition-colors"
                                >
                                    <Twitter size={20} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
                    <p>© {new Date().getFullYear()} Enfócate Photography. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
} 