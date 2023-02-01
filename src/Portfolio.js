import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme.js";
import GlobalStyles from "./components/styles/Global.js";
import Navbar from "./components/Navbar/Navbar.js";
import MainContainer from "./components/main-container/MainContainer.js";
import Modal from "./components/modal/Modal.js";

import CardContext from "./store/card-context.js";
import { DiJavascript1, DiSass, DiHtml5 } from "react-icons/di";
import images from "../src/pexels-felix-mittermeier-957061.jpg";
import cardImg from "../src/nestozascreen.png";
import cardImg2 from "../src/pexels-drew-rae-580679.jpg";
import { useEffect } from "react";

const projects = [
  {
    img: cardImg,
    title: "Game Squad",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    textContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel porro molestiae officiis iste reprehenderit expedita.",
    sourceCode: "https://github.com/StefanKostic88?tab=repositories",
    liveVersion: "https://github.com/StefanKostic88?tab=repositories",
    id: 1,
  },
  {
    img: cardImg2,
    title: "Build Estate",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    textContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel porro molestiae officiis iste reprehenderit expedita.",
    sourceCode: "https://github.com/StefanKostic88?tab=repositories",
    liveVersion: "https://github.com/StefanKostic88?tab=repositories",
    id: 2,
  },
  {
    img: images,
    title: "Light Saber",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    textContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel porro molestiae officiis iste reprehenderit expedita.",
    sourceCode: "https://github.com/StefanKostic88?tab=repositories",
    liveVersion: "https://github.com/StefanKostic88?tab=repositories",
    id: 3,
  },
  {
    img: images,
    title: "D&D",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    textContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel porro molestiae officiis iste reprehenderit expedita.",
    sourceCode: "https://github.com/StefanKostic88?tab=repositories",
    liveVersion: "https://github.com/StefanKostic88?tab=repositories",
    id: 4,
  },
  {
    img: images,
    title: "New Project",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    textContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel porro molestiae officiis iste reprehenderit expedita.",
    sourceCode: "https://github.com/StefanKostic88?tab=repositories",
    liveVersion: "https://github.com/StefanKostic88?tab=repositories",
    id: 5,
  },
  {
    img: images,
    title: "New Project",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    textContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel porro molestiae officiis iste reprehenderit expedita.",
    sourceCode: "https://github.com/StefanKostic88?tab=repositories",
    liveVersion: "https://github.com/StefanKostic88?tab=repositories",
    id: 6,
  },
];

createBrowserRouter([{ path: "/" }]);

const Portfolio = () => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    img: "",
    title: "",
    textContent: "",
    sourceCode: "",
    liveVersion: "",
  });

  useEffect(() => {
    console.log("use");
    return () => {
      console.log("clearn");
    };
  }, []);

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
          {modalIsShown && <Modal />}
          {/* <Modal /> */}
          <GlobalStyles />
          <Navbar />
          <MainContainer />
        </CardContext.Provider>
      </>
    </ThemeProvider>
  );
};

export default Portfolio;
