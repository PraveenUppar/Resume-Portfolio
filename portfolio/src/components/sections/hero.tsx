"use client";

import { motion } from "framer-motion";
import { Mail, Download, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/icons";
import { personalInfo } from "@/constants/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium"
        >
          {personalInfo.headline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-4 text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed"
        >
          B.Tech CSE at VIT Bhopal · Building scalable distributed systems & modern web applications
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground
              font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border
              font-medium text-sm hover:bg-accent transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border
              font-medium text-sm hover:bg-accent transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border
              font-medium text-sm hover:bg-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href={personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border
              font-medium text-sm hover:bg-accent transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Portfolio
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
