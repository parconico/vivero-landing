"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const galleryItems = [
  {
    src: "/images/flores-variadas.png",
    alt: "Pasillo de flores de colores en el vivero",
    title: "Flores de Estación",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/anturios.png",
    alt: "Anturios rojos en el vivero El Algarrobo",
    title: "Anturios",
    span: "",
  },
  {
    src: "/images/ciclamen.png",
    alt: "Ciclámenes rosados y fucsias",
    title: "Ciclámenes",
    span: "",
  },
  {
    src: "/images/plantas-interior.png",
    alt: "Plantas de interior con hojas grandes en el vivero",
    title: "Plantas de Interior",
    span: "",
  },
  {
    src: "/images/vivero-panoramica.png",
    alt: "Vista panorámica del vivero con plantines",
    title: "Nuestro Vivero",
    span: "",
  },
  {
    src: "/images/invernadero-plantines.png",
    alt: "Invernadero con filas de plantines en crecimiento",
    title: "Invernadero",
    span: "sm:col-span-2",
  },
  {
    src: "/images/gazanias.png",
    alt: "Gazanias de colores vibrantes",
    title: "Gazanias",
    span: "",
  },
  {
    src: "/images/palmeras.png",
    alt: "Palmeras y plantas tropicales",
    title: "Palmeras",
    span: "",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Gallery() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="galeria" className="bg-green-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Nuestro catálogo
          </span>
          <h2 className="mt-3 text-3xl font-bold text-green-950 sm:text-4xl lg:text-5xl">
            Galería de Productos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-800/60">
            Descubrí nuestra amplia variedad de plantas, árboles y productos
            para tu jardín.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl ${item.span}`}
            >
              <div className="relative aspect-square w-full overflow-hidden sm:aspect-auto sm:h-full sm:min-h-[220px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-300 sm:p-5 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold text-white drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-6 overflow-hidden rounded-2xl sm:mt-4"
        >
          <div className="relative aspect-video w-full">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/vivero-recorrido.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/50 to-transparent p-4 sm:p-6">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white drop-shadow-lg sm:text-xl">
                    Recorré nuestro vivero
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    Conocé nuestro espacio y toda la variedad que tenemos para vos
                  </p>
                </div>
                <button
                  onClick={togglePlay}
                  className="rounded-full bg-white/20 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                  aria-label={isPlaying ? "Pausar" : "Reproducir"}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
