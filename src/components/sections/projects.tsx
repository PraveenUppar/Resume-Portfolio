"use client";

import { useState } from "react";
import { Section } from "@/components/common/section";
import { SkillBadge } from "@/components/common/skill-badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Layers,
} from "lucide-react";
import { GithubIcon } from "@/components/common/icons";
import { projects } from "@/constants/data";

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="What I've built — architecture, engineering decisions, and impact."
    >
      <div className="space-y-6">
        {projects.map((project, i) => {
          const isExpanded = expandedId === project.id;
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card overflow-hidden
                hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Header with gradient */}
              <div className="relative p-6 pb-0">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-violet-500" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Layers className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{project.name}</h3>
                        <p className="text-sm text-primary font-medium">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.date}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <SkillBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>

              {/* Expandable Details */}
              <div className="px-6 pt-4 pb-6">
                <button
                  onClick={() =>
                    setExpandedId(isExpanded ? null : project.id)
                  }
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline cursor-pointer"
                  aria-expanded={isExpanded}
                  aria-controls={`project-${project.id}-details`}
                >
                  {isExpanded ? "Hide details" : "View architecture & details"}
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      id={`project-${project.id}-details`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {/* Key Features */}
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold mb-3 text-foreground">
                          Key Features & Engineering
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Challenges */}
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold mb-3 text-foreground">
                          Engineering Challenges
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.challenges.map((challenge) => (
                            <span
                              key={challenge}
                              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium
                                bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                            >
                              {challenge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Links */}
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border
                        text-sm font-medium hover:bg-accent transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground
                        text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
