"use client";

import {
  Users,
  Headphones,
  Shield,
  Lock,
  Wallet,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { solutions } from "@/lib/constants";

const iconMap = {
  Users,
  Headphones,
  Shield,
  Lock,
  Wallet,
  Clock,
};

export default function Solutions() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="solutions-heading">
      <div className="absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/14 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" data-gsap="parallax" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/14 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" data-gsap="parallax" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll inline-block text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            AI + Human Model
          </span>
          <h2
            id="solutions-heading"
            className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            We do not replace humans—<span className="gradient-text">we enhance them</span>
          </h2>
          <p className="animate-on-scroll text-lg text-slate-300 leading-relaxed">
            The model is designed so automation handles repetitive volume while
            trained teams step in for context, judgment, and customer trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {solutions.map((solution) => {
            const IconComponent = iconMap[solution.icon as keyof typeof iconMap];

            return (
              <article
                key={solution.title}
                className="animate-on-scroll gsap-card surface-panel rounded-3xl p-6 lg:p-8 card-hover"
              >
                <div className="w-14 h-14 bg-white/8 rounded-2xl flex items-center justify-center mb-5 text-accent">
                  <IconComponent className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {solution.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="animate-on-scroll surface-panel rounded-[2rem] overflow-hidden mb-12">
          <div className="grid md:grid-cols-3 bg-white/5 text-sm font-semibold text-slate-200">
            <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-white/10">Task Type</div>
            <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-white/10">Handled By</div>
            <div className="px-6 py-4">Outcome</div>
          </div>
          {[
            ["Simple queries", "AI", "Instant answers and data collection"],
            ["Medium tasks", "AI + Human", "Faster execution with oversight"],
            ["Complex issues", "Human", "Judgment-led service and retention"],
          ].map(([task, owner, outcome]) => (
            <div
              key={task}
              className="grid md:grid-cols-3 border-t border-white/10 text-sm text-slate-300"
            >
              <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-white/10 font-medium text-white">
                {task}
              </div>
              <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-white/10 text-accent font-semibold">
                {owner}
              </div>
              <div className="px-6 py-4">{outcome}</div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-primary to-accent text-white font-semibold rounded-full text-lg transition-all hover:shadow-xl hover:shadow-primary/25"
          >
            Book a Free Consultation
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
