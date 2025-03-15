import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 overflow-hidden rounded-full bg-orange-100 flex items-center justify-center">
              <span className="text-orange-600 font-bold text-lg">IC</span>
            </div>
            <span className="font-bold text-xl">ICEG</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="/donate" className="text-sm font-medium hover:underline underline-offset-4">
              Donate
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex bg-orange-600 hover:bg-orange-700">
            <Link href="/donate">Donate Now</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section with Gradient Overlay */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Indian Cultural Celebration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-orange-800/60"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Contact Us</h1>
                <p className="max-w-[900px] text-orange-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with the Indian Cultural Enrichment Group. We'd love to hear from you!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section with Enhanced Visual Elements */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full text-orange-600 mb-4">
                    <Send className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
                  <p className="text-gray-500">
                    Have questions about our organization, events, or how to get involved? Reach out to us using any of
                    the methods below.
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-orange-100 transition-all hover:shadow-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-sm text-gray-500">info@iceg.org</p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond as soon as possible</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-green-100 transition-all hover:shadow-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-sm text-gray-500">(123) 456-7890</p>
                      <p className="text-sm text-gray-500 mt-1">Monday-Friday, 9am-5pm CST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-blue-100 transition-all hover:shadow-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Location</h3>
                      <p className="text-sm text-gray-500">Schaumburg, IL</p>
                      <p className="text-sm text-gray-500 mt-1">Based in the Chicago metropolitan area</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-orange-100 to-green-100 blur-lg opacity-50"></div>
                <Card className="relative">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" className="border-gray-200" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" className="border-gray-200" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Enter the subject" className="border-gray-200" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Enter your message"
                          className="min-h-[150px] border-gray-200"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Section with Enhanced Visual Elements */}
        <section id="volunteer" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Volunteer With Us</h2>
                <p className="max-w-[900px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  Anyone wishing to join us can volunteer at select Indian cultural events by signing up below.
                </p>
              </div>
            </div>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-orange-100 to-blue-100 blur-lg opacity-50"></div>
              <Card className="relative">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Volunteer Sign-up</CardTitle>
                  <CardDescription>
                    Fill out this form to join our volunteer team and receive information about upcoming events.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="volunteer-name">Full Name</Label>
                      <Input id="volunteer-name" placeholder="Enter your full name" className="border-gray-200" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="volunteer-email">Email</Label>
                      <Input
                        id="volunteer-email"
                        type="email"
                        placeholder="Enter your email"
                        className="border-gray-200"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="volunteer-phone">Phone Number</Label>
                      <Input
                        id="volunteer-phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-gray-200"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="volunteer-interests">Areas of Interest</Label>
                      <Textarea
                        id="volunteer-interests"
                        placeholder="Tell us which types of events you're interested in volunteering for"
                        className="border-gray-200"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                      Sign Up to Volunteer
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map/Location Section */}
        <section className="w-full py-12 md:py-24 bg-white border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full text-green-600 mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Find Us</h2>
                <p className="max-w-[600px] text-gray-500">
                  We're based in Schaumburg, IL and active throughout the Chicago metropolitan area
                </p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border shadow-lg h-[400px]">
              <Image src="/placeholder.svg?height=400&width=1200" alt="Map location" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Indian Cultural Enrichment Group</p>
                  <p className="text-sm text-gray-500">Schaumburg, IL</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to make a difference?</h2>
                <p className="max-w-[600px] text-orange-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your support helps us celebrate Indian culture and provide STEM education opportunities.
                </p>
              </div>
              <div className="flex gap-4 lg:justify-end">
                <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                  <Link href="/donate">Donate Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-orange-700">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 px-4 md:px-6">
          <div className="flex flex-col gap-2 md:gap-4 md:w-1/3">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 overflow-hidden rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-600 font-bold text-lg">IC</span>
              </div>
              <span className="font-bold">ICEG</span>
            </Link>
            <p className="text-sm text-gray-500">
              The Indian Cultural Enrichment Group (ICEG) is a legal non-profit made up of high school students
              dedicated to celebrating and empowering Indian culture.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Pages</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
                <Link href="/donate" className="text-sm hover:underline">
                  Donate
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Contact</h3>
              <p className="text-sm">Schaumburg, IL</p>
              <p className="text-sm">info@iceg.org</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Terms of Service
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Indian Cultural Enrichment Group. All rights reserved.</p>
          <p className="mt-1 text-xs text-gray-500">Fiscally sponsored by HCB</p>
        </div>
      </footer>
    </div>
  )
}

