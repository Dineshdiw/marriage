"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // End the preloader after 2.8 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    
    return () => clearTimeout(timer);
  }, []);

  // Deterministic petals to avoid SSR/client hydration mismatch (no Math.random)
  const loaderPetals = [
    { id: 0, left: 17.3, delay: 0,   size: 15.0 },
    { id: 1, left: 31.2, delay: 0.4, size: 19.8 },
    { id: 2, left: 45.8, delay: 0.8, size: 13.4 },
    { id: 3, left: 62.9, delay: 1.2, size: 18.4 },
    { id: 4, left: 79.1, delay: 1.6, size: 12.1 },
    { id: 5, left: 92.9, delay: 2.0, size: 12.8 },
  ];

  const sparkles = [
    { id: 0, top: 12, left: 20, delay: 0, size: 3 },
    { id: 1, top: 25, left: 75, delay: 0.6, size: 2.5 },
    { id: 2, top: 40, left: 10, delay: 1.2, size: 2 },
    { id: 3, top: 55, left: 85, delay: 0.3, size: 3.5 },
    { id: 4, top: 70, left: 30, delay: 0.9, size: 2 },
    { id: 5, top: 15, left: 55, delay: 1.5, size: 2.5 },
    { id: 6, top: 80, left: 65, delay: 0.2, size: 3 },
    { id: 7, top: 35, left: 45, delay: 1.8, size: 2 },
    { id: 8, top: 60, left: 90, delay: 0.7, size: 2.5 },
    { id: 9, top: 85, left: 15, delay: 1.1, size: 3 },
  ];

  const floatingRings = [
    { id: 0, size: 120, top: 15, left: 10, delay: 0, duration: 8 },
    { id: 1, size: 80, top: 60, left: 75, delay: 1.5, duration: 10 },
    { id: 2, size: 160, top: 70, left: 25, delay: 0.8, duration: 12 },
    { id: 3, size: 100, top: 20, left: 80, delay: 2, duration: 9 },
  ];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100svh",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-[#fffaf7]"
        >
          {/* Subtle floral background pattern or background tint */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#b76e79_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Double Gold Line-Art Border around preloader */}
          <div className="absolute inset-4 sm:inset-6 border border-rose-gold/15 rounded-3xl pointer-events-none" />
          <div className="absolute inset-6 sm:inset-8 border border-rose-gold/5 rounded-3xl pointer-events-none" />

          {/* Pulsing radial glow behind center */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(183,110,121,0.15) 0%, transparent 70%)",
            }}
          />

          {/* Twinkling sparkle particles */}
          {sparkles.map((s) => (
            <motion.div
              key={`sparkle-${s.id}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: s.delay,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
              className="absolute rounded-full bg-rose-gold-light/40 pointer-events-none"
              style={{
                top: `${s.top}%`,
                left: `${s.left}%`,
                width: s.size,
                height: s.size,
              }}
            />
          ))}

          {/* Floating concentric rings */}
          {floatingRings.map((ring) => (
            <motion.div
              key={`ring-${ring.id}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 0.12, 0],
                scale: [0.5, 1.2, 0.5],
                y: [0, -30, 0],
              }}
              transition={{
                duration: ring.duration,
                delay: ring.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute rounded-full border border-rose-gold/10 pointer-events-none"
              style={{
                top: `${ring.top}%`,
                left: `${ring.left}%`,
                width: ring.size,
                height: ring.size,
              }}
            />
          ))}

          {/* Diagonal shimmer sweep */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: ["-100%", "200%"],
              opacity: [0, 0.08, 0],
            }}
            transition={{
              duration: 3,
              delay: 0.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(115deg, transparent 30%, rgba(183,110,121,0.12) 50%, transparent 70%)",
            }}
          />

          {/* Loader Floating Petals */}
          {loaderPetals.map((petal) => (
            <motion.svg
              key={petal.id}
              initial={{ y: "-10vh", x: 0, opacity: 0, rotate: 0 }}
              animate={{
                y: "110vh",
                x: [0, 40, -40, 20],
                opacity: [0, 0.6, 0.6, 0],
                rotate: 360,
              }}
              transition={{
                duration: 6,
                delay: petal.delay,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute pointer-events-none text-rose-gold-light/20"
              style={{
                left: `${petal.left}%`,
                width: petal.size,
                height: petal.size,
              }}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M12 2C8 2 4 6 4 12s4 10 8 10c-2-4-2-8 0-12s4-6 0-8z" />
            </motion.svg>
          ))}

          {/* Cinematic preloader content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Elegant outer glowing circle */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="w-40 h-40 sm:w-48 sm:h-48 border border-rose-gold-light/20 rounded-full flex items-center justify-center relative mb-4 sm:mb-6 overflow-visible"
            >
              {/* Spinning subtle light gold ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-4px] border-t border-b border-rose-gold/20 rounded-full"
              />



              {/* Core script text: Disha */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                className="text-rose-gold-dark shimmer-text leading-none select-none cursor-default font-semibold"
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: "clamp(2.5rem, 10vw, 4.5rem)",
                  paddingLeft: "0.15em",
                }}
              >
                Disha
              </motion.h1>
            </motion.div>

            {/* Expanding Gold Divider Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "120px", opacity: 0.6 }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              className="h-[1px] bg-rose-gold-light my-2"
            />

            {/* Couple names underneath */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="text-text-medium text-[0.6rem] sm:text-xs tracking-[0.25em] uppercase font-sans font-light mt-1"
            >
              Dinesh &amp; Monisha
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
