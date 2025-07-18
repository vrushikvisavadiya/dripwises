"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { StarBorder } from "./StarBorder";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Daily Metrics", href: "#daily-metrics" },
  // { label: "FAQs", href: "#faqs" },
  // { label: "Beta", href: "#request-beta" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-md py-4"
          : "py-6"
      )}
    >
      <div className="flex items-center justify-between px-4 md:px-10 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="Dripwises Logo"
            width={150}
            height={36}
            className="object-contain"
          />
          {/* <span className="text-lg font-bold gradient-text">Dripwises</span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {/* <StarBorder href="#request-beta" className="ml-4 p-0">
            Join Beta
          </StarBorder> */}
          <a
            href="#"
            className="inline-block px-6 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition-all duration-300 shadow-md"
          >
            Join Beta
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md border border-white/10 hover:bg-white/5 transition"
          aria-label="Toggle Menu"
        >
          <Icon
            icon={menuOpen ? "mdi:close" : "mdi:menu"}
            className="text-xl text-foreground"
          />
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-white/10 px-4 pb-6 pt-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <StarBorder href="#request-beta" className="mt-2">
              Join Beta
            </StarBorder>
          </div>
        </div>
      )}
    </header>
  );
}
