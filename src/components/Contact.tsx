"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-125 h-125 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-125 h-125 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Section Header & Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span
                className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide"
                style={{ transitionDelay: "0.1s" }}
              >
                Let&apos;s Talk
              </span>
              <h2
                id="contact-heading"
                className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
                style={{ transitionDelay: "0.2s" }}
              >
                Ready to transform your{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-light">
                  operations?
                </span>
              </h2>
              <p
                className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-lg text-gray-600 leading-relaxed max-w-xl"
                style={{ transitionDelay: "0.3s" }}
              >
                Whether you&apos;re looking to outsource for the first time or
                switch providers, our team is here to help you design the
                perfect solution.
              </p>
            </div>

            <div
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 space-y-8"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                  <Phone
                    className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Phone</div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                  <Mail
                    className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Email</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                  <MapPin
                    className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">
                    Headquarters
                  </div>
                  <address className="text-gray-600 not-italic leading-relaxed">
                    {siteConfig.address}
                  </address>
                </div>
              </div>
            </div>

            <div
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 p-8 bg-gray-50 rounded-3xl border border-gray-100"
              style={{ transitionDelay: "0.5s" }}
            >
              <h4 className="font-bold text-gray-900 mb-4">What to Expect:</h4>
              <ul className="space-y-4" role="list">
                {[
                  "Response within 24 hours",
                  "Customized solution proposal",
                  "Transparent pricing model",
                  "No-obligation consultation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <CheckCircle
                      className="w-5 h-5 text-primary shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 relative"
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 lg:p-10 border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle
                      className="w-10 h-10 text-green-500"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                    We&apos;ve received your request. Our team will review your
                    needs and get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Send us a message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Service Interest <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none appearance-none"
                        >
                          <option value="">Select a service</option>
                          <option value="inbound">Inbound Services</option>
                          <option value="outbound">Outbound Services</option>
                          <option value="blended">Blended Campaigns</option>
                          <option value="managed">Managed BPO Services</option>
                          <option value="training">
                            Training & Development
                          </option>
                          <option value="other">
                            Other / Multiple Services
                          </option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Tell us about your needs{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none resize-none"
                        placeholder="Describe your requirements, expected team size, timeline, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl text-lg transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2
                            className="w-5 h-5 animate-spin"
                            aria-hidden="true"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Request Consultation
                          <Send className="w-5 h-5" aria-hidden="true" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-gray-500">
                      By submitting this form, you agree to our privacy policy.
                      We&apos;ll never share your information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
