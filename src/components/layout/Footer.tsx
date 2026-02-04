import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Data Recovery", href: "/services#data-recovery" },
    { label: "Device Repair", href: "/services#device-repair" },
    { label: "Forensic Services", href: "/services#forensic" },
    { label: "Business Priority", href: "/services#business" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      {/* Main Footer */}
      <div className="container-wide section-padding pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-none tracking-tight text-foreground">
                  DataRecover
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  UK Specialists
                </span>
              </div>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Secure, mail-in data recovery for individuals and businesses across the UK. 
              Expert-led recovery with transparent pricing and forensic-grade handling available.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:hello@datarecover.uk"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                hello@datarecover.uk
              </a>
              <a
                href="tel:+441onal23456789"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                0800 123 4567
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                UK-wide mail-in service
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-wide py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-xs text-muted-foreground">
              © {currentYear} DataRecover UK. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground max-w-md">
              Recovery outcomes vary depending on device condition. Estimates are not guarantees. 
              No work beyond diagnosis without your approval.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
