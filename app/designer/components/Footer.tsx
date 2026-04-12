"use client";

import { Linkedin, Instagram, Facebook } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: TikTokIcon, href: "#", label: "TikTok" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: XIcon, href: "#", label: "X" },
];

const footerLinks = [
  {
    heading: "For Client",
    headingColor: "text-[#c4684a]",
    links: ["Find Designers", "Browse Marketplace", "How it Works"],
    linkColor: "text-[#c4684a] hover:underline",
  },
  {
    heading: "For Designer",
    headingColor: "text-gray-900",
    links: ["Join as Designer", "Verification Process", "Designer Community"],
    linkColor: "text-gray-500 hover:text-gray-800",
  },
  {
    heading: "Company",
    headingColor: "text-gray-900",
    links: ["About Us", "Careers", "Contact", "Blog"],
    linkColor: "text-gray-500 hover:text-gray-800",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#f7f3f1] ">
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-6">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">
          {/* Brand column */}
          <div className="lg:w-64 flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="images/logoH.png"
                alt="SewSphere logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-extrabold text-gray-900">
                Sew<span className="text-[#c4684a]">Sphere</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-xs text-gray-500 leading-relaxed max-w-[220px]">
              Building trust in custom fashion through clarity, structure, and
              transparency. For designers and clients who deserve better
              systems.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-md border flex items-center justify-center text-[#c4684a]  border-[#c4684a] hover:text-[#c4684a] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="flex gap-10 sm:gap-16 flex-wrap">
            {footerLinks.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <h4 className={`text-sm font-semibold ${col.headingColor}`}>
                  {col.heading}
                </h4>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className={`text-xs transition-colors ${col.linkColor}`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            © 2026 SewSphere. Building in public, one stitch at a time.
          </p>
          <p className="text-xs text-gray-400">
            Made with care for the fashion community
          </p>
        </div>
      </div>
    </footer>
  );
}
