import { useContext } from "react";
import CardContext from "../../store/card-context";
import styled from "styled-components";
import { ImReply } from "react-icons/im";

const OverLayStyled = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProjectCardDetialsStyled = styled.article`
  max-width: 56rem;
  min-height: 76.8rem;
  background-color: black;
  width: 100%;
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
    color: rgb(189, 189, 189);
    border: 1px solid rgb(82, 219, 251);
    border-radius: 3px;
    // background-color: red;
    font-size: 1.6rem;
    padding: 0.8rem 1rem;
    cursor: pointer;
  }
`;

const ProjectIconStyled = styled.div`
  border: 1px solid rgb(82, 219, 251);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;
  border-radius: 3px;
  svg {
    color: rgb(189, 189, 189);
  }
`;

const Modal = () => {
  const cardCtx = useContext(CardContext);
  const closeModal = (e) => {
    e.preventDefault();
    cardCtx.cardIsClicked();
    cardCtx.info = null;
  };

  return (
    <OverLayStyled>
      {/* onClick={closeModal} */}
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
          <ProjectIconStyled onClick={closeModal}>
            <a href="www.google.com">
              <ImReply />
            </a>
          </ProjectIconStyled>
          <VersionsCardPartStyled>
            <a href={cardCtx.info.sourceCode} target="_blank">
              Sorce Code
            </a>
            <a href={cardCtx.info.liveVersion} target="_blank">
              Live Version
            </a>
          </VersionsCardPartStyled>
        </LowerCardPartStyled>
      </ProjectCardDetialsStyled>
    </OverLayStyled>
  );
};

export default Modal;

///za ispravku
// Game squad
// 1.2rem 2rem padding li book i dark
// dodaj before na njih
// search games da bude skroz crna slova i bela pozadina

// document.querySelector("body > div.main-wraper > sidebar > ul > li.main-sidebar__list-item.genre > ul > li:nth-child(4) > a")

// side bar genre padding sredi

// slike max width 10rem => ispod onda width 100%
