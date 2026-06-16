// components/RecruitmentPortal.jsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe, ShieldAlert, Rocket, UploadCloud } from "lucide-react";

export default function CareerPortal() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [targetPosition, setTargetPosition] = useState("Deck Officer");
  const [experience, setExperience] = useState("1-3 Years");
  const [cvName, setCvName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCvName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `*New Job Application from JJ Marine Careers*
---------------------------------------
*Name:* ${fullName}
*Email:* ${email}
*Phone:* ${phone}
*Target Position:* ${targetPosition}
*Experience:* ${experience}
*CV File:* ${cvName || "No file uploaded"}
---------------------------------------
_Note: Applicant will attach their CV to this chat._`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919539550576?text=${encodedText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-marine-surface">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-tight tracking-[-0.03em] text-marine-primary mb-4">
            Elite Career Portal
          </h2>
          <p className="text-marine-text text-sm leading-relaxed">
            Join a network of global shipping professionals. Submit your credentials for high-tier placements in international logistics and marine operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Application Form */}
          <div className="lg:col-span-7 glass-card p-8 md:p-10 rounded-3xl border border-marine-primary/10 shadow-[0_20px_40px_rgba(15,61,62,0.08)] bg-white/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-marine-primary uppercase tracking-wider block">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/70 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-marine-secondary focus:border-marine-secondary transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-marine-primary uppercase tracking-wider block">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@maritime.com"
                    required
                    className="w-full bg-white/70 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-marine-secondary focus:border-marine-secondary transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-marine-primary uppercase tracking-wider block">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 0000 000000"
                    required
                    className="w-full bg-white/70 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-marine-secondary focus:border-marine-secondary transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-marine-primary uppercase tracking-wider block">Target Position</label>
                  <div className="relative">
                    <select
                      value={targetPosition}
                      onChange={(e) => setTargetPosition(e.target.value)}
                      className="w-full bg-white/70 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-marine-secondary focus:border-marine-secondary transition-all outline-none appearance-none"
                    >
                      <option value="Deck Officer">Deck Officer</option>
                      <option value="Marine Engineer">Marine Engineer</option>
                      <option value="Logistics Coordinator">Logistics Coordinator</option>
                      <option value="Fleet Manager">Fleet Manager</option>
                      <option value="HSE Supervisor">HSE Supervisor</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-marine-primary uppercase tracking-wider block">Years of Experience</label>
                <div className="flex flex-wrap gap-4">
                  {["1-3 Years", "4-7 Years", "8+ Years"].map((label, idx) => (
                    <label key={idx} className="flex-1 min-w-[100px] cursor-pointer">
                      <input
                        className="hidden peer"
                        name="exp"
                        type="radio"
                        value={label}
                        checked={experience === label}
                        onChange={(e) => setExperience(e.target.value)}
                      />
                      <div className="text-center p-3 text-sm rounded-xl border border-gray-200 peer-checked:bg-marine-secondary peer-checked:text-white transition-all hover:bg-gray-50 font-medium">
                        {label}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-marine-primary uppercase tracking-wider block">Upload CV / Portfolio</label>
                <div className="group relative flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-3xl hover:border-marine-gold transition-colors bg-white/30 cursor-pointer overflow-hidden text-center">
                  <div className="absolute inset-0 bg-marine-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <UploadCloud size={36} className="text-marine-secondary mb-3 transition-transform group-hover:-translate-y-1" />
                  <p className="text-marine-primary font-bold text-sm">
                    {cvName ? `Selected: ${cvName}` : "Drag and drop file here"}
                  </p>
                  <p className="text-[11px] text-marine-text/70 mt-1">PDF, DOCX (Max 10MB)</p>
                  <input
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    type="file"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-marine-primary to-marine-secondary text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Side Info / Why Join */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-marine-primary rounded-3xl text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-marine-gold-soft mb-6 font-display">Why JJ Marine?</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Globe size={18} className="text-marine-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-sm md:text-base">Global Network</p>
                      <p className="text-xs text-white/70 leading-relaxed mt-1">Direct connections with Tier-1 shipping giants in the Gulf and Southeast Asia.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <ShieldAlert size={18} className="text-marine-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-sm md:text-base">Compliance First</p>
                      <p className="text-xs text-white/70 leading-relaxed mt-1">Strict adherence to international MLC standards and transparent hiring.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Rocket size={18} className="text-marine-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-sm md:text-base">Career Growth</p>
                      <p className="text-xs text-white/70 leading-relaxed mt-1">Continuous training programs and leadership paths for dedicated professionals.</p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Background Accent */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-marine-gold opacity-10 rounded-full blur-3xl"></div>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-marine-primary/10 shadow-lg bg-white/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-marine-gold relative">
                  <Image
                    src="/images/captain.jpg"
                    alt="Captain David Sterling"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-marine-primary text-base">Captain David Sterling</p>
                  <p className="text-xs text-marine-text/70">Senior Fleet Advisor</p>
                </div>
              </div>
              <blockquote className="text-marine-secondary italic text-sm leading-relaxed">
                "JJ Marine doesn't just find you a job; they navigate your entire career path with precision and integrity. Their global reach is unmatched."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
