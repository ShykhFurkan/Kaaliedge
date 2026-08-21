import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";
import { WhyChoose } from "@/components/home/why-choose";

// Below-the-fold sections
const ServicesSection = dynamic(() => import("@/components/sections/services-section").then(mod => mod.ServicesSection), { ssr: true });
const CountriesSection = dynamic(() => import("@/components/sections/countries-section").then(mod => mod.CountriesSection), { ssr: true });
const AboutSection = dynamic(() => import("@/components/sections/about-section").then(mod => mod.AboutSection), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section").then(mod => mod.TestimonialsSection), { ssr: true });
const Workflow = dynamic(() => import("@/components/home/workflow").then(mod => mod.Workflow), { ssr: true });
const CtaBanner = dynamic(() => import("@/components/home/cta-banner").then(mod => mod.CtaBanner), { ssr: true });
const ContactSection = dynamic(() => import("@/components/sections/contact-section").then(mod => mod.ContactSection), { ssr: true });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesSection />
      <CountriesSection />
      <AboutSection />
      <WhyChoose />
      <Workflow />
      <TestimonialsSection />
      <CtaBanner />
      <ContactSection />
    </div>
  );
}
