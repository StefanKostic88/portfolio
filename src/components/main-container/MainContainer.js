import styled from "styled-components";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ContactSection from "./ContactSection/ContactSection";

const WraperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContainer = () => {
  return (
    <WraperStyled>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </WraperStyled>
  );
};
export default MainContainer;
