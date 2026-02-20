"use client";

import { motion } from "framer-motion";
import {
  TreePine,
  Flower2,
  Shovel,
  Droplets,
  Palette,
  Truck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: TreePine,
    title: "Árboles y Arbustos",
    description:
      "Gran variedad de árboles frutales, ornamentales y arbustos para tu jardín. Especies nativas y exóticas adaptadas al clima local.",
  },
  {
    icon: Flower2,
    title: "Plantas y Flores",
    description:
      "Plantas de interior, exterior, flores de estación y perennes. Encontrá la planta ideal para cada rincón de tu hogar.",
  },
  {
    icon: Shovel,
    title: "Sustratos y Tierra",
    description:
      "Tierra preparada, compost orgánico, sustratos especiales y fertilizantes para que tus plantas crezcan sanas y fuertes.",
  },
  {
    icon: Droplets,
    title: "Riego y Accesorios",
    description:
      "Sistemas de riego, macetas, tutores, herramientas de jardín y todo lo que necesitás para el cuidado de tu jardín.",
  },
  {
    icon: Palette,
    title: "Paisajismo",
    description:
      "Diseño y ejecución de proyectos de paisajismo. Transformamos espacios en jardines soñados con asesoramiento profesional.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description:
      "Servicio de envío a domicilio para que recibas tus plantas en perfectas condiciones, con el cuidado que se merecen.",
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Services() {
  return (
    <section id="servicios" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Qué ofrecemos
          </span>
          <h2 className="mt-3 text-3xl font-bold text-green-950 sm:text-4xl lg:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-800/60">
            Todo lo que necesitás para crear y mantener el espacio verde que
            siempre soñaste, en un solo lugar.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Card className="group h-full border-green-100 bg-gradient-to-br from-white to-green-50/50 transition-all duration-300 hover:border-green-200 hover:shadow-lg hover:shadow-green-100/50">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 inline-flex rounded-xl bg-green-100 p-3 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-green-950">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-green-800/60">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
