"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

const navLinks = [
  { label: "Functions", href: "#functions" },
  { label: "Coverage", href: "#coverage" },
  { label: "Why BimmerX", href: "#why" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop layout */}
        <div className="relative hidden md:flex items-center justify-between h-20">
          {/* Logo desktop — gauche */}
          <a href="#" className="shrink-0">
            <div className="relative w-80 h-20">
              <Image
                src="/logo navbar.png"
                alt="BimmerX"
                fill
                className="object-contain object-left"
                sizes="320px"
              />
            </div>
          </a>

          {/* Nav — centré absolument */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#A0A4AB] hover:text-white text-sm font-medium transition-colors duration-200 hover:text-[#1C69D4]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA — droite */}
          <WhatsAppButton label="Get BimmerX" size="sm" />
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden items-center justify-between h-16">
          {/* Logo mobile — centré */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="#">
              <div className="relative w-40 h-12">
                <Image
                  src="/logo navbar.png"
                  alt="BimmerX"
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </a>
          </div>

          {/* Spacer gauche */}
          <div className="w-10" />

          {/* Hamburger — droite */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/98 backdrop-blur-md border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-[#A0A4AB] hover:text-white py-2 text-base font-medium border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <WhatsAppButton label="Get BimmerX" size="sm" className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
