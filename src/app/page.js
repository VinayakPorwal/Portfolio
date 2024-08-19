// import ImageList from "@/components/ImageList";
import Skills from "@/components/Skills/index";
import Projects from "@/components/Projects/index";
import Work from "@/components/WorkExperience/index";
import About from "@/components/AboutMe/index";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 xl:p-32">
      <About />
      <Skills />
      <Work />
      <Projects />
    </main>
  );
}
