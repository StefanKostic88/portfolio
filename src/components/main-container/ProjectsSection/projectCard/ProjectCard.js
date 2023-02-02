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
  // console.log(props);

  return (
    <ProjectCardStyled onClick={openProcjet}>
      <header>
        <img
          src={props.projectDetailsObj.img}
          alt={props.projectDetailsObj.title}
        />
      </header>
      <footer>
        <ProjectHeadingStyled>
          {props.projectDetailsObj.title}
        </ProjectHeadingStyled>
        <ProcjetUlStyled>
          {props.projectDetailsObj.iconsArr.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ProcjetUlStyled>
        <ProcjetButtonStyled>
          Details
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </ProcjetButtonStyled>
      </footer>
    </ProjectCardStyled>
  );
};
export default ProjectCard;
