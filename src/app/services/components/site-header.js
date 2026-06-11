import Link from "next/link";

export default function SiteHeader() {
  const navItems = [
    { label: "Home", href: "/jj-marine" },
    { label: "About Us", href: "/jj-marine#about" },
    { label: "Services", href: "/services", active: true },
    { label: "Jobs", href: "/jj-marine#services" },
    { label: "Careers", href: "/jj-marine#about" },
    { label: "Contact Us", href: "/jj-marine#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1e6f5c]/10 bg-[rgba(255,255,255,0.85)] backdrop-blur-xl shadow-[0_10px_30px_rgba(15,61,62,0.05)]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/jj-marine"
          className="font-display text-[1.1rem] font-extrabold uppercase tracking-tighter text-[#0f3d3e]"
        >
          JJ Marine
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "text-[0.8rem] font-medium transition-colors",
                item.active
                  ? "border-b-2 border-[#d4af37] pb-1 text-[#d4af37]"
                  : "text-[#0f3d3e] hover:text-[#d4af37]",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/jj-marine#student-placements"
          className="rounded-full bg-gradient-to-r from-[#d4af37] to-[#f1d592] px-5 py-2 text-[0.82rem] font-bold text-[#0f3d3e] shadow-[0_10px_20px_rgba(212,175,55,0.2)] transition-transform hover:scale-[1.03]"
        >
          Student Placements
        </Link>
      </div>
    </header>
  );
}
