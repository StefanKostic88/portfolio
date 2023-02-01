import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme.js";
import GlobalStyles from "./components/styles/Global.js";
import Navbar from "./components/Navbar/Navbar.js";
import MainContainer from "./components/main-container/MainContainer.js";
import Modal from "./components/modal/Modal.js";

import CardContext from "./store/card-context.js";
import { DiJavascript1, DiSass, DiHtml5 } from "react-icons/di";
import images from "../src/pexels-felix-mittermeier-957061.jpg";
import { useEffect } from "react";

// pexels-felix-mittermeier-957061.jpg

const projects = [
  {
    img: images,
    name: "Game Squad",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    id: 1,
  },
  {
    img: images,
    name: "Build Estate",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    id: 2,
  },
  {
    img: images,
    name: "Light Saber",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    id: 3,
  },
  {
    img: images,
    name: "D&D",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    id: 4,
  },
  {
    img: images,
    name: "New Project",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    id: 5,
  },
  {
    img: images,
    name: "New Project",
    iconsArr: [<DiJavascript1 />, <DiSass />, <DiHtml5 />],
    id: 6,
  },
];

const Portfolio = () => {
  const ctx = useContext(CardContext);
  const [modalIsShown, setModalIsShown] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    img: "",
    title: "",
    textContent: "",
    sourceCode: "",
    liveVersion: "",
  });

  const showModal = function () {
    // setModalIsShown(!modalIsShown);
    setModalIsShown((prevState) => !prevState);
    // console.log(ctx);
  };

  const generateModalInfo = () => {
    setModalInfo((prevState) => {
      return {
        img: "asdasd",
        title: "asdasd",
        textContent: prevState.textContent,
        sourceCode: prevState.sourceCode,
        liveVersion: prevState.liveVersion,
      };
      // return {
      //   img: prevState.info,
      //   title: prevState.title,
      //   textContent: prevState.textContent,
      //   sourceCode: prevState.sourceCode,
      //   liveVersion: prevState.liveVersion,
      // };
    });
  };

  useEffect(() => {
    // console.log("Rendered");
    // console.log(modalIsShown);
    generateModalInfo();
    console.log(modalInfo);
  }, [modalIsShown]);
  // console.log(modalIsShown);
  // const toggleModal = function () {};
  return (
    <ThemeProvider theme={theme}>
      <>
        <CardContext.Provider
          value={{
            cardIsClicked: showModal,
            modalObj: modalInfo,
            projectsArr: projects,
          }}
        >
          {modalIsShown && <Modal />}
          <GlobalStyles />
          <Navbar />
          <MainContainer />
        </CardContext.Provider>
      </>
    </ThemeProvider>
  );
};

export default Portfolio;
