"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/constants";

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ transitionDelay: "0.1s" }}
          >
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ transitionDelay: "0.2s" }}
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-lg text-muted"
            style={{ transitionDelay: "0.3s" }}
          >
            Everything you need to know about our BPO services. Can&apos;t find
            the answer? Reach out to us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 space-y-4"
          style={{ transitionDelay: "0.4s" }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100"
            >
              <button
                type="button"
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-6 pb-6 text-muted leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional help */}
        <div
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 mt-12 text-center"
          style={{ transitionDelay: "0.6s" }}
        >
          <p className="text-muted mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors"
          >
            Contact our team
            <ChevronDown
              className="w-4 h-4 ml-1 -rotate-90"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
