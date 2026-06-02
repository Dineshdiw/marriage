"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "invitation", label: "Invitation" },
  { id: "events", label: "Events" },
  { id: "venue", label: "Venue" },
  { id: "rsvp", label: "Share" },
];

export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActive(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-[90] flex justify-center px-3 py-2 sm:px-4 sm:py-2.5"
          style={{
            background: "rgba(255,250,247,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(183,110,121,0.08)",
          }}
        >
          <div className="no-scrollbar flex w-full max-w-sm items-center justify-center gap-1 overflow-x-auto sm:max-w-xl sm:gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="relative shrink-0 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[0.52rem] sm:text-xs tracking-wide font-medium transition-colors duration-300 select-none"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: active === s.id ? "var(--color-rose-gold-dark)" : "var(--color-text-medium)",
                }}
              >
                {active === s.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full z-[-1]"
                    style={{
                      background: "linear-gradient(135deg, rgba(183,110,121,0.12) 0%, rgba(201,169,110,0.08) 100%)",
                      border: "1px solid rgba(183,110,121,0.08)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {s.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
