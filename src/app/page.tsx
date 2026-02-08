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
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GSiTech Solutions & Consultancy | BPO & Call Center Outsourcing",
  description:
    "BPO & call center outsourcing for e-commerce, healthcare, fintech, SaaS, travel & telecom. Inbound, outbound/telesales, training and managed operations.",
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
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}
