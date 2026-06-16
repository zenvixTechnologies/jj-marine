import Link from "next/link";
import Image from "next/image";
import {
  LanguageIcon,
  PersonIcon,
  MailIcon,
  LocationIcon,
  PhoneIcon,
} from "./icons";

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-[#1e6f5c]/20 bg-[#0f3d3e] pt-20 text-[#e7e8e8]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-4 md:grid-cols-4 md:px-6">
        <div className="space-y-6">
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
              <span className="font-display text-[1.4rem] md:text-[1.6rem] font-bold uppercase tracking-tight text-[#d4af37] leading-none">
                JJ Marine
              </span>
              <span className="text-[0.65rem] md:text-[0.72rem] uppercase tracking-widest text-[#e7e8e8]/70 font-medium mt-1.5">
                Logistics & HR
              </span>
            </div>
          </div>
          <p className="max-w-[18rem] text-[0.88rem] leading-7 text-white/70">
            A global leader in maritime HR and logistics, committed to
            excellence at sea and on shore.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-[#0f3d3e]"
            >
              <LanguageIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-[#0f3d3e]"
            >
              <PersonIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-[#0f3d3e]"
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-[0.95rem] font-bold text-white">
            Expertise
          </h4>
          <ul className="space-y-4 text-[0.9rem] text-white/70">
            <li>
              <Link href="/services#marine-logistics" className="hover:text-[#d4af37]">
                Marine Logistics
              </Link>
            </li>
            <li>
              <Link href="/services#hr-solutions" className="hover:text-[#d4af37]">
                HR Solutions
              </Link>
            </li>
            <li>
              <Link href="/services#student-placements" className="hover:text-[#d4af37]">
                Student Placements
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-[0.95rem] font-bold text-white">
            Corporate
          </h4>
          <ul className="space-y-4 text-[0.9rem] text-white/70">
            <li>
              <a href="#" className="hover:text-[#d4af37]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#d4af37]">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#d4af37]">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#d4af37]">
                Global Compliance
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-[0.95rem] font-bold text-white">Contact</h4>
          <ul className="space-y-4 text-[0.9rem] text-white/70">
            <li className="flex gap-3">
              <LocationIcon className="mt-0.5 h-5 w-5 text-[#d4af37]" />
              <span>
                Headquarters: Global Maritime Tower,
                <br />
                42nd Floor, Singapore
              </span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 text-[#d4af37]" />
              <span>Phone: +1 (800) MAR-LINE</span>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 h-5 w-5 text-[#d4af37]" />
              <span>Email: contact@jjmarine.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1280px] flex-col items-center justify-between gap-4 border-t border-white/10 px-4 py-8 md:flex-row md:px-6">
        <p className="text-[0.74rem] text-white/50">
          © 2024 JJ Marine Logistics &amp; HR Solutions. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.15em] text-[#d4af37]">
            ISO 9001:2015 Certified
          </span>
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.15em] text-[#d4af37]">
            MLC 2006 Compliant
          </span>
        </div>
      </div>
    </footer>
  );
}
