// components/ContactFormSection.jsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function ContactFormSection() {
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [serviceInterest, setServiceInterest] = useState("Crew Management");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `*New Enquiry from JJ Marine Website*
---------------------------------------
*Name:* ${fullName}
*Organization:* ${organization}
*Service Interest:* ${serviceInterest}
*Message:* ${message}
---------------------------------------`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919447988100?text=${encodedText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <section className="py-20 horizon-gradient text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-marine-gold rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-marine-secondary rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Enquiry Form */}
          <div className="glass-card !bg-white/10 p-10 rounded-2xl border-white/20">
            <h2 className="font-display text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-tight tracking-[-0.03em] mb-4 text-3xl">
              Consult Our Experts
            </h2>

            <p className="text-surface-variant mb-8 text-gray-300">
              Discuss your staffing or logistical requirements with our dedicated corporate advisors.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold tracking-wider text-marine-gold mb-2 uppercase text-xs">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="w-full bg-marine-primary/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-marine-gold focus:border-marine-gold outline-none placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold tracking-wider text-marine-gold mb-2 uppercase text-xs">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Enterprise Ltd."
                    required
                    className="w-full bg-marine-primary/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-marine-gold focus:border-marine-gold outline-none placeholder:text-white/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold tracking-wider text-marine-gold mb-2 uppercase text-xs">
                  Service Interest
                </label>
                <select
                  value={serviceInterest}
                  onChange={(e) => setServiceInterest(e.target.value)}
                  className="w-full bg-marine-primary/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-marine-gold focus:border-marine-gold outline-none text-white [&>option]:text-black"
                >
                  <option value="Crew Management">Crew Management</option>
                  <option value="HR Solutions">HR Solutions</option>
                  <option value="Maritime Training">Maritime Training</option>
                  <option value="Global Logistics">Global Logistics</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold tracking-wider text-marine-gold mb-2 uppercase text-xs">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your requirements..."
                  required
                  className="w-full bg-marine-primary/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-marine-gold focus:border-marine-gold outline-none placeholder:text-white/40"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-marine-gold to-marine-gold-soft text-marine-primary py-4 rounded-lg font-bold text-lg hover:scale-[1.02] transition-transform shadow-[0_10px_30px_rgba(212,175,55,0.3)] cursor-pointer"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Testimonials */}
          <div>
            <span className="text-marine-gold font-semibold tracking-widest uppercase text-xs">
              Global Trust
            </span>

            <h2 className="font-display text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-tight tracking-[-0.03em] mt-4 mb-10 text-3xl">
              Client Experiences
            </h2>

            <div className="space-y-6">
              {/* Card 1 */}
              <div className="glass-card !bg-white/5 p-8 rounded-xl border-white/10 hover:border-marine-gold/50 transition-colors group">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-marine-gold relative">
                    <Image
                      src="/images/client1.jpg"
                      alt="Capt. Robert Harrison"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-white">Capt. Robert Harrison</h4>
                    <p className="text-marine-gold text-xs uppercase tracking-wider font-semibold">
                      Director, Pacific Marine
                    </p>
                  </div>

                  <div className="ml-auto text-marine-gold">
                    <Quote size={20} className="fill-current rotate-180" />
                  </div>
                </div>

                <p className="text-surface-variant italic leading-relaxed text-gray-300 text-sm">
                  "JJ Marine has redefined our crew management strategy. Their ability to source high-tier deck officers and maintain seamless logistics is unmatched in the industry."
                </p>
              </div>

              {/* Card 2 */}
              <div className="glass-card !bg-white/5 p-8 rounded-xl border-white/10 hover:border-marine-gold/50 transition-colors group">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-marine-gold relative">
                    <Image
                      src="/images/client2.jpg"
                      alt="Sarah Jenkins"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-white">Sarah Jenkins</h4>
                    <p className="text-marine-gold text-xs uppercase tracking-wider font-semibold">
                      HR Head, Globex Tech
                    </p>
                  </div>

                  <div className="ml-auto text-marine-gold">
                    <Quote size={20} className="fill-current rotate-180" />
                  </div>
                </div>

                <p className="text-surface-variant italic leading-relaxed text-gray-300 text-sm">
                  "The technical staffing support provided by JJ Marine helped us scale our maritime software division in record time. Truly a reliable partner."
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-white cursor-pointer">
                <ChevronLeft size={20} />
              </button>
              <button className="h-12 w-12 rounded-full border border-marine-gold flex items-center justify-center bg-marine-gold/20 hover:bg-marine-gold/30 transition-colors text-marine-gold cursor-pointer">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}