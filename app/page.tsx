import Image from "next/image";
import Sidebar from "./components/Sidebar/Sidebar";
// import Projects from "./Projects/Page";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Projects from "./Projects/page";

export default function Main() {
  return (
    <div>
      <Projects />
      <Skills />
    </div>
  );
}
