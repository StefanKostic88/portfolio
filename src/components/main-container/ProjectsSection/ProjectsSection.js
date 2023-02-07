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
