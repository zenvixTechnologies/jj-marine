"use client";

import Image from "next/image";
import { Users, Mail, Award, Briefcase } from "lucide-react";

const teamMembers = [
  {
    name: "Jobin Joseph",
    role: "Founder & Managing Director",
    subRole: "Operation Head",
    image: "/images/team/founder.png",
    bio: "Driving the strategic vision, global partnerships, and overall operations of JJ Marine Logistics & HR Solutions Pvt. Ltd.",
    isFounder: true,
  },
  {
    name: "Manu Murugan",
    role: "Marine Head",
    subRole: "Vessel & Fleet Operations",
    image: "/images/team/marine_head.png",
    bio: "Directing offshore marine operations, technical crew deployment, and port agency logistics.",
  },
  {
    name: "Capt. Sooraj Andiyan",
    role: "Logistics Head",
    subRole: "Supply Chain & Transit",
    image: "/images/team/logistics_head.png",
    bio: "Overseeing multi-modal freight management, customs clearance, and global cargo routing.",
  },
  {
    name: "Dr. Juby Jobin",
    role: "HR and Accounts Head",
    subRole: "Talent & Financial Governance",
    image: "/images/team/hr_head.png",
    bio: "Leading human capital recruitment, corporate administration, and financial compliance.",
  },
  {
    name: "Dr. Ambily Thankachan (PhD)",
    role: "Marine Weather Forecasting Manager",
    subRole: "Meteorological & Route Intelligence",
    image: "/images/team/weather_manager.png",
    bio: "Specializing in oceanographic climate analysis, marine forecasting, and voyage route advisory.",
  },
  {
    name: "Digital & AI Systems Manager",
    role: "IT and Digital Manager",
    subRole: "Digital Transformation & AI",
    image: "/images/team/it_manager.png",
    bio: "Architecting cloud infrastructure, digital recruitment platforms, and AI-driven automation.",
  },
];

export default function LeadershipSection() {
  return (
    <section className="bg-[#e6e8e1]/60 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
            <Users className="h-4 w-4" />
            <span>Leadership & Key Personnel</span>
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold text-[#0f3d3e]">
            Meet the Visionaries Behind JJ Marine
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#475558] md:text-base">
            Guided by seasoned industry leaders, sea captains, and domain specialists committed to excellence across logistics, marine, and human resources.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className={[
                "group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between border",
                member.isFounder
                  ? "border-[#d4af37] ring-2 ring-[#d4af37]/20"
                  : "border-gray-100",
              ].join(" ")}
            >
              {/* Top Card Area */}
              <div>
                {/* Image Container */}
                <div className="relative mb-6 aspect-[4/4] w-full overflow-hidden rounded-xl bg-gray-100 shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d3e]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-[#0f3d3e]/80 backdrop-blur-md px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[#d4af37] border border-[#d4af37]/30">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="mb-3">
                  <h3 className="font-display text-xl font-bold text-[#0f3d3e] group-hover:text-[#1e6f5c] transition-colors">
                    {member.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                    <Briefcase className="h-3.5 w-3.5" />
                    <span>{member.role}</span>
                  </div>
                  {member.subRole && (
                    <div className="mt-1 inline-block rounded-md bg-[#e2e8e8]/60 px-2 py-0.5 text-[0.75rem] font-semibold text-[#1e6f5c]">
                      {member.subRole}
                    </div>
                  )}
                </div>

                <p className="text-xs leading-relaxed text-[#475558] mb-4">
                  {member.bio}
                </p>
              </div>

              {/* Card Footer Accent */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#1e6f5c]">
                <span className="flex items-center gap-1">
                  <Award className="h-3.5 w-3.5 text-[#d4af37]" />
                  JJ Marine Leadership
                </span>
                <span className="text-[0.7rem] uppercase tracking-wider text-gray-400">
                  Verified Executive
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
