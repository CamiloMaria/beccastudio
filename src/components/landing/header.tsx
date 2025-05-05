"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GoldButton } from "@/components/ui/gold-button";
import { Logo } from "@/components/ui/logo";
import { NavItem } from "@/types";
import { useEffect, useState } from "react";

export function Header() {
    const navItems: NavItem[] = [
        { label: 'INICIO', href: '/' },
        { label: 'SERVICIOS', href: '/services' },
        { label: 'PORTAFOLIO', href: '/portfolio' },
        { label: 'ACERCA DE', href: '/about' },
        { label: 'CONTACTO', href: '/contact' },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

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
                    {navItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                                text-sm tracking-wide transition-colors duration-200
                                ${index === activeIndex ? 'text-gold' : 'text-white/90 hover:text-gold'}
                                relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                                after:w-0 after:bg-gold after:transition-all after:duration-300 
                                hover:after:w-full focus:outline-none focus:ring-2 
                                focus:ring-gold/50 focus:ring-offset-2 rounded-sm
                            `}
                            onClick={() => setActiveIndex(index)}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <GoldButton
                        href="/book"
                        size="lg"
                        variant="outline"
                        className="rounded-none px-6 py-2 text-sm tracking-widest"
                    >
                        Reserva una sesión
                    </GoldButton>
                </nav>

                {/* CTA & Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-gold"
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
                        {navItems.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-xl py-2 border-b border-white/10 
                                    ${index === activeIndex ? 'text-gold' : 'text-white/90 hover:text-gold'}`}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setIsMenuOpen(false);
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <GoldButton
                            href="/book"
                            variant="outline"
                            className="mt-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Reserva una sesión
                        </GoldButton>
                    </Container>
                </div>
            )}
        </header>
    );
} 