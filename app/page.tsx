import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import { navBarItems } from "@/data";
import Projects from "@/components/Projects";
import Clients from "../components/Clients";
import Experience from "@/components/Experience";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navBarItems} />
        <Hero />
        <Grid />
        <Projects />
        <Clients />
        <Experience />
        <Process />
        <Footer />
      </div>
    </main>
  );
}
