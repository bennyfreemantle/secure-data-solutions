import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  tier: string;
  title: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export function PricingCard({
  tier,
  title,
  price,
  priceNote,
  description,
  features,
  popular = false,
  ctaText = "Get Started",
  ctaHref = "/start-recovery",
  className,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "card-elevated relative flex flex-col",
        popular && "border-2 border-accent ring-4 ring-accent/10",
        className
      )}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
          Most Common
        </div>
      )}

      {/* Tier label */}
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
        {tier}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>

      {/* Price */}
      <div className="mb-1">
        <span className="text-3xl font-bold text-foreground">{price}</span>
      </div>
      {priceNote && (
        <p className="mb-4 text-xs text-muted-foreground">{priceNote}</p>
      )}

      {/* Description */}
      <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="mb-6 flex-1 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link to={ctaHref} className="w-full">
        <Button
          variant={popular ? "accent" : "outline"}
          size="lg"
          className="w-full"
        >
          {ctaText}
        </Button>
      </Link>
    </motion.div>
  );
}
