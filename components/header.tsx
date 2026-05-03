"use client"

import { Button } from "@/components/ui/button"
import { Pill, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl">
          <Image src="/logo.png" alt="PillTaken" width={36} height={36} style={{ height: 'auto' }} />
          <span>PillTaken</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Button size="sm" className="font-semibold" asChild>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              iOS
            </a>
          </Button>
          <Button size="sm" variant="outline" className="font-semibold" asChild>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              Android
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-2 w-full font-semibold" asChild>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <Pill className="mr-2 h-4 w-4" />
                Download for iOS
              </a>
            </Button>
            <Button className="w-full font-semibold" variant="outline" asChild>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                Download for Android
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
