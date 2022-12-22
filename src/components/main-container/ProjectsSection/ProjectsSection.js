import ProjectCard from "./projectCard/ProjectCard";
import { SectionProjectStyled } from "../../styles/ProjectStyles/ProjectStyles";
import { DiJavascript1, DiSass, DiHtml5 } from "react-icons/di";

import images from "../../../pexels-felix-mittermeier-957061.jpg";

const projects = [
  {
    img: images,
    name: "Game Squad",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    id: 1,
  },
  {
    img: images,
    name: "Build Estate",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    id: 2,
  },
  {
    img: images,
    name: "Light Saber",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    id: 3,
  },
  {
    img: images,
    name: "D&D",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    id: 4,
  },
  {
    img: images,
    name: "New Project",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    id: 5,
  },
  {
    img: images,
    name: "New Project",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    id: 6,
  },
];

const ProjectsSection = () => {
  return (
    <SectionProjectStyled>
      <div>
        {projects.map((el) => (
          <ProjectCard
            key={el.id}
            projectDetailsObj={{
              img: el.img,
              name: el.name,
              iconsArr: el.iconsArr,
            }}
          />
        ))}
      </div>
    </SectionProjectStyled>
  );
};

export default ProjectsSection;
