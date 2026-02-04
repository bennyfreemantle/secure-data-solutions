import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Stepper } from "@/components/ui/stepper";
import { Callout } from "@/components/ui/callout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { afterDelivery, packingTips, steps } from "@/data/how-it-works";

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-16 md:py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4">How It Works</h1>
            <p className="text-lg text-muted-foreground">
              From first contact to data delivery—a clear, secure process
              designed to give you confidence at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Overview */}
      <Section variant="alt">
        <Stepper steps={steps} variant="horizontal" />
      </Section>

      {/* Detailed Steps */}
      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold shadow-md">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 w-px bg-border mt-4" />
                )}
              </div>
              <div className="pb-12">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Packing Guide */}
      <Section variant="alt">
        <SectionHeader
          eyebrow="Packing Guide"
          title="How to Pack Your Device"
          description="Proper packing prevents transit damage. Follow these guidelines for safe shipping."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packingTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-elevated"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm mb-4">
                {index + 1}
              </div>
              <h4 className="font-semibold mb-2">{tip.title}</h4>
              <p className="text-sm text-muted-foreground">{tip.description}</p>
            </motion.div>
          ))}
        </div>

        <Callout icon={AlertTriangle} title="Important" variant="warning" className="mt-8">
          <p>
            <strong>Never</strong> include power cables or accessories unless specifically requested.
            Laptops should be shipped complete; for external drives, just the drive unit is needed.
            If your drive is clicking or making unusual noises, do not power it on again before shipping.
          </p>
        </Callout>
      </Section>

      {/* After Delivery */}
      <Section>
        <SectionHeader
          eyebrow="After Recovery"
          title="What Happens Next"
          description="Your data is secure with us, and your device will be returned safely."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {afterDelivery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-elevated text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <item.icon className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section variant="alt">
        <SectionHeader
          eyebrow="Typical Timeline"
          title="How Long Does It Take?"
        />
        <div className="mx-auto max-w-2xl">
          <div className="card-elevated">
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="font-medium">Diagnosis</span>
                <span className="text-muted-foreground">24-48 hours</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="font-medium">Tier 1 (Logical) Recovery</span>
                <span className="text-muted-foreground">1-3 business days</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="font-medium">Tier 2 (Degraded) Recovery</span>
                <span className="text-muted-foreground">2-5 business days</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="font-medium">Tier 3 (Advanced) Recovery</span>
                <span className="text-muted-foreground">5-10 business days</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-medium">Emergency Queue</span>
                <span className="text-accent font-medium">Same-day assessment</span>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Timelines are estimates. Complex cases may take longer. We'll keep you updated throughout.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="mb-4">Ready to Start Your Recovery?</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            Complete our intake form and we'll send you shipping instructions and a prepaid label.
          </p>
          <Link to="/start-recovery">
            <Button variant="hero" size="xl">
              Start a Recovery
              <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
