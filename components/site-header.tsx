"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png?height=40&width=40"
            alt="ICEG Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-xl">ICEG</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
          <Link
            href="/donate"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Donate
          </Link>
        </nav>
        <Button
          asChild
          className="hidden md:inline-flex bg-orange-600 hover:bg-orange-500"
        >
          <Link
            href="https://hcb.hackclub.com/donations/start/indian-cultural-enrichment-group"
            target="_blank"
          >
            Donate Now
          </Link>
        </Button>
        {/* Mobile Menu Toggle Button */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
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

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col items-center py-4">
            <Link
              href="/"
              className="text-sm font-medium hover:underline underline-offset-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:underline underline-offset-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline underline-offset-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/donate"
              className="text-sm font-medium hover:underline underline-offset-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
