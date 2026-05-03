import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Support – PillTaken",
  description: "Get help and support for PillTaken. Join our community Facebook group.",
}

export default function SupportPage() {
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
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Support</h1>
        <p className="mb-12 text-muted-foreground leading-relaxed max-w-2xl">
          Need help with PillTaken? Have a question, suggestion, or ran into a problem? Our community is here for you.
        </p>

        <div className="space-y-8">
          {/* Facebook Group Card */}
          <div className="rounded-2xl border bg-card p-8">
            <div className="flex items-start gap-5">
              {/* Facebook icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1877F2]">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Join our Facebook Community</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Connect with other PillTaken users, share feedback, ask questions, and get help from the community. Our Facebook group is the fastest way to reach us.
                </p>
                <a
                  href="https://www.facebook.com/share/g/17CkLR7Rd8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#1877F2] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                  </svg>
                  Join the Group
                </a>
              </div>
            </div>
          </div>

          {/* FAQ-style tips */}
          <div className="rounded-2xl border bg-card p-8 space-y-6">
            <h2 className="text-xl font-semibold">Common Questions</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-medium">How do I add a medication?</h3>
                <p className="mt-1 text-sm text-muted-foreground">Open the Medications tab and tap the + button. Fill in the name, optional dose, color, and an optional reminder schedule.</p>
              </div>
              <div>
                <h3 className="font-medium">Will my data be lost if I uninstall the app?</h3>
                <p className="mt-1 text-sm text-muted-foreground">Yes — all data is stored locally on your device. Uninstalling the app permanently deletes it. Back up your device regularly to avoid data loss.</p>
              </div>
              <div>
                <h3 className="font-medium">Why am I not receiving reminders?</h3>
                <p className="mt-1 text-sm text-muted-foreground">Make sure the app has notification permissions enabled in your device settings, and that the medication has a schedule time set.</p>
              </div>
              <div>
                <h3 className="font-medium">Can I use PillTaken on multiple devices?</h3>
                <p className="mt-1 text-sm text-muted-foreground">PillTaken is offline-only and does not sync between devices. Each device maintains its own independent data.</p>
              </div>
            </div>
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
