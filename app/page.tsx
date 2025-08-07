import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import ProblemSection from "./components/ProblemSection";
import StorySection from "./components/StorySection";
import ResultsSection from "./components/ResultsSection";
import { ScrollProvider } from "./context/ScrollContext";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const OurTeam = dynamic(() => import('./components/OurTeam'), { suspense: true } as any);

export default function Home() {
  return (
    <ScrollProvider>
      <main className="flex min-h-screen flex-col items-center">
        <Hero />
        <ProblemSection />
        <HowWeWork />
        <StorySection />
        <Suspense fallback={<div className="h-32"></div>}>
          <OurTeam />
        </Suspense>
        <div className="mt-24 h-24 w-full bg-gradient-to-b from-[#ebebeb] to-[#020617]" />
        <ResultsSection />
      </main>
    </ScrollProvider>
  );
}
