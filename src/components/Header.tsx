"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronRight, Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, siteConfig } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
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
            ? "bg-white/80 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-4 lg:py-6",
          isMobileMenuOpen && "bg-transparent shadow-none",
        )}
        role="banner"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
          <nav
            className="flex items-center justify-between"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 relative z-50"
              aria-label={`${siteConfig.shortName} - Home`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative w-11 h-11 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
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
                <span
                  className={cn(
                    "font-bold leading-none tracking-tight text-xl transition-colors",
                    isMobileMenuOpen ? "text-gray-900" : "text-gray-900",
                  )}
                >
                  GSiTech
                </span>
                <span className="text-xs font-semibold text-gray-500 leading-none mt-1.5 tracking-wide">
                  Solutions & Consultancy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8" role="list">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href={siteConfig.whatsappLink}
                className="group flex items-center gap-3 text-sm font-semibold text-gray-600 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <div className="w-9 h-9 rounded-full bg-gray-50 group-hover:bg-primary/5 flex items-center justify-center transition-all border border-transparent group-hover:border-primary/10">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="hidden xl:flex flex-col leading-tight">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400">
                    WhatsApp
                  </span>
                  <span>{siteConfig.phone}</span>
                </div>
              </a>

              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-semibold rounded-full text-sm transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden relative z-50 p-2.5 rounded-xl text-gray-700 hover:bg-gray-100/50 active:bg-gray-200/50 transition-all"
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

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out",
            isMobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none",
          )}
        >
          {/* Background decorator */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

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
                    className="flex items-center justify-between p-4 rounded-2xl text-xl font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors border border-transparent hover:border-gray-100 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
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
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">
                  Contact Support
                </p>
                <div className="grid gap-3">
                  <a
                    href={siteConfig.whatsappLink}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-900 font-medium active:scale-[0.98] transition-transform"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="w-4 h-4" />
                    </div>
                    WhatsApp: {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-900 font-medium active:scale-[0.98] transition-transform"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="w-4 h-4" />
                    </div>
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary-light active:scale-[0.95] transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
