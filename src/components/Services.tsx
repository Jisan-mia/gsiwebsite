"use client";

import { useEffect, useRef } from "react";
import {
  PhoneIncoming,
  PhoneOutgoing,
  Shuffle,
  Settings,
  GraduationCap,
  Globe,
} from "lucide-react";
import { services, siteConfig } from "@/lib/constants";

const iconMap = {
  PhoneIncoming,
  PhoneOutgoing,
  Shuffle,
  Settings,
  GraduationCap,
  Globe,
};

export default function Services() {
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
      id="services"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ transitionDelay: "0.1s" }}
          >
            What We Offer
          </span>
          <h2
            id="services-heading"
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ transitionDelay: "0.2s" }}
          >
            Our <span className="gradient-text">Services</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-lg text-muted"
            style={{ transitionDelay: "0.3s" }}
          >
            Comprehensive BPO and call center solutions tailored to your
            business needs. From inbound support to training, security, and
            digital growth services.
          </p>
          <div
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 mt-6 flex flex-wrap items-center justify-center gap-2"
            style={{ transitionDelay: "0.4s" }}
          >
            {siteConfig.industries.map((industry) => (
              <span
                key={industry}
                className="px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-semibold tracking-wide"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];

            return (
              <article
                key={service.id}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 group"
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="h-full bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-primary/20 hover:shadow-lg card-hover">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconComponent
                      className="w-8 h-8 text-primary group-hover:text-white transition-colors"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  {/* Features */}
                  <ul className="space-y-2" role="list">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span
                          className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-1.5"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
