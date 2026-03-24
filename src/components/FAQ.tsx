"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { faqs } from "@/lib/constants";

export default function FAQ() {
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

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-32"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-white/6 border border-white/10 rounded-full text-accent text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Common Questions</span>
          </div>
          <h2
            id="faq-heading"
            className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Questions? <span className="gradient-text">We Have Clear Answers</span>
          </h2>
          <p className="animate-on-scroll text-lg text-slate-300 max-w-2xl mx-auto">
            Quick answers about our AI-powered support model, workflow design,
            and how we work with global clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="animate-on-scroll">
              <div
                className={`group h-full border transition-all duration-300 rounded-2xl ${
                  openIndex === index
                    ? "bg-primary/18 border-primary/30 shadow-lg shadow-primary/10"
                    : "surface-panel"
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
                      openIndex === index ? "text-white" : "text-slate-100"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-6 h-6 flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? "text-white rotate-180"
                        : "text-slate-400 group-hover:text-accent"
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
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={openIndex !== index}
                >
                  <div className="px-6 pb-6 leading-relaxed text-slate-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll mt-16">
          <div className="relative overflow-hidden gradient-bg rounded-[2rem] p-8 lg:p-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/8 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/8 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

            <div className="relative text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Need a workflow tailored to your business?
              </h3>
              <p className="text-white/85 mb-6 max-w-xl mx-auto">
                We can map your support, sales, and back-office use cases into a
                practical automation plan.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg transition-all hover:bg-slate-100 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
