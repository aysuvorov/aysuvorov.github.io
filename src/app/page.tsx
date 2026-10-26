import { AboutSection } from "@/components/about-section";
import { AiModelingSection } from "@/components/ai-modeling-section";
import { ClinicalResearchSection } from "@/components/clinical-research-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ProcessSection } from "@/components/process-section";
import { ResearchServicesSection } from "@/components/research-services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function IndexPage() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ResearchServicesSection />
        <ClinicalResearchSection />
        <AiModelingSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
