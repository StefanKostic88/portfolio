import { useState } from "react";
// import { createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme.js";

import GlobalStyles from "./components/styles/Global.js";
import Navbar from "./components/navbar/Navbar.js";
import MainContainer from "./components/main-container/MainContainer.js";
import ProjectCardModal from "./components/modal/ProjectCardModal.js";

import CardContext from "./store/card-context.js";

import projects from "./assets/data/projectListData.js";

const Portfolio = () => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    img: "",
    title: "",
    textContent: "",
    sourceCode: "",
    liveVersion: "",
  });

  const showModal = function () {
    setModalIsShown((prevState) => !prevState);
  };

  const generateModalInfo = (cardInfo) => {
    setModalInfo(cardInfo);
  };

  const projectsAndModalContext = {
    cardIsClicked: showModal,
    modalObj: generateModalInfo,
    projectsArr: projects,
    info: modalInfo,
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <CardContext.Provider value={projectsAndModalContext}>
          <GlobalStyles />
          {modalIsShown && <ProjectCardModal />}
          <Navbar />
          <MainContainer />
        </CardContext.Provider>
      </>
    </ThemeProvider>
  );
};

export default Portfolio;
