import Image from "next/image";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <ProblemSection />
    </main>
  );
}
