"use client";

import { useEffect, useRef } from "react";
import {
  Award,
  BarChart3,
  Scale,
  Handshake,
  Building2,
  CheckCircle,
} from "lucide-react";
import { trustSignals, metrics } from "@/lib/constants";

const iconMap = {
  Award,
  BarChart3,
  Scaling: Scale,
  Handshake,
  Building2,
  CheckCircle,
};

export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="py-20 lg:py-24 bg-gray-50/50"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Side: Header & Context */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-12 text-center lg:text-left">
            <div>
              <span
                className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4"
                style={{ transitionDelay: "0.1s" }}
              >
                Why Choose Us
              </span>
              <h2
                id="trust-heading"
                className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-3xl sm:text-4xl font-bold text-primary mb-6"
                style={{ transitionDelay: "0.2s" }}
              >
                Reliable partnership
              </h2>
              <p
                className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-lg text-muted/80 leading-relaxed"
                style={{ transitionDelay: "0.3s" }}
              >
                We&apos;ve built our reputation on delivering consistent
                quality, transparent operations, and measurable results for our
                clients.
              </p>
            </div>

            {/* Regions */}
            <div
              className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 bg-white rounded-3xl p-6 border border-gray-100"
              style={{ transitionDelay: "0.35s" }}
            >
              <h3 className="text-sm font-medium text-muted uppercase tracking-wide mb-4">
                Serving clients across
              </h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  { name: "United States", flag: "🇺🇸" },
                  { name: "United Kingdom", flag: "🇬🇧" },
                  { name: "Europe", flag: "🇪🇺" },
                  { name: "Canada", flag: "🇨🇦" },
                  { name: "Australia", flag: "🇦🇺" },
                ].map((region) => (
                  <span
                    key={region.name}
                    className="px-4 py-2 bg-gray-50 text-primary/80 font-medium rounded-full text-sm hover:bg-primary/5 transition-colors"
                  >
                    <span className="mr-2" aria-hidden="true">
                      {region.flag}
                    </span>
                    {region.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Compact Metrics Stack */}
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="animate-on-scroll opacity-0 translate-x-4 transition-all duration-500 bg-primary rounded-2xl p-6 border border-primary/10 shadow-sm flex items-center justify-between"
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                >
                  <span className="text-sm font-medium text-white/80 uppercase tracking-wide">
                    {metric.label}
                  </span>
                  <span className="text-3xl font-bold text-white">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Trust Signals Grid */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {trustSignals.map((signal, index) => {
                const IconComponent =
                  iconMap[signal.icon as keyof typeof iconMap];
                return (
                  <div
                    key={signal.title}
                  className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 group bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg hover:border-transparent"
                  style={{ transitionDelay: `${0.2 * (index + 1)}s` }}
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {signal.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {signal.description}
                  </p>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
