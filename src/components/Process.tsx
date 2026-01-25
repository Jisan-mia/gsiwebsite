"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { processSteps } from "@/lib/constants";

export default function Process() {
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
      id="process"
      className="py-20 lg:py-28 bg-gray-50 overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ transitionDelay: "0.1s" }}
          >
            Getting Started
          </span>
          <h2
            id="process-heading"
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ transitionDelay: "0.2s" }}
          >
            How to <span className="gradient-text">Get Started</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-lg text-muted"
            style={{ transitionDelay: "0.3s" }}
          >
            A simple, streamlined process to transform your customer operations.
            We make onboarding easy and efficient.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div
            className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-primary/20"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <article
                key={step.step}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 relative"
                style={{ transitionDelay: `${0.15 * (index + 1)}s` }}
              >
                {/* Step number */}
                <div className="relative z-10 w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto lg:mx-0 shadow-lg shadow-primary/25">
                  {step.step}
                </div>

                {/* Arrow (desktop, between steps) */}
                {index < processSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-full w-full"
                    style={{ transform: "translateX(-50%)" }}
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-6 h-6 text-primary/40 mx-auto" />
                  </div>
                )}

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile connector */}
                {index < processSteps.length - 1 && (
                  <div
                    className="lg:hidden flex justify-center my-6"
                    aria-hidden="true"
                  >
                    <div className="w-0.5 h-8 bg-primary/20" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 mt-16 text-center"
          style={{ transitionDelay: "0.8s" }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full text-lg transition-all hover:bg-primary-light hover:shadow-xl hover:shadow-primary/25 hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Start Your Journey Today
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
