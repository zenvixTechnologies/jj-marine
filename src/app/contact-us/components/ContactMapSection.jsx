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
                Visit our headquarters in Kuttanad or reach out through our global communication channels.
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
                    E4 Tower, First Floor,
                    <br />
                    Pacha-Edathua - 689573
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
                    <a href="tel:+919447988100" className="hover:text-marine-gold transition-colors">
                      +91 9447988100
                    </a>
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
                    <a href="mailto:info.jjmarine@gmail.com" className="hover:text-marine-gold transition-colors">
                      info.jjmarine@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Middle & Right: Map */}
          <div className="lg:col-span-2 h-[500px] rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.668939700924!2d76.4540774!3d9.362535300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b089f00454f5467%3A0xe0f291b26b83337a!2sE4%20Tower!5e0!3m2!1sen!2sin!4v1784870063183!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location - E4 Tower"
              className="w-full h-full"
            />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-xl flex items-center pointer-events-none z-10 border border-gray-100">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-marine-gold flex items-center justify-center mr-3 md:mr-4 shrink-0 animate-pulse">
                <Anchor size={20} className="text-white" />
              </div>
              <div>
                <p className="text-marine-primary font-bold text-sm">E4 Tower - Kuttanad HQ</p>
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