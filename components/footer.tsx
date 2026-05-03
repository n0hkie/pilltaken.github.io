import { Pill } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Pill className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl">PillTaken</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/support" className="text-muted-foreground transition-colors hover:text-foreground">
              Support
            </Link>
            <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} PillTaken. All rights reserved.
          </p>
          <p className="mt-2">
            Made with care for your health and privacy.
          </p>
        </div>
      </div>
    </footer>
  )
}
