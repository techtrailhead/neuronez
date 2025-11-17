import { HeroSection } from "@/components/HeroSection";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { Philosophy } from "@/components/Philosophy";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Process />
      <Work />
      <Philosophy />
      <Footer />
    </main>
  );
}
