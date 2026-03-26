"use client";

import {
  Award,
  BarChart3,
  Scale,
  Handshake,
  Building2,
  CheckCircle,
} from "lucide-react";
import { trustSignals, metrics, siteConfig } from "@/lib/constants";

const iconMap = {
  Award,
  BarChart3,
  Scaling: Scale,
  Handshake,
  Building2,
  CheckCircle,
};

export default function Trust() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-24"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 text-center lg:text-left">
            <div>
              <span className="animate-on-scroll inline-block text-accent font-medium text-sm uppercase tracking-[0.2em] mb-4">
                Why Choose Us
              </span>
              <h2
                id="trust-heading"
                className="animate-on-scroll text-3xl sm:text-4xl font-bold text-white mb-6"
              >
                AI-first operations with a <span className="gradient-text">global-ready delivery model</span>
              </h2>
              <p className="animate-on-scroll text-lg text-slate-300 leading-relaxed">
                We combine modern automation strategy, responsive human support,
                and Bangladesh-based cost efficiency to help companies scale more
                intelligently.
              </p>
            </div>

            <div className="animate-on-scroll surface-panel rounded-3xl p-6">
              <h3 className="text-sm font-medium text-slate-300 uppercase tracking-wide mb-4">
                Serving clients across
              </h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {siteConfig.regions.map((region) => (
                  <span
                    key={region}
                    className="px-4 py-2 bg-white/6 text-slate-100 font-medium rounded-full text-sm border border-white/8"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="animate-on-scroll surface-panel rounded-2xl p-6 flex items-center justify-between"
                >
                  <span className="text-sm font-medium text-slate-300 uppercase tracking-wide">
                    {metric.label}
                  </span>
                  <span className="text-3xl font-bold text-white">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {trustSignals.map((signal) => {
                const IconComponent = iconMap[signal.icon as keyof typeof iconMap];

                return (
                  <div
                    key={signal.title}
                    className="animate-on-scroll gsap-card surface-panel rounded-3xl p-8 card-hover"
                  >
                    <div className="w-16 h-16 bg-white/8 rounded-2xl flex items-center justify-center mb-6 text-accent">
                      <IconComponent className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {signal.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
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
