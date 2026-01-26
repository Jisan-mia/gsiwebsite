"use client";

import { useEffect, useRef } from "react";
import {
  ArrowRight,
  MessageSquare,
  Settings2,
  Rocket,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { processSteps } from "@/lib/constants";

const icons = [MessageSquare, Settings2, Rocket, TrendingUp];

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
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4"
            style={{ transitionDelay: "0.1s" }}
          >
            Workflow
          </span>
          <h2
            id="process-heading"
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ transitionDelay: "0.2s" }}
          >
            How we <span className="text-accent">collaborate</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-lg text-muted/80 max-w-2xl mx-auto"
            style={{ transitionDelay: "0.3s" }}
          >
            A streamlined onboarding process designed to get your dedicated team
            running quickly and correctly.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            className="hidden lg:block absolute top-11 left-0 right-0 w-full"
            aria-hidden="true"
          >
            <div className="h-0.5 w-full bg-gray-100 relative">
              <div className="absolute inset-0 bg-linear-to-r from-accent/0 via-accent/20 to-accent/0" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, index) => {
              const Icon = icons[index];
              return (
                <article
                  key={step.step}
                  className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 group relative"
                  style={{ transitionDelay: `${0.15 * (index + 1)}s` }}
                >
                  {/* Visual Node */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex items-center justify-center mb-8">
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative w-22 h-22 bg-white rounded-full border border-gray-100 shadow-sm flex items-center justify-center p-6 group-hover:scale-110 group-hover:border-accent/30 transition-all duration-300 z-10">
                        <Icon
                          strokeWidth={1.5}
                          className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300"
                        />
                        <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="w-full bg-gray-50/50 rounded-2xl p-6 border border-gray-100 group-hover:bg-white group-hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                      <h3 className="text-lg font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 mt-20 text-center"
          style={{ transitionDelay: "0.8s" }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full text-lg transition-all hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
