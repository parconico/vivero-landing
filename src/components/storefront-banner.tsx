"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function StorefrontBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-green-50/40 to-green-50/50 py-20 sm:py-28">
      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-green-200/20 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-emerald-200/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            {/* Decorative frame behind image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -inset-3 -rotate-2 rounded-3xl bg-gradient-to-br from-green-200/60 to-emerald-100/40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.35 }}
              className="absolute -inset-3 rotate-1 rounded-3xl bg-gradient-to-tr from-green-100/50 to-lime-100/30"
            />

            {/* Main image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-green-900/10">
              <Image
                src="/images/fachada-vivero.png"
                alt="Cartel del vivero El Algarrobo sobre pared amarilla"
                width={700}
                height={520}
                className="relative z-10 block w-full object-cover"
                priority
              />
              {/* Vignette */}
              <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.7,
                type: "spring",
                stiffness: 200,
              }}
              className="absolute -bottom-5 -right-3 z-30 flex items-center gap-2 rounded-2xl border border-green-100 bg-white px-5 py-3 shadow-lg sm:-right-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <MapPin className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <p className="text-sm font-semibold text-green-950">Av. Alem 815</p>
                <p className="text-xs text-green-600">La Rioja, Argentina</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Nuestro local
            </span>
            <h3 className="mt-3 text-3xl font-bold text-green-950 sm:text-4xl">
              Vení a
              <span className="text-green-600"> visitarnos</span>
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-green-800/70">
              Te esperamos en nuestro vivero con la mejor atención y
              asesoramiento personalizado. Recorré nuestro espacio y descubrí la
              planta perfecta para vos.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { label: "Lun a Sáb", value: "9:00 - 13:00 y 17:00 - 21:00" },
                { label: "Atención", value: "Personalizada y profesional" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-green-900">
                    {item.label}:
                  </span>
                  <span className="text-sm text-green-700/70">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
