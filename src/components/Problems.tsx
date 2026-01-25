"use client";

import { useEffect, useRef } from "react";
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
      className="py-20 lg:py-28 bg-linear-to-b from-white to-gray-50"
      aria-labelledby="problems-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ transitionDelay: "0.1s" }}
          >
            The Challenges You Face
          </span>
          <h2
            id="problems-heading"
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ transitionDelay: "0.2s" }}
          >
            Sound <span className="gradient-text">Familiar?</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-lg text-muted"
            style={{ transitionDelay: "0.3s" }}
          >
            These common pain points are exactly why businesses like yours turn
            to GSiTech for reliable outsourcing solutions.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon as keyof typeof iconMap];
            return (
              <article
                key={point.title}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 group relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-error/20"
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Red accent on hover */}
                <div
                  className="absolute inset-0 bg-linear-to-br from-error/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-error/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <IconComponent
                      className="w-7 h-7 text-error"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Transition to solution */}
        <div
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 mt-16 text-center"
          style={{ transitionDelay: "0.8s" }}
        >
          <p className="text-xl text-foreground font-medium">
            You don&apos;t have to solve these challenges alone.{" "}
            <span className="text-primary font-bold">
              GSiTech is here to help.
            </span>
          </p>
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
