"use client";

import { cn } from "@/src/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import AuthModal from "./AuthModal";

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "Designer", href: "/designer" },
  { name: "Ready-made", href: "/ready-made" },
  { name: "Order", href: "/order" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Handle auth query param (?auth=login or signup)
  useEffect(() => {
    const auth = searchParams.get("auth");

    if (auth === "login" || auth === "signup") {
      setAuthMode(auth);
      setAuthOpen(true);

      window.history.replaceState(null, "", pathname);
    }
  }, [searchParams, pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6">
      <div className="container mx-auto h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <img src="/images/logo2.png" alt="SewSphere Logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          {NavLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative py-1 transition-colors",
                  isActive
                    ? "text-[#C76B4A] font-medium"
                    : "text-muted-foreground hover:text-[#C76B4A]"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-0 -bottom-[3px] h-[2px] w-full bg-[#C76B4A]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => {
              setAuthMode("login");
              setAuthOpen(true);
            }}
            className="cursor-pointer text-[#C76B4A] border border-[#C76B4A] px-4 py-2 rounded-md text-sm"
          >
            Log In
          </button>

          <button
            onClick={() => {
              setAuthMode("signup");
              setAuthOpen(true);
            }}
            className="cursor-pointer bg-[#C76B4A] text-white px-4 py-2 rounded-md text-sm"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-sm">
            {NavLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "relative py-1",
                    isActive
                      ? "text-[#C76B4A] font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 -bottom-[3px] h-[2px] w-1/4 bg-[#C76B4A]" />
                  )}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={() => {
                  setAuthMode("login");
                  setAuthOpen(true);
                  setOpen(false);
                }}
                className="cursor-pointer text-[#C76B4A] border border-[#C76B4A] px-4 py-2 rounded-md text-sm"
              >
                Log In
              </button>

              <button
                onClick={() => {
                  setAuthMode("signup");
                  setAuthOpen(true);
                  setOpen(false);
                }}
                className="cursor-pointer bg-[#C76B4A] text-white px-4 py-2 rounded-md text-sm"
              >
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        open={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
      />
    </header>
  );
}