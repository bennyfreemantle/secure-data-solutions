import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { Callout } from "@/components/ui/callout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  AlertTriangle,
  Clock,
  Target,
  Users,
} from "lucide-react";
import {
  dataRecoveryServices,
  deviceRepairServices,
  forensicServices,
  type ServiceItem,
} from "@/data/services";

interface ServiceSectionProps {
  service: ServiceItem;
  index: number;
}

function ServiceSection({ service, index }: ServiceSectionProps) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card-elevated"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
          <p className="text-muted-foreground">{service.description}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-4">
        <div className="flex items-start gap-2">
          <Target className="h-4 w-4 mt-0.5 text-accent shrink-0" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Best For</p>
            <p className="text-sm text-foreground">{service.bestFor}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Clock className="h-4 w-4 mt-0.5 text-accent shrink-0" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Typical Turnaround</p>
            <p className="text-sm text-foreground">{service.turnaround}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 mt-0.5 text-warning shrink-0" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Risks / Limitations</p>
            <p className="text-sm text-foreground">{service.risks}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">What's Included</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
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
            <h1 className="mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Expert data recovery and device repair with a security-first approach.
              We handle every case with the care and transparency you deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Recovery */}
      <Section variant="alt" id="data-recovery">
        <SectionHeader
          eyebrow="Data Recovery"
          title="Get Your Data Back"
          description="From accidental deletion to complete drive failure, we have the expertise and equipment to recover your files."
          align="left"
        />
        <div className="space-y-6">
          {dataRecoveryServices.map((service, index) => (
            <ServiceSection key={service.title} service={service} index={index} />
          ))}
        </div>
      </Section>

      {/* Device Repair */}
      <Section id="device-repair">
        <SectionHeader
          eyebrow="Device Repair"
          title="Data-First Device Repair"
          description="When your laptop or desktop fails, we prioritise your data before addressing the hardware."
          align="left"
        />
        <div className="space-y-6">
          {deviceRepairServices.map((service, index) => (
            <ServiceSection key={service.title} service={service} index={index} />
          ))}
        </div>
      </Section>

      {/* Forensic Services */}
      <Section variant="alt" id="forensic">
        <SectionHeader
          eyebrow="Forensic Services"
          title="Evidence-Grade Handling"
          description="Optional forensic-grade imaging and chain-of-custody documentation for legal, HR, or compliance requirements."
          align="left"
        />
        <div className="space-y-6">
          {forensicServices.map((service, index) => (
            <ServiceSection key={service.title} service={service} index={index} />
          ))}
        </div>

        <Callout icon={Users} title="Not Sure What You Need?" variant="info" className="mt-8">
          <p>Contact us to discuss your situation. We'll recommend the right service level and give you an honest assessment of what's possible.</p>
          <Link to="/contact" className="inline-flex items-center gap-1 mt-3 text-accent font-medium hover:underline">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </Callout>
      </Section>

      {/* Business CTA */}
      <Section id="business">
        <div className="rounded-2xl bg-primary p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-primary-foreground">Business & Priority Services</h2>
              <p className="text-primary-foreground/80 mb-6">
                Server failures, RAID arrays, and critical workstations need urgent attention.
                Our priority queue gets your business back up and running faster.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Priority processing queue",
                  "Regular structured updates",
                  "Emergency 24-hour assessment",
                  "SLA options available",
                  "Secure courier collection",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-primary-foreground/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <Link to="/start-recovery">
                <Button variant="accent" size="xl">
                  Start Business Recovery
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                  Speak to a Specialist
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="alt">
        <div className="text-center">
          <h2 className="mb-4">Ready to Start?</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            Tell us about your situation and we'll provide a free initial assessment and quote.
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
