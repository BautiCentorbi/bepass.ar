import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import ProblemSection from "./components/ProblemSection";
import SolutionsSection from "./components/SolutionsSection";
import ScrollContext from "./context/ScrollContext";

export default function Home() {
  return (
    <ScrollContext>
      <main className="flex min-h-screen flex-col items-center">
        <Hero />
        <ProblemSection />
        <HowWeWork />
        <SolutionsSection />
      </main>
    </ScrollContext>
  );
}
