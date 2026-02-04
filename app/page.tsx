"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/ui/trust-badge";
import { Stepper } from "@/components/ui/stepper";
import { ServiceCard } from "@/components/ui/service-card";
import { PricingCard } from "@/components/ui/pricing-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Callout } from "@/components/ui/callout";
import { Section, SectionHeader } from "@/components/ui/section";
import { AlertTriangle, ArrowRight, Clock } from "lucide-react";
import {
  diyWarnings,
  howItWorksSteps,
  pricingTeaser,
  services,
  testimonials,
  trustBadges,
} from "@/data/home";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container-wide relative py-20 md:py-28 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6">
                Secure, Mail-In Data Recovery
                <span className="block text-accent">UK Specialists</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Fast diagnostics. Transparent pricing. Forensic-grade handling available.
                We recover what matters most—photos, documents, business data—with expert care.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/start-recovery">
                <Button variant="hero" size="xl">
                  Start a Recovery
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="hero-secondary" size="xl">
                  See Pricing
                </Button>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center"
            >
              <TrustBadges badges={trustBadges} className="justify-center" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <Section variant="alt">
        <SectionHeader
          eyebrow="How It Works"
          title="Simple, Secure Process"
          description="From shipping your device to receiving your recovered data—we handle everything with care."
        />
        <Stepper steps={howItWorksSteps} variant="horizontal" />
      </Section>

      {/* Services */}
      <Section>
        <SectionHeader
          eyebrow="Our Services"
          title="Expert Recovery for Every Scenario"
          description="Whether it's a personal laptop or a business server, we have the expertise to recover your data."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing Teaser */}
      <Section variant="alt">
        <SectionHeader
          eyebrow="Transparent Pricing"
          title="Clear Pricing, No Surprises"
          description="Pay a small diagnosis fee upfront, credited if you proceed. Final quote after assessment—no work without your approval."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {pricingTeaser.map((tier, index) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PricingCard {...tier} ctaText="Learn More" ctaHref="/pricing" />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/pricing">
            <Button variant="link" className="gap-1">
              View full pricing details
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by Individuals & Businesses"
          description="Real stories from customers who trusted us with their most important data."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* DIY Warning */}
      <Section variant="alt">
        <div className="mx-auto max-w-3xl">
          <Callout icon={AlertTriangle} title="When NOT to Try DIY Recovery" variant="warning">
            <ul className="mt-3 space-y-2">
              {diyWarnings.map((warning, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
                  {warning}
                </li>
              ))}
            </ul>
          </Callout>
        </div>
      </Section>

      {/* Business CTA */}
      <Section>
        <div className="rounded-2xl bg-primary p-8 md:p-12 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-primary-foreground">For Businesses</h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Priority queue access, structured updates, and SLA options available.
              When downtime costs money, we move fast.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/start-recovery">
                <Button variant="accent" size="xl">
                  Start Business Recovery
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="accent-outline" size="xl" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Speak to a Specialist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="alt">
        <div className="text-center">
          <h2 className="mb-4">Ready to Recover Your Data?</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            Start your recovery today. We'll reply quickly with next steps and a rough estimate. No obligation.
          </p>
          <Link href="/start-recovery">
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
