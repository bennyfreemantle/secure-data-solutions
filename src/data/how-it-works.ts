import type { LucideIcon } from "lucide-react";
import {
  MessageSquare,
  Package,
  Search,
  RefreshCw,
  Send,
  FileCheck,
  Trash2,
  Shield,
} from "lucide-react";

export interface StepItem {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface TipItem {
  title: string;
  description: string;
}

export interface AfterDeliveryItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const steps: StepItem[] = [
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

export const packingTips: TipItem[] = [
  {
    title: "Anti-static protection",
    description:
      "Place the drive in an anti-static bag. If you don't have one, wrap in paper (not plastic bubble wrap directly).",
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
    description:
      "Put a note inside with your name, email, phone, and a brief description of the issue.",
  },
];

export const afterDelivery: AfterDeliveryItem[] = [
  {
    icon: FileCheck,
    title: "14-Day Retention",
    description:
      "We keep your recovered data securely for 14 days after delivery. This gives you time to verify everything is present and working.",
  },
  {
    icon: Trash2,
    title: "Secure Deletion",
    description:
      "After the retention period (or on your request), all data is securely wiped from our systems using certified methods.",
  },
  {
    icon: Shield,
    title: "Device Return",
    description:
      "Your original device is returned tracked and insured. If it's a complete loss, we'll discuss disposal options with you.",
  },
];
