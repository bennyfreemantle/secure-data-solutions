"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories } from "@/data/faq";

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
              Can't find your answer? <Link href="/contact" className="text-accent hover:underline">Get in touch</Link>.
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
            <Link href="/contact">
              <Button variant="accent" size="xl">
                Contact Us
              </Button>
            </Link>
            <Link href="/start-recovery">
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
