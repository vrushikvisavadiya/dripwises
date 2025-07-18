"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import SpotlightCard from "./Card/SpotlightCard";

const features = [
  {
    title: "Uncover Buying Signals",
    description:
      "Find prospects actively discussing problems your business solves.",
    icon: "ph:chart-line-duotone",
  },
  {
    title: "Build Your Brand",
    description:
      "Join relevant discussions to establish your authority and generate inbound.",
    icon: "ph:megaphone-duotone",
  },
  {
    title: "Engage Smarter, Not Harder",
    description:
      "Comment in seconds with context-aware, AI-powered suggestions.",
    icon: "ph:lightning-duotone",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="w-full bg-background text-foreground py-20 px-4 md:px-10"
      id="features"
    >
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 + index * 0.15,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <SpotlightCard className=" border border-cyan-400/30  p-6 rounded-2xl text-center shadow-md">
              <div className="flex items-center justify-center mb-4">
                <Icon
                  icon={feature.icon}
                  className="text-cyan-400"
                  width="36"
                  height="36"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
