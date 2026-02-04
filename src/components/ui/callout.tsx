import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon, AlertTriangle } from "lucide-react";

interface CalloutProps {
  icon?: LucideIcon;
  title: string;
  children: ReactNode;
  variant?: "default" | "warning" | "success" | "info";
  className?: string;
}

const variantStyles = {
  default: "bg-secondary/50 border-border",
  warning: "bg-warning/10 border-warning/30 [&_svg]:text-warning",
  success: "bg-success/10 border-success/30 [&_svg]:text-success",
  info: "bg-accent/10 border-accent/30 [&_svg]:text-accent",
};

export function Callout({
  icon: Icon = AlertTriangle,
  title,
  children,
  variant = "default",
  className,
}: CalloutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "rounded-xl border p-6",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start gap-4">
        <Icon className="mt-0.5 h-5 w-5 shrink-0" />
        <div>
          <h4 className="mb-2 font-semibold text-foreground">{title}</h4>
          <div className="text-sm text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
