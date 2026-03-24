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
  title: "AI-Powered Customer Support & Business Process Automation | GSiTech",
  description:
    "GSiTech helps global businesses reduce operational costs and scale faster with AI automation, WhatsApp workflows, and human support expertise.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Problems />
        <Services />
        <Solutions />
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
