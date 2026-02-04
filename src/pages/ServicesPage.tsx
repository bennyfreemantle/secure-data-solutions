import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { Callout } from "@/components/ui/callout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  HardDrive,
  FileX,
  FileWarning,
  HelpCircle,
  Activity,
  Cpu,
  Laptop,
  Droplets,
  Power,
  Microscope,
  FileCheck,
  ClipboardList,
  ArrowRight,
  AlertTriangle,
  Clock,
  Target,
  Users,
} from "lucide-react";

const dataRecoveryServices = [
  {
    icon: FileX,
    title: "Deleted Files & Formatted Drives",
    description: "Accidentally deleted important files or formatted the wrong drive? Quick recovery possible if you stopped using the drive immediately.",
    bestFor: "Users who accidentally deleted files, formatted drives, or emptied recycle bin",
    turnaround: "1-3 business days (logical cases)",
    risks: "Continued use may overwrite data permanently",
    features: [
      "Deep file carving and signature analysis",
      "Partition table reconstruction",
      "RAW recovery for fragmented files",
      "Free-space scanning",
    ],
  },
  {
    icon: FileWarning,
    title: "Corruption & Partition Issues",
    description: "Drive showing as RAW? Files corrupted or inaccessible? We rebuild file systems and recover data from damaged partitions.",
    bestFor: "Drives that appear but show wrong size, ask to format, or have missing files",
    turnaround: "2-4 business days",
    risks: "Don't run repair tools—they can cause further damage",
    features: [
      "File system repair (NTFS, exFAT, HFS+, ext4)",
      "Master file table reconstruction",
      "Volume header recovery",
      "Cross-linked file resolution",
    ],
  },
  {
    icon: HelpCircle,
    title: "Drive Not Detected",
    description: "Computer doesn't recognise your drive at all? This often indicates electronic or firmware issues—we can diagnose and recover.",
    bestFor: "Drives that don't appear in Windows/Mac, or make no sound when connected",
    turnaround: "3-5 business days (firmware), varies for hardware",
    risks: "Don't keep reconnecting—this can cause further electronic damage",
    features: [
      "PCB and electronics diagnosis",
      "Firmware module repair",
      "Service area recovery",
      "Controller chip analysis",
    ],
  },
  {
    icon: Activity,
    title: "Slow or Failing Drives",
    description: "Drive becoming progressively slower? Clicking, grinding, or freezing? Urgent imaging required before complete failure.",
    bestFor: "Drives with degrading performance, unusual sounds, or intermittent detection",
    turnaround: "2-5 business days (depends on stability)",
    risks: "Every power-on risks further head or platter damage",
    features: [
      "Specialised imaging hardware",
      "Adaptive read strategies",
      "Head mapping and avoidance",
      "Staged recovery for unstable media",
    ],
  },
  {
    icon: Cpu,
    title: "SSD & NVMe Recovery",
    description: "SSDs require completely different techniques. We handle controller failures, NAND issues, and trim-deleted data where possible.",
    bestFor: "Modern laptops, MacBooks, M.2 drives, failing SSDs",
    turnaround: "3-7 business days (controller issues may take longer)",
    risks: "TRIM may have permanently erased deleted data—act fast",
    features: [
      "Controller-level data extraction",
      "NAND chip reading",
      "Wear-levelling table reconstruction",
      "Firmware corruption repair",
    ],
  },
];

const deviceRepairServices = [
  {
    icon: Laptop,
    title: "Laptop Won't Boot",
    description: "Black screen, blue screen, or stuck on logo? We prioritise your data before addressing the underlying hardware issue.",
    bestFor: "Laptops that won't start, freeze during boot, or show error screens",
    turnaround: "1-3 business days for diagnosis",
    risks: "Don't attempt OS reinstall without data backup",
    features: [
      "Boot failure diagnosis",
      "Data extraction before repair",
      "OS repair and reinstallation",
      "Hardware fault identification",
    ],
  },
  {
    icon: Droplets,
    title: "Water Damage Triage",
    description: "Spilled liquid on your device? Time is critical. We assess damage honestly—some devices can be saved, others need data extraction.",
    bestFor: "Recent liquid spills, devices that won't power on after exposure",
    turnaround: "24-48 hours for initial assessment",
    risks: "Don't try to turn it on or charge it—corrosion spreads quickly",
    features: [
      "Ultrasonic cleaning",
      "Component-level inspection",
      "Corrosion treatment",
      "Honest damage assessment",
    ],
  },
  {
    icon: Power,
    title: "OS & Boot Recovery",
    description: "Operating system corrupted? Boot loop? We repair Windows, macOS, and Linux boot issues while preserving your data.",
    bestFor: "Update failures, boot loops, corrupted system files",
    turnaround: "1-2 business days",
    risks: "Avoid automatic repair tools that may overwrite data",
    features: [
      "Boot sector repair",
      "Registry restoration",
      "Driver conflict resolution",
      "Safe data backup before repair",
    ],
  },
];

const forensicServices = [
  {
    icon: Microscope,
    title: "Forensic Imaging",
    description: "Bit-for-bit imaging with cryptographic hash verification. For legal, compliance, or investigation purposes.",
    bestFor: "Legal proceedings, HR investigations, compliance requirements",
    turnaround: "Depends on media size and condition",
    risks: "Chain of custody must be established before shipping",
    features: [
      "Write-blocked acquisition",
      "MD5/SHA-256 hash verification",
      "EnCase-compatible images",
      "Detailed imaging logs",
    ],
  },
  {
    icon: ClipboardList,
    title: "Chain of Custody Logging",
    description: "Full evidence handling documentation from receipt to return. Suitable for legal discovery and investigations.",
    bestFor: "Evidence handling for court, HR investigations, insurance claims",
    turnaround: "As per imaging timeline",
    risks: "Improper handling before receipt may compromise evidence",
    features: [
      "Tamper-evident packaging",
      "Access logs and timestamps",
      "Photographic documentation",
      "Secure storage",
    ],
  },
  {
    icon: FileCheck,
    title: "Forensic Reporting",
    description: "Scope-limited technical reports on acquisition and findings. Not expert witness testimony—we document what we find.",
    bestFor: "Legal teams, HR departments, compliance officers",
    turnaround: "3-5 business days after imaging",
    risks: "Reports are factual; we don't provide legal interpretation",
    features: [
      "Hash verification statements",
      "Acquisition methodology",
      "File listing and metadata",
      "Anomaly documentation",
    ],
  },
];

interface ServiceSectionProps {
  service: {
    icon: any;
    title: string;
    description: string;
    bestFor: string;
    turnaround: string;
    risks: string;
    features: string[];
  };
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
