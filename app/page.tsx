import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutPraveen } from "@/components/AboutPraveen";
import { Identity } from "@/components/Identity";
import { SelectedWork } from "@/components/SelectedWork";
import { FocusMethod } from "@/components/FocusMethod";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-[#F4F4F6] selection:bg-[#F4F4F6] selection:text-[#0A0A0C]">
      <Navigation />
      <Hero />
      <AboutPraveen />
      <Identity />
      <SelectedWork />
      <FocusMethod />
      <ContactFooter />
    </main>
  );
}
