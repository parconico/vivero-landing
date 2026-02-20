"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  const whatsappMessage = encodeURIComponent(
    "Hola! Me contacto desde la web del vivero. Me gustaría hacer una consulta.",
  );
  const whatsappUrl = `https://wa.me/+543804342036?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-shadow hover:shadow-xl hover:shadow-green-500/40"
    >
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  );
}
