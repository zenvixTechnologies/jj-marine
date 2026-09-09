import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Scale, CheckCircle2, AlertCircle, FileCheck, Mail } from "lucide-react";

export const metadata = {
  title: "Terms of Service | JJ Marine Logistics & HR Solutions Pvt. Ltd.",
  description:
    "Terms of Service governing the use of services provided by JJ Marine Logistics & HR Solutions Pvt. Ltd.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-marine-surface font-body text-marine-primary">
      <SiteHeader />

      <main className="pt-[72px] md:pt-[84px]">
        {/* Header Hero */}
        <section className="bg-gradient-to-br from-[#0a2728] via-[#0f3d3e] to-[#165647] py-16 md:py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="mx-auto max-w-[1280px] px-4 md:px-6 relative z-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              <Scale className="h-4 w-4" />
              <span>Legal Terms & Regulations</span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Terms of Service
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
              These Terms of Service govern the engagement and use of solutions provided by JJ Marine Logistics & HR Solutions Pvt. Ltd.
            </p>
            <p className="mt-2 text-xs font-semibold text-[#d4af37]">
              Last Updated: July 30, 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6 space-y-10">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-md border border-gray-100 space-y-4">
              <div className="flex items-center gap-3 text-[#0f3d3e]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f3d3e]/10 text-[#0f3d3e]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-bold">1. Scope of Services</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                JJ Marine Logistics & HR Solutions Pvt. Ltd. provides specialized maritime solutions including seafarer recruitment, vessel crew management, offshore logistics, student maritime placements, and port agency coordination.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-md border border-gray-100 space-y-4">
              <div className="flex items-center gap-3 text-[#0f3d3e]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f3d3e]/10 text-[#0f3d3e]">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-bold">2. Candidate & Client Obligations</h2>
              </div>
              <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-600 space-y-2">
                <li><strong>Authenticity:</strong> All candidates must furnish genuine, valid, and updated STCW, CDC, medical, and competency documentation.</li>
                <li><strong>MLC Standards:</strong> As an MLC 2006 compliant agency, candidate recruitment is conducted fairly, ethically, and without charging illegal recruitment fees to seafarers.</li>
                <li><strong>Compliance:</strong> Clients and vessel operators agree to provide safe working environments in accordance with international maritime safety conventions (SOLAS, MARPOL, MLC).</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-md border border-gray-100 space-y-4">
              <div className="flex items-center gap-3 text-[#0f3d3e]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f3d3e]/10 text-[#0f3d3e]">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-bold">3. Limitation of Liability</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                While JJ Marine maintains rigorous quality verification processes for all candidates and logistics routing:
              </p>
              <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-600 space-y-2">
                <li>JJ Marine shall not be held liable for operational delays caused by severe maritime weather, port force majeure, or statutory flag state delays beyond our direct control.</li>
                <li>Users are responsible for ensuring that communications sent through our portal contain accurate information.</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-md border border-gray-100 space-y-4">
              <div className="flex items-center gap-3 text-[#0f3d3e]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f3d3e]/10 text-[#0f3d3e]">
                  <Scale className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-bold">4. Governing Law & Jurisdiction</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the competent courts in Kerala, India.
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl bg-gradient-to-r from-[#0f3d3e] to-[#1e6f5c] p-6 md:p-8 text-white shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-[#d4af37]" />
                <h2 className="font-display text-xl font-bold">5. Inquiries & Legal Notice</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-200">
                For questions or formal correspondence concerning these terms, please contact our legal desk:
              </p>
              <div className="pt-2 text-sm font-semibold text-[#d4af37] space-y-1">
                <p>Email: <a href="mailto:info.hr@jjmarinelogistics.com" className="underline hover:text-white">info.hr@jjmarinelogistics.com</a></p>
                <p>Phone: <a href="tel:+919447988100" className="underline hover:text-white">+91 9447988100</a></p>
                <p>Company: JJ Marine Logistics & HR Solutions Pvt. Ltd.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
