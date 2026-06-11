import { MonitoringIcon, TaskAltIcon, VerifiedIcon } from "./icons";

export default function WhyPartnersSection() {
  return (
    <section className="bg-[#e2e8e8] py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-display text-[clamp(1.8rem,2.5vw,2.3rem)] font-semibold text-[#0f3d3e]">
            Why Partners Choose JJ Marine
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#d4af37]" />
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="rounded-xl bg-white p-10 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-8 flex items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d4af37]/20 text-[#0f3d3e] shadow-lg">
                <VerifiedIcon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-[clamp(1.3rem,2vw,1.7rem)] font-semibold text-[#0f3d3e]">
                Global Compliance
              </h3>
            </div>
            <p className="mb-6 text-[0.92rem] leading-7 text-[#475558]">
              Our recruitment and placement services are fully compliant with
              MLC 2006 standards and local international labor laws. We
              prioritize ethical placement and the welfare of our seafaring
              professionals above all else.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-semibold text-[#1e6f5c]">
                <TaskAltIcon className="h-4 w-4" />
                <span>Certified Recruitment Quality Management</span>
              </div>
              <div className="flex items-center gap-3 font-semibold text-[#1e6f5c]">
                <TaskAltIcon className="h-4 w-4" />
                <span>Transparent Documentation Tracking</span>
              </div>
            </div>
          </article>

          <article className="rounded-xl bg-white p-10 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-8 flex items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d4af37]/20 text-[#0f3d3e] shadow-lg">
                <MonitoringIcon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-[clamp(1.3rem,2vw,1.7rem)] font-semibold text-[#0f3d3e]">
                Operational Precision
              </h3>
            </div>
            <p className="mb-6 text-[0.92rem] leading-7 text-[#475558]">
              Logistics isn&apos;t just about moving cargo; it&apos;s about information.
              We provide real-time reporting and risk management services that
              ensure your maritime operations run like clockwork.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-semibold text-[#1e6f5c]">
                <TaskAltIcon className="h-4 w-4" />
                <span>Advanced Vessel Tracking Systems</span>
              </div>
              <div className="flex items-center gap-3 font-semibold text-[#1e6f5c]">
                <TaskAltIcon className="h-4 w-4" />
                <span>Predictive Port Congestion Analysis</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
