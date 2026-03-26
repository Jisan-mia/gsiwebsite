"use client";

import {
  DollarSign,
  TrendingDown,
  Users,
  Frown,
  ShieldAlert,
  HelpCircle,
} from "lucide-react";
import { painPoints } from "@/lib/constants";

const iconMap = {
  DollarSign,
  TrendingDown,
  Users,
  Frown,
  ShieldAlert,
  HelpCircle,
};

export default function Problems() {
  return (
    <section
      className="py-20 lg:py-28"
      aria-labelledby="problems-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll inline-block text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Clear Positioning
          </span>
          <h2
            id="problems-heading"
            className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Modern outsourcing built for <span className="gradient-text">global growth</span>
          </h2>
          <p className="animate-on-scroll text-lg text-slate-300 leading-relaxed">
            Unlike traditional BPOs, we combine intelligent automation and
            human expertise to create faster, leaner, and more scalable support
            operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point) => {
            const IconComponent = iconMap[point.icon as keyof typeof iconMap];

            return (
              <article
                key={point.title}
                className="animate-on-scroll gsap-card surface-panel rounded-3xl p-6 lg:p-8 card-hover"
              >
                <div className="w-14 h-14 bg-primary/14 rounded-2xl flex items-center justify-center mb-5 text-accent">
                  <IconComponent className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="animate-on-scroll mt-16 text-center">
          <p className="text-xl text-slate-100 font-medium">
            This is not a typical call center. <span className="text-accent font-bold">It is a smart automation company.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
