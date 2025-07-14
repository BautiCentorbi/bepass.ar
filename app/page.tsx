import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import ProblemSection from "./components/ProblemSection";
import SolutionsSection from "./components/SolutionsSection";
import StorySection from "./components/StorySection";
import ResultsSection from "./components/ResultsSection";
import ScrollContext from "./context/ScrollContext";

export default function Home() {
  return (
    <ScrollContext>
      <main className="flex min-h-screen flex-col items-center">
        <Hero />
        <ProblemSection />
        <HowWeWork />
        <StorySection />
        <SolutionsSection />
        <ResultsSection />
      </main>
    </ScrollContext>
  );
}
