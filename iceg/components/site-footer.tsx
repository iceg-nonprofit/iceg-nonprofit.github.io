"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-gray-50">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-5 px-4 md:px-6">
        <div className="flex flex-col gap-2 md:gap-4 md:w-1/2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png?height=40&width=40"
              alt="ICEG Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold">ICEG</span>
          </Link>
          <p className="text-sm text-gray-500">
            The Indian Cultural Enrichment Group (ICEG) is a legal non-profit
            made up of high school students dedicated to celebrating and
            empowering Indian culture.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 sm:grid-cols-2">
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
          <div className="flex flex-col gap-2 py-10">
            <h3 className="font-semibold">Contact</h3>
            <p className="text-sm">Schaumburg, IL</p>
            <p className="text-sm">icegschaumburg@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-center text-sm">
        <p>
          © {year ?? "Loading..."} Indian Cultural Enrichment Group. All rights
          reserved.
        </p>
        <p className="mt-1 text-xs text-gray-500">Fiscally sponsored by HCB</p>
      </div>
    </footer>
  );
}
