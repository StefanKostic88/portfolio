import { useContext } from "react";
import ReactDom from "react-dom";
import BackDrop from "./BackDrop";

import CardContext from "../../store/card-context";
import styled from "styled-components";
import { ImReply } from "react-icons/im";

const ProjectCardDetialsStyled = styled.article`
  max-width: 56rem;
  min-height: 76.8rem;
  background-color: black;
  // width: 100%;
  // height: auto;
  border-radius: 0.32rem;
  padding: 0.8rem 1.6rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 10;
`;

const ProjectCardTitleStyled = styled.h4`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-wight: 800;
  color: rgb(72, 219, 251);
  font-size: 2.6rem;
  margin-top: 5.4rem;
  margin-bottom: 3.2rem;
`;

const ProjectParagraphStyled = styled.p`
  color: rgb(255, 255, 255);
  font-size: 1.8rem;
  text-align: center;
  font-weight: 300;
  margin-bottom: 3.2rem;
  font-family: Montserrat, sans-serif;
`;

const ProjectHeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 130%;
  }
`;

const UpperCardPartStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LowerCardPartStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const VersionsCardPartStyled = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  a {
    // color: rgb(189, 189, 189);
    // border: 1px solid rgb(82, 219, 251);
    // border-radius: 3px;
    // // background-color: red;
    // font-size: 1.6rem;
    // padding: 0.8rem 1rem;
    // cursor: pointer;
  }
`;

const ModalLinkStyled = styled.a`
  color: rgb(189, 189, 189);
  border: 1px solid rgb(82, 219, 251);
  border-radius: 3px;
  // background-color: red;
  font-size: 1.6rem;
  padding: 0.8rem 1rem;
  cursor: pointer;

  position: relative;

  span:nth-child(1) {
    position: absolute;
    top: -1px;
    right: 0;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  &:hover span:nth-child(1),
  &:focus span:nth-child(1) {
    top: -1px;
    right: 0;
    height: 2px;
    width: 100%;
    transform: scaleX(1);
    transform-origin: right;
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  span:nth-child(2) {
    position: absolute;
    top: 0;
    right: -1px;
    height: 100%;
    width: 2px;
    transform-origin: right;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleY(0);
    // transform-origin: top center;
    transform-origin: center bottom;
    transition: transform 200ms linear;
  }
  &:hover span:nth-child(2),
  &:focus span:nth-child(2) {
    position: absolute;
    top: 0;
    right: -1px;
    height: 100%;
    width: 2px;
    transform-origin: right;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleY(1);
    // transform-origin: center bottom;
    transform-origin: top center;
  }
  span:nth-child(3) {
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 200ms linear;
  }
  &:hover span:nth-child(3),
  &:focus span:nth-child(3) {
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 2px;
    width: 100%;

    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 200ms linear;
  }
  span:nth-child(4) {
    position: absolute;
    left: -1px;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms linear;
  }
  &:hover span:nth-child(4),
  &:focus span:nth-child(4) {
    position: absolute;
    left: -1px;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleY(1);
    transform-origin: bottom;
    transition: transform 200ms linear;
  }
`;

// const BackDrop = (props) => {
//   return <OverLayStyled>{props.children}</OverLayStyled>;
// };

const CardModal = () => {
  const cardCtx = useContext(CardContext);
  const closeModal = (e) => {
    e.preventDefault();
    cardCtx.cardIsClicked();
    cardCtx.info = null;
  };

  return (
    <BackDrop>
      <ProjectCardDetialsStyled>
        <UpperCardPartStyled>
          <ProjectHeaderStyled>
            <img src={cardCtx.info.img} alt="" />
          </ProjectHeaderStyled>
          <ProjectCardTitleStyled>{cardCtx.info.title}</ProjectCardTitleStyled>
          <ProjectParagraphStyled>
            {cardCtx.info.textContent}
            {/* Fully responsive movies and series application coded in React and
          Material Ui, that is using Axios to pull the data from the MovieDB
          API, and display it, based on users selection. Besides HTTP
          requests,the app has some interesting features like dark and light
          theme,external components such as carousel and an option to search
          for a specific actor via Wikipedia API. */}
          </ProjectParagraphStyled>
        </UpperCardPartStyled>
        <LowerCardPartStyled>
          <ModalLinkStyled onClick={closeModal}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <ImReply />
          </ModalLinkStyled>
          <VersionsCardPartStyled>
            <ModalLinkStyled href={cardCtx.info.sourceCode} target="_blank">
              Sorce Code
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </ModalLinkStyled>
            <ModalLinkStyled href={cardCtx.info.liveVersion} target="_blank">
              Live Version
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </ModalLinkStyled>
          </VersionsCardPartStyled>
        </LowerCardPartStyled>
      </ProjectCardDetialsStyled>
    </BackDrop>
  );
};

const ProjectCardModal = () => {
  return (
    <>
      {ReactDom.createPortal(
        <CardModal />,
        document.getElementById("project-modal")
      )}
    </>
  );
};

export default ProjectCardModal;

///za ispravku
// Game squad
// 1.2rem 2rem padding li book i dark
// dodaj before na njih
// search games da bude skroz crna slova i bela pozadina

// document.querySelector("body > div.main-wraper > sidebar > ul > li.main-sidebar__list-item.genre > ul > li:nth-child(4) > a")

// side bar genre padding sredi

// slike max width 10rem => ispod onda width 100%

// const OverLayStyled = styled.div`
//   position: fixed;
//   inset: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: black;
//   z-index: 5;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   // background-color: red;
// `;
