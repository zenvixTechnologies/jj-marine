// src/app/careers/page.js

import SiteFooter from "../jj-marine/components/site-footer";
import SiteHeader from "../jj-marine/components/site-header";
import CareersHero from "./components/CareersHero";
import RecruitmentPortal from "./components/RecruitmentPortal";
import PillarsExcellence from "./components/PillarsExcellence";

export const metadata = {
  title: "JJ Marine | Career Portal & Global Reach",
  description: "Connect with world-class maritime careers and placements globally.",
};

export default function CareersPage() {
  return (
    <div className="font-body min-h-screen overflow-x-hidden bg-marine-surface text-marine-primary">
      <SiteHeader />
      <main className="pt-[56px]">
        <CareersHero />
        <RecruitmentPortal />
        <PillarsExcellence />
      </main>
      <SiteFooter />
    </div>
  );
}
