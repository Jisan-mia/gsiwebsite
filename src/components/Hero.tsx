"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, CheckCircle, Globe } from "lucide-react";

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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-primary-50 via-white to-accent/5" />

        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/3 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23101d80' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
              style={{ transitionDelay: "0.1s" }}
            >
              <Globe className="w-4 h-4" aria-hidden="true" />
              <span>Serving USA, UK, Europe, Canada & Australia</span>
            </div>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              style={{ transitionDelay: "0.2s" }}
            >
              Scalable, Reliable, Cost-Effective{" "}
              <span className="gradient-text">BPO Services</span> for Global
              Businesses
            </h1>

            {/* Subtext */}
            <p
              className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 text-lg sm:text-xl text-muted max-w-xl mx-auto lg:mx-0 mb-8"
              style={{ transitionDelay: "0.3s" }}
            >
              Transform your customer operations with our skilled offshore
              teams. Get enterprise-quality call center services at 40-60% lower
              costs—without sacrificing quality or control.
            </p>

            {/* CTA Buttons */}
            <div
              className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              style={{ transitionDelay: "0.4s" }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full text-lg transition-all hover:bg-primary-light hover:shadow-xl hover:shadow-primary/25 hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Request Free Consultation
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full text-lg border-2 border-primary/20 transition-all hover:border-primary hover:bg-primary/5 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Play className="w-5 h-5" aria-hidden="true" />
                View Our Services
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
              style={{ transitionDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2 text-sm text-muted">
                <CheckCircle
                  className="w-5 h-5 text-success"
                  aria-hidden="true"
                />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <CheckCircle
                  className="w-5 h-5 text-success"
                  aria-hidden="true"
                />
                <span>24/7 Support Coverage</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <CheckCircle
                  className="w-5 h-5 text-success"
                  aria-hidden="true"
                />
                <span>2-Week Quick Launch</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 relative"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                  alt="Professional call center team providing customer support services"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Floating stats cards */}
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float"
                style={{ animationDelay: "0s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <CheckCircle
                      className="w-6 h-6 text-success"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      98%
                    </div>
                    <div className="text-sm text-muted">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Globe
                      className="w-6 h-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      500+
                    </div>
                    <div className="text-sm text-muted">Trained Agents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
      `}</style>
    </section>
  );
}
