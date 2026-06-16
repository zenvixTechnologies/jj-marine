"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
  SailIcon,
  SchoolIcon,
  UsersIcon,
} from "./icons";

const services = [
  {
    title: "Marine Logistics",
    summary: "Global supply chain management and vessel operations.",
    icon: SailIcon,
    iconShell:
      "bg-gradient-to-r from-marine-gold to-marine-gold-soft text-marine-primary",
    details: [
      {
        title: "Fleet Management",
        text: "Optimized vessel scheduling and technical oversight for international fleets.",
      },
      {
        title: "Supply Chain",
        text: "Seamless door-to-port and port-to-port logistics across major trade routes.",
      },
      {
        title: "Warehousing",
        text: "Strategic hub locations providing climate-controlled secure storage solutions.",
      },
    ],
  },
  {
    title: "HR Solutions",
    summary: "Strategic human capital management for global enterprises.",
    icon: UsersIcon,
    iconShell: "bg-marine-primary text-marine-gold",
    details: [
      {
        title: "Talent Strategy",
        text: "Developing long-term workforce planning for the maritime and logistics sectors.",
      },
      {
        title: "Payroll & Admin",
        text: "International payroll compliance and administrative support for offshore teams.",
      },
      {
        title: "Training Programs",
        text: "Specialized certification and skill-upgrading modules for vessel crew.",
      },
    ],
  },
  {
    title: "Student Placements",
    summary: "The launchpad for the next generation of maritime professionals.",
    icon: SchoolIcon,
    iconShell:
      "bg-gradient-to-r from-marine-gold to-marine-gold-soft text-marine-primary",
    details: [
      {
        title: "Internships",
        text: "Exclusive bridge programs with global logistics partners for fresh graduates.",
      },
      {
        title: "Career Counseling",
        text: "Expert guidance on specialized certifications and career path mapping.",
      },
      {
        title: "University Tie-ups",
        text: "Collaborating with premier maritime institutes for direct campus placements.",
      },
    ],
  },
];

function ServiceCard({ service, isOpen, onToggle }) {
  const Icon = service.icon;

  return (
    <div className="overflow-hidden rounded-[24px] bg-white p-[1px] shadow-[0_14px_34px_rgba(17,34,30,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(17,34,30,0.12)]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 rounded-[23px] bg-white px-5 py-5 text-left md:px-8 md:py-7"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 md:gap-6">
          <div
            className={[
              "flex h-14 w-14 items-center justify-center rounded-[14px]",
              service.iconShell,
            ].join(" ")}
          >
            <Icon className="h-6 w-6" />
          </div>

          <div>
            <h3 className="font-display text-[1.15rem] font-semibold text-marine-secondary md:text-[1.4rem]">
              {service.title}
            </h3>
            <p className="mt-1 max-w-[40rem] text-[0.88rem] leading-6 text-marine-text md:text-[0.95rem]">
              {service.summary}
            </p>
          </div>
        </div>

        <span
          className={[
            "shrink-0 text-marine-gold transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0",
          ].join(" ")}
        >
          <ChevronDownIcon className="h-8 w-8" />
        </span>
      </button>

      <div
        className="overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          maxHeight: isOpen ? "28rem" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="border-t border-white/70 px-5 pb-6 pt-4 md:px-8 md:pb-8">
          <div className="grid gap-5 md:grid-cols-3 md:gap-8">
            {service.details.map((detail) => (
              <div key={detail.title} className="space-y-2">
                <h5 className="font-bold text-marine-secondary">
                  {detail.title}
                </h5>
                <p className="text-[0.88rem] leading-6 text-marine-text">
                  {detail.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="services"
      className="bg-[#eff1ed] py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="font-display text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-tight tracking-[-0.03em] text-marine-primary">
            Comprehensive Maritime{" "}
            <span className="text-marine-gold">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-7 text-marine-text md:text-[1rem]">
            Bespoke solutions designed for the complex demands of the global
            shipping and logistics landscape.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
