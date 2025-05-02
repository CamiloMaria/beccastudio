"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="w-full py-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container className="flex items-center justify-between">
                {/* Logo */}
                <Logo />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        href="/portfolio"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/services"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Services
                    </Link>
                    <Link
                        href="/about"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Contact
                    </Link>
                </nav>

                {/* CTA & Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <Button asChild className="hidden md:inline-flex">
                        <Link href="/book">Book a Session</Link>
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
                        <Link
                            href="/portfolio"
                            className="text-xl py-2 border-b border-border"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/services"
                            className="text-xl py-2 border-b border-border"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/about"
                            className="text-xl py-2 border-b border-border"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-xl py-2 border-b border-border"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Button asChild className="mt-4">
                            <Link href="/book" onClick={() => setIsMenuOpen(false)}>Book a Session</Link>
                        </Button>
                    </Container>
                </div>
            )}
        </header>
    );
} 