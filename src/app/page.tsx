import { SecurityHero } from "@/components/home/security-hero";
import { AssuranceGrid } from "@/components/home/assurance-grid";
import { CommandLayer } from "@/components/home/command-layer";
import { ImageStory } from "@/components/home/image-story";
import { SectorCoverage } from "@/components/home/sector-coverage";
import { OperatingModel } from "@/components/home/operating-model";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <main>
      <SecurityHero />
      <AssuranceGrid />
      <CommandLayer />
      <ImageStory />
      <SectorCoverage />
      <OperatingModel />
      <ContactSection />
    </main>
  );
}
