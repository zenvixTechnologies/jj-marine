// src/app/careers/page.js

import SiteFooter from "../jj-marine/components/site-footer";
import SiteHeader from "../jj-marine/components/site-header";
import CareersHero from "./components/CareersHero";
import CareerPortal from "./components/RecruitmentPortal";
import PillarsExcellence from "./components/PillarsExcellence";

export const metadata = {
  title: "Careers | JJ Marine Logistics & HR Solutions Pvt. Ltd.",
  description: "Connect with world-class maritime careers and placements with JJ Marine Logistics & HR Solutions Pvt. Ltd.",
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
