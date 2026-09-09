import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { ShieldCheck, Lock, Eye, FileText, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | JJ Marine Logistics & HR Solutions Pvt. Ltd.",
  description:
    "Privacy Policy for JJ Marine Logistics & HR Solutions Pvt. Ltd. Learn how we handle seafarer data, logistics info, and corporate confidentiality.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-marine-surface font-body text-marine-primary">
      <SiteHeader />

      <main className="pt-[72px] md:pt-[84px]">
        {/* Header Hero */}
        <section className="bg-gradient-to-br from-[#0a2728] via-[#0f3d3e] to-[#165647] py-16 md:py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="mx-auto max-w-[1280px] px-4 md:px-6 relative z-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              <ShieldCheck className="h-4 w-4" />
              <span>Data Protection & Compliance</span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
              JJ Marine Logistics & HR Solutions Pvt. Ltd. is committed to protecting the privacy, security, and confidentiality of our clients, seafarers, and website visitors.
            </p>
            <p className="mt-2 text-xs font-semibold text-[#d4af37]">
              Effective Date: July 30, 2026 | MLC 2006 & ISO 9001:2015 Compliant
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
                  <FileText className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-bold">1. Information We Collect</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                To provide comprehensive maritime recruitment, offshore logistics, and corporate services, we collect necessary personal and professional information:
              </p>
              <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-600 space-y-2">
                <li><strong>Personal Details:</strong> Full name, contact details, email address, nationality, date of birth, and identity proofs.</li>
                <li><strong>Seafarer & Career Documents:</strong> Passport, CDC (Continuous Discharge Certificate), STCW certifications, sea service logs, medical fitness certificates, and CV details.</li>
                <li><strong>Corporate Inquiries:</strong> Organization name, operational requirements, and service inquiry notes.</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-md border border-gray-100 space-y-4">
              <div className="flex items-center gap-3 text-[#0f3d3e]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f3d3e]/10 text-[#0f3d3e]">
                  <Eye className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-bold">2. How We Use Your Information</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                We process your data strictly for legitimate maritime operations and recruitment services:
              </p>
              <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-600 space-y-2">
                <li>Evaluating candidates for vessel manning, offshore deployments, and logistics placements.</li>
                <li>Processing port agency clearance, visa endorsements, and travel transit logistics.</li>
                <li>Communicating updates regarding job applications, voyage itineraries, and client service requests.</li>
                <li>Ensuring compliance with Maritime Labour Convention (MLC 2006) standards and flag state regulations.</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-md border border-gray-100 space-y-4">
              <div className="flex items-center gap-3 text-[#0f3d3e]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f3d3e]/10 text-[#0f3d3e]">
                  <Lock className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-bold">3. Data Protection & Confidentiality</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                We implement robust physical, technical, and managerial safeguards to protect your personal data against unauthorized access, loss, or misuse:
              </p>
              <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-600 space-y-2">
                <li>Encrypted storage and secure digital communication channels.</li>
                <li>Strict access controls restricted to authorized HR and operations personnel.</li>
                <li>We do not sell, rent, or commercialize your personal information to third-party marketing agencies.</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-md border border-gray-100 space-y-4">
              <div className="flex items-center gap-3 text-[#0f3d3e]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f3d3e]/10 text-[#0f3d3e]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-bold">4. Third-Party Sharing</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Information may be shared only with verified entities essential for maritime service execution:
              </p>
              <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-600 space-y-2">
                <li>Ship management companies, vessel owners, and charterers for crew deployment.</li>
                <li>Government port authorities, immigration offices, and flag state administrations for official clearances.</li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl bg-gradient-to-r from-[#0f3d3e] to-[#1e6f5c] p-6 md:p-8 text-white shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-[#d4af37]" />
                <h2 className="font-display text-xl font-bold">5. Contact Us Regarding Privacy</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-200">
                If you have questions regarding this Privacy Policy, wish to update your records, or request data removal, please contact our administrative desk:
              </p>
              <div className="pt-2 text-sm font-semibold text-[#d4af37] space-y-1">
                <p>Email: <a href="mailto:info.hr@jjmarinelogistics.com" className="underline hover:text-white">info.hr@jjmarinelogistics.com</a></p>
                <p>Phone: <a href="tel:+919447988100" className="underline hover:text-white">+91 9447988100</a></p>
                <p>Address: E4 Tower, First Floor, Pacha-Edathua - 689573</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
