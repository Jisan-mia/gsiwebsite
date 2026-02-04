"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Trophy,
  Users,
  Globe,
} from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-125 h-125 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-125 h-125 bg-secondary/5 rounded-full blur-3xl -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div
              className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-primary text-sm font-semibold tracking-wide"
              style={{ transitionDelay: "0.1s" }}
            >
              <Globe className="w-4 h-4" aria-hidden="true" />
              <span>One-Stop Global BPO & Outsourcing Solutions</span>
            </div>

            <h1
              id="hero-heading"
              className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 text-4xl sm:text-5xl lg:text-5xl/tight font-bold text-gray-900 tracking-tight"
              style={{ transitionDelay: "0.2s" }}
            >
              BPO & Call Center Outsourcing
              <br className="hidden lg:block" />
              that elevates{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-light">
                customer experience
              </span>
            </h1>

            <p
              className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              style={{ transitionDelay: "0.3s" }}
            >
              Specialized teams for e-commerce, healthcare, fintech, SaaS,
              travel, and telecom. We handle inbound support, outbound
              telesales, and managed operations so you can focus on growth.
            </p>

            <div
              className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
              style={{ transitionDelay: "0.4s" }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full text-lg transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-full text-lg border border-gray-200 transition-all hover:bg-gray-50 hover:border-gray-300 hover:text-primary"
              >
                <Play className="w-5 h-5" aria-hidden="true" />
                Our Services
              </Link>
            </div>

            <div
              className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-100"
              style={{ transitionDelay: "0.5s" }}
            >
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-gray-900">98%</span>
                <span className="text-sm text-gray-500 font-medium">
                  CSAT Score
                </span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-gray-900">24/7</span>
                <span className="text-sm text-gray-500 font-medium">
                  Availability
                </span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-gray-900">10+</span>
                <span className="text-sm text-gray-500 font-medium">
                  Expert Agents
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image Composition */}
          <div
            className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 relative lg:h-150 flex items-center justify-center"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-4xl overflow-hidden shadow-2xl shadow-gray-200/50 grayscale-10 hover:grayscale-0 transition-all duration-700">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                  alt="Professional BPO team collaborating in a modern office environment"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent mix-blend-multiply" />
              </div>

              {/* Floating Badge 1 - Top Right */}
              <div
                className="absolute -top-6 -right-6 lg:right-8 bg-white p-4 rounded-2xl shadow-xl shadow-gray-200/50 animate-bounce-gentle border border-gray-100"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Award Winning
                    </div>
                    <div className="text-xs text-gray-500">
                      Service Provider
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Left */}
              <div
                className="absolute -bottom-6 -left-6 lg:left-8 bg-white p-4 rounded-2xl shadow-xl shadow-gray-200/50 animate-bounce-gentle border border-gray-100"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Dedicated Teams
                    </div>
                    <div className="text-xs text-gray-500">
                      Tailored to your needs
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-tr from-primary/5 via-primary/5 to-transparent rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
