"use client"

import { cn } from "@/src/lib/utils"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import AuthModal from "./AuthModal"

const NavLinks = [
    { name: "Explore Designers", href: "#Explore" },
    { name: "Marketplace", href: "#Marketplace" },
    { name: "How It Works", href: "#how" },
    { name: "Become a Designer", href: "#designer" },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [activeHash, setActiveHash] = useState("")
    const [authOpen, setAuthOpen] = useState(false)
    const [authMode, setAuthMode] = useState<"login" | "signup">("login")

    useEffect(() => {
        setActiveHash(window.location.hash || "#Explore")
    }, [])

    const handleNavClick = (href: string) => {
        const id = href.replace("#", "")
        const element = document.getElementById(id)

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }

        setActiveHash(href)
        setOpen(false)

        // Update URL without jump
        window.history.pushState(null, "", href)
    }


    return (
        <header className="fixed text-black top-0 left-0 right-0 z-50 bg-white shadow-md px-6">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">

                {/* Logo */}
                <img src="/images/logo2.png" alt="SewSphere Logo" />

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 text-sm">
                    {NavLinks.map((link, index) => {
                        const isActive = activeHash === link.href

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={cn(
                                    "relative py-1 transition-colors" ,
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
                        )
                    })}
                </nav>

                {/* Desktop CTA */}
                <div className="flex gap-2">
                    <button
                        onClick={() => {
                            setAuthMode("login")
                            setAuthOpen(true)
                        }}
                        className="hidden md:inline-flex cursor-pointer text-[#C76B4A] border border-[#C76B4A]-foreground px-4 py-2 rounded-md text-sm"
                    >
                        Log In
                    </button>

                    <button
                        onClick={() => {
                            setAuthMode("signup")
                            setAuthOpen(true)
                        }}
                        className="hidden md:inline-flex cursor-pointer bg-[#C76B4A] text-white -foreground px-4 py-2 rounded-md text-sm"
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
                <div className="md:hidden bg-white  border-t">
                    <nav className="flex flex-col px-6 py-4 space-y-4 text-sm">
  

                        {NavLinks.map((link, index) => {
                            const isActive = activeHash === link.href

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className={cn(
                                        "relative py-1 transition-colors mx-auto",
                                        isActive
                                            ? "text-[#C76B4A] font-medium"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {link.name}

                                    {isActive && (
                                        <span className="absolute left-0 -bottom-[3px] h-[2px] w-full bg-[#C76B4A]" />
                                    )}
                                </Link>
                            )
                        })}

                      <div className="flex flex-col gap-4">
                    <button
                        onClick={() => {
                            setAuthMode("login")
                            setAuthOpen(true)
                        }}
                        className="md:hidden cursor-pointer text-[#C76B4A] border border-[#C76B4A]-foreground px-4 py-2 rounded-md text-sm"
                    >
                        Log In
                    </button>

                    <button
                        onClick={() => {
                            setAuthMode("signup")
                            setAuthOpen(true)
                        }}
                        className="md:hidden cursor-pointer bg-[#C76B4A] text-white -foreground px-4 py-2 rounded-md text-sm"
                    >
                        Sign Up
                    </button>
                </div>
                    </nav>
                </div>
            )}

            <AuthModal
                open={authOpen}
                mode={authMode}
                onClose={() => setAuthOpen(false)}
            />
        </header>
    )
}