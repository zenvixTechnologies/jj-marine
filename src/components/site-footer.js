"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  LanguageIcon,
  LocationIcon,
  MailIcon,
  PersonIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./icons";

export default function SiteFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://jjmarinelogistics.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer id="contact" className="bg-marine-primary text-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative h-20 w-20 md:h-[96px] md:w-[96px] flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="JJ Marine Logo"
                  fill
                  sizes="(max-width: 768px) 80px, 96px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[1.4rem] md:text-[1.6rem] font-bold uppercase tracking-tight text-marine-gold leading-none">
                  JJ Marine
                </span>
                <span className="text-[0.65rem] md:text-[0.72rem] uppercase tracking-widest text-white/70 font-medium mt-1.5">
                  Logistics & HR Solutions Pvt. Ltd.
                </span>
              </div>
            </div>
            <p className="max-w-[18rem] text-[0.92rem] leading-7 text-white/72">
              Empowering global maritime trade through strategic excellence in
              logistics and human resource management. Based in Alappuzha, serving
              the world.
            </p>

            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={handleCopyLink}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-marine-gold hover:text-marine-primary cursor-pointer"
                  aria-label="Copy Website Link"
                  title="Copy https://jjmarinelogistics.com"
                >
                  <LanguageIcon className="h-5 w-5" />
                </button>
                {copied && (
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-marine-gold px-2.5 py-1 text-[0.7rem] font-bold text-marine-primary shadow-lg animate-bounce">
                    Link Copied!
                  </span>
                )}
              </div>

              <a
                href="mailto:info.hr@jjmarinelogistics.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-marine-gold hover:text-marine-primary"
                aria-label="Email Us"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="font-display text-[1.05rem] font-semibold">
              Services
            </h4>
            <ul className="space-y-2.5 text-[0.92rem] text-white/70">
              <li>
                <Link href="/services#marine-logistics" className="transition-colors hover:text-white">
                  Marine Logistics
                </Link>
              </li>
              <li>
                <Link href="/services#hr-solutions" className="transition-colors hover:text-white">
                  HR Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#marine-recruitment" className="transition-colors hover:text-white">
                  Marine Recruitment
                </Link>
              </li>
              <li>
                <Link href="/services#houseboat-services" className="transition-colors hover:text-white">
                  Houseboat Services (Training &amp; LSA/FFA)
                </Link>
              </li>
              <li>
                <Link href="/services#dredging-support" className="transition-colors hover:text-white">
                  River &amp; Canal Dredging
                </Link>
              </li>
              <li>
                <Link href="/services#seafarers-insurance" className="transition-colors hover:text-white">
                  Seafarers Insurance Support
                </Link>
              </li>
              <li>
                <Link href="/services#student-placements" className="transition-colors hover:text-white">
                  Student Placements
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="font-display text-[1.05rem] font-semibold">
              Contact
            </h4>
            <ul className="space-y-4 text-[0.92rem] text-white/72">
              <li className="flex gap-3">
                <LocationIcon className="mt-0.5 h-5 w-5 text-marine-gold" />
                <span>
                  E4 Tower, First Floor,
                  <br />
                  Pacha-Edathua - 689573, Alappuzha
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 text-marine-gold" />
                <a href="tel:+919447988100" className="hover:text-marine-gold transition-colors">
                  +91 9447988100
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 text-marine-gold" />
                <a href="mailto:info.hr@jjmarinelogistics.com" className="hover:text-marine-gold transition-colors">
                  info.hr@jjmarinelogistics.com
                </a>
              </li>
              <li className="flex gap-3">
                <LanguageIcon className="mt-0.5 h-5 w-5 text-marine-gold" />
                <a
                  href="https://jjmarinelogistics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-marine-gold transition-colors"
                >
                  jjmarinelogistics.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-[0.9rem] text-white/60">
              © 2026 JJ Marine Logistics &amp; HR Solutions Pvt. Ltd. All rights
              reserved.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.82rem] text-white/55">
              <Link href="/privacy-policy" className="transition-colors hover:text-marine-gold">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="transition-colors hover:text-marine-gold">
                Terms of Service
              </Link>

            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/919447988100"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-marine-gold to-marine-gold-soft text-marine-primary shadow-[0_18px_40px_rgba(212,175,55,0.35)] transition-transform hover:scale-110 active:scale-95 md:bottom-8 md:right-8 md:h-16 md:w-16"
      >
        <WhatsAppIcon className="h-6 w-6 md:h-7 md:w-7" />
      </a>
    </footer>
  );
}
