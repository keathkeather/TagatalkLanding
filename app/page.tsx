import NavBar from "./components/NavBar";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="bg-white">
      <>
        <div>
          <NavBar />
          <Features />
        </div>
      </>
    </main>
  );
}
