import ProjectCard from "./projectCard/ProjectCard";
import { SectionProjectStyled } from "../../styles/ProjectStyles/ProjectStyles";

import { useContext } from "react";
import CardContext from "../../../store/card-context";

const openProcjet = function (i) {
  // const x = [
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
  // ];
  // const project = x.find((el, index) => index === i);
  // console.log(x, i, project);
};

const ProjectsSection = () => {
  const { projectsArr } = useContext(CardContext);
  // console.log(projectsArr);
  return (
    <SectionProjectStyled>
      <div>
        {projectsArr.map((el) => (
          <ProjectCard
            key={el.id}
            onClick={openProcjet}
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
