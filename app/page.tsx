import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="bg-white">
      <>
        <div>
          <NavBar />
          <HeroSection />
          <Features />
        </div>
      </>
    </main>
  );
}
