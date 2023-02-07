import { useEffect, useRef, useContext } from "react";

import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ContactSection from "./ContactSection/ContactSection";
import IntersectionObj from "../../store/intersecting-context";

import { WraperStyled } from "../styles/WraperStyles/WraperStyles";

const MainContainer = () => {
  const heroRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const intersectionContext = useContext(IntersectionObj);

  useEffect(() => {
    intersectionContext.getElement(heroRef.current, 1);
    intersectionContext.getElement(aboutRef.current, 1);
    intersectionContext.getElement(projectsRef.current, 1);
    intersectionContext.getElement(contactRef.current, 1);
  }, []);

  return (
    <WraperStyled>
      <HeroSection ref={heroRef} />
      <AboutSection ref={aboutRef} />
      <ProjectsSection ref={projectsRef} />
      <ContactSection ref={contactRef} />
    </WraperStyled>
  );
};
export default MainContainer;
