import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import { navBarItems } from "@/data";
import Projects from "@/components/Projects";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navBarItems} />
        <Hero />
        <Grid />
        <Projects />
        <Clients />
      </div>
    </main>
  );
}
