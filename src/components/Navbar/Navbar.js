// import Logo from "./Logo.js";
import { useContext, useState, useEffect } from "react";
// import { Link, animateScroll } from "react-scroll";
import IntersectionObj from "../../store/intersecting-context";
import {
  NavStyled,
  NavCenterStyled,
  UlStyled,
  NavListStyled,
  SmothScrollLInkStyled,
  HamburgerStyled,
  BarStyled,
} from "../styles/NavbarStyles/NavbarStyles";
import backG from "../../assets/imgs/7t4e.gif";

import navBarArr from "../../assets/data/navbarLinksData";

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const [aboutHoverEfect, setAboutHoverEfect] = useState(false);
  const [projectsHoverEfect, setProjectsHoverEfect] = useState(false);
  const [contactHoverEfect, setContactHoverEfect] = useState(false);

  const hoverEffectArr = [
    aboutHoverEfect,
    projectsHoverEfect,
    contactHoverEfect,
  ];

  const ctx = useContext(IntersectionObj);

  const hamburgerMenuClickHandler = () => {
    setTimeout(() => {
      setNavIsOpened((state) => !state);
    }, 700);
  };
  useEffect(() => {
    setAboutHoverEfect(ctx.intersectionObj.about);
    setProjectsHoverEfect(ctx.intersectionObj.project);
    setContactHoverEfect(ctx.intersectionObj.contact);
    if (window.innerWidth < 776) {
      setAboutHoverEfect(false);
      setProjectsHoverEfect(false);
      setContactHoverEfect(false);
    }
  }, [
    ctx.intersectionObj.about,
    ctx.intersectionObj.project,
    ctx.intersectionObj.contact,
    navIsOpened,
  ]);

  const generateNavLinks = navBarArr.map((el, index) => {
    return (
      <NavListStyled key={index} active={hoverEffectArr[index]}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <SmothScrollLInkStyled
          key={index}
          to={el.href}
          smooth
          duration={300}
          offset={-50}
          onClick={hamburgerMenuClickHandler}
        >
          {el.title}
        </SmothScrollLInkStyled>
      </NavListStyled>
    );
  });

  return (
    <NavStyled>
      <NavCenterStyled>
        {/* <Logo /> */}
        <figure>
          <img src={backG} alt="" />
        </figure>
        <UlStyled active={navIsOpened}>{generateNavLinks}</UlStyled>

        <HamburgerStyled
          onClick={hamburgerMenuClickHandler}
          active={navIsOpened}
        >
          <BarStyled active={navIsOpened} />
        </HamburgerStyled>
      </NavCenterStyled>
    </NavStyled>
  );
};

export default Navbar;
