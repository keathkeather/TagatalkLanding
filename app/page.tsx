import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CTA1 from "./components/CTA1";
import CTA2 from "./components/CTA2";
import HowSection from "./components/HowSection"
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main className="bg-slate-50 overflow-hidden">
      <>
        <div>
          <NavBar />
          <HeroSection />
          <Features />
          <HowSection />
          <AboutUs />
          <CTA1 />
          <CTA2 />
        </div>
      </>
    </main>
  );
}
