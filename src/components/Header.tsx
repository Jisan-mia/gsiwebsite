"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronRight, Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, siteConfig } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-bold focus:shadow-xl transition-all"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled && !isMobileMenuOpen
            ? "bg-[#071120]/78 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-4 lg:py-6",
          isMobileMenuOpen && "bg-transparent border-transparent",
        )}
        role="banner"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
          <nav
            className="flex items-center justify-between"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="group flex items-center gap-3 relative z-50"
              aria-label={`${siteConfig.shortName} - Home`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative w-11 h-11 rounded-2xl flex items-center justify-center bg-white/10 border border-white/10 shadow-lg shadow-primary/10 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo.webp"
                  alt="GSiTech logo"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold leading-none tracking-tight text-xl text-white">
                  GSiTech
                </span>
                <span className="text-xs font-semibold text-slate-300/70 leading-none mt-1.5 tracking-wide">
                  AI Automation & Hybrid Support
                </span>
              </div>
            </Link>

            <ul className="hidden lg:flex items-center gap-8" role="list">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate-200/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={siteConfig.whatsappLink}
                className="glass group flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-semibold text-white/90 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-white/15 flex items-center justify-center transition-all border border-white/10">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="hidden xl:flex flex-col leading-tight">
                  <span className="text-[11px] uppercase tracking-wider text-slate-300/60">
                    WhatsApp
                  </span>
                  <span>{siteConfig.phone}</span>
                </div>
              </a>

              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary to-accent text-white font-semibold rounded-full text-sm transition-all hover:shadow-xl hover:shadow-primary/25"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden relative z-50 p-2.5 rounded-xl text-white hover:bg-white/10 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex items-center justify-center relative">
                <span
                  className={cn(
                    "absolute h-0.5 w-6 bg-current transform transition-all duration-300",
                    isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5",
                  )}
                />
                <span
                  className={cn(
                    "absolute h-0.5 w-6 bg-current transform transition-all duration-300",
                    isMobileMenuOpen ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute h-0.5 w-6 bg-current transform transition-all duration-300",
                    isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5",
                  )}
                />
              </div>
            </button>
          </nav>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden fixed inset-0 bg-[#061121] z-40 transition-all duration-300 ease-in-out",
            isMobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none",
          )}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="h-full flex flex-col pt-28 pb-8 px-6 overflow-y-auto relative">
            <nav className="flex-1 space-y-2" aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className={cn(
                    "transform transition-all duration-500",
                    isMobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0",
                  )}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between p-4 rounded-2xl text-xl font-medium text-white hover:bg-white/6 transition-colors border border-white/8 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-accent transition-colors" />
                  </Link>
                </div>
              ))}
            </nav>

            <div
              className={cn(
                "mt-8 space-y-4 transform transition-all duration-500 delay-300",
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0",
              )}
            >
              <div className="surface-panel rounded-3xl p-6">
                <p className="text-sm font-semibold text-slate-300/70 mb-4 uppercase tracking-wider">
                  Contact GSiTech
                </p>
                <div className="grid gap-3">
                  <a
                    href={siteConfig.whatsappLink}
                    className="flex items-center gap-3 p-3 bg-white/6 rounded-xl border border-white/8 text-white font-medium transition-transform active:scale-[0.98]"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-accent">
                      <Phone className="w-4 h-4" />
                    </div>
                    WhatsApp: {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 p-3 bg-white/6 rounded-xl border border-white/8 text-white font-medium transition-transform active:scale-[0.98]"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-accent">
                      <Mail className="w-4 h-4" />
                    </div>
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-4 bg-linear-to-r from-primary to-accent text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
