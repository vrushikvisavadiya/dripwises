"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const faqs = [
  {
    question: "How does Dripwises find relevant leads on LinkedIn?",
    answer:
      "Dripwises uses AI to monitor posts and discussions on LinkedIn where potential customers are actively talking about problems your business solves. No cold outreach—just relevant opportunities.",
  },
  {
    question:
      "What makes Dripwises different from traditional prospecting tools?",
    answer:
      "Most tools automate outreach. Dripwises flips the script by surfacing leads who are already expressing intent or interest—so your responses feel helpful, not intrusive.",
  },
  {
    question: "Do I need to install a Chrome extension?",
    answer:
      "No extensions required. Dripwises works in the background and delivers everything through a simple daily digest at 7 AM.",
  },
  {
    question: "Is Dripwises free to use during beta?",
    answer:
      "Yes, it’s completely free during the beta program. No credit card required to sign up.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-4 md:px-10 bg-background text-foreground">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4"
      >
        <span className="gradient-text">FAQs</span>
      </motion.h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Get answers to the most common questions about Dripwises and our private
        beta.
      </p>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-muted/10 p-4 md:p-6 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left group"
              >
                <span className="text-lg md:text-xl font-medium text-white group-hover:text-cyan-400 transition">
                  {faq.question}
                </span>
                <Icon
                  icon={isActive ? "mdi:chevron-up" : "mdi:chevron-down"}
                  className="text-white/70 group-hover:text-cyan-400"
                  width={26}
                />
              </button>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground mt-4 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
