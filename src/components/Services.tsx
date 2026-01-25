"use client";

import { useEffect, useRef, useState } from "react";
import {
  PhoneIncoming,
  PhoneOutgoing,
  Shuffle,
  Settings,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import { services } from "@/lib/constants";

const iconMap = {
  PhoneIncoming,
  PhoneOutgoing,
  Shuffle,
  Settings,
  GraduationCap,
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

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

  const toggleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            business needs. From inbound support to specialized training
            programs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const isExpanded = expandedCard === service.id;

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
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features (expandable) */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="space-y-2 mb-4" role="list">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted"
                        >
                          <span
                            className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expand/Collapse button */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:text-primary-light transition-colors"
                    aria-expanded={isExpanded}
                    aria-controls={`service-features-${service.id}`}
                  >
                    {isExpanded ? "Show Less" : "Learn More"}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </article>
            );
          })}
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
