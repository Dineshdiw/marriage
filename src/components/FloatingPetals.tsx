"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  type: number;
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const count = window.innerWidth < 640 ? 8 : 14;
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 14,
        duration: 10 + Math.random() * 14,
        delay: Math.random() * 20,
        type: Math.floor(Math.random() * 3),
      }));
    };

    const timer = window.setTimeout(() => setPetals(generatePetals()), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const petalPaths = [
    "M12 2C8 2 4 6 4 12s4 10 8 10c-2-4-2-8 0-12s4-6 0-8z",
    "M10 0C6 2 2 8 4 14s6 8 10 6c-4-2-6-6-6-10S8 2 10 0z",
    "M8 0C4 4 2 10 6 16s8 4 10 0c-2-4-6-6-8-8S6 2 8 0z",
  ];

  const fills = [
    "rgba(183,110,121,0.25)",
    "rgba(212,160,167,0.2)",
    "rgba(201,169,110,0.18)",
  ];

  return (
    <>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            pointerEvents: "auto", // Ensure the div handles cursor hover events
          }}
          whileHover={{ 
            scale: 1.4,
            x: Math.random() > 0.5 ? 30 : -30,
            y: Math.random() > 0.5 ? 30 : -30,
            rotate: Math.random() * 180 - 90
          }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="w-full h-full"
          >
            <path d={petalPaths[petal.type]} fill={fills[petal.type]} />
          </svg>
        </motion.div>
      ))}
    </>
  );
}
