"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

const MUHURTHA_START = "2026-06-24T09:15:00+05:30";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const muhurthaStart = new Date(MUHURTHA_START).getTime();

    function calculate() {
      const now = new Date().getTime();
      const diff = muhurthaStart - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      });
    }

    const firstTick = window.setTimeout(calculate, 0);
    const timer = setInterval(calculate, 1000);
    return () => {
      window.clearTimeout(firstTick);
      clearInterval(timer);
    };
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
  ];

  return (
    <div className="mx-auto mt-3 w-full max-w-[17.5rem] sm:mt-8 sm:max-w-none">
      <p
        className="mb-2 text-center text-[0.52rem] uppercase tracking-[0.14em] text-text-light sm:text-[0.62rem]"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        Countdown to Muhurtha
      </p>
      <div className="grid grid-cols-3 items-start gap-2 sm:flex sm:justify-center sm:gap-4">
        {units.map((unit, i) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.5, duration: 0.4 }}
            whileHover={{ scale: 1.08, y: -3 }}
            className="min-w-0 text-center"
          >
            <div
              className="aspect-square w-full rounded-lg sm:w-[4.2rem] sm:rounded-2xl md:w-20 flex items-center justify-center card-glass cursor-default transition-shadow hover:shadow-lg"
            >
              <motion.span
                key={unit.value}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="text-base sm:text-2xl md:text-3xl font-bold text-rose-gold-dark"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
            </div>
            <p
              className="mt-1 sm:mt-1.5 text-text-medium tracking-wider uppercase"
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.45rem" }}
            >
              {unit.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
