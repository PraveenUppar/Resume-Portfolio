"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({
  target,
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  // Extract the numeric portion from the target string
  const numericValue = parseInt(target.replace(/[^0-9]/g, ""), 10);
  const prefix = target.match(/^[^0-9]*/)?.[0] || "";
  const suffix = target.match(/[^0-9]*$/)?.[0] || "";

  useEffect(() => {
    if (!isInView || isNaN(numericValue)) return;

    let startTime: number | null = null;
    let animationFrame: number;

    function animate(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numericValue, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold gradient-text">
        {prefix}
        {isInView ? count : 0}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}
