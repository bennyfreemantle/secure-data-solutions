export interface SymptomOption {
  id: string;
  label: string;
}

export interface UrgencyOption {
  value: string;
  label: string;
  description: string;
}

export const deviceTypes: string[] = [
  "External Hard Drive",
  "Internal Hard Drive (HDD)",
  "SSD / NVMe Drive",
  "USB Flash Drive",
  "Laptop",
  "Desktop Computer",
  "Memory Card (SD/microSD)",
  "RAID Array / NAS",
  "Server",
  "Other",
];

export const symptoms: SymptomOption[] = [
  { id: "not-detected", label: "Device not detected / not showing up" },
  { id: "clicking", label: "Clicking or grinding sounds" },
  { id: "slow", label: "Very slow or freezing" },
  { id: "deleted", label: "Accidentally deleted files" },
  { id: "formatted", label: "Accidentally formatted" },
  { id: "corrupted", label: "Files corrupted or inaccessible" },
  { id: "wont-boot", label: "Device won't boot" },
  { id: "water-damage", label: "Water or liquid damage" },
  { id: "physical-damage", label: "Physical damage (dropped, etc.)" },
  { id: "other", label: "Other symptoms" },
];

export const urgencyLevels: UrgencyOption[] = [
  { value: "standard", label: "Standard (3-5 days)", description: "Regular queue, no rush fee" },
  { value: "priority", label: "Priority (+£75)", description: "24-48 hour assessment guarantee" },
  { value: "emergency", label: "Emergency (+£150)", description: "Same-day assessment, out of hours work" },
];
