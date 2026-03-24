"use client";

import Image from "next/image";
import { Target, Users, TrendingUp } from "lucide-react";
import { aboutUs } from "@/lib/constants";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-16 lg:py-24 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 opacity-35" aria-hidden="true">
        <div className="absolute top-20 right-0 w-125 h-125 bg-accent/10 rounded-full blur-3xl" data-gsap="parallax" />
        <div className="absolute bottom-20 left-0 w-125 h-125 bg-primary/10 rounded-full blur-3xl" data-gsap="parallax" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <span className="animate-on-scroll inline-block text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            {aboutUs.eyebrow}
          </span>
          <h2
            id="about-heading"
            className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {aboutUs.headline}
          </h2>
          <p className="animate-on-scroll text-lg text-slate-300 leading-relaxed">
            {aboutUs.intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 lg:mb-12">
          <div className="animate-on-scroll order-3 lg:order-1">
            <div className="h-full surface-panel rounded-[2rem] p-5 lg:p-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4 text-accent">
                <Users className="w-4 h-4" />
                <span className="text-sm font-semibold text-white">
                  {aboutUs.sections[0].title}
                </span>
              </div>
              <p className="text-sm lg:text-base text-slate-200 mb-4 leading-relaxed">
                {aboutUs.sections[0].content}
              </p>
              <div className="bg-white/6 rounded-lg p-4 border-l-4 border-accent">
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  {aboutUs.sections[0].highlight}
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll order-4 lg:order-2">
            <div className="h-full surface-panel rounded-[2rem] p-5 lg:p-6">
              <div className="inline-flex items-center gap-2 bg-white/8 rounded-full px-4 py-2 mb-4 text-accent">
                <Target className="w-4 h-4" />
                <span className="text-sm font-semibold text-white">
                  {aboutUs.sections[1].title}
                </span>
              </div>
              <p className="text-sm lg:text-base text-slate-200 mb-4 leading-relaxed">
                {aboutUs.sections[1].content}
              </p>
              <div className="bg-white/6 rounded-lg p-4 mb-5">
                <p className="text-sm text-slate-200 leading-relaxed">
                  {aboutUs.sections[1].highlight}
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3" role="list">
                {aboutUs.missionPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-2xl bg-white/4 border border-white/8 px-4 py-3 text-sm text-slate-200"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="animate-on-scroll mb-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
            <div className="relative h-full order-1 lg:order-1">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-full min-h-100 lg:min-h-125 border border-white/10">
                <Image
                  src={aboutUs.image.url}
                  alt={aboutUs.image.alt}
                  fill
                  className="object-cover object-bottom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#071120]/70 via-transparent to-transparent" />
              </div>
            </div>

            <div className="surface-panel rounded-[2rem] p-5 lg:p-6 flex flex-col order-2 lg:order-2">
              <div className="mb-4 pb-4 border-b border-white/10">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  {aboutUs.founder.name}
                </h3>
                <p className="text-base font-semibold text-accent mb-1">
                  {aboutUs.founder.role}
                </p>
                <p className="text-sm text-slate-300 font-medium">
                  {aboutUs.founder.summary}
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-200 leading-relaxed grow">
                <div className="space-y-2">
                  <p className="font-semibold text-white text-sm lg:text-base flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    Previous Experience
                  </p>
                  <ul className="space-y-2 pl-1">
                    {aboutUs.founder.experience.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2">
                  <p className="font-semibold text-white text-sm lg:text-base flex items-center gap-2">
                    <Target className="w-4 h-4 text-accent" />
                    Education
                  </p>
                  <ul className="space-y-1.5 pl-1 text-sm">
                    {aboutUs.founder.education.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
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
