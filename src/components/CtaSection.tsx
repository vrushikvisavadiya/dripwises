"use client";

import { motion } from "framer-motion";
import { StarBorder } from "./StarBorder";

export default function CtaSection() {
  return (
    <section className="relative w-full bg-background text-foreground py-24 px-4 md:px-10 overflow-hidden text-center">
      {/* Decorative blurry background circles */}
      <div className="absolute left-[-10%] top-0 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-[-10%] bottom-0 h-72 w-52  rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Decorative bordered box wrapper */}
      <div className="relative z-10 border border-white/10 bg-muted/5 backdrop-blur-md rounded-2xl p-10 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto"
        >
          <h2>
            <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Ready to turn LinkedIn into your top sales channel?
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-muted-foreground text-base md:text-lg"
        >
          Join 200+ enterprise sales teams already building authentic
          relationships at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="mt-8"
        >
          <StarBorder href="#request-access" className="inline-block">
            Join the Beta
          </StarBorder>
        </motion.div>
      </div>
    </section>
  );
}
