"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Spotlight, GridBackground } from "./Spotlight";
import { StarBorder } from "./StarBorder";

export function HeroSection() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Turn LinkedIn into Your <br />
        <span className="gradient-text">Best Source of Warm Leads</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
        className="mt-6 text-center text-lg text-muted md:text-xl"
      >
        AI that finds your next customers hiding in LinkedIn conversations.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        className="text-md mt-2 text-center text-muted md:text-lg"
      >
        Get qualified prospects with comment suggestions delivered to your inbox
        every morning.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
        className="pt-6 text-center"
      >
        <StarBorder href="/get-started">
          Get 15 days of Warm Leads Free
        </StarBorder>
        <p className="text-sm text-muted mt-2">
          No credit card & no LinkedIn credentials or cookies required
        </p>
      </motion.div>
    </LampContainer>
  );
}

function LampContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative min-h-[calc(100vh-80px)] w-full pt-[120px] flex items-start justify-center overflow-hidden bg-background",
        className
      )}
    >
      <Spotlight />
      <GridBackground />
      <div className="relative z-50 flex flex-col items-center text-center px-5 max-w-4xl">
        {children}
      </div>
    </div>
  );
}
