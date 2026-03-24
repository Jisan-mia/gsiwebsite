"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronRight, Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, siteConfig } from "@/lib/constants";

const NAV_OFFSET = 120;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>(navigation[0]?.href ?? "#services");

  const sectionIds = useMemo(
    () => navigation.map((item) => item.href).filter((href) => href.startsWith("#")),
    [],
  );

  const handleNavClick = useCallback((href: string) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.history.pushState(null, "", href);
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    setActiveHref(href);
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const initialHash = window.location.hash;
    if (initialHash && sectionIds.includes(initialHash)) {
      setActiveHref(initialHash);
    }

    const sections = sectionIds
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          return;
        }

        const visibleId = `#${visibleEntries[0].target.id}`;
        setActiveHref(visibleId);
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-bold focus:shadow-xl transition-all"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-6 pt-3 lg:pt-5" role="banner">
        <div
          className={cn(
            "mx-auto max-w-[1420px] rounded-[1.85rem] border transition-all duration-300 ease-out glossy-shell",
            isScrolled
              ? "border-white/12 bg-[#071120]/70 shadow-[0_18px_60px_rgba(2,8,23,0.45)] backdrop-blur-2xl"
              : "border-white/8 bg-[#071120]/32 backdrop-blur-xl",
            isMobileMenuOpen && "bg-[#061121]/92 border-white/10",
          )}
        >
          <div className="absolute inset-x-6 bottom-0 h-px bg-linear-to-r from-transparent via-white/12 to-transparent pointer-events-none" />
          <div className="relative z-10 px-4 sm:px-6 lg:px-7">
            <nav className="flex items-center justify-between min-h-[76px] lg:min-h-[82px]" aria-label="Main navigation">
              <Link
                href="/"
                className="group flex items-center gap-3 relative z-50"
                aria-label={`${siteConfig.shortName} - Home`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-white/70 shadow-[0_14px_35px_rgba(255,255,255,0.16)] group-hover:scale-105 transition-transform duration-300">
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
                  <span className="text-xs font-semibold text-slate-300/80 leading-none mt-1.5 tracking-wide">
                    AI Automation & Hybrid Support
                  </span>
                </div>
              </Link>

              <ul className="hidden lg:flex items-center gap-2" role="list">
                {navigation.map((item) => {
                  const isActive = activeHref === item.href;

                  return (
                    <li key={item.name}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "gsap-nav-item gsap-magnetic relative overflow-hidden rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300",
                          isActive
                            ? "bg-white text-primary shadow-[0_8px_25px_rgba(255,255,255,0.18)]"
                            : "text-slate-200/85 hover:text-white hover:bg-white/8",
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span className="relative z-10">{item.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="hidden lg:flex items-center gap-3">
                <a
                  href={siteConfig.whatsappLink}
                  className="glass gsap-magnetic group flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-semibold text-white/90 hover:text-white transition-colors"
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

                <button
                  type="button"
                  onClick={() => handleNavClick("#contact")}
                  className="gsap-magnetic group inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary via-primary-light to-accent text-white font-semibold rounded-full text-sm transition-all hover:shadow-[0_16px_40px_rgba(59,130,246,0.35)]"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
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
              "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
              isMobileMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none",
            )}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative px-4 sm:px-6 pb-6 pt-2 space-y-4">
              <nav className="space-y-2" aria-label="Mobile navigation">
                {navigation.map((item, index) => {
                  const isActive = activeHref === item.href;

                  return (
                    <div
                      key={item.name}
                      className={cn(
                        "transform transition-all duration-500",
                        isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
                      )}
                      style={{ transitionDelay: `${index * 45}ms` }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "w-full flex items-center justify-between p-4 rounded-2xl text-xl font-medium transition-colors border group",
                          isActive
                            ? "bg-white text-primary border-white shadow-[0_10px_30px_rgba(255,255,255,0.18)]"
                            : "text-white bg-white/6 hover:bg-white/8 border-white/8",
                        )}
                      >
                        {item.name}
                        <ChevronRight className={cn("w-5 h-5 transition-colors", isActive ? "text-primary" : "text-slate-300 group-hover:text-accent")} />
                      </button>
                    </div>
                  );
                })}
              </nav>

              <div
                className={cn(
                  "space-y-4 transform transition-all duration-500 delay-300",
                  isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
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

                <button
                  type="button"
                  onClick={() => handleNavClick("#contact")}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-linear-to-r from-primary via-primary-light to-accent text-white rounded-2xl font-bold text-lg shadow-[0_16px_40px_rgba(59,130,246,0.28)] transition-all"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
