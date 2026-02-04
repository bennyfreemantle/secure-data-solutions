"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import Link from "next/link";

export default function CookiesPage() {
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
            <h1 className="mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      <Section variant="alt">
        <div className="mx-auto max-w-3xl prose prose-slate dark:prose-invert">
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit websites.
            They help websites remember your preferences and understand how you use the site.
          </p>

          <h2>How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function. They enable basic features
            like page navigation and form submissions. You cannot opt out of these cookies.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>session_id</td>
                <td>Maintains your session while using the site</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>csrf_token</td>
                <td>Security - prevents cross-site request forgery</td>
                <td>Session</td>
              </tr>
            </tbody>
          </table>

          <h3>Analytics Cookies</h3>
          <p>
            We use analytics cookies to understand how visitors use our website. This helps
            us improve the site. These cookies collect anonymous information.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga</td>
                <td>Google Analytics - distinguishes users</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>_ga_*</td>
                <td>Google Analytics - maintains session state</td>
                <td>2 years</td>
              </tr>
            </tbody>
          </table>

          <h3>Preference Cookies</h3>
          <p>
            These cookies remember your preferences to provide a better experience.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cookie_consent</td>
                <td>Remembers your cookie preferences</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>

          <h2>Managing Cookies</h2>
          <p>
            You can control cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul>
            <li>View what cookies are stored and delete them individually</li>
            <li>Block third-party cookies</li>
            <li>Block cookies from specific sites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p>
            Note that blocking cookies may affect website functionality. Essential cookies
            cannot be disabled without breaking core features.
          </p>

          <h2>Third-Party Cookies</h2>
          <p>
            We use Google Analytics to understand website usage. Google may set cookies
            on your device. See{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google's privacy policy
            </a>{" "}
            for more information.
          </p>

          <h2>Updates to This Policy</h2>
          <p>
            We may update this cookie policy from time to time. The "last updated" date
            at the top indicates the most recent revision.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about our use of cookies? Contact us at privacy@datarecover.uk.
          </p>

          <div className="mt-12 p-6 bg-secondary/50 rounded-xl">
            <p className="text-sm text-muted-foreground mb-4">
              Want to learn more about how we protect your data?
            </p>
            <Link href="/privacy" className="text-accent hover:underline font-medium">
              Read our Privacy Policy →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
