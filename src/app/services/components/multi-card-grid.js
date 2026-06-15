/* eslint-disable @next/next/no-img-element */

import {
  AnchorIcon,
  BadgeIcon,
  ChevronRightIcon,
  ForumIcon,
  GroupsIcon,
  ImportExportIcon,
  OfficeIcon,
  PersonSearchIcon,
  PaymentsIcon,
  PublicIcon,
  SchoolIcon,
} from "./icons";

function ListIconItem({ icon: Icon, label }) {
  return (
    <li className="flex items-center gap-4 group">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e2e8e8] transition-colors group-hover:bg-[#d4af37]">
        <Icon className="h-4 w-4 text-[#1e6f5c]" />
      </div>
      <span className="font-medium text-[#0f3d3e]">{label}</span>
    </li>
  );
}

export default function MultiCardGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
      <section className="md:col-span-5">
        <div className="glass-card flex h-full flex-col rounded-xl border-l-4 border-l-[#1e6f5c] p-8">
          <GroupsIcon className="mb-6 h-10 w-10 text-[#1e6f5c]" />
          <h3 className="mb-4 font-display text-[clamp(1.4rem,2vw,1.8rem)] font-semibold text-[#0f3d3e]">
            Corporate HR Solutions
          </h3>
          <p className="mb-8 text-[0.95rem] leading-7 text-[#475558]">
            Professional workforce management designed for the unique demands
            of the shipping and maritime sector.
          </p>

          <ul className="flex-grow space-y-6">
            <ListIconItem icon={PersonSearchIcon} label="Executive Recruitment" />
            <ListIconItem icon={PaymentsIcon} label="Managed Payroll" />
            <ListIconItem icon={BadgeIcon} label="Temporary Staffing" />
            <ListIconItem icon={ForumIcon} label="HR Consulting" />
          </ul>

          <button className="mt-8 rounded-lg border-2 border-[#1e6f5c] px-6 py-3 font-bold text-[#1e6f5c] transition-all hover:bg-[#1e6f5c] hover:text-white">
            Consult Our Experts
          </button>
        </div>
      </section>

      <section className="md:col-span-7">
        <div className="relative min-h-[500px] overflow-hidden rounded-xl shadow-xl">
          <img
            alt="Maritime Officers"
            className="absolute inset-0 h-full w-full object-cover grayscale-[20%] transition-transform duration-1000 hover:scale-105"
            src="/images/Maritime.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d3e]/90 via-[#0f3d3e]/40 to-transparent" />
          <div className="absolute bottom-0 w-full p-10 text-white">
            <div className="mb-2 flex items-center gap-3 text-[#d4af37]">
              <AnchorIcon className="h-4 w-4" />
              <span className="font-display text-[0.75rem] font-bold uppercase tracking-[0.2em]">
                Elite Crewing
              </span>
            </div>
            <h3 className="mb-4 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-semibold">
              Maritime Recruitment
            </h3>

            <div className="grid grid-cols-2 gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <span className="text-sm">•</span>
                <span>Deck Officers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">•</span>
                <span>Marine Engineers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">•</span>
                <span>Rating Crew</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">•</span>
                <span>Technical Shore Staff</span>
              </div>
            </div>

            <p className="mt-6 max-w-lg text-white/70">
              We source the world&apos;s most qualified seafarers, ensuring every
              vessel is manned by excellence and safety-first expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="md:col-span-4">
        <div className="rounded-xl border-t-4 border-t-[#d4af37] bg-white p-8 shadow-md transition-all hover:shadow-xl">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1d592]/20 text-[#d4af37]">
            <SchoolIcon className="h-5 w-5" />
          </div>
          <h3 className="mb-4 font-display text-[clamp(1.3rem,2vw,1.65rem)] font-semibold text-[#0f3d3e]">
            Student Placements
          </h3>
          <p className="mb-6 text-[0.9rem] leading-6 text-[#475558]">
            Bridging the gap between maritime education and global industry
            careers.
          </p>

          <div className="space-y-3">
            {["Global Internships", "Campus Recruitment", "Interview Training"].map(
              (item) => (
                <div
                  key={item}
                  className="flex cursor-pointer items-center justify-between rounded border-l-2 border-[#d4af37] bg-[#e2e8e8]/30 p-3 text-sm transition-colors hover:bg-[#e2e8e8]/50"
                >
                  <span>{item}</span>
                  <ChevronRightIcon className="h-4 w-4 text-[#475558]" />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="md:col-span-8">
        <div className="glass-card group relative h-full overflow-hidden rounded-xl shadow-lg">
          <div className="flex h-full flex-col md:flex-row">
            <div className="p-8 md:w-3/5">
              <h3 className="mb-4 font-display text-[clamp(1.4rem,2vw,1.8rem)] font-semibold text-[#0f3d3e]">
                Overseas Placements
              </h3>
              <p className="mb-6 text-[0.95rem] leading-7 text-[#475558]">
                Exclusive partnerships with international fleets across
                strategic global maritime hubs.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Gulf Region",
                  "European Union",
                  "Singapore",
                  "Australia",
                  "Canada",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#1e6f5c] px-3 py-1 text-[0.68rem] font-bold uppercase text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4 font-bold text-[#1e6f5c] transition-colors group-hover:text-[#d4af37]">
                <span>Explore Global Opportunities</span>
                <PublicIcon className="h-4 w-4" />
              </div>
            </div>

            <div className="flex items-center justify-center bg-[#1e6f5c]/5 p-4 md:w-2/5">
              <div className="relative aspect-square w-full opacity-20">
                <PublicIcon className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 text-[#1e6f5c]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
