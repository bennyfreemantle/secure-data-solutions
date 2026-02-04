import type { LucideIcon } from "lucide-react";
import { Shield, Eye, Lock, FileCheck } from "lucide-react";

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FounderItem {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
}

export interface ApproachItem {
  title: string;
  description: string;
}

export const values: ValueItem[] = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "Every decision we make prioritises the security of your data. From encrypted storage to access logging, we treat your files as if they were our own.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No jargon, no hidden fees, no false promises. We explain what's possible, what it costs, and what the risks are—before any work begins.",
  },
  {
    icon: Lock,
    title: "Privacy",
    description:
      "We access your files only to verify recovery success. We don't browse, examine, or retain content beyond the agreed retention period.",
  },
  {
    icon: FileCheck,
    title: "Evidence-Grade Handling",
    description:
      "Our forensic background means we understand chain of custody, integrity verification, and proper evidence handling—even for non-legal cases.",
  },
];

export const founders: FounderItem[] = [
  {
    name: "Dr. Sarah Chen",
    role: "Digital Forensics Specialist",
    bio:
      "15 years in digital forensics, previously with the Metropolitan Police Digital Forensics Unit. Certified EnCase examiner. Specialises in evidence handling and complex recovery cases.",
    expertise: ["Digital forensics", "Evidence handling", "Legal compliance", "RAID recovery"],
  },
  {
    name: "James Morrison",
    role: "Software & Recovery Engineer",
    bio:
      "Former software engineer with 12 years in data systems. Deep expertise in file systems, storage architectures, and recovery tooling. Builds custom tools for complex recoveries.",
    expertise: ["File system analysis", "SSD/NVMe recovery", "Custom tooling", "Data imaging"],
  },
];

export const approach: ApproachItem[] = [
  {
    title: "Non-invasive first",
    description:
      "We always attempt the least invasive recovery methods first. More aggressive techniques are only used when necessary and with your knowledge.",
  },
  {
    title: "Honest assessments",
    description:
      "We won't promise what we can't deliver. If recovery is unlikely or impossible, we'll tell you upfront—saving you time and money.",
  },
  {
    title: "Data minimisation",
    description:
      "We only access what's necessary. Your files are recovered, not reviewed. Technician access is logged and auditable.",
  },
  {
    title: "Secure by design",
    description:
      "Encrypted storage, controlled access, secure deletion. Our processes are designed with security as a foundation, not an afterthought.",
  },
];
