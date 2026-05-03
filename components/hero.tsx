"use client"

import { Button } from "@/components/ui/button"
import { Pill, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-32 md:pt-32 md:pb-40">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-5xl">
        {/* Pill badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Privacy-first. No account required.</span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="overflow-visible text-balance text-center text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Never Forget a{" "}
          <span className="relative inline-block pb-5">
            <span className="relative z-10 text-primary">Pill</span>
            <svg
              className="absolute -bottom-0 left-0 h-5 w-full overflow-visible text-primary/30"
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 14 Q 50 4, 100 14 Q 150 24, 200 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </span>{" "}
          Again
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-balance text-center text-lg text-muted-foreground md:text-xl">
          Track your daily medications and vitamins with a simple tap. No cloud, no accounts — just you and your healthy routine.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30" asChild>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <Pill className="mr-2 h-5 w-5" />
              Download for iOS
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold" asChild>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              Download for Android
            </a>
          </Button>
          <Button size="lg" variant="ghost" className="h-14 px-8 text-lg font-semibold" asChild>
            <Link href="/learn-more">Learn More</Link>
          </Button>
        </div>

        {/* App preview mockups */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            {/* Phone frames with app screenshots */}
            <div className="flex items-end justify-center gap-4 md:gap-8">
              {/* Left phone - Calendar */}
              <div className="relative hidden -rotate-6 transform rounded-[2.5rem] bg-card p-2 shadow-2xl transition-transform duration-300 hover:-rotate-3 md:block">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src="/screenshot-calendar-cp.png"
                    alt="PillTaken Calendar View"
                    className="h-[400px] w-auto object-cover"
                  />
                </div>
              </div>

              {/* Center phone - Medications */}
              <div className="relative z-10 rounded-[2.5rem] bg-card p-2 shadow-2xl">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src="/screenshot-medications-cp.png"
                    alt="PillTaken Medications List"
                    className="h-[450px] w-auto object-cover md:h-[500px]"
                  />
                </div>
              </div>

              {/* Right phone - Add Medication */}
              <div className="relative hidden rotate-6 transform rounded-[2.5rem] bg-card p-2 shadow-2xl transition-transform duration-300 hover:rotate-3 md:block">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src="/screenshot-add-cp.png"
                    alt="PillTaken Add Medication Form"
                    className="h-[400px] w-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
