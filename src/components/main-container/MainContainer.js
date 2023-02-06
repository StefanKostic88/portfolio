import { useEffect, useRef, useContext, useState } from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ContactSection from "./ContactSection/ContactSection";
import IntersectionObj from "../../store/intersecting-context";

const WraperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContainer = () => {
  const contentWraperRef = useRef();
  const heroRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const intersectionContext = useContext(IntersectionObj);
  console.log();

  useEffect(() => {
    intersectionContext.getElement(heroRef.current, 1);
    intersectionContext.getElement(aboutRef.current, 1);
    intersectionContext.getElement(projectsRef.current, 1);
    intersectionContext.getElement(contactRef.current, 1);
  }, []);

  return (
    <WraperStyled ref={contentWraperRef}>
      <HeroSection ref={heroRef} />
      <AboutSection ref={aboutRef} />
      <ProjectsSection ref={projectsRef} />
      <ContactSection ref={contactRef} />
    </WraperStyled>
  );
};
export default MainContainer;
