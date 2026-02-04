import type { LucideIcon } from "lucide-react";
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
} from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  bestFor: string;
  turnaround: string;
  risks: string;
  features: string[];
}

export const dataRecoveryServices: ServiceItem[] = [
  {
    icon: FileX,
    title: "Deleted Files & Formatted Drives",
    description:
      "Accidentally deleted important files or formatted the wrong drive? Quick recovery possible if you stopped using the drive immediately.",
    bestFor:
      "Users who accidentally deleted files, formatted drives, or emptied recycle bin",
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
    description:
      "Drive showing as RAW? Files corrupted or inaccessible? We rebuild file systems and recover data from damaged partitions.",
    bestFor:
      "Drives that appear but show wrong size, ask to format, or have missing files",
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
    description:
      "Computer doesn't recognise your drive at all? This often indicates electronic or firmware issues—we can diagnose and recover.",
    bestFor:
      "Drives that don't appear in Windows/Mac, or make no sound when connected",
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
    description:
      "Drive becoming progressively slower? Clicking, grinding, or freezing? Urgent imaging required before complete failure.",
    bestFor:
      "Drives with degrading performance, unusual sounds, or intermittent detection",
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
    description:
      "SSDs require completely different techniques. We handle controller failures, NAND issues, and trim-deleted data where possible.",
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

export const deviceRepairServices: ServiceItem[] = [
  {
    icon: Laptop,
    title: "Laptop Won't Boot",
    description:
      "Black screen, blue screen, or stuck on logo? We prioritise your data before addressing the underlying hardware issue.",
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
    description:
      "Spilled liquid on your device? Time is critical. We assess damage honestly—some devices can be saved, others need data extraction.",
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
    description:
      "Operating system corrupted? Boot loop? We repair Windows, macOS, and Linux boot issues while preserving your data.",
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

export const forensicServices: ServiceItem[] = [
  {
    icon: Microscope,
    title: "Forensic Imaging",
    description:
      "Bit-for-bit imaging with cryptographic hash verification. For legal, compliance, or investigation purposes.",
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
    description:
      "Full evidence handling documentation from receipt to return. Suitable for legal discovery and investigations.",
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
    description:
      "Scope-limited technical reports on acquisition and findings. Not expert witness testimony—we document what we find.",
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
