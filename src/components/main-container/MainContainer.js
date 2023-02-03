import { useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ContactSection from "./ContactSection/ContactSection";
import intersectionObj from "../../store/intersecting-context";

const refIntersection = function (curINput, threshHoldVal) {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: threshHoldVal,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
      } else {
      }
    });
  }, options);

  observer.observe(curINput);
};

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

  const intersectionContext = useContext(intersectionObj);

  useEffect(() => {
    // console.log(heroRef.current);
    // console.log(aboutRef.current);
    // console.log(projectsRef.current);
    // console.log(contactRef.current);
    refIntersection(contactRef.current, 0.9);
  }, []);
  return (
    //Ovde stavi inrersection context
    <intersectionObj.Provider
      value={{
        sectionIsIntersecting: false,
        obj: { title: "" },
      }}
    >
      <WraperStyled ref={contentWraperRef}>
        <HeroSection ref={heroRef} />
        <AboutSection ref={aboutRef} />
        <ProjectsSection ref={projectsRef} />
        <ContactSection ref={contactRef} />
      </WraperStyled>
    </intersectionObj.Provider>
  );
};
export default MainContainer;
