import HeroSection from "./components/hero-section";
import HeroFeatureSection from "./components/hero-feature-section";
import MultiCardGrid from "./components/multi-card-grid";
import TrainingSection from "./components/training-section";

import WhyPartnersSection from "./components/why-partners-section";
import SiteHeader from "../jj-marine/components/site-header";
import SiteFooter from "../jj-marine/components/site-footer";

export const metadata = {
  title: "JJ Marine | Detailed Services Experience",
  description: "Detailed services showcase for JJ Marine Logistics and HR.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f0f4f4] font-body text-[#1e292b]">
      <SiteHeader/>
      <HeroSection />
      <main className="relative z-20 mx-auto max-w-[1280px] px-4 pt-[40px] pb-[80px] md:px-6">
        <div className="-mt-24">
          <HeroFeatureSection />
          <MultiCardGrid />
          <TrainingSection />
        </div>
      </main>
      <WhyPartnersSection />
      <SiteFooter/>
    </div>
  );
}
