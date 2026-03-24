"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="results"
      className="py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll inline-block text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Results
          </span>
          <h2
            id="testimonials-heading"
            className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Case study outcomes that show the <span className="gradient-text">hybrid model at work</span>
          </h2>
          <p className="animate-on-scroll text-lg text-slate-300">
            Real-world examples of how AI workflows and human expertise reshape
            support, sales, and back-office performance.
          </p>
        </div>

        <div
          className="animate-on-scroll relative max-w-4xl mx-auto"
          role="region"
          aria-label="Results carousel"
        >
          <div className="surface-panel rounded-[2rem] p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-6 right-6 lg:top-8 lg:right-8 text-white/10" aria-hidden="true">
              <Quote className="w-20 h-20 lg:w-32 lg:h-32" />
            </div>

            <div className="relative min-h-72">
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.author}
                  className={`transition-all duration-500 ${
                    index === activeIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 absolute inset-0 translate-x-8"
                  }`}
                  aria-hidden={index !== activeIndex}
                >
                  <span className="inline-flex mb-4 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-accent text-sm font-semibold">
                    {testimonial.role}
                  </span>
                  <blockquote className="text-lg lg:text-2xl text-white leading-relaxed mb-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <footer className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <cite className="not-italic font-bold text-white block">
                        {testimonial.author}
                      </cite>
                      <span className="text-sm text-slate-300">
                        {testimonial.company}
                      </span>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={goToPrev}
              className="p-3 rounded-full bg-white/8 border border-white/10 hover:bg-primary hover:text-white transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Previous result"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="flex gap-2" role="tablist">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-accent w-8"
                      : "bg-white/20 hover:bg-white/30 w-2.5"
                  }`}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Go to result ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNext}
              className="p-3 rounded-full bg-white/8 border border-white/10 hover:bg-primary hover:text-white transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Next result"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.author}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`text-left p-4 rounded-2xl transition-all border ${
                index === activeIndex
                  ? "bg-primary/18 text-white border-primary/30 shadow-lg"
                  : "bg-white/5 border-white/8 hover:bg-white/8"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src={testimonial.image}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-slate-300">{testimonial.role}</div>
                </div>
              </div>
              <div className="text-xs text-accent font-semibold">
                {testimonial.company}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
