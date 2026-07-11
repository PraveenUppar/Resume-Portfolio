"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h2
            id={`${id}-heading`}
            className="text-3xl md:text-4xl font-bold tracking-tight gradient-text inline-block"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-muted-foreground text-lg max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="mt-4 w-16 h-1 rounded-full bg-primary/30" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
