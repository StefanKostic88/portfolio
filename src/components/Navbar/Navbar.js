// import Logo from "./Logo.js";
import { useContext, useState, useRef, useEffect } from "react";
import IntersectionObj from "../../store/intersecting-context";
import {
  NavStyled,
  NavCenterStyled,
  UlStyled,
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
  const liRefOne = useRef();
  const liRefTwo = useRef();
  const liRefThree = useRef();
  const refArr = [liRefOne, liRefTwo, liRefThree];
  const hoverEffectArr = [
    aboutHoverEfect,
    projectsHoverEfect,
    contactHoverEfect,
  ];
  console.log(hoverEffectArr);

  const ctx = useContext(IntersectionObj);

  const hamburgerMenuClickHandler = () => {
    setTimeout(() => {
      setNavIsOpened(() => !navIsOpened);
    }, 500);
  };
  useEffect(() => {
    // console.log(liRefOne.current);
    // console.log(liRefTwo.current);
    // console.log(liRefThree.current);
    // console.log(ctx.intersectionObj);
    console.log("updated");
  }, [ctx.intersectionObj]);
  const generateNavLinks = navBarArr.map((el, index) => {
    return (
      <li key={index} onClick={hamburgerMenuClickHandler} ref={refArr[index]}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <a href={el.href}>{el.title}</a>
      </li>
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
