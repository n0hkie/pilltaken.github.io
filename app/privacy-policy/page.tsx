import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Privacy Policy – PillTaken",
  description: "PillTaken privacy policy. Learn how your data is stored and protected.",
}

export default function PrivacyPolicyPage() {
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
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mb-12 text-sm text-muted-foreground">Last updated: May 3, 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

          <section>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              PillTaken is a privacy-first medication tracker. We built it with one core principle: your health data belongs to you and only you. PillTaken does not collect, transmit, or share any personal information. Everything you enter stays on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Data We Do Not Collect</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              PillTaken does not collect or have access to any of the following:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Your name, email address, or any account credentials</li>
              <li>Your medication names, doses, or schedules</li>
              <li>Your medication log history or adherence data</li>
              <li>Your location or device identifiers</li>
              <li>Any health or medical information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Local Storage</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              All data entered into PillTaken — including medications, schedules, and daily logs — is stored exclusively on your device using local storage. This data never leaves your device and is never sent to any server.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Uninstalling the app will permanently delete all locally stored data. We recommend exporting a backup before uninstalling if you wish to keep your history.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Notifications</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              PillTaken can send you local push notifications as reminders to take your medications. These notifications are scheduled entirely on-device using the times and days you configure. No notification content or schedule data is sent to any external server.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Third-Party Services</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              PillTaken does not integrate with any third-party analytics, advertising, or tracking services. The app works fully offline and has no network dependencies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Children's Privacy</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Because PillTaken collects no personal data from anyone, it is safe for use by people of all ages. We do not knowingly collect information from children under 13 or any other age group.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              If this privacy policy changes, the updated version will be posted on this page with a revised date. Any changes will maintain our core commitment to keeping your data on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              If you have any questions about this privacy policy, please reach out via the Support link in the app or on our website.
            </p>
          </section>

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
