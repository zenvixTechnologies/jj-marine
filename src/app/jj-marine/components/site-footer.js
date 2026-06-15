import Link from "next/link";
import Image from "next/image";

import {
  ChatBubbleIcon,
  LanguageIcon,
  LocationIcon,
  MailIcon,
  PersonIcon,
  PhoneIcon,
} from "./icons";

export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-marine-primary text-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="JJ Marine Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain rounded-md shadow-sm bg-white p-0.5"
              />
              <div className="flex flex-col">
                <span className="font-display text-[1.25rem] font-bold uppercase tracking-tight text-marine-gold leading-none">
                  JJ Marine
                </span>
                <span className="text-[0.6rem] uppercase tracking-widest text-white/70 font-medium mt-1">
                  Logistics & HR
                </span>
              </div>
            </div>
            <p className="max-w-[18rem] text-[0.92rem] leading-7 text-white/72">
              Empowering global maritime trade through strategic excellence in
              logistics and human resource management. Based in Kochi, serving
              the world.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#home"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-marine-gold hover:text-marine-primary"
              >
                <LanguageIcon className="h-5 w-5" />
              </a>
              <a
                href="#about"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-marine-gold hover:text-marine-primary"
              >
                <PersonIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@jjmarinelogistics.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-marine-gold hover:text-marine-primary"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="font-display text-[1.05rem] font-semibold">
              Services
            </h4>
            <ul className="space-y-3 text-[0.92rem] text-white/70">
              <li>
                <Link href="/services" className="transition-colors hover:text-white">
                  Marine Logistics
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-white">
                  HR Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-white">
                  Maritime Recruitment
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-white">
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
                  Maritime Center, Kochi,
                  <br />
                  Kerala, India - 682001
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 text-marine-gold" />
                <span>+91 (484) 2345 6789</span>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 text-marine-gold" />
                <span>info@jjmarinelogistics.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="font-display text-[1.05rem] font-semibold">
              Newsletter
            </h4>
            <p className="text-[0.92rem] leading-6 text-white/70">
              Stay updated with maritime industry news and job opportunities.
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 pr-20 text-sm text-white outline-none placeholder:text-white/40 focus:border-marine-gold/60"
              />
              <button
                type="button"
                className="absolute right-2 top-2 rounded-[8px] bg-gradient-to-r from-marine-gold to-marine-gold-soft px-3 py-1.5 text-[0.78rem] font-bold text-marine-primary"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-[0.9rem] text-white/60">
              © 2024 JJ Marine Logistics &amp; HR Solutions. All rights
              reserved.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.82rem] text-white/55">
              <a href="#contact" className="transition-colors hover:text-marine-gold">
                Privacy Policy
              </a>
              <a href="#contact" className="transition-colors hover:text-marine-gold">
                Terms of Service
              </a>
              <a href="#contact" className="transition-colors hover:text-marine-gold">
                Cookie Policy
              </a>
              <a href="#contact" className="transition-colors hover:text-marine-gold">
                Global Compliance
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#contact"
        aria-label="Quick inquiry"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-marine-gold to-marine-gold-soft text-marine-primary shadow-[0_18px_40px_rgba(212,175,55,0.35)] transition-transform hover:scale-110 active:scale-95 md:bottom-8 md:right-8 md:h-16 md:w-16"
      >
        <ChatBubbleIcon className="h-6 w-6 md:h-7 md:w-7" />
      </a>
    </footer>
  );
}
