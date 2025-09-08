// app/page.tsx

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import DetailedServices from "@/components/DetailedServices";
import CallToAction from "@/components/CallToAction";
import StatsSection from "@/components/StatsSection";
import WhyChoose from "@/components/WhyChoose";
import Industries from "@/components/Industries";
// import Testimonials from "@/components/Testimonials";
// import Partners from "@/components/Partners";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/common/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="home"><Hero /></section>
      <section id="about"><AboutSection /></section>
      <section id="services"><ServicesGrid /></section>
      <section id="detailed-services"><DetailedServices /></section>
      <section id="call-to-action"><CallToAction /></section>
      <section id="stats"><StatsSection /></section>
      <section id="why-choose"><WhyChoose /></section>
      <section id="industries"><Industries /></section>
      {/* <section id="testimonials"><Testimonials /></section> */}
      {/* <section id="partners"><Partners /></section> */}
      <section id="contact"><ContactSection /></section>
      <Footer />
      <BackToTop />
    </div>
  );
}
