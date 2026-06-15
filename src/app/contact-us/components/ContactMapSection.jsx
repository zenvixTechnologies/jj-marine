// components/ContactMapSection.jsx

"use client";

import {
  MapPin,
  Phone,
  Mail,
  Anchor,
} from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function ContactMapSection() {
  return (
    <section className="py-20 bg-marine-surface">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Info */}
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-tight tracking-[-0.03em] text-marine-primary mb-4">
                Connect With Us
              </h2>
              <p className="text-[0.95rem] leading-7 text-marine-text md:text-[1rem]">
                Visit our headquarters in Kochi or reach out through our global communication channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mr-4 shrink-0 text-marine-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-marine-primary text-base">Headquarters</h4>
                  <p className="text-sm leading-relaxed text-marine-text">
                    4th Floor, Marine Drive Plaza, Kochi,
                    <br />
                    Kerala, India - 682031
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mr-4 shrink-0 text-marine-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-marine-primary text-base">Phone Support</h4>
                  <p className="text-sm leading-relaxed text-marine-text">
                    +91 484 234 5678
                    <br />
                    +91 989 500 1234
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mr-4 shrink-0 text-marine-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-marine-primary text-base">Email Inquiries</h4>
                  <p className="text-sm leading-relaxed text-marine-text">
                    info@jjmarinesolutions.com
                    <br />
                    hr@jjmarinesolutions.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-marine-secondary flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-marine-secondary flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Middle & Right: Map */}
          <div className="lg:col-span-2 h-[500px] rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white">
            <Image
              src="/images/kochi-map.jpg"
              alt="Map Location"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-marine-primary/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl flex items-center">
              <div className="h-12 w-12 rounded-full bg-marine-gold flex items-center justify-center mr-4 animate-pulse">
                <Anchor size={20} className="text-white" />
              </div>
              <div>
                <p className="text-marine-primary font-bold text-sm">Kochi HQ</p>
                <p className="text-xs text-marine-text tracking-wider uppercase font-semibold">
                  Active 24/7 Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}