import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  icon?: LucideIcon;
  text: string;
  className?: string;
}

export function TrustBadge({ icon: Icon, text, className }: TrustBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn("trust-badge", className)}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {text}
    </motion.span>
  );
}

interface TrustBadgesProps {
  badges: Array<{ icon?: LucideIcon; text: string }>;
  className?: string;
}

export function TrustBadges({ badges, className }: TrustBadgesProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {badges.map((badge, index) => (
        <motion.span
          key={badge.text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="trust-badge"
        >
          {badge.icon && <badge.icon className="h-4 w-4" />}
          {badge.text}
        </motion.span>
      ))}
    </div>
  );
}
