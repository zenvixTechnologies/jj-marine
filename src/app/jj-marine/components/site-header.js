"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/jj-marine" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const isActive = (href) => {
    if (href === "/jj-marine") {
      return pathname === "/jj-marine" || pathname === "/";
    }
    return pathname === href;
  };

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#e6e8e1]/90 backdrop-blur-xl shadow-[0_12px_30px_rgba(15,61,62,0.08)]">
        <div className="mx-auto flex h-[56px] w-full max-w-[1280px] items-center justify-between px-4 md:px-6">
          {/* Logo Section */}
          <Link href="/jj-marine" className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt="JJ Marine Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain rounded-md shadow-sm"
              priority
            />
            <div className="flex flex-col">
              <span className="font-display text-[0.95rem] font-bold tracking-tight text-marine-primary leading-none">
                JJ Marine
              </span>
              <span className="text-[0.55rem] uppercase tracking-widest text-marine-gold font-medium mt-0.5">
                Logistics & HR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={[
                    "text-[0.8rem] font-medium transition-colors",
                    active
                      ? "border-b-2 border-marine-gold pb-1 text-marine-gold"
                      : "text-marine-primary/80 hover:text-marine-gold",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Button / Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/services"
              className="hidden md:inline-block rounded-[10px] bg-gradient-to-r from-marine-gold to-marine-gold-soft px-4 py-2 text-[0.82rem] font-bold text-marine-primary shadow-[0_10px_24px_rgba(212,175,55,0.28)] transition-transform hover:scale-[1.02]"
            >
              Student Placements
            </Link>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-marine-primary/10 bg-white/50 text-marine-primary transition-colors hover:bg-white md:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Backdrop Overlay */}
      <div
        className={[
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-in-out md:hidden",
          isDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ].join(" ")}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={[
          "fixed top-0 right-0 bottom-0 z-50 w-[280px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        ].join(" ")}
      >
        {/* Drawer Header */}
        <div className="flex h-[56px] items-center justify-between border-b border-gray-100 px-4">
          <Link
            href="/jj-marine"
            className="flex items-center gap-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            <Image
              src="/images/logo.jpg"
              alt="JJ Marine Logo"
              width={36}
              height={36}
              className="h-9 w-9 object-contain rounded-md"
            />
            <span className="font-display text-[0.88rem] font-bold text-marine-primary">
              JJ Marine
            </span>
          </Link>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-1.5 text-gray-500 hover:text-marine-primary transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 px-4 py-6 flex flex-col gap-4">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsDrawerOpen(false)}
                className={[
                  "text-[0.95rem] font-medium py-2 border-b border-gray-50/50 transition-colors",
                  active
                    ? "text-marine-gold border-b-marine-gold/35 font-bold"
                    : "text-marine-primary/80 hover:text-marine-gold",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer / CTA */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <Link
            href="/services"
            onClick={() => setIsDrawerOpen(false)}
            className="block w-full text-center rounded-[10px] bg-gradient-to-r from-marine-gold to-marine-gold-soft py-3 text-[0.85rem] font-bold text-marine-primary shadow-md transition-transform hover:scale-[1.02]"
          >
            Student Placements
          </Link>
        </div>
      </div>
    </>
  );
}

