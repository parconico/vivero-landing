"use client";

import Image from "next/image";
import Link from "next/link";
import { Leaf, Instagram, Facebook } from "lucide-react";

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-green-100 bg-green-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="#inicio" className="flex items-center gap-2">
              <Image
                src="/images/logo_vivero.png"
                alt="Vivero - Logo"
                width={140}
                height={45}
                className="h-10 w-auto "
              />
            </Link>
            <p className="max-w-xs text-center text-sm text-green-200/60 md:text-left">
              Vivero familiar con más de 20 años de experiencia. Pasión por la
              naturaleza en cada planta.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/viveroelalgarrobo_?igsh=MWhiamVxYmpsa2o3NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-green-800/50 p-2 text-green-200/70 transition-colors hover:bg-green-800 hover:text-green-100"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1HmJUomHzb/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-green-800/50 p-2 text-green-200/70 transition-colors hover:bg-green-800 hover:text-green-100"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-green-200/70 transition-colors hover:text-green-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-green-800/50 pt-8 text-center text-xs text-green-200/40">
          <div className="flex items-center gap-1">
            <Leaf className="h-3 w-3" />
            <span>Hecho con amor por la naturaleza</span>
          </div>
          <span>
            &copy; {new Date().getFullYear()} Vivero. Todos los derechos
            reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
