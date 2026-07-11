"use client";

import { Section } from "@/components/common/section";
import { AnimatedCounter } from "@/components/common/animated-counter";
import { motion } from "framer-motion";
import { Trophy, Award, GitBranch } from "lucide-react";
import { achievements } from "@/constants/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  Award,
  GitBranch,
};

export function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="Milestones and recognitions."
    >
      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-6 mb-12 p-6 rounded-xl border border-border bg-card">
        {achievements.map((a) => (
          <AnimatedCounter
            key={a.id}
            target={a.stat || "0"}
            label={a.statLabel || ""}
          />
        ))}
      </div>

      {/* Achievement Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {achievements.map((achievement, i) => {
          const IconComponent = iconMap[achievement.icon];
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30
                hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4
                group-hover:bg-primary/20 transition-colors">
                {IconComponent && (
                  <IconComponent className="w-5 h-5 text-primary" />
                )}
              </div>
              <h3 className="font-semibold text-base mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
