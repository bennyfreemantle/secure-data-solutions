import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Stepper } from "@/components/ui/stepper";
import { Callout } from "@/components/ui/callout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Package,
  Search,
  RefreshCw,
  Send,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Shield,
  Clock,
  FileCheck,
  Trash2,
} from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Tell Us What Happened",
    description: "Complete our online intake form with your device details and symptoms.",
    icon: MessageSquare,
    details: [
      "Describe the symptoms and when they started",
      "Tell us what files are most important to recover",
      "Select your preferred urgency level",
      "Upload photos of your device if helpful",
    ],
  },
  {
    number: 2,
    title: "Ship or Book Collection",
    description: "Post your device to us or arrange a courier collection.",
    icon: Package,
    details: [
      "Use our packing guide for safe shipping",
      "Anti-static bag for the drive (we provide instructions)",
      "Padded packaging to prevent transit damage",
      "Tracked, insured shipping recommended",
      "Optional: we arrange courier collection (£25)",
    ],
  },
  {
    number: 3,
    title: "We Diagnose & Quote",
    description: "Full assessment within 48 hours (24 hours for priority).",
    icon: Search,
    details: [
      "Logged and photographed on arrival",
      "Connected to diagnostic systems",
      "Damage assessment and feasibility evaluation",
      "Detailed quote with recovery tier",
      "No work proceeds without your approval",
    ],
  },
  {
    number: 4,
    title: "Recovery in Progress",
    description: "Specialist recovery work with regular progress updates.",
    icon: RefreshCw,
    details: [
      "Work begins only after you approve the quote",
      "Regular email updates on progress",
      "Emergency cases worked on continuously",
      "You can contact us anytime with questions",
    ],
  },
  {
    number: 5,
    title: "Data Returned Securely",
    description: "Recovered data on encrypted media, device returned tracked.",
    icon: Send,
    details: [
      "Data transferred to new encrypted external drive",
      "Optional: secure download link (for smaller recoveries)",
      "Your original device returned tracked and insured",
      "File listing provided so you can verify recovery",
    ],
  },
];

const packingTips = [
  {
    title: "Anti-static protection",
    description: "Place the drive in an anti-static bag. If you don't have one, wrap in paper (not plastic bubble wrap directly).",
  },
  {
    title: "Padding",
    description: "Surround with at least 5cm of padding on all sides. Crumpled paper or foam works well.",
  },
  {
    title: "Rigid container",
    description: "Use a sturdy box that won't crush. If reusing a box, remove old labels to avoid confusion.",
  },
  {
    title: "Include your details",
    description: "Put a note inside with your name, email, phone, and a brief description of the issue.",
  },
];

const afterDelivery = [
  {
    icon: FileCheck,
    title: "14-Day Retention",
    description: "We keep your recovered data securely for 14 days after delivery. This gives you time to verify everything is present and working.",
  },
  {
    icon: Trash2,
    title: "Secure Deletion",
    description: "After the retention period (or on your request), all data is securely wiped from our systems using certified methods.",
  },
  {
    icon: Shield,
    title: "Device Return",
    description: "Your original device is returned tracked and insured. If it's a complete loss, we'll discuss disposal options with you.",
  },
];

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
