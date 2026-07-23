"use client";

import Image from "next/image";
import { CheckCircle2, Target, HeartHandshake, Compass } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="bg-[#f0f4f4] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        {/* Welcome Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#1e6f5c]">
            <Compass className="h-4 w-4" />
            <span>Welcome & Mission Statement</span>
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0f3d3e]">
            Welcome to JJ Marine Logistics & HR Solutions Pvt. Ltd.
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#d4af37]" />
        </div>

        {/* Content Box with Decorative Card Styling */}
        <div className="relative overflow-hidden rounded-2xl border border-white bg-white/80 p-8 shadow-xl backdrop-blur-md md:p-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Mission Text */}
            <div className="space-y-6 lg:col-span-7">
              <div className="rounded-xl border-l-4 border-[#d4af37] bg-[#f8faf9] p-6 shadow-sm">
                <p className="text-base leading-relaxed font-medium text-[#1e292b] md:text-lg">
                  Our mission is to provide reliable marine logistics, manpower recruitment, HR support, visa assistance, and travel solutions to clients across India and overseas. We are committed to professionalism, integrity, and customer satisfaction in every service we deliver.
                </p>
              </div>

              <p className="text-base leading-relaxed text-[#475558] md:text-lg">
                At JJ Marine Logistics & HR Solutions Pvt. Ltd., we strive to build long-term relationships with our clients and partners by offering efficient, cost-effective, and dependable solutions.
              </p>

              <div className="rounded-xl bg-[#0f3d3e]/5 p-5 border border-[#0f3d3e]/10">
                <p className="font-display text-base font-semibold text-[#0f3d3e] md:text-lg">
                  We look forward to serving your business needs and contributing to your success.
                </p>
              </div>

              {/* Pillars Badges */}
              <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
                {[
                  "Professionalism",
                  "Integrity",
                  "Customer Satisfaction",
                  "Dependability",
                ].map((pillar) => (
                  <div
                    key={pillar}
                    className="flex items-center gap-2 rounded-lg bg-white px-3 py-2.5 shadow-sm border border-gray-100"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1e6f5c]" />
                    <span className="text-xs font-bold text-[#0f3d3e]">
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side Illustration Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0f3d3e] to-[#1e6f5c] p-8 text-white shadow-xl">
                <Target className="mb-4 h-10 w-10 text-[#d4af37]" />
                <h3 className="mb-3 font-display text-xl font-bold text-white">
                  Our Core Commitment
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-emerald-100/90">
                  Delivering end-to-end operational excellence with customized, transparent, and seamless solutions across marine transport, crew recruitment, and global HR governance.
                </p>
                <div className="flex items-center gap-3 border-t border-white/20 pt-4">
                  <HeartHandshake className="h-6 w-6 text-[#d4af37]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
                    Trusted Worldwide
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
