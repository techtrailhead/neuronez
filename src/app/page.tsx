import { HeroSection } from "@/components/HeroSection";
import { About } from "@/components/About";
import { Craft } from "@/components/Craft";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { Philosophy } from "@/components/Philosophy";
import { Stories } from "@/components/Stories";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-12">
      <HeroSection />
      <About />
      <Craft />
      <Process />
      <Work />
      <Philosophy />
      <Stories />
      <Closing />
      <Footer />
    </main>
  );
}
