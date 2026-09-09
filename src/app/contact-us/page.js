// app/page.jsx

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import ContactFormSection from "./components/ContactFormSection";
import ContactMapSection from "./components/ContactMapSection";
import IndustriesSection from "./components/IndustriesSection";


export const metadata = {
  title: "Contact Us | JJ Marine Logistics & HR Solutions Pvt. Ltd.",
  description: "Get in touch with JJ Marine Logistics & HR Solutions Pvt. Ltd. at our Kuttanad, Alappuzha headquarters or via info.hr@jjmarinelogistics.com.",
  alternates: {
    canonical: "/contact-us",
  },
};

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