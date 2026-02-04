"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { faqs } from "@/lib/constants";

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

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
      className="py-20 lg:py-32 bg-linear-to-b from-white via-gray-50/30 to-white"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary text-sm font-medium mb-6"
            style={{ transitionDelay: "0.1s" }}
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Common Questions</span>
          </div>
          <h2
            id="faq-heading"
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ transitionDelay: "0.2s" }}
          >
            Questions? <span className="gradient-text">We've Got Answers</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-lg text-muted max-w-2xl mx-auto"
            style={{ transitionDelay: "0.3s" }}
          >
            Find quick answers to the most common questions about our BPO
            services
          </p>
        </div>

        {/* FAQ Grid - Two Column Layout on Desktop */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500"
              style={{ transitionDelay: `${0.1 * (index % 4)}s` }}
            >
              <div
                className={`group h-full border transition-all duration-300 rounded-2xl ${
                  openIndex === index
                    ? "bg-primary border-primary shadow-lg shadow-primary/20"
                    : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className={`text-base font-semibold transition-colors ${
                      openIndex === index ? "text-white" : "text-foreground"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-6 h-6 flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? "text-white rotate-180"
                        : "text-gray-400 group-hover:text-primary"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" aria-hidden="true" />
                    ) : (
                      <Plus className="w-5 h-5" aria-hidden="true" />
                    )}
                  </div>
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
                  <div
                    className={`px-6 pb-6 leading-relaxed ${
                      openIndex === index ? "text-white/80" : "text-muted"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 mt-16"
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="relative overflow-hidden bg-linear-to-br from-primary to-primary-dark rounded-2xl p-8 lg:p-10">
            {/* Background decoration */}
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"
              aria-hidden="true"
            />

            <div className="relative text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Our team is ready to provide personalized answers and help you
                find the perfect BPO solution for your business.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg transition-all hover:bg-gray-50 hover:shadow-lg hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
