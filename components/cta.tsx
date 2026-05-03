import { Button } from "@/components/ui/button"
import { Pill, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CTA() {
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground md:px-12 md:py-20">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
              <Image src="/logo.png" alt="PillTaken" width={40} height={40} style={{ height: 'auto' }} />
            </div>

            {/* Headline */}
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Start Your Healthy Habit Today
            </h2>

            {/* Subheadline */}
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Download PillTaken and take control of your medication routine. It&apos;s free, private, and incredibly simple.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold" asChild>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <Pill className="mr-2 h-5 w-5" />
                  Download for iOS
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold" asChild>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  Download for Android
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-8 text-lg font-semibold text-primary-foreground hover:bg-white/10 hover:text-primary-foreground" asChild>
                <Link href="/learn-more">
                  View Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No account required
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% free forever
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Works offline
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
