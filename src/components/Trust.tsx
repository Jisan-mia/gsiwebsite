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
      className="py-20 lg:py-28 bg-gray-50"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ transitionDelay: "0.1s" }}
          >
            Why Choose Us
          </span>
          <h2
            id="trust-heading"
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ transitionDelay: "0.2s" }}
          >
            Why Clients <span className="gradient-text">Trust GSiTech</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-lg text-muted"
            style={{ transitionDelay: "0.3s" }}
          >
            We&apos;ve built our reputation on delivering consistent quality,
            transparent operations, and genuine partnership with every client.
          </p>
        </div>

        {/* Metrics */}
        <div
          className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
          style={{ transitionDelay: "0.3s" }}
        >
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-sm border border-gray-100"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-sm sm:text-base text-muted">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Signals Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustSignals.map((signal, index) => {
            const IconComponent = iconMap[signal.icon as keyof typeof iconMap];
            return (
              <article
                key={signal.title}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 group flex gap-4"
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Icon */}
                <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <IconComponent
                    className="w-6 h-6 text-primary group-hover:text-white transition-colors"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {signal.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Regions Banner */}
        <div
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 mt-16 bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm"
          style={{ transitionDelay: "0.8s" }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                Proudly Serving Clients Globally
              </h3>
              <p className="text-muted">
                Trusted by businesses across North America, Europe, and
                Australia-Pacific regions.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {["USA", "UK", "Europe", "Canada", "Australia"].map((region) => (
                <span
                  key={region}
                  className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
