import type { LucideIcon } from "lucide-react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@datarecover.uk",
    href: "mailto:hello@datarecover.uk",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0800 123 4567",
    href: "tel:+448001234567",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "UK-wide mail-in service",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 9am-6pm, Sat: 10am-2pm",
    href: null,
  },
];
