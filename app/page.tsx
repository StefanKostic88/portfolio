import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { JSX } from "react";
import { FaHome } from "react-icons/fa";

interface NavBarItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

const navBarItems: NavBarItem[] = [
  { name: "Home", link: "/", icon: <FaHome /> },
];

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navBarItems} />
        <Hero />
      </div>
    </main>
  );
}
