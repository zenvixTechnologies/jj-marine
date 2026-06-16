import AboutSection from "./components/about-section";
import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";

export const metadata = {
  title: "JJ Marine Logistics & HR Solutions | Global Maritime Excellence",
  description:
    "Maritime logistics, HR solutions, and student placements designed for global growth.",
};

export default function JJMarinePage() {
  return (
    <div
      className="font-body min-h-screen overflow-x-hidden bg-marine-surface text-marine-primary"
    >
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
      <SiteFooter />
    </div>
  );
}
