// src/app/careers/page.js

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import CareersHero from "./components/CareersHero";
import CareerPortal from "./components/RecruitmentPortal";
import PillarsExcellence from "./components/PillarsExcellence";

export const metadata = {
  title: "Careers & Recruitment | JJ Marine Logistics & HR Solutions Pvt. Ltd.",
  description: "Explore world-class maritime careers, officer deployments, and cadet placement solutions with JJ Marine Logistics & HR Solutions Pvt. Ltd.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <div className="font-body min-h-screen overflow-x-hidden bg-marine-surface text-marine-primary">
      <SiteHeader />
      <main className="pt-[72px] md:pt-[84px]">
        <CareersHero />
        <CareerPortal />
        <PillarsExcellence />
      </main>
      <SiteFooter />
    </div>
  );
}
