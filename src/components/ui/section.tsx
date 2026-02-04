import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "alt" | "dark";
  id?: string;
}

const variantStyles = {
  default: "bg-background",
  alt: "section-alt",
  dark: "section-dark",
};

export function Section({ children, className, variant = "default", id }: SectionProps) {
  return (
    <section id={id} className={cn("section-padding", variantStyles[variant], className)}>
      <div className="container-wide">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
