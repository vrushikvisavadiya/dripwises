"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SpotlightCard from "./Card/SpotlightCard";

const oldWay = [
  {
    title: "Lost in the Noise",
    icon: "mdi:volume-off",
    description:
      "Endless scrolling through irrelevant LinkedIn content with no clear opportunities",
  },
  {
    title: "Generic Outreach",
    icon: "fluent:chat-off-24-regular",
    description:
      "Automated messages that get ignored, burning bridges instead of building relationships",
  },
  {
    title: "Scaling Challenges",
    icon: "carbon:autoscaling",
    description:
      "Unable to maintain personalized interactions while growing your prospecting efforts",
  },
];

const DripwisesWay = [
  {
    title: "Targeted Opportunities",
    icon: "solar:target-bold",
    description:
      "AI identifies posts explicitly mentioning problems your business solves",
  },
  {
    title: "Authentic Engagement",
    icon: "ph:handshake",
    description:
      "Stand out through personalized, meaningful interactions with genuine prospects",
  },
  {
    title: "Real-time Relevance",
    icon: "fluent:clock-alarm-24-regular",
    description: "Immediately engage with timely opportunities surfaced daily",
  },
];

export default function ProspectingProblemSection() {
  return (
    <section className="relative w-full bg-background text-foreground py-24 px-4 md:px-10 overflow-hidden">
      {/* Blurry Background Effects */}
      <div className="absolute left-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-4xl md:text-5xl font-bold"
      >
        <span className="gradient-text">The LinkedIn Prospecting Problem</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="text-muted-foreground text-center max-w-2xl mx-auto mt-4"
      >
        Traditional LinkedIn prospecting is broken. Here's how Dripwises fixes
        it.
      </motion.p>

      {/* Cards Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Old Way */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white">
            The Old Way
          </h3>
          <div className="flex flex-col gap-6">
            {oldWay.map((item, index) => (
              <SpotlightCard
                key={index}
                className="rounded-xl p-6 border border-white/10 bg-muted/10 h-full hover:border-cyan-500 transition-all duration-300 flex"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-white/10 text-cyan-400">
                    <Icon icon={item.icon} width={24} height={24} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-semibold mb-1 text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Dripwises Way */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white">
            The Dripwises Way
          </h3>
          <div className="flex flex-col gap-6">
            {DripwisesWay.map((item, index) => (
              <SpotlightCard
                key={index}
                className="rounded-xl p-6 border border-white/10 bg-muted/10 h-full hover:border-cyan-500 transition-all duration-300 flex"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-white/10 text-cyan-400">
                    <Icon icon={item.icon} width={24} height={24} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-semibold mb-1 text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
