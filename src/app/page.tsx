import Header from "@/components/Header";
import HeroSection from "@/sections/HeroSection";
import Pitch from "@/sections/Pitch";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";
import Vision from "@/sections/Vision";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className={`min-h-screen`}>
      <Header />
      <HeroSection />
      <Pitch />
      <Projects />
      <Vision />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
