import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Shield,
  Eye,
  Lock,
  Users,
  ArrowRight,
  CheckCircle,
  Microscope,
  FileCheck,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Every decision we make prioritises the security of your data. From encrypted storage to access logging, we treat your files as if they were our own.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "No jargon, no hidden fees, no false promises. We explain what's possible, what it costs, and what the risks are—before any work begins.",
  },
  {
    icon: Lock,
    title: "Privacy",
    description: "We access your files only to verify recovery success. We don't browse, examine, or retain content beyond the agreed retention period.",
  },
  {
    icon: FileCheck,
    title: "Evidence-Grade Handling",
    description: "Our forensic background means we understand chain of custody, integrity verification, and proper evidence handling—even for non-legal cases.",
  },
];

const founders = [
  {
    name: "Dr. Sarah Chen",
    role: "Digital Forensics Specialist",
    bio: "15 years in digital forensics, previously with the Metropolitan Police Digital Forensics Unit. Certified EnCase examiner. Specialises in evidence handling and complex recovery cases.",
    expertise: ["Digital forensics", "Evidence handling", "Legal compliance", "RAID recovery"],
  },
  {
    name: "James Morrison",
    role: "Software & Recovery Engineer",
    bio: "Former software engineer with 12 years in data systems. Deep expertise in file systems, storage architectures, and recovery tooling. Builds custom tools for complex recoveries.",
    expertise: ["File system analysis", "SSD/NVMe recovery", "Custom tooling", "Data imaging"],
  },
];

const approach = [
  {
    title: "Non-invasive first",
    description: "We always attempt the least invasive recovery methods first. More aggressive techniques are only used when necessary and with your knowledge.",
  },
  {
    title: "Honest assessments",
    description: "We won't promise what we can't deliver. If recovery is unlikely or impossible, we'll tell you upfront—saving you time and money.",
  },
  {
    title: "Data minimisation",
    description: "We only access what's necessary. Your files are recovered, not reviewed. Technician access is logged and auditable.",
  },
  {
    title: "Secure by design",
    description: "Encrypted storage, controlled access, secure deletion. Our processes are designed with security as a foundation, not an afterthought.",
  },
];

export default function AboutPage() {
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
            <h1 className="mb-4">About Us</h1>
            <p className="text-lg text-muted-foreground">
              We're two specialists—digital forensics and software engineering—who
              believe data recovery should be secure, transparent, and expertly handled.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <Section variant="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Why We Started</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                After years in digital forensics and software engineering, we noticed
                something frustrating about the data recovery industry: too many shops
                making impossible promises, unclear pricing, and treating customers'
                data carelessly.
              </p>
              <p>
                We founded DataRecover UK to do things differently. Our forensic
                background means we understand that data isn't just files—it's evidence,
                memories, livelihoods, and irreplaceable work. It deserves to be handled
                with care and respect.
              </p>
              <p>
                Today, we're a small, specialist team serving individuals and businesses
                across the UK via our mail-in service. We've recovered data from thousands
                of devices—from a grandmother's photo collection to critical business servers.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="card-elevated text-center">
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years combined experience</div>
            </div>
            <div className="card-elevated text-center">
              <div className="text-4xl font-bold text-accent mb-2">UK</div>
              <div className="text-sm text-muted-foreground">Based & operated</div>
            </div>
            <div className="card-elevated text-center">
              <div className="text-4xl font-bold text-accent mb-2">2</div>
              <div className="text-sm text-muted-foreground">Expert founders</div>
            </div>
            <div className="card-elevated text-center">
              <div className="text-4xl font-bold text-accent mb-2">0</div>
              <div className="text-sm text-muted-foreground">Data breaches</div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Team */}
      <Section>
        <SectionHeader
          eyebrow="Our Team"
          title="Expert-Led Recovery"
          description="Your data is handled by specialists with decades of combined experience."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-elevated"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-muted-foreground">
                    {founder.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{founder.name}</h3>
                  <p className="text-sm text-accent">{founder.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{founder.bio}</p>
              <div className="flex flex-wrap gap-2">
                {founder.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section variant="alt">
        <SectionHeader
          eyebrow="Our Values"
          title="What We Stand For"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <value.icon className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">{value.title}</h4>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section>
        <SectionHeader
          eyebrow="Our Approach"
          title="How We Work"
          description="Security and transparency are built into everything we do."
        />
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            {approach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="alt">
        <div className="text-center">
          <h2 className="mb-4">Ready to Work with Experts?</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            Start your recovery today and experience the difference that expertise
            and transparency make.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/start-recovery">
              <Button variant="hero" size="xl">
                Start a Recovery
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
