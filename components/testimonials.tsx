import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    role: "Daily vitamin user",
    content: "Finally, an app that just works! No logins, no subscriptions. I track my vitamins and medications without any hassle.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Managing multiple prescriptions",
    content: "I take 5 different medications daily. PillTaken helps me stay on top of each one with color-coded reminders. Game changer!",
    rating: 5,
  },
  {
    name: "Lisa R.",
    role: "Privacy advocate",
    content: "Love that everything stays on my phone. No cloud sync, no data collection. Just simple medication tracking the way it should be.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Loved by <span className="text-primary">Thousands</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Join people who have made PillTaken part of their daily wellness routine.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-foreground/90">&ldquo;{testimonial.content}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              {/* Decorative quote mark */}
              <div className="pointer-events-none absolute -right-4 -top-4 text-8xl font-bold text-primary/5">
                &ldquo;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
