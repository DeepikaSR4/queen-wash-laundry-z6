"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Phone,
  MapPin,
  Shirt,
  Droplets,
  AnvilIcon as Iron,
  Truck,
  ShoppingBasket,
  Sparkles,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [copied, setCopied] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText("+1 (555) 123-4567")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const bookOnWhatsApp = () => {
    const phoneNumber = "15551234567" // WhatsApp number without + and and spaces
    const message = "Hi! I'd like to book a laundry service with Queen Wash."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                <ShoppingBasket className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-400 flex items-center justify-center">
                <Sparkles className="h-1 w-1 sm:h-1.5 sm:w-1.5 text-yellow-700" />
              </div>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent font-serif">
                Queen Wash
              </span>
              <div className="text-xs font-medium text-slate-600 -mt-0.5 font-sans">Laundry</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#home"
              className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors relative group font-sans"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#services"
              className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors relative group font-sans"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors relative group font-sans"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/terms"
              className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors relative group font-sans"
            >
              Terms & Conditions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </Link>
            <Button
              onClick={bookOnWhatsApp}
              size="sm"
              className="ml-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 shadow-md hover:shadow-lg transition-all font-sans"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-slate-700" /> : <Menu className="h-5 w-5 text-slate-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-xl">
            <nav className="container px-4 py-4 space-y-3">
              <Link
                href="#home"
                className="block text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors font-sans"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#services"
                className="block text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors font-sans"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/privacy"
                className="block text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors font-sans"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors font-sans"
                onClick={() => setMobileMenuOpen(false)}
              >
                Terms & Conditions
              </Link>
              <Button
                onClick={() => {
                  bookOnWhatsApp()
                  setMobileMenuOpen(false)
                }}
                size="sm"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 shadow-md hover:shadow-lg transition-all font-sans"
              >
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-12 sm:py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/50"></div>
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-blue-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-medium mb-6 sm:mb-8 font-sans">
            <ShoppingBasket className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            Premium Laundry Experience
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight font-serif px-2">
            Reliable Laundry Services at Your{" "}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Doorstep
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-sans px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="flex justify-center px-4">
            <Button
              onClick={bookOnWhatsApp}
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all font-sans w-full sm:w-auto"
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6 font-sans">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Our Premium Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 font-serif px-2">
              Comprehensive Care
            </h2>
            {/* <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-sans px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. </p> */}
            
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100/50 group hover:-translate-y-2">
              <CardHeader className="pb-4 px-4 sm:px-6">
                <div className="mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg group-hover:shadow-xl transition-all">
                  <Droplets className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                  Premium Washing
                </CardTitle>
              </CardHeader>
                {/* <CardContent className="px-4 sm:px-6">
             <CardDescription className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </CardDescription>
              </CardContent> */}
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100/50 group hover:-translate-y-2">
              <CardHeader className="pb-4 px-4 sm:px-6">
                <div className="mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg group-hover:shadow-xl transition-all">
                  <Shirt className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                  Expert Dry Cleaning
                </CardTitle>
              </CardHeader>
              {/* <CardContent className="px-4 sm:px-6">
             <CardDescription className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </CardDescription>
              </CardContent> */}
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100/50 group hover:-translate-y-2">
              <CardHeader className="pb-4 px-4 sm:px-6">
                <div className="mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg group-hover:shadow-xl transition-all">
                  <Iron className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                  Professional Ironing
                </CardTitle>
              </CardHeader>
             {/* <CardContent className="px-4 sm:px-6">
             <CardDescription className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </CardDescription>
              </CardContent> */}
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100/50 group hover:-translate-y-2">
              <CardHeader className="pb-4 px-4 sm:px-6">
                <div className="mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg group-hover:shadow-xl transition-all">
                  <Truck className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                  Pickup & Delivery
                </CardTitle>
              </CardHeader>
           {/* <CardContent className="px-4 sm:px-6">
             <CardDescription className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </CardDescription>
              </CardContent> */}
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6 font-sans">
            <ShoppingBasket className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            About Queen Wash
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-slate-900 font-serif px-2">
            15 Years of Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans px-4 mb-8 sm:mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <div className="max-w-md mx-auto">
            <Card className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100/50">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                  <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                  Customer Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-3">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400 fill-current">
                        ⭐
                      </div>
                    ))}
                  </div>
                  <span className="ml-2 text-lg font-bold text-slate-900 font-sans">4.5</span>
                </div>
                <CardDescription className="text-slate-600 font-sans text-sm sm:text-base mb-4">
                  Lorem ipsum dolor sit amet consectetur
                </CardDescription>
                <Button
                  variant="outline"
                  className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 font-sans bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/o9K9myxq9Jw7XgDAA",
                    )
                  }
                >
                  View All Reviews
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-serif">Contact Us</h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Phone Card */}
            <Card className="p-3 sm:p-4 md:p-5 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100/50">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-2 sm:mb-3 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg group-hover:shadow-xl transition-all">
                  <Phone className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <button
                  onClick={copyPhoneNumber}
                  className="text-lg sm:text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors mb-2 font-sans break-all"
                >
                  +1 (555) 123-4567
                </button>
                <CardDescription className="text-slate-600 font-sans text-sm sm:text-base mb-4">
                  {copied ? "Phone number copied!" : "Click to copy"} • Lorem ipsum dolor sit
                </CardDescription>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    onClick={() => window.open("tel:+15551234567", "_self")}
                    variant="outline"
                    className="flex-1 border-orange-200 text-orange-600 hover:bg-orange-50 font-sans bg-transparent"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    onClick={bookOnWhatsApp}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-sans"
                  >
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 6.988 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
                    </svg>
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Card */}
            <Card className="p-3 sm:p-4 md:p-5 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100/50">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-2 sm:mb-3 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg group-hover:shadow-xl transition-all">
                  <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-serif">Visit Us</CardTitle>
                <CardDescription className="text-slate-600 mb-4 font-sans text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-2 rounded-lg shadow-inner">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.785479118643!2d76.695535!3d8.926308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06073e5b715589%3A0x6102475066369f7!2sQueen%20Wash%20Laundry%2C%20Kallerickel%20Jn%2C%20Koivila%20P.O%2C%20Kollam%2C%20Kerala%20691590!5e0!3m2!1sen!2sin!4v1692634567890!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{border:0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                ></iframe>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="relative">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
                    <ShoppingBasket className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-400 flex items-center justify-center">
                    <Sparkles className="h-1.5 w-1.5 sm:h-2 sm:w-2 text-yellow-700" />
                  </div>
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-bold font-serif">Queen Wash</span>
                  <div className="text-xs sm:text-sm text-slate-400 -mt-1 font-sans">Premium Laundry</div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed font-sans text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 font-serif text-base sm:text-lg">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  href="#services"
                  className="block text-slate-400 hover:text-white transition-colors font-sans text-sm sm:text-base"
                >
                  Services
                </Link>
                <Link
                  href="/privacy"
                  className="block text-slate-400 hover:text-white transition-colors font-sans text-sm sm:text-base"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="block text-slate-400 hover:text-white transition-colors font-sans text-sm sm:text-base"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 font-serif text-base sm:text-lg">Contact Info</h3>
              <div className="space-y-2 text-slate-400 font-sans text-sm sm:text-base">
                <p>+1 (555) 123-4567</p>
                <p>Lorem ipsum street</p>
                <p>Lorem, ipsum 12345</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-slate-500">
            <p className="font-sans text-sm sm:text-base">&copy; 2024 Queen Wash Laundry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
