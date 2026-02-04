"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { siteConfig, navigation } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-white/70">
                Join hundreds of businesses that trust GSiTech for their BPO
                needs.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full text-lg transition-all hover:bg-accent hover:text-white hover:shadow-xl hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.webp"
                  alt="GSiTech logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-tight">
                  GSiTech
                </span>
                <span className="text-xs text-white/60 leading-tight">
                  Solutions & Consultancy
                </span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Scalable, secure, and cost-effective BPO & call center outsourcing
              for global businesses.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {siteConfig.socials.linkedin ? (
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
              ) : null}
              {siteConfig.socials.twitter ? (
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-5 h-5" aria-hidden="true" />
                </a>
              ) : null}
              {siteConfig.socials.facebook ? (
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3" role="list">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href={siteConfig.whatsappLink}
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone
                    className="w-5 h-5 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  WhatsApp: {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail
                    className="w-5 h-5 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin
                  className="w-5 h-5 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <address className="not-italic">{siteConfig.address}</address>
              </li>
            </ul>
          </div>

          {/* WhatsApp QR */}
          <div>
            <h3 className="font-semibold text-lg mb-4">WhatsApp</h3>
            <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white">
                <Image
                  src="/qr-image.png"
                  alt="Scan to add GSiTech on WhatsApp"
                  fill
                  sizes="220px"
                  className="object-contain"
                />
              </div>
              <a
                href={siteConfig.whatsappLink}
                className="mt-4 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-white text-primary font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                Scan or tap to connect
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center sm:text-left">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <button
                type="button"
                onClick={scrollToTop}
                className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
