import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/ui/trust-badge";
import { Stepper } from "@/components/ui/stepper";
import { ServiceCard } from "@/components/ui/service-card";
import { PricingCard } from "@/components/ui/pricing-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Callout } from "@/components/ui/callout";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  Shield,
  MapPin,
  FileText,
  CheckCircle,
  Clock,
  Lock,
  HardDrive,
  Laptop,
  Database,
  FileSearch,
  Briefcase,
  Microscope,
  AlertTriangle,
  ArrowRight,
  Package,
  Search,
  MessageSquare,
  RefreshCw,
  Send,
} from "lucide-react";

const trustBadges = [
  { icon: MapPin, text: "UK-based" },
  { icon: Shield, text: "Secure handling" },
  { icon: FileText, text: "No jargon" },
  { icon: CheckCircle, text: "Clear quotes before work" },
  { icon: Lock, text: "Forensic background" },
];

const howItWorksSteps = [
  {
    number: 1,
    title: "Tell us what happened",
    description: "Complete our simple intake form with device details and symptoms.",
    icon: MessageSquare,
  },
  {
    number: 2,
    title: "Ship or book collection",
    description: "Post your device using our tracked shipping guide, or arrange collection.",
    icon: Package,
  },
  {
    number: 3,
    title: "We diagnose and quote",
    description: "Full assessment within 48 hours. No surprises—you approve before we proceed.",
    icon: Search,
  },
  {
    number: 4,
    title: "Recovery in progress",
    description: "Regular updates as we work. Emergency queue available for urgent cases.",
    icon: RefreshCw,
  },
  {
    number: 5,
    title: "Data returned securely",
    description: "Encrypted external drive or secure download. Device returned tracked.",
    icon: Send,
  },
];

const services = [
  {
    icon: HardDrive,
    title: "SSD & NVMe Recovery",
    description: "Modern solid-state drives require specialist techniques. We handle controller failures, NAND issues, and logical corruption.",
    features: ["Controller-level recovery", "NAND flash expertise", "Firmware repair"],
    href: "/services#ssd-nvme",
  },
  {
    icon: Database,
    title: "Hard Drive Recovery",
    description: "Non-invasive techniques first. From clicking drives to unrecognised partitions, we recover what others can't.",
    features: ["Non-invasive approach", "Head and platter issues", "Partition recovery"],
    href: "/services#hard-drive",
  },
  {
    icon: Laptop,
    title: "Laptop & Desktop Repair",
    description: "Data-first approach to device repair. We prioritise your files before addressing hardware issues.",
    features: ["Data preserved first", "Boot failure resolution", "Component repair"],
    href: "/services#device-repair",
  },
  {
    icon: FileSearch,
    title: "Deleted & Formatted Files",
    description: "Accidentally deleted important files? Formatted the wrong drive? We can often recover what seems lost.",
    features: ["Deep file carving", "Partition reconstruction", "Quick turnaround"],
    href: "/services#deleted-files",
  },
  {
    icon: Briefcase,
    title: "Business Priority Queue",
    description: "Server drives, RAID arrays, and workstations. Priority handling with regular progress updates.",
    features: ["Priority processing", "Structured updates", "SLA available"],
    href: "/services#business",
  },
  {
    icon: Microscope,
    title: "Forensic-Grade Imaging",
    description: "Optional chain-of-custody logging, cryptographic hashing, and evidence-style handling for legal or compliance needs.",
    features: ["Hash verification", "Custody logging", "Detailed reporting"],
    href: "/services#forensic",
  },
];

const pricingTeaser = [
  {
    tier: "Tier 1",
    title: "Logical Recovery",
    price: "From £149",
    priceNote: "Diagnosis fee credited if proceeding",
    description: "Deleted files, formatting, corruption, partition issues.",
    features: [
      "Deleted file recovery",
      "Formatted drive recovery",
      "Partition repair",
      "Standard turnaround",
    ],
  },
  {
    tier: "Tier 2",
    title: "Degraded Media",
    price: "From £299",
    priceNote: "Diagnosis fee credited if proceeding",
    description: "Failing drives, bad sectors, instability requiring imaging.",
    features: [
      "Failing drive imaging",
      "Bad sector handling",
      "Stability recovery",
      "Priority turnaround available",
    ],
    popular: true,
  },
  {
    tier: "Tier 3",
    title: "Advanced Recovery",
    price: "From £499",
    priceNote: "Diagnosis fee credited if proceeding",
    description: "Complex SSD/controller issues, severe mechanical faults.",
    features: [
      "Controller-level repair",
      "Component issues",
      "NAND recovery",
      "Emergency queue available",
    ],
  },
];

const testimonials = [
  {
    quote: "I thought I'd lost 15 years of family photos when my external drive failed. Within a week, everything was recovered. Incredible service and they kept me updated throughout.",
    author: "Sarah M.",
    role: "Individual",
    location: "Manchester",
  },
  {
    quote: "Our server RAID failed on a Friday afternoon. They arranged Saturday collection and had our data back by Tuesday. The priority queue was worth every penny.",
    author: "James T.",
    role: "IT Manager",
    location: "London",
  },
  {
    quote: "Professional, transparent, and genuinely helpful. They explained exactly what happened to my SSD and why recovery was possible. No pushy upselling.",
    author: "David K.",
    role: "Photographer",
    location: "Edinburgh",
  },
];

const diyWarnings = [
  "Stop using the drive immediately—continued use can overwrite recoverable data",
  "Don't run CHKDSK or disk repair utilities on failing drives",
  "Never open a hard drive outside a cleanroom—dust particles cause permanent damage",
  "Avoid DIY recovery software on physically failing drives",
  "Don't freeze your hard drive—this myth causes more damage than it fixes",
];

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
              <Link to="/start-recovery">
                <Button variant="hero" size="xl">
                  Start a Recovery
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/pricing">
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
          <Link to="/pricing">
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
              <Link to="/start-recovery">
                <Button variant="accent" size="xl">
                  Start Business Recovery
                </Button>
              </Link>
              <Link to="/contact">
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
