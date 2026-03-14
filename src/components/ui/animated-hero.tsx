"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedHeroProps {
  headline?: string;
  words?: string[];
  name?: string;
  title?: string;
  className?: string;
}

export function AnimatedHero({
  headline = "Building something",
  words = ["innovative", "driven", "analytical", "creative", "impactful"],
  name = "Laiba Shaikh",
  title = "Aspiring Software Developer | AI & ML Enthusiast",
  className = "",
}: AnimatedHeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={`flex flex-col items-center justify-center text-center py-10 px-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest mb-4">
          Hello, I&apos;m {name}
        </p>
      </motion.div>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter w-full mb-6">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-foreground whitespace-nowrap"
        >
          {headline}
        </motion.span>
        <div className="relative h-[1.2em] w-full md:w-auto min-w-[280px] md:min-w-[320px] flex justify-center md:justify-start overflow-visible">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 dark:from-yellow-400 dark:to-orange-500 font-extrabold"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium font-mono mt-4"
      >
        {title}
      </motion.p>
    </div>
  );
}
