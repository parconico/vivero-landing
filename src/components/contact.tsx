"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  // {
  //   icon: MapPin,
  //   title: "Dirección",
  //   detail: "Consultá nuestra ubicación",
  //   sub: "La Rioja, Argentina",
  // },
  {
    icon: Phone,
    title: "Teléfono",
    detail: "Llamanos",
    sub: "Lunes a Sábados",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "Escribinos",
    sub: "Respondemos en 24hs",
  },
  // {
  //   icon: Clock,
  //   title: "Horarios",
  //   detail: "Lun a Sab: 9:00 - 13:00 y 17:00 - 21:00",
  //   sub: "Sáb: 8:00 - 13:00",
  // },
];

export function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hola! Me contacto desde la web del vivero. Me gustaría hacer una consulta.",
  );
  const whatsappUrl = `https://wa.me/+543804342036?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="bg-green-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Hablemos
          </span>
          <h2 className="mt-3 text-3xl font-bold text-green-950 sm:text-4xl lg:text-5xl">
            Contactanos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-800/60">
            Estamos para ayudarte. Consultanos por WhatsApp, por teléfono o
            acercate a visitarnos.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-lg gap-6 sm:grid-cols-2 sm:max-w-2xl">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-green-100 bg-white text-center transition-all hover:border-green-200 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 inline-flex rounded-xl bg-green-100 p-3 text-green-700">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-green-950">{info.title}</h3>
                  <p className="mt-1 text-sm text-green-800/80">
                    {info.detail}
                  </p>
                  <p className="text-xs text-green-600">{info.sub}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social & WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/viveroelalgarrobo_?igsh=MWhiamVxYmpsa2o3NA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2.5 text-sm font-medium text-green-800 transition-colors hover:bg-green-200"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1HmJUomHzb/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2.5 text-sm font-medium text-green-800 transition-colors hover:bg-green-200"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-green-600 px-8 text-base font-semibold text-white hover:bg-green-700 transition-colors"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Escribinos por WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
