export default function TrainingSection() {
  return (
    <section className="pt-1 md:pt-2">
      <div className="horizon-gradient relative overflow-hidden rounded-xl p-12 text-white shadow-2xl">
        <div className="absolute right-0 top-0 hidden h-full w-1/3 opacity-10 pointer-events-none md:block">
          <svg
            viewBox="0 0 24 24"
            className="h-full w-full"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M4 16l5-5 4 4 7-7" />
            <path d="M14 8h6v6" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl">
          <h3 className="mb-4 font-display text-[clamp(1.5rem,2.5vw,2.1rem)] font-semibold text-[#d4af37]">
            Training &amp; Career Development
          </h3>
          <p className="mb-10 max-w-3xl text-[1rem] leading-7 text-white/80">
            We don&apos;t just find jobs; we build maritime leaders through
            specialized coaching and skill enhancement programs.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="border-l border-white/20 pl-6">
              <h4 className="mb-3 text-[1rem] font-bold hover:text-[#d4af37]">
                Career Counseling
              </h4>
              <p className="text-[0.85rem] text-white/60">
                One-on-one sessions to map your journey from cadet to captain.
              </p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <h4 className="mb-3 text-[1rem] font-bold hover:text-[#d4af37]">
                Soft Skills
              </h4>
              <p className="text-[0.85rem] text-white/60">
                Communication and cross-cultural training for global crews.
              </p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <h4 className="mb-3 text-[1rem] font-bold hover:text-[#d4af37]">
                Leadership
              </h4>
              <p className="text-[0.85rem] text-white/60">
                Command-level management and ethical decision-making modules.
              </p>
            </div>
          </div>

          <button className="mt-12 rounded-full bg-white px-8 py-3 font-bold text-[#0f3d3e] shadow-xl transition-all hover:scale-105 hover:bg-[#d4af37] hover:text-white">
            Start Your Growth Journey
          </button>
        </div>
      </div>
    </section>
  );
}
