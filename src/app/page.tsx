import { HeroSection } from "@/components/HeroSection";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Philosophy } from "@/components/Philosophy";
import { Work } from "@/components/Work";
import { ResearchPapers } from "@/components/ResearchPapers";
import { Stories } from "@/components/Stories";
import { Industries } from "@/components/Industries";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-12">
      <HeroSection />
      <About />
      <Process />
      <Philosophy />
      <Work />
      <ResearchPapers />
      <Stories />
      <Industries />
      <Closing />
      <Footer />
    </main>
  );
}
