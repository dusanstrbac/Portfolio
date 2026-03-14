import About from "@/components/About";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/projects/ProjectsSection";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="pt-15">
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
    </main>
  );
}