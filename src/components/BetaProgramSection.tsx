"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { StarBorder } from "./StarBorder";

export default function BetaProgramSection() {
  const perks = [
    { icon: "mdi:check-circle-outline", text: "Full feature access" },
    { icon: "mdi:account-tie", text: "Direct founder support" },
    { icon: "mdi:percent-circle-outline", text: "Lifetime 40% discount" },
    { icon: "mdi:rocket-launch-outline", text: "Shape product roadmap" },
  ];

  return (
    <section className="relative w-full bg-background text-foreground py-24 px-4 md:px-10 overflow-hidden text-center">
      {/* Decorative blur blobs */}
      <div className="absolute left-[-15%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-[-15%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto"
      >
        <span className="gradient-text">Exclusive Beta Program Benefits</span>
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
      >
        Join our invitation-only beta and get unprecedented access to the future
        of LinkedIn relationship building. No credit card required, full feature
        access, and exclusive perks.
      </motion.p>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto"
      >
        {perks.map((perk, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center gap-3 text-base md:text-lg"
          >
            <Icon
              icon={perk.icon}
              className="text-cyan-400 flex-shrink-0"
              width={24}
              height={24}
            />
            <span>{perk.text}</span>
          </div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="mt-10"
      >
        <StarBorder href="#request-beta" className="inline-block">
          Request Beta Invitation
        </StarBorder>
      </motion.div>
    </section>
  );
}
