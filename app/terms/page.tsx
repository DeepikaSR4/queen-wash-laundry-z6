import { Button } from "@/components/ui/button"
import { ShoppingBasket } from "lucide-react"
import Link from "next/link"

export default function TermsAndConditions() {
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

      {/* Terms and Conditions Content */}
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="mb-4">
                By using Queen Wash Laundry services, you agree to be bound by these Terms and Conditions. If you do not
                agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Service Description</h2>
              <p className="mb-4">
                Queen Wash Laundry provides professional laundry and dry cleaning services including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Washing and folding services</li>
                <li>Dry cleaning for delicate fabrics</li>
                <li>Ironing and pressing services</li>
                <li>Pickup and delivery services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Pricing and Payment</h2>
              <p className="mb-4">Prices for our services are available upon request and may vary based on:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Type of service requested</li>
                <li>Quantity and type of items</li>
                <li>Special care requirements</li>
                <li>Delivery location and timing</li>
              </ul>
              <p className="mb-4">
                Payment is due upon completion of services unless other arrangements have been made.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Liability and Responsibility</h2>
              <p className="mb-4">
                While we take utmost care in handling your items, Queen Wash Laundry's liability is limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>10 times the cleaning charge for any item, or</li>
                <li>The fair market value of the item at the time of loss or damage</li>
              </ul>
              <p className="mb-4">
                We are not responsible for items left in pockets, pre-existing damage, or items not suitable for our
                cleaning processes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Urgent Delivery Charges</h2>
              <p className="mb-4">Please note that urgent delivery of garments will incur an additional charge.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Free Pickup & Delivery</h2>
              <p className="mb-4">
                To avail of our free pickup and delivery service, your laundry order must weigh 5 KG or more.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Modification of Terms</h2>
              <p className="mb-4">
                Laundrywala reserves the right to modify or change these terms and conditions at any time, without prior
                notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Timely Delivery</h2>
              <p className="mb-4">
                We make every effort to ensure timely pick-up and delivery; however, incidents beyond our control or
                situations of force majeure may cause delays. In such cases, we are unable to offer compensation,
                refunds, or any reduction in charges.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Inspection at Delivery</h2>
              <p className="mb-4">Customers are requested to inspect their garments at the time of delivery.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Responsibility for Damage</h2>
              <p className="mb-4">
                Laundrywala is not responsible for issues such as color bleeding, shrinkage, or damage to embellishments
                or embroidery during the cleaning process.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Stain Removal</h2>
              <p className="mb-4">
                While every effort is made to remove stains, Laundrywala will not be responsible for stubborn or
                unremovable stains.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Risk Acknowledgment</h2>
              <p className="mb-4">All garments are accepted at the customer's own risk.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Delivery Timelines</h2>
              <p className="mb-4">
                Laundry deliveries will be completed within 60 hours for standard orders. Dry cleaning garments will be
                delivered within 90 hours.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Garment Collection</h2>
              <p className="mb-4">
                Garments must be collected within 10 days from the scheduled delivery date. After this, we are not
                responsible for the upkeep of the garments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Loss or Damage</h2>
              <p className="mb-4">
                We do not accept liability for loss or damage to garments due to fire, burglary, or natural causes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Pricing of Garments</h2>
              <p className="mb-4">
                The pricing of garments will be determined on a case-by-case basis depending on the garment's
                complexity. Rates mentioned in the price list are indicative and minimal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cleaning Methods</h2>
              <p className="mb-4">
                We will use the best cleaning methods deemed fit by our technicians. These may include techniques such
                as emulsifier washing, soft wash, perchloroethylene, and hydrocarbon cleaning for delicate garments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Social Media & Promotion</h2>
              <p className="mb-4">
                We are active on all social media platforms, and may use images of your garments for promotional
                purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Liability for Damage</h2>
              <p className="mb-4">
                Laundrywala shall not be responsible for any shrinkage, cuts, holes, scratches, stains, or other damage
                that arises due to defective manufacturing, wear and tear, or environmental exposure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Stain Removal Guarantee</h2>
              <p className="mb-4">
                While we do our best to remove any stains or marks, we cannot guarantee 100% stain removal. There will
                be no claims or deductions in processing charges on the basis of stain removal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Jurisdiction</h2>
              <p className="mb-4">Any disputes will be subject to the jurisdiction of the courts in Kerala only.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Price Variability</h2>
              <p className="mb-4">Please note that prices may vary from store to store and city to city.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
