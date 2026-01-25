"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, siteConfig } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to main content
      </a>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent",
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between h-16 md:h-20"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label={`${siteConfig.shortName} - Home`}
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    "font-bold text-lg leading-tight transition-colors",
                    isScrolled ? "text-primary" : "text-primary",
                  )}
                >
                  GSiTech
                </span>
                <span
                  className={cn(
                    "text-xs leading-tight transition-colors hidden sm:block",
                    isScrolled ? "text-muted" : "text-muted",
                  )}
                >
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
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary relative group",
                      isScrolled ? "text-foreground" : "text-foreground",
                    )}
                  >
                    {item.name}
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                  isScrolled ? "text-foreground" : "text-foreground",
                )}
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="hidden xl:inline">{siteConfig.phone}</span>
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white font-semibold rounded-full text-sm transition-all hover:bg-primary-light hover:shadow-lg hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" aria-hidden="true" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0",
          )}
          aria-hidden={!isMobileMenuOpen}
        >
          <nav className="px-4 py-6" aria-label="Mobile navigation">
            <ul className="space-y-4" role="list">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-foreground font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-border">
                <Link
                  href="#contact"
                  className="block w-full text-center px-5 py-3 bg-primary text-white font-semibold rounded-full transition-all hover:bg-primary-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Free Consultation
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
