import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Terms of Service – PillTaken",
  description: "PillTaken terms of service. Read the terms and conditions for using the PillTaken app.",
}

export default function TermsOfServicePage() {
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
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mb-12 text-sm text-muted-foreground">Last updated: May 3, 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

          <section>
            <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              By downloading or using PillTaken, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Description of Service</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              PillTaken is a personal medication tracking app that helps users log daily medications and vitamins, set reminders, and review their adherence history. All data is stored locally on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Not a Medical Device</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              PillTaken is a personal productivity tool only. It is <strong>not</strong> a medical device, and it does not provide medical advice, diagnosis, or treatment. Always follow the guidance of your doctor or pharmacist regarding your medications. Do not rely solely on this app to manage critical medical conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">User Responsibilities</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              You are responsible for:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Entering accurate medication information into the app.</li>
              <li>Keeping your device and its data backed up, as PillTaken stores all data locally.</li>
              <li>Using the app in accordance with these terms and applicable laws.</li>
              <li>Consulting a healthcare professional for any medical decisions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Intellectual Property</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              All content, branding, and code within PillTaken and this website are the property of PillTaken and protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Disclaimer of Warranties</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              PillTaken is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the app will be uninterrupted, error-free, or free of bugs. Use of the app is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, PillTaken and its developers shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the app, including but not limited to missed doses or medical harm.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Changes to These Terms</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We may update these terms from time to time. The updated version will be posted on this page with a revised date. Continued use of the app after changes are posted constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              If you have questions about these terms, please reach out via the Support link in the app or on our website.
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
