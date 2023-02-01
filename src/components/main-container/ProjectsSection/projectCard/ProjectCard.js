import { useContext } from "react";
import {
  ProjectCardStyled,
  ProjectHeadingStyled,
  ProcjetUlStyled,
  ProcjetButtonStyled,
} from "../../../styles/ProjectStyles/ProjectStyles";
import CardContext from "../../../../store/card-context";

const ProjectCard = (props) => {
  const cardCtx = useContext(CardContext);
  const openProcjet = function () {
    cardCtx.cardIsClicked();
    const id = props.projectDetailsObj.id;
    props.onCardClick(id);
    return id;
  };

  return (
    <ProjectCardStyled>
      <header>
        <img src={props.projectDetailsObj.img} alt="" />
      </header>
      <footer>
        <ProjectHeadingStyled>
          {props.projectDetailsObj.name}
        </ProjectHeadingStyled>
        <ProcjetUlStyled>
          {props.projectDetailsObj.iconsArr.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ProcjetUlStyled>
        <ProcjetButtonStyled onClick={openProcjet}>Details</ProcjetButtonStyled>
      </footer>
    </ProjectCardStyled>
  );
};
export default ProjectCard;
