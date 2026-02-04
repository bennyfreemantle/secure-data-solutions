import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Shipping & Security",
    faqs: [
      {
        question: "How safe is shipping my drive?",
        answer: "Very safe when properly packed. We provide detailed packing instructions including anti-static protection and padding guidelines. We recommend tracked, insured shipping (Royal Mail Special Delivery or similar). Drives are logged and photographed on arrival. In years of operation, we've had zero transit damage issues from properly packed devices.",
      },
      {
        question: "Do you look at my files?",
        answer: "We only access files to the extent necessary to verify recovery success. We don't browse, read, or examine personal content. Our process focuses on recovering the file structure and verifying that files are readable—not reviewing their contents. All staff sign confidentiality agreements and access is logged.",
      },
      {
        question: "How is my data kept secure?",
        answer: "Your data is stored on encrypted, access-controlled systems in our secure facility. Access is limited to assigned technicians only. Recovered data is transferred to encrypted external media for return. After your retention period (14 days standard), all data is securely wiped using certified methods.",
      },
      {
        question: "Will you return my device?",
        answer: "Yes, always. Your original device is returned via tracked, insured shipping regardless of recovery outcome. If the device is a complete loss and not worth returning (rare cases like severe fire damage), we'll discuss disposal options with you first—we never discard anything without consent.",
      },
    ],
  },
  {
    title: "Recovery Process",
    faqs: [
      {
        question: "What if you can't recover anything?",
        answer: "You only pay the £49 diagnosis fee. We never charge for unsuccessful recovery attempts. Before any chargeable work begins, you'll receive a detailed quote and must approve it. If we proceed but ultimately can't recover usable data, you pay nothing beyond the diagnosis fee.",
      },
      {
        question: "How long does recovery take?",
        answer: "Diagnosis: 24-48 hours (same-day for emergency queue). Tier 1 (logical) recovery: 1-3 business days. Tier 2 (degraded media): 2-5 business days. Tier 3 (advanced): 5-10 business days. Complex cases may take longer, but we'll keep you updated throughout.",
      },
      {
        question: "Can you recover encrypted drives?",
        answer: "We can recover data from encrypted drives if you provide the password/key. We cannot break encryption—if you've lost the password, recovery may not be possible. For BitLocker, we need the recovery key. For FileVault, we need the account password. Let us know during intake if encryption is involved.",
      },
      {
        question: "What should I do immediately after failure?",
        answer: "Stop using the device immediately. Don't run disk repair tools (CHKDSK, Disk Utility). Don't attempt DIY recovery software on physically failing drives. Don't open the drive. Don't freeze it (this myth causes damage). Power it off, unplug it, and contact us. Every power-on of a failing drive risks further damage.",
      },
      {
        question: "Do you recover from SSDs and NVMe drives?",
        answer: "Yes, we specialise in modern SSD and NVMe recovery. These require completely different techniques from traditional hard drives. We handle controller failures, NAND issues, and logical corruption. Note that TRIM may have permanently erased deleted data on SSDs—the sooner you contact us, the better.",
      },
    ],
  },
  {
    title: "Business Services",
    faqs: [
      {
        question: "Do you offer business SLAs?",
        answer: "Yes, we offer priority and emergency queue options with guaranteed assessment timeframes. For ongoing relationships, we can discuss tailored SLA arrangements. Contact us to discuss your business needs—we understand that downtime costs money.",
      },
      {
        question: "Can you recover from RAID arrays?",
        answer: "Yes, we handle RAID 0, 1, 5, 6, and 10 configurations as well as NAS devices. RAID recovery is priced as Tier 2 or 3 depending on complexity. We can work from multiple drives shipped together or individually. Include RAID configuration details if known.",
      },
      {
        question: "Do you provide forensic services?",
        answer: "Yes, we offer optional forensic-grade handling including write-blocked acquisition, hash verification, chain of custody documentation, and technical reporting. This is suitable for legal proceedings, HR investigations, and compliance requirements. Add £200 to any recovery tier.",
      },
      {
        question: "Can you collect from our office?",
        answer: "Yes, we can arrange courier collection for £25. This includes tracked, insured pickup from your address. Particularly useful for businesses with multiple devices or urgent requirements. Select this option during intake or contact us to arrange.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    faqs: [
      {
        question: "How does your pricing work?",
        answer: "Simple: £49 diagnosis fee upfront (credited if you proceed), then tiered recovery pricing from £149-£499+ depending on complexity. We determine the tier after diagnosis and provide a detailed quote before any work. You approve or decline—no obligation. If we can't recover data, you only pay the diagnosis fee.",
      },
      {
        question: "Are there any hidden fees?",
        answer: "No. Your quote includes recovery work, encrypted return media, and tracked return shipping. Add-ons (priority queue, courier collection, forensic package) are clearly priced upfront. The only variable is the recovery tier, confirmed after diagnosis.",
      },
      {
        question: "Do you offer payment plans?",
        answer: "For larger recovery projects (typically £500+), we can discuss payment arrangements. Contact us to discuss your situation. We understand data loss often comes at inconvenient times.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept bank transfer (BACS), credit/debit cards, and PayPal. Payment is due after you approve the quote and before we return your data. The diagnosis fee is payable when you ship your device.",
      },
    ],
  },
];

export default function FAQPage() {
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
            <h1 className="mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our data recovery service.
              Can't find your answer? <Link to="/contact" className="text-accent hover:underline">Get in touch</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      {faqCategories.map((category, categoryIndex) => (
        <Section key={category.title} variant={categoryIndex % 2 === 0 ? "alt" : "default"}>
          <SectionHeader title={category.title} align="left" />
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {category.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`${category.title}-${index}`}
                    className="card-elevated border-0 px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section variant="alt">
        <div className="text-center">
          <h2 className="mb-4">Still Have Questions?</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            We're here to help. Get in touch and we'll respond promptly.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button variant="accent" size="xl">
                Contact Us
              </Button>
            </Link>
            <Link to="/start-recovery">
              <Button variant="outline" size="xl">
                Start a Recovery
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
