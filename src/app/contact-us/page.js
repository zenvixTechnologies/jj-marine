// app/page.jsx

import SiteFooter from "../jj-marine/components/site-footer";
import SiteHeader from "../jj-marine/components/site-header";
import ContactFormSection from "./components/ContactFormSection";
import ContactMapSection from "./components/ContactMapSection";
import IndustriesSection from "./components/IndustriesSection";


export default function Home() {
  return (
    <div className="font-body min-h-screen overflow-x-hidden bg-marine-surface text-marine-primary">
      <SiteHeader />
      <main className="pt-[72px] md:pt-[84px]">
        <IndustriesSection />
        <ContactFormSection />
        <ContactMapSection />
      </main>
      <SiteFooter />
    </div>
  );
}