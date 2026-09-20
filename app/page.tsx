import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutPraveen } from "@/components/AboutPraveen";
import { Identity } from "@/components/Identity";
import { CapabilityMap } from "@/components/CapabilityMap";
import { WhereIHaveWorked } from "@/components/WhereIHaveWorked";
import { SelectedWork } from "@/components/SelectedWork";
import { IdeasExplored } from "@/components/IdeasExplored";
import { HowIThink } from "@/components/HowIThink";
import { FocusMethod } from "@/components/FocusMethod";
import { Philosophy } from "@/components/Philosophy";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-[#F4F4F6] selection:bg-[#F4F4F6] selection:text-[#0A0A0C]">
      <Navigation />
      <Hero />
      <AboutPraveen />
      <Identity />
      <CapabilityMap />
      <WhereIHaveWorked />
      <SelectedWork />
      <IdeasExplored />
      <HowIThink />
      <FocusMethod />
      <Philosophy />
      <ContactFooter />
    </main>
  );
}
