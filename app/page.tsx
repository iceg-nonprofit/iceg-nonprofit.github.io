import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Heart,
  Users,
  CheckCircle,
  Award,
  BookOpen,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section with Gradient Overlay */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/100 to-green-600/70"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Indian Cultural Enrichment Group
                  </h1>
                  <p className="max-w-[600px] text-orange-50 md:text-xl">
                    A non-profit organization dedicated to celebrating and
                    empowering Indian culture while supporting STEM education.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-600 hover:bg-green-500"
                  >
                    <Link
                      href="https://hcb.hackclub.com/donations/start/indian-cultural-enrichment-group"
                      target="_blank"
                    >
                      Donate Now
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/30 hover:text-white"
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                {/* Decorative element */}
                <div className="relative w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="absolute inset-0 border-4 border-dashed border-orange-600/100 rounded-full animate-[spin_30s_linear_infinite]"></div>
                  <div className="text-white text-center p-6">
                    <div className="text-4xl font-bold">100+</div>
                    <div className="text-sm mt-2">Active Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="w-full py-8 bg-white border-y border-orange-100">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600">100+</div>
                <div className="text-sm text-gray-500">Active Members</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600">~$10,000</div>
                <div className="text-sm text-gray-500">Funds Raised</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600">2023</div>
                <div className="text-sm text-gray-500">Year Founded</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600">IL</div>
                <div className="text-sm text-gray-500">Based in Schaumburg</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section with Decorative Elements */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full text-orange-600 mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Indian Cultural Enrichment Group (ICEG) is a legal
                  non-profit made up of high school students dedicated to
                  celebrating and empowering Indian culture.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Supporting Education</h3>
                  <p className="text-sm text-gray-500">
                    All funds raised through donations or drives will be donated
                    to the AIF Foundation, dedicated to STEM education
                    opportunities.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Community Building</h3>
                  <p className="text-sm text-gray-500">
                    With over 100 members, we're building a strong community of
                    students passionate about Indian culture.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Cultural Events</h3>
                  <p className="text-sm text-gray-500">
                    We organize and volunteer at select Indian cultural events
                    throughout the year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial/Quote Section */}
        <section className="w-full py-12 md:py-24 bg-orange-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat rotate-12 scale-150"></div>
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-5xl text-orange-300 font-serif mb-6">"</div>
              <blockquote className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
                Our goal is to celebrate the rich cultural heritage of India
                while empowering the next generation through education. Every
                event we organize and every dollar we raise brings us closer to
                that vision.
              </blockquote>
              <div className="flex items-center justify-center gap-2">
                <div className="relative w-12 h-12 overflow-hidden rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 font-bold">AP</span>
                </div>
                <div className="text-left">
                  <div className="font-medium">Ayush Patel</div>
                  <div className="text-sm text-gray-500">
                    Co-President, ICEG
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved Section with Visual Enhancements */}
        <section className="w-full py-12 md:py-12 lg:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full text-blue-600">
                <Users className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get Involved
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us in our mission to celebrate and empower Indian
                  culture.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">
                    Volunteer Opportunities
                  </h3>
                  <p className="text-gray-500">
                    Anyone wishing to join us can volunteer at select Indian
                    cultural events by signing up with their phone numbers on
                    our website.
                  </p>
                  <ul className="grid gap-3 py-4">
                    <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Cultural festivals and celebrations</span>
                    </li>
                    <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Educational workshops</span>
                    </li>
                    <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Fundraising events</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Button
                    asChild
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    <Link href="/contact#volunteer">Volunteer Now</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-orange-100 to-green-100 blur-lg opacity-50"></div>
                <div className="relative rounded-xl overflow-hidden border shadow-lg">
                  <Image
                    src="/group.JPG?height=400&width=600"
                    alt="Volunteers at an event"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="w-full py-12 md:pb-24 lg:pb-32 bg-gradient-to-b from-white to-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full text-green-600 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Impact
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how we're making a difference in our community.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Presidential Volunteer Awards
                </h3>
                <p className="text-gray-500">
                  We give presidential volunteer awards to recognize the
                  dedication of our members.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  STEM Education Support
                </h3>
                <p className="text-gray-500">
                  All funds raised go directly to supporting STEM education
                  through the AIF Foundation.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Growth</h3>
                <p className="text-gray-500">
                  Our community continues to grow with passionate members
                  dedicated to cultural enrichment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to make a difference?
                </h2>
                <p className="max-w-[600px] text-orange-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your support helps us celebrate Indian culture and provide
                  STEM education opportunities.
                </p>
              </div>
              <div className="flex gap-4 lg:justify-end">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50"
                >
                  <Link
                    href="https://hcb.hackclub.com/donations/start/indian-cultural-enrichment-group"
                    target="_blank"
                  >
                    Donate Now
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50"
                >
                  <Link href="/contact#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
