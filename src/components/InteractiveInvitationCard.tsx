"use client";

import React, { useState, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import FloralCorner from "./FloralCorner";

export default function InteractiveInvitationCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  // Smooth springs for 3D rotation (gentler than hero photo - max 6 deg)
  const rotateX = useSpring(0, { damping: 30, stiffness: 120 });
  const rotateY = useSpring(0, { damping: 30, stiffness: 120 });
  
  // Glare positions
  const glareX = useSpring(50, { damping: 30, stiffness: 120 });
  const glareY = useSpring(50, { damping: 30, stiffness: 120 });
  const glareOpacity = useSpring(0, { damping: 30, stiffness: 120 });

  // Parallax offsets for background elements
  const shadowX = useTransform(rotateY, [-6, 6], [10, -10]);
  const shadowY = useTransform(rotateX, [-6, 6], [10, -10]);

  // Parallax offsets for floral corners (moving in opposite/flattered direction for depth)
  const floralX = useTransform(rotateY, [-6, 6], [-3, 3]);
  const floralY = useTransform(rotateX, [-6, 6], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const x = (mouseX / width) - 0.5;
    const y = (mouseY / height) - 0.5;

    // Gentle 3D Tilt
    rotateX.set(-y * 6);
    rotateY.set(x * 6);

    // Glare position
    glareX.set((mouseX / width) * 100);
    glareY.set((mouseY / height) * 100);
    glareOpacity.set(0.25); // Subtle white-gold shimmer
  };

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => {
    setHovering(false);
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  };

  return (
    <div className="relative w-full py-4 perspective-1000">
      {/* Soft shadow backing that shifts slightly to reinforce depth */}
      <motion.div
        className="absolute inset-4 rounded-[2rem] md:rounded-[3rem] pointer-events-none opacity-50 blur-xl"
        style={{
          background: "rgba(183, 110, 121, 0.05)",
          x: shadowX,
          y: shadowY,
          scale: hovering ? 1.02 : 0.99,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Main Interactive Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="invitation-card rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden cursor-default select-none preserve-3d transition-colors duration-500"
        style={{
          rotateX,
          rotateY,
          scale: hovering ? 1.015 : 1,
        }}
        transition={{ transform: { duration: 0.1 } }}
      >
        {/* Double Gold Line-Art Border (Classic Indian Luxury style) */}
        <div className="absolute inset-2 sm:inset-3 rounded-[1.2rem] md:rounded-[2.2rem] border border-rose-gold/15 pointer-events-none z-0" />
        <div className="absolute inset-3 sm:inset-4 rounded-[1rem] md:rounded-[2rem] border border-rose-gold/5 pointer-events-none z-0" />

        {/* Elegant Gold Corner Accents (moving with parallax) */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{ x: floralX, y: floralY }}
        >
          <FloralCorner position="top-left" className="!opacity-40 sm:!opacity-60" />
          <FloralCorner position="top-right" className="!opacity-40 sm:!opacity-60" />
          <FloralCorner position="bottom-left" className="!opacity-15 sm:!opacity-25" />
          <FloralCorner position="bottom-right" className="!opacity-15 sm:!opacity-25" />
        </motion.div>

        {/* Dynamic Metallic Glare Sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay"
          style={{
            background: useTransform(
              [glareX, glareY, glareOpacity],
              ([x, y, op]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255, 250, 240, ${op}) 0%, rgba(255, 255, 255, 0) 60%)`
            ),
          }}
        />

        {/* Content Wrapper */}
        <div className="relative z-30">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
