import type { LucideIcon } from "lucide-react";
import { Clock, Zap, Package, Microscope, Shield } from "lucide-react";

export interface PricingTier {
  tier: string;
  title: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface PricingAddOn {
  name: string;
  price: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingFaq {
  question: string;
  answer: string;
}

export const mainPricing: PricingTier[] = [
  {
    tier: "Tier 1",
    title: "Logical Recovery",
    price: "From £149",
    priceNote: "£49 diagnosis fee credited if proceeding",
    description:
      "For deleted files, formatting errors, partition issues, and corruption on otherwise healthy media.",
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
    description:
      "For drives with degraded sectors, instability, clicking sounds, or requiring specialised imaging.",
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
    description:
      "For complex SSD controller failures, severe mechanical issues, and cases requiring advanced techniques.",
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

export const addOns: PricingAddOn[] = [
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

export const pricingFaqs: PricingFaq[] = [
  {
    question: "What does the diagnosis fee cover?",
    answer:
      "The £49 diagnosis fee covers full assessment of your device, including: initial inspection and logging, connection to diagnostic systems, assessment of damage level, recovery feasibility evaluation, and a detailed quote for the work required. This fee is credited against your final bill if you proceed with recovery.",
  },
  {
    question: "What affects the final price?",
    answer:
      "Several factors influence the final quote: the type and severity of damage, drive capacity and technology (SSD vs HDD), time required for imaging unstable media, whether specialised techniques are needed, and how urgently you need the data back. We'll always explain exactly why your case falls into a particular tier.",
  },
  {
    question: "What if you can't recover my data?",
    answer:
      "If we cannot recover any usable data, you only pay the diagnosis fee (£49). We never charge for unsuccessful recovery attempts. Before any chargeable work begins, you'll receive a detailed quote and must approve the work.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "For larger recovery projects (typically £500+), we can discuss payment arrangements. Contact us to discuss your situation. We understand data loss often comes at inconvenient times.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees. Your quote includes: the recovery work, encrypted return media, and tracked return shipping. Add-ons like priority queue or courier collection are clearly priced upfront. The only variable is the recovery tier, which we determine after diagnosis.",
  },
  {
    question: "How does the 'no data, no fee' work exactly?",
    answer:
      "After diagnosis, if we determine recovery is possible, we'll provide a quote. If you approve and we proceed but ultimately can't recover usable data, you pay nothing beyond the initial diagnosis fee. 'Usable data' means files you actually want—not just fragments or corrupted files.",
  },
];
