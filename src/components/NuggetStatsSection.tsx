"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SpotlightCard from "./Card/SpotlightCard";

const stats = [
  {
    title: "Average Response Rate",
    value: "45%",
    icon: "fluent:mail-multiple-24-filled",
  },
  {
    title: "Daily Opportunities",
    value: "5–10",
    icon: "ph:calendar-check-bold",
  },
  {
    title: "Prospects Per User",
    value: "2,500+",
    icon: "carbon:user-multiple",
  },
];

export default function DripwisesStatsSection() {
  return (
    <section className="relative w-full bg-background text-foreground py-24 px-4 md:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-4xl md:text-5xl font-bold"
      >
        <span className="gradient-text">Dripwises By The Numbers</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="text-muted-foreground text-center max-w-2xl mx-auto mt-4"
      >
        Proven results that drive real growth for modern B2B outreach.
      </motion.p>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <SpotlightCard
            key={index}
            className="rounded-xl p-6 border border-white/10 bg-muted/10 h-full hover:border-cyan-500 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 text-cyan-400 flex items-center justify-center">
                <Icon icon={stat.icon} width={26} height={26} />
              </div>
              <h4 className="text-lg font-semibold text-white">{stat.title}</h4>
            </div>
            <div className="text-4xl font-bold text-white">{stat.value}</div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
