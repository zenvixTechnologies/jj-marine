import Link from "next/link";

export default function SiteHeader() {
  const navItems = [
    { label: "Home", href: "#home", active: true },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "/services" },
    { label: "Jobs", href: "/services" },
    { label: "Careers", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#e6e8e1]/90 backdrop-blur-xl shadow-[0_12px_30px_rgba(15,61,62,0.08)]">
      <div className="mx-auto flex h-[56px] w-full max-w-[1280px] items-center justify-between px-4 md:px-6">
        <Link
          href="#home"
          className="font-display text-[1.05rem] font-extrabold uppercase tracking-tight text-marine-primary"
        >
          JJ Marine
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "text-[0.8rem] font-medium transition-colors",
                item.active
                  ? "border-b-2 border-marine-gold pb-1 text-marine-gold"
                  : "text-marine-primary/80 hover:text-marine-gold",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/services"
          className="rounded-[10px] bg-gradient-to-r from-marine-gold to-marine-gold-soft px-4 py-2 text-[0.82rem] font-bold text-marine-primary shadow-[0_10px_24px_rgba(212,175,55,0.28)] transition-transform hover:scale-[1.02]"
        >
          Student Placements
        </Link>
      </div>
    </header>
  );
}
