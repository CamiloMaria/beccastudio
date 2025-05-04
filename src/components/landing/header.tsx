"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { NavItem } from "@/types";
import { useEffect, useState } from "react";

export function Header() {
    const navItems: NavItem[] = [
        { label: 'INICIO', href: '/' },
        { label: 'PORTAFOLIO', href: '/portfolio' },
        { label: 'SERVICIOS', href: '/services' },
        { label: 'ACERCA DE', href: '/about' },
        { label: 'CONTACTO', href: '/contact' },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-black/90 backdrop-blur-sm shadow-md py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <Container className="flex items-center justify-between">
                {/* Logo */}
                <Logo />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                                text-sm tracking-wide transition-colors duration-200
                                ${isScrolled
                                    ? 'text-white/90 hover:text-white'
                                    : 'text-white/90 hover:text-white'
                                }
                                relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                                after:w-0 after:bg-current after:transition-all after:duration-300 
                                hover:after:w-full focus:outline-none focus:ring-2 
                                focus:ring-white/50 focus:ring-offset-2 rounded-sm
                            `}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Button
                        asChild
                        variant="ghost"
                        size="lg"
                        className={`rounded-none px-6 py-2 border border-white/30 text-white hover:text-white text-sm tracking-widest hover:bg-white/10 transition-colors duration-200
                            ${isScrolled
                                ? 'text-white border-white/30 hover:bg-white/10'
                                : 'text-white border-white/30 hover:bg-white/10'
                            }
                        `}
                    >
                        <Link href="/book">Reserva una sesión</Link>
                    </Button>
                </nav>

                {/* CTA & Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
            </Container>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 top-[57px] z-50 bg-black/90 backdrop-blur-sm">
                    <Container className="flex flex-col gap-4 py-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-xl py-2 border-b border-white/10 text-white/90 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button
                            asChild
                            className="mt-4 border border-white/30 hover:bg-white/10"
                            variant="outline"
                        >
                            <Link href="/book" onClick={() => setIsMenuOpen(false)}>Reserva una sesión</Link>
                        </Button>
                    </Container>
                </div>
            )}
        </header>
    );
} 