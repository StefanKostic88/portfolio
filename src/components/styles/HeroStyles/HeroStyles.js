import styled from "styled-components";

export const SectionHeroStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 104rem;
  width: 100%;
  min-height: calc(95vh - 4.8rem);
  color: ${({ theme }) => theme.textLight};
  padding: 10rem 3rem 1.5rem;
  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 8rem 3rem 1.5rem;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    padding: 6rem 2rem 3rem;
    align-items: center;
  }
  &::before {
    content: "";
    position: absolute;
    top: 80%;
    right: 0;
    width: 5px;
    height: 10%;
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

// HeadingPrimaryStyled;
export const HeadingPrimaryStyled = styled.h1`
  position: relative;
  padding-left: 1.25rem;
  line-height: 1;
  margin-bottom: 3rem;
  text-transform: uppercase;
  font-weight: 900;
  font-family: Orbitron;
  transition: all 700ms ease-in-out;
  // text-shadow: ${({ theme }) => theme.color.primary} 5px -2px 25px;
  text-shadow: ${(props) => (props.light ? "#48dbfb 5px -2px 25px;" : "none;")}


  color: ${({ theme }) => theme.textColor.light};
  @media ${({ theme }) => theme.breakpoints.lg} {
    margin-bottom: 1.5rem;
    font-size: 7.2rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 6.4rem;
    margin-bottom: 0.75rem;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    font-size: 5.4rem;
  }
  &:before {
    position: absolute;
    content: "";
    top: 10%;
    left: 0;
    height: 1ch;
    width: 1rem;
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 5px;
  }
`;

// HeroHeadingSecundaryStyled
export const HeadingSecundaryStyled = styled.h2`
  // margin-top: 6rem;
  margin-bottom: 2rem;
  line-height: 1;
  font-weight: 700;
  text-shadow: #48dbfba3 2px -1px 15px;

  color: ${({ theme }) => theme.textColor.dark};

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 3.6rem;
    margin-bottom: 1.25rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 3rem;
    margin-bottom: 0.75rem;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    font-size: 2.7rem;
    margin-bottom: 2rem;
  }
`;

// HeroHeadingTerciaryStyled

export const HeadingTerciaryStyled = styled.h3`
  line-height: 1.3;
  letter-spacing: 0.3vw;
  font-weight: 300;
  text-transform: uppercase;
  font-family: "Orbitron", sans-serif;
  color: ${({ theme }) => theme.textColor.dark};
  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 2.7rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 2.2rem;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    flex-direction: row;
    margin-bottom: auto;
    text-align: center;
    margin-top: 2rem;
    font-size: 2rem;
  }
`;

export const IconsListStyled = styled.ul`
  margin-top: 4rem;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media ${({ theme }) => theme.breakpoints.xsm} {
    flex-direction: row;
    margin-top: auto;
    gap: 1.5rem;
  }
`;

// HeroILinksStyled
export const LinksStyled = styled.a`
  margin-top: 2rem;
  padding: 0.8rem 1.6rem;
  font-size: 2.4rem;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textColor.dark};
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 2.2rem;
    padding: 0.6rem 1.4rem;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    font-size: 2rem;
  }
  &:hover {
    text-shadow: ${({ theme }) => theme.textShadow};
    // scale: 1.02;
  }
  &:focus {
    text-shadow: ${({ theme }) => theme.textShadow};
    // scale: 1.02;
    outline: none;
  }
  position: relative;

  span:nth-child(1) {
    position: absolute;
    top: -1px;
    right: 0;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  &:hover span:nth-child(1),
  &:focus span:nth-child(1) {
    top: -1px;
    right: 0;
    height: 2px;
    width: 100%;
    transform: scaleX(1);
    transform-origin: right;
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  span:nth-child(2) {
    position: absolute;
    top: 0;
    right: -1px;
    height: 100%;
    width: 2px;
    transform-origin: right;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleY(0);
    // transform-origin: top center;
    transform-origin: center bottom;
    transition: transform 200ms linear;
  }
  &:hover span:nth-child(2),
  &:focus span:nth-child(2) {
    position: absolute;
    top: 0;
    right: -1px;
    height: 100%;
    width: 2px;
    transform-origin: right;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleY(1);
    // transform-origin: center bottom;
    transform-origin: top center;
  }
  span:nth-child(3) {
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 200ms linear;
  }
  &:hover span:nth-child(3),
  &:focus span:nth-child(3) {
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 2px;
    width: 100%;

    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 200ms linear;
  }
  span:nth-child(4) {
    position: absolute;
    left: -1px;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms linear;
  }
  &:hover span:nth-child(4),
  &:focus span:nth-child(4) {
    position: absolute;
    left: -1px;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 200ms linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: scaleY(1);
    transform-origin: bottom;
    transition: transform 200ms linear;
  }
`;

// HeroIconsStyled

export const IconsStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 200ms linear;

  padding: 3px;
  width: 4rem;
  height: 4rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: ${({ theme }) => theme.border};

  svg {
    width: 2.75rem;
    height: 2.75rem;
    fill: ${({ theme }) => theme.color.primary};
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 0 0 5px 3px ${({ theme }) => theme.color.primary};
    outline: none;
  }
`;

// HeroHeadingLinesStyled
export const HeadingLinesStyled = styled.span`
  position: relative;
  width: 1.65ch;
  height: 1ch;
  display: inline-block;

  span {
    position: absolute;
    display: inline-block;
    background-color: ${({ theme }) => theme.color.primary};
    top: 60%;
    left: 10%;
    width: 80%;
    height: 5px;
    transform: translateY(-50%);
    border-radius: 3px;
  }
`;

export const AnimatedBackgroundStyled = styled.div`
  z-index: -1;
  position: absolute;
  top: 3rem;
  right: 0;
  width: 60%;

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 50%;
    top: 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 60%;
    top: 0;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 65%;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    width: 100%;
  }

  background-color: blue;
  object-fit: cover;
  img {
    width: 100%;
  }
`;
