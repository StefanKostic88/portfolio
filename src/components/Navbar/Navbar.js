// import Logo from "./Logo.js";
import { useContext, useState, useEffect } from "react";
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
import styled from "styled-components";

const LIstStyled = styled.li`
  padding: 1rem 1.6rem;
  position: relative;

  span:nth-child(1) {
    position: absolute;
    top: -1px;
    right: 5%;
    height: 1px;
    width: 90%;
    transition: transform 200ms linear;
    background-color: ${({ theme }) => theme.color.primary};
    transform: ${(props) => (props.active ? "scaleX(1)" : "scaleX(0)")};
    ${(props) => (props.active ? "right" : "left)")};
    box-shadow: ${({ theme }) => theme.boxShadowLinks};
  }
  span:nth-child(2) {
    position: absolute;
    top: 10%;
    right: -1px;
    height: 80%;
    width: 2px;

    transform-origin: ${(props) => (props.active ? "center bottom;" : "right")};
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadowLinks};
    transform: ${(props) => (props.active ? "scaleY(1)" : "scaleY(0)")};
  }

  span:nth-child(3) {
    position: absolute;
    left: 5%;
    bottom: -1px;
    height: 2px;
    width: 90%;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadowLinks};
    transform: ${(props) => (props.active ? "scaleX(1)" : "scaleX(0)")};
    transform-origin: ${(props) => (props.active ? "left" : "right")};
  }

  span:nth-child(4) {
    position: absolute;
    left: -1px;
    top: 10%;
    height: 80%;
    width: 2px;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadowLinks};
    transform: ${(props) => (props.active ? "scaleY(1)" : "scaleY(0)")};
    transform-origin: ${(props) => (props.active ? "bottom" : "top")};
    transition: transform 200ms linear;
  }

  a {
    color: ${({ theme }) => theme.textColor.dark};
    color: white;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 2px;
    cursor: pointer;
    &:link,
    &:active {
      font-size: 2.4rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.textLight};
    }
    &:hover,
    &:focus {
      text-shadow: ${({ theme }) => theme.textShadow};
      color: ${({ theme }) => theme.textLight};
      outline: none;
    }
  }
`;

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
      setNavIsOpened(() => !navIsOpened);
      setAboutHoverEfect(false);
      setProjectsHoverEfect(false);
      setContactHoverEfect(false);
    }, 500);
  };

  useEffect(() => {
    setAboutHoverEfect(ctx.intersectionObj.about);
    setProjectsHoverEfect(ctx.intersectionObj.project);
    setContactHoverEfect(ctx.intersectionObj.contact);

    return () => {
      // console.log(aboutHoverEfect);
    };
  }, [ctx.intersectionObj]);
  // console.log(ctx.intersectionObj);

  const generateNavLinks = navBarArr.map((el, index) => {
    return (
      <LIstStyled
        key={index}
        onClick={hamburgerMenuClickHandler}
        active={hoverEffectArr[index]}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <a href={el.href}>{el.title}</a>
      </LIstStyled>
    );
  });
  console.log(ctx.intersectionObj.heroIsVisible);

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
