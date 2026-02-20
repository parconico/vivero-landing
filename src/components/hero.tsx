"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Leaf } from "lucide-react";
import Link from "next/link";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: `${5 + ((i * 47) % 90)}%`,
  size: 2 + (i % 4),
  duration: 6 + (i % 7) * 2,
  delay: (i % 5) * 1.2,
  drift: (i % 2 === 0 ? 1 : -1) * (10 + (i % 3) * 15),
}));

const grassBlades = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: `${(i * 3.4) % 100}%`,
  height: 40 + (i % 5) * 25,
  delay: i * 0.06,
  swayDuration: 3 + (i % 3),
}));

function GrowingPlant({
  x,
  delay,
  height,
  type,
}: {
  x: string;
  delay: number;
  height: number;
  type: number;
}) {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{ left: x }}
      initial={{ scaleY: 0, originY: 1 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 1.8, delay, ease: "easeOut" }}
    >
      <svg
        width={type > 1 ? "60" : "40"}
        height={height}
        viewBox={`0 0 ${type > 1 ? 60 : 40} ${height}`}
        className="overflow-visible"
      >
        {/* Stem */}
        <motion.path
          d={`M${type > 1 ? 30 : 20} ${height} Q${type > 1 ? 30 : 20} ${height * 0.5} ${type > 1 ? 28 : 18} ${height * 0.15}`}
          stroke="url(#stemGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: delay + 0.3 }}
        />

        {type === 0 && (
          <>
            {/* Leaf pair */}
            <motion.ellipse
              cx={type > 1 ? 18 : 10}
              cy={height * 0.4}
              rx="10"
              ry="5"
              fill="#22c55e"
              opacity={0.7}
              transform={`rotate(-30 10 ${height * 0.4})`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: delay + 1 }}
            />
            <motion.ellipse
              cx={type > 1 ? 42 : 30}
              cy={height * 0.35}
              rx="10"
              ry="5"
              fill="#16a34a"
              opacity={0.7}
              transform={`rotate(30 30 ${height * 0.35})`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: delay + 1.2 }}
            />
          </>
        )}

        {type === 1 && (
          <motion.circle
            cx="20"
            cy={height * 0.1}
            r="8"
            fill="#f472b6"
            opacity={0.8}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              delay: delay + 1.2,
              type: "spring",
              stiffness: 200,
            }}
          />
        )}

        {type === 2 && (
          <>
            {[0, 72, 144, 216, 288].map((angle, i) => {
              const cx = Math.round((30 + Math.cos((angle * Math.PI) / 180) * 10) * 1000) / 1000;
              const cy = Math.round((height * 0.1 + Math.sin((angle * Math.PI) / 180) * 10) * 1000) / 1000;
              return (
                <motion.ellipse
                  key={angle}
                  cx={cx}
                  cy={cy}
                  rx="6"
                  ry="3"
                  fill={i % 2 === 0 ? "#fbbf24" : "#fb923c"}
                  opacity={0.8}
                  transform={`rotate(${angle} ${cx} ${cy})`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: delay + 1.3 + i * 0.1 }}
                />
              );
            })}
            <motion.circle
              cx="30"
              cy={height * 0.1}
              r="4"
              fill="#fde047"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: delay + 1.8 }}
            />
          </>
        )}

        <defs>
          <linearGradient id="stemGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Layered background with parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-green-950 via-green-900 to-emerald-900"
        style={{ y: bgY }}
      />

      {/* Organic radial glows */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-emerald-500/15 blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 top-1/3 h-[600px] w-[600px] rounded-full bg-green-400/10 blur-[120px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-lime-400/8 blur-[80px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Floating pollen/firefly particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-green-300/60"
            style={{ left: p.x, width: p.size, height: p.size }}
            initial={{ bottom: "-5%", opacity: 0 }}
            animate={{
              bottom: "105%",
              opacity: [0, 0.8, 0.6, 0],
              x: [0, p.drift, -p.drift / 2, p.drift * 0.7],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated grass at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 sm:h-32">
        {grassBlades.map((blade) => (
          <motion.div
            key={blade.id}
            className="absolute bottom-0 w-[3px] origin-bottom rounded-t-full bg-gradient-to-t from-green-700 to-green-500"
            style={{ left: blade.x, height: blade.height }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: blade.delay, ease: "easeOut" }}
          >
            <motion.div
              className="h-full w-full origin-bottom rounded-t-full bg-gradient-to-t from-green-700 to-green-400"
              animate={{ rotateZ: [-3, 3, -3] }}
              transition={{
                duration: blade.swayDuration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Growing plants from bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <GrowingPlant x="8%" delay={0.5} height={120} type={0} />
        <GrowingPlant x="18%" delay={1.0} height={90} type={1} />
        <GrowingPlant x="30%" delay={0.8} height={140} type={2} />
        <GrowingPlant x="70%" delay={0.6} height={110} type={0} />
        <GrowingPlant x="82%" delay={1.2} height={130} type={1} />
        <GrowingPlant x="92%" delay={0.9} height={100} type={2} />
      </div>

      {/* Vine branches from the sides */}
      <div className="pointer-events-none absolute inset-0">
        <motion.svg
          className="absolute -left-4 top-16 h-80 w-40 opacity-20"
          viewBox="0 0 160 320"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 3, delay: 1 }}
        >
          <motion.path
            d="M0 40 Q80 60 60 120 Q40 180 80 220 Q120 260 60 320"
            stroke="#4ade80"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
          />
          {[60, 120, 220].map((cy, i) => (
            <motion.ellipse
              key={cy}
              cx={i % 2 === 0 ? 50 : 70}
              cy={cy}
              rx="16"
              ry="8"
              fill="#22c55e"
              opacity={0.5}
              transform={`rotate(${i % 2 === 0 ? -25 : 25} ${i % 2 === 0 ? 50 : 70} ${cy})`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 + i * 0.4 }}
            />
          ))}
        </motion.svg>

        <motion.svg
          className="absolute -right-4 top-32 h-64 w-32 opacity-20"
          viewBox="0 0 128 256"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <motion.path
            d="M128 20 Q60 60 80 120 Q100 160 50 200 Q20 230 60 256"
            stroke="#86efac"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>

      {/* Main content with parallax */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-200 backdrop-blur-sm"
          >
            <Leaf className="h-4 w-4" />
            <span>Pasión por lo natural</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Tu espacio verde
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-green-300 via-emerald-300 to-lime-300 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              comienza aquí
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-green-100/80 sm:text-xl"
          >
            Somos un vivero familiar con más de 30 años de experiencia. Encontrá
            la planta perfecta para tu hogar, jardín o proyecto de paisajismo
            con el asesoramiento de nuestros ingenieros.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="bg-green-500 px-8 text-base font-semibold text-white shadow-lg shadow-green-500/25 hover:bg-green-400 hover:shadow-green-400/30 transition-all"
            >
              <Link href="#servicios">Explorar Productos</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-green-400/30 bg-white/5 px-8 text-base font-semibold text-green-100 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-all"
            >
              <Link href="#contacto">Contactanos</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade for smooth transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium tracking-wider text-green-300/50 uppercase">
            Descubrí más
          </span>
          <ArrowDown className="h-5 w-5 text-green-300/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
