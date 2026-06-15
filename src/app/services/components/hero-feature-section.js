/* eslint-disable @next/next/no-img-element */

import {
  AnchorIcon,
  DocumentIcon,
  FreightIcon,
  ImportExportIcon,
  OfficeIcon,
} from "./icons";

function FeatureItem({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-4 rounded-lg bg-[#e2e8e8]/50 p-4 transition-colors hover:bg-white">
      <div className="text-[#1e6f5c]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="font-bold text-[#0f3d3e]">{title}</h4>
        <p className="text-sm text-[#475558]">{text}</p>
      </div>
    </div>
  );
}

export default function HeroFeatureSection() {
  return (
    <section className="mb-8">
      <div className="glass-card group overflow-hidden rounded-xl p-8 shadow-xl transition-all duration-500 hover:ring-2 hover:ring-[#d4af37]/30">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="mb-4 inline-flex items-center gap-2 font-display text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[#d4af37]">
              <AnchorIcon className="h-4 w-4" />
              <span>Global Operations</span>
            </div>
            <h2 className="mb-6 font-display text-[clamp(1.6rem,2.6vw,2.1rem)] font-semibold tracking-[-0.03em] text-[#0f3d3e]">
              Marine Logistics Services
            </h2>
            <p className="mb-8 max-w-[38rem] text-[0.95rem] leading-7 text-[#475558]">
              End-to-end supply chain mastery. We handle the heavy lifting of
              global trade so your fleet remains focused on the horizon.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureItem
                icon={ImportExportIcon}
                title="Export/Import"
                text="Seamless cross-border documentation and transit management."
              />
              <FeatureItem
                icon={FreightIcon}
                title="Freight Forwarding"
                text="Optimized multi-modal transportation solutions worldwide."
              />
              <FeatureItem
                icon={DocumentIcon}
                title="Customs Clearance"
                text="Expert handling of regulatory compliance and duty optimization."
              />
              <FeatureItem
                icon={OfficeIcon}
                title="Vessel Agency"
                text="Local representation for international fleets in major ports."
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative min-h-[400px] overflow-hidden rounded-xl shadow-inner">
              <img
                alt="Logistics Control Center"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYe62d_uILiohoxbXYb5O0UdhUlNDt2q_Jgjnrfnu9xigJ-QGGxLVlfKZpN-G9sTuTw_FIpIyRlSu0Cm_o54jxyLeIdk2saWzUb47x-9RKswtskVs4hVTLY7RAvq4l-kjFili-uOLqxFmPPykurfGk5DgeBc3dyW04i3yX5yQSeJJv0CRBZXGwvgxLg-r0ycBnvlqDPdxjWb_QlYauwXsxADYJk-oNiTosxd7qPcatxaRZ6XZlQ5A4GH844MtvxH1G42a45QAWs7c"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d3e]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
