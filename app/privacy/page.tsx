import { Button } from "@/components/ui/button"
import { ShoppingBasket } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
              <ShoppingBasket className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-serif font-bold text-gray-900">Queen Wash Laundry</span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent">
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Effective Date: 22 August 2025</p>

            <section className="mb-8">
              <p className="mb-6">
                At Queen Wash Laundry, we are dedicated to safeguarding your privacy and ensuring the security of your
                personal information. This Privacy Policy outlines how we collect, use, and disclose your personal data
                when you access and use our website and mobile application services. By using our services, you agree to
                the practices described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-3">Personal Information:</h3>
              <p className="mb-4">
                When you sign up for our services, make a booking, or reach out to us for support, we collect personal
                information that you provide. This may include your name, contact details (email address, phone number),
                and billing information.
              </p>

              <h3 className="text-xl font-semibold mb-3">Usage Information:</h3>
              <p className="mb-4">
                We automatically collect data regarding your use of our website and mobile application. This information
                may include your IP address, device details, browser type, operating system, and the pages you visit on
                our platforms.
              </p>

              <h3 className="text-xl font-semibold mb-3">Cookies and Tracking Technologies:</h3>
              <p className="mb-4">
                To improve your experience, we use cookies and similar tracking technologies. These small data files are
                stored on your device and help us remember your preferences and gather insights about your interactions
                with our website and mobile application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>

              <h3 className="text-xl font-semibold mb-3">Providing Services:</h3>
              <p className="mb-4">
                We use your personal data to deliver the laundry and dry cleaning services you request, such as
                processing orders, managing deliveries, and providing customer support.
              </p>

              <h3 className="text-xl font-semibold mb-3">Communication:</h3>
              <p className="mb-4">
                We may use your contact details to send you service-related updates, including booking confirmations,
                delivery notifications, and important notices through both our website and mobile app.
              </p>

              <h3 className="text-xl font-semibold mb-3">Improving Services:</h3>
              <p className="mb-4">
                To improve our offerings, we analyze usage data from both our website and mobile app to identify trends,
                enhance user experience, and resolve any technical issues.
              </p>

              <h3 className="text-xl font-semibold mb-3">Marketing:</h3>
              <p className="mb-4">
                With your consent, we may use your information to send you promotional offers, newsletters, and
                marketing updates via our website and mobile application. You can opt out of receiving such
                communications at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Share Your Information</h2>

              <h3 className="text-xl font-semibold mb-3">Service Providers:</h3>
              <p className="mb-4">
                We may share your personal information with third-party service providers who help us operate our
                website and mobile app, process payments, deliver orders, and provide customer support.
              </p>

              <h3 className="text-xl font-semibold mb-3">Legal Compliance:</h3>
              <p className="mb-4">
                We may disclose your information if required by law, such as in response to legal requests or to protect
                our rights, privacy, safety, or property.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>

              <h3 className="text-xl font-semibold mb-3">Access and Update:</h3>
              <p className="mb-4">
                You have the right to access and update the personal information we hold about you, either through our
                website or mobile application.
              </p>

              <h3 className="text-xl font-semibold mb-3">Opt-Out:</h3>
              <p className="mb-4">
                If you no longer wish to receive marketing communications, you can opt out by following the instructions
                provided in our communications or by reaching out to us directly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal data across our website and mobile
                application. However, please note that no method of data transmission or storage is completely secure.
                While we strive to protect your information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy periodically. Any changes will take effect once the updated policy is
                posted on our website and mobile application. Your continued use of our services after the effective
                date of these changes constitutes your acceptance of the revised policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns regarding this Privacy Policy, please feel free to contact us at
                queenwashlaundry1090@gmail.com
              </p>
              <p className="mb-4">
                At Queen Wash Laundry, your privacy is our priority. We are committed to maintaining the confidentiality
                and security of your personal information while delivering the best laundry services.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
