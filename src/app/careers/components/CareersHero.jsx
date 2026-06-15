// components/CareersHero.jsx

"use client";

import Image from "next/image";
import { Plane, Anchor, Star } from "lucide-react";

export default function CareersHero() {
  return (
    <section className="relative min-h-[920px] horizon-gradient flex items-center overflow-hidden">
      {/* Decorative Wave Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 Q 250 50 500 100 T 1000 100 V 1000 H 0 Z" fill="white" fillOpacity="0.1"></path>
        </svg>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-16">
        <div className="text-white space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-marine-gold animate-pulse mr-2"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-marine-gold-soft">Global Operations 2024</span>
          </div>
          
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4rem)] font-extrabold leading-tight">
            Navigating Careers <br /> Across the <span className="text-marine-gold">Horizon</span>
          </h1>
          
          <p className="text-lg text-white/80 max-w-xl">
            Connecting elite maritime talent with world-class opportunities in India, Canada, Singapore, and beyond. Experience a career portal built for global mobility.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gradient-to-r from-marine-gold to-marine-gold-soft text-marine-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform active:scale-95 cursor-pointer">
              Explore Global Openings
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all cursor-pointer">
              Our Reach
            </button>
          </div>
        </div>

        <div className="relative min-h-[500px] flex items-center justify-center">
          {/* World Map Visualization */}
          <div className="relative w-full aspect-square max-w-[500px]">
            <Image
              src="/images/world-map.jpg"
              alt="World Map Reach"
              fill
              className="object-contain opacity-40 mix-blend-screen"
              priority
            />
            
            {/* Floating Country Panels */}
            {/* Canada Panel */}
            <div className="absolute top-1/4 left-1/10 md:left-1/4 animate-[float_6s_ease-in-out_infinite]">
              <div className="glass-card p-4 rounded-xl shadow-2xl scale-90 md:scale-100 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-marine-secondary flex items-center justify-center text-white">
                    <Plane size={16} className="rotate-45" />
                  </div>
                  <div>
                    <div className="text-[10px] text-marine-gold font-bold uppercase tracking-wider">North America</div>
                    <div className="text-marine-primary font-bold text-sm">Canada Hub</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Singapore Panel */}
            <div className="absolute bottom-1/3 right-1/10 md:right-1/4 animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: "2s" }}>
              <div className="glass-card p-4 rounded-xl shadow-2xl scale-90 md:scale-100 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-marine-secondary flex items-center justify-center text-white">
                    <Anchor size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-marine-gold font-bold uppercase tracking-wider">Asia Pacific</div>
                    <div className="text-marine-primary font-bold text-sm">Singapore Core</div>
                  </div>
                </div>
              </div>
            </div>

            {/* India HQ Panel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: "4s" }}>
              <div className="glass-card p-6 rounded-2xl shadow-2xl border border-marine-gold/40">
                <div className="text-center">
                  <div className="font-display text-xl font-bold text-marine-primary">India HQ</div>
                  <div className="text-xs text-marine-secondary font-medium tracking-wide">Strategic Logistics Node</div>
                  <div className="mt-2 text-marine-gold flex justify-center gap-1">
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
