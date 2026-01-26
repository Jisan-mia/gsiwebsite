"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Auto-advance testimonials
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
      ref={sectionRef}
      id="testimonials"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ transitionDelay: "0.1s" }}
          >
            Client Success Stories
          </span>
          <h2
            id="testimonials-heading"
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ transitionDelay: "0.2s" }}
          >
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-lg text-muted"
            style={{ transitionDelay: "0.3s" }}
          >
            Don&apos;t just take our word for it. Hear from businesses that have
            transformed their operations with GSiTech.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 relative max-w-4xl mx-auto"
          style={{ transitionDelay: "0.4s" }}
          role="region"
          aria-label="Testimonials carousel"
        >
          {/* Main testimonial */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <div
              className="absolute top-6 right-6 lg:top-8 lg:right-8 text-primary/10"
              aria-hidden="true"
            >
              <Quote className="w-20 h-20 lg:w-32 lg:h-32" />
            </div>

            <div className="relative">
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
                  <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <footer className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.author}`}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <cite className="not-italic font-bold text-foreground block">
                        {testimonial.author}
                      </cite>
                      <span className="text-sm text-muted">
                        {testimonial.role}, {testimonial.company}
                      </span>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={goToPrev}
              className="p-3 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-primary w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNext}
              className="p-3 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Testimonial Grid (Desktop alternative view) */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.author}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`text-left p-4 rounded-xl transition-all ${
                index === activeIndex
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div
                    className={`text-sm font-bold ${index === activeIndex ? "text-white" : "text-foreground"}`}
                  >
                    {testimonial.author}
                  </div>
                  <div
                    className={`text-xs ${index === activeIndex ? "text-white/80" : "text-muted"}`}
                  >
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
