"use client";

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
  return (
    <section
      id="process"
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="absolute inset-0 site-grid opacity-20 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="animate-on-scroll inline-block text-accent font-medium text-sm uppercase tracking-[0.2em] mb-4">
            How It Works
          </span>
          <h2
            id="process-heading"
            className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            A workflow built for <span className="gradient-text">speed and control</span>
          </h2>
          <p className="animate-on-scroll text-lg text-slate-300 max-w-2xl mx-auto">
            Every engagement follows a clear operating model so customers get
            instant answers and your team keeps visibility over every step.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-11 left-0 right-0 w-full" aria-hidden="true">
            <div className="h-0.5 w-full bg-white/10 relative">
              <div className="absolute inset-0 bg-linear-to-r from-accent/0 via-accent/40 to-accent/0" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, index) => {
              const Icon = icons[index];

              return (
                <article
                  key={step.step}
                  className="animate-on-scroll relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex items-center justify-center mb-8">
                      <div className="absolute inset-0 bg-primary/18 rounded-full blur-xl" data-gsap="pulse" />
                      <div className="relative w-22 h-22 bg-linear-to-br from-primary to-accent rounded-full border border-white/10 shadow-sm flex items-center justify-center p-6 z-10">
                        <Icon
                          strokeWidth={1.5}
                          className="w-10 h-10 text-white"
                        />
                        <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#071120] text-accent text-sm font-bold flex items-center justify-center border border-white/10">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="w-full surface-panel rounded-2xl p-6 text-left">
                      <h3 className="text-lg font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="animate-on-scroll mt-20 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-primary to-accent text-white font-medium rounded-full text-lg transition-all hover:shadow-xl hover:shadow-primary/25"
          >
            Start Your Automation Plan
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
