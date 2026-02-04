import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";

export default function PrivacyPage() {
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
            <h1 className="mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      <Section variant="alt">
        <div className="mx-auto max-w-3xl prose prose-slate dark:prose-invert">
          <h2>1. Who We Are</h2>
          <p>
            DataRecover UK ("we", "us", "our") provides data recovery and device repair
            services to individuals and businesses across the United Kingdom. We are
            committed to protecting your privacy and handling your personal data responsibly.
          </p>
          <p>
            <strong>Contact:</strong><br />
            Email: privacy@datarecover.uk<br />
            Address: DataRecover UK, [Address placeholder]<br />
            Phone: 0800 123 4567
          </p>

          <h2>2. What Data We Collect</h2>
          <p>We collect the following types of personal data:</p>
          <ul>
            <li><strong>Contact information:</strong> Name, email address, phone number, postal address</li>
            <li><strong>Device information:</strong> Make, model, capacity, symptoms, and photographs you provide</li>
            <li><strong>Service records:</strong> Case notes, diagnostic reports, recovery logs, communications</li>
            <li><strong>Payment information:</strong> Processed securely through our payment provider (we don't store card details)</li>
            <li><strong>Website usage:</strong> IP address, browser type, pages visited (see Cookie Policy)</li>
          </ul>

          <h2>3. Your Data on Recovered Devices</h2>
          <p>
            <strong>Important:</strong> When you send us a device for recovery, we may access the data stored
            on that device to the extent necessary to perform the recovery service. We do not browse, read,
            or examine the content of your files beyond what is required to verify successful recovery.
          </p>
          <p>
            All recovered data is stored on encrypted systems with access controls. Only assigned technicians
            can access your case. Access is logged for audit purposes.
          </p>

          <h2>4. How We Use Your Data</h2>
          <p>We use your personal data to:</p>
          <ul>
            <li>Provide data recovery and repair services</li>
            <li>Communicate with you about your case</li>
            <li>Process payments</li>
            <li>Improve our services</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            <strong>Legal basis (UK GDPR):</strong> We process your data based on contract performance
            (providing the service you requested), legitimate interests (improving our services), and
            legal compliance.
          </p>

          <h2>5. Data Retention</h2>
          <ul>
            <li><strong>Recovered data:</strong> Retained for 14 days after delivery (or extended if you request), then securely deleted</li>
            <li><strong>Case records:</strong> Retained for 6 years for legal/warranty purposes</li>
            <li><strong>Contact information:</strong> Retained while you have an active relationship with us, or until you request deletion</li>
          </ul>

          <h2>6. Data Sharing</h2>
          <p>We do not sell your personal data. We may share data with:</p>
          <ul>
            <li><strong>Courier services:</strong> To collect/return your device (name, address only)</li>
            <li><strong>Payment processors:</strong> To process payments securely</li>
            <li><strong>Legal authorities:</strong> If required by law or court order</li>
          </ul>

          <h2>7. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent (where applicable)</li>
          </ul>
          <p>
            To exercise these rights, email us at privacy@datarecover.uk. We'll respond within 30 days.
          </p>

          <h2>8. Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your data,
            including encryption, access controls, secure facilities, and staff training. No system
            is 100% secure, but we take data protection seriously.
          </p>

          <h2>9. Complaints</h2>
          <p>
            If you're unhappy with how we handle your data, please contact us first at privacy@datarecover.uk.
            You also have the right to complain to the Information Commissioner's Office (ICO):
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer"> ico.org.uk</a>
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Significant changes will be communicated
            via email or website notice. The "last updated" date at the top indicates the most recent revision.
          </p>

          <div className="mt-12 p-6 bg-secondary/50 rounded-xl">
            <p className="text-sm text-muted-foreground mb-4">
              Questions about this policy?
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
