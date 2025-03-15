import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Award,
  Heart,
  CheckCircle,
  BookOpen,
  Globe,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  About Us
                </h1>
                <p className="max-w-[900px] text-orange-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn more about the Indian Cultural Enrichment Group, our
                  mission, and our impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section with Visual Enhancements */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full text-orange-600 mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">
                  Our Mission
                </h2>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg blur opacity-25"></div>
                  <div className="relative bg-white p-6 rounded-lg shadow-sm border border-orange-100">
                    <p className="text-gray-700 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                      The Indian Cultural Enrichment Group (ICEG) is a legal
                      non-profit made up of high school students dedicated to
                      celebrating and empowering Indian culture. All funds
                      raised through donations or drives will be donated to a
                      selected charity (Currently the AIF Foundation) that is
                      dedicated to STEM education opportunities.
                    </p>
                  </div>
                </div>
                <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  We believe in preserving and promoting the rich cultural
                  heritage of India while also giving back to the community
                  through educational initiatives.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-orange-100 to-green-100 blur-lg opacity-50"></div>
                  <div className="relative rounded-xl overflow-hidden border shadow-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="ICEG Mission"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section with Enhanced Cards */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Our Founders
              </h2>
              <p className="max-w-[800px] text-gray-500">
                Meet the passionate individuals who established the Indian
                Cultural Enrichment Group
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden group hover:shadow-md transition-all">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Ayush Patel"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Co-Founder</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Ayush Patel</h3>
                  <p className="text-sm text-gray-500 mt-2">Co-Founder</p>
                  <p className="mt-4 text-gray-500">
                    Passionate about promoting Indian culture and creating
                    educational opportunities for students.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden group hover:shadow-md transition-all">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Abraham Thomas"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Co-Founder</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Abraham Thomas</h3>
                  <p className="text-sm text-gray-500 mt-2">Co-Founder</p>
                  <p className="mt-4 text-gray-500">
                    Dedicated to building bridges between cultures and
                    supporting STEM education initiatives.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden group hover:shadow-md transition-all">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Roy Marina"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Co-Founder</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Roy Marina</h3>
                  <p className="text-sm text-gray-500 mt-2">Co-Founder</p>
                  <p className="mt-4 text-gray-500">
                    Committed to preserving cultural heritage and creating
                    opportunities for the next generation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Section with Enhanced Visual Elements */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-100 to-green-100 blur-lg opacity-50"></div>
                  <div className="relative rounded-xl overflow-hidden border shadow-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="ICEG Community"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full text-green-600 mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">
                  Our Community
                </h2>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-orange-100 transition-all hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Over 70 Members</h3>
                    <p className="text-gray-500">
                      A growing community of passionate high school students
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-green-100 transition-all hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Presidential Volunteer Awards</h3>
                    <p className="text-gray-500">
                      Recognizing our members' dedication to service
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-blue-100 transition-all hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Fiscally Sponsored by HCB</h3>
                    <p className="text-gray-500">
                      Supporting our mission and impact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where Your Money Goes Section with Enhanced Visual Elements */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full text-orange-600 mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Where Your Money Goes
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                All funds raised through donations or drives will be donated to
                the AIF Foundation, dedicated to STEM education opportunities.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 mb-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">STEM Education</h3>
                    <p className="text-gray-500">
                      Supporting programs that provide STEM education
                      opportunities to underprivileged students.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Educational Resources</h3>
                    <p className="text-gray-500">
                      Providing books, technology, and other resources needed
                      for quality education.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Scholarships</h3>
                    <p className="text-gray-500">
                      Helping talented students pursue higher education in STEM
                      fields.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Button
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-700"
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
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
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50"
                >
                  <Link href="/donate">Donate Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-orange-700"
                >
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
              The Indian Cultural Enrichment Group (ICEG) is a legal non-profit
              made up of high school students dedicated to celebrating and
              empowering Indian culture.
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
          <p>
            © {new Date().getFullYear()} Indian Cultural Enrichment Group. All
            rights reserved.
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Fiscally sponsored by HCB
          </p>
        </div>
      </footer>
    </div>
  );
}
