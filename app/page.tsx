import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import ProblemSection from "./components/ProblemSection";
import StorySection from "./components/StorySection";
import ResultsSection from "./components/ResultsSection";
import ScrollContext from "./context/ScrollContext";
import OurTeam from "./components/OurTeam";

export default function Home() {
  return (
    <ScrollContext>
      <main className="flex min-h-screen flex-col items-center">
        <Hero />
        <ProblemSection />
        <HowWeWork />
        <StorySection />
        <OurTeam />
        <div className="mt-24 h-24 w-full bg-gradient-to-b from-[#ebebeb] to-[#020617]" />
        <ResultsSection />
      </main>
    </ScrollContext>
  );
}
