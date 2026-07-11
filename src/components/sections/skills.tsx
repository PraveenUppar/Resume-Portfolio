"use client";

import { useState } from "react";
import { Section } from "@/components/common/section";
import { SkillBadge } from "@/components/common/skill-badge";
import { motion } from "framer-motion";
import { Code2, Layers, Wrench, Cloud } from "lucide-react";
import { skills } from "@/constants/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Layers,
  Wrench,
  Cloud,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? skills.filter((s) => s.category === activeCategory)
    : skills;

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I work with."
    >
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
            activeCategory === null
              ? "bg-primary text-primary-foreground"
              : "bg-accent text-accent-foreground hover:bg-accent/80"
          }`}
        >
          All
        </button>
        {skills.map((skill) => (
          <button
            key={skill.category}
            onClick={() =>
              setActiveCategory(
                activeCategory === skill.category ? null : skill.category
              )
            }
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === skill.category
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-accent-foreground hover:bg-accent/80"
            }`}
          >
            {skill.category}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((skill, i) => {
          const IconComponent = iconMap[skill.icon];
          return (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              layout
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30
                hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {IconComponent && (
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-primary" />
                  </div>
                )}
                <h3 className="font-semibold text-sm">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + idx * 0.05 }}
                  >
                    <SkillBadge name={item} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
