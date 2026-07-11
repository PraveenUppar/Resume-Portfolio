"use client";

import { Section } from "@/components/common/section";
import { motion } from "framer-motion";
import { Code2, Server, Cloud, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building end-to-end web applications with React, Next.js, Node.js, and TypeScript.",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "Designing distributed systems with microservices, message queues, and concurrency control.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing infrastructure on AWS and OCI with Docker and CI/CD pipelines.",
  },
  {
    icon: Lightbulb,
    title: "Open Source",
    description:
      "Active open-source contributor, ranked among the Top 2,000 in GSSoC 2024.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Who I am and what drives me."
    >
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>
            I&apos;m <strong className="text-foreground">Praveen Uppar</strong>, a Computer Science
            undergraduate at Vellore Institute of Technology, Bhopal, with a deep passion for building
            software that scales. My engineering journey spans full-stack web development, cloud
            infrastructure, and distributed systems.
          </p>
          <p>
            At Advan Drive Technology, I owned the end-to-end delivery of a live CA operations platform —
            from system design to deployment — architecting microservices on Oracle Cloud Infrastructure
            and building workflow automation that streamlined financial reporting.
          </p>
          <p>
            I enjoy solving hard engineering problems: designing concurrency control architectures,
            building async pipelines with Redis-backed job queues, and creating container-based deployment
            systems. When I&apos;m not coding, you&apos;ll find me competing on LeetCode or contributing to
            open-source projects.
          </p>
          <p>
            I aspire to join a team where I can work on challenging infrastructure and product engineering
            problems at scale, contribute to meaningful products, and continue growing as an engineer.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-5 rounded-xl border border-border bg-card hover:border-primary/30
                hover:shadow-md transition-all duration-300 group"
            >
              <item.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
