import { ThemeProvider } from "styled-components";
import { theme } from "./Theme.js";
import GlobalStyles from "./components/styles/Global.js";
import Navbar from "./components/Navbar/Navbar.js";
import MainContainer from "./components/main-container/MainContainer.js";
import Modal from "./components/modal/Modal.js";

const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <Modal /> */}
        <GlobalStyles />
        <Navbar />
        <MainContainer />
      </>
    </ThemeProvider>
  );
};

export default Portfolio;
