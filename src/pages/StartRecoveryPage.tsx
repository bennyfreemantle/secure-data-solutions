import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Callout } from "@/components/ui/callout";
import {
  Shield,
  Upload,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";

const deviceTypes = [
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

const symptoms = [
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

const urgencyLevels = [
  { value: "standard", label: "Standard (3-5 days)", description: "Regular queue, no rush fee" },
  { value: "priority", label: "Priority (+£75)", description: "24-48 hour assessment guarantee" },
  { value: "emergency", label: "Emergency (+£150)", description: "Same-day assessment, out of hours work" },
];

export default function StartRecoveryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    deviceType: "",
    makeModel: "",
    capacity: "",
    additionalSymptoms: "",
    urgency: "standard",
    encrypted: "",
    consent1: false,
    consent2: false,
    consent3: false,
  });

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId)
        ? prev.filter((id) => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit to an API
    console.log({ ...formData, symptoms: selectedSymptoms });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
              <CheckCircle className="h-10 w-10 text-success" />
            </div>
            <h1 className="mb-4">Recovery Request Received</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for your submission. We've received your recovery request
              and will be in touch shortly.
            </p>
          </motion.div>

          <div className="card-elevated text-left mb-8">
            <h3 className="font-semibold mb-4">What happens next?</h3>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">1</span>
                <span>We'll email you within 2 hours (during business hours) with your reference number and shipping instructions.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">2</span>
                <span>Pack your device following our guide and post it to us using tracked shipping.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">3</span>
                <span>We'll confirm receipt and begin diagnosis within 48 hours.</span>
              </li>
            </ol>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                View Shipping Guide
              </Button>
            </Link>
            <Link to="/">
              <Button variant="ghost" size="lg">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-background py-12 md:py-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4">Start a Recovery</h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your device and situation. We'll get back to you
              quickly with next steps and a rough estimate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <Section variant="alt">
        <div className="mx-auto max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div className="card-elevated">
              <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="07700 900123"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="address">Return Address *</Label>
                  <Textarea
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="123 High Street&#10;London&#10;SW1A 1AA"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Device Information */}
            <div className="card-elevated">
              <h3 className="text-lg font-semibold mb-6">Device Information</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="deviceType">Device Type *</Label>
                  <Select
                    value={formData.deviceType}
                    onValueChange={(value) => setFormData({ ...formData, deviceType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select device type" />
                    </SelectTrigger>
                    <SelectContent>
                      {deviceTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="makeModel">Make & Model</Label>
                  <Input
                    id="makeModel"
                    value={formData.makeModel}
                    onChange={(e) => setFormData({ ...formData, makeModel: e.target.value })}
                    placeholder="e.g., Seagate Backup Plus 2TB"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity">Storage Capacity</Label>
                  <Input
                    id="capacity"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    placeholder="e.g., 1TB, 500GB"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Is the drive encrypted?</Label>
                  <Select
                    value={formData.encrypted}
                    onValueChange={(value) => setFormData({ ...formData, encrypted: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="unsure">Not sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Symptoms */}
            <div className="card-elevated">
              <h3 className="text-lg font-semibold mb-6">What's Wrong?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Select all symptoms that apply:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {symptoms.map((symptom) => (
                  <div key={symptom.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={symptom.id}
                      checked={selectedSymptoms.includes(symptom.id)}
                      onCheckedChange={() => handleSymptomToggle(symptom.id)}
                    />
                    <Label
                      htmlFor={symptom.id}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {symptom.label}
                    </Label>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2">
                <Label htmlFor="additionalSymptoms">Additional Details</Label>
                <Textarea
                  id="additionalSymptoms"
                  value={formData.additionalSymptoms}
                  onChange={(e) => setFormData({ ...formData, additionalSymptoms: e.target.value })}
                  placeholder="Tell us more about what happened and what files are most important to recover..."
                  rows={4}
                />
              </div>
            </div>

            {/* Urgency */}
            <div className="card-elevated">
              <h3 className="text-lg font-semibold mb-6">Urgency Level</h3>
              <div className="space-y-3">
                {urgencyLevels.map((level) => (
                  <label
                    key={level.value}
                    className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${
                      formData.urgency === level.value
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-muted-foreground/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="urgency"
                      value={level.value}
                      checked={formData.urgency === level.value}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="sr-only"
                    />
                    <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                      formData.urgency === level.value ? "border-accent" : "border-muted-foreground"
                    }`}>
                      {formData.urgency === level.value && (
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{level.label}</div>
                      <div className="text-sm text-muted-foreground">{level.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Photo Upload Placeholder */}
            <div className="card-elevated">
              <h3 className="text-lg font-semibold mb-4">Photos (Optional)</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Upload photos of your device label, any visible damage, or how it's packaged.
              </p>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="mx-auto h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground">
                  Drag and drop files here, or click to browse
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Maximum 5 files, 10MB each. JPG, PNG, or PDF.
                </p>
              </div>
            </div>

            {/* Consent */}
            <div className="card-elevated">
              <h3 className="text-lg font-semibold mb-6">Consent & Agreement</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent1"
                    required
                    checked={formData.consent1}
                    onCheckedChange={(checked) => setFormData({ ...formData, consent1: checked as boolean })}
                  />
                  <Label htmlFor="consent1" className="text-sm font-normal leading-relaxed cursor-pointer">
                    I authorise DataRecover UK to diagnose my device and attempt data recovery. I understand this includes connecting the device to diagnostic systems and potentially imaging the data. *
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent2"
                    required
                    checked={formData.consent2}
                    onCheckedChange={(checked) => setFormData({ ...formData, consent2: checked as boolean })}
                  />
                  <Label htmlFor="consent2" className="text-sm font-normal leading-relaxed cursor-pointer">
                    I understand that data recovery is not guaranteed and outcomes depend on the condition of my device. I accept that the diagnosis fee (£49) is non-refundable but will be credited if I proceed with recovery. *
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent3"
                    required
                    checked={formData.consent3}
                    onCheckedChange={(checked) => setFormData({ ...formData, consent3: checked as boolean })}
                  />
                  <Label htmlFor="consent3" className="text-sm font-normal leading-relaxed cursor-pointer">
                    I have read and agree to the{" "}
                    <Link to="/terms" className="text-accent hover:underline">Terms & Conditions</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>. *
                  </Label>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center">
              <Button
                type="submit"
                variant="hero"
                size="xl"
                disabled={!formData.consent1 || !formData.consent2 || !formData.consent3}
              >
                Submit Recovery Request
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                We'll reply quickly with next steps and a rough estimate. No obligation.
              </p>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              Secure submission
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              No obligation
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-accent" />
              We won't proceed without your approval
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
