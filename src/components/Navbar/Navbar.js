import Logo from "./Logo.js";
import styled from "styled-components";
import backG from "../../7t4e.gif";
import { useEffect, useState } from "react";

const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  min-height: 4.8rem;
`;
const NavCenterStyled = styled.div`
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

const UlStyled = styled.ul`
  display: flex;
  gap: 1rem;

  li {
    padding: 1rem 1.6rem;

    a {
      color: rgba(189, 189, 189);
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
  }
  @media ${({ theme }) => {
      return theme.breakpoints.md;
    }} {
    display: ${(props) => props.toggleDisplyay};
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

const HamburgerStyled = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  box-shadow: 0 0 1px #fff;
  background-color: black;
  position: relative;
  display: none;
  @media ${({ theme }) => {
      return theme.breakpoints.md;
    }} {
    display: block;
    position: fixed;
    right: 1rem;
    z-index: 1;
  }
`;

const Bar1Styled = styled.div`
  height: 3px;
  width: 100%;
  border-radius: 3px;
  background-color: red;
  position: absolute;
  top: 50%;
`;

const navBarArr = [
  { title: "About", href: "#about", id: 1 },
  { title: "Projects", href: "#projects", id: 2 },
  { title: "Contact", href: "#contact", id: 3 },
];

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false);
  // const [hamurgerIsVisible, setHamburgerIsVisible] = useState(false);

  useEffect(() => {
    // window.addEventListener("resize", function () {
    //   if (window.innerWidth === 775) {
    //     setHamburgerIsVisible(true);
    //     console.log(hamurgerIsVisible);
    //   } else {
    //     setHamburgerIsVisible(false);
    //   }
    //   console.log(hamurgerIsVisible);
    // });
  }, []);

  const hanurgerMenuClickHandler = () => {
    setTimeout(() => {
      setNavIsOpened(() => !navIsOpened);
    }, 500);
  };

  let addStyle = navIsOpened ? "flex" : "none";

  return (
    <NavStyled>
      <NavCenterStyled>
        {/* <Logo /> */}
        <figure>
          <img src={backG} alt="" />
        </figure>
        <UlStyled toggleDisplyay={addStyle}>
          {navBarArr.map((el, index) => {
            return (
              <li key={index} onClick={hanurgerMenuClickHandler}>
                <a href={el.href}>{el.title}</a>
              </li>
            );
          })}
        </UlStyled>
        <HamburgerStyled onClick={hanurgerMenuClickHandler}>
          <Bar1Styled></Bar1Styled>
          {/* <div></div>
          <div></div> */}
        </HamburgerStyled>
      </NavCenterStyled>
    </NavStyled>
  );
};

export default Navbar;
