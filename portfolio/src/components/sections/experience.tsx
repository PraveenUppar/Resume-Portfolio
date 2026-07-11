"use client";

import { useState } from "react";
import { Section } from "@/components/common/section";
import { SkillBadge } from "@/components/common/skill-badge";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { experience } from "@/constants/data";

export function Experience() {
  const [expanded, setExpanded] = useState<string | null>(experience[0]?.id ?? null);

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Where I've worked and what I've built."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {experience.map((exp, i) => {
            const isExpanded = expanded === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.company}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase className="w-3.5 h-3.5 text-primary" />
                        <span className="text-sm font-medium text-primary">{exp.role}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.startDate} – {exp.endDate}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {exp.location} · {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Expand / Collapse */}
                  <button
                    onClick={() => setExpanded(isExpanded ? null : exp.id)}
                    className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline cursor-pointer"
                    aria-expanded={isExpanded}
                    aria-controls={`exp-${exp.id}-details`}
                  >
                    {isExpanded ? "Show less" : "Show details"}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {isExpanded && (
                    <motion.div
                      id={`exp-${exp.id}-details`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Responsibilities */}
                      <ul className="mt-4 space-y-2">
                        {exp.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <SkillBadge key={tech} name={tech} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
