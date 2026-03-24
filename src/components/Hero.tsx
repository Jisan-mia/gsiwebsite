"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Trophy, Users, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="orb absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-125 h-125 bg-primary/18 rounded-full blur-3xl"
        data-gsap="float"
      />
      <div
        className="orb absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-125 h-125 bg-accent/16 rounded-full blur-3xl"
        data-gsap="float"
      />
      <div className="absolute inset-0 site-grid opacity-25 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div
              className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-accent text-sm font-semibold tracking-wide"
              data-gsap="pulse"
            >
              <Globe className="w-4 h-4" aria-hidden="true" />
              <span>Bangladesh-based AI-first outsourcing partner</span>
            </div>

            <div className="space-y-5">
              <h1
                id="hero-heading"
                className="animate-on-scroll text-4xl sm:text-5xl lg:text-6xl/tight font-bold text-white tracking-tight"
              >
                AI-Powered Customer Support &amp; Business Process Automation
              </h1>
              <p className="animate-on-scroll text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We help companies reduce operational costs and scale faster using
                a powerful combination of AI automation and human expertise.
              </p>
            </div>

            <div className="animate-on-scroll flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-primary to-accent text-white font-semibold rounded-full text-lg transition-all hover:shadow-xl hover:shadow-primary/20"
              >
                Get Started
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-full text-lg transition-all hover:border-accent/30"
              >
                <Play className="w-5 h-5" aria-hidden="true" />
                Book a Demo
              </Link>
            </div>

            <div className="animate-on-scroll surface-soft rounded-3xl p-6 lg:p-7 text-left max-w-3xl">
              <p className="text-base text-slate-200 leading-relaxed">
                We are an AI-driven outsourcing company based in Bangladesh,
                helping global businesses automate customer support, sales, and
                back-office operations using intelligent systems.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Artificial Intelligence",
                  "Automation workflows",
                  "Skilled human agents",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/6 border border-white/8 text-sm font-semibold text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-accent font-semibold">
                Result: Faster response, lower cost, better customer experience.
              </p>
            </div>

            <div className="animate-on-scroll grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {[
                ["50–70%", "Lower support costs"],
                ["24/7", "Instant customer response"],
                ["2–3x", "Faster resolution speed"],
              ].map(([value, label]) => (
                <div key={label} className="text-center lg:text-left">
                  <span className="block text-3xl font-bold text-white">
                    {value}
                  </span>
                  <span className="text-sm text-slate-300 font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll relative lg:h-160 flex items-center justify-center">
            <div className="relative w-full max-w-xl lg:max-w-none">
              <div className="surface-panel rounded-[2rem] overflow-hidden">
                <div className="relative rounded-[1.8rem] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                    alt="AI-enabled support team collaborating in a modern workspace"
                    width={900}
                    height={700}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#071120] via-[#071120]/30 to-transparent" />
                </div>
              </div>

              <div
                className="surface-panel absolute -top-6 -right-2 lg:right-8 rounded-3xl p-4 border border-primary/20"
                data-gsap="float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/18 rounded-2xl flex items-center justify-center text-accent">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      AI handles instantly
                    </div>
                    <div className="text-xs text-slate-300">
                      First response across channels
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="surface-panel absolute -bottom-6 -left-2 lg:left-8 rounded-3xl p-4 border border-white/10"
                data-gsap="float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/15 rounded-2xl flex items-center justify-center text-accent-light">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Human takeover
                    </div>
                    <div className="text-xs text-slate-300">
                      Complex issues handled with care
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-tr from-primary/16 via-accent/12 to-transparent rounded-full blur-3xl"
                data-gsap="parallax"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
