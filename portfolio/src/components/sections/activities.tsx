"use client";

import { Section } from "@/components/common/section";
import { motion } from "framer-motion";
import { Users, Calendar } from "lucide-react";
import { activities } from "@/constants/data";

export function Activities() {
  return (
    <Section
      id="activities"
      title="Leadership & Activities"
      subtitle="Community involvement and team leadership."
    >
      <div className="space-y-4">
        {activities.map((activity, i) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-6 rounded-xl border border-border bg-card hover:border-primary/30
              hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">{activity.role}</h3>
                  <p className="text-sm text-primary font-medium mt-0.5">
                    {activity.organization}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground shrink-0">
                <Calendar className="w-3.5 h-3.5" />
                {activity.duration}
              </span>
            </div>

            <ul className="mt-4 space-y-2">
              {activity.description.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
