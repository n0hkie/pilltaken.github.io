import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Contact – PillTaken",
  description: "Contact the PillTaken team. Reach us via email or our Facebook community group.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Minimal header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image src="/logo.png" alt="PillTaken" width={36} height={36} style={{ height: 'auto' }} />
            <span>PillTaken</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-16">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mb-12 text-muted-foreground leading-relaxed max-w-2xl">
          Have a question, found a bug, or want to share feedback? We'd love to hear from you. Reach us through any of the channels below.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">

          {/* Email card */}
          <div className="rounded-2xl border bg-card p-8 flex flex-col gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="mt-1 text-sm text-muted-foreground">Send us an email and we'll get back to you as soon as possible.</p>
            </div>
            <a
              href="mailto:admin.pilltaken@gmail.com"
              className="mt-auto inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent"
            >
              admin.pilltaken@gmail.com
            </a>
          </div>

          {/* Facebook Group card */}
          <div className="rounded-2xl border bg-card p-8 flex flex-col gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2]/10">
              <svg className="h-7 w-7 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Facebook Community</h2>
              <p className="mt-1 text-sm text-muted-foreground">Join our Facebook group to connect with the community and get answers faster.</p>
            </div>
            <a
              href="https://www.facebook.com/share/g/17CkLR7Rd8/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 rounded-xl bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
              Join the Group
            </a>
          </div>

        </div>
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
