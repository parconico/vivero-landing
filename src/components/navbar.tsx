"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-green-100"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#inicio" className="flex items-center gap-2">
          <Image
            src="/images/logo_vivero.png"
            alt="Vivero - Logo"
            width={160}
            height={50}
            className={`h-14 w-auto sm:h-16 transition-all duration-300 ${
              scrolled ? "mix-blend-multiply" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-green-900 hover:bg-green-50 hover:text-green-700"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className={`ml-3 transition-colors ${
              scrolled
                ? "bg-green-700 hover:bg-green-800 text-white"
                : "bg-white/15 hover:bg-white/25 text-white border border-white/30"
            }`}
          >
            <Link href="#contacto">Contactanos</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menú">
              <Menu className={`h-6 w-6 transition-colors ${scrolled ? "text-green-800" : "text-white"}`} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-white">
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            <div className="flex flex-col gap-2 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-green-900 transition-colors hover:bg-green-50"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 bg-green-700 hover:bg-green-800 text-white"
              >
                <Link href="#contacto" onClick={() => setOpen(false)}>
                  Contactanos
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
