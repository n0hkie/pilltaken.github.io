import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Bell, Shield, Smartphone, CheckCircle2, Palette, Plus, Check, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Learn More – PillTaken",
  description: "Learn everything about PillTaken — features, how it works, and why it's the simplest way to track your medications.",
}

const features = [
  {
    icon: CheckCircle2,
    title: "One-Tap Check-Ins",
    description: "Mark medications as taken with a single tap directly from your Today screen. A live progress counter shows how many you've taken for the day.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Set a custom reminder time for each medication and choose exactly which days of the week you need it. No unwanted daily alerts.",
  },
  {
    icon: CalendarDays,
    title: "Calendar History",
    description: "Browse a full monthly calendar with color-coded dots for every day you logged medications. Tap any date to review the exact details.",
  },
  {
    icon: Palette,
    title: "Color Coding",
    description: "Assign a unique color to each medication so you can instantly tell them apart at a glance — especially useful when managing multiple pills.",
  },
  {
    icon: Shield,
    title: "100% Private",
    description: "All your data is stored locally on your device. No user accounts, no cloud uploads, no analytics, no tracking. Ever.",
  },
  {
    icon: Smartphone,
    title: "Works Offline",
    description: "PillTaken has zero network dependencies. It works entirely offline, so your medication data is always accessible — even without Wi-Fi.",
  },
]

const steps = [
  {
    number: "01",
    icon: Plus,
    title: "Add Your Medications",
    description: "Open the Medications tab, tap +, enter the name, optional dose, pick a color, and optionally set a reminder time and days.",
  },
  {
    number: "02",
    icon: Check,
    title: "Mark as Taken Each Day",
    description: "Every day, open the Today tab and tap each medication card to toggle it as taken. The progress counter at the top updates instantly.",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Review Your History",
    description: "Open the Calendar tab to see color-coded dots for every day you logged medications. Tap any date to see the full breakdown.",
  },
]

export default function LearnMorePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image src="/logo.png" alt="PillTaken" width={36} height={36} style={{ height: 'auto' }} />
            <span>PillTaken</span>
          </Link>
          <Link href="/">
            <Button variant="outline" size="sm">← Back to home</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">

        {/* Hero */}
        <section className="px-4 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Everything You Need to Know About{" "}
              <span className="text-primary">PillTaken</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              PillTaken is a simple, privacy-first medication tracker. No accounts, no cloud — just a clean app that helps you stay on top of your daily health routine.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 pb-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
              Features
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-secondary/50 px-4 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
              How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <span className="mb-2 text-sm font-semibold text-primary">Step {step.number}</span>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy section */}
        <section className="px-4 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Shield className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Your Privacy Comes First</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              PillTaken was built with one rule: your health data belongs to you. Everything stays on your device. We don't collect anything, period.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium">
              {["No account required", "No cloud storage", "No analytics", "No ads", "Works offline"].map((item) => (
                <span key={item} className="rounded-full bg-primary/10 px-4 py-2 text-primary">{item}</span>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/privacy-policy" className="text-sm text-muted-foreground underline-offset-4 hover:underline hover:text-foreground transition-colors">
                Read our full Privacy Policy →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-24">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Ready to get started?</h2>
            <p className="mt-3 text-muted-foreground">Download PillTaken for free and take control of your medication routine today.</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-lg shadow-primary/25" asChild>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  Download for iOS
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold" asChild>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  Download for Android
                </a>
              </Button>
              <Link href="/support">
                <Button size="lg" variant="ghost" className="h-14 px-8 text-lg font-semibold">
                  Visit Support
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t bg-secondary/30 px-4 py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} PillTaken. All rights reserved.</p>
        <p className="mt-1">
          <Link href="/" className="hover:text-foreground transition-colors">← Back to home</Link>
        </p>
      </footer>
    </div>
  )
}
