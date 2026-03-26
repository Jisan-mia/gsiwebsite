"use client";

import { useState, type FormEvent } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("company", formData.company);
      form.append("message", formData.message);
      form.append("_subject", `New Consultation Request from ${formData.name}`);
      form.append("_captcha", "false");
      form.append("_template", "table");

      const response = await fetch("https://formsubmit.co/gsitechsolution@gmail.com", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        alert(
          "Something went wrong. Please try again or contact us directly via email.",
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "Something went wrong. Please try again or contact us directly via email.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-125 h-125 bg-primary/18 rounded-full blur-3xl"
        data-gsap="float"
      />
      <div
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-125 h-125 bg-accent/16 rounded-full blur-3xl"
        data-gsap="float"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="animate-on-scroll inline-block px-4 py-1.5 rounded-full bg-white/6 border border-white/10 text-accent font-semibold text-sm tracking-wide">
                Let&apos;s Automate Your Business
              </span>
              <h2
                id="contact-heading"
                className="animate-on-scroll text-4xl lg:text-5xl font-bold tracking-tight text-white"
              >
                Ready to automate your customer support and scale your business?
              </h2>
              <p className="animate-on-scroll text-lg text-slate-300 leading-relaxed max-w-xl">
                Tell us about your company and goals. We will review the use case
                and come back with a practical automation approach.
              </p>
            </div>

            <div className="animate-on-scroll space-y-6">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-white/6 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 text-accent">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-bold text-white mb-1">WhatsApp</div>
                  <a
                    href={siteConfig.whatsappLink}
                    className="text-slate-300 hover:text-accent transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-white/6 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 text-accent">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Email</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-slate-300 hover:text-accent transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-white/6 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 text-accent">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Headquarters</div>
                  <address className="text-slate-300 not-italic leading-relaxed">
                    {siteConfig.address}
                  </address>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll surface-panel rounded-[2rem] p-8">
              <h4 className="font-bold text-white mb-4">What to Expect</h4>
              <ul className="space-y-4" role="list">
                {[
                  "Discovery of your support and workflow pain points",
                  "A practical AI + human operating model recommendation",
                  "Guidance on channels, automation opportunities, and handoff design",
                  "A no-obligation consultation with next steps",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="animate-on-scroll relative">
            <div className="surface-panel rounded-[2rem] p-8 lg:p-10">
              {isSubmitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-success" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Request received</h3>
                  <p className="text-slate-300 mb-8 max-w-sm mx-auto">
                    We have your message and will get back to you to discuss the
                    best automation path for your business.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-base font-medium rounded-xl text-white bg-white/6 hover:bg-white/10 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-white mb-8">
                    Book a free consultation
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-200">
                          Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 outline-none"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-200">
                          Email <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 outline-none"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-slate-200">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 outline-none"
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-slate-200">
                        Message <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 outline-none resize-none"
                        placeholder="Tell us about your support volume, channels, workflows, or automation goals."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-primary to-accent text-white font-semibold rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" aria-hidden="true" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-slate-400">
                      By submitting this form, you agree to our privacy practices.
                      We will never share your information.
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
