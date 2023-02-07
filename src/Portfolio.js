import { useState, useReducer } from "react";
// import { createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme.js";

import GlobalStyles from "./components/styles/Global.js";
import Navbar from "./components/navbar/Navbar.js";
import MainContainer from "./components/main-container/MainContainer.js";
import ProjectCardModal from "./components/modal/ProjectCardModal.js";

import CardContext from "./store/card-context.js";
import IntersectionObj from "./store/intersecting-context.js";

import projects from "./assets/data/projectListData.js";

const Portfolio = () => {
  const initState = {
    contact: false,
    project: false,
    about: false,
  };

  const intersectionReducer = (state, action) => {
    if (action.type === "contact") {
      return {
        contact: true,
        project: false,
        about: false,
        heroIsVisible: false,
      };
    }
    if (action.type === "projects") {
      return {
        contact: false,
        project: true,
        about: false,
        heroIsVisible: false,
      };
    }
    if (action.type === "about") {
      return {
        contact: false,
        project: false,
        about: true,
        heroIsVisible: false,
      };
    }

    return initState;
  };

  const [intersectionState, dispatchIntersectionState] = useReducer(
    intersectionReducer,
    initState
  );

  const [modalIsShown, setModalIsShown] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    img: "",
    title: "",
    textContent: "",
    sourceCode: "",
    liveVersion: "",
  });

  const refIntersection = function (curINput, threshHoldVal) {
    const options = {
      root: null,
      rootMargin: "150px",
      threshold: threshHoldVal,
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "contact")
            dispatchIntersectionState({ type: "contact" });
          if (entry.target.id === "projects")
            dispatchIntersectionState({ type: "projects" });
          if (entry.target.id === "about")
            dispatchIntersectionState({ type: "about" });
          if (entry.target.id === "hero")
            dispatchIntersectionState({ type: "hero" });
        }
      });
    }, options);

    observer.observe(curINput);
  };

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
  // probaj context da stavis u jedno
  return (
    <ThemeProvider theme={theme}>
      <>
        <IntersectionObj.Provider
          value={{
            intersectionObj: intersectionState,
            getElement: refIntersection,
          }}
        >
          <CardContext.Provider value={projectsAndModalContext}>
            <GlobalStyles />
            {modalIsShown && <ProjectCardModal />}
            <Navbar />
            <MainContainer />
          </CardContext.Provider>
        </IntersectionObj.Provider>
      </>
    </ThemeProvider>
  );
};

export default Portfolio;
