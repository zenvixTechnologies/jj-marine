/* eslint-disable @next/next/no-img-element */

export default function HeroSection() {
  return (
    <section className="relative flex h-[614px] items-center overflow-hidden bg-[#0f3d3e] pt-24">
      <div className="absolute inset-0 opacity-30">
        <img
          alt="Luxury Maritime Background"
          className="h-full w-full object-cover"
          src="/images/service.png"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d3e]/90 via-[#0f3d3e]/65 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(212,175,55,0.18),transparent_30%),radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.06),transparent_25%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 md:px-6">
        <h1 className="max-w-[12ch] font-display text-[clamp(2.7rem,6vw,4.7rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-white text-balance">
          World-Class Maritime <br />
          <span className="text-[#d4af37]">Solutions &amp; Excellence</span>
        </h1>
        <p className="mt-6 max-w-[42rem] text-[0.95rem] leading-6 text-white/80">
          Navigating the complexities of global logistics and maritime human
          resources with precision, authority, and unmatched professional
          standards.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#f0f4f4] to-transparent" />
    </section>
  );
}

