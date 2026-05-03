import { Plus, Check, Calendar } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Plus,
    title: "Add Your Medications",
    description: "Enter your medication name, optional dose, pick a color, and set your reminder schedule.",
  },
  {
    number: "02",
    icon: Check,
    title: "Mark as Taken",
    description: "Each day, simply tap your medications to mark them as taken. The progress counter updates instantly.",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Track Your History",
    description: "Browse the calendar to see your adherence over time. Tap any date to see detailed logs.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-secondary/50 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Simple as <span className="text-primary">1-2-3</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Get started in minutes. No learning curve, no complicated setup.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:left-1/2 md:-translate-x-px md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col gap-6 md:flex-row md:gap-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step number bubble */}
                <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground shadow-lg shadow-primary/25 md:left-1/2 md:-translate-x-1/2">
                  {step.number}
                </div>

                {/* Content card */}
                <div
                  className={`ml-20 rounded-2xl border bg-card p-6 shadow-sm md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
