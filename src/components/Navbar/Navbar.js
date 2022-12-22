import Logo from "./Logo.js";
import styled from "styled-components";
import backG from "../../7t4e.gif";

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
    display: none;
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

const Navbar = () => {
  return (
    <NavStyled>
      <NavCenterStyled>
        {/* <Logo /> */}
        <figure>
          <img src={backG} alt="" />
        </figure>
        <UlStyled>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/about">Projects</a>
          </li>
          <li>
            <a href="/about">Contact</a>
          </li>
        </UlStyled>
        <HamburgerStyled>
          <Bar1Styled></Bar1Styled>
          {/* <div></div>
          <div></div> */}
        </HamburgerStyled>
      </NavCenterStyled>
    </NavStyled>
  );
};

export default Navbar;
