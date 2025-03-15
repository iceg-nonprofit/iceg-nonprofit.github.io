"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Users } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ContactPage() {
  async function contactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "7cacd8bd-2fad-46b0-bab4-59c2397adbb3",
        name: formData.get("name"),
        email: formData.get("email"),
        subject: "Contact Us Form: " + formData.get("subject"),
        message: formData.get("message"),
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      alert("Thank you");
      e.currentTarget.reset();
    }
  }

  async function volunteerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "7cacd8bd-2fad-46b0-bab4-59c2397adbb3",
        name: formData.get("name"),
        email: formData.get("email"),
        subject: "Volunteer Us Form",
        message: formData.get("message"),
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      alert("Thank you");
      e.currentTarget.reset();
    }
  }

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
                  Contact Us
                </h1>
                <p className="max-w-[900px] text-orange-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with the Indian Cultural Enrichment Group. We'd
                  love to hear from you!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section with Enhanced Visual Elements */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full text-orange-600 mb-4">
                      <Send className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter mb-4">
                      Get In Touch
                    </h2>
                  </div>
                  <p className="text-gray-500">
                    Have questions about our organization, events, or how to get
                    involved? Reach out to us using any of the methods below.
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-orange-100 transition-all hover:shadow-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-sm text-gray-500">
                        icegschaumburg@gmail.com
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        We'll respond as soon as possible
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-green-100 transition-all hover:shadow-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-sm text-gray-500">(123) 456-7890</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Monday-Friday, 9am-5pm CST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-orange-100 to-green-100 blur-lg opacity-50"></div>
                <Card className="relative">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                      Send us a message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon
                      as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4" onSubmit={contactSubmit}>
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          className="border-gray-200"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          className="border-gray-200"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Enter the subject"
                          className="border-gray-200"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Enter your message"
                          className="min-h-[150px] border-gray-200"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700"
                      >
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
        <section
          id="volunteer"
          className="w-full py-12 md:py-24 lg:py-16 bg-gradient-to-b from-white to-orange-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Volunteer With Us
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  Anyone wishing to join us can volunteer at select Indian
                  cultural events by signing up below.
                </p>
              </div>
            </div>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-orange-100 to-blue-100 blur-lg opacity-50"></div>
              <Card className="relative">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Volunteer Sign-up</CardTitle>
                  <CardDescription>
                    Fill out this form to join our volunteer team and receive
                    information about upcoming events.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4" onSubmit={volunteerSubmit}>
                    <div className="grid gap-2">
                      <Label htmlFor="volunteer-name">Full Name</Label>
                      <Input
                        id="volunteer-name"
                        name="name"
                        placeholder="Enter your name"
                        className="border-gray-200"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="volunteer-email">Email</Label>
                      <Input
                        id="volunteer-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border-gray-200"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="volunteer-interests">
                        Areas of Interest
                      </Label>
                      <Textarea
                        id="volunteer-interests"
                        name="message"
                        placeholder="Tell us which types of events you're interested in volunteering for"
                        className="border-gray-200"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700"
                    >
                      Sign Up to Volunteer
                    </Button>
                  </form>
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
