import { Hero } from "@/components/home/hero";
import { WhyChoose } from "@/components/home/why-choose";
import { Workflow } from "@/components/home/workflow";
import { CtaBanner } from "@/components/home/cta-banner";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { CountriesSection } from "@/components/sections/countries-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutSection />
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
