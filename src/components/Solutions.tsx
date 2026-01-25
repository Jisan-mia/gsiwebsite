"use client";

import { useEffect, useRef } from "react";
import {
  Users,
  Headphones,
  Shield,
  Lock,
  Wallet,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { solutions } from "@/lib/constants";

const iconMap = {
  Users,
  Headphones,
  Shield,
  Lock,
  Wallet,
  Clock,
};

export default function Solutions() {
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
      className="py-20 lg:py-28 bg-primary relative overflow-hidden"
      aria-labelledby="solutions-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ transitionDelay: "0.1s" }}
          >
            Our Solutions
          </span>
          <h2
            id="solutions-heading"
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ transitionDelay: "0.2s" }}
          >
            How GSiTech <span className="text-accent">Helps</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-lg text-white/80"
            style={{ transitionDelay: "0.3s" }}
          >
            We provide comprehensive BPO solutions designed to solve your
            biggest operational challenges while delivering exceptional value.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {solutions.map((solution, index) => {
            const IconComponent =
              iconMap[solution.icon as keyof typeof iconMap];
            return (
              <article
                key={solution.title}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 group bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/20 hover:border-white/30"
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                  <IconComponent
                    className="w-7 h-7 text-white group-hover:text-accent transition-colors"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {solution.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-center"
          style={{ transitionDelay: "0.8s" }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full text-lg transition-all hover:bg-accent hover:text-white hover:shadow-xl hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          >
            Let&apos;s Discuss Your Needs
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
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
