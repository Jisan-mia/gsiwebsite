import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GSiTech Solutions & Consultancy | BPO & Call Center Outsourcing",
  description:
    "Scalable, secure, and cost-effective BPO & call center outsourcing services. Save 40-60% on operational costs with our skilled offshore teams. Serving USA, UK, Europe, Canada, and Australia.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Problems />
        <Solutions />
        <Services />
        <Trust />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
