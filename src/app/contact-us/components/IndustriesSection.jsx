// components/IndustriesSection.jsx

import {
  Ship,
  Droplet,
  Terminal,
  HeartPulse,
} from "lucide-react";
import IndustryCard from "./IndustryCard";

const industries = [
  {
    title: "Maritime & Shipping",
    description:
      "Providing high-caliber deck and engine crew for global fleets, ensuring operational efficiency and maritime safety.",
    image: "/images/shipping.jpg",
    icon: <Ship size={32} />,
  },
  {
    title: "Energy & Offshore",
    description:
      "Skilled technical support for offshore platforms and refinery operations across international waters.",
    image: "/images/offshore.jpg",
    icon: <Droplet size={32} />,
  },
  {
    title: "Tech & Innovation",
    description:
      "Bridging the talent gap in digital logistics, software development, and maritime tech solutions.",
    image: "/images/tech.jpg",
    icon: <Terminal size={32} />,
  },
  {
    title: "Global Healthcare",
    description:
      "Specialized HR solutions for international medical staffing and maritime medical protocols.",
    image: "/images/healthcare.jpg",
    icon: <HeartPulse size={32} />,
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

        <div className="flex gap-8 overflow-x-auto pb-4 scroller px-4">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} {...industry} />
          ))}
        </div>
      </div>
    </section>
  );
}