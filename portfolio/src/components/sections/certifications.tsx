"use client";

import { Section } from "@/components/common/section";
import { motion } from "framer-motion";
import { Cloud, Brain, Code2, Award } from "lucide-react";
import { certifications } from "@/constants/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud,
  Brain,
  Code2,
};

const issuerColors: Record<string, string> = {
  "Amazon Web Services": "from-amber-500 to-orange-500",
  "Coursera": "from-blue-500 to-cyan-500",
  "Microsoft": "from-blue-600 to-indigo-500",
  "Udemy": "from-violet-500 to-purple-500",
};

export function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Professional credentials and courses."
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((cert, i) => {
          const IconComponent = iconMap[cert.icon] || Award;
          const gradient = issuerColors[cert.issuer] || "from-primary to-violet-500";
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative p-6 rounded-xl border border-border bg-card hover:border-primary/30
                hover:shadow-md transition-all duration-300 group overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`} />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0
                  group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm leading-snug">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {cert.score}
                    </span>
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
