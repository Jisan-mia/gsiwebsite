"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Target, Users, TrendingUp } from "lucide-react";
import { aboutUs } from "@/lib/constants";

export default function AboutUs() {
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
      id="about"
      className="py-16 lg:py-24 bg-linear-to-b from-white via-primary-50/20 to-white relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute top-20 right-0 w-125 h-125 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-125 h-125 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <span
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3"
            style={{ transitionDelay: "0.1s" }}
          >
            About Us
          </span>
          <h2
            id="about-heading"
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            style={{ transitionDelay: "0.2s" }}
          >
            Empowering Businesses,{" "}
            <span className="text-primary">Enriching Lives</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-lg text-muted leading-relaxed"
            style={{ transitionDelay: "0.3s" }}
          >
            Bridging global business needs with Bangladesh's talented workforce
            through technology, expertise, and social impact.
          </p>
        </div>

        {/* Main Content - Who We Are & Vision */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 lg:mb-12">
          {/* Who We Are */}
          <div
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 order-3 lg:order-1"
            style={{ transitionDelay: "0.5s" }}
          >
            <div className="h-full bg-white rounded-2xl shadow-lg border border-primary/10 p-5 lg:p-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  {aboutUs.sections[0].title}
                </span>
              </div>
              <p className="text-sm lg:text-base text-foreground/90 mb-4 leading-relaxed">
                {aboutUs.sections[0].content}
              </p>
              <div className="bg-linear-to-r from-accent/5 to-transparent rounded-lg p-4 border-l-4 border-accent">
                <p className="text-sm text-foreground/80 leading-relaxed italic">
                  {aboutUs.sections[0].highlight}
                </p>
              </div>
            </div>
          </div>

          {/* Vision & Impact */}
          <div
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 order-4 lg:order-2"
            style={{ transitionDelay: "0.6s" }}
          >
            <div className="h-full bg-linear-to-br from-primary/5 to-accent/5 rounded-2xl p-5 lg:p-6 border border-primary/10 shadow-lg">
              <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-2 mb-4">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  {aboutUs.sections[1].title}
                </span>
              </div>
              <p className="text-sm lg:text-base text-foreground/90 mb-4 leading-relaxed">
                {aboutUs.sections[1].content}
              </p>
              <div className="bg-white/70 rounded-lg p-4">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {aboutUs.sections[1].highlight}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section - Featured */}
        <div
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 mb-10"
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
            {/* Founder Image */}
            <div className="relative h-full order-1 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-100 lg:min-h-125">
                <Image
                  src={aboutUs.image.url}
                  alt={aboutUs.image.alt}
                  fill
                  className="object-cover object-bottom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Founder Info Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-primary/10 p-5 lg:p-6 flex flex-col order-2 lg:order-2">
              <div className="mb-4 pb-4 border-b border-border/50">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                  Mohammad M.H. Joy
                </h3>
                <p className="text-base font-semibold text-primary mb-1">
                  Founder & CEO
                </p>
                <p className="text-sm text-muted font-medium mb-0.5">
                  GSiTech Solutions & Consultancy
                </p>
                <p className="text-sm text-muted/80 font-medium">
                  Co-founder of GSi ThinkTank
                </p>
              </div>

              <div className="space-y-4 text-sm text-foreground/80 leading-relaxed grow">
                <p className="text-sm lg:text-base">
                  International academic and professional experience spanning
                  the UK and the United States.
                </p>

                <div className="space-y-2">
                  <p className="font-semibold text-foreground text-sm lg:text-base flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Previous Experience
                  </p>
                  <ul className="space-y-2 pl-1">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      <span className="text-sm">
                        Student Advisor at The Open University, UK
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      <span className="text-sm">
                        Claims Handler at Home Repair Network Limited, UK
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      <span className="text-sm">
                        Research Assistant at Carnegie Endowment for
                        International Peace, USA
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-border/50 space-y-2">
                  <p className="font-semibold text-foreground text-sm lg:text-base flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    Education
                  </p>
                  <ul className="space-y-1.5 pl-1 text-sm">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                      <span>
                        MA in Asia & International Studies, University of
                        Nottingham, UK
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                      <span>
                        BSS in Global Studies & Governance, Independent
                        University, Bangladesh
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                      <span>
                        Associate of Science, Troy University, Alabama, USA
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
