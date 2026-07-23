"use client";

import { MapPin, Globe2, Sparkles, Building2, TrendingUp } from "lucide-react";

export default function DubaiExpansionBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0a2c2d] via-[#0f3d3e] to-[#124e4f] py-12 md:py-16 text-white border-y border-[#d4af37]/30 shadow-2xl">
      {/* Dynamic Animated Radar / Glow Accents */}
      <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[#d4af37]/15 blur-3xl animate-pulse" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#1e6f5c]/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="overflow-hidden rounded-3xl border border-[#d4af37]/40 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 md:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column: Eye-Catching Animated Announcement */}
            <div className="lg:col-span-7 space-y-5">
              {/* Pulsing Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/15 px-4 py-1.5 backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#d4af37]"></span>
                </span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#d4af37] flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  GCC Regional Expansion
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-tight text-white tracking-tight">
                Expanding Soon to{" "}
                <span className="bg-gradient-to-r from-[#d4af37] via-[#f1d592] to-[#ffffff] bg-clip-text text-transparent underline decoration-[#d4af37]/40 decoration-wavy">
                  Dubai, UAE 🇦🇪
                </span>
              </h2>

              {/* Official Announcement Quote */}
              <div className="relative rounded-2xl border-l-4 border-[#d4af37] bg-[#0f3d3e]/80 p-5 backdrop-blur-md shadow-inner">
                <span className="absolute -top-3 left-4 text-3xl font-serif text-[#d4af37] leading-none select-none">
                  “
                </span>
                <p className="pl-3 text-sm md:text-base leading-relaxed text-emerald-50 italic">
                  JJ Marine Logistics &amp; HR Solutions Pvt. Ltd. is pleased to announce its planned expansion to Dubai, UAE, as part of our vision to provide world-class marine logistics and HR solutions across the GCC region.
                </p>
              </div>

              {/* Highlights List */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-bold text-emerald-100 border border-white/10 backdrop-blur-sm">
                  <Building2 className="h-4 w-4 text-[#d4af37]" />
                  <span>Strategic Dubai Hub</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-bold text-emerald-100 border border-white/10 backdrop-blur-sm">
                  <Globe2 className="h-4 w-4 text-[#d4af37]" />
                  <span>GCC Maritime Operations</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-bold text-emerald-100 border border-white/10 backdrop-blur-sm">
                  <TrendingUp className="h-4 w-4 text-[#d4af37]" />
                  <span>Global Workforce Growth</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Dubai Landmark Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/30 bg-gradient-to-t from-[#0f3d3e] to-[#1e6f5c]/40 p-6 text-center shadow-2xl backdrop-blur-md">
                {/* Location Icon Badge */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#f1d592] text-[#0f3d3e] shadow-[0_10px_25px_rgba(212,175,55,0.4)] animate-bounce">
                  <MapPin className="h-8 w-8" />
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Dubai &amp; GCC Division
                </h3>
                <p className="text-xs text-emerald-100/80 leading-relaxed mb-6">
                  Connecting Middle East maritime trade corridors with South Asian crew talent and global logistics networks.
                </p>

                {/* Decorative Status Bar */}
                <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-md flex items-center justify-between text-xs font-semibold">
                  <span className="text-emerald-200">Phase 1 Launch:</span>
                  <span className="rounded-md bg-[#d4af37] px-2.5 py-1 text-[0.7rem] font-extrabold uppercase text-[#0f3d3e] tracking-wider">
                    In Progress 🚀
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
