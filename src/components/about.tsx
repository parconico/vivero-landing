"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "+30", label: "Años de experiencia" },
  { icon: Users, value: "+5.000", label: "Clientes satisfechos" },
  { icon: Award, value: "+500", label: "Especies disponibles" },
  { icon: Heart, value: "100%", label: "Pasión por las plantas" },
];

export function About() {
  return (
    <section id="nosotros" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Quiénes somos
          </span>
          <h2 className="mt-3 text-3xl font-bold text-green-950 sm:text-4xl lg:text-5xl">
            Una tradición familiar
            <br />
            <span className="text-green-600">en cada planta</span>
          </h2>
        </motion.div>

        {/* Photos + text */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photos side by side */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="flex items-stretch gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -4 }}
                className="relative flex-1 overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="relative aspect-3/4 w-full">
                  <Image
                    src="/images/equipo-1.png"
                    alt="El equipo trabajando con plantines en El Algarrobo"
                    fill
                    sizes="(max-width: 1024px) 45vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
                whileHover={{ y: -4 }}
                className="relative flex-1 overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="relative aspect-3/4 w-full">
                  <Image
                    src="/images/equipo-2.png"
                    alt="El dueño del vivero junto a las palmeras"
                    fill
                    sizes="(max-width: 1024px) 45vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Decorative badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-white shadow-lg sm:-top-5 sm:h-24 sm:w-24"
            >
              <div className="text-center leading-tight">
                <div className="text-xl font-bold sm:text-2xl">+30</div>
                <div className="text-[10px] font-medium sm:text-xs">años</div>
              </div>
            </motion.div>
          </div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-green-800/70">
              Somos un vivero familiar que nació con la pasión de compartir el
              amor por la naturaleza. Con más de 30 años en el rubro, nos
              dedicamos a ofrecer las mejores plantas, árboles y flores,
              acompañados del asesoramiento profesional que solo la experiencia
              puede brindar.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-green-800/70">
              Cada planta que sale de nuestro vivero lleva el cuidado y la
              dedicación de toda nuestra familia. Creemos que un espacio verde
              bien cuidado transforma la calidad de vida de las personas.
            </p>

            {/* Stats row inside the text column */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-2 inline-flex rounded-xl bg-green-100 p-2.5 text-green-700">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold text-green-900">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-xs text-green-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
