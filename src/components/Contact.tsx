"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Loader2,
} from "lucide-react";
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
      className="py-20 lg:py-28 bg-gray-50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ transitionDelay: "0.1s" }}
          >
            Get In Touch
          </span>
          <h2
            id="contact-heading"
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ transitionDelay: "0.2s" }}
          >
            Request Your{" "}
            <span className="gradient-text">Free Consultation</span>
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 text-lg text-muted"
            style={{ transitionDelay: "0.3s" }}
          >
            Ready to transform your customer operations? Let&apos;s discuss how
            GSiTech can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 order-2 lg:order-1"
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle
                      className="w-8 h-8 text-success"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Thank You!
                  </h3>
                  <p className="text-muted mb-6">
                    We&apos;ve received your consultation request. Our team will
                    contact you within 24 hours to discuss your requirements.
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
                    className="text-primary font-semibold hover:text-primary-light transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Work Email <span className="text-error">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Service Interest <span className="text-error">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="inbound">Inbound Services</option>
                      <option value="outbound">Outbound Services</option>
                      <option value="blended">Blended Campaigns</option>
                      <option value="managed">Managed BPO Services</option>
                      <option value="training">Training & Development</option>
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Tell us about your needs{" "}
                      <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none resize-none"
                      placeholder="Describe your requirements, expected team size, timeline, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg text-lg transition-all hover:bg-primary-light hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed focus:ring-2 focus:ring-primary focus:ring-offset-2"
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

                  <p className="text-sm text-muted text-center">
                    By submitting this form, you agree to our privacy policy.
                    We&apos;ll never share your information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 order-1 lg:order-2"
            style={{ transitionDelay: "0.5s" }}
          >
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let&apos;s Start the Conversation
              </h3>
              <p className="text-muted mb-8 leading-relaxed">
                Whether you&apos;re looking to outsource for the first time or
                switch providers, our team is ready to help you design the
                perfect solution for your business.
              </p>

              {/* Contact details */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone
                      className="w-5 h-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Phone
                    </div>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-muted hover:text-primary transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Email
                    </div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-muted hover:text-primary transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin
                      className="w-5 h-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Address
                    </div>
                    <address className="text-muted not-italic">
                      {siteConfig.address}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock
                      className="w-5 h-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Business Hours
                    </div>
                    <p className="text-muted">
                      24/7 Operations Support
                      <br />
                      Sales: Mon-Fri, 9AM-6PM EST
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick benefits */}
              <div className="bg-primary/5 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  What to Expect:
                </h4>
                <ul className="space-y-3" role="list">
                  {[
                    "Response within 24 hours",
                    "No-obligation consultation",
                    "Customized proposal",
                    "Transparent pricing",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted"
                    >
                      <CheckCircle
                        className="w-5 h-5 text-success shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
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
