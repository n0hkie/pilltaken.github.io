import { CalendarDays, Bell, Shield, Smartphone, CheckCircle2, Palette } from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "One-Tap Check-Ins",
    description: "Mark medications as taken with a single tap. See your daily progress at a glance.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Set custom reminder times for each medication. Choose specific days of the week.",
  },
  {
    icon: CalendarDays,
    title: "Calendar History",
    description: "Browse your medication history with color-coded dots. Spot missed days instantly.",
  },
  {
    icon: Palette,
    title: "Color Coding",
    description: "Assign unique colors to each medication. Easily identify them at a glance.",
  },
  {
    icon: Shield,
    title: "100% Private",
    description: "All data stays on your device. No accounts, no cloud, no tracking. Ever.",
  },
  {
    icon: Smartphone,
    title: "Works Offline",
    description: "No internet required. Your medication data is always accessible.",
  },
]

export function Features() {
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Everything You Need,{" "}
            <span className="text-primary">Nothing You Don&apos;t</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            PillTaken is designed to be simple and effective. No bloat, no subscriptions, no complicated features.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>

              {/* Decorative gradient on hover */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
