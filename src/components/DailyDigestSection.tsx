"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";

const digests = [
  {
    name: "Aarav Mehta, Product Lead",
    quote:
      "Imagine automating your outreach while enjoying a beach vacation 🌴🤖",
    reason:
      "Increased conversion rates through smart timing and personalization.",
    response:
      "Impressive! How are you ensuring message quality with automation?",
    likes: 102,
    comments: 17,
    link: "#",
    match: "5/5",
  },
  {
    name: "Riya Kapoor, Growth Strategist",
    quote:
      "Just tested this AI assistant — it cut our lead response time in half.",
    reason: "Time savings and faster qualification for high-priority leads.",
    response: "Nice! How do you handle lead scoring across different regions?",
    likes: 76,
    comments: 9,
    link: "#",
    match: "4/5",
  },
  {
    name: "Dev Jain, Tech Founder",
    quote: "From cold DMs to warm intros — this tool is changing the game.",
    reason: "Warm outreach strategies that improve engagement rate.",
    response:
      "Curious — is there a fallback flow if AI-generated messages fail?",
    likes: 142,
    comments: 34,
    link: "#",
    match: "4.5/5",
  },
];

export default function DailyDigestSection() {
  return (
    <section
      id="daily-digest"
      className="bg-background text-white py-24 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Sticky Content */}
        <div className="md:sticky md:top-64 self-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 gradient-text"
          >
            🔥 Daily Digest
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground max-w-md leading-relaxed"
          >
            Stay ahead of your network. Dripwises AI scans your space and serves
            you the most relevant updates — with suggested replies.
          </motion.p>
        </div>

        {/* Right Cards */}
        <div className="space-y-10 pr-2">
          {digests.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#0F0F11] border border-white/10 rounded-xl p-6 shadow hover:shadow-lg transition space-y-4"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <div className="text-sm text-yellow-400 flex items-center gap-1">
                  <Icon
                    icon="mdi:star-check-outline"
                    className="text-yellow-400"
                  />
                  Match: {item.match}
                </div>
              </div>

              <p className="italic text-muted-foreground text-sm">
                “{item.quote}”
              </p>

              <div className="space-y-1 text-sm">
                <p>
                  <span className="text-cyan-400 font-medium">
                    <Icon icon="ph:sparkle" className="inline-block mr-1" />
                    Why This Matters:
                  </span>{" "}
                  {item.reason}
                </p>
                <p>
                  <span className="text-yellow-400 font-medium">
                    <Icon
                      icon="ph:chat-circle-dots"
                      className="inline-block mr-1"
                    />
                    Suggested Reply:
                  </span>{" "}
                  “{item.response}”
                </p>
              </div>

              <div className="flex justify-between text-xs text-muted-foreground pt-2 border-t border-white/10 mt-4">
                <span className="flex gap-4 items-center">
                  <span className="flex items-center gap-1">
                    <Icon icon="mdi:thumb-up-outline" />
                    {item.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon icon="mdi:comment-outline" />
                    {item.comments}
                  </span>
                </span>

                <Link
                  href={item.link}
                  className="flex items-center gap-1 text-cyan-400 hover:underline"
                >
                  <Icon icon="mdi:linkedin" />
                  View Post
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
