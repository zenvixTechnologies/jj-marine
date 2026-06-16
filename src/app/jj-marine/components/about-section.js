/* eslint-disable @next/next/no-img-element */

import { ArrowRightIcon } from "./icons";

const milestones = [
  {
    step: "1",
    title: "The Inception",
    text: "Starting in Kochi with a vision to streamline maritime human resources and logistics in Southern India.",
  },
  {
    step: "2",
    title: "Global Expansion",
    text: "Establishing key partnerships with shipping giants across Europe and Southeast Asia.",
  },
  {
    step: "3",
    title: "Industry Leadership",
    text: "Today, leading the way in integrated HR solutions and end-to-end maritime logistics management.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f8f9fa] py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="overflow-hidden rounded-[28px] shadow-[0_28px_65px_rgba(19,35,31,0.16)]">
            <img
              src="/images/home.png"
              alt="Maritime office in Kochi"
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-10 -right-6 hidden w-full max-w-[22rem] rounded-[20px] bg-white/75 p-6 shadow-[0_22px_50px_rgba(19,35,31,0.15)] backdrop-blur-md md:block">
            <h4 className="font-display text-[1.15rem] font-semibold text-marine-secondary">
              Our Kochi Roots
            </h4>
            <p className="mt-2 text-[0.95rem] leading-6 text-marine-text">
              Strategically located in Kochi&apos;s maritime hub, we serve as a
              gateway for global maritime talent and logistical operations.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="font-display max-w-[12ch] text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-tight tracking-[-0.03em] text-marine-primary">
              Navigating Your Success With{" "}
              <span className="text-marine-gold">JJ Marine</span>
            </h2>
            <p className="mt-4 max-w-[44rem] text-[1rem] leading-7 text-marine-text md:text-[1.05rem]">
              Founded on the principles of integrity and operational
              excellence, JJ Marine Logistics &amp; HR Solutions has evolved
              from a local Kochi maritime agency into a global maritime
              powerhouse.
            </p>
          </div>

          <div className="space-y-6">
            {milestones.map((item, index) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div
                    className={[
                      "flex h-9 w-9 items-center justify-center rounded-full text-[0.8rem] font-bold",
                      index === 0
                        ? "bg-gradient-to-r from-marine-gold to-marine-gold-soft text-marine-primary shadow-[0_10px_22px_rgba(212,175,55,0.22)]"
                        : "border-2 border-marine-gold text-marine-gold",
                    ].join(" ")}
                  >
                    {item.step}
                  </div>
                  {index < milestones.length - 1 ? (
                    <div className="mt-2 h-full w-px bg-[#d4dad4]" />
                  ) : null}
                </div>

                <div className="pb-6 last:pb-0">
                  <h4 className="font-display text-[1.05rem] font-semibold text-marine-secondary">
                    {item.title}
                  </h4>
                  <p className="mt-1 max-w-[34rem] text-[0.95rem] leading-6 text-marine-text">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#services"
            className="group inline-flex items-center gap-2 text-[0.95rem] font-bold text-marine-secondary transition-colors hover:text-marine-gold"
          >
            Discover Our Full Story
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
