import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import AboutHero from "./components/AboutHero";
import DubaiExpansionModal from "./components/DubaiExpansionModal";
import MissionVisionSection from "./components/MissionVisionSection";
import LeadershipSection from "./components/LeadershipSection";

export const metadata = {
  title: "About Us | JJ Marine Logistics & HR Solutions Pvt. Ltd.",
  description: "Learn about JJ Marine Logistics & HR Solutions Pvt. Ltd.'s mission, marine logistics, HR support, visa assistance, Dubai expansion, and leadership team led by Jobin Joseph.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <div className="font-body min-h-screen overflow-x-hidden bg-[#f0f4f4] text-[#1e292b]">
      <DubaiExpansionModal />
      <SiteHeader />
      <main className="pt-[72px] md:pt-[84px]">
        <AboutHero />
        <MissionVisionSection />
        <LeadershipSection />
      </main>
      <SiteFooter />
    </div>
  );
}
