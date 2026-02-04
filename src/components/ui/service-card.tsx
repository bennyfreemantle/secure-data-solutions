import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  href?: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href,
  className,
}: ServiceCardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "card-elevated group h-full flex flex-col",
        href && "cursor-pointer",
        className
      )}
    >
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon className="h-6 w-6" />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>

      {/* Description */}
      <p className="mb-4 text-sm text-muted-foreground leading-relaxed flex-1">
        {description}
      </p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Link indicator */}
      {href && (
        <div className="flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
          Learn more
          <ArrowRight className="h-4 w-4" />
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return <Link to={href}>{content}</Link>;
  }

  return content;
}
