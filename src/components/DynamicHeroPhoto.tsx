"use client";

import React, { useState, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export default function DynamicHeroPhoto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  // Mouse positions normalized from -0.5 to 0.5
  const rotateX = useSpring(0, { damping: 25, stiffness: 150 });
  const rotateY = useSpring(0, { damping: 25, stiffness: 150 });
  
  // Glare position (0% to 100%)
  const glareX = useSpring(50, { damping: 25, stiffness: 150 });
  const glareY = useSpring(50, { damping: 25, stiffness: 150 });
  const glareOpacity = useSpring(0, { damping: 25, stiffness: 150 });

  // Floating shadow translation offsets
  const shadowX = useTransform(rotateY, [-10, 10], [15, -15]);
  const shadowY = useTransform(rotateX, [-10, 10], [15, -15]);

  // Foreground gold border translation offsets (parallax)
  const foregroundX = useTransform(rotateY, [-10, 10], [-5, 5]);
  const foregroundY = useTransform(rotateX, [-10, 10], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position of cursor relative to element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize coordinates (-0.5 to 0.5)
    const x = (mouseX / width) - 0.5;
    const y = (mouseY / height) - 0.5;

    // Set 3D rotations (max 10 degrees)
    // Vertical mouse movement controls rotation around X axis (pitch)
    // Horizontal mouse movement controls rotation around Y axis (yaw)
    rotateX.set(-y * 12);
    rotateY.set(x * 12);

    // Set glare coordinates in percent
    glareX.set((mouseX / width) * 100);
    glareY.set((mouseY / height) * 100);
    glareOpacity.set(0.4); // Make glare visible
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  };

  return (
    <div className="relative w-full flex justify-center py-6 sm:py-10 perspective-1000">
      {/* Dynamic Backing Glow (moves slightly offset) */}
      <motion.div
        className="absolute inset-x-0 mx-auto max-w-sm sm:max-w-xl md:max-w-2xl aspect-[1024/683] rounded-3xl pointer-events-none opacity-40 blur-2xl"
        style={{
          background: "radial-gradient(circle, rgba(183,110,121,0.2) 0%, rgba(201,169,110,0.1) 100%)",
          x: shadowX,
          y: shadowY,
          scale: hovering ? 1.05 : 0.98,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Main 3D Card Container */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-sm sm:max-w-xl md:max-w-2xl aspect-[1024/683] rounded-2xl sm:rounded-3xl overflow-hidden border border-rose-gold-light/20 shadow-[0_15px_35px_rgba(183,110,121,0.08)] cursor-pointer select-none preserve-3d"
        style={{
          rotateX,
          rotateY,
          scale: hovering ? 1.02 : 1,
        }}
        transition={{ transform: { duration: 0.1 } }}
      >
        {/* Cinematic Ken Burns Effect Image */}
        <motion.div 
          className="w-full h-full"
          animate={{
            scale: hovering ? 1.06 : 1.02,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="/hero.jpg"
            alt="Dinesh & Monisha"
            className="w-full h-full object-cover object-center pointer-events-none"
            loading="eager"
          />
        </motion.div>

        {/* Dynamic Light Refraction (Glare Overlay) */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay"
          style={{
            background: useTransform(
              [glareX, glareY, glareOpacity],
              ([x, y, op]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, ${op}) 0%, rgba(255, 245, 235, 0) 55%)`
            ),
          }}
        />

        {/* Premium Gold Inner Overlay Frame */}
        <div className="absolute inset-3 rounded-[1.2rem] sm:rounded-[2rem] border border-rose-gold-light/15 pointer-events-none z-20" />

        {/* Floating Delicate Corner Ornaments (Parallax effect) */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center"
          style={{
            x: foregroundX,
            y: foregroundY,
          }}
        >
          {/* Subtle elegant card border floating on top */}
          <div className="absolute inset-4 rounded-[1rem] sm:rounded-[1.75rem] border border-rose-gold/10 pointer-events-none shadow-[inset_0_0_20px_rgba(183,110,121,0.02)]" />
          
          {/* Fine gold lines at corners */}
          <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-rose-gold/30 rounded-tl" />
          <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-rose-gold/30 rounded-tr" />
          <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-rose-gold/30 rounded-bl" />
          <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-rose-gold/30 rounded-br" />
        </motion.div>
      </motion.div>
    </div>
  );
}
