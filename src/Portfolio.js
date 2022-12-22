import { ThemeProvider } from "styled-components";
import { theme } from "./Theme.js";
import GlobalStyles from "./components/styles/Global.js";
import Navbar from "./components/Navbar/Navbar.js";
import MainContainer from "./components/main-container/MainContainer.js";

// const HeadingStyled = styled.h1``;

const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar />
        <MainContainer />
      </>
    </ThemeProvider>
  );
};

export default Portfolio;
