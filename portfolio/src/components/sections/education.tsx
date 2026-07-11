"use client";

import { Section } from "@/components/common/section";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education } from "@/constants/data";

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="My academic journey."
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

              <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">{edu.institution}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {edu.degree}
                        {edu.field && ` in ${edu.field}`}
                      </p>
                      {edu.board && (
                        <p className="text-xs text-muted-foreground mt-0.5">{edu.board}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right sm:shrink-0">
                    <span className="text-sm font-medium text-primary">{edu.duration}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">
                    {edu.scoreType}: {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
