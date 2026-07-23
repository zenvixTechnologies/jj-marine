"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, MapPin, Globe2, Building2 } from "lucide-react";

export default function DubaiExpansionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // Show modal after a small initial delay (e.g. 500ms for smooth entrance)
    const showTimer = setTimeout(() => {
      setIsOpen(true);
    }, 400);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // 5-second auto-close countdown
    const duration = 5000;
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= step) {
          clearInterval(timer);
          setIsOpen(false);
          return 0;
        }
        return prev - step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Dark Blurred Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
        onClick={handleClose}
      />

      {/* Animated Popup Modal Box */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border-2 border-[#d4af37] bg-gradient-to-br from-[#0a2c2d] via-[#0f3d3e] to-[#124e4f] p-6 sm:p-8 text-white shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-500 animate-scaleUp">
        {/* Animated Countdown Progress Bar at Top */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-[#d4af37] via-[#f1d592] to-[#d4af37] transition-all ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 transition-all hover:bg-[#d4af37] hover:text-[#0f3d3e] hover:rotate-90 focus:outline-none"
          aria-label="Close Announcement"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Inner Content */}
        <div className="space-y-5 pt-2">
          {/* Pulsing Announcement Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/15 px-3.5 py-1 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d4af37]"></span>
            </span>
            <span className="text-[0.72rem] font-bold uppercase tracking-widest text-[#d4af37] flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              Global Expansion Announcement
            </span>
          </div>

          {/* Title */}
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#f1d592] text-[#0f3d3e] shadow-lg">
              <MapPin className="h-6 w-6 animate-bounce" />
            </div>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Expanding Soon to{" "}
                <span className="bg-gradient-to-r from-[#d4af37] via-[#f1d592] to-[#ffffff] bg-clip-text text-transparent">
                  Dubai, UAE 🇦🇪
                </span>
              </h3>
              <p className="text-xs text-emerald-200/90 font-medium mt-0.5">
                Strategic GCC Maritime &amp; HR Network
              </p>
            </div>
          </div>

          {/* Statement Quote Block */}
          <div className="relative rounded-2xl border-l-4 border-[#d4af37] bg-[#092223]/80 p-4 sm:p-5 text-sm sm:text-base leading-relaxed text-emerald-50 italic backdrop-blur-sm shadow-inner">
            <span className="absolute -top-2 left-3 text-2xl font-serif text-[#d4af37] leading-none select-none">
              “
            </span>
            <p className="pl-2">
              JJ Marine Logistics &amp; HR Solutions Pvt. Ltd. is pleased to announce its planned expansion to Dubai, UAE, as part of our vision to provide world-class marine logistics and HR solutions across the GCC region.
            </p>
          </div>

          {/* Quick Badges */}
          <div className="grid grid-cols-2 gap-3 pt-1 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-emerald-100 border border-white/10">
              <Building2 className="h-4 w-4 text-[#d4af37]" />
              <span>Dubai Hub</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-emerald-100 border border-white/10">
              <Globe2 className="h-4 w-4 text-[#d4af37]" />
              <span>GCC Region</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#d4af37]/20 px-3 py-2 text-xs font-bold text-[#d4af37] border border-[#d4af37]/40">
              <span>Auto-close in 5s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
