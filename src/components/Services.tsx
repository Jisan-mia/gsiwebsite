"use client";

import {
  PhoneIncoming,
  PhoneOutgoing,
  Shuffle,
  Settings,
} from "lucide-react";
import { services, siteConfig } from "@/lib/constants";

const iconMap = {
  PhoneIncoming,
  PhoneOutgoing,
  Shuffle,
  Settings,
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll inline-block text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Services
          </span>
          <h2
            id="services-heading"
            className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            AI systems and hybrid teams that <span className="gradient-text">move work forward</span>
          </h2>
          <p className="animate-on-scroll text-lg text-slate-300 leading-relaxed">
            We design and deploy automation workflows for customer support,
            sales conversations, and repetitive business operations with human
            expertise available exactly where it adds value.
          </p>
          <div className="animate-on-scroll mt-6 flex flex-wrap items-center justify-center gap-2">
            {siteConfig.industries.map((industry) => (
              <span
                key={industry}
                className="px-3 py-1.5 rounded-full bg-white/6 border border-white/10 text-slate-100 text-xs font-semibold tracking-wide"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];

            return (
              <article
                key={service.id}
                className="animate-on-scroll gsap-card surface-panel rounded-[2rem] p-6 lg:p-8 card-hover"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div>
                    <div className="w-16 h-16 bg-primary/14 rounded-2xl flex items-center justify-center mb-6 text-accent">
                      <IconComponent className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-accent font-semibold mb-5">
                      {service.result}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3" role="list">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span
                        className="w-2 h-2 bg-accent rounded-full shrink-0 mt-1.5"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
