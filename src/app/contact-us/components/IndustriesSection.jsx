// components/IndustriesSection.jsx

import {
  Ship,
  Compass,
  Globe,
  Droplet,
  HardHat,
  ConciergeBell,
  HeartPulse,
  Cpu,
  Factory,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    title: "Shipping",
    description: "Providing high-caliber deck and engine crew for global commercial shipping fleets.",
    icon: <Ship size={24} />,
  },
  {
    title: "Marine & Offshore",
    description: "Technical support and staffing services for rigs, vessels, and offshore operations.",
    icon: <Compass size={24} />,
  },
  {
    title: "Logistics & Transportation",
    description: "End-to-end personnel solutions for international freight routing and supply chain systems.",
    icon: <Globe size={24} />,
  },
  {
    title: "Oil & Gas",
    description: "Highly specialized engineering and operations crew for offshore energy and refining facilities.",
    icon: <Droplet size={24} />,
  },
  {
    title: "Construction",
    description: "Skilled trade labor, civil engineers, and project managers for large-scale industrial projects.",
    icon: <HardHat size={24} />,
  },
  {
    title: "Hospitality",
    description: "Service crew, culinary staff, and guest managers for international cruise lines and hotels.",
    icon: <ConciergeBell size={24} />,
  },
  {
    title: "Healthcare",
    description: "Direct recruitment and compliance coordination for international medical professionals.",
    icon: <HeartPulse size={24} />,
  },
  {
    title: "Information Technology",
    description: "Experienced developers and systems managers to scale digital logistics and maritime tech.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Manufacturing",
    description: "Technical crew, quality assurance, and assembly specialists for global production hubs.",
    icon: <Factory size={24} />,
  },
  {
    title: "Education",
    description: "Bridge training programs and placement solutions from premier maritime institutes.",
    icon: <GraduationCap size={24} />,
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-marine-surface py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-marine-gold font-semibold tracking-widest uppercase text-xs">
            Global Impact
          </span>

          <h2 className="font-display text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-tight tracking-[-0.03em] mt-4 text-marine-primary">
            Industries We Serve
          </h2>

          <p className="mt-4 text-[0.95rem] leading-7 text-marine-text md:text-[1rem]">
            Powering the world's most critical sectors with elite personnel and logistical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_60px_rgba(15,61,62,0.08)] hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity bg-marine-gold pointer-events-none" />
              
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-marine-primary/5 text-marine-primary group-hover:bg-gradient-to-br group-hover:from-marine-gold group-hover:to-marine-gold-soft group-hover:text-marine-primary transition-all duration-300 shadow-sm">
                {industry.icon}
              </div>

              <h3 className="mb-2 font-display text-[1.15rem] font-bold text-marine-primary">
                {industry.title}
              </h3>

              <p className="text-[0.88rem] leading-relaxed text-marine-text/90">
                {industry.description}
              </p>

              <button className="mt-5 flex items-center gap-1.5 font-bold text-marine-gold text-xs transition-colors group-hover:text-marine-primary cursor-pointer">
                Explore Services
                <ArrowRight
                  size={12}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}