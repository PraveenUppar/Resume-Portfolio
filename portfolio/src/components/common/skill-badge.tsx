import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
}

export function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium",
        "bg-accent text-accent-foreground border border-border",
        "hover:border-primary/40 hover:bg-primary/5 transition-all duration-200",
        "select-none",
        className
      )}
    >
      {name}
    </span>
  );
}
