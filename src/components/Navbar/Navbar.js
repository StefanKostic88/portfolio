// import Logo from "./Logo.js";
import { useState } from "react";
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
  const hamburgerMenuClickHandler = () => {
    setTimeout(() => {
      setNavIsOpened(() => !navIsOpened);
    }, 500);
  };

  const generateNavLinks = navBarArr.map((el, index) => {
    return (
      <li key={index} onClick={hamburgerMenuClickHandler}>
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
