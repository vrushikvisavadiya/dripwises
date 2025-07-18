"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const features = [
  {
    icon: "mdi:lock-outline",
    title: "Invitation-only access",
    description: "Exclusive beta program",
  },
  {
    icon: "fluent:clock-24-regular",
    title: "Daily digest delivery",
    description: "Every morning at 7 AM",
  },
  {
    icon: "mdi:credit-card-off-outline",
    title: "No credit card required",
    description: "Free during beta",
  },
];

export default function JoinBetaSection() {
  return (
    <section className="relative w-full bg-muted/5 text-foreground py-24 px-4 md:px-10">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl md:text-5xl font-bold"
      >
        <span className="gradient-text">
          Stop Cold Outreach. Start Relationship Building.
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-muted-foreground text-center max-w-2xl mx-auto mt-4 text-lg"
      >
        Join our invitation-only beta and be among the first sales professionals
        to turn LinkedIn monitoring into their most powerful revenue channel.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-center mt-8"
      >
        <a
          href="#"
          className="inline-block px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition-all duration-300 shadow-md"
        >
          Request Beta Invitation
        </a>
      </motion.div>

      {/* Feature List */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 border border-white/10 bg-muted/10 rounded-xl hover:border-cyan-500 transition-all duration-300"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-white/10 text-cyan-400">
              <Icon icon={item.icon} width={26} height={26} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              <p className="text-muted-foreground text-sm mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
