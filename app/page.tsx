import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CTA1 from "./components/CTA1";
import CTA2 from "./components/CTA2";

export default function Home() {
  return (
    <main className="bg-white">
      <>
        <div>
          <NavBar />
          <HeroSection />
          <Features />
          <CTA1 />
          <CTA2 />
        </div>
      </>
    </main>
  );
}
