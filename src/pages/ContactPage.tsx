import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
              <CheckCircle className="h-10 w-10 text-success" />
            </div>
            <h1 className="mb-4">Message Sent</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for getting in touch. We typically respond within
              a few hours during business hours.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/start-recovery">
                <Button variant="accent" size="lg">
                  Start a Recovery
                </Button>
              </Link>
              <Link to="/">
                <Button variant="ghost" size="lg">
                  Return Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    );
  }

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
            <h1 className="mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Questions about our service? Need advice on your situation?
              We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Section variant="alt">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Whether you have a quick question or need detailed advice about
              your data recovery situation, we're happy to help. No pressure,
              no obligation.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Start Recovery CTA */}
            <div className="p-6 rounded-xl bg-primary text-primary-foreground">
              <h3 className="font-semibold mb-2">Ready to Start?</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                If you're ready to begin a recovery, use our intake form for
                the fastest response.
              </p>
              <Link to="/start-recovery">
                <Button variant="accent" size="lg">
                  Start a Recovery
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-elevated">
              <h3 className="text-lg font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="07700 900123"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="e.g., Question about SSD recovery"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us how we can help..."
                    rows={5}
                  />
                </div>
                <Button type="submit" variant="accent" size="lg" className="w-full">
                  Send Message
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  We typically respond within a few hours during business hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
