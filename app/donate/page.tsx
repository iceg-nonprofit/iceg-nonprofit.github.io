import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Users, CheckCircle, Instagram } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function DonatePage() {
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Support Our Mission
                </h1>
                <p className="max-w-[900px] text-orange-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your donation helps us celebrate Indian culture and support
                  STEM education through the AIF Foundation.
                </p>
              </div>
              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50"
                >
                  <a
                    href="https://hcb.hackclub.com/donations/start/indian-cultural-enrichment-group"
                    target="_blank"
                  >
                    Donate Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="w-full py-8 bg-white border-y border-orange-100">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-500">
                  Funds to AIF Foundation
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600">70+</div>
                <div className="text-sm text-gray-500">Active Members</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-green-600">STEM</div>
                <div className="text-sm text-gray-500">Education Focus</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-600">HCB</div>
                <div className="text-sm text-gray-500">Fiscal Sponsor</div>
              </div>
            </div>
          </div>
        </section>

        {/* Make a Difference Section with Enhanced Visual Elements */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-10 ">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full text-orange-600 mb-4">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">
                    Make a Difference
                  </h2>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg blur opacity-25"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow-sm border border-orange-100">
                      <p className="text-gray-700">
                        All funds raised through donations or drives will be
                        donated to the AIF Foundation, dedicated to STEM
                        education opportunities.
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-4 mb-4">
                    Your contribution helps us:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-orange-100">
                      <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      <span>
                        Support STEM education programs for underprivileged
                        students
                      </span>
                    </li>
                    <li className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-green-100">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Provide educational resources and materials</span>
                    </li>
                    <li className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-blue-100">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>Fund scholarships for talented students</span>
                    </li>
                    <li className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-purple-100">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span>
                        Organize cultural events and educational workshops
                      </span>
                    </li>
                  </ul>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Our Impact</CardTitle>
                    <CardDescription>
                      See how your donations make a difference
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
                        <div className="text-3xl font-bold text-orange-600">
                          100%
                        </div>
                        <div className="text-sm text-gray-500 text-center">
                          of donations go to the AIF Foundation
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
                        <div className="text-3xl font-bold text-green-600">
                          70+
                        </div>
                        <div className="text-sm text-gray-500 text-center">
                          active members volunteering
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                Every donation, no matter how small, helps us make a significant
                impact on STEM education and cultural awareness. Together, we
                can build a brighter future.
              </blockquote>
              <div className="flex items-center justify-center gap-2">
                <div className="relative w-12 h-12 overflow-hidden rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 font-bold">AT</span>
                </div>
                <div className="text-left">
                  <div className="font-medium">Abraham Thomas</div>
                  <div className="text-sm text-gray-500">Co-Founder, ICEG</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways to Support Section with Enhanced Visual Elements */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Other Ways to Support
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  There are many ways you can help support our mission beyond
                  monetary donations.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden group hover:shadow-md transition-all border-orange-100">
                <div className="h-40 bg-orange-100 flex items-center justify-center">
                  <Users className="h-16 w-16 text-orange-600/50" />
                </div>
                <CardHeader>
                  <CardTitle>Volunteer Your Time</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-500">
                    Join our team of volunteers and help at cultural events and
                    educational workshops.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-orange-200 hover:bg-orange-50"
                  >
                    <Link href="/contact#volunteer">Sign Up to Volunteer</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden group hover:shadow-md transition-all border-green-100">
                <div className="h-40 bg-green-100 flex items-center justify-center">
                  <Instagram className="h-16 w-16 text-green-600/50" />
                </div>
                <CardHeader>
                  <CardTitle>Spread the Word</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-500">
                    Share our mission with your friends, family, and social
                    networks to help us reach more people.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-green-200 hover:bg-green-50"
                  >
                    <a
                      href="https://www.instagram.com/iceg_schaumburg/"
                      target="_blank"
                    >
                      Share on Social Media
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden group hover:shadow-md transition-all border-blue-100">
                <div className="h-40 bg-blue-100 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-blue-600/50" />
                </div>
                <CardHeader>
                  <CardTitle>Corporate Partnerships</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-500">
                    If your company is interested in partnering with us, please
                    get in touch to discuss opportunities.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-blue-200 hover:bg-blue-50"
                  >
                    <Link href="/contact#contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
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
