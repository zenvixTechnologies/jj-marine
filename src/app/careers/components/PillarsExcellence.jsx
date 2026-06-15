// components/PillarsExcellence.jsx

"use client";

import { Users, Globe, ShieldCheck, Gauge } from "lucide-react";

export default function PillarsExcellence() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1280px] px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-marine-gold font-bold uppercase tracking-[0.2em] text-xs">
            The JJ Marine Advantage
          </span>
          <h2 className="font-display text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-tight tracking-[-0.03em] text-marine-primary mt-2">
            Pillars of Excellence
          </h2>
        </div>

        <div className="relative flex items-center justify-center h-[600px] max-w-[800px] mx-auto">
          {/* Central Emblem */}
          <div className="relative z-20 group">
            <div className="w-48 h-48 rounded-full horizon-gradient flex items-center justify-center shadow-2xl relative overflow-hidden transition-transform duration-500 group-hover:scale-115">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <div className="text-center">
                <div className="font-display text-5xl text-marine-gold font-extrabold tracking-tighter">JJ</div>
                <div className="text-[10px] text-white font-bold tracking-[0.3em] uppercase mt-1">Marine</div>
              </div>
            </div>
            {/* Orbit Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-marine-gold/20 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-marine-secondary/10 rounded-full animate-[spin_30s_linear_infinite_reverse] pointer-events-none"></div>
          </div>

          {/* Floating Feature Cards */}
          {/* Top Left */}
          <div className="absolute top-0 left-0 md:left-8 animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: "0s" }}>
            <div className="glass-card p-6 rounded-2xl w-60 md:w-64 shadow-xl border-l-4 border-l-marine-gold bg-white/70 border border-marine-primary/5">
              <div className="text-marine-gold mb-3">
                <Users size={24} />
              </div>
              <h4 className="font-bold text-marine-primary mb-1 text-sm md:text-base">Experienced Team</h4>
              <p className="text-xs text-marine-text leading-relaxed">Over 25 years of cumulative maritime and HR expertise.</p>
            </div>
          </div>

          {/* Top Right */}
          <div className="absolute top-20 right-0 md:right-8 animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: "1.5s" }}>
            <div className="glass-card p-6 rounded-2xl w-60 md:w-64 shadow-xl border-l-4 border-l-marine-secondary bg-white/70 border border-marine-primary/5">
              <div className="text-marine-secondary mb-3">
                <Globe size={24} />
              </div>
              <h4 className="font-bold text-marine-primary mb-1 text-sm md:text-base">Global Network</h4>
              <p className="text-xs text-marine-text leading-relaxed">Strategic offices in 6 countries spanning 3 continents.</p>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-10 left-0 md:left-12 animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: "3s" }}>
            <div className="glass-card p-6 rounded-2xl w-60 md:w-64 shadow-xl border-l-4 border-l-marine-secondary bg-white/70 border border-marine-primary/5">
              <div className="text-marine-secondary mb-3">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-bold text-marine-primary mb-1 text-sm md:text-base">100% Compliance</h4>
              <p className="text-xs text-marine-text leading-relaxed">Certified by major maritime regulatory bodies worldwide.</p>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-0 right-0 md:right-12 animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: "4.5s" }}>
            <div className="glass-card p-6 rounded-2xl w-60 md:w-64 shadow-xl border-l-4 border-l-marine-gold bg-white/70 border border-marine-primary/5">
              <div className="text-marine-gold mb-3">
                <Gauge size={24} />
              </div>
              <h4 className="font-bold text-marine-primary mb-1 text-sm md:text-base">Swift Placement</h4>
              <p className="text-xs text-marine-text leading-relaxed">Optimized matching algorithms for rapid role fulfillment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-full h-12 fill-marine-surface" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.35c33.85,14.59,76.23,24.16,120,24.16S249.26,60.83,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
