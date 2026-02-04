import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StepperStep {
  number: number;
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface StepperProps {
  steps: StepperStep[];
  variant?: "vertical" | "horizontal";
  className?: string;
}

export function Stepper({ steps, variant = "horizontal", className }: StepperProps) {
  if (variant === "vertical") {
    return (
      <div className={cn("space-y-0", className)}>
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative flex gap-6 pb-12 last:pb-0"
          >
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-12 h-full w-px -translate-x-1/2 bg-border" />
            )}
            
            {/* Step number */}
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold shadow-md">
              {step.icon ? (
                <step.icon className="h-5 w-5" />
              ) : (
                step.number
              )}
            </div>
            
            {/* Content */}
            <div className="pt-2">
              <h4 className="mb-1 text-lg font-semibold text-foreground">
                {step.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6 md:grid-cols-5", className)}>
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative text-center"
        >
          {/* Connector line */}
          {index < steps.length - 1 && (
            <div className="absolute left-[60%] top-6 hidden h-px w-[80%] bg-border md:block" />
          )}
          
          {/* Step number */}
          <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold shadow-md">
            {step.icon ? (
              <step.icon className="h-5 w-5" />
            ) : (
              step.number
            )}
          </div>
          
          {/* Content */}
          <h4 className="mb-2 text-sm font-semibold text-foreground">
            {step.title}
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
