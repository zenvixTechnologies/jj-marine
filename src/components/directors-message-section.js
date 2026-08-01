"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, Award, Anchor, Compass, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

export default function DirectorsMessageSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a2728] via-[#0f3d3e] to-[#071f20] py-20 text-white md:py-28">
      {/* Background Decorative Pattern & Glows */}
      <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#1e6f5c]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#d4af37]/15 blur-[140px]" />

      <div className="relative mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37] backdrop-blur-md shadow-sm">
            <Quote className="h-4 w-4" />
            <span>Director's Message</span>
          </div>
          <h2 className="font-display text-[clamp(2.1rem,3.5vw,3.1rem)] font-bold leading-tight tracking-tight text-white">
            Leadership Vision &amp; Maritime Excellence
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
            A personal message from our Managing Director on our core principles, ocean navigation heritage, and commitment to Customers and clients mathy not seafarers.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          {/* Left Column: Officer Portrait Card (Compact & Small) */}
          <div className="lg:col-span-4 xl:col-span-4">
            <div className="sticky top-24 mx-auto max-w-xs overflow-hidden rounded-2xl border border-[#d4af37]/30 bg-[#071f20]/90 p-2.5 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-[#d4af37]/60 lg:max-w-[310px]">
              {/* Image Container - Sleek Compact Size */}
              <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-xl bg-[#0f3d3e]">
                <Image
                  src="/images/directors_message_full.jpg"
                  alt="Jobin Joseph - Managing Director"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Ambient Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071f20] via-transparent to-black/20" />

                {/* Floating Rank Badge */}
                <div className="absolute top-2.5 left-2.5 rounded-lg border border-[#d4af37]/40 bg-[#071f20]/85 px-2 py-0.5 backdrop-blur-md">
                  <div className="flex items-center gap-1.5">
                    <Anchor className="h-3 w-3 text-[#d4af37]" />
                    <span className="font-display text-[0.65rem] font-bold uppercase tracking-wider text-[#d4af37]">
                      Second Officer • Tanker Fleet
                    </span>
                  </div>
                </div>
              </div>

              {/* Director Details Header */}
              <div className="p-3.5">
                <h3 className="font-display text-lg font-bold text-white">
                  Jobin Joseph
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-[#d4af37]">
                  Managing Director &amp; Founder
                </p>
                <p className="text-[0.7rem] text-gray-400">
                  JJ Marine Logistics and HR Solutions
                </p>

                {/* Highlight Stats / Badges */}
                <div className="mt-3 space-y-2 border-t border-[#1e6f5c]/40 pt-3">
                  <div className="flex items-start gap-2 text-[0.75rem] text-gray-300">
                    <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d4af37]" />
                    <span>
                      <strong className="text-white">Sea Career Since 2013:</strong> Over a decade of maritime experience.
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-[0.75rem] text-gray-300">
                    <Compass className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d4af37]" />
                    <span>
                      <strong className="text-white">Synergy Marine Group:</strong> Tanker fleet operations since 2018.
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-[0.75rem] text-gray-300">
                    <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d4af37]" />
                    <span>
                      <strong className="text-white">Global Charterers:</strong> Shell, BP, Sinokor &amp; top standards.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Message Letter */}
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-md md:p-10">
              {/* Large Watermark Quote Mark */}
              <Quote className="pointer-events-none absolute top-6 right-8 h-20 w-20 text-[#d4af37]/10" />

              {/* Greeting */}
              <h3 className="font-display text-xl font-bold tracking-tight text-[#d4af37] md:text-2xl">
                Welcome to our Marine Logistics and HR Solutions company.
              </h3>

              {/* Message Body */}
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-200 md:text-base md:leading-8">
                <p>
                  It is my privilege to welcome you as we embark on a new journey dedicated to serving the maritime industry with professionalism, integrity, and excellence. Our company was founded with a clear vision—to provide reliable marine logistics services and connect the industry with highly qualified and competent maritime professionals.
                </p>

                <p>
                  My sea career began in 2013, and since 2018 I have been serving with <strong className="text-white font-semibold">Synergy Marine Group</strong>, one of the world's largest ship management companies. Currently, I am working as a <strong className="text-[#d4af37] font-semibold">Second Officer in the tanker fleet</strong>, where I have gained extensive practical experience in tanker operations, navigation, safety management, cargo handling, and international maritime regulations.
                </p>

                {/* Collapsible Content */}
                <div
                  className={`space-y-4 transition-all duration-500 overflow-hidden ${isExpanded ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                >
                  <p>
                    Throughout my career, I have had the privilege of serving on vessels operating under the requirements of some of the world's most respected charterers, including <span className="text-white font-medium">Shell, BP, sinokor</span> and other internationally recognized companies. These experiences have given me valuable insight into the highest standards of operational excellence, safety, compliance, and professionalism expected in today's shipping industry.
                  </p>

                  <p>
                    The knowledge and experience I have gained at sea inspired me to establish this company with the objective of delivering dependanble marine logistics services and trustworthy HR solutions for the various sectors
                  </p>

                  <p className="font-medium text-white italic pt-2">
                    Thank you for placing your trust in us. We look forward to serving you with dedication, professionalism, and excellence.
                  </p>
                </div>
              </div>

              {/* Read More / Read Less Button */}
              <div className="mt-6">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#d4af37]/40 bg-[#d4af37]/15 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#d4af37] backdrop-blur-md transition-all duration-300 hover:bg-[#d4af37] hover:text-[#0f3d3e] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  {isExpanded ? (
                    <>
                      <span>Read Less</span>
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <span>Read More</span>
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Formal Sign-off Section */}
              <div className="mt-10 border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Warm Regards,
                  </p>
                  <h4 className="mt-1 font-display text-2xl font-bold text-white tracking-wide">
                    Jobin Joseph
                  </h4>
                  <p className="text-sm font-semibold text-[#d4af37]">
                    Managing Director
                  </p>
                  <p className="text-xs text-gray-300">
                    JJ Marine Logistics and HR Solutions
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 rounded-2xl border border-[#d4af37]/30 bg-[#071f20] px-4 py-3 shadow-inner">
                  <CheckCircle2 className="h-5 w-5 text-[#d4af37]" />
                  <div className="text-left">
                    <div className="text-[0.7rem] font-bold uppercase tracking-wider text-[#d4af37]">
                      Verified Leader
                    </div>
                    <div className="text-xs text-gray-300">
                      Second Officer • Synergy Marine
                    </div>
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


