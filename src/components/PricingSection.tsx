"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    title: "Starter",
    icon: "solar:rocket-outline",
    price: "$99",
    badge: "FREE",
    cta: "Join Now",
    highlight: false,
    note: "Perfect for individual SDRs/BDRs/AEs",
    features: [
      "Monitor up to 1,000 LinkedIn prospects",
      "Daily digest with top 5 posts",
      "Basic AI comment suggestions",
      "Email delivery & one-click actions",
      "Standard relevance scoring",
    ],
  },
  {
    title: "Professional",
    icon: "fluent:people-community-24-regular",
    price: "$299",
    badge: "FREE",
    cta: "Join Beta Access",
    highlight: true,
    note: "For sales teams & revenue leaders",
    features: [
      "Monitor up to 5,000 LinkedIn prospects",
      "Daily digest with top 10 posts",
      "Advanced AI comment & message suggestions",
      "Custom scoring based on your ICP",
      "Engagement timing optimization",
      "CRM integration (Salesforce, HubSpot)",
      "Team collaboration & shared digests",
      "Priority support",
    ],
  },
  {
    title: "Enterprise",
    icon: "mdi:domain",
    price: "Custom",
    badge: "FREE",
    cta: "Request Access",
    highlight: false,
    note: "For large sales organizations",
    features: [
      "Unlimited LinkedIn prospect monitoring",
      "Custom AI training on your deals & conversations",
      "Multi-team digest customization",
      "Advanced engagement analytics",
      "Custom integrations & API access",
      "Dedicated customer success manager",
      "Custom comment tone & voice training",
      "White-label options",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative w-full bg-background text-foreground py-24 px-4 md:px-10 overflow-hidden"
    >
      {/* Blurry background */}
      <div className="absolute left-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl md:text-5xl font-bold"
      >
        <span className="gradient-text">
          Beta Phase: All Plans Currently FREE
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mt-4 text-muted-foreground max-w-2xl mx-auto"
      >
        Transparent future pricing that scales with your prospect monitoring
        needs. Join our beta now for free access and exclusive benefits.
      </motion.p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn(
              "relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md shadow-md flex flex-col justify-between transition-all hover:border-cyan-400/40",
              plan.highlight && "border-cyan-500/30 ring-1 ring-cyan-500/30"
            )}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                Most Popular
              </span>
            )}

            {/* Plan Header */}
            <div className="mb-6 text-center">
              <div className="flex justify-center mb-4 text-cyan-400">
                <Icon icon={plan.icon} width={40} height={40} />
              </div>
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="text-sm text-muted-foreground">{plan.note}</p>
            </div>

            {/* Price with strike-through */}
            <div className="flex items-center justify-center gap-2 mb-6">
              {/* <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6 }}
                className="absolute h-[2px] bg-red-500 top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-[15deg] w-0"
                aria-hidden
              /> */}
              <span className="text-3xl font-bold text-white relative line-through opacity-60">
                {plan.price}
              </span>
              <span className="text-sm bg-cyan-400 text-black font-semibold px-2 py-0.5 rounded-md z-10">
                {plan.badge}
              </span>
            </div>

            {/* Features */}
            <ul className="space-y-3 text-sm text-muted-foreground mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Icon
                    icon="carbon:checkmark-outline"
                    className="text-cyan-400 mt-1"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="w-full rounded-xl bg-cyan-500 text-black font-semibold py-3 text-sm hover:bg-cyan-400 transition">
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
