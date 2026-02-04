import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { PricingCard } from "@/components/ui/pricing-card";
import { Callout } from "@/components/ui/callout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  HelpCircle,
  Clock,
  Zap,
  AlertTriangle,
  Package,
  Shield,
  Microscope,
  Check,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const mainPricing = [
  {
    tier: "Tier 1",
    title: "Logical Recovery",
    price: "From £149",
    priceNote: "£49 diagnosis fee credited if proceeding",
    description: "For deleted files, formatting errors, partition issues, and corruption on otherwise healthy media.",
    features: [
      "Deleted file recovery",
      "Formatted drive recovery",
      "Partition and file system repair",
      "Logical corruption resolution",
      "Standard 3-5 day turnaround",
      "Encrypted return media included",
    ],
    popular: false,
  },
  {
    tier: "Tier 2",
    title: "Degraded Media Recovery",
    price: "From £299",
    priceNote: "£49 diagnosis fee credited if proceeding",
    description: "For drives with degraded sectors, instability, clicking sounds, or requiring specialised imaging.",
    features: [
      "Everything in Tier 1",
      "Specialised imaging hardware",
      "Bad sector handling",
      "Unstable drive recovery",
      "Priority 2-4 day turnaround",
      "Regular progress updates",
    ],
    popular: true,
  },
  {
    tier: "Tier 3",
    title: "Advanced Recovery",
    price: "From £499",
    priceNote: "£49 diagnosis fee credited if proceeding",
    description: "For complex SSD controller failures, severe mechanical issues, and cases requiring advanced techniques.",
    features: [
      "Everything in Tier 2",
      "Controller-level recovery",
      "NAND chip reading",
      "Component-level repair",
      "Emergency queue available",
      "Dedicated specialist assigned",
    ],
    popular: false,
  },
];

const addOns = [
  {
    name: "Priority Queue",
    price: "+ £75",
    description: "Jump the standard queue. 24-48 hour assessment guarantee.",
    icon: Clock,
  },
  {
    name: "Emergency Queue",
    price: "+ £150",
    description: "Same-day assessment. Work continues out of hours if needed.",
    icon: Zap,
  },
  {
    name: "Secure Return Media",
    price: "Included",
    description: "New encrypted external drive for your recovered data.",
    icon: Package,
  },
  {
    name: "Courier Collection",
    price: "+ £25",
    description: "We arrange tracked, insured collection from your address.",
    icon: Package,
  },
  {
    name: "Forensic Package",
    price: "+ £200",
    description: "Chain of custody, hash verification, evidence handling.",
    icon: Microscope,
  },
  {
    name: "Extended Retention",
    price: "+ £10/week",
    description: "Keep data on our secure systems beyond standard 14 days.",
    icon: Shield,
  },
];

const pricingFaqs = [
  {
    question: "What does the diagnosis fee cover?",
    answer: "The £49 diagnosis fee covers full assessment of your device, including: initial inspection and logging, connection to diagnostic systems, assessment of damage level, recovery feasibility evaluation, and a detailed quote for the work required. This fee is credited against your final bill if you proceed with recovery.",
  },
  {
    question: "What affects the final price?",
    answer: "Several factors influence the final quote: the type and severity of damage, drive capacity and technology (SSD vs HDD), time required for imaging unstable media, whether specialised techniques are needed, and how urgently you need the data back. We'll always explain exactly why your case falls into a particular tier.",
  },
  {
    question: "What if you can't recover my data?",
    answer: "If we cannot recover any usable data, you only pay the diagnosis fee (£49). We never charge for unsuccessful recovery attempts. Before any chargeable work begins, you'll receive a detailed quote and must approve the work.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "For larger recovery projects (typically £500+), we can discuss payment arrangements. Contact us to discuss your situation. We understand data loss often comes at inconvenient times.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees. Your quote includes: the recovery work, encrypted return media, and tracked return shipping. Add-ons like priority queue or courier collection are clearly priced upfront. The only variable is the recovery tier, which we determine after diagnosis.",
  },
  {
    question: "How does the 'no data, no fee' work exactly?",
    answer: "After diagnosis, if we determine recovery is possible, we'll provide a quote. If you approve and we proceed but ultimately can't recover usable data, you pay nothing beyond the initial diagnosis fee. 'Usable data' means files you actually want—not just fragments or corrupted files.",
  },
];

export default function PricingPage() {
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
            <h1 className="mb-4">Transparent Pricing</h1>
            <p className="text-lg text-muted-foreground">
              Clear pricing with no surprises. Pay a small diagnosis fee upfront,
              then receive a detailed quote before any recovery work begins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diagnosis Fee Callout */}
      <Section variant="alt">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-card border border-border p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Diagnosis Fee: £49</h3>
                <p className="text-muted-foreground mb-4">
                  Every recovery starts with a thorough assessment. This covers inspection,
                  diagnostics, and a detailed quote. <strong>Credited in full</strong> if you proceed with recovery.
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Full device inspection and logging",
                    "Assessment of damage and recovery feasibility",
                    "Detailed quote with recovery tier",
                    "No obligation to proceed",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right">
                <div className="text-4xl font-bold text-foreground mb-1">£49</div>
                <div className="text-sm text-muted-foreground">Credited if proceeding</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Main Pricing Tiers */}
      <Section>
        <SectionHeader
          eyebrow="Recovery Tiers"
          title="Choose Your Recovery Level"
          description="Pricing depends on the complexity of your recovery. We'll confirm the tier after diagnosis."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {mainPricing.map((tier, index) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PricingCard {...tier} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Add-ons */}
      <Section variant="alt">
        <SectionHeader
          eyebrow="Add-Ons"
          title="Optional Extras"
          description="Customise your recovery with priority handling, courier collection, or forensic documentation."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((addon, index) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="card-elevated flex items-start gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <addon.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-foreground">{addon.name}</h4>
                  <span className="text-sm font-semibold text-accent">{addon.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{addon.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Important Notes */}
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          <Callout icon={HelpCircle} title="How Our Pricing Works" variant="info">
            <ol className="mt-3 space-y-3 list-decimal list-inside">
              <li>You pay the £49 diagnosis fee when you ship your device</li>
              <li>We assess your device and determine the recovery tier</li>
              <li>You receive a detailed quote with total cost</li>
              <li>You approve or decline—no obligation to proceed</li>
              <li>If you proceed, the diagnosis fee is credited against the total</li>
              <li>If we can't recover data, you only pay the diagnosis fee</li>
            </ol>
          </Callout>

          <Callout icon={AlertTriangle} title="Important: No Guarantees" variant="warning">
            <p>
              Data recovery outcomes vary depending on the condition of your device.
              We provide honest assessments and never promise results we can't deliver.
              Quotes are estimates based on our diagnosis—final costs may vary if we discover
              additional issues during recovery.
            </p>
          </Callout>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="alt">
        <SectionHeader
          eyebrow="Pricing FAQ"
          title="Common Questions About Pricing"
        />
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {pricingFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated border-0 px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            Start your recovery today. We'll assess your device and provide a detailed quote
            before any recovery work begins.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/start-recovery">
              <Button variant="hero" size="xl">
                Start a Recovery
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="xl">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
