import {
  ProjectCardStyled,
  ProjectHeadingStyled,
  ProcjetUlStyled,
  ProcjetButtonStyled,
} from "../../../styles/ProjectStyles/ProjectStyles";

const ProjectCard = (props) => {
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
        <ProcjetButtonStyled>Details</ProcjetButtonStyled>
      </footer>
    </ProjectCardStyled>
  );
};
export default ProjectCard;
