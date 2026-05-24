"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionWrapper({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        type: "spring",
        damping: 22,
        stiffness: 60,
        mass: 0.8
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
