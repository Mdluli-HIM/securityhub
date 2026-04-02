import { SecurityHero } from "@/components/home/security-hero";
import { AssuranceGrid } from "@/components/home/assurance-grid";
import { CommandLayer } from "@/components/home/command-layer";
import { SectorCoverage } from "@/components/home/sector-coverage";
import { OperatingModel } from "@/components/home/operating-model";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <main>
      <SecurityHero />
      <AssuranceGrid />
      <CommandLayer />
      <SectorCoverage />
      <OperatingModel />
      <FinalCta />
    </main>
  );
}
