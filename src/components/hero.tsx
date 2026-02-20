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
  const w = type > 1 ? 60 : 40;
  const stemX = type > 1 ? 30 : 20;
  const stemEndX = type > 1 ? 28 : 18;

  return (
    <div
      className="absolute bottom-0"
      style={{
        left: x,
        transformOrigin: "bottom",
        animation: `hero-grow 1.8s ease-out ${delay}s both`,
      }}
    >
      <svg
        width={w}
        height={height}
        viewBox={`0 0 ${w} ${height}`}
        className="overflow-visible"
      >
        <path
          d={`M${stemX} ${height} Q${stemX} ${height * 0.5} ${stemEndX} ${height * 0.15}`}
          stroke="url(#stemGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 1,
            animation: `hero-draw 1.5s ease-out ${delay + 0.3}s both`,
          }}
        />

        {type === 0 && (
          <>
            <g transform={`rotate(-30 10 ${height * 0.4})`}>
              <ellipse
                cx={type > 1 ? 18 : 10}
                cy={height * 0.4}
                rx="10"
                ry="5"
                fill="#22c55e"
                opacity={0.7}
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  animation: `hero-scale-in 0.6s ease-out ${delay + 1}s both`,
                }}
              />
            </g>
            <g transform={`rotate(30 30 ${height * 0.35})`}>
              <ellipse
                cx={type > 1 ? 42 : 30}
                cy={height * 0.35}
                rx="10"
                ry="5"
                fill="#16a34a"
                opacity={0.7}
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  animation: `hero-scale-in 0.6s ease-out ${delay + 1.2}s both`,
                }}
              />
            </g>
          </>
        )}

        {type === 1 && (
          <circle
            cx="20"
            cy={height * 0.1}
            r="8"
            fill="#f472b6"
            opacity={0.8}
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              animation: `hero-scale-in 0.8s ease-out ${delay + 1.2}s both`,
            }}
          />
        )}

        {type === 2 && (
          <>
            {[0, 72, 144, 216, 288].map((angle, i) => {
              const cx =
                Math.round(
                  (30 + Math.cos((angle * Math.PI) / 180) * 10) * 1000,
                ) / 1000;
              const cy =
                Math.round(
                  (height * 0.1 + Math.sin((angle * Math.PI) / 180) * 10) *
                    1000,
                ) / 1000;
              return (
                <g key={angle} transform={`rotate(${angle} ${cx} ${cy})`}>
                  <ellipse
                    cx={cx}
                    cy={cy}
                    rx="6"
                    ry="3"
                    fill={i % 2 === 0 ? "#fbbf24" : "#fb923c"}
                    opacity={0.8}
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center",
                      animation: `hero-scale-in 0.4s ease-out ${delay + 1.3 + i * 0.1}s both`,
                    }}
                  />
                </g>
              );
            })}
            <circle
              cx="30"
              cy={height * 0.1}
              r="4"
              fill="#fde047"
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                animation: `hero-scale-in 0.5s ease-out ${delay + 1.8}s both`,
              }}
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
    </div>
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

      {/* Organic radial glows — CSS animation, reduced blur on mobile */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-emerald-500/15 blur-[60px] sm:blur-[100px]"
          style={
            {
              animation: "hero-glow 8s ease-in-out infinite",
              "--glow-scale-from": 1,
              "--glow-scale-to": 1.15,
              "--glow-opacity-from": 0.15,
              "--glow-opacity-to": 0.25,
            } as React.CSSProperties
          }
        />
        <div
          className="absolute -right-32 top-1/3 h-[600px] w-[600px] rounded-full bg-green-400/10 blur-[60px] sm:blur-[120px]"
          style={
            {
              animation: "hero-glow 10s ease-in-out infinite",
              "--glow-scale-from": 1.1,
              "--glow-scale-to": 1,
              "--glow-opacity-from": 0.1,
              "--glow-opacity-to": 0.2,
            } as React.CSSProperties
          }
        />
        <div
          className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-lime-400/8 blur-[40px] sm:blur-[80px]"
          style={
            {
              animation: "hero-glow 7s ease-in-out 2s infinite",
              "--glow-scale-from": 1,
              "--glow-scale-to": 1.2,
              "--glow-opacity-from": 0.08,
              "--glow-opacity-to": 0.15,
            } as React.CSSProperties
          }
        />
      </div>

      {/* Floating pollen/firefly particles — CSS animation */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bottom-0 rounded-full bg-green-300/60"
            style={
              {
                left: p.x,
                width: p.size,
                height: p.size,
                "--particle-drift": `${p.drift}px`,
                animation: `hero-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Animated grass at bottom — CSS animation */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 sm:h-32">
        {grassBlades.map((blade) => (
          <div
            key={blade.id}
            className="absolute bottom-0 w-[3px] origin-bottom rounded-t-full bg-gradient-to-t from-green-700 to-green-500"
            style={{
              left: blade.x,
              height: blade.height,
              animation: `hero-grow 1s ease-out ${blade.delay}s both`,
            }}
          >
            <div
              className="h-full w-full origin-bottom rounded-t-full bg-gradient-to-t from-green-700 to-green-400"
              style={{
                animation: `hero-sway ${blade.swayDuration}s ease-in-out infinite`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Growing plants — CSS animation */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <GrowingPlant x="8%" delay={0.5} height={120} type={0} />
        <GrowingPlant x="18%" delay={1.0} height={90} type={1} />
        <GrowingPlant x="30%" delay={0.8} height={140} type={2} />
        <GrowingPlant x="70%" delay={0.6} height={110} type={0} />
        <GrowingPlant x="82%" delay={1.2} height={130} type={1} />
        <GrowingPlant x="92%" delay={0.9} height={100} type={2} />
      </div>

      {/* Vine branches — CSS animation */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="absolute -left-4 top-16 h-80 w-40"
          viewBox="0 0 160 320"
          style={
            {
              "--fade-opacity": 0.2,
              animation: "hero-fade-in 3s ease-out 1s both",
            } as React.CSSProperties
          }
        >
          <path
            d="M0 40 Q80 60 60 120 Q40 180 80 220 Q120 260 60 320"
            stroke="#4ade80"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            pathLength={1}
            style={{
              strokeDasharray: 1,
              strokeDashoffset: 1,
              animation: "hero-draw 2.5s ease-in-out 1s both",
            }}
          />
          {[60, 120, 220].map((cy, i) => (
            <g
              key={cy}
              transform={`rotate(${i % 2 === 0 ? -25 : 25} ${i % 2 === 0 ? 50 : 70} ${cy})`}
            >
              <ellipse
                cx={i % 2 === 0 ? 50 : 70}
                cy={cy}
                rx="16"
                ry="8"
                fill="#22c55e"
                opacity={0.5}
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  animation: `hero-scale-in 0.6s ease-out ${1.5 + i * 0.4}s both`,
                }}
              />
            </g>
          ))}
        </svg>

        <svg
          className="absolute -right-4 top-32 h-64 w-32"
          viewBox="0 0 128 256"
          style={
            {
              "--fade-opacity": 0.2,
              animation: "hero-fade-in 2s ease-out 1.5s both",
            } as React.CSSProperties
          }
        >
          <path
            d="M128 20 Q60 60 80 120 Q100 160 50 200 Q20 230 60 256"
            stroke="#86efac"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            pathLength={1}
            style={{
              strokeDasharray: 1,
              strokeDashoffset: 1,
              animation: "hero-draw 2s ease-in-out 1.5s both",
            }}
          />
        </svg>
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
            <span
              className="inline-block bg-gradient-to-r from-green-300 via-emerald-300 to-lime-300 bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 200%",
                animation: "hero-gradient 6s ease-in-out infinite",
              }}
            >
              comienza aquí
            </span>
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

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Scroll indicator — CSS bounce, FM only for entry fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
      >
        <div
          className="flex flex-col items-center gap-2"
          style={{ animation: "hero-bounce 2s ease-in-out infinite" }}
        >
          <span className="text-xs font-medium tracking-wider text-green-300/50 uppercase">
            Descubrí más
          </span>
          <ArrowDown className="h-5 w-5 text-green-300/50" />
        </div>
      </motion.div>
    </section>
  );
}
