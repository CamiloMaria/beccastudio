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
        { label: 'Portafolio', href: '/portfolio' },
        { label: 'Servicios', href: '/services' },
        { label: 'Acerca de', href: '/about' },
        { label: 'Contacto', href: '/contact' },
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
                ? 'bg-background shadow-md py-3'
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
                                text-base font-medium tracking-wide transition-colors duration-200
                                ${isScrolled
                                    ? 'text-muted-foreground hover:text-primary/80'
                                    : 'text-background hover:text-background/80'
                                }
                                relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                                after:w-0 after:bg-current after:transition-all after:duration-300 
                                hover:after:w-full focus:outline-none focus:ring-2 
                                focus:ring-primary-500 focus:ring-offset-2 rounded-sm
                            `}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA & Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <Button asChild size="lg" className="hidden md:inline-flex">
                        <Link href="/book">Reserva una sesión</Link>
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </Container>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 top-[57px] z-50 bg-background">
                    <Container className="flex flex-col gap-4 py-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-xl py-2 border-b border-border"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button asChild className="mt-4">
                            <Link href="/book" onClick={() => setIsMenuOpen(false)}>Reserva una sesión</Link>
                        </Button>
                    </Container>
                </div>
            )}
        </header>
    );
} 