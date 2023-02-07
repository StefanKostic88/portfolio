import { Link } from "react-scroll";
import styled from "styled-components";

export const NavStyled = styled.nav`
  // position: ${(props) => (props.active ? "absolute" : "fixed")};
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  min-height: 4.8rem;
`;

export const NavCenterStyled = styled.div`
  // background-color: black;
  width: 100%;
  max-width: 130rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => {
    return theme.breakpoints.lg;
  }} {
    padding: 0 1rem 0 3rem;
  }

  figure {
    width: 6rem;
    background color: red;
    object-fit: cover;
    img {
      width: 100%;
    }
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  gap: 1rem;

  @media ${({ theme }) => {
      return theme.breakpoints.md;
    }} {
    display: ${(props) => (props.active ? "flex" : "none")};
    // display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.95);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export const NavListStyled = styled.li`
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
`;

export const SmothScrollLInkStyled = styled(Link)`
  color: ${({ theme }) => theme.textColor.dark};
  color: white;
  font-size: 2.4rem;
  text-transform: uppercase;
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
`;

export const HamburgerStyled = styled.div`
  width: 3.8rem;
  height: 3.8rem;
  cursor: pointer;
 
  border-radius: ${({ theme }) => theme.borderRadius};
  
  background-color: black;
  border: ${(props) => (props.active ? "1px solid #48dbfb;" : "none")}
  box-shadow: ${(props) =>
    props.active
      ? `rgb(255 255 255) 0px 0px 1px,
    rgb(255 255 255) 0px 0px 2px,
    rgb(255 255 255) 0px 0px 2px,
    rgb(72 219 251) 0px 0px 2px,
    rgb(72 219 251) 0px 0px 3px,
    rgb(72 219 251) 0px 0px 5px,
    rgb(72 219 251) 0px 0px 7px;`
      : null}

  transition: all 600ms ease-in-out;
  display: none;
  @media ${({ theme }) => {
    return theme.breakpoints.md;
  }} {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 1rem;
    z-index: 1;
  }
`;

export const BarStyled = styled.div`
  height: 3px;
  width: 85%;
  background-color: ${(props) => (props.active ? "transparent" : " #fff")};
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 300ms ease-in-out;
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 85%;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 500ms ease-in-out;
    background-color: ${(props) => (props.active ? "#48dbfb;" : "#fafafa")};
  }
  &::before {
    // transform: translateY(-16px);
    transform: ${(props) =>
      props.active ? "translate(0, 0) rotate(45deg);" : "translateY(-10px);"};
  }
  &::after {
    // transform: translateY(16px);
    transform: ${(props) =>
      props.active ? "translate(0, 0) rotate(-45deg);" : "translateY(10px);"};
  }
`;
