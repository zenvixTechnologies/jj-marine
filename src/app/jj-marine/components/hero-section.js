/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import {
  AnchorIcon,
  ArrowRightIcon,
  GlobeIcon,
  VerifiedIcon,
  UsersIcon,
} from "./icons";

const stats = [
  { icon: UsersIcon, value: "5,000+", label: "Placements", delay: "0s" },
  { icon: GlobeIcon, value: "120+", label: "Global Partners", delay: "0.5s" },
  { icon: AnchorIcon, value: "15", label: "Maritime Sectors", delay: "1s" },
  { icon: VerifiedIcon, value: "98%", label: "Satisfaction", delay: "1.5s" },
];

function StatCard({ icon: Icon, value, label, delay }) {
  return (
    <div
      className="animate-float rounded-[18px] bg-[#dbe1de] p-5 shadow-[0_20px_35px_rgba(0,0,0,0.08)]"
      style={{ animationDelay: delay }}
    >
      <div className="mb-4 flex h-8 w-8 items-center justify-center text-marine-gold">
        <Icon className="h-5 w-5" />
      </div>
      <div className="font-display text-[1.8rem] font-bold leading-none text-marine-primary">
        {value}
      </div>
      <div className="mt-1 text-[0.82rem] font-medium text-marine-text">
        {label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-marine-primary via-[#176050] to-marine-secondary pt-[56px]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(212,175,55,0.12),transparent_45%),radial-gradient(circle_at_20%_70%,rgba(255,255,255,0.05),transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f8f9fa] to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1280px] gap-10 px-4 pb-16 pt-16 md:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-24 lg:pt-20">
        <div className="max-w-[560px] text-white">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 backdrop-blur-sm">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-marine-gold-soft">
              Excellence in Maritime Logistics
            </span>
          </div>

          <h1 className="font-display mt-5 max-w-[11ch] text-[clamp(2.5rem,5vw,4.3rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-balance">
            JJ Marine Logistics &amp;
            <br />
            <span className="text-marine-gold">HR Solutions</span>
          </h1>

          <p className="mt-5 max-w-[42rem] text-[0.96rem] leading-7 text-white/86 md:text-[1.05rem]">
            Connecting Talent, Logistics &amp; Global Opportunities through a
            premier network of maritime excellence and strategic human capital
            management.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 md:gap-4">
            <Link
              href="#services"
              className="group inline-flex items-center gap-2 rounded-[10px] bg-gradient-to-r from-marine-gold to-marine-gold-soft px-5 py-3.5 text-[0.9rem] font-bold text-marine-primary shadow-[0_18px_30px_rgba(212,175,55,0.22)] transition-transform hover:scale-[1.02]"
            >
              Apply for Jobs
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="#services"
              className="rounded-[10px] border border-white/30 px-5 py-3.5 text-[0.9rem] font-bold text-white backdrop-blur-sm transition-colors hover:border-marine-gold hover:bg-white/5"
            >
              Request Services
            </Link>

            <Link
              href="#contact"
              className="px-2 py-3.5 text-[0.9rem] font-bold text-white/72 transition-colors hover:text-marine-gold"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[520px] items-center">
          <div className="absolute inset-x-8 top-14 h-[68%] rounded-[22px] bg-marine-panel-deep/80 shadow-[0_28px_80px_rgba(0,0,0,0.18)]" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOxv3YLuYy4ZhjRCIaQCKKkLb_XoUDbWk_dHgxO5DoyMvOrKzZmrC2JSFYagRmyO5o35HFV2Rl771qLHxP5OS43XaxfhaeX6JX3R9TaPD4YV0-h2brfRT2VA5_S2VSC9QNY9ZWm6GeUKGaol9McD3s-Z4TGENBFLtzFfcHTXsZQTkf8eFaLA5V1W4fe-1d3E_D0VM0CK-aSjHLq_qsbDNaU1Gf94iYrPviyqdATDmRtoHczud58GNHeZIT2I17oqmoegL1dpK1IeU"
            alt="Logistics map backdrop"
            className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-25 mix-blend-overlay"
          />

          <div className="relative z-10 grid w-full grid-cols-2 gap-4 p-3 md:gap-5 md:p-0">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>

      <svg
        className="relative block h-10 w-full rotate-180 text-[#f8f9fa]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
