import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + Description */}
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image
              src="/assets/logo.png"
              alt="Dripwises Logo"
              width={150}
              height={36}
              className="object-contain"
            />
            {/* <span className="text-lg font-semibold text-foreground">
              Dripwises
            </span> */}
          </Link>
          <p className="text-sm leading-relaxed">
            The AI-powered tool that discovers golden nuggets of information
            across your platforms.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-foreground font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#features" className="hover:text-foreground">
                Features
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="hover:text-foreground">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-foreground">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#use-cases" className="hover:text-foreground">
                Use Cases
              </Link>
            </li>
            <li>
              <Link href="#sample-digest" className="hover:text-foreground">
                Sample Digest
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-foreground font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-foreground">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground">
                API
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-foreground font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-muted-foreground space-y-1">
        <div>
          © 2025 Dripwises. All rights reserved.{" "}
          <Link href="#" className="hover:text-foreground">
            Privacy Policy
          </Link>{" "}
          ·{" "}
          <Link href="#" className="hover:text-foreground">
            Terms of Service
          </Link>{" "}
          ·{" "}
          <Link href="#" className="hover:text-foreground">
            Cookies
          </Link>
        </div>
        <div>
          Made with <span className="text-red-500">❤️</span> by{" "}
          <Link
            href="https://www.vrushikvisavadiya.com/"
            className="hover:text-foreground font-medium"
          >
            Vrushik Visavadiya
          </Link>
        </div>
      </div>
    </footer>
  );
}
