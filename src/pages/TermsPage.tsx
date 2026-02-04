import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";

export default function TermsPage() {
  const lastUpdated = "1 February 2026";

  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl"
          >
            <h1 className="mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      <Section variant="alt">
        <div className="mx-auto max-w-3xl prose prose-slate dark:prose-invert">
          <h2>1. Introduction</h2>
          <p>
            These terms and conditions govern your use of DataRecover UK's data recovery and
            device repair services. By submitting a recovery request or using our services,
            you agree to these terms.
          </p>

          <h2>2. Service Description</h2>
          <p>
            DataRecover UK provides data recovery and device repair services. We attempt to
            recover data from damaged, corrupted, or failing storage media. <strong>Recovery is
            not guaranteed</strong>—outcomes depend on the condition of your device.
          </p>

          <h2>3. Diagnosis and Quotation</h2>
          <ul>
            <li>A non-refundable diagnosis fee (currently £49) is payable when you submit a device</li>
            <li>The diagnosis fee is credited against recovery costs if you proceed</li>
            <li>After diagnosis, we provide a quote for recovery work</li>
            <li>No recovery work begins without your written approval (email confirmation is sufficient)</li>
            <li>Quotes are estimates based on initial diagnosis—final costs may vary if additional issues are discovered</li>
          </ul>

          <h2>4. No Guarantee of Recovery</h2>
          <p>
            <strong>Important:</strong> We do not guarantee data recovery. Recovery success depends
            on factors including device condition, damage type, and data integrity. We provide honest
            assessments and never promise outcomes we cannot deliver.
          </p>
          <p>
            If we cannot recover usable data after you approve a quote, you pay only the diagnosis fee.
            "Usable data" means files you actually want—not fragments or corrupted files.
          </p>

          <h2>5. Your Responsibilities</h2>
          <ul>
            <li>You warrant that you own the device or have authorisation to request recovery</li>
            <li>You warrant that the data is lawfully held and you have the right to access it</li>
            <li>You must pack devices according to our guidelines to prevent transit damage</li>
            <li>You must provide accurate contact and device information</li>
            <li>You must respond to our communications in a timely manner</li>
          </ul>

          <h2>6. Liability</h2>
          <p>
            <strong>Device damage:</strong> While we take great care, data recovery may require
            techniques that could cause additional damage to already-failing media. By submitting
            your device, you acknowledge this risk. We are not liable for damage inherent to the
            recovery process.
          </p>
          <p>
            <strong>Data loss:</strong> We are not liable for any data that cannot be recovered,
            or for any consequential loss arising from data loss or recovery delays.
          </p>
          <p>
            <strong>Maximum liability:</strong> Our total liability is limited to the fees you
            paid for the specific service in question.
          </p>

          <h2>7. Data Handling</h2>
          <ul>
            <li>We access your data only to the extent necessary for recovery</li>
            <li>We do not browse, examine, or copy your files beyond what recovery requires</li>
            <li>Recovered data is stored on encrypted systems with access controls</li>
            <li>Data is retained for 14 days after delivery, then securely deleted</li>
            <li>See our <Link to="/privacy">Privacy Policy</Link> for full details</li>
          </ul>

          <h2>8. Payment</h2>
          <ul>
            <li>Diagnosis fee is payable when submitting your device</li>
            <li>Recovery fees are payable before data/device return</li>
            <li>We accept bank transfer, card payments, and PayPal</li>
            <li>All prices include VAT where applicable</li>
          </ul>

          <h2>9. Device Return</h2>
          <p>
            Your device is returned via tracked, insured shipping. If a device is uncollectable
            (you don't respond to our communications for 60 days), we may dispose of it after
            written notice. Recovered data is deleted after the retention period.
          </p>

          <h2>10. Cancellation</h2>
          <p>
            You may cancel at any point before approving a recovery quote. The diagnosis fee is
            non-refundable. After approving a quote, cancellation may incur a charge for work
            already completed.
          </p>

          <h2>11. Intellectual Property</h2>
          <p>
            All content on this website (text, images, design) is owned by DataRecover UK.
            You may not copy or reproduce it without permission.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These terms are governed by English law. Disputes are subject to the exclusive
            jurisdiction of the English courts.
          </p>

          <h2>13. Changes</h2>
          <p>
            We may update these terms from time to time. The current version always applies
            to new submissions. Existing cases continue under the terms in effect at submission.
          </p>

          <h2>14. Contact</h2>
          <p>
            Questions about these terms? Contact us at legal@datarecover.uk or 0800 123 4567.
          </p>

          <div className="mt-12 p-6 bg-secondary/50 rounded-xl">
            <p className="text-sm text-muted-foreground mb-4">
              Questions about these terms?
            </p>
            <Link to="/contact" className="text-accent hover:underline font-medium">
              Contact us →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
