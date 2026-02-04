import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  location?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  location,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={cn("card-elevated", className)}
    >
      {/* Quote icon */}
      <Quote className="mb-4 h-8 w-8 text-accent/30" />

      {/* Quote text */}
      <blockquote className="mb-6 text-foreground leading-relaxed">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
          <span className="text-sm font-semibold text-muted-foreground">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{author}</p>
          <p className="text-xs text-muted-foreground">
            {role && <span>{role}</span>}
            {role && location && <span> · </span>}
            {location && <span>{location}</span>}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
