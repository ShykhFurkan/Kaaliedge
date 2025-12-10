import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/sections/about-section";
import { WhyChoose } from "@/components/home/why-choose";

// Lazy load below-the-fold sections
const ServicesSection = dynamic(() => import("@/components/sections/services-section").then(mod => mod.ServicesSection), { ssr: true });
const CountriesSection = dynamic(() => import("@/components/sections/countries-section").then(mod => mod.CountriesSection), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section").then(mod => mod.TestimonialsSection), { ssr: true });
const Workflow = dynamic(() => import("@/components/home/workflow").then(mod => mod.Workflow), { ssr: true });
const CtaBanner = dynamic(() => import("@/components/home/cta-banner").then(mod => mod.CtaBanner), { ssr: true });
const ContactSection = dynamic(() => import("@/components/sections/contact-section").then(mod => mod.ContactSection), { ssr: true });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutSection />
      {/* Critical sections are loaded directly, others lazy loaded */}
      <ServicesSection />
      <WhyChoose />
      <CountriesSection />
      <Workflow />
      <TestimonialsSection />
      <CtaBanner />
      <ContactSection />
    </div>
  );
}
