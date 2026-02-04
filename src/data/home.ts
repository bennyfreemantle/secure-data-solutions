import type { LucideIcon } from "lucide-react";
import {
  Shield,
  MapPin,
  FileText,
  CheckCircle,
  Lock,
  HardDrive,
  Laptop,
  Database,
  FileSearch,
  Briefcase,
  Microscope,
  Package,
  Search,
  MessageSquare,
  RefreshCw,
  Send,
} from "lucide-react";

export interface TrustBadge {
  icon: LucideIcon;
  text: string;
}

export interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href: string;
}

export interface PricingTeaserItem {
  tier: string;
  title: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export const trustBadges: TrustBadge[] = [
  { icon: MapPin, text: "UK-based" },
  { icon: Shield, text: "Secure handling" },
  { icon: FileText, text: "No jargon" },
  { icon: CheckCircle, text: "Clear quotes before work" },
  { icon: Lock, text: "Forensic background" },
];

export const howItWorksSteps: HowItWorksStep[] = [
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

export const services: ServiceItem[] = [
  {
    icon: HardDrive,
    title: "SSD & NVMe Recovery",
    description:
      "Modern solid-state drives require specialist techniques. We handle controller failures, NAND issues, and logical corruption.",
    features: ["Controller-level recovery", "NAND flash expertise", "Firmware repair"],
    href: "/services#ssd-nvme",
  },
  {
    icon: Database,
    title: "Hard Drive Recovery",
    description:
      "Non-invasive techniques first. From clicking drives to unrecognised partitions, we recover what others can't.",
    features: ["Non-invasive approach", "Head and platter issues", "Partition recovery"],
    href: "/services#hard-drive",
  },
  {
    icon: Laptop,
    title: "Laptop & Desktop Repair",
    description:
      "Data-first approach to device repair. We prioritise your files before addressing hardware issues.",
    features: ["Data preserved first", "Boot failure resolution", "Component repair"],
    href: "/services#device-repair",
  },
  {
    icon: FileSearch,
    title: "Deleted & Formatted Files",
    description:
      "Accidentally deleted important files? Formatted the wrong drive? We can often recover what seems lost.",
    features: ["Deep file carving", "Partition reconstruction", "Quick turnaround"],
    href: "/services#deleted-files",
  },
  {
    icon: Briefcase,
    title: "Business Priority Queue",
    description:
      "Server drives, RAID arrays, and workstations. Priority handling with regular progress updates.",
    features: ["Priority processing", "Structured updates", "SLA available"],
    href: "/services#business",
  },
  {
    icon: Microscope,
    title: "Forensic-Grade Imaging",
    description:
      "Optional chain-of-custody logging, cryptographic hashing, and evidence-style handling for legal or compliance needs.",
    features: ["Hash verification", "Custody logging", "Detailed reporting"],
    href: "/services#forensic",
  },
];

export const pricingTeaser: PricingTeaserItem[] = [
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

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "I thought I'd lost 15 years of family photos when my external drive failed. Within a week, everything was recovered. Incredible service and they kept me updated throughout.",
    author: "Sarah M.",
    role: "Individual",
    location: "Manchester",
  },
  {
    quote:
      "Our server RAID failed on a Friday afternoon. They arranged Saturday collection and had our data back by Tuesday. The priority queue was worth every penny.",
    author: "James T.",
    role: "IT Manager",
    location: "London",
  },
  {
    quote:
      "Professional, transparent, and genuinely helpful. They explained exactly what happened to my SSD and why recovery was possible. No pushy upselling.",
    author: "David K.",
    role: "Photographer",
    location: "Edinburgh",
  },
];

export const diyWarnings: string[] = [
  "Stop using the drive immediately—continued use can overwrite recoverable data",
  "Don't run CHKDSK or disk repair utilities on failing drives",
  "Never open a hard drive outside a cleanroom—dust particles cause permanent damage",
  "Avoid DIY recovery software on physically failing drives",
  "Don't freeze your hard drive—this myth causes more damage than it fixes",
];
