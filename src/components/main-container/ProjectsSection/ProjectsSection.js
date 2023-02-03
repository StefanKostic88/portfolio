import { useContext } from "react";
import React from "react";
import ProjectCard from "./projectCard/ProjectCard";
import CardContext from "../../../store/card-context";

import { SectionProjectStyled } from "../../styles/ProjectStyles/ProjectStyles";

const ProjectsSection = React.forwardRef((props, ref) => {
  const { projectsArr, modalObj } = useContext(CardContext);

  const openProcjet = function (id) {
    var targetedCard = projectsArr.find((el) => el.id === id);
    modalObj(targetedCard);
  };

  return (
    <SectionProjectStyled id="projects" ref={ref}>
      <div>
        {projectsArr.map((el) => (
          <ProjectCard
            key={el.id}
            onCardClick={openProcjet}
            projectDetailsObj={{
              img: el.img,
              title: el.title,
              iconsArr: el.iconsArr,
              id: el.id,
            }}
          />
        ))}
      </div>
    </SectionProjectStyled>
  );
});

export default ProjectsSection;

//
// strai nacin
// import { DiJavascript1, DiSass, DiHtml5 } from "react-icons/di";
// import images from "../../../pexels-felix-mittermeier-957061.jpg";

// const projects = [
//   {
//     img: images,
//     name: "Game Squad",
//     iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
//     id: 1,
//   },
//   {
//     img: images,
//     name: "Build Estate",
//     iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
//     id: 2,
//   },
//   {
//     img: images,
//     name: "Light Saber",
//     iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
//     id: 3,
//   },
//   {
//     img: images,
//     name: "D&D",
//     iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
//     id: 4,
//   },
//   {
//     img: images,
//     name: "New Project",
//     iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
//     id: 5,
//   },
//   {
//     img: images,
//     name: "New Project",
//     iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
//     id: 6,
//   },
// ];
