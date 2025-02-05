import { JSX } from "react";

interface NavBarItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export const navBarItems: NavBarItem[] = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

interface GridItemProp {
  title: string;
  description: string;
  id: number;
}
export const gridItems: GridItemProp[] = [
  { title: "Title 1", description: "Des 1", id: 1 },
  { title: "Title 1", description: "Des 1", id: 2 },
  { title: "Title 1", description: "Des 1", id: 3 },
  { title: "Title 1", description: "Des 1", id: 4 },
];
