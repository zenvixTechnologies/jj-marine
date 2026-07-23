"use client";

import Image from "next/image";
import Link from "next/link";
import { Anchor, ShieldCheck, Award, Globe } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f3d3e] via-[#124e4f] to-[#0f3d3e] py-16 text-white md:py-24">
      {/* Background Decorative Blur Circles */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#1e6f5c]/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#d4af37]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & Key Metrics */}
          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              <Anchor className="h-4 w-4" />
              <span>About JJ Marine Logistics & HR Solutions Pvt. Ltd.</span>
            </div>

            <h1 className="mb-6 font-display text-[clamp(2.1rem,4vw,3.4rem)] font-extrabold leading-[1.15] tracking-tight text-white">
              Navigating Global Commerce & Empowering Workforce Excellence
            </h1>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-emerald-100/90 md:text-lg">
              We bridge maritime operations and corporate talent solutions, connecting high-caliber professionals with leading fleets and international enterprises worldwide.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <ShieldCheck className="mb-2 h-6 w-6 text-[#d4af37]" />
                <div className="font-display text-2xl font-bold text-white md:text-3xl">100%</div>
                <div className="text-xs text-emerald-200/80 uppercase font-medium mt-1">Compliance & Integrity</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <Globe className="mb-2 h-6 w-6 text-[#d4af37]" />
                <div className="font-display text-2xl font-bold text-white md:text-3xl">Global</div>
                <div className="text-xs text-emerald-200/80 uppercase font-medium mt-1">Fleet Reach</div>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <Award className="mb-2 h-6 w-6 text-[#d4af37]" />
                <div className="font-display text-2xl font-bold text-white md:text-3xl">24 / 7</div>
                <div className="text-xs text-emerald-200/80 uppercase font-medium mt-1">Operations Support</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/hero.png"
                  alt="JJ Marine Corporate Overview"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d3e]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block rounded-md bg-[#d4af37] px-2.5 py-1 text-[0.7rem] font-extrabold uppercase text-[#0f3d3e]">
                    Trusted Partner
                  </span>
                  <p className="mt-2 font-display text-sm font-semibold italic text-white/95">
                    "Setting benchmark standards in marine logistics and global manpower deployment."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
