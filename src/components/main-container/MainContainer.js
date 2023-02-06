import { useEffect, useRef, useContext, useState } from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ContactSection from "./ContactSection/ContactSection";
import IntersectionObj from "../../store/intersecting-context";

// const refIntersection = function (curINput, threshHoldVal, setState) {
//   const options = {
//     root: null,
//     rootMargin: "150px",
//     threshold: threshHoldVal,
//   };

//   const observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         setState(true);
//       } else {
//         setState(false);
//       }
//     });
//   }, options);

//   observer.observe(curINput);
// };

const WraperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContainer = () => {
  // const [contactSectionIsIntersecting, setContactSectionIsIntersecting] =
  //   useState(false);
  // const [projectSectionIsIntersecting, setProjectSectionIsIntersecting] =
  //   useState(false);

  // const [aboutSectionIsIntersecting, setAboutSectionIsIntersecting] =
  //   useState(false);

  const contentWraperRef = useRef();
  const heroRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const intersectionContext = useContext(IntersectionObj);
  console.log();

  useEffect(() => {
    // intersectionContext.getElement(
    //   aboutRef.current,
    //   1,
    //   setAboutSectionIsIntersecting
    // );
    // intersectionContext.getElement(
    //   projectsRef.current,
    //   1,
    //   setProjectSectionIsIntersecting
    // );
    intersectionContext.getElement(aboutRef.current, 1);
    intersectionContext.getElement(projectsRef.current, 1);
    intersectionContext.getElement(contactRef.current, 1);
    // refIntersection(aboutRef.current, 1, setAboutSectionIsIntersecting);
    // refIntersection(contactRef.current, 1, setContactSectionIsIntersecting);
    // refIntersection(projectsRef.current, 1, setProjectSectionIsIntersecting);
    // intersectionContext.contactIsInterSecting(x);
  }, []);

  // console.log(intersectionContext);
  return (
    //Ovde stavi inrersection context

    <WraperStyled ref={contentWraperRef}>
      <HeroSection ref={heroRef} />
      <AboutSection ref={aboutRef} />
      <ProjectsSection ref={projectsRef} />
      <ContactSection ref={contactRef} />
    </WraperStyled>
  );
};
export default MainContainer;
